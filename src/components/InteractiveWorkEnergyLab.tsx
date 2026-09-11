import React, { useState, useMemo } from 'react';

interface Props {
  lang: 'en' | 'ar';
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const InteractiveWorkEnergyLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const isAr = lang === 'ar';

  // Parameters
  const [angleDeg, setAngleDeg] = useState<number>(30); // Incline angle
  const [mass, setMass] = useState<number>(10); // kg
  const [muK, setMuK] = useState<number>(0.2); // coefficient of kinetic friction
  const [pullingForce, setPullingForce] = useState<number>(80); // N up the incline
  const [distance, setDistance] = useState<number>(5); // meters traveled

  const g = 9.8; // m/s^2

  const calc = useMemo(() => {
    const thetaRad = (angleDeg * Math.PI) / 180;
    const mg = mass * g;
    const mgParallel = mg * Math.sin(thetaRad);
    const mgPerp = mg * Math.cos(thetaRad);
    const normalReaction = mgPerp;
    const frictionForce = muK * normalReaction;

    // Net force up the plane
    const netForce = pullingForce - mgParallel - frictionForce;
    const acceleration = netForce > 0 ? netForce / mass : 0;
    const isMoving = netForce > 0;

    // Work calculations over distance s
    const workPull = pullingForce * distance;
    const workGravity = -mgParallel * distance;
    const workFriction = -frictionForce * distance;
    const netWork = isMoving ? netForce * distance : 0;

    // Kinetic & Potential Energy
    // W_net = Delta T = 0.5 * m * v^2 => v = sqrt(2 * W_net / m)
    const finalVelocity = isMoving ? Math.sqrt((2 * netWork) / mass) : 0;
    const potentialEnergyGain = mgParallel * distance;

    return {
      mg,
      mgParallel,
      mgPerp,
      normalReaction,
      frictionForce,
      netForce,
      acceleration,
      isMoving,
      workPull,
      workGravity,
      workFriction,
      netWork,
      finalKE: netWork,
      finalVelocity,
      potentialEnergyGain
    };
  }, [angleDeg, mass, muK, pullingForce, distance]);

