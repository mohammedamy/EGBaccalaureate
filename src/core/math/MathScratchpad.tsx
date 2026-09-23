import React, { useState, useRef, useEffect, useCallback } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import type { ThemeMode } from '../../types/curriculum';
import {
  Edit3,
  Copy,
  Check,
  Trash2,
  Calculator,
  PenTool,
  Eraser,
  Download,
  Grid,
} from 'lucide-react';

interface MathScratchpadProps {
  lang?: 'en' | 'ar';
  initialLatex?: string;
  onInsertLatex?: (latex: string) => void;
  theme?: ThemeMode;
}

const PEN_COLORS = [
  { id: 'cyan', labelEn: 'Cyan', labelAr: 'سماوي', value: '#38bdf8' },
  { id: 'yellow', labelEn: 'Yellow', labelAr: 'أصفر', value: '#fbbf24' },
  { id: 'emerald', labelEn: 'Emerald', labelAr: 'أخضر', value: '#34d399' },
  { id: 'rose', labelEn: 'Rose', labelAr: 'وردي', value: '#fb7185' },
  { id: 'white', labelEn: 'White', labelAr: 'أبيض', value: '#ffffff' },
];

const PEN_WIDTHS = [
  { id: 'fine', size: 2, labelEn: 'Fine', labelAr: 'رفيع' },
  { id: 'medium', size: 4, labelEn: 'Medium', labelAr: 'متوسط' },
  { id: 'bold', size: 8, labelEn: 'Bold', labelAr: 'عريض' },
];

