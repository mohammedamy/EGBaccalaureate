import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Compass,
  Sliders,
  FileText,
  Zap,
} from 'lucide-react';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { loadLabReportDraft, saveLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type ConicType = 'parabola' | 'ellipse' | 'hyperbola' | 'circle';

export const InteractiveConicSections: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [conicType, setConicType] = useState<ConicType>('ellipse');
  const [paramA, setParamA] = useState<number>(5); // Semi-major axis
  const [paramB, setParamB] = useState<number>(3); // Semi-minor axis
  const [paramP, setParamP] = useState<number>(2.5); // Parabola focal parameter
  const [showRays, setShowRays] = useState<boolean>(true);
  const [rayCount, setRayCount] = useState<number>(10);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Calculate geometric properties based on conic type
  const metrics = useMemo(() => {
    if (conicType === 'circle') {
      const r = paramA;
      return {
        eccentricity: 0,
        focalDistance: 0,
        f1: { x: 0, y: 0 },
        f2: { x: 0, y: 0 },
        directrixX: null,
        cartesianLatex: `x^2 + y^2 = ${r * r}`,
        polarLatex: `r = ${r}`,
        latusRectum: 2 * r,
        titleAr: 'الدائرة (انعدام الاختلاف المركزي e = 0)',
        titleEn: 'Circle (Zero Eccentricity e = 0)',
        descAr: 'حالة خاصة من القطع الناقص تتطابق فيها البؤرتان في المركز ويتساوى المحوران.',
        descEn: 'Special ellipse where both foci merge into the origin and axes are equal.',
      };
    } else if (conicType === 'ellipse') {
      const a = Math.max(paramA, paramB);
      const b = Math.min(paramA, paramB);
      const c = Math.sqrt(Math.max(0, a * a - b * b));
      const e = a > 0 ? c / a : 0;
      const d = e > 0 ? (a * a) / c : 0;
      const lr = (2 * b * b) / a;

      return {
        eccentricity: e,
        focalDistance: c,
        f1: { x: -c, y: 0 },
        f2: { x: c, y: 0 },
        directrixX: d,
        cartesianLatex: `\\frac{x^2}{${(a * a).toFixed(1)}} + \\frac{y^2}{${(b * b).toFixed(1)}} = 1`,
        polarLatex: `r = \\frac{${(b * b / a).toFixed(2)}}{1 + ${e.toFixed(2)}\\cos\\theta}`,
        latusRectum: lr,
        titleAr: `القطع الناقص (0 < e < 1, e = ${e.toFixed(2)})`,
        titleEn: `Ellipse (0 < e < 1, e = ${e.toFixed(2)})`,
        descAr: 'المحل الهندسي لنقطة يكون مجموع بعديها عن بؤرتين مقداراً ثابتاً (2a). الأشعة من بؤرة تنعكس نحو البؤرة الأخرى.',
        descEn: 'Sum of distances from any point to both foci is constant 2a. Rays from F1 reflect directly into F2.',
      };
    } else if (conicType === 'parabola') {
      const p = paramP;
      const e = 1.0;
      const lr = 4 * p;

      return {
        eccentricity: e,
        focalDistance: p,
        f1: { x: p, y: 0 },
        f2: null,
        directrixX: -p,
        cartesianLatex: `y^2 = ${(4 * p).toFixed(1)}x`,
        polarLatex: `r = \\frac{${(2 * p).toFixed(2)}}{1 - \\cos\\theta}`,
        latusRectum: lr,
        titleAr: 'القطع المكافئ (e = 1.0 تماماً)',
        titleEn: 'Parabola (Unitary Eccentricity e = 1.0)',
        descAr: 'بعد أي نقطة عن البؤرة يساوي تماماً بعدها عن الدليل المستقيم. الأشعة الموازية للمحور تنعكس في البؤرة بدقة.',
        descEn: 'Distance to focus strictly equals perpendicular distance to directrix. Parallel rays focus at focal point.',
      };
    } else {
      // Hyperbola
      const a = paramA;
      const b = paramB;
      const c = Math.sqrt(a * a + b * b);
      const e = a > 0 ? c / a : 1;
      const d = (a * a) / c;
      const lr = (2 * b * b) / a;
      const asymptoteSlope = b / a;

      return {
        eccentricity: e,
        focalDistance: c,
        f1: { x: -c, y: 0 },
        f2: { x: c, y: 0 },
        directrixX: d,
        asymptotes: asymptoteSlope,
        cartesianLatex: `\\frac{x^2}{${(a * a).toFixed(1)}} - \\frac{y^2}{${(b * b).toFixed(1)}} = 1`,
        polarLatex: `r = \\frac{${(b * b / a).toFixed(2)}}{1 + ${e.toFixed(2)}\\cos\\theta}`,
        latusRectum: lr,
        titleAr: `القطع الزائد (e > 1, e = ${e.toFixed(2)})`,
        titleEn: `Hyperbola (e > 1, e = ${e.toFixed(2)})`,
        descAr: 'الفرق المطلق بين بعدي أي نقطة عن البؤرتين ثابت (2a). يمتلك خطين مقاربين y = ±(b/a)x.',
        descEn: 'Absolute difference of distances to foci is constant 2a. Features linear asymptotes y = ±(b/a)x.',
      };
    }
  }, [conicType, paramA, paramB, paramP]);

  // Canvas render
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#080c14';
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 28; // pixels per unit

    // Draw Cartesian Axes
    ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Axis numbers
    ctx.fillStyle = isLight ? '#64748b' : '#64748b';
    ctx.font = '10px ui-monospace, SFMono-Regular, monospace';
    ctx.textAlign = 'center';
    for (let x = -10; x <= 10; x += 2) {
      if (x === 0) continue;
      ctx.fillText(x.toString(), centerX + x * scale, centerY + 14);
    }

    // 1. Draw Directrix lines (if applicable)
    if (metrics.directrixX !== null) {
      const dX = metrics.directrixX;
      ctx.strokeStyle = '#f59e0b';
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1.5;

      // Positive / Main directrix
      const px1 = centerX + dX * scale;
      ctx.beginPath();
      ctx.moveTo(px1, 0);
      ctx.lineTo(px1, height);
      ctx.stroke();

      if (conicType === 'ellipse' || conicType === 'hyperbola') {
        // Negative directrix
        const px2 = centerX - dX * scale;
        ctx.beginPath();
        ctx.moveTo(px2, 0);
        ctx.lineTo(px2, height);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // 2. Draw Hyperbola Asymptotes
    if (conicType === 'hyperbola' && metrics.asymptotes) {
      const m = metrics.asymptotes;
      ctx.strokeStyle = '#94a3b8';
      ctx.setLineDash([3, 3]);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, centerY + (centerX) * m);
      ctx.lineTo(width, centerY - (width - centerX) * m);
      ctx.moveTo(0, centerY - (centerX) * m);
      ctx.lineTo(width, centerY + (width - centerX) * m);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 3. Draw Conic Curve
    ctx.strokeStyle = isLight ? '#4f46e5' : '#818cf8';
    ctx.lineWidth = 3;

    if (conicType === 'circle') {
      ctx.beginPath();
      ctx.arc(centerX, centerY, paramA * scale, 0, 2 * Math.PI);
      ctx.stroke();
    } else if (conicType === 'ellipse') {
      const a = Math.max(paramA, paramB);
      const b = Math.min(paramA, paramB);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, a * scale, b * scale, 0, 0, 2 * Math.PI);
      ctx.stroke();
    } else if (conicType === 'parabola') {
      const p = paramP;
      ctx.beginPath();
      // y^2 = 4px => x = y^2 / (4p)
      for (let y = -height / 2; y <= height / 2; y += 2) {
        const yUnits = y / scale;
        const xUnits = (yUnits * yUnits) / (4 * p);
        const px = centerX + xUnits * scale;
        const py = centerY - y;
        if (y === -height / 2) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    } else if (conicType === 'hyperbola') {
      const a = paramA;
      const b = paramB;
      // Right branch: x = a * cosh(t), y = b * sinh(t)
      ctx.beginPath();
      for (let t = -2.5; t <= 2.5; t += 0.05) {
        const xUnits = a * Math.cosh(t);
        const yUnits = b * Math.sinh(t);
        const px = centerX + xUnits * scale;
        const py = centerY - yUnits * scale;
        if (t === -2.5) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Left branch
      ctx.beginPath();
      for (let t = -2.5; t <= 2.5; t += 0.05) {
        const xUnits = -a * Math.cosh(t);
        const yUnits = b * Math.sinh(t);
        const px = centerX + xUnits * scale;
        const py = centerY - yUnits * scale;
        if (t === -2.5) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // 4. Draw Foci Points
    const f1X = centerX + metrics.f1.x * scale;
    const f1Y = centerY - metrics.f1.y * scale;

    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(f1X, f1Y, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('F₁', f1X + 8, f1Y - 6);

    if (metrics.f2) {
      const f2X = centerX + metrics.f2.x * scale;
      const f2Y = centerY - metrics.f2.y * scale;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(f2X, f2Y, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.fillText('F₂', f2X + 8, f2Y - 6);
    }

    // 5. Optical Ray Tracing Animation
    if (showRays) {
      ctx.lineWidth = 1.4;

      if (conicType === 'parabola') {
        const p = paramP;
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.75)'; // incoming
        const yStep = (height * 0.7) / (rayCount + 1);

        for (let i = 1; i <= rayCount; i++) {
          const yPx = -height * 0.35 + i * yStep;
          const yUnits = yPx / scale;
          const xUnits = (yUnits * yUnits) / (4 * p);
          const hitX = centerX + xUnits * scale;
          const hitY = centerY - yPx;

          // Parallel incoming ray from left
          ctx.beginPath();
          ctx.moveTo(centerX + 300, hitY);
          ctx.lineTo(hitX, hitY);
          // Reflected ray to focus
          ctx.lineTo(f1X, f1Y);
          ctx.stroke();
        }
      } else if (conicType === 'ellipse') {
        // Rays from F1 reflect to F2
        const a = Math.max(paramA, paramB);
        const b = Math.min(paramA, paramB);
        const angleStep = (2 * Math.PI) / rayCount;
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.75)';

        for (let i = 0; i < rayCount; i++) {
          const theta = i * angleStep;
          const hitX = centerX + a * Math.cos(theta) * scale;
          const hitY = centerY - b * Math.sin(theta) * scale;
          const f2X = centerX + metrics.f2!.x * scale;
          const f2Y = centerY - metrics.f2!.y * scale;

          ctx.beginPath();
          ctx.moveTo(f1X, f1Y);
          ctx.lineTo(hitX, hitY);
          ctx.lineTo(f2X, f2Y);
          ctx.stroke();
        }
      }
    }
  }, [conicType, paramA, paramB, paramP, showRays, rayCount, metrics, isLight, isContrast]);

  const handleOpenReportModal = () => {
    const draft = loadLabReportDraft('math-exp-7');
    if (isArabic) {
      draft.hypothesisAr = `تحقق الخواص الهندسية والبصرية للقطع ${metrics.titleAr}: الاختلاف المركزي e = ${metrics.eccentricity.toFixed(2)}، وتنعكس جميع الأشعة بدقة عبر البؤرة.`;
    } else {
      draft.hypothesisEn = `Verification of conic section optical reflections: eccentricity e = ${metrics.eccentricity.toFixed(2)}, all rays strictly converge to the focal geometry.`;
    }

    draft.dataTableRows = [
      { conic_type: conicType, eccentricity: metrics.eccentricity.toFixed(3), dist_focus: metrics.focalDistance.toFixed(2), dist_directrix: metrics.directrixX ? metrics.directrixX.toFixed(2) : 'N/A', ratio_check: metrics.eccentricity.toFixed(3), focal_property: isArabic ? metrics.descAr : metrics.descEn },
    ];

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
                : 'bg-gradient-to-br from-indigo-500 to-cyan-600 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isArabic ? 'القطوع المخروطية وبصريات الانعكاس البؤري' : 'Conic Sections & Focal Reflection Optics'}
              </h3>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isLight
                    ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60'
                }`}
              >
                Grade 12 Geometry
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
              {isArabic
                ? 'محاكاة تفاعلية للقطع المكافئ والناقص والزائد مع مسارات الأشعة الضوئية المنعكسة في البؤرة'
                : 'Dynamic conics engine with focal ray-tracing, directrix, and eccentricity properties'}
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

      {/* Conic Type Toggle Ribbon */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? 'اختر نوع القطع:' : 'Select Conic Section:'}
        </span>
        {(['circle', 'ellipse', 'parabola', 'hyperbola'] as ConicType[]).map((type) => {
          const isSel = conicType === type;
          const label =
            type === 'circle'
              ? isArabic ? 'دائرة (e=0)' : 'Circle (e=0)'
              : type === 'ellipse'
              ? isArabic ? 'قطع ناقص (e<1)' : 'Ellipse (e<1)'
              : type === 'parabola'
              ? isArabic ? 'قطع مكافئ (e=1)' : 'Parabola (e=1)'
              : isArabic ? 'قطع زائد (e>1)' : 'Hyperbola (e>1)';
          return (
            <button
              key={type}
              onClick={() => setConicType(type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isSel
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                  : isLight
                  ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Canvas Left */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-inner">
            <canvas
              ref={canvasRef}
              width={760}
              height={440}
              className="w-full h-auto aspect-[16/10] block"
            />
            {/* Quick Controls overlay */}
            <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-xl border border-slate-700 text-xs">
              <button
                onClick={() => setShowRays(!showRays)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  showRays ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isArabic ? 'مسار الأشعة البؤرية' : 'Focal Rays'}</span>
              </button>
            </div>
          </div>

          {/* Equation Banner */}
          <div
            className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
              isLight ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950' : 'bg-indigo-950/30 border-indigo-900/40 text-indigo-200'
            }`}
          >
            <div>
              <span className="font-bold block text-sm">{metrics.titleAr}</span>
              <span className="text-[11px] opacity-80">{metrics.descAr}</span>
            </div>
            <div className="font-mono font-bold shrink-0 text-sm">
              <MathRenderer math={metrics.cartesianLatex} />
            </div>
          </div>
        </div>

        {/* Controls Right */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Telemetry Card */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? 'خصائص القطع الهندسية' : 'Conic Telemetry'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                e = {metrics.eccentricity.toFixed(2)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
              <div className={`p-2 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? 'البعد البؤري c' : 'Focal Distance c'}
                </span>
                <span className={`text-sm font-black ${isLight ? 'text-indigo-950' : 'text-indigo-300'}`}>
                  {metrics.focalDistance.toFixed(2)}
                </span>
              </div>
              <div className={`p-2 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? 'الوتر البؤري العمودي' : 'Latus Rectum'}
                </span>
                <span className={`text-sm font-black ${isLight ? 'text-emerald-900' : 'text-emerald-400'}`}>
                  {metrics.latusRectum.toFixed(2)}
                </span>
              </div>
            </div>

            <div className={`p-2.5 rounded-lg border text-[11px] font-mono ${
              isLight ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-950 border-slate-800 text-slate-300'
            }`}>
              <div className="flex justify-between">
                <span>{isArabic ? 'معادلة الدليل:' : 'Directrix:'}</span>
                <span className="font-bold text-amber-500">
                  {metrics.directrixX !== null ? `x = ±${metrics.directrixX.toFixed(2)}` : 'None'}
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span>{isArabic ? 'الصورة القطبية:' : 'Polar Form:'}</span>
                <span className="font-bold text-indigo-400">{metrics.polarLatex}</span>
              </div>
            </div>
          </div>

          {/* Parameter Sliders */}
          <div
            className={`p-4 rounded-xl border space-y-3.5 text-xs ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <h4 className={`font-bold flex items-center gap-1.5 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              <Sliders className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'تعديل المعاملات الهندسية' : 'Adjust Geometric Parameters'}</span>
            </h4>

            {conicType === 'parabola' ? (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                    {isArabic ? 'معامل البؤرة (p):' : 'Focal Parameter (p):'}
                  </span>
                  <span className="font-mono font-bold text-indigo-500">{paramP.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={paramP}
                  onChange={(e) => setParamP(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            ) : (
              <>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                      {isArabic ? 'نصف المحور الأكبر (a):' : 'Semi-major Axis (a):'}
                    </span>
                    <span className="font-mono font-bold text-indigo-500">{paramA}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    step="0.5"
                    value={paramA}
                    onChange={(e) => setParamA(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                {conicType !== 'circle' && (
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                        {isArabic ? 'نصف المحور الأصغر (b):' : 'Semi-minor Axis (b):'}
                      </span>
                      <span className="font-mono font-bold text-indigo-500">{paramB}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      step="0.5"
                      value={paramB}
                      onChange={(e) => setParamB(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                  </div>
                )}
              </>
            )}

            {/* Rays Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'عدد الأشعة البصرية:' : 'Number of Optical Rays:'}
                </span>
                <span className="font-mono font-bold text-emerald-500">{rayCount}</span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                step="2"
                value={rayCount}
                onChange={(e) => setRayCount(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Optics Law Insight */}
            <div className={`p-3 rounded-lg border text-[11px] leading-relaxed ${
              isLight ? 'bg-cyan-100/70 border-cyan-300 text-cyan-950 font-medium' : 'bg-cyan-950/40 border-cyan-800/60 text-cyan-300'
            }`}>
              <span className="font-bold block mb-1">
                {isArabic ? 'الخاصية الانعكاسية البؤرية في التطبيقات:' : 'Reflective Optical Property:'}
              </span>
              <span>
                {conicType === 'parabola'
                  ? isArabic
                    ? 'الأشعة الموازية لمحور التماثل تنعكس بدقة في البؤرة الوحيدة، وهو الأساس العلمي لأطباق الأقمار الصناعية وكشافات السيارات.'
                    : 'Incoming parallel rays strictly reflect into the single focus point (satellite dishes & headlights).'
                  : conicType === 'ellipse'
                  ? isArabic
                    ? 'الأمواج المنبعثة من البؤرة الأولى ترتد عن الجدران لتتركز في البؤرة الثانية في نفس اللحظة (قاعة الهمس وتفتيت حصى الكلى بالموجات).'
                    : 'Rays radiating from F1 reflect synchronously to focus F2 (whispering galleries & medical lithotripsy).'
                  : isArabic
                  ? 'الأشعة الموجهة نحو البؤرة البعيدة تنعكس لتبدو وكأنها خرجت من البؤرة القريبة (تلسكوب كاسيجرين الفضائي).'
                  : 'Rays aimed toward the far focus reflect outward as if emerging from the near focus (Cassegrain telescopes).'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isReportModalOpen && (
        <LabReportGeneratorModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          initialExperimentId="math-exp-7"
          lang={lang}
          theme={theme}
        />
      )}
    </div>
  );
};
