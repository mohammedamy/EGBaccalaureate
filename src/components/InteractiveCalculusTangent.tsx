import React, { useEffect, useRef, useState } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light';
}

export const InteractiveCalculusTangent: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [funcType, setFuncType] = useState<'quadratic' | 'cubic' | 'sine'>('cubic');
  const [pointX, setPointX] = useState<number>(1);
  const [stepH, setStepH] = useState<number>(1.5);

  // Evaluate function and derivative
  const evaluateF = (x: number): number => {
    switch (funcType) {
      case 'quadratic':
        return 0.5 * x * x - 1;
      case 'cubic':
        return 0.25 * (x * x * x - 3 * x);
      case 'sine':
        return 2 * Math.sin(x);
    }
  };

  const evaluateDerivative = (x: number): number => {
    switch (funcType) {
      case 'quadratic':
        return x;
      case 'cubic':
        return 0.25 * (3 * x * x - 3);
      case 'sine':
        return 2 * Math.cos(x);
    }
  };

  const fx0 = evaluateF(pointX);
  const fx0h = evaluateF(pointX + stepH);
  const secantSlope = (fx0h - fx0) / stepH;
  const exactDerivative = evaluateDerivative(pointX);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background
    ctx.fillStyle = isLight ? '#f8fafc' : '#020617';
    ctx.fillRect(0, 0, width, height);

    // Coordinate mapping parameters
    const originX = width / 2;
    const originY = height / 2;
    const scale = 50; // 50 pixels per unit

    const toCanvasX = (x: number) => originX + x * scale;
    const toCanvasY = (y: number) => originY - y * scale;

    // 1. Draw Grid Lines
    ctx.strokeStyle = isLight ? '#e2e8f0' : '#1e293b';
    ctx.lineWidth = 1;
    for (let x = -10; x <= 10; x++) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(x), 0);
      ctx.lineTo(toCanvasX(x), height);
      ctx.stroke();
    }
    for (let y = -10; y <= 10; y++) {
      ctx.beginPath();
      ctx.moveTo(0, toCanvasY(y));
      ctx.lineTo(width, toCanvasY(y));
      ctx.stroke();
    }

    // 2. Draw Axes
    ctx.strokeStyle = isLight ? '#475569' : '#64748b';
    ctx.lineWidth = 2;
    // X Axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    // Y Axis
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // 3. Draw Curve f(x)
    ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8'; // Blue vs Cyan curve
    ctx.lineWidth = 3;
    ctx.beginPath();
    let first = true;
    for (let px = 0; px <= width; px += 2) {
      const realX = (px - originX) / scale;
      const realY = evaluateF(realX);
      const py = toCanvasY(realY);

      if (first) {
        ctx.moveTo(px, py);
        first = false;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

    // 4. Draw Secant Line (Amber/Orange dashed)
    ctx.strokeStyle = isLight ? '#d97706' : '#f59e0b';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    const secantY1 = fx0 + secantSlope * (-5 - pointX);
    const secantY2 = fx0 + secantSlope * (5 - pointX);
    ctx.moveTo(toCanvasX(-5), toCanvasY(secantY1));
    ctx.lineTo(toCanvasX(5), toCanvasY(secantY2));
    ctx.stroke();
    ctx.setLineDash([]);

    // 5. Draw Tangent Line (Emerald solid)
    ctx.strokeStyle = isLight ? '#059669' : '#10b981';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    const tanY1 = fx0 + exactDerivative * (-5 - pointX);
    const tanY2 = fx0 + exactDerivative * (5 - pointX);
    ctx.moveTo(toCanvasX(-5), toCanvasY(tanY1));
    ctx.lineTo(toCanvasX(5), toCanvasY(tanY2));
    ctx.stroke();

    // 6. Draw Points A (x0, f(x0)) and B (x0+h, f(x0+h))
    // Point A
    ctx.fillStyle = isLight ? '#b45309' : '#facc15';
    ctx.beginPath();
    ctx.arc(toCanvasX(pointX), toCanvasY(fx0), 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = isLight ? '#0f172a' : '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Point B
    ctx.fillStyle = isLight ? '#d97706' : '#f59e0b';
    ctx.beginPath();
    ctx.arc(toCanvasX(pointX + stepH), toCanvasY(fx0h), 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = isLight ? '#0f172a' : '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, [funcType, pointX, stepH, isLight]);

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
            <span>📈</span>
            <span>{lang === 'ar' ? 'مستكشف مشتقات التفاضل وميل المماس' : 'Calculus Derivative & Secant Slope Visualizer'}</span>
          </h3>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {lang === 'ar'
              ? 'شاهد كيف يقترب ميل القاطع (الخط البرتقالي) من ميل المماس الحقيقي (الخط الأخضر) عندما تئول h إلى الصفر'
              : 'Watch how secant slope (amber dashed) converges to true derivative slope dy/dx (green solid) as h -> 0'}
          </p>
        </div>

        {/* Function selector */}
        <div className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl border w-full sm:w-auto ${
          isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-950 border-slate-800'
        }`}>
          <button
            onClick={() => setFuncType('cubic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              funcType === 'cubic'
                ? 'bg-indigo-600 text-white shadow-sm'
                : isLight
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
                  : 'text-slate-400 hover:text-white'
            }`}
          >
            f(x) = x³ - 3x
          </button>
          <button
            onClick={() => setFuncType('quadratic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              funcType === 'quadratic'
                ? 'bg-indigo-600 text-white shadow-sm'
                : isLight
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
                  : 'text-slate-400 hover:text-white'
            }`}
          >
            f(x) = 0.5x²
          </button>
          <button
            onClick={() => setFuncType('sine')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              funcType === 'sine'
                ? 'bg-indigo-600 text-white shadow-sm'
                : isLight
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
                  : 'text-slate-400 hover:text-white'
            }`}
          >
            f(x) = 2 sin(x)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Canvas */}
        <div className={`lg:col-span-7 p-3.5 sm:p-4 rounded-xl border flex flex-col items-center ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <canvas
            ref={canvasRef}
            width={500}
            height={380}
            className={`w-full max-w-[500px] aspect-[500/380] h-auto rounded-lg border ${
              isLight ? 'border-slate-300' : 'border-slate-800/80'
            }`}
          />
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-3 text-xs">
            <span className={`font-bold ${isLight ? 'text-sky-800' : 'text-cyan-400'}`}>Curve f(x)</span>
            <span className={`font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>Secant Line (h={stepH.toFixed(2)})</span>
            <span className={`font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>Tangent Line (dy/dx)</span>
          </div>
        </div>

        {/* Sliders and Math Output */}
        <div className="lg:col-span-5 space-y-4">
          <div className={`p-4 rounded-xl border space-y-3 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            <div>
              <label className={`text-xs font-semibold flex justify-between ${
                isLight ? 'text-indigo-800 font-bold' : 'text-indigo-300'
              }`}>
                <span>{lang === 'ar' ? 'موقع نقطة التماس x₀:' : 'Tangent Point x₀:'}</span>
                <span>{pointX.toFixed(2)}</span>
              </label>
              <input type="range" min="-2.5" max="2.5" step="0.1" value={pointX} onChange={(e) => setPointX(Number(e.target.value))} className="w-full accent-indigo-600" />
            </div>

            <div>
              <label className={`text-xs font-semibold flex justify-between ${
                isLight ? 'text-amber-800 font-bold' : 'text-amber-300'
              }`}>
                <span>{lang === 'ar' ? 'خطوة المقدار h (تئول للصفر):' : 'Step Increment h (h -> 0):'}</span>
                <span>{stepH.toFixed(2)}</span>
              </label>
              <input type="range" min="0.05" max="3" step="0.05" value={stepH} onChange={(e) => setStepH(Number(e.target.value))} className="w-full accent-amber-500" />
            </div>
          </div>

          {/* Math Comparison Card */}
          <div className={`p-4 rounded-xl border space-y-3 text-xs ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            <h4 className={`font-bold uppercase tracking-wider ${
              isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400'
            }`}>
              {lang === 'ar' ? 'مقارنة ميل القاطع والمشتقة الفعلية' : 'Secant vs Tangent Slope Comparison'}
            </h4>

            <div className={`p-3 rounded-lg space-y-1 border ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
            }`}>
              <span className={`block font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar' ? 'ميل القاطع التجريبي:' : 'Approx Secant Slope:'}
              </span>
              <MathRenderer math={`m_{\\text{secant}} = \\frac{f(${pointX.toFixed(1)}+${stepH.toFixed(2)}) - f(${pointX.toFixed(1)})}{${stepH.toFixed(2)}} = ${secantSlope.toFixed(4)}`} />
            </div>

            <div className={`p-3 rounded-lg space-y-1 border ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
            }`}>
              <span className={`block font-semibold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                {lang === 'ar' ? 'ميل المماس (المشتقة الأولى dy/dx):' : 'Exact Derivative Slope (dy/dx):'}
              </span>
              <MathRenderer math={`f'(${pointX.toFixed(1)}) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} = ${exactDerivative.toFixed(4)}`} />
            </div>

            <div className={`p-2 rounded text-[11px] font-bold ${
              isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-900 text-amber-300 border border-slate-800'
            }`}>
              {lang === 'ar'
                ? `فرق الخطأ = |${(secantSlope - exactDerivative).toFixed(4)}|`
                : `Slope Error Difference = |${(secantSlope - exactDerivative).toFixed(4)}|`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