export const MathScratchpad: React.FC<MathScratchpadProps> = ({
  lang = 'en',
  initialLatex = 'E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}',
  onInsertLatex,
  theme = 'dark',
}) => {
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isAr = lang === 'ar';
  const [latexInput, setLatexInput] = useState<string>(initialLatex);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'latex' | 'draw'>('latex');
  const previewRef = useRef<HTMLDivElement | null>(null);

  // Freehand Canvas State & Settings
  const drawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<'pen' | 'eraser'>('pen');
  const [selectedColor, setSelectedColor] = useState<string>('#38bdf8');
  const [selectedWidth, setSelectedWidth] = useState<number>(3);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Render KaTeX Preview safely
  useEffect(() => {
    if (!previewRef.current) return;
    try {
      katex.render(latexInput || '\\text{ }', previewRef.current, {
        throwOnError: false,
        displayMode: true,
      });
    } catch {
      // ignore parsing glitch
    }
  }, [latexInput]);

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(latexInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to insert snippet at cursor
  const insertSnippet = (snippet: string) => {
    setLatexInput((prev) => {
      const next = prev + ' ' + snippet;
      if (onInsertLatex) onInsertLatex(next);
      return next;
    });
  };

  // Quick STEM Formula Presets for Egyptian Curriculum
  const stemPresets = [
    { label: "Ohm's Law", snippet: 'V = I \\cdot R' },
    {
      label: "Faraday's Induction",
      snippet: '\\mathcal{E} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}',
    },
    {
      label: 'Photoelectric',
      snippet:
        'K_{\\max} = h\\nu - W_a = h\\left(\\nu - \\nu_c\\right)',
    },
    {
      label: 'De Broglie',
      snippet: '\\lambda = \\frac{h}{p} = \\frac{h}{m \\cdot v}',
    },
    {
      label: 'Henderson-Hasselbalch',
      snippet:
        '\\text{pH} = \\text{pK}_a + \\log_{10}\\left(\\frac{[A^-]}{[HA]}\\right)',
    },
    { label: 'Hardy-Weinberg', snippet: 'p^2 + 2pq + q^2 = 1' },
  ];

  // Keypad Symbols
  const symbols = [
    { label: 'α', val: '\\alpha' },
    { label: 'β', val: '\\beta' },
    { label: 'γ', val: '\\gamma' },
    { label: 'Δ', val: '\\Delta' },
    { label: 'θ', val: '\\theta' },
    { label: 'λ', val: '\\lambda' },
    { label: 'μ', val: '\\mu' },
    { label: 'π', val: '\\pi' },
    { label: 'ρ', val: '\\rho' },
    { label: 'ω', val: '\\omega' },
    { label: '√x', val: '\\sqrt{x}' },
    { label: 'x/y', val: '\\frac{x}{y}' },
    { label: 'xⁿ', val: 'x^{n}' },
    { label: 'xᵢ', val: 'x_{i}' },
    { label: '∫', val: '\\int' },
    { label: '∑', val: '\\sum_{i=1}^{n}' },
    { label: '±', val: '\\pm' },
    { label: '≈', val: '\\approx' },
    { label: '≠', val: '\\neq' },
    { label: '∞', val: '\\infty' },
  ];

  // Calibrate canvas resolution to element display rect and device pixel ratio (DPR)
  const calibrateCanvas = useCallback(() => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    const targetWidth = Math.round(rect.width * dpr);
    const targetHeight = Math.round(rect.height * dpr);

    if (canvas.width === targetWidth && canvas.height === targetHeight) return;

    // Preserve existing sketch content during resize
    let tempCanvas: HTMLCanvasElement | null = null;
    if (canvas.width > 0 && canvas.height > 0) {
      tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) {
        tempCtx.drawImage(canvas, 0, 0);
      }
    }

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (tempCanvas && tempCanvas.width > 0 && tempCanvas.height > 0) {
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  // Listen for activeTab switch and window resize events
  useEffect(() => {
    if (activeTab === 'draw') {
      const timer = setTimeout(calibrateCanvas, 30);
      window.addEventListener('resize', calibrateCanvas);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', calibrateCanvas);
      };
    }
  }, [activeTab, calibrateCanvas]);

  // Exact millimeter-calibrated mapping from PointerEvent to Canvas internal buffer coordinates
  const getCanvasCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;

    // Absolute scale calibration factor between CSS display pixels and internal buffer
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  // Pointer Event Handlers (Supports Mouse, Touch screen, Apple Pencil, & Smartboard stylus)
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // Only accept primary pointer (left click or touch contact)
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;

    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {}

    const coords = getCanvasCoordinates(e);
    if (!coords) return;

    setIsDrawing(true);
    lastPointRef.current = coords;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (activeTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = selectedWidth * 8 * dpr;
      ctx.fillStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = selectedColor;
      ctx.fillStyle = selectedColor;
      ctx.lineWidth = selectedWidth * dpr;
    }

    // Draw single dot on click/tap
    ctx.beginPath();
    ctx.arc(coords.x, coords.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !lastPointRef.current) return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coords = getCanvasCoordinates(e);
    if (!coords) return;

    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (activeTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = selectedWidth * 8 * dpr;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = selectedWidth * dpr;
    }

    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();

    lastPointRef.current = coords;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = drawCanvasRef.current;
    if (canvas) {
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {}
    }
    setIsDrawing(false);
    lastPointRef.current = null;
  };

  const clearCanvas = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSketch = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `egbac_math_sketch_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div
      className={`rounded-3xl p-4 sm:p-5 shadow-2xl font-sans backdrop-blur-md w-full transition-colors ${
        isLight
          ? 'bg-white border-2 border-slate-200 text-slate-900 shadow-slate-200/60'
          : isContrast
          ? 'bg-black border-2 border-white text-white'
          : 'bg-slate-900/98 border border-slate-700/80 text-slate-100'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${
          isLight
            ? 'border-slate-200'
            : isContrast
            ? 'border-white'
            : 'border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div
            className={`p-2 rounded-xl border ${
              isLight
                ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                : isContrast
                ? 'bg-black text-cyan-300 border-2 border-cyan-400'
                : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
            }`}
          >
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4
              className={`text-sm font-bold flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              {isAr
                ? 'المسودة الرياضية والمعملية التفاعلية'
                : 'Interactive KaTeX & STEM Scratchpad'}
            </h4>
            <p
              className={`text-xs ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              {isAr
                ? 'صياغة المعادلات العلمية، رموز يونانية، ومسودة رسم المتجهات المعايرة'
                : 'Live LaTeX typesetting, math keypad, and calibrated vector sketchpad'}
            </p>
          </div>
        </div>

        {/* Tab switch: LaTeX vs Drawing Whiteboard */}
        <div className="flex items-center gap-2">
          <div
            className={`flex p-1 rounded-xl text-xs font-semibold border ${
              isLight
                ? 'bg-slate-100 border-slate-300'
                : isContrast
                ? 'bg-black border-2 border-white'
                : 'bg-slate-950 border-slate-800'
            }`}
          >
            <button
              onClick={() => setActiveTab('latex')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'latex'
                  ? isLight
                    ? 'bg-indigo-700 text-white font-bold shadow-sm'
                    : isContrast
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'bg-indigo-600 text-white font-bold shadow-sm'
                  : isLight
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 font-medium'
                  : isContrast
                  ? 'text-white hover:text-cyan-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isAr ? 'محرر المعادلات' : 'LaTeX Typesetter'}</span>
            </button>
            <button
              onClick={() => setActiveTab('draw')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'draw'
                  ? isLight
                    ? 'bg-indigo-700 text-white font-bold shadow-sm'
                    : isContrast
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'bg-indigo-600 text-white font-bold shadow-sm'
                  : isLight
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 font-medium'
                  : isContrast
                  ? 'text-white hover:text-cyan-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>{isAr ? 'لوحة الرسم الحر' : 'Freehand Canvas'}</span>
            </button>
          </div>

          {activeTab === 'latex' && (
            <button
              onClick={handleCopy}
              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  : isContrast
                  ? 'bg-black hover:bg-slate-900 text-white border-2 border-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title={isAr ? 'نسخ كود LaTeX' : 'Copy LaTeX code'}
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500 font-bold" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      </div>

      {activeTab === 'latex' ? (
        <div className="space-y-4 mt-4">
          {/* Live KaTeX Render Output Box */}
          <div
            className={`p-4 rounded-2xl min-h-[90px] flex items-center justify-center overflow-x-auto shadow-inner text-lg border ${
              isLight
                ? 'bg-indigo-50/50 border-2 border-indigo-300 text-indigo-950 font-semibold'
                : isContrast
                ? 'bg-black border-2 border-white text-white'
                : 'bg-slate-950/80 border-indigo-500/30 text-indigo-100'
            }`}
          >
            <div ref={previewRef} className="select-all" />
          </div>

          {/* Virtual Math Keypad */}
          <div className="space-y-2">
            <span
              className={`text-xs font-bold uppercase tracking-wider block ${
                isLight ? 'text-slate-700' : isContrast ? 'text-white' : 'text-slate-400'
              }`}
            >
              {isAr
                ? 'لوحة الرموز والعمليات الرياضية:'
                : 'STEM Symbols & Operators Keypad:'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {symbols.map((sym, idx) => (
                <button
                  key={idx}
                  onClick={() => insertSnippet(sym.val)}
                  className={`px-2.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer border ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 shadow-xs'
                      : isContrast
                      ? 'bg-black hover:bg-slate-900 border-2 border-white text-white'
                      : 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-200'
                  }`}
                >
                  {sym.label}
                </button>
              ))}
            </div>
          </div>

          {/* Egyptian Curriculum Presets */}
          <div className="space-y-2">
            <span
              className={`text-xs font-bold uppercase tracking-wider block ${
                isLight ? 'text-slate-700' : isContrast ? 'text-white' : 'text-slate-400'
              }`}
            >
              {isAr
                ? 'قوانين ونماذج الثانوية العامة الجاهزة:'
                : 'Thanaweya Amma Formula Templates:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {stemPresets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => insertSnippet(p.snippet)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    isLight
                      ? 'bg-indigo-50 hover:bg-indigo-100 border-indigo-300 text-indigo-900 font-bold shadow-xs'
                      : isContrast
                      ? 'bg-black hover:bg-slate-900 border-2 border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-indigo-950/60 hover:bg-indigo-900/60 border-indigo-500/40 text-indigo-300'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code Input Area */}
          <div>
            <textarea
              value={latexInput}
              onChange={(e) => setLatexInput(e.target.value)}
              rows={3}
              placeholder="Type or edit LaTeX: e.g. \frac{a}{b}"
              className={`w-full rounded-2xl p-3 text-xs font-mono transition-all resize-none border ${
                isLight
                  ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                  : isContrast
                  ? 'bg-black border-2 border-white text-cyan-300 placeholder-slate-400 focus:outline-none focus:border-cyan-300'
                  : 'bg-slate-950 border-slate-700 text-cyan-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
              }`}
            />
          </div>
        </div>
      ) : (
        /* Freehand Drawing Whiteboard (Calibrated Precision Mode) */
        <div className="mt-4 space-y-3">
          {/* Drawing Toolbar (Colors, Stroke Widths, Tools, Grid & Actions) */}
          <div
            className={`flex flex-wrap items-center justify-between gap-2.5 p-2.5 rounded-2xl border text-xs ${
              isLight
                ? 'bg-slate-100 border-slate-300 text-slate-900'
                : isContrast
                ? 'bg-black border-2 border-white text-white'
                : 'bg-slate-950/80 border-slate-800 text-slate-200'
            }`}
          >
            {/* Tool & Colors */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Pen / Eraser Toggle */}
              <div
                className={`flex items-center rounded-xl p-0.5 border ${
                  isLight
                    ? 'bg-white border-slate-300'
                    : isContrast
                    ? 'bg-black border-2 border-white'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveTool('pen')}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1 font-semibold transition-all cursor-pointer ${
                    activeTool === 'pen'
                      ? 'bg-indigo-600 text-white shadow-xs font-bold'
                      : isLight
                      ? 'text-slate-700 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={isAr ? 'قلم الرسم' : 'Drawing Pen'}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {isAr ? 'قلم' : 'Pen'}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTool('eraser')}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1 font-semibold transition-all cursor-pointer ${
                    activeTool === 'eraser'
                      ? 'bg-rose-600 text-white shadow-xs font-bold'
                      : isLight
                      ? 'text-slate-700 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={isAr ? 'ممحاة' : 'Eraser'}
                >
                  <Eraser className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {isAr ? 'ممحاة' : 'Eraser'}
                  </span>
                </button>
              </div>

              {/* Color Swatches (Only when pen is active) */}
              {activeTool === 'pen' && (
                <div
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-xl border ${
                    isLight
                      ? 'bg-white border-slate-300'
                      : isContrast
                      ? 'bg-black border-2 border-white'
                      : 'bg-slate-900/90 border-slate-800'
                  }`}
                >
                  {PEN_COLORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedColor(c.value)}
                      className={`w-5 h-5 rounded-full transition-transform cursor-pointer flex items-center justify-center border ${
                        selectedColor === c.value
                          ? 'scale-125 ring-2 ring-indigo-500 shadow-md border-white'
                          : 'opacity-80 hover:opacity-100 hover:scale-110 border-slate-400'
                      }`}
                      style={{ backgroundColor: c.value }}
                      title={isAr ? c.labelAr : c.labelEn}
                    />
                  ))}
                </div>
              )}

              {/* Stroke Width Selector */}
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-xl border ${
                  isLight
                    ? 'bg-white border-slate-300'
                    : isContrast
                    ? 'bg-black border-2 border-white'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                {PEN_WIDTHS.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setSelectedWidth(w.size)}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      selectedWidth === w.size
                        ? isLight
                          ? 'bg-indigo-100 text-indigo-900 border border-indigo-300 font-bold'
                          : isContrast
                          ? 'bg-white text-black font-bold'
                          : 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/40'
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isAr ? w.labelAr : w.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions (Grid, Clear, Download) */}
            <div className="flex items-center gap-1.5">
              {/* Grid Toggle */}
              <button
                type="button"
                onClick={() => setShowGrid((prev) => !prev)}
                className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                  showGrid
                    ? isLight
                      ? 'bg-cyan-100 text-cyan-900 border-cyan-400 font-bold'
                      : isContrast
                      ? 'bg-white text-black border-2 border-white font-bold'
                      : 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40'
                    : isLight
                    ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-200'
                    : isContrast
                    ? 'bg-black text-white border-2 border-white hover:bg-slate-900'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
                title={
                  isAr
                    ? 'تبديل الشبكة الرياضية الخلفية'
                    : 'Toggle Math Coordinate Grid'
                }
              >
                <Grid className="w-3.5 h-3.5" />
              </button>

              {/* Download PNG */}
              <button
                type="button"
                onClick={downloadSketch}
                className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white hover:bg-slate-200 text-slate-800 border-slate-300'
                    : isContrast
                    ? 'bg-black hover:bg-slate-900 text-white border-2 border-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
                title={isAr ? 'تصدير الرسم كصورة PNG' : 'Export sketch as PNG'}
              >
                <Download className="w-3.5 h-3.5" />
              </button>

              {/* Clear Canvas */}
              <button
                type="button"
                onClick={clearCanvas}
                className={`px-2.5 py-1 rounded-xl border transition-all flex items-center gap-1 cursor-pointer font-medium ${
                  isLight
                    ? 'bg-rose-50 hover:bg-rose-100 text-rose-800 border-rose-300'
                    : isContrast
                    ? 'bg-black hover:bg-rose-950 text-rose-400 border-2 border-rose-400'
                    : 'bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border-rose-500/30'
                }`}
                title={isAr ? 'مسح اللوحة بالكامل' : 'Clear Canvas'}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {isAr ? 'مسح' : 'Clear'}
                </span>
              </button>
            </div>
          </div>

          {/* Calibrated Canvas Viewport (electronic chalkboard with protected dark theme) */}
          <div
            data-preserve-dark="true"
            className="w-full h-80 sm:h-96 bg-slate-950 rounded-2xl border border-slate-800/90 overflow-hidden relative touch-none shadow-inner select-none"
            style={{
              backgroundImage: showGrid
                ? 'radial-gradient(circle, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)'
                : 'none',
              backgroundSize: '24px 24px, 24px 24px, 24px 24px',
            }}
          >
            <canvas
              ref={drawCanvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="w-full h-full block cursor-crosshair touch-none"
            />

            {/* Subdued Calibration Status Badge */}
            <div className="absolute bottom-2 left-2 text-[10px] text-emerald-300 font-mono pointer-events-none select-none flex items-center gap-1.5 bg-black/70 px-2 py-0.5 rounded-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>
                {isAr
                  ? 'معايرة النقطة والصفر: نشطة (دقة مطلقة)'
                  : 'Zero-drift pointer calibration: active'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
