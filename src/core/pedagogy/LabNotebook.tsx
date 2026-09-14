import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Table, TrendingUp, Download, Trash2, Plus, LineChart, RotateCcw } from 'lucide-react';

export interface LabDataPoint {
  id: string;
  x: number;
  y: number;
  label?: string;
  timestamp: number;
}

interface LabNotebookProps {
  lang: 'en' | 'ar';
  xLabel: string;
  xUnit: string;
  yLabel: string;
  yUnit: string;
  currentXValue?: number;
  currentYValue?: number;
  initialPoints?: LabDataPoint[];
  onDataChange?: (points: LabDataPoint[]) => void;
}

export const LabNotebook: React.FC<LabNotebookProps> = ({
  lang,
  xLabel,
  xUnit,
  yLabel,
  yUnit,
  currentXValue,
  currentYValue,
  initialPoints = [],
  onDataChange
}) => {
  const [points, setPoints] = useState<LabDataPoint[]>(initialPoints);
  const [activeTab, setActiveTab] = useState<'graph' | 'table'>('graph');
  const [customX, setCustomX] = useState<string>('');
  const [customY, setCustomY] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isAr = lang === 'ar';

  // Compute Linear Regression Statistics
  const stats = useMemo(() => {
    const n = points.length;
    if (n < 2) {
      return { slope: null, intercept: null, rSquared: null, valid: false };
    }

    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    let sumY2 = 0;

    for (const pt of points) {
      sumX += pt.x;
      sumY += pt.y;
      sumXY += pt.x * pt.y;
      sumX2 += pt.x * pt.x;
      sumY2 += pt.y * pt.y;
    }

    const denomX = n * sumX2 - sumX * sumX;
    const denomY = n * sumY2 - sumY * sumY;

    if (Math.abs(denomX) < 1e-12) {
      return { slope: null, intercept: null, rSquared: null, valid: false };
    }

    const slope = (n * sumXY - sumX * sumY) / denomX;
    const intercept = (sumY - slope * sumX) / n;

    let rSquared = 0;
    if (denomY > 1e-12 && denomX > 1e-12) {
      const r = (n * sumXY - sumX * sumY) / Math.sqrt(denomX * denomY);
      rSquared = Math.min(1.0, Math.max(0.0, r * r));
    }

    return {
      slope: parseFloat(slope.toFixed(4)),
      intercept: parseFloat(intercept.toFixed(4)),
      rSquared: parseFloat(rSquared.toFixed(4)),
      valid: true
    };
  }, [points]);

  // Notify parent on change
  useEffect(() => {
    if (onDataChange) {
      onDataChange(points);
    }
  }, [points, onDataChange]);

  // Log current reading from simulation live feed
  const handleLogCurrent = () => {
    if (currentXValue === undefined || currentYValue === undefined) return;
    const newPt: LabDataPoint = {
      id: `pt-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      x: parseFloat(currentXValue.toFixed(4)),
      y: parseFloat(currentYValue.toFixed(4)),
      timestamp: Date.now()
    };
    setPoints(prev => [...prev, newPt]);
  };

  // Add manual point
  const handleAddManual = (e: React.FormEvent) => {
    e.preventDefault();
    const x = parseFloat(customX);
    const y = parseFloat(customY);
    if (isNaN(x) || isNaN(y)) return;

    const newPt: LabDataPoint = {
      id: `pt-${Date.now()}`,
      x,
      y,
      timestamp: Date.now()
    };
    setPoints(prev => [...prev, newPt]);
    setCustomX('');
    setCustomY('');
  };

  const handleDeletePoint = (id: string) => {
    setPoints(prev => prev.filter(p => p.id !== id));
  };

  const handleClearAll = () => {
    if (points.length === 0) return;
    if (window.confirm(isAr ? 'هل أنت متأكد من مسح جميع نقاط التجربة المسجلة؟' : 'Clear all recorded lab data points?')) {
      setPoints([]);
    }
  };

  // Export to CSV with UTF-8 BOM
  const handleExportCSV = () => {
    if (points.length === 0) return;
    let csvContent = '\uFEFF'; // UTF-8 BOM for Excel
    csvContent += `Index,${xLabel} (${xUnit}),${yLabel} (${yUnit}),Timestamp\n`;
    points.forEach((p, idx) => {
      csvContent += `${idx + 1},${p.x},${p.y},"${new Date(p.timestamp).toISOString()}"\n`;
    });
    if (stats.valid) {
      csvContent += `\nBest-Fit Linear Regression:\n`;
      csvContent += `Slope (m),${stats.slope}\n`;
      csvContent += `Intercept (c),${stats.intercept}\n`;
      csvContent += `R-Squared (R²),${stats.rSquared}\n`;
      csvContent += `Equation,y = ${stats.slope}x + ${stats.intercept}\n`;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `lab_measurements_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render Scatter Plot & Regression Line on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Clear
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 25, right: 30, bottom: 45, left: 55 };
    const graphW = Math.max(10, w - padding.left - padding.right);
    const graphH = Math.max(10, h - padding.top - padding.bottom);

    // Calculate bounding box
    let minX = 0;
    let maxX = 10;
    let minY = 0;
    let maxY = 10;

    if (points.length > 0) {
      const xs = points.map(p => p.x);
      const ys = points.map(p => p.y);
      minX = Math.min(0, ...xs);
      maxX = Math.max(1, ...xs);
      minY = Math.min(0, ...ys);
      maxY = Math.max(1, ...ys);

      // Add 10% margins
      const spanX = Math.max(0.1, maxX - minX);
      const spanY = Math.max(0.1, maxY - minY);
      maxX += spanX * 0.1;
      maxY += spanY * 0.1;
    }

    const mapX = (val: number) => padding.left + ((val - minX) / (maxX - minX)) * graphW;
    const mapY = (val: number) => padding.top + graphH - ((val - minY) / (maxY - minY)) * graphH;

    // Draw Gridlines
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
    ctx.lineWidth = 1;
    const xSteps = 5;
    const ySteps = 5;

    ctx.font = '10px Inter, system-ui, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'center';

    for (let i = 0; i <= xSteps; i++) {
      const gxVal = minX + (i / xSteps) * (maxX - minX);
      const gx = mapX(gxVal);
      ctx.beginPath();
      ctx.moveTo(gx, padding.top);
      ctx.lineTo(gx, padding.top + graphH);
      ctx.stroke();
      ctx.fillText(gxVal.toFixed(1), gx, padding.top + graphH + 15);
    }

    ctx.textAlign = 'right';
    for (let i = 0; i <= ySteps; i++) {
      const gyVal = minY + (i / ySteps) * (maxY - minY);
      const gy = mapY(gyVal);
      ctx.beginPath();
      ctx.moveTo(padding.left, gy);
      ctx.lineTo(padding.left + graphW, gy);
      ctx.stroke();
      ctx.fillText(gyVal.toFixed(1), padding.left - 8, gy + 3);
    }

    // Axes
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + graphH);
    ctx.lineTo(padding.left + graphW, padding.top + graphH);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '11px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${xLabel} (${xUnit})`, padding.left + graphW / 2, h - 8);

    ctx.save();
    ctx.translate(14, padding.top + graphH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(`${yLabel} (${yUnit})`, 0, 0);
    ctx.restore();

    // Draw Regression Line if valid
    if (stats.valid && stats.slope !== null && stats.intercept !== null) {
      const x1 = minX;
      const y1 = stats.slope * x1 + stats.intercept;
      const x2 = maxX;
      const y2 = stats.slope * x2 + stats.intercept;

      ctx.strokeStyle = '#06b6d4'; // Cyan regression line
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(mapX(x1), mapY(y1));
      ctx.lineTo(mapX(x2), mapY(y2));
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Data Points
    points.forEach((pt) => {
      const cx = mapX(pt.x);
      const cy = mapY(pt.y);

      // Outer glow
      ctx.fillStyle = 'rgba(34, 211, 238, 0.25)';
      ctx.beginPath();
      ctx.arc(cx, cy, 7, 0, Math.PI * 2);
      ctx.fill();

      // Inner dot
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }, [points, stats, xLabel, xUnit, yLabel, yUnit]);

  return (
    <div className="bg-slate-900/90 border border-slate-700/70 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="px-5 py-3.5 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <LineChart className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              {isAr ? 'دفتر المعمل الرقمي والتحليل البياني' : 'Digital Lab Notebook & Regression'}
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                {points.length} {isAr ? 'نقاط' : 'pts'}
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              {isAr ? 'تسجيل البيانات التجريبية واستنتاج خط الانحدار الخطي ومُعامل التحديد' : 'Empirical coordinate logging with least-squares linear fit'}
            </p>
          </div>
        </div>

        {/* View Switcher & Action buttons */}
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'graph' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              {isAr ? 'الرسم البياني' : 'Scatter Plot'}
            </button>
            <button
              onClick={() => setActiveTab('table')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'table' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              {isAr ? 'جدول البيانات' : 'Table'}
            </button>
          </div>

          <button
            onClick={handleExportCSV}
            disabled={points.length === 0}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 border border-slate-700 transition-all cursor-pointer"
            title={isAr ? 'تصدير كملف CSV' : 'Export to CSV'}
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            onClick={handleClearAll}
            disabled={points.length === 0}
            className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 disabled:opacity-40 disabled:cursor-not-allowed text-rose-300 border border-rose-800/40 transition-all cursor-pointer"
            title={isAr ? 'مسح كل البيانات' : 'Clear All Points'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Data Logger Bar */}
      <div className="px-5 py-2.5 bg-slate-950/30 border-b border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-medium">
            {isAr ? 'القياس الحي الحالي:' : 'Live Probe Reading:'}
          </span>
          <span className="font-mono bg-slate-800 px-2 py-1 rounded text-cyan-300 border border-slate-700">
            {xLabel}: {currentXValue !== undefined ? currentXValue.toFixed(2) : '--'} {xUnit}
          </span>
          <span className="font-mono bg-slate-800 px-2 py-1 rounded text-cyan-300 border border-slate-700">
            {yLabel}: {currentYValue !== undefined ? currentYValue.toFixed(2) : '--'} {yUnit}
          </span>
          <button
            onClick={handleLogCurrent}
            disabled={currentXValue === undefined || currentYValue === undefined}
            className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            {isAr ? 'تسجيل القراءة' : 'Log Reading'}
          </button>
        </div>

        {/* Linear Regression Summary Pill */}
        {stats.valid && (
          <div className="flex items-center gap-2.5 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-lg text-cyan-300 font-mono text-xs">
            <span className="font-bold text-cyan-200">y = {stats.slope}x + {stats.intercept}</span>
            <span className="text-slate-500">|</span>
            <span>R² = {stats.rSquared}</span>
          </div>
        )}
      </div>

      {/* Main Content: Graph or Table */}
      <div className="p-4">
        {activeTab === 'graph' ? (
          <div className="space-y-3">
            <div className="w-full h-64 bg-slate-950/70 rounded-xl border border-slate-800 overflow-hidden relative">
              <canvas ref={canvasRef} className="w-full h-full block" />
              {points.length === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 text-xs">
                  <LineChart className="w-8 h-8 mb-2 stroke-1 opacity-50" />
                  <span>{isAr ? 'لا توجد بيانات مسجلة بعد. اضغط على "تسجيل القراءة" لرسم المنحنى.' : 'No data logged yet. Click "Log Reading" to plot points.'}</span>
                </div>
              )}
            </div>

            {stats.valid && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 bg-slate-800/60 border border-slate-700 rounded-xl">
                  <span className="text-slate-400 block">{isAr ? 'ميل الخط المستقيم (Slope m):' : 'Slope (m):'}</span>
                  <span className="text-sm font-bold font-mono text-cyan-300">{stats.slope} {yUnit}/{xUnit}</span>
                </div>
                <div className="p-2.5 bg-slate-800/60 border border-slate-700 rounded-xl">
                  <span className="text-slate-400 block">{isAr ? 'الجزء المقطوع (Y-Intercept c):' : 'Y-Intercept (c):'}</span>
                  <span className="text-sm font-bold font-mono text-cyan-300">{stats.intercept} {yUnit}</span>
                </div>
                <div className="p-2.5 bg-slate-800/60 border border-slate-700 rounded-xl">
                  <span className="text-slate-400 block">{isAr ? 'معامل التحديد (Goodness of Fit R²):' : 'Coefficient of Determination (R²):'}</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">{stats.rSquared}</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="max-h-64 overflow-y-auto rounded-xl border border-slate-800">
              <table className="w-full text-xs text-left rtl:text-right text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[10px] sticky top-0">
                  <tr>
                    <th className="px-3 py-2">#</th>
                    <th className="px-3 py-2">{xLabel} ({xUnit})</th>
                    <th className="px-3 py-2">{yLabel} ({yUnit})</th>
                    <th className="px-3 py-2">{isAr ? 'الوقت' : 'Time'}</th>
                    <th className="px-3 py-2 text-center">{isAr ? 'حذف' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/50 font-mono">
                  {points.map((p, idx) => (
                    <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="px-3 py-2 text-slate-500">{idx + 1}</td>
                      <td className="px-3 py-2 text-cyan-300 font-semibold">{p.x}</td>
                      <td className="px-3 py-2 text-cyan-300 font-semibold">{p.y}</td>
                      <td className="px-3 py-2 text-slate-400 text-[10px]">
                        {new Date(p.timestamp).toLocaleTimeString()}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <button
                          onClick={() => handleDeletePoint(p.id)}
                          className="text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {points.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-3 py-6 text-center text-slate-500">
                        {isAr ? 'لا توجد بيانات مسجلة في الجدول' : 'No recorded data points in table'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Manual input form */}
            <form onSubmit={handleAddManual} className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-medium">{isAr ? 'إضافة نقطة يدوياً:' : 'Manual Entry:'}</span>
              <input
                type="number"
                step="any"
                placeholder={`${xLabel} (${xUnit})`}
                value={customX}
                onChange={e => setCustomX(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-100 placeholder-slate-500 w-28 focus:outline-none focus:border-cyan-500 font-mono"
              />
              <input
                type="number"
                step="any"
                placeholder={`${yLabel} (${yUnit})`}
                value={customY}
                onChange={e => setCustomY(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-100 placeholder-slate-500 w-28 focus:outline-none focus:border-cyan-500 font-mono"
              />
              <button
                type="submit"
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 font-semibold cursor-pointer"
              >
                {isAr ? 'إدراج' : 'Add Point'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
