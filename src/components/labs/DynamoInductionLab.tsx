import React, { useState, useEffect, useRef } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  RotateCcw,
  Play,
  Pause,
  Zap,
  Activity,
  Sparkles,
  CheckCircle2,
  Gauge,
  Sliders,
} from 'lucide-react';
import { MathRenderer } from '../MathRenderer';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export const DynamoInductionLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Dynamo physical parameters
  const [turnsN, setTurnsN] = useState<number>(200); // Turns
  const [fieldB, setFieldB] = useState<number>(0.5); // Tesla
  const [areaA, setAreaA] = useState<number>(0.04); // m^2 (e.g. 20cm x 20cm)
  const [frequencyF, setFrequencyF] = useState<number>(50); // Hz (Egyptian standard grid)
  const [dynamoMode, setDynamoMode] = useState<'ac' | 'dc'>('ac'); // AC slip rings vs DC commutator
  const loadResistance = 10; // Ohms

  // Animation & angle state
  const [angleDeg, setAngleDeg] = useState<number>(0); // 0 to 360 degrees
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Angular velocity omega = 2 * pi * f (rad/s)
  const omega = 2 * Math.PI * frequencyF;

  // Maximum / Peak EMF: E_max = N * B * A * omega
  const emfMax = turnsN * fieldB * areaA * omega;

  // Effective RMS EMF: E_eff = E_max / sqrt(2) = 0.7071 * E_max
  const emfEff = emfMax / Math.SQRT2;

  // Average EMF over 1/4 cycle from normal: E_avg = (2 / pi) * E_max = 4 * N * B * A * f
  const emfAvgQuarter = (2 / Math.PI) * emfMax;

  // Angle in radians for calculations (angle with field normal)
  const angleRad = (angleDeg * Math.PI) / 180;

  // Instantaneous EMF:
  // When theta = 0 (coil perpendicular to B, normal parallel to B), EMF = 0
  // When theta = 90 deg (coil parallel to B), EMF = E_max
  const rawSin = Math.sin(angleRad);
  const instantaneousEMF = dynamoMode === 'ac' ? emfMax * rawSin : emfMax * Math.abs(rawSin);

  // Instantaneous current
  const instantaneousCurrent = instantaneousEMF / loadResistance;

  // Magnetic flux through coil: Phi = B * A * cos(theta)
  const magneticFlux = fieldB * areaA * Math.cos(angleRad);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
      return;
    }

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const deltaSec = (time - lastTimeRef.current) / 1000;
        // Visual rotation speed: scaled for human eye tracking
        const visualDegPerSec = (frequencyF * 36) * speedMultiplier;
        setAngleDeg((prev) => (prev + visualDegPerSec * deltaSec) % 360);
      }
      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, frequencyF, speedMultiplier]);

  // Format helpers
  const formatNum = (val: number, decimals = 2) => {
    const formatted = val.toFixed(decimals);
    return isArabic ? toHindiDigits(formatted) : formatted;
  };

  // 3D projection calculations for the rotating coil in SVG
  const cx = 200;
  const cy = 150;
  const coilW = 110;
  const coilH = 80;
  // Rotation around vertical Y-axis: width scales with cos(angleRad)
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);
  const isFacingFront = cosA >= 0;

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent p-4 rounded-xl border border-amber-500/20">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-amber-400">
              {isArabic
                ? 'مولد التيار المتردد والدينامو (الحث الكهرومغناطيسي)'
                : 'AC/DC Electric Dynamo & Electromagnetic Induction'}
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold uppercase">
              Faraday & Lenz
            </span>
          </div>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isArabic
              ? 'دراسة توليد القوة الدافعة الكهربية المستحثة بتدوير ملف في مجال مغناطيسي منتظم ومقارنة حلقات الانزلاق مع العاكس المعدني'
              : 'Investigate induced sinusoidal EMF in rotating armatures, peak vs RMS values, and slip rings vs split-ring commutator'}
          </p>
        </div>

        {/* Dynamo Mode Switch */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-700/80 shrink-0">
          <button
            onClick={() => setDynamoMode('ac')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              dynamoMode === 'ac'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isArabic ? 'تيار متردد AC (حلقتان)' : 'AC Dynamo (Slip Rings)'}
          </button>
          <button
            onClick={() => setDynamoMode('dc')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              dynamoMode === 'dc'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isArabic ? 'تيار موحد الاتجاه DC (نصفا أسطوانة)' : 'DC Dynamo (Split Commutator)'}
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Simulation & Oscilloscope */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Physical Dynamo Hardware Visualizer (SVG) */}
        <div
          className={`lg:col-span-7 rounded-xl border p-4 sm:p-5 flex flex-col justify-between ${
            isContrast
              ? 'bg-black border-amber-400'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-900/70 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              {isArabic ? 'المولد الكهرومغناطيسي والمجال' : 'Armature In Magnetic Field'}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-300">
                θ = {formatNum(angleDeg, 0)}°
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setAngleDeg(0)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                title="Reset to 0°"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* SVG Visualizer */}
          <div className="relative w-full h-[270px] sm:h-[300px] flex items-center justify-center my-2 select-none overflow-hidden rounded-lg bg-slate-950/60 border border-slate-800/80">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              <defs>
                {/* North Magnet Gradient */}
                <linearGradient id="northPoleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>
                {/* South Magnet Gradient */}
                <linearGradient id="southPoleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Magnetic Poles */}
              {/* North Pole (Red, Left) */}
              <path
                d="M 20 60 L 70 80 L 70 220 L 20 240 Z"
                fill="url(#northPoleGrad)"
                stroke="#f87171"
                strokeWidth="1.5"
              />
              <text x="45" y="155" fill="#ffffff" fontWeight="bold" fontSize="18" textAnchor="middle">
                N
              </text>

              {/* South Pole (Blue, Right) */}
              <path
                d="M 330 80 L 380 60 L 380 240 L 330 220 Z"
                fill="url(#southPoleGrad)"
                stroke="#60a5fa"
                strokeWidth="1.5"
              />
              <text x="355" y="155" fill="#ffffff" fontWeight="bold" fontSize="18" textAnchor="middle">
                S
              </text>

              {/* Magnetic Field Lines (B vectors traversing left to right) */}
              {[100, 125, 150, 175, 200].map((yLine, idx) => (
                <g key={`b-line-${idx}`} opacity="0.35">
                  <line
                    x1="75"
                    y1={yLine}
                    x2="325"
                    y2={yLine}
                    stroke="#38bdf8"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <polygon
                    points={`200,${yLine - 3} 206,${yLine} 200,${yLine + 3}`}
                    fill="#38bdf8"
                  />
                </g>
              ))}

              {/* Central Shaft (Axle) */}
              <line
                x1={cx}
                y1="35"
                x2={cx}
                y2="265"
                stroke="#64748b"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Rotating Rectangular Armature Coil */}
              {/* Perspective Projection: Width shrinks by |cos(theta)|, slant angle based on sin(theta) */}
              <g transform={`translate(${cx}, ${cy})`}>
                {/* Normal vector vector arrow */}
                <line
                  x1="0"
                  y1="0"
                  x2={-sinA * 55}
                  y2={cosA * 20}
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeDasharray="2 2"
                />
                <circle
                  cx={-sinA * 55}
                  cy={cosA * 20}
                  r="3"
                  fill="#fbbf24"
                />

                {/* Coil Outline */}
                <polygon
                  points={`
                    ${-cosA * (coilW / 2)},${-coilH / 2 + sinA * 10}
                    ${cosA * (coilW / 2)},${-coilH / 2 - sinA * 10}
                    ${cosA * (coilW / 2)},${coilH / 2 - sinA * 10}
                    ${-cosA * (coilW / 2)},${coilH / 2 + sinA * 10}
                  `}
                  fill={isFacingFront ? 'rgba(251, 191, 36, 0.25)' : 'rgba(245, 158, 11, 0.15)'}
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                  filter={Math.abs(instantaneousEMF) > emfMax * 0.7 ? 'url(#glow)' : undefined}
                />

                {/* Coil Face Normal Marker */}
                <text
                  x={-sinA * 65}
                  y={cosA * 25}
                  fill="#fbbf24"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  n̂
                </text>
              </g>

              {/* Slip Rings vs Commutator Lower Assembly */}
              <g transform="translate(200, 240)">
                {dynamoMode === 'ac' ? (
                  // Two Continuous Bronze Slip Rings
                  <g>
                    <ellipse cx="-12" cy="0" rx="8" ry="4" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
                    <ellipse cx="12" cy="0" rx="8" ry="4" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
                    {/* Carbon Brushes */}
                    <rect x="-24" y="-3" width="6" height="6" fill="#475569" stroke="#94a3b8" />
                    <rect x="18" y="-3" width="6" height="6" fill="#475569" stroke="#94a3b8" />
                  </g>
                ) : (
                  // Split-ring Commutator (Two Half Cylinders with insulating gap)
                  <g>
                    <path
                      d="M -14 -4 A 14 6 0 0 1 14 -4"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="3"
                      strokeDasharray="16 3"
                    />
                    <path
                      d="M -14 4 A 14 6 0 0 0 14 4"
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="3"
                      strokeDasharray="16 3"
                    />
                    {/* Carbon Brushes */}
                    <rect x="-20" y="-3" width="5" height="6" fill="#475569" stroke="#94a3b8" />
                    <rect x="15" y="-3" width="5" height="6" fill="#475569" stroke="#94a3b8" />
                  </g>
                )}

                {/* External Circuit Wire & Load Bulb */}
                <path
                  d="M -22 3 L -50 3 L -50 40 L -15 40 M 15 40 L 50 40 L 50 3 L 20 3"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />

                {/* Output Indicator Bulb */}
                <g transform="translate(0, 40)">
                  <circle
                    cx="0"
                    cy="0"
                    r="9"
                    fill={
                      Math.abs(instantaneousEMF) > 5
                        ? `rgba(253, 224, 71, ${Math.min(1.0, Math.abs(instantaneousEMF) / emfMax)})`
                        : '#334155'
                    }
                    stroke="#facc15"
                    strokeWidth="1.5"
                    filter={Math.abs(instantaneousEMF) > emfMax * 0.4 ? 'url(#glow)' : undefined}
                  />
                  <line x1="-4" y1="-4" x2="4" y2="4" stroke="#eab308" strokeWidth="1" />
                  <line x1="-4" y1="4" x2="4" y2="-4" stroke="#eab308" strokeWidth="1" />
                </g>
              </g>

              {/* Status Banner inside SVG */}
              <text x="200" y="25" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">
                {isArabic
                  ? Math.abs(cosA) < 0.1
                    ? '⚡ أقصى ق.د.ك مستحثة (مستوى الملف موازٍ للمجال، معدل قطع الفيض قيمة عظمى)'
                    : Math.abs(sinA) < 0.1
                    ? '🛑 ق.د.ك مستحثة = صفر (مستوى الملف عمودي على المجال، الفيض قيمة عظمى)'
                    : '🔄 توليد مستمر للتيار الكهرومغناطيسي'
                  : Math.abs(cosA) < 0.1
                  ? '⚡ Maximum EMF (Coil parallel to B, dΦ/dt is maximum)'
                  : Math.abs(sinA) < 0.1
                  ? '🛑 Zero EMF (Coil normal parallel to B, Φ is maximum)'
                  : '🔄 Active Electromagnetic Generation'}
              </text>
            </svg>
          </div>

          {/* Interactive Scrubbing Controls */}
          <div className="space-y-2 mt-2 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'زاوية الدوران اليدوية (θ)' : 'Manual Angle Control (θ)'}
              </span>
              <span className="font-mono text-amber-400 font-bold">{formatNum(angleDeg, 0)}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={angleDeg}
              onChange={(e) => {
                setIsPlaying(false);
                setAngleDeg(parseFloat(e.target.value));
              }}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>0° (Normal)</span>
              <span>90° (Max EMF)</span>
              <span>180° (Zero)</span>
              <span>270° (-Max)</span>
              <span>360°</span>
            </div>
          </div>
        </div>

        {/* Right Column: Oscilloscope Waveform & Quantitative Readouts */}
        <div className="lg:col-span-5 space-y-4">
          {/* Digital Oscilloscope Screen */}
          <div
            className={`rounded-xl border p-4 ${
              isContrast
                ? 'bg-black border-emerald-400'
                : 'bg-slate-950 border-emerald-500/30 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-500/20">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5" />
                {isArabic ? 'شاشة راسم الذبذبات (أوسيلوسكوب)' : 'Oscilloscope Voltage Waveform'}
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40">
                {dynamoMode === 'ac' ? 'AC SINE WAVE' : 'RECTIFIED PULSATING DC'}
              </span>
            </div>

            {/* Canvas-Like SVG Waveform */}
            <div className="relative w-full h-[150px] bg-slate-950 rounded-lg border border-emerald-500/20 p-1 overflow-hidden">
              <svg viewBox="0 0 360 140" className="w-full h-full">
                {/* Oscilloscope Grid */}
                <defs>
                  <pattern id="grid" width="36" height="28" patternUnits="userSpaceOnUse">
                    <path d="M 36 0 L 0 0 0 28" fill="none" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Center Zero Voltage Axis */}
                <line x1="0" y1="70" x2="360" y2="70" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Peak Limits */}
                <line x1="0" y1="20" x2="360" y2="20" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.8" strokeDasharray="2 2" />
                <line x1="0" y1="120" x2="360" y2="120" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.8" strokeDasharray="2 2" />

                {/* Mathematical Wave Path: 2 full cycles (0 to 720 deg mapped to 0-360 px) */}
                {(() => {
                  let pathD = '';
                  for (let x = 0; x <= 360; x += 2) {
                    const thetaCycle = (x / 180) * Math.PI; // 2 cycles in 360px
                    let val = Math.sin(thetaCycle);
                    if (dynamoMode === 'dc') {
                      val = Math.abs(val);
                    }
                    // Y axis: 70 is zero, 20 is +E_max, 120 is -E_max (amplitude = 50)
                    const y = 70 - val * 50;
                    pathD += (x === 0 ? 'M ' : 'L ') + `${x} ${y.toFixed(1)} `;
                  }
                  return (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  );
                })()}

                {/* Current Angle Tracking Dot */}
                {(() => {
                  // Map angleDeg (0-360) to x position (0-180 for first cycle)
                  const xDot = (angleDeg / 360) * 180;
                  const rad = (angleDeg * Math.PI) / 180;
                  let val = Math.sin(rad);
                  if (dynamoMode === 'dc') val = Math.abs(val);
                  const yDot = 70 - val * 50;
                  return (
                    <g>
                      {/* Vertical tracker bar */}
                      <line
                        x1={xDot}
                        y1="0"
                        x2={xDot}
                        y2="140"
                        stroke="rgba(251, 191, 36, 0.6)"
                        strokeWidth="1.2"
                      />
                      {/* Bright glowing dot */}
                      <circle cx={xDot} cy={yDot} r="5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
                    </g>
                  );
                })()}
              </svg>

              {/* Instantaneous Readout Badge */}
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-slate-900/90 border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                E(t) = {formatNum(instantaneousEMF, 1)} V | I(t) = {formatNum(instantaneousCurrent, 2)} A
              </div>
            </div>
          </div>

          {/* Real-time Scientific Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span>{isArabic ? 'القيمة العظمى' : 'Peak Voltage'}</span>
                <MathRenderer math="E_{\max}" inline lang={lang} />
              </span>
              <span className="text-base sm:text-lg font-black text-amber-400 font-mono block my-0.5">
                {formatNum(emfMax, 1)} V
              </span>
              <span className="text-[10px] text-slate-500 block">
                <MathRenderer math="= N B A \omega" inline lang={lang} />
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span>{isArabic ? 'القيمة الفعالة' : 'RMS Effective'}</span>
                <MathRenderer math="E_{\text{eff}}" inline lang={lang} />
              </span>
              <span className="text-base sm:text-lg font-black text-sky-400 font-mono block my-0.5">
                {formatNum(emfEff, 1)} V
              </span>
              <span className="text-[10px] text-slate-500 block">
                <MathRenderer math="= \frac{E_{\max}}{\sqrt{2}} \approx 0.707 E_{\max}" inline lang={lang} />
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span>{isArabic ? 'الفيض اللحظي' : 'Instant Flux'}</span>
                <MathRenderer math="\Phi_m" inline lang={lang} />
              </span>
              <span className="text-base sm:text-lg font-black text-purple-400 font-mono block my-0.5">
                {formatNum(magneticFlux * 1000, 2)} mWb
              </span>
              <span className="text-[10px] text-slate-500 block">
                <MathRenderer math="= B A \cos\theta" inline lang={lang} />
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span>{isArabic ? 'متوسط ربع دورة' : 'Avg Quarter'}</span>
                <MathRenderer math="E_{\text{avg}}" inline lang={lang} />
              </span>
              <span className="text-base sm:text-lg font-black text-emerald-400 font-mono block my-0.5">
                {formatNum(emfAvgQuarter, 1)} V
              </span>
              <span className="text-[10px] text-slate-500 block">
                <MathRenderer math="= \frac{2}{\pi} E_{\max}" inline lang={lang} />
              </span>
            </div>
          </div>

          {/* Speed & Multiplier Selection */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">
              {isArabic ? 'سرعة المحاكاة البصرية:' : 'Visual Speed:'}
            </span>
            <div className="flex items-center gap-1">
              {[0.25, 0.5, 1.0, 2.0].map((mult) => (
                <button
                  key={mult}
                  onClick={() => setSpeedMultiplier(mult)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                    speedMultiplier === mult
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {mult}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sliders & Parameter Control Deck */}
      <div
        className={`rounded-xl border p-4 sm:p-5 ${
          isContrast
            ? 'bg-black border-amber-400'
            : isLight
            ? 'bg-slate-50 border-slate-200'
            : 'bg-slate-900/80 border-slate-800'
        }`}
      >
        <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5" />
          {isArabic ? 'لوحة التحكم في متغيرات المولد الدينامو' : 'Dynamo Physical Parameters Deck'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Number of Turns (N) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'عدد لفات الملف (N)' : 'Number of Turns (N)'}
              </span>
              <span className="font-mono font-bold text-amber-400">{formatNum(turnsN, 0)} turns</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={turnsN}
              onChange={(e) => setTurnsN(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>50</span>
              <span>500</span>
            </div>
          </div>

          {/* Magnetic Field Density (B) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'كثافة الفيض المغناطيسي (B)' : 'Magnetic Flux Density (B)'}
              </span>
              <span className="font-mono font-bold text-sky-400">{formatNum(fieldB, 2)} T</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2.0"
              step="0.05"
              value={fieldB}
              onChange={(e) => setFieldB(parseFloat(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>0.1 T</span>
              <span>2.0 T</span>
            </div>
          </div>

          {/* Coil Area (A) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'مساحة مقطع الملف (A)' : 'Coil Area (A)'}
              </span>
              <span className="font-mono font-bold text-emerald-400">
                {formatNum(areaA * 10000, 0)} cm² ({formatNum(areaA, 3)} m²)
              </span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.20"
              step="0.005"
              value={areaA}
              onChange={(e) => setAreaA(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>100 cm²</span>
              <span>2000 cm²</span>
            </div>
          </div>

          {/* Frequency (f) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'تردد الدوران (f)' : 'Rotation Frequency (f)'}
              </span>
              <span className="font-mono font-bold text-purple-400">{formatNum(frequencyF, 0)} Hz</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={frequencyF}
              onChange={(e) => setFrequencyF(parseInt(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>10 Hz</span>
              <span>50 Hz (Standard)</span>
              <span>100 Hz</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry Curriculum Examination Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <h5 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <span>{isArabic ? 'الوضع العمودي (الوضع الصفري)' : 'Normal / Zero Position'}</span>
              <MathRenderer math="(\theta = 0^\circ)" inline lang={lang} />
            </h5>
          </div>
          <div className="text-[11px] leading-relaxed text-slate-400">
            <MathRenderer
              text={
                isArabic
                  ? 'مستوى الملف عمودي على خطوط الفيض (العمودي موازٍ للمجال). الفيض المغناطيسي $\\Phi_m$ نهاية عظمى، ولكن معدل قطع خطوط الفيض ($\\Delta\\Phi / \\Delta t$) وق.د.ك المستحثة = صفر.'
                  : 'Coil plane is perpendicular to $B$ (normal is parallel to $B$). Magnetic flux $\\Phi_m$ is maximum, but rate of change $\\Delta\\Phi/\\Delta t$ and induced EMF = 0.'
              }
              lang={lang}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <h5 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <span>{isArabic ? 'الوضع الموازي (القيمة العظمى)' : 'Parallel / Peak Position'}</span>
              <MathRenderer math="(\theta = 90^\circ)" inline lang={lang} />
            </h5>
          </div>
          <div className="text-[11px] leading-relaxed text-slate-400">
            <MathRenderer
              text={
                isArabic
                  ? 'مستوى الملف موازٍ لخطوط الفيض (العمودي عمودي على المجال). الفيض المغناطيسي المار بالملف = صفر، ولكن معدل قطع خطوط الفيض وق.د.ك المستحثة نهاية عظمى ($E_{\\max}$).'
                  : 'Coil plane is parallel to field lines. Magnetic flux traversing coil = 0, but rate of flux cutting $\\Delta\\Phi/\\Delta t$ and induced EMF reach peak value ($E_{\\max}$).'
              }
              lang={lang}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <h5 className="text-xs font-bold text-slate-200">
              {isArabic ? 'وظيفة المقوم المعدني (العاكس)' : 'Split Commutator Function'}
            </h5>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-400">
            {isArabic
              ? 'استبدال حلقتي الانزلاق بأسطوانة معدنية مشقوقة لنصفين معزولين يتبادلان التلامس مع الفرشاتين كل نصف دورة عند مرور الملف بالوضع العمودي، فيتوحد اتجاه التيار في الدائرة الخارجية.'
              : 'Replacing the two slip rings with a split-ring commutator swaps brush contacts every half cycle at zero EMF, rectifying current into unidirectional pulsating DC.'}
          </p>
        </div>
      </div>
    </div>
  );
};
