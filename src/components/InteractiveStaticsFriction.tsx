import React, { useEffect, useRef, useState } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const InteractiveStaticsFriction: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [weightW, setWeightW] = useState<number>(40);
  const [inclineTheta, setInclineTheta] = useState<number>(30); // degrees
  const [muS, setMuS] = useState<number>(0.577); // tan(30) = 0.577 => lambda = 30 deg
  const [pullP, setPullP] = useState<number>(20);

  const thetaRad = (inclineTheta * Math.PI) / 180;
  const lambdaDeg = Math.round((Math.atan(muS) * 180) / Math.PI);

  // Components along inclined plane
  const wParallel = weightW * Math.sin(thetaRad); // component down plane
  const wPerp = weightW * Math.cos(thetaRad); // component perpendicular to plane

  const normalR = Math.max(0, wPerp);
  const maxFrictionFs = muS * normalR;

  // Net force down plane without friction
  const netDown = wParallel - pullP;
  const isUpwardTendency = netDown < 0;
  const requiredFriction = Math.abs(netDown);

  const isVergeOfMotion = Math.abs(requiredFriction - maxFrictionFs) < 0.5;
  const isSliding = requiredFriction > maxFrictionFs + 0.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    // Background fill
    ctx.fillStyle = isLight ? '#f8fafc' : '#020617';
    ctx.fillRect(0, 0, width, height);

    // Pivot at bottom left
    const pivotX = 60;
    const pivotY = height - 60;
    const planeLen = 380;

    const topX = pivotX + planeLen * Math.cos(thetaRad);
    const topY = pivotY - planeLen * Math.sin(thetaRad);

    // 1. Draw Inclined Plane Surface
    ctx.strokeStyle = isLight ? '#334155' : '#475569';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(topX, topY);
    ctx.stroke();

    // Horizontal Base Line
    ctx.strokeStyle = isLight ? '#94a3b8' : '#334155';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(pivotX + planeLen, pivotY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Theta Angle Arc
    ctx.strokeStyle = isLight ? '#b45309' : '#facc15';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 40, 0, -thetaRad, true);
    ctx.stroke();

    // 2. Draw Body Box resting on Plane
    const boxDist = 180;
    const boxCenterX = pivotX + boxDist * Math.cos(thetaRad);
    const boxCenterY = pivotY - boxDist * Math.sin(thetaRad);

    ctx.save();
    ctx.translate(boxCenterX, boxCenterY);
    ctx.rotate(-thetaRad);

    // Box Body
    ctx.fillStyle = isSliding ? '#dc2626' : isVergeOfMotion ? '#d97706' : '#059669';
    ctx.fillRect(-30, -50, 60, 50);
    ctx.strokeStyle = isLight ? '#0f172a' : '#ffffff';
    ctx.lineWidth = 2;
    ctx.strokeRect(-30, -50, 60, 50);

    // Label on box
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(`W=${weightW}N`, -20, -25);

    // Normal Reaction Arrow R (Upwards perp to plane)
    ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -25);
    ctx.lineTo(0, -85);
    ctx.stroke();

    // Friction Force Arrow (Opposite to movement tendency)
    const fDir = isUpwardTendency ? 1 : -1;
    ctx.strokeStyle = isLight ? '#b45309' : '#facc15';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -25);
    ctx.lineTo(fDir * 50, -25);
    ctx.stroke();

    // Pulling force P arrow
    if (pullP > 0) {
      ctx.strokeStyle = isLight ? '#7c3aed' : '#a855f7';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -25);
      ctx.lineTo(-50, -25); // Pulling up plane
      ctx.stroke();
    }

    ctx.restore();
  }, [inclineTheta, weightW, pullP, muS, thetaRad, isSliding, isVergeOfMotion, isUpwardTendency, isLight]);

  return (
    <div className={`border rounded-2xl p-4 sm:p-6 shadow-xl space-y-6 transition-colors ${
      isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900/90 border-slate-800 text-slate-100'
    }`}>
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div>
          <h3 className={`text-lg font-bold flex items-center gap-2 ${
            isLight ? 'text-slate-900' : 'text-slate-100'
          }`}>
            <span>⚖️</span>
            <span>{lang === 'ar' ? 'محاكي اتزان الجسم والاحتكاك على مستوى مائل' : 'Statics Rough Inclined Plane Simulator'}</span>
          </h3>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {lang === 'ar'
              ? 'اختبر الاتزان، زاوية الاحتكاك ل، وحالة وشك الحركة أو الانزلاق لحظياً'
              : 'Test static equilibrium, friction angle lambda, and verge of motion vs sliding states'}
          </p>
        </div>

        {/* State Badge */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold ${
              isSliding
                ? 'bg-red-500/20 text-red-700 dark:text-orange-300 border border-red-500/50 animate-bounce'
                : isVergeOfMotion
                ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40'
                : 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40'
            }`}
          >
            {isSliding
              ? lang === 'ar'
                ? '🚨 الجسم منزلق (غير متزن!)'
                : '🚨 Body Sliding (Motion)'
              : isVergeOfMotion
              ? lang === 'ar'
                ? '⚠️ الجسم على وشك الحركة (احتكاك نهائي)'
                : '⚠️ Verge of Motion (Limiting Friction)'
              : lang === 'ar'
              ? '✅ الجسم في حالة اتزان سكوني تام'
              : '✅ Static Equilibrium'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Canvas */}
        <div className={`lg:col-span-7 p-3.5 sm:p-4 rounded-xl border flex flex-col items-center ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <canvas
            ref={canvasRef}
            width={480}
            height={320}
            className={`w-full max-w-[480px] aspect-[480/320] h-auto rounded-lg border ${
              isLight ? 'border-slate-300' : 'border-slate-800/80'
            }`}
          />
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-3 text-xs">
            <span className={`font-bold ${isLight ? 'text-sky-800' : 'text-cyan-400'}`}>Normal Reaction R</span>
            <span className={`font-bold ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>Friction f_s</span>
            <span className={`font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>Pull Force P</span>
            <span className={`font-bold ${isLight ? 'text-amber-900' : 'text-yellow-400'}`}>Incline Angle θ={inclineTheta}°</span>
          </div>
        </div>

        {/* Sliders & Math Calculations */}
        <div className="lg:col-span-5 space-y-4">
          <div className={`p-4 rounded-xl border space-y-3 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 p-4 rounded-xl border border-slate-800'
          }`}>
            <div>
              <label className={`text-xs font-semibold flex justify-between ${
                isLight ? 'text-amber-900 font-bold' : 'text-yellow-300'
              }`}>
                <span>{lang === 'ar' ? 'زاوية ميل المستوى θ:' : 'Inclination Angle θ:'}</span>
                <span>{inclineTheta}°</span>
              </label>
              <input type="range" min="0" max="60" value={inclineTheta} onChange={(e) => setInclineTheta(Number(e.target.value))} className="w-full accent-amber-500" />
            </div>

            <div>
              <label className={`text-xs font-semibold flex justify-between ${
                isLight ? 'text-indigo-800 font-bold' : 'text-indigo-300'
              }`}>
                <span>{lang === 'ar' ? 'معامل الاحتكاك السكوني μ_s (زاوية λ):' : 'Static Friction Coeff μ_s (λ):'}</span>
                <span>
                  {muS.toFixed(3)} (λ={lambdaDeg}°)
                </span>
              </label>
              <input type="range" min="0.1" max="1.2" step="0.05" value={muS} onChange={(e) => setMuS(Number(e.target.value))} className="w-full accent-indigo-600" />
            </div>

            <div>
              <label className={`text-xs font-semibold flex justify-between ${
                isLight ? 'text-purple-800 font-bold' : 'text-purple-300'
              }`}>
                <span>{lang === 'ar' ? 'قوة الشد لأعلى المستوى P:' : 'Upward Pulling Force P:'}</span>
                <span>{pullP} N</span>
              </label>
              <input type="range" min="0" max="60" value={pullP} onChange={(e) => setPullP(Number(e.target.value))} className="w-full accent-purple-500" />
            </div>

            <div>
              <label className={`text-xs font-semibold flex justify-between ${
                isLight ? 'text-slate-800 font-bold' : 'text-slate-300'
              }`}>
                <span>{lang === 'ar' ? 'وزن الجسم W:' : 'Body Weight W:'}</span>
                <span>{weightW} N</span>
              </label>
              <input type="range" min="10" max="100" value={weightW} onChange={(e) => setWeightW(Number(e.target.value))} className="w-full accent-slate-500" />
            </div>
          </div>

          {/* Real-time Equations Card */}
          <div className={`p-4 rounded-xl border space-y-2 text-xs ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 p-4 rounded-xl border border-slate-800'
          }`}>
            <h4 className={`font-bold uppercase tracking-wider ${
              isLight ? 'text-amber-800 font-bold' : 'text-amber-400'
            }`}>
              {lang === 'ar' ? 'معادلات الاتزان والاستاتيكا الحالية' : 'Equilibrium Equations Breakdown'}
            </h4>
            <div className={`space-y-1.5 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
              <MathRenderer math={`R = W \\cos(\\theta) = ${weightW} \\cos(${inclineTheta}^\\circ) = ${normalR.toFixed(1)}\\text{ N}`} />
              <MathRenderer math={`f_s = \\mu_s R = (${muS.toFixed(2)})(${normalR.toFixed(1)}) = ${maxFrictionFs.toFixed(1)}\\text{ N}`} />
              <MathRenderer math={`W \\sin(\\theta) = ${weightW} \\sin(${inclineTheta}^\\circ) = ${wParallel.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
