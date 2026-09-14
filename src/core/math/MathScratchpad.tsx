import React, { useState, useRef, useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Edit3, Copy, Check, Trash2, Calculator, PenTool } from 'lucide-react';

interface MathScratchpadProps {
  lang?: 'en' | 'ar';
  initialLatex?: string;
  onInsertLatex?: (latex: string) => void;
}

export const MathScratchpad: React.FC<MathScratchpadProps> = ({
  lang = 'en',
  initialLatex = 'E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}',
  onInsertLatex
}) => {
  const isAr = lang === 'ar';
  const [latexInput, setLatexInput] = useState<string>(initialLatex);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'latex' | 'draw'>('latex');
  const previewRef = useRef<HTMLDivElement | null>(null);

  // Freehand Canvas Ref
  const drawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  // Render KaTeX Preview safely
  useEffect(() => {
    if (!previewRef.current) return;
    try {
      katex.render(latexInput || '\\text{ }', previewRef.current, {
        throwOnError: false,
        displayMode: true
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
    setLatexInput(prev => {
      const next = prev + ' ' + snippet;
      if (onInsertLatex) onInsertLatex(next);
      return next;
    });
  };

  // Quick STEM Formula Presets for Egyptian Curriculum
  const stemPresets = [
    { label: "Ohm's Law", snippet: "V = I \\cdot R" },
    { label: "Faraday's Induction", snippet: "\\mathcal{E} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}" },
    { label: "Photoelectric", snippet: "K_{\\max} = h\\nu - W_a = h\\left(\\nu - \\nu_c\\right)" },
    { label: "De Broglie", snippet: "\\lambda = \\frac{h}{p} = \\frac{h}{m \\cdot v}" },
    { label: "Henderson-Hasselbalch", snippet: "\\text{pH} = \\text{pK}_a + \\log_{10}\\left(\\frac{[A^-]}{[HA]}\\right)" },
    { label: "Hardy-Weinberg", snippet: "p^2 + 2pq + q^2 = 1" }
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
    { label: '∞', val: '\\infty' }
  ];

  // Canvas Drawing Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const drawMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-5 shadow-2xl text-slate-100 font-sans backdrop-blur-md" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              {isAr ? 'المسودة الرياضية التفاعلية (KaTeX Scratchpad)' : 'Interactive KaTeX & STEM Scratchpad'}
            </h4>
            <p className="text-xs text-slate-400">
              {isAr ? 'صياغة المعادلات العلمية، رموز يونانية، ومسودة رسم المتجهات' : 'Live LaTeX typesetting, math keypad, and freehand vector sketchpad'}
            </p>
          </div>
        </div>

        {/* Tab switch: LaTeX vs Drawing Whiteboard */}
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('latex')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'latex'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              {isAr ? 'محرر المعادلات' : 'LaTeX Typesetter'}
            </button>
            <button
              onClick={() => setActiveTab('draw')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'draw'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              {isAr ? 'لوحة الرسم الحر' : 'Freehand Canvas'}
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer"
            title={isAr ? 'نسخ كود LaTeX' : 'Copy LaTeX code'}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {activeTab === 'latex' ? (
        <div className="space-y-4 mt-4">
          {/* Live KaTeX Render Output Box */}
          <div className="p-4 bg-slate-950/80 border border-indigo-500/30 rounded-2xl min-h-[90px] flex items-center justify-center overflow-x-auto shadow-inner text-indigo-100 text-lg">
            <div ref={previewRef} className="select-all" />
          </div>

          {/* Virtual Math Keypad */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              {isAr ? 'لوحة الرموز والعمليات الرياضية:' : 'STEM Symbols & Operators Keypad:'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {symbols.map((sym, idx) => (
                <button
                  key={idx}
                  onClick={() => insertSnippet(sym.val)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {sym.label}
                </button>
              ))}
            </div>
          </div>

          {/* Egyptian Curriculum Presets */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              {isAr ? 'قوانين ونماذج الثانوية العامة الجاهزة:' : 'Thanaweya Amma Formula Templates:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {stemPresets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => insertSnippet(p.snippet)}
                  className="px-3 py-1 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/40 text-indigo-300 text-xs font-semibold transition-all cursor-pointer"
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
              onChange={e => setLatexInput(e.target.value)}
              rows={3}
              placeholder="Type or edit LaTeX: e.g. \frac{a}{b}"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-3 text-xs font-mono text-cyan-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
            />
          </div>
        </div>
      ) : (
        /* Freehand Drawing Whiteboard */
        <div className="mt-4 space-y-3">
          <div className="w-full h-72 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden relative touch-none">
            <canvas
              ref={drawCanvasRef}
              width={640}
              height={288}
              onMouseDown={startDrawing}
              onMouseMove={drawMove}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={drawMove}
              onTouchEnd={stopDrawing}
              className="w-full h-full block cursor-crosshair"
            />
            <button
              onClick={clearCanvas}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-rose-400 border border-slate-700 text-xs flex items-center gap-1.5 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {isAr ? 'مسح اللوحة' : 'Clear Canvas'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
