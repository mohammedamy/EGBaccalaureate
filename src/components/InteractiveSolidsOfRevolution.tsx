import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Rotate3d,
  Sparkles,
  Sliders,
  FileText,
  Play,
  Pause,
} from 'lucide-react';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { loadLabReportDraft, saveLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

interface PresetFunction {
  id: string;
  nameAr: string;
  nameEn: string;
  latex: string;
  fn: (x: number) => number;
  fnInner?: (x: number) => number;
  defaultA: number;
  defaultB: number;
  exactVolume: (a: number, b: number) => number;
  descriptionAr: string;
  descriptionEn: string;
}

const PRESETS: PresetFunction[] = [
  {
    id: 'paraboloid',
    nameAr: 'مجسم مكافئ دوراني (جذر سين)',
    nameEn: 'Paraboloid of Revolution (√x)',
    latex: 'y = \\sqrt{x}, \\quad V = \\pi \\int_a^b x \\, dx',
    fn: (x) => Math.sqrt(Math.max(0, x)),
    defaultA: 0,
    defaultB: 4,
    exactVolume: (a, b) => Math.PI * 0.5 * (b * b - a * a),
    descriptionAr: 'دوران منحنى الدالة الجذرية ينتج مجسماً مكافئاً دوراني يشبه عاكس الضوء أو هوائي الاستقبال.',
    descriptionEn: 'Rotating square root curve produces a circular paraboloid used in satellite dish reflectors.',
  },
  {
    id: 'cone',
    nameAr: 'المخروط الدائري القائم (دالة خطية)',
    nameEn: 'Right Circular Cone (Linear)',
    latex: 'y = 0.5x, \\quad V = \\pi \\int_a^b (0.25 x^2) \\, dx',
    fn: (x) => 0.5 * x,
    defaultA: 0,
    defaultB: 4,
    exactVolume: (a, b) => (Math.PI * 0.25 / 3) * (Math.pow(b, 3) - Math.pow(a, 3)),
    descriptionAr: 'دوران خط مستقيم يمر بنقطة الأصل ينتج مخروطاً دائرياً يطابق قانون حجم المخروط ⅓ مساحة القاعدة × الارتفاع.',
    descriptionEn: 'Rotating a straight line generates a right cone, validating the classic formula V = ⅓πr²h.',
  },
  {
    id: 'sphere',
    nameAr: 'نصف كرة مصمتة (دائرة نصف قطرها ٤)',
    nameEn: 'Hemisphere Solid of Revolution',
    latex: 'y = \\sqrt{16 - x^2}, \\quad V = \\pi \\int_a^b (16 - x^2) \\, dx',
    fn: (x) => Math.sqrt(Math.max(0, 16 - x * x)),
    defaultA: 0,
    defaultB: 4,
    exactVolume: (a, b) => Math.PI * (16 * (b - a) - (Math.pow(b, 3) - Math.pow(a, 3)) / 3),
    descriptionAr: 'دوران ربع دائرة حول محور السينات ينتج نصف كرة مصمتة نصف قطرها ٤ وحدات.',
    descriptionEn: 'Rotating a quarter-circle around the x-axis yields a hemisphere with radius R=4.',
  },
  {
    id: 'vase',
    nameAr: 'إناء متموج (دالة جيبية)',
    nameEn: 'Wavy Vase Profile (Sinusoidal)',
    latex: 'y = 1.6 + 0.5\\sin(x), \\quad V = \\pi \\int_a^b [1.6 + 0.5\\sin(x)]^2 \\, dx',
    fn: (x) => 1.6 + 0.5 * Math.sin(x),
    defaultA: 0,
    defaultB: 6.28,
    exactVolume: (a, b) => {
      const F = (x: number) => 2.685 * x - 1.6 * Math.cos(x) - 0.0625 * Math.sin(2 * x);
      return Math.PI * (F(b) - F(a));
    },
    descriptionAr: 'مجسم تصميم هندسي يشبه إناء زجاجي أو فازة كلاسيكية باستخدام تذبذب دالة الجيب.',
    descriptionEn: 'Harmonic sine curve creates an architectural contoured vase with undulating curvature.',
  },
  {
    id: 'washer',
    nameAr: 'حلقة مجوفة - طريقة الوشيعة (Washer)',
    nameEn: 'Hollow Washer Solid (Between 2 Curves)',
    latex: 'R(x) = \\sqrt{x}, \\; r(x) = x^2, \\quad V = \\pi \\int_0^1 (x - x^4) \\, dx',
    fn: (x) => Math.sqrt(Math.max(0, x)),
    fnInner: (x) => x * x,
    defaultA: 0,
    defaultB: 1,
    exactVolume: (a, b) => Math.PI * ((b * b / 2 - Math.pow(b, 5) / 5) - (a * a / 2 - Math.pow(a, 5) / 5)),
    descriptionAr: 'المنطقة المحصورة بين منحنيين تدور لإنتاج حلقة مجوفة، باستخدام قانون الأقراص المجوفة (الوشيعات).',
    descriptionEn: 'Area enclosed between y=√x and y=x² revolves to create a hollowed bowl with inner cavity.',
  },
];

export const InteractiveSolidsOfRevolution: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedPresetId, setSelectedPresetId] = useState<string>('paraboloid');
  const currentPreset = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];

  const [boundA, setBoundA] = useState<number>(currentPreset.defaultA);
  const [boundB, setBoundB] = useState<number>(currentPreset.defaultB);
  const [sliceCountN, setSliceCountN] = useState<number>(16);
  const [revolutionAngleDeg, setRevolutionAngleDeg] = useState<number>(360);
  const [displayMode, setDisplayMode] = useState<'discs' | 'smooth' | 'wireframe'>('discs');
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    setBoundA(currentPreset.defaultA);
    setBoundB(currentPreset.defaultB);
  }, [selectedPresetId]);

  useEffect(() => {
    if (!isRotating) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    let lastTime = performance.now();
    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      setRevolutionAngleDeg((prev) => {
        const next = prev + dt * 45;
        return next > 360 ? 30 : next;
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isRotating]);

  const { exactVol, riemannVol, percentError, discRadii } = useMemo(() => {
    const a = Math.min(boundA, boundB);
    const b = Math.max(boundA, boundB);
    const deltaX = (b - a) / Math.max(1, sliceCountN);

    let riemannSum = 0;
    const radii: { x: number; R: number; r: number; volume: number }[] = [];

    for (let i = 0; i < sliceCountN; i++) {
      const midX = a + (i + 0.5) * deltaX;
      const R = Math.max(0, currentPreset.fn(midX));
      const r = currentPreset.fnInner ? Math.max(0, currentPreset.fnInner(midX)) : 0;
      const sliceVol = Math.PI * (R * R - r * r) * deltaX;
      riemannSum += sliceVol;
      radii.push({ x: midX, R, r, volume: sliceVol });
    }

    const exact = Math.max(0, currentPreset.exactVolume(a, b));
    const err = exact > 0 ? Math.abs((riemannSum - exact) / exact) * 100 : 0;

    return {
      exactVol: exact,
      riemannVol: riemannSum,
      percentError: err,
      discRadii: radii,
    };
  }, [boundA, boundB, sliceCountN, currentPreset]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#090d16';
    ctx.fillRect(0, 0, width, height);

    const originX = width * 0.18;
    const originY = height * 0.52;
    const scaleX = (width * 0.65) / Math.max(1, boundB - boundA);
    const maxR = Math.max(...discRadii.map((d) => d.R), 2);
    const scaleY = (height * 0.32) / Math.max(0.1, maxR);
    const tilt = 0.38;

    ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(originX - 30, originY);
    ctx.lineTo(width * 0.88, originY);
    ctx.stroke();

    ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
    ctx.font = '10px ui-monospace, SFMono-Regular, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('X (Axis of Revolution)', width * 0.85, originY + 16);

    const sweepRad = (revolutionAngleDeg * Math.PI) / 180;

    discRadii.forEach((disc, idx) => {
      const px = originX + (disc.x - Math.min(boundA, boundB)) * scaleX;
      const outerRadiusY = disc.R * scaleY;
      const outerRadiusZ = outerRadiusY * tilt;
      const innerRadiusY = disc.r * scaleY;
      const innerRadiusZ = innerRadiusY * tilt;
      const sliceWidth = (scaleX * (boundB - boundA)) / sliceCountN;

      const alpha = 0.55 + (idx / sliceCountN) * 0.35;
      const discColor = isLight
        ? `rgba(79, 70, 229, ${alpha * 0.6})`
        : `rgba(99, 102, 241, ${alpha * 0.7})`;
      const discBorder = isLight ? '#4338ca' : '#a5b4fc';

      if (displayMode === 'discs') {
        ctx.fillStyle = discColor;
        ctx.strokeStyle = discBorder;
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.ellipse(px + sliceWidth / 2, originY, outerRadiusZ, outerRadiusY, 0, -sweepRad / 2, sweepRad / 2);
        if (disc.r > 0) {
          ctx.ellipse(px + sliceWidth / 2, originY, innerRadiusZ, innerRadiusY, 0, sweepRad / 2, -sweepRad / 2, true);
        }
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = isLight ? 'rgba(67, 56, 202, 0.4)' : 'rgba(165, 180, 252, 0.3)';
        ctx.beginPath();
        ctx.moveTo(px - sliceWidth / 2, originY - outerRadiusY);
        ctx.lineTo(px + sliceWidth / 2, originY - outerRadiusY);
        ctx.moveTo(px - sliceWidth / 2, originY + outerRadiusY);
        ctx.lineTo(px + sliceWidth / 2, originY + outerRadiusY);
        ctx.stroke();
      } else if (displayMode === 'wireframe') {
        ctx.strokeStyle = isLight ? '#6366f1' : '#818cf8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(px, originY, outerRadiusZ, outerRadiusY, 0, -sweepRad / 2, sweepRad / 2);
        ctx.stroke();
      } else {
        ctx.fillStyle = discColor;
        ctx.strokeStyle = discBorder;
        ctx.beginPath();
        ctx.ellipse(px, originY, outerRadiusZ, outerRadiusY, 0, -sweepRad / 2, sweepRad / 2);
        ctx.fill();
      }
    });

    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    const steps = 100;
    const a = Math.min(boundA, boundB);
    const b = Math.max(boundA, boundB);
    for (let s = 0; s <= steps; s++) {
      const curX = a + (s / steps) * (b - a);
      const curY = currentPreset.fn(curX);
      const cx = originX + (curX - a) * scaleX;
      const cy = originY - curY * scaleY;
      if (s === 0) ctx.moveTo(cx, cy);
      else ctx.lineTo(cx, cy);
    }
    ctx.stroke();

    if (currentPreset.fnInner) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let s = 0; s <= steps; s++) {
        const curX = a + (s / steps) * (b - a);
        const curY = currentPreset.fnInner(curX);
        const cx = originX + (curX - a) * scaleX;
        const cy = originY - curY * scaleY;
        if (s === 0) ctx.moveTo(cx, cy);
        else ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }

    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(30, 25, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(isArabic ? 'المنحنى المولد R(x)' : 'Generating Curve R(x)', 42, 28);

    if (currentPreset.fnInner) {
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(30, 45, 4, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.fillText(isArabic ? 'المنحنى الداخلي r(x)' : 'Inner Curve r(x)', 42, 48);
    }
  }, [discRadii, boundA, boundB, revolutionAngleDeg, displayMode, isLight, isContrast, currentPreset, sliceCountN, isArabic]);

  const handleOpenReportModal = () => {
    const draft = loadLabReportDraft('math-exp-6');
    if (isArabic) {
      draft.hypothesisAr = `حجم الجسم الدوراني المحسوب بمجموع ريمان لـ ${sliceCountN} قرصاً (${riemannVol.toFixed(3)}) يتقارب مع التكامل الحقيقي (${exactVol.toFixed(3)}) بنسبة خطأ ${percentError.toFixed(2)}%.`;
    } else {
      draft.hypothesisEn = `The Riemann slice sum for ${sliceCountN} discs (${riemannVol.toFixed(3)}) converges to exact integral (${exactVol.toFixed(3)}) with ${percentError.toFixed(2)}% error.`;
    }
    
    draft.dataTableRows = discRadii.slice(0, 6).map((d, i) => ({
      trial: isArabic ? `القرص ${i + 1}` : `Disc ${i + 1}`,
      slice_width: ((Math.max(boundA, boundB) - Math.min(boundA, boundB)) / Math.max(1, sliceCountN)).toFixed(3),
      approx_vol: d.volume.toFixed(3),
      exact_vol: exactVol.toFixed(3),
      error_pct: `${percentError.toFixed(2)}%`,
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
      {/* Experiment Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-indigo-400 text-indigo-400'
                : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <Rotate3d className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isArabic ? 'حجوم الأجسام الدورانية وتكامل الأقراص (ريمان)' : 'Solids of Revolution & Riemann Discs'}
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
                ? 'محاكاة ثلاثية الأبعاد لدوران المنحنيات حول المحاور وحساب الحجم بتكامل الأقراص والوشيعات'
                : 'Interactive 3D cylindrical slice simulation: Disc & Washer integration method'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleOpenReportModal}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تقرير المعمل' : 'Lab Report'}</span>
          </button>
        </div>
      </div>

      {/* Preset Selector Ribbon */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? 'اختر المجسم النموذجي:' : 'Select Model Preset:'}
        </span>
        {PRESETS.map((p) => {
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

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left: Canvas Simulation Viewport */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-inner">
            <canvas
              ref={canvasRef}
              width={760}
              height={440}
              className="w-full h-auto aspect-[16/10] block"
            />
            <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md p-1 rounded-xl border border-slate-700 text-xs">
              <button
                onClick={() => setDisplayMode('discs')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  displayMode === 'discs' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'أقراص ريمان' : 'Discs'}
              </button>
              <button
                onClick={() => setDisplayMode('smooth')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  displayMode === 'smooth' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'مجسم مصمت' : 'Solid'}
              </button>
              <button
                onClick={() => setDisplayMode('wireframe')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  displayMode === 'wireframe' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'هيكل سلكي' : 'Wireframe'}
              </button>
            </div>

            <button
              onClick={() => setIsRotating(!isRotating)}
              className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 shadow-md backdrop-blur-md cursor-pointer"
            >
              {isRotating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isRotating ? (isArabic ? 'إيقاف الدوران' : 'Pause') : (isArabic ? 'دوران مستمر' : 'Rotate')}</span>
            </button>
          </div>

          <div
            className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
              isLight ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950' : 'bg-indigo-950/30 border-indigo-900/40 text-indigo-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <span className="font-bold block">{isArabic ? currentPreset.nameAr : currentPreset.nameEn}</span>
                <span className="text-[11px] opacity-80">{isArabic ? currentPreset.descriptionAr : currentPreset.descriptionEn}</span>
              </div>
            </div>
            <div className="font-mono font-bold shrink-0 text-sm">
              <MathRenderer math={currentPreset.latex} />
            </div>
          </div>
        </div>

        {/* Right: Telemetry & Controls */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? 'مقارنة الحجم: النظري vs التقريبي' : 'Volume Telemetry & Convergence'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                ΔV: {percentError.toFixed(2)}%
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono">
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? 'التكامل التحليلي الدقيق' : 'Analytical Exact'}
                </span>
                <span className={`text-sm font-black ${isLight ? 'text-indigo-900' : 'text-indigo-400'}`}>
                  {exactVol.toFixed(3)}
                </span>
                <span className="text-[9px] opacity-60 block">units³</span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? `مجموع ${sliceCountN} قرصاً` : `Riemann ${sliceCountN} Discs`}
                </span>
                <span className={`text-sm font-black ${isLight ? 'text-emerald-900' : 'text-emerald-400'}`}>
                  {riemannVol.toFixed(3)}
                </span>
                <span className="text-[9px] opacity-60 block">units³</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                  {isArabic ? 'دقة التقارب (Convergence)' : 'Convergence Accuracy'}
                </span>
                <span className="font-bold font-mono">{(100 - percentError).toFixed(1)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-300"
                  style={{ width: `${Math.max(5, Math.min(100, 100 - percentError))}%` }}
                />
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border space-y-3.5 text-xs ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <h4 className={`font-bold flex items-center gap-1.5 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              <Sliders className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'معاملات التكامل وحدود الدوران' : 'Integration & Sweep Parameters'}</span>
            </h4>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'عدد أقراص ريمان (N):' : 'Number of Discs (N):'}
                </span>
                <span className="font-mono font-bold text-indigo-500">{sliceCountN}</span>
              </div>
              <input
                type="range"
                min="4"
                max="60"
                step="2"
                value={sliceCountN}
                onChange={(e) => setSliceCountN(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'زاوية الدوران المحوري (θ):' : 'Revolution Sweep Angle (θ):'}
                </span>
                <span className="font-mono font-bold text-indigo-500">{revolutionAngleDeg.toFixed(0)}°</span>
              </div>
              <input
                type="range"
                min="30"
                max="360"
                step="10"
                value={revolutionAngleDeg}
                onChange={(e) => setRevolutionAngleDeg(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'الحد العلوي للتكامل (b):' : 'Upper Integration Bound (b):'}
                </span>
                <span className="font-mono font-bold text-indigo-500">{boundB.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={boundB}
                onChange={(e) => setBoundB(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div className={`p-3 rounded-lg border text-[11px] leading-relaxed ${
              isLight ? 'bg-indigo-100/70 border-indigo-300 text-indigo-950 font-medium' : 'bg-indigo-950/40 border-indigo-800/60 text-indigo-300'
            }`}>
              <span className="font-bold block mb-1">
                {isArabic ? 'قاعدة ريمان لحجوم الأجسام الدورانية:' : 'Riemann Cylindrical Slice Rule:'}
              </span>
              <span>
                {isArabic
                  ? 'عندما تؤول سماكة القرص Δx إلى الصفر (N → ∞)، يتحول مجموع ريمان للأقراص الأسطوانية بدقة متناهية إلى التكامل المحدد المحدد بقانون نيوتن-لايبنتز.'
                  : 'As slice thickness Δx approaches zero (N → ∞), the discrete sum of cylindrical volumes strictly converges to the Riemann integral.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isReportModalOpen && (
        <LabReportGeneratorModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          initialExperimentId="math-exp-6"
          lang={lang}
          theme={theme}
        />
      )}
    </div>
  );
};
