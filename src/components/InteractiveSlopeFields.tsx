import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  GitFork,
  Sliders,
  FileText,
  MousePointer,
} from 'lucide-react';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { loadLabReportDraft, saveLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

interface DifferentialEquationPreset {
  id: string;
  nameAr: string;
  nameEn: string;
  latex: string;
  slopeFn: (x: number, y: number) => number;
  exactFn?: (x: number, x0: number, y0: number) => number | null;
  defaultX0: number;
  defaultY0: number;
  descriptionAr: string;
  descriptionEn: string;
}

const ODE_PRESETS: DifferentialEquationPreset[] = [
  {
    id: 'logistic',
    nameAr: 'النمو اللوجستي السكاني (Logistic Growth)',
    nameEn: 'Logistic Population Growth',
    latex: '\\frac{dy}{dx} = 0.8 y \\left(1 - \\frac{y}{3}\\right)',
    slopeFn: (_x, y) => 0.8 * y * (1 - y / 3),
    exactFn: (x, x0, y0) => {
      if (y0 <= 0) return 0;
      const K = 3;
      const r = 0.8;
      const C = (K - y0) / y0;
      return K / (1 + C * Math.exp(-r * (x - x0)));
    },
    defaultX0: 0,
    defaultY0: 0.5,
    descriptionAr: 'معادلة نمو المجتمعات مع سعة بيئية قصوى (K = 3). تتقارب جميع المنحنيات نحو خط التوازن الأفقي.',
    descriptionEn: 'Models population dynamics with carrying capacity K=3. Trajectories asymptotically approach K.',
  },
  {
    id: 'circles',
    nameAr: 'الدوائر المتحدة المركز (تعامد المماسات)',
    nameEn: 'Concentric Orthogonal Circles',
    latex: '\\frac{dy}{dx} = -\\frac{x}{y}, \\quad x^2 + y^2 = C',
    slopeFn: (x, y) => (Math.abs(y) < 0.05 ? (x > 0 ? -100 : 100) : -x / y),
    exactFn: (x, x0, y0) => {
      const r2 = x0 * x0 + y0 * y0;
      const diff = r2 - x * x;
      if (diff < 0) return null;
      return y0 >= 0 ? Math.sqrt(diff) : -Math.sqrt(diff);
    },
    defaultX0: 2,
    defaultY0: 1.5,
    descriptionAr: 'معادلة تفاضلية تمثل مسارات متعامدة مع أنصاف الأقطار، مما ينتج دوائر متحدة المركز.',
    descriptionEn: 'Orthogonal trajectory to radial field, yielding concentric circles x² + y² = C.',
  },
  {
    id: 'decay',
    nameAr: 'الاضمحلال والنمو الأسي (نيوتن)',
    nameEn: 'Exponential Decay / Growth',
    latex: '\\frac{dy}{dx} = -0.5 y, \\quad y(x) = y_0 e^{-0.5x}',
    slopeFn: (_x, y) => -0.5 * y,
    exactFn: (x, x0, y0) => y0 * Math.exp(-0.5 * (x - x0)),
    defaultX0: 0,
    defaultY0: 2.5,
    descriptionAr: 'نموذج التحلل الإشعاعي وقانون التبريد، حيث يتناسب معدل التغير طردياً مع القيمة اللحظية.',
    descriptionEn: 'Models radioactive decay and cooling where rate of change is proportional to value.',
  },
  {
    id: 'polynomial',
    nameAr: 'حقل تدفق متعدد الحدود (x² - y)',
    nameEn: 'Polynomial Gradient Flow',
    latex: '\\frac{dy}{dx} = x^2 - y',
    slopeFn: (x, y) => x * x - y,
    defaultX0: -2,
    defaultY0: 1,
    descriptionAr: 'حقل تدفق خطي غير متجانس يوضح خط الانعطاف ونقاط الاتزان عند القطع المكافئ y = x².',
    descriptionEn: 'First-order linear ODE with isocline y = x² where slopes vanish horizontally.',
  },
];

export const InteractiveSlopeFields: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedPresetId, setSelectedPresetId] = useState<string>('logistic');
  const currentPreset = ODE_PRESETS.find((p) => p.id === selectedPresetId) || ODE_PRESETS[0];

  const [initialX, setInitialX] = useState<number>(currentPreset.defaultX0);
  const [initialY, setInitialY] = useState<number>(currentPreset.defaultY0);
  const [stepSizeH, setStepSizeH] = useState<number>(0.2);
  const [stepCount, setStepCount] = useState<number>(15);
  const [showEulerMethod, setShowEulerMethod] = useState<boolean>(true);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setInitialX(currentPreset.defaultX0);
    setInitialY(currentPreset.defaultY0);
  }, [selectedPresetId]);

  // Compute Euler's method steps
  const eulerSteps = useMemo(() => {
    const points: { step: number; x: number; y: number; slope: number; nextY: number }[] = [];
    let curX = initialX;
    let curY = initialY;

    for (let i = 0; i <= stepCount; i++) {
      const slope = currentPreset.slopeFn(curX, curY);
      const nextY = curY + stepSizeH * slope;
      points.push({ step: i, x: curX, y: curY, slope, nextY });
      curX += stepSizeH;
      curY = nextY;
      if (Math.abs(curY) > 12) break;
    }

    return points;
  }, [initialX, initialY, stepSizeH, stepCount, currentPreset]);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Viewport coordinates
    const minX = -4.5;
    const maxX = 4.5;
    const minY = -3.5;
    const maxY = 4.5;

    const toPxX = (x: number) => ((x - minX) / (maxX - minX)) * width;
    const toPxY = (y: number) => height - ((y - minY) / (maxY - minY)) * height;
    const fromPxX = (px: number) => minX + (px / width) * (maxX - minX);
    const fromPxY = (py: number) => minY + ((height - py) / height) * (maxY - minY);

    ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#080c14';
    ctx.fillRect(0, 0, width, height);

    // Axes
    ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, toPxY(0));
    ctx.lineTo(width, toPxY(0));
    ctx.moveTo(toPxX(0), 0);
    ctx.lineTo(toPxX(0), height);
    ctx.stroke();

    // 1. Draw Dense Slope Field segments
    const gridStepX = 0.35;
    const gridStepY = 0.35;
    const segmentLen = 10;

    for (let x = minX; x <= maxX; x += gridStepX) {
      for (let y = minY; y <= maxY; y += gridStepY) {
        const slope = currentPreset.slopeFn(x, y);
        if (isNaN(slope) || !isFinite(slope)) continue;

        const theta = Math.atan(slope);
        const dx = (segmentLen / 2) * Math.cos(theta);
        const dy = (segmentLen / 2) * Math.sin(theta);

        const px = toPxX(x);
        const py = toPxY(y);

        // Color code based on slope sign and magnitude
        if (Math.abs(slope) < 0.1) {
          ctx.strokeStyle = isLight ? '#f59e0b' : '#fbbf24'; // zero slope
        } else if (slope > 0) {
          ctx.strokeStyle = isLight ? 'rgba(16, 185, 129, 0.65)' : 'rgba(52, 211, 153, 0.6)';
        } else {
          ctx.strokeStyle = isLight ? 'rgba(239, 68, 68, 0.65)' : 'rgba(248, 113, 113, 0.6)';
        }

        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(px - dx, py + dy); // Note canvas Y is flipped
        ctx.lineTo(px + dx, py - dy);
        ctx.stroke();
      }
    }

    // 2. Draw Exact Solution Curve (Runge-Kutta / Analytical)
    ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();

    // Forward and backward numerical trace from (initialX, initialY)
    const traceSteps = 200;
    const traceDt = 0.03;

    // Forward trace (RK4)
    let curX = initialX;
    let curY = initialY;
    ctx.moveTo(toPxX(curX), toPxY(curY));

    for (let s = 0; s < traceSteps && curX <= maxX; s++) {
      const k1 = currentPreset.slopeFn(curX, curY);
      const k2 = currentPreset.slopeFn(curX + traceDt / 2, curY + (traceDt / 2) * k1);
      const k3 = currentPreset.slopeFn(curX + traceDt / 2, curY + (traceDt / 2) * k2);
      const k4 = currentPreset.slopeFn(curX + traceDt, curY + traceDt * k3);
      curY += (traceDt / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
      curX += traceDt;
      if (Math.abs(curY) > 10) break;
      ctx.lineTo(toPxX(curX), toPxY(curY));
    }

    // Backward trace (RK4)
    curX = initialX;
    curY = initialY;
    ctx.moveTo(toPxX(curX), toPxY(curY));
    for (let s = 0; s < traceSteps && curX >= minX; s++) {
      const k1 = currentPreset.slopeFn(curX, curY);
      const k2 = currentPreset.slopeFn(curX - traceDt / 2, curY - (traceDt / 2) * k1);
      const k3 = currentPreset.slopeFn(curX - traceDt / 2, curY - (traceDt / 2) * k2);
      const k4 = currentPreset.slopeFn(curX - traceDt, curY - traceDt * k3);
      curY -= (traceDt / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
      curX -= traceDt;
      if (Math.abs(curY) > 10) break;
      ctx.lineTo(toPxX(curX), toPxY(curY));
    }
    ctx.stroke();

    // 3. Draw Euler's Method Segments (if enabled)
    if (showEulerMethod && eulerSteps.length > 1) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      eulerSteps.forEach((pt, i) => {
        const px = toPxX(pt.x);
        const py = toPxY(pt.y);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      // Euler nodes
      eulerSteps.forEach((pt) => {
        const px = toPxX(pt.x);
        const py = toPxY(pt.y);
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, 2 * Math.PI);
        ctx.fill();
      });
    }

    // 4. Initial Condition Point (x0, y0)
    const initPx = toPxX(initialX);
    const initPy = toPxY(initialY);

    ctx.fillStyle = '#10b981';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(initPx, initPy, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(`(x₀, y₀) = (${initialX.toFixed(1)}, ${initialY.toFixed(1)})`, initPx + 10, initPy - 8);

    // Canvas click listener to set (x0, y0)
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickPxX = (e.clientX - rect.left) * (canvas.width / rect.width);
      const clickPxY = (e.clientY - rect.top) * (canvas.height / rect.height);
      const newX = Math.round(fromPxX(clickPxX) * 10) / 10;
      const newY = Math.round(fromPxY(clickPxY) * 10) / 10;
      setInitialX(newX);
      setInitialY(newY);
    };

    canvas.onclick = handleCanvasClick;

    return () => {
      canvas.onclick = null;
    };
  }, [initialX, initialY, stepSizeH, stepCount, showEulerMethod, currentPreset, eulerSteps, isLight, isContrast]);

  const handleOpenReportModal = () => {
    const draft = loadLabReportDraft('math-exp-9');
    if (isArabic) {
      draft.hypothesisAr = `تحقق طريقة أويلر في حل المعادلة التفاضلية ${currentPreset.nameAr}: كلما صغرت خطوة أويلر h يقل خطأ التقريب التراكمي وتنطبق المضلعات على المنحنى الدقيق.`;
    } else {
      draft.hypothesisEn = `Verification of Euler's numerical integration on ${currentPreset.nameEn}: decreasing step size h minimizes truncation drift relative to the exact integral.`;
    }

    draft.dataTableRows = eulerSteps.slice(0, 6).map((s) => ({
      step_h: `h = ${stepSizeH.toFixed(2)}`,
      steps_count: `${s.step}`,
      euler_y: s.y.toFixed(3),
      exact_y: s.nextY.toFixed(3),
      abs_error: Math.abs(s.nextY - s.y).toFixed(3),
      error_ratio: (Math.abs(s.nextY - s.y) / stepSizeH).toFixed(3),
    }));

    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isFullscreen ? 'h-full overflow-y-auto' : ''
      } ${
        isContrast
          ? 'bg-black border-2 border-indigo-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-indigo-400 text-indigo-400'
                : 'bg-gradient-to-br from-indigo-500 to-emerald-600 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <GitFork className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isArabic ? 'المعادلات التفاضلية وحقول المماسات (Slope Fields & Euler)' : 'Differential Equations & Slope Fields'}
              </h3>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isLight
                    ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60'
                }`}
              >
                Grade 12 Calculus
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
              {isArabic
                ? 'رسم حقول ميل المماسات لحظياً، وحل المعادلات بطريقة أويلر العددية مع إمكانية النقر لتحديد نقطة البداية'
                : 'Interactive direction fields, click-to-seed trajectories, and Euler numerical step approximation'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenReportModal}
          className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تقرير المعمل' : 'Lab Report'}</span>
        </button>
      </div>

      {/* Preset Selector */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? 'اختر المعادلة التفاضلية:' : 'Select ODE Preset:'}
        </span>
        {ODE_PRESETS.map((p) => {
          const isSel = p.id === selectedPresetId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPresetId(p.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isSel
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                  : isLight
                  ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {isArabic ? p.nameAr : p.nameEn}
            </button>
          );
        })}
      </div>

      {/* Canvas + Controls Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-inner cursor-crosshair">
            <canvas
              ref={canvasRef}
              width={760}
              height={440}
              className="w-full h-auto aspect-[16/10] block"
            />
            {/* Overlay hint */}
            <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-200">
              <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isArabic ? 'انقر على الشبكة لتغيير نقطة البداية (x₀, y₀)' : 'Click grid to place initial condition (x₀, y₀)'}</span>
            </div>

            {/* Legend bottom right */}
            <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-[11px] text-slate-300">
              <span className="w-2.5 h-0.5 bg-sky-400 inline-block"></span>
              <span>{isArabic ? 'الحل الدقيق' : 'Exact Integral'}</span>
              <span className="text-slate-500">|</span>
              <span className="w-2.5 h-0.5 border-b-2 border-dashed border-amber-400 inline-block"></span>
              <span>{isArabic ? 'طريقة أويلر' : 'Euler Steps'}</span>
            </div>
          </div>

          {/* Equation Banner */}
          <div
            className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
              isLight ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950' : 'bg-indigo-950/30 border-indigo-900/40 text-indigo-200'
            }`}
          >
            <div>
              <span className="font-bold block text-sm">{isArabic ? currentPreset.nameAr : currentPreset.nameEn}</span>
              <span className="text-[11px] opacity-80">{isArabic ? currentPreset.descriptionAr : currentPreset.descriptionEn}</span>
            </div>
            <div className="font-mono font-bold shrink-0 text-sm">
              <MathRenderer math={currentPreset.latex} />
            </div>
          </div>
        </div>

        {/* Right: Parameters & Step Table */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Euler Controls Card */}
          <div
            className={`p-4 rounded-xl border space-y-3.5 text-xs ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <h4 className={`font-bold flex items-center gap-1.5 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                <Sliders className="w-4 h-4 text-indigo-400" />
                <span>{isArabic ? 'معاملات طريقة أويلر العددية' : 'Euler Integration Parameters'}</span>
              </h4>
              <button
                onClick={() => setShowEulerMethod(!showEulerMethod)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                  showEulerMethod
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {showEulerMethod ? (isArabic ? 'مفعل' : 'Active') : (isArabic ? 'معطل' : 'Off')}
              </button>
            </div>

            {/* Step size h */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'طول الخطوة (Step Size h):' : 'Step Size (h):'}
                </span>
                <span className="font-mono font-bold text-amber-500">{stepSizeH.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.5"
                step="0.05"
                value={stepSizeH}
                onChange={(e) => setStepSizeH(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Step Count */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'عدد الخطوات (Steps):' : 'Number of Steps:'}
                </span>
                <span className="font-mono font-bold text-indigo-500">{stepCount}</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={stepCount}
                onChange={(e) => setStepCount(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Initial Point Coordinates */}
            <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
              <div className={`p-2 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>x₀</span>
                <span className="font-bold text-indigo-500">{initialX.toFixed(2)}</span>
              </div>
              <div className={`p-2 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>y₀</span>
                <span className="font-bold text-emerald-500">{initialY.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Euler Steps Preview Table */}
          <div
            className={`p-3.5 rounded-xl border space-y-2 text-xs overflow-hidden ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <span className={`font-bold block ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
              {isArabic ? 'جدول خطوات أويلر (y_{n+1} = y_n + h·f):' : 'Euler Iteration Table:'}
            </span>
            <div className="overflow-x-auto max-h-40 overflow-y-auto">
              <table className="w-full text-[11px] font-mono text-center">
                <thead className={`border-b ${isLight ? 'border-slate-300 text-slate-600' : 'border-slate-700 text-slate-400'}`}>
                  <tr>
                    <th className="p-1">n</th>
                    <th className="p-1">x_n</th>
                    <th className="p-1">y_n</th>
                    <th className="p-1">f(x,y)</th>
                    <th className="p-1">y_{'{n+1}'}</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isLight ? 'divide-slate-200' : 'divide-slate-800'}`}>
                  {eulerSteps.slice(0, 6).map((row) => (
                    <tr key={row.step}>
                      <td className="p-1 text-slate-500">{row.step}</td>
                      <td className="p-1 text-indigo-400">{row.x.toFixed(2)}</td>
                      <td className="p-1 font-bold">{row.y.toFixed(2)}</td>
                      <td className="p-1 text-amber-500">{row.slope.toFixed(2)}</td>
                      <td className="p-1 text-emerald-400 font-bold">{row.nextY.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isReportModalOpen && (
        <LabReportGeneratorModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          initialExperimentId="math-exp-9"
          lang={lang}
          theme={theme}
        />
      )}
    </div>
  );
};
