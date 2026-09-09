import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../i18n/translations';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  Zap,
  Play,
  Pause,
  RotateCcw,
  Activity,
  Gauge,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const InteractiveDynamicsMotion: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  // Sub-mode: 'pulley_system' | 'harmonic_energy'
  const [activeTab, setActiveTab] = useState<'pulley_system' | 'harmonic_energy'>('pulley_system');

  // --- PULLEY / CONNECTED BODIES STATE ---
  const [m1, setM1] = useState<number>(6); // kg (on plane)
  const [m2, setM2] = useState<number>(10); // kg (hanging)
  const [thetaDeg, setThetaDeg] = useState<number>(30); // degrees incline
  const [muK, setMuK] = useState<number>(0.15); // coefficient of kinetic friction
  const [isSimRunning, setIsSimRunning] = useState<boolean>(false);
  const [simTime, setSimTime] = useState<number>(0);

  // --- HARMONIC OSCILLATOR STATE ---
  const [springM, setSpringM] = useState<number>(2); // kg
  const [springK, setSpringK] = useState<number>(50); // N/m
  const [amplitude, setAmplitude] = useState<number>(4); // m
  const [oscTime, setOscTime] = useState<number>(0);
  const [isOscRunning, setIsOscRunning] = useState<boolean>(true);

  // Animation frame refs
  const animRef = useRef<number | null>(null);

  // Constants
  const g = 9.8; // m/s^2

  // Pulley System Physics Calculations
  const thetaRad = (thetaDeg * Math.PI) / 180;
  const sinTheta = Math.sin(thetaRad);
  const cosTheta = Math.cos(thetaRad);

  // Normal reaction on plane
  const normalReaction = m1 * g * cosTheta;
  // Maximum friction force
  const frictionForce = muK * normalReaction;
  // Driving force along the string (assuming motion towards m2)
  const drivingForce = m2 * g - m1 * g * sinTheta - frictionForce;

  // Acceleration (m/s^2)
  const acceleration = Math.max(0, drivingForce / (m1 + m2));
  // String Tension T (N)
  const tension = m2 * (g - acceleration);
  // Thrust on pulley R (N)
  const thrustOnPulley = tension * Math.sqrt(2 * (1 + sinTheta));

  // Current kinematics for Pulley system
  const currentVelocity = acceleration * simTime;
  const currentDistance = 0.5 * acceleration * simTime * simTime;

  // Harmonic Oscillator Physics Calculations
  const omega = Math.sqrt(springK / springM); // rad/s
  const oscPeriod = (2 * Math.PI) / omega; // s
  const currentX = amplitude * Math.cos(omega * oscTime);
  const currentV = -amplitude * omega * Math.sin(omega * oscTime);
  const kineticEnergy = 0.5 * springM * currentV * currentV;
  const potentialEnergy = 0.5 * springK * currentX * currentX;
  const totalEnergy = kineticEnergy + potentialEnergy;

  // Pulley Animation loop
  useEffect(() => {
    if (!isSimRunning || activeTab !== 'pulley_system') return;

    let lastT = performance.now();
    const update = (now: number) => {
      const dt = (now - lastT) / 1000;
      lastT = now;

      setSimTime((prev) => {
        const next = prev + dt;
        // Limit total travel distance to 6 meters
        if (0.5 * acceleration * next * next > 6.0) {
          setIsSimRunning(false);
          return prev;
        }
        return next;
      });

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isSimRunning, activeTab, acceleration]);

  // Harmonic Animation loop
  useEffect(() => {
    if (!isOscRunning || activeTab !== 'harmonic_energy') return;

    let lastT = performance.now();
    const update = (now: number) => {
      const dt = (now - lastT) / 1000;
      lastT = now;
      setOscTime((prev) => (prev + dt) % 60);
      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isOscRunning, activeTab]);

  const handleResetPulley = () => {
    setIsSimRunning(false);
    setSimTime(0);
  };

  const handleResetOsc = () => {
    setOscTime(0);
  };

  return (
    <div className="space-y-6">
      {/* Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold text-slate-200">
            {isArabic
              ? 'مختبر الميكانيكا الحركية وقوانين نيوتن وحفظ الطاقة'
              : 'Analytical Kinetics, Newton Laws & Energy Conservation Lab'}
          </h4>
        </div>

        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('pulley_system')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'pulley_system'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{isArabic ? 'منظومة البكرات والأجسام المقيدة' : 'Incline & Pulley System'}</span>
          </button>
          <button
            onClick={() => setActiveTab('harmonic_energy')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'harmonic_energy'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الاهتزاز وحفظ الطاقة الميكانيكية' : 'Harmonic Energy Exchange'}</span>
          </button>
        </div>
      </div>

      {/* MODE 1: PULLEY & CONNECTED BODIES */}
      {activeTab === 'pulley_system' && (
        <div className="space-y-6">
          {/* Main Simulation View Card */}
          <div
            className={`rounded-2xl p-5 border relative overflow-hidden ${
              isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-slate-950/80 border-slate-800 shadow-xl'
            }`}
          >
            {/* Real-time Dynamic Readouts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-slate-800/80 pb-4 mb-4">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-0.5">
                <span className="text-[10px] text-slate-400 font-semibold block">
                  {isArabic ? 'العجلة المشتركة (a):' : 'System Accel (a):'}
                </span>
                <span className="text-base font-black font-mono text-amber-400">
                  {isArabic ? toHindiDigits(acceleration.toFixed(2)) : acceleration.toFixed(2)}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">m/s²</span>
                </span>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-0.5">
                <span className="text-[10px] text-slate-400 font-semibold block">
                  {isArabic ? 'الشد في الخيط (T):' : 'String Tension (T):'}
                </span>
                <span className="text-base font-black font-mono text-cyan-400">
                  {isArabic ? toHindiDigits(tension.toFixed(2)) : tension.toFixed(2)}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">N</span>
                </span>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-0.5">
                <span className="text-[10px] text-slate-400 font-semibold block">
                  {isArabic ? 'الضغط على البكرة (R):' : 'Pulley Thrust (R):'}
                </span>
                <span className="text-base font-black font-mono text-emerald-400">
                  {isArabic ? toHindiDigits(thrustOnPulley.toFixed(2)) : thrustOnPulley.toFixed(2)}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">N</span>
                </span>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-0.5">
                <span className="text-[10px] text-slate-400 font-semibold block">
                  {isArabic ? 'السرعة الآن v(t):' : 'Current Velocity v(t):'}
                </span>
                <span className="text-base font-black font-mono text-indigo-400">
                  {isArabic ? toHindiDigits(currentVelocity.toFixed(2)) : currentVelocity.toFixed(2)}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">m/s</span>
                </span>
              </div>
            </div>

            {/* SVG Visual Canvas */}
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 680 300" className="w-full h-auto select-none">
                <defs>
                  <linearGradient id="rampGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
                  </marker>
                </defs>

                {/* Ground */}
                <line x1="20" y1="260" x2="660" y2="260" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />

                {/* Incline Wedge Geometry */}
                {/* Vertex at (420, 90), base left (100, 260), base right (420, 260) */}
                {(() => {
                  const pulleyX = 420;
                  const pulleyY = 90;
                  const rampBaseX = 90;
                  const rampBaseY = 260;

                  // Distance on ramp for m1
                  const rampLen = Math.hypot(pulleyX - rampBaseX, rampBaseY - pulleyY);
                  const normX = (pulleyX - rampBaseX) / rampLen;
                  const normY = (pulleyY - rampBaseY) / rampLen;

                  // Box 1 position along ramp (moves toward pulley as distance increases)
                  const boxFraction = Math.min(0.85, 0.35 + (currentDistance / 6.0) * 0.45);
                  const b1X = rampBaseX + normX * rampLen * boxFraction;
                  const b1Y = rampBaseY + normY * rampLen * boxFraction;

                  // Box 2 position (hanging downwards from pulley)
                  const b2X = pulleyX + 16;
                  const b2Y = pulleyY + 50 + (currentDistance / 6.0) * 90;

                  return (
                    <g>
                      {/* Ramp Wedge Polygon */}
                      <polygon
                        points={`${rampBaseX},${rampBaseY} ${pulleyX},${pulleyY} ${pulleyX},${rampBaseY}`}
                        fill="url(#rampGrad)"
                        stroke="#475569"
                        strokeWidth="2"
                      />

                      {/* Incline Angle Arc */}
                      <path
                        d={`M ${rampBaseX + 45} ${rampBaseY} A 45 45 0 0 0 ${rampBaseX + 40} ${rampBaseY - 20}`}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                      />
                      <text x={rampBaseX + 55} y={rampBaseY - 8} fill="#f59e0b" fontSize="12" fontWeight="bold">
                        θ = {isArabic ? toHindiDigits(thetaDeg) : thetaDeg}°
                      </text>

                      {/* Pulley Wheel */}
                      <circle cx={pulleyX} cy={pulleyY} r="16" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                      <circle cx={pulleyX} cy={pulleyY} r="4" fill="#f8fafc" />

                      {/* String along ramp to m1 */}
                      <line
                        x1={pulleyX - normY * 16}
                        y1={pulleyY + normX * 16}
                        x2={b1X}
                        y2={b1Y - 14}
                        stroke="#e2e8f0"
                        strokeWidth="2"
                      />

                      {/* String hanging down to m2 */}
                      <line
                        x1={pulleyX + 16}
                        y1={pulleyY}
                        x2={b2X}
                        y2={b2Y}
                        stroke="#e2e8f0"
                        strokeWidth="2"
                      />

                      {/* Box 1 (on ramp) */}
                      <g transform={`translate(${b1X}, ${b1Y}) rotate(${-thetaDeg})`}>
                        <rect x="-24" y="-30" width="48" height="30" rx="4" fill="#6366f1" stroke="#a5b4fc" strokeWidth="2" />
                        <text x="0" y="-10" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">
                          m₁ = {isArabic ? toHindiDigits(m1) : m1}kg
                        </text>
                      </g>

                      {/* Box 2 (hanging) */}
                      <g transform={`translate(${b2X}, ${b2Y})`}>
                        <rect x="-20" y="0" width="40" height="40" rx="4" fill="#10b981" stroke="#6ee7b7" strokeWidth="2" />
                        <text x="0" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                          m₂ = {isArabic ? toHindiDigits(m2) : m2}kg
                        </text>
                        {/* Gravity force arrow */}
                        <line x1="0" y1="42" x2="0" y2="70" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
                        <text x="8" y="65" fill="#fbbf24" fontSize="10" fontWeight="bold">
                          m₂g
                        </text>
                      </g>
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Playback Controls & Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSimRunning((prev) => !prev)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSimRunning
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                      : 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  }`}
                >
                  {isSimRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  <span>{isSimRunning ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : isArabic ? 'بدء الحركة' : 'Run Simulation'}</span>
                </button>

                <button
                  onClick={handleResetPulley}
                  className="px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
                </button>
              </div>

              <div className="text-xs font-mono font-bold text-slate-300">
                {isArabic
                  ? `الزمن: ${toHindiDigits(simTime.toFixed(2))} ثانية | المسافة: ${toHindiDigits(currentDistance.toFixed(2))} م`
                  : `Time: ${simTime.toFixed(2)}s | Travel: ${currentDistance.toFixed(2)}m`}
              </div>
            </div>
          </div>

          {/* Interactive Parameter Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-indigo-400">{isArabic ? 'كتلة الجسم على المستوى (m₁):' : 'Ramp Mass (m₁):'}</span>
                <span className="font-mono text-slate-200">{isArabic ? toHindiDigits(m1) : m1} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={m1}
                onChange={(e) => {
                  setM1(Number(e.target.value));
                  handleResetPulley();
                }}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-emerald-400">{isArabic ? 'الكتلة المتدلية (m₂):' : 'Hanging Mass (m₂):'}</span>
                <span className="font-mono text-slate-200">{isArabic ? toHindiDigits(m2) : m2} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={m2}
                onChange={(e) => {
                  setM2(Number(e.target.value));
                  handleResetPulley();
                }}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-amber-400">{isArabic ? 'زاوية ميل المستوى (θ):' : 'Incline Angle (θ):'}</span>
                <span className="font-mono text-slate-200">{isArabic ? toHindiDigits(thetaDeg) : thetaDeg}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="75"
                step="5"
                value={thetaDeg}
                onChange={(e) => {
                  setThetaDeg(Number(e.target.value));
                  handleResetPulley();
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-cyan-400">{isArabic ? 'معامل الاحتكاك الحركي (μₖ):' : 'Friction Coeff (μₖ):'}</span>
                <span className="font-mono text-slate-200">{isArabic ? toHindiDigits(muK) : muK}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="0.60"
                step="0.05"
                value={muK}
                onChange={(e) => {
                  setMuK(Number(e.target.value));
                  handleResetPulley();
                }}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: HARMONIC OSCILLATION & ENERGY CONSERVATION */}
      {activeTab === 'harmonic_energy' && (
        <div className="space-y-6">
          <div
            className={`rounded-2xl p-5 border relative overflow-hidden ${
              isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-slate-950/80 border-slate-800 shadow-xl'
            }`}
          >
            {/* Live Energy Readouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-slate-800/80 pb-4 mb-4">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-emerald-400">{isArabic ? 'طاقة الحركة (T):' : 'Kinetic Energy (T):'}</span>
                  <span className="font-mono text-slate-200">{kineticEnergy.toFixed(1)} J</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-75"
                    style={{ width: `${totalEnergy > 0 ? (kineticEnergy / totalEnergy) * 100 : 0}%` }}
                  />
                </div>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-amber-400">{isArabic ? 'طاقة الوضع (V):' : 'Potential Energy (V):'}</span>
                  <span className="font-mono text-slate-200">{potentialEnergy.toFixed(1)} J</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full transition-all duration-75"
                    style={{ width: `${totalEnergy > 0 ? (potentialEnergy / totalEnergy) * 100 : 0}%` }}
                  />
                </div>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-indigo-400">{isArabic ? 'الطاقة الكلية المحفوظة (E):' : 'Total Energy (E):'}</span>
                  <span className="font-mono text-indigo-300 font-bold">{totalEnergy.toFixed(1)} J</span>
                </div>
                <div className="w-full bg-indigo-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full w-full" />
                </div>
              </div>
            </div>

            {/* SVG Visual Canvas */}
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 680 200" className="w-full h-auto select-none">
                {/* Wall & Ground */}
                <line x1="60" y1="20" x2="60" y2="160" stroke="#475569" strokeWidth="4" />
                <line x1="50" y1="160" x2="630" y2="160" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />

                {/* Equilibrium Center Marker */}
                <line x1="340" y1="40" x2="340" y2="160" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="340" y="32" textAnchor="middle" fill="#94a3b8" fontSize="10">
                  x = 0
                </text>

                {/* Oscillating Block */}
                {(() => {
                  const centerX = 340 + (currentX / amplitude) * 180;
                  const blockY = 110;
                  const blockW = 56;
                  const blockH = 50;

                  // Generate Spring Coils from wall (60) to block (centerX - blockW/2)
                  const startX = 60;
                  const endX = centerX - blockW / 2;
                  const numCoils = 14;
                  const springPoints: Array<[number, number]> = [];
                  springPoints.push([startX, blockY + blockH / 2]);

                  for (let i = 1; i <= numCoils; i++) {
                    const frac = i / (numCoils + 1);
                    const coilX = startX + frac * (endX - startX);
                    const coilY = blockY + blockH / 2 + (i % 2 === 0 ? 14 : -14);
                    springPoints.push([coilX, coilY]);
                  }
                  springPoints.push([endX, blockY + blockH / 2]);

                  const springD = springPoints.reduce((acc, pt, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${pt[0]} ${pt[1]}`, '');

                  return (
                    <g>
                      {/* Spring */}
                      <path d={springD} fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

                      {/* Mass Block */}
                      <rect
                        x={centerX - blockW / 2}
                        y={blockY}
                        width={blockW}
                        height={blockH}
                        rx="6"
                        fill="#6366f1"
                        stroke="#a5b4fc"
                        strokeWidth="2"
                      />
                      <text
                        x={centerX}
                        y={blockY + blockH / 2 + 4}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="11"
                        fontWeight="bold"
                      >
                        m = {springM}kg
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Animation Toggle */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOscRunning((prev) => !prev)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isOscRunning
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                      : 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  }`}
                >
                  {isOscRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  <span>{isOscRunning ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : isArabic ? 'تشغيل' : 'Resume'}</span>
                </button>
                <button
                  onClick={handleResetOsc}
                  className="px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
                </button>
              </div>

              <div className="text-xs font-mono font-bold text-slate-300">
                ω = {omega.toFixed(2)} rad/s | T = {oscPeriod.toFixed(2)}s
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-indigo-400">{isArabic ? 'الكتلة (m):' : 'Mass (m):'}</span>
                <span className="font-mono text-slate-200">{springM} kg</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={springM}
                onChange={(e) => setSpringM(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-amber-400">{isArabic ? 'ثابت الزنبرك (k):' : 'Spring Const (k):'}</span>
                <span className="font-mono text-slate-200">{springK} N/m</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="10"
                value={springK}
                onChange={(e) => setSpringK(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-emerald-400">{isArabic ? 'سعة الاهتزاز (A):' : 'Amplitude (A):'}</span>
                <span className="font-mono text-slate-200">{amplitude} m</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={amplitude}
                onChange={(e) => setAmplitude(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
