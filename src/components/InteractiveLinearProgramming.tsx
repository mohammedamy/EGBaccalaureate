import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  TrendingUp,
  FileText,
  Target,
  CheckCircle2,
} from 'lucide-react';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { loadLabReportDraft, saveLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

interface Constraint {
  id: string;
  a: number; // coefficient of x
  b: number; // coefficient of y
  c: number; // RHS
  type: '<=' | '>=';
  labelAr: string;
  labelEn: string;
}

interface LPPreset {
  id: string;
  titleAr: string;
  titleEn: string;
  goal: 'max' | 'min';
  objC1: number; // coefficient for x in Z = c1*x + c2*y
  objC2: number; // coefficient for y
  constraints: Constraint[];
  descriptionAr: string;
  descriptionEn: string;
  latexObj: string;
}

const LP_PRESETS: LPPreset[] = [
  {
    id: 'factory',
    titleAr: 'تعظيم أرباح مصنع الأجهزة (Production Maxima)',
    titleEn: 'Factory Manufacturing Profit Maximization',
    goal: 'max',
    objC1: 50,
    objC2: 40,
    latexObj: 'Z = 50x + 40y \\quad (\\text{Maximize})',
    constraints: [
      { id: 'c1', a: 1, b: 2, c: 12, type: '<=', labelAr: 'ساعات التجميع: x + 2y ≤ 12', labelEn: 'Assembly Hours: x + 2y ≤ 12' },
      { id: 'c2', a: 2, b: 1, c: 12, type: '<=', labelAr: 'ساعات الاختبار: 2x + y ≤ 12', labelEn: 'Testing Hours: 2x + y ≤ 12' },
    ],
    descriptionAr: 'مصنع ينتج نوعين من الأجهزة تحت قيود ساعات التجميع والاختبار. الهدف إيجاد الإنتاج اليومي الأمثل.',
    descriptionEn: 'Manufacturing plant producing two device types with assembly and testing hour constraints.',
  },
  {
    id: 'agriculture',
    titleAr: 'توزيع المحاصيل الزراعية ومياه الري (Crop Allocation)',
    titleEn: 'Agricultural Land & Water Optimization',
    goal: 'max',
    objC1: 70,
    objC2: 40,
    latexObj: 'Z = 70x + 40y \\quad (\\text{Maximize Yield})',
    constraints: [
      { id: 'c1', a: 1, b: 1, c: 10, type: '<=', labelAr: 'المساحة الكلية: x + y ≤ 10 فدان', labelEn: 'Total Land: x + y ≤ 10 acres' },
      { id: 'c2', a: 3, b: 1, c: 18, type: '<=', labelAr: 'حصة مياه الري: 3x + y ≤ 18 حصة', labelEn: 'Irrigation Water: 3x + y ≤ 18' },
    ],
    descriptionAr: 'مزرعة توزع أرضها بين القمح والخضروات لتحقيق أعلى عائد مع الالتزام بالمساحة المتاحة وحصة المياه.',
    descriptionEn: 'Optimal acreage allocation between two crops under land capacity and irrigation quotas.',
  },
  {
    id: 'diet',
    titleAr: 'تقليل تكلفة النظام الغذائي (Diet Cost Minimization)',
    titleEn: 'Nutritional Diet Cost Minimization',
    goal: 'min',
    objC1: 20,
    objC2: 25,
    latexObj: 'Z = 20x + 25y \\quad (\\text{Minimize Cost})',
    constraints: [
      { id: 'c1', a: 2, b: 1, c: 6, type: '>=', labelAr: 'الحد الأدنى للبروتين: 2x + y ≥ 6', labelEn: 'Protein Minimum: 2x + y ≥ 6' },
      { id: 'c2', a: 1, b: 2, c: 6, type: '>=', labelAr: 'الحد الأدنى للفيتامينات: x + 2y ≥ 6', labelEn: 'Vitamin Minimum: x + 2y ≥ 6' },
      { id: 'c3', a: 1, b: 0, c: 8, type: '<=', labelAr: 'الحد الأقصى للكمية x: x ≤ 8', labelEn: 'Upper Cap x: x ≤ 8' },
      { id: 'c4', a: 0, b: 1, c: 8, type: '<=', labelAr: 'الحد الأقصى للكمية y: y ≤ 8', labelEn: 'Upper Cap y: y ≤ 8' },
    ],
    descriptionAr: 'تصغير تكلفة شراء نوعين من الأغذية لتوفير الاحتياجات الغذائية اليومية الأساسية بأقل ميزانية.',
    descriptionEn: 'Minimize cost while fulfilling minimum daily nutritional requirements for protein and vitamins.',
  },
];

export const InteractiveLinearProgramming: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedPresetId, setSelectedPresetId] = useState<string>('factory');
  const currentPreset = LP_PRESETS.find((p) => p.id === selectedPresetId) || LP_PRESETS[0];

  const [objC1, setObjC1] = useState<number>(currentPreset.objC1);
  const [objC2, setObjC2] = useState<number>(currentPreset.objC2);
  const [currentZ, setCurrentZ] = useState<number>(200);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setObjC1(currentPreset.objC1);
    setObjC2(currentPreset.objC2);
  }, [selectedPresetId]);

  // Compute vertices of the feasible region by checking line intersections
  const { vertices, optimalVertex, minPossibleZ, maxPossibleZ } = useMemo(() => {
    // Collect all boundary lines: constraints plus x=0, y=0
    const lines = [
      ...currentPreset.constraints.map((c) => ({ a: c.a, b: c.b, c: c.c })),
      { a: 1, b: 0, c: 0 }, // x = 0
      { a: 0, b: 1, c: 0 }, // y = 0
    ];

    const candPoints: { x: number; y: number }[] = [];

    // Find pairwise intersections
    for (let i = 0; i < lines.length; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        const l1 = lines[i];
        const l2 = lines[j];
        const det = l1.a * l2.b - l1.b * l2.a;
        if (Math.abs(det) < 0.0001) continue; // Parallel

        const x = (l1.c * l2.b - l1.b * l2.c) / det;
        const y = (l1.a * l2.c - l1.c * l2.a) / det;

        // Check non-negativity and bounds
        if (x >= -0.001 && y >= -0.001 && x <= 14 && y <= 14) {
          // Check if satisfies all constraints
          let satisfies = true;
          for (const c of currentPreset.constraints) {
            const val = c.a * x + c.b * y;
            if (c.type === '<=' && val > c.c + 0.05) satisfies = false;
            if (c.type === '>=' && val < c.c - 0.05) satisfies = false;
          }
          if (satisfies) {
            // Avoid duplicate vertices
            const isDup = candPoints.some((p) => Math.hypot(p.x - x, p.y - y) < 0.08);
            if (!isDup) {
              candPoints.push({ x: Math.max(0, Math.round(x * 100) / 100), y: Math.max(0, Math.round(y * 100) / 100) });
            }
          }
        }
      }
    }

    // Sort vertices counter-clockwise around centroid to draw a convex polygon
    if (candPoints.length > 2) {
      const centerX = candPoints.reduce((s, p) => s + p.x, 0) / candPoints.length;
      const centerY = candPoints.reduce((s, p) => s + p.y, 0) / candPoints.length;
      candPoints.sort((p1, p2) => {
        const a1 = Math.atan2(p1.y - centerY, p1.x - centerX);
        const a2 = Math.atan2(p2.y - centerY, p2.x - centerX);
        return a1 - a2;
      });
    }

    // Evaluate Z at all vertices
    const evaluated = candPoints.map((v) => ({
      ...v,
      z: objC1 * v.x + objC2 * v.y,
    }));

    let opt = evaluated[0] || { x: 0, y: 0, z: 0 };
    for (const v of evaluated) {
      if (currentPreset.goal === 'max' && v.z > opt.z) opt = v;
      if (currentPreset.goal === 'min' && v.z < opt.z) opt = v;
    }

    const allZ = evaluated.map((v) => v.z);
    const minZ = allZ.length > 0 ? Math.min(...allZ) : 0;
    const maxZ = allZ.length > 0 ? Math.max(...allZ) : 500;

    return {
      vertices: evaluated,
      optimalVertex: opt,
      minPossibleZ: minZ,
      maxPossibleZ: maxZ,
    };
  }, [currentPreset, objC1, objC2]);

  // Set initial currentZ near optimal
  useEffect(() => {
    if (optimalVertex) {
      setCurrentZ(Math.round(optimalVertex.z * 0.8));
    }
  }, [optimalVertex]);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const marginX = 55;
    const marginY = 45;
    const plotW = width - marginX - 30;
    const plotH = height - marginY - 30;

    const maxCoord = 14;
    const toPxX = (x: number) => marginX + (x / maxCoord) * plotW;
    const toPxY = (y: number) => height - marginY - (y / maxCoord) * plotH;

    ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#080c14';
    ctx.fillRect(0, 0, width, height);

    // Grid lines & ticks
    ctx.strokeStyle = isLight ? '#e2e8f0' : '#1e293b';
    ctx.lineWidth = 1;
    for (let c = 0; c <= maxCoord; c += 2) {
      // vertical
      ctx.beginPath();
      ctx.moveTo(toPxX(c), toPxY(0));
      ctx.lineTo(toPxX(c), toPxY(maxCoord));
      ctx.stroke();

      // horizontal
      ctx.beginPath();
      ctx.moveTo(toPxX(0), toPxY(c));
      ctx.lineTo(toPxX(maxCoord), toPxY(c));
      ctx.stroke();

      // numbers
      ctx.fillStyle = isLight ? '#64748b' : '#64748b';
      ctx.font = '10px ui-monospace, SFMono-Regular, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(c.toString(), toPxX(c), toPxY(0) + 16);
      ctx.textAlign = 'right';
      ctx.fillText(c.toString(), toPxX(0) - 8, toPxY(c) + 4);
    }

    // Main Axes
    ctx.strokeStyle = isLight ? '#334155' : '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(toPxX(0), toPxY(0));
    ctx.lineTo(toPxX(maxCoord), toPxY(0));
    ctx.moveTo(toPxX(0), toPxY(0));
    ctx.lineTo(toPxX(0), toPxY(maxCoord));
    ctx.stroke();

    // Axis titles
    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('X', toPxX(maxCoord) + 20, toPxY(0) + 4);
    ctx.fillText('Y', toPxX(0) + 4, toPxY(maxCoord) - 10);

    // 1. Shaded Feasible Polygon
    if (vertices.length > 2) {
      ctx.fillStyle = isLight ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.25)';
      ctx.strokeStyle = isLight ? '#4f46e5' : '#818cf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      vertices.forEach((v, i) => {
        const px = toPxX(v.x);
        const py = toPxY(v.y);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // 2. Draw Constraint Lines
    currentPreset.constraints.forEach((c, idx) => {
      ctx.strokeStyle = idx === 0 ? '#3b82f6' : idx === 1 ? '#10b981' : '#f59e0b';
      ctx.lineWidth = 1.8;
      ctx.beginPath();

      if (Math.abs(c.b) < 0.001) {
        // Vertical line x = c.c / c.a
        const x = c.c / c.a;
        ctx.moveTo(toPxX(x), toPxY(0));
        ctx.lineTo(toPxX(x), toPxY(maxCoord));
      } else if (Math.abs(c.a) < 0.001) {
        // Horizontal line y = c.c / c.b
        const y = c.c / c.b;
        ctx.moveTo(toPxX(0), toPxY(y));
        ctx.lineTo(toPxX(maxCoord), toPxY(y));
      } else {
        // Line y = (c.c - c.a*x) / c.b
        const yAt0 = c.c / c.b;
        const xAt0 = c.c / c.a;
        ctx.moveTo(toPxX(0), toPxY(yAt0));
        ctx.lineTo(toPxX(xAt0), toPxY(0));
      }
      ctx.stroke();
    });

    // 3. Draw Sweeping Objective Line (c1*x + c2*y = currentZ)
    if (objC2 > 0) {
      ctx.strokeStyle = '#ef4444';
      ctx.setLineDash([5, 4]);
      ctx.lineWidth = 2.2;
      ctx.beginPath();

      const yAt0 = currentZ / objC2;
      const xAt0 = objC1 > 0 ? currentZ / objC1 : maxCoord;

      ctx.moveTo(toPxX(0), toPxY(yAt0));
      ctx.lineTo(toPxX(xAt0), toPxY(0));
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`Z = ${currentZ}`, toPxX(Math.min(maxCoord - 2, xAt0 / 2)), toPxY(Math.min(maxCoord - 1, yAt0 / 2)) - 8);
    }

    // 4. Draw Corner Vertices Points
    vertices.forEach((v) => {
      const px = toPxX(v.x);
      const py = toPxY(v.y);
      const isOptimal = optimalVertex && Math.hypot(v.x - optimalVertex.x, v.y - optimalVertex.y) < 0.1;

      ctx.fillStyle = isOptimal ? '#10b981' : '#6366f1';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(px, py, isOptimal ? 6 : 4, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Vertex label
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.font = isOptimal ? 'bold 11px sans-serif' : '10px sans-serif';
      ctx.textAlign = v.x > 7 ? 'right' : 'left';
      ctx.fillText(`(${v.x}, ${v.y})`, px + (v.x > 7 ? -8 : 8), py - 6);
    });
  }, [vertices, optimalVertex, currentZ, currentPreset, objC1, objC2, isLight, isContrast]);

  const handleOpenReportModal = () => {
    const draft = loadLabReportDraft('math-exp-10');
    if (isArabic) {
      draft.hypothesisAr = `الحل الأمثل لنموذج ${currentPreset.titleAr} يتحقق بدقة عند الرأس (${optimalVertex.x}, ${optimalVertex.y}) بقيمة عظمى/صغرى Z = ${optimalVertex.z}.`;
    } else {
      draft.hypothesisEn = `Optimal LP solution for ${currentPreset.titleEn} occurs at extreme vertex (${optimalVertex.x}, ${optimalVertex.y}) with optimum value Z = ${optimalVertex.z}.`;
    }

    draft.dataTableRows = vertices.map((v) => {
      const isOpt = Math.hypot(v.x - optimalVertex.x, v.y - optimalVertex.y) < 0.1;
      return {
        vertex_label: `(${v.x.toFixed(1)}, ${v.y.toFixed(1)})`,
        constraint_1: currentPreset.constraints[0] ? `${(currentPreset.constraints[0].a * v.x + currentPreset.constraints[0].b * v.y).toFixed(1)} ≤ ${currentPreset.constraints[0].c}` : '-',
        constraint_2: currentPreset.constraints[1] ? `${(currentPreset.constraints[1].a * v.x + currentPreset.constraints[1].b * v.y).toFixed(1)} ≤ ${currentPreset.constraints[1].c}` : '-',
        obj_val: v.z.toFixed(1),
        optimality: isOpt ? (isArabic ? 'الحل الأمثل المطلق ★' : 'Optimal Vertex ★') : (isArabic ? 'نقطة حل ممكنة' : 'Feasible Vertex'),
      };
    });

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
                : 'bg-gradient-to-br from-indigo-500 to-amber-500 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isArabic ? 'البرمجة الخطية ومنطقة الحلول الممكنة والحل الأمثل' : 'Linear Programming & Feasible Polygon Optimizer'}
              </h3>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isLight
                    ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60'
                }`}
              >
                Grade 12 Algebra
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
              {isArabic
                ? 'تحديد منطقة الحل الممكن لعدة متباينات خطية وإيجاد الرأس الأمثل لدالة الهدف (الأرباح أو التكاليف)'
                : 'Interactive convex polygon boundary solver, objective line sweep, and optimal vertex finder'}
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
          {isArabic ? 'اختر مسألة البرمجة الخطية:' : 'Select Problem Model:'}
        </span>
        {LP_PRESETS.map((p) => {
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
              {isArabic ? p.titleAr : p.titleEn}
            </button>
          );
        })}
      </div>

      {/* Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-inner">
            <canvas
              ref={canvasRef}
              width={760}
              height={440}
              className="w-full h-auto aspect-[16/10] block"
            />
            {/* Legend */}
            <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-200">
              <span className="w-3 h-3 rounded-sm bg-indigo-500/40 border border-indigo-400"></span>
              <span className="font-bold">{isArabic ? 'منطقة الحلول الممكنة' : 'Feasible Region'}</span>
              <span className="text-slate-500">|</span>
              <span className="w-2.5 h-0.5 border-b-2 border-dashed border-red-500"></span>
              <span className="font-bold">{isArabic ? 'خط دالة الهدف Z' : 'Objective Line Z'}</span>
            </div>

            {/* Quick Snap to Optimum button */}
            <button
              onClick={() => setCurrentZ(optimalVertex.z)}
              className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md cursor-pointer transition-all"
            >
              <Target className="w-3.5 h-3.5" />
              <span>{isArabic ? 'الانتقال للحل الأمثل فوراً' : 'Snap to Optimum'}</span>
            </button>
          </div>

          {/* Objective Formula Banner */}
          <div
            className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
              isLight ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950' : 'bg-indigo-950/30 border-indigo-900/40 text-indigo-200'
            }`}
          >
            <div>
              <span className="font-bold block text-sm">{isArabic ? currentPreset.titleAr : currentPreset.titleEn}</span>
              <span className="text-[11px] opacity-80">{isArabic ? currentPreset.descriptionAr : currentPreset.descriptionEn}</span>
            </div>
            <div className="font-mono font-bold shrink-0 text-sm">
              <MathRenderer math={currentPreset.latexObj} />
            </div>
          </div>
        </div>

        {/* Right Panel: Vertices & Telemetry */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Optimal Vertex Card */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isLight ? 'bg-emerald-50/80 border-emerald-300' : 'bg-emerald-950/30 border-emerald-800/60'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-emerald-300 dark:border-emerald-800/50">
              <span className={`text-xs font-bold ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
                {isArabic ? 'الحل الأمثل (الرأس المتطرف)' : 'Optimal Extreme Vertex'}
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono">
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-white border-emerald-200' : 'bg-slate-950 border-emerald-900/40'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? 'إحداثي النقطة (x, y)' : 'Optimal Point (x, y)'}
                </span>
                <span className={`text-sm font-black ${isLight ? 'text-emerald-900' : 'text-emerald-300'}`}>
                  ({optimalVertex.x}, {optimalVertex.y})
                </span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-white border-emerald-200' : 'bg-slate-950 border-emerald-900/40'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? (currentPreset.goal === 'max' ? 'أقصى ربح Z_max' : 'أقل تكلفة Z_min') : 'Optimum Z'}
                </span>
                <span className={`text-sm font-black ${isLight ? 'text-indigo-900' : 'text-indigo-400'}`}>
                  {optimalVertex.z}
                </span>
              </div>
            </div>
          </div>

          {/* Sweep Slider */}
          <div
            className={`p-4 rounded-xl border space-y-3.5 text-xs ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                {isArabic ? 'تحريك خط دالة الهدف (Z):' : 'Sweep Objective Line (Z):'}
              </span>
              <span className="font-mono font-bold text-red-500">{currentZ}</span>
            </div>
            <input
              type="range"
              min={Math.max(0, Math.floor(minPossibleZ * 0.5))}
              max={Math.ceil(maxPossibleZ * 1.2)}
              step="5"
              value={currentZ}
              onChange={(e) => setCurrentZ(Number(e.target.value))}
              className="w-full accent-red-500 cursor-pointer"
            />

            {/* Vertices Evaluation Table */}
            <div className="pt-2">
              <span className={`font-bold block mb-1.5 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? 'جدول اختبار رؤوس منطقة الحل:' : 'Vertex Evaluation Table:'}
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-[11px] font-mono text-center">
                  <thead className={`border-b ${isLight ? 'border-slate-300 text-slate-600' : 'border-slate-700 text-slate-400'}`}>
                    <tr>
                      <th className="p-1">الرأس</th>
                      <th className="p-1">x</th>
                      <th className="p-1">y</th>
                      <th className="p-1">دالة الهدف Z</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isLight ? 'divide-slate-200' : 'divide-slate-800'}`}>
                    {vertices.map((v, i) => {
                      const isOpt = Math.hypot(v.x - optimalVertex.x, v.y - optimalVertex.y) < 0.1;
                      return (
                        <tr
                          key={i}
                          className={
                            isOpt
                              ? isLight
                                ? 'bg-emerald-100/80 font-bold text-emerald-950'
                                : 'bg-emerald-950/40 font-bold text-emerald-300'
                              : ''
                          }
                        >
                          <td className="p-1">P{i + 1}</td>
                          <td className="p-1">{v.x}</td>
                          <td className="p-1">{v.y}</td>
                          <td className="p-1 font-bold">{v.z} {isOpt ? '★' : ''}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isReportModalOpen && (
        <LabReportGeneratorModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          initialExperimentId="math-exp-10"
          lang={lang}
          theme={theme}
        />
      )}
    </div>
  );
};