  return (
    <div className="space-y-6">
      {/* Parameter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Incline Angle */}
        <div className={`p-3 rounded-xl border space-y-1.5 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-300">{isAr ? 'زاوية الميل (θ):' : 'Incline (θ):'}</span>
            <span className="font-mono text-cyan-400">{angleDeg}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="75"
            value={angleDeg}
            onChange={(e) => setAngleDeg(parseFloat(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>

        {/* Mass */}
        <div className={`p-3 rounded-xl border space-y-1.5 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-300">{isAr ? 'الكتلة (m):' : 'Mass (m):'}</span>
            <span className="font-mono text-amber-400">{mass} kg</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={mass}
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        {/* Pulling Force */}
        <div className={`p-3 rounded-xl border space-y-1.5 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-300">{isAr ? 'قوة الشد (F):' : 'Pulling (F):'}</span>
            <span className="font-mono text-indigo-400">{pullingForce} N</span>
          </div>
          <input
            type="range"
            min="0"
            max="250"
            value={pullingForce}
            onChange={(e) => setPullingForce(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        {/* Friction Coefficient */}
        <div className={`p-3 rounded-xl border space-y-1.5 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-300">{isAr ? 'معامل الاحتكاك (μ):' : 'Friction (μ):'}</span>
            <span className="font-mono text-rose-400">{muK.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="0.8"
            step="0.05"
            value={muK}
            onChange={(e) => setMuK(parseFloat(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer"
          />
        </div>

        {/* Displacement Distance */}
        <div className={`p-3 rounded-xl border space-y-1.5 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-300">{isAr ? 'المسافة المقطوعة (s):' : 'Displacement (s):'}</span>
            <span className="font-mono text-emerald-400">{distance} m</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visual Free Body Diagram & Animation Canvas */}
        <div className={`p-4 rounded-xl border flex flex-col justify-between ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center justify-between border-b pb-2 mb-2">
            <h4 className="text-xs font-bold text-slate-300">
              {isAr ? 'مخطط القوى الحرة (Free-Body Diagram):' : 'Free-Body Diagram:'}
            </h4>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
              calc.isMoving ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
            }`}>
              {calc.isMoving
                ? isAr ? 'يتحرك بتسارع للأعلى' : 'Accelerating Upward'
                : isAr ? 'متزن / ساكن (F لا تكفي)' : 'Stationary (F Insufficient)'}
            </span>
          </div>

          {/* SVG Incline Diagram */}
          <div className="flex items-center justify-center p-4">
            <svg viewBox="0 0 320 200" className="w-full max-w-xs h-44 select-none">
              {/* Ground line */}
              <line x1="20" y1="170" x2="300" y2="170" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />

              {/* Wedge Incline */}
              <polygon points="30,170 270,170 270,70" fill={isLight ? '#e2e8f0' : '#1e293b'} stroke="#64748b" strokeWidth="2" />

              {/* Angle Arc */}
              <path d="M 70 170 A 40 40 0 0 0 65 155" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="75" y="165" fill="#38bdf8" fontSize="12" fontWeight="bold">θ={angleDeg}°</text>

              {/* Block on incline */}
              <g transform="translate(160, 115) rotate(-22.6)">
                <rect x="-20" y="-15" width="40" height="30" rx="4" fill="#6366f1" stroke="#818cf8" strokeWidth="1.5" />
                <text x="-8" y="5" fill="#ffffff" fontSize="11" fontWeight="bold">m</text>

                {/* Force F Arrow (Upwards) */}
                <line x1="20" y1="0" x2="65" y2="0" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-green)" />
                <text x="68" y="4" fill="#10b981" fontSize="10" fontWeight="bold">F</text>

                {/* Friction Force Arrow (Downwards) */}
                <line x1="-20" y1="0" x2="-55" y2="0" stroke="#f43f5e" strokeWidth="2" />
                <text x="-70" y="4" fill="#f43f5e" fontSize="10" fontWeight="bold">f_k</text>

                {/* Normal Reaction R Arrow */}
                <line x1="0" y1="-15" x2="0" y2="-55" stroke="#38bdf8" strokeWidth="2" />
                <text x="4" y="-55" fill="#38bdf8" fontSize="10" fontWeight="bold">R</text>

                {/* Weight mg Arrow */}
                <line x1="0" y1="15" x2="0" y2="55" stroke="#f59e0b" strokeWidth="2" />
                <text x="4" y="55" fill="#f59e0b" fontSize="10" fontWeight="bold">mg</text>
              </g>
            </svg>
          </div>

          <div className="text-[11px] text-slate-400 text-center border-t pt-2">
            {isAr
              ? `مركبة الوزن الموازية: ${calc.mgParallel.toFixed(1)} ن | الاحتكاك الحركي: ${calc.frictionForce.toFixed(1)} ن`
              : `mg sin(θ) = ${calc.mgParallel.toFixed(1)} N | Friction f_k = ${calc.frictionForce.toFixed(1)} N`}
          </div>
        </div>

        {/* Work & Energy Bar Graphs & Derivations */}
        <div className={`p-4 rounded-xl border space-y-4 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center justify-between border-b pb-2">
            <h4 className="text-xs font-bold text-indigo-400">
              {isAr ? 'ميزانية الشغل والطاقة (Work-Energy Theorem):' : 'Work-Energy Theorem Breakdown:'}
            </h4>
            <span className="text-[11px] font-mono text-amber-400">W_net = ΔT</span>
          </div>

          <div className="space-y-3 text-xs">
            {/* Work Breakdown Table */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">{isAr ? 'شغل قوة الشد (W_F):' : 'Work by Pulling (W_F):'}</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">+{calc.workPull.toFixed(1)} J</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">{isAr ? 'شغل قوة الاحتكاك (W_f):' : 'Work by Friction (W_f):'}</span>
                <span className="font-mono text-rose-400 font-bold text-sm">{calc.workFriction.toFixed(1)} J</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">{isAr ? 'شغل الجاذبية (W_g):' : 'Work by Gravity (W_g):'}</span>
                <span className="font-mono text-amber-400 font-bold text-sm">{calc.workGravity.toFixed(1)} J</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">{isAr ? 'الشغل الكلي المبذول (W_net):' : 'Net Work (W_net):'}</span>
                <span className="font-mono text-cyan-300 font-bold text-sm">{calc.netWork.toFixed(1)} J</span>
              </div>
            </div>

            {/* Kinetic Energy & Final Velocity */}
            <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/60 space-y-1">
              <div className="flex justify-between items-center text-indigo-300 font-bold">
                <span>{isAr ? 'طاقة الحركة النهائية (T):' : 'Final Kinetic Energy (T):'}</span>
                <span className="font-mono text-sm">{calc.finalKE.toFixed(1)} J</span>
              </div>
              <div className="flex justify-between items-center text-cyan-400 font-bold">
                <span>{isAr ? 'السرعة النهائية المكتسبة (v):' : 'Final Velocity (v):'}</span>
                <span className="font-mono text-base">{calc.finalVelocity.toFixed(2)} m/s</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 text-[11px] pt-1 border-t border-indigo-900/60">
                <span>{isAr ? 'عجلة الحركة (a):' : 'Acceleration (a):'}</span>
                <span className="font-mono text-white">{calc.acceleration.toFixed(2)} m/s²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
