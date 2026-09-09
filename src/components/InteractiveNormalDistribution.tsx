import React, { useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  Binary,
  Sliders,
  Sparkles,
  GitBranch,
  Target,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

// Numerical approximation of the Error Function (Abramowitz & Stegun formula 7.1.26)
function erf(x: number): number {
  const sign = x >= 0 ? 1 : -1;
  const absX = Math.abs(x);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1.0 / (1.0 + p * absX);
  const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);

  return sign * y;
}

// Standard Normal CDF: Phi(z) = 0.5 * (1 + erf(z / sqrt(2)))
function normalCdf(z: number): number {
  return 0.5 * (1.0 + erf(z / Math.SQRT2));
}

// Normal PDF: f(x) = 1 / (sigma * sqrt(2 * pi)) * exp(-0.5 * ((x - mu)/sigma)^2)
function normalPdf(x: number, mu: number, sigma: number): number {
  const coeff = 1.0 / (sigma * Math.sqrt(2 * Math.PI));
  const z = (x - mu) / sigma;
  return coeff * Math.exp(-0.5 * z * z);
}

export const InteractiveNormalDistribution: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  // Sub-mode toggle: 'normal_curve' | 'bayes_tree'
  const [activeTab, setActiveTab] = useState<'normal_curve' | 'bayes_tree'>('normal_curve');

  // Normal Distribution State
  const [mu, setMu] = useState<number>(50);
  const [sigma, setSigma] = useState<number>(10);
  const [boundType, setBoundType] = useState<'between' | 'less_than' | 'greater_than' | 'two_tailed'>('between');
  const [lowerBound, setLowerBound] = useState<number>(40);
  const [upperBound, setUpperBound] = useState<number>(65);

  // Bayes Tree State
  const [priorP, setPriorP] = useState<number>(0.05); // P(Disease)
  const [sensitivity, setSensitivity] = useState<number>(0.95); // P(Test+ | Disease)
  const [specificity, setSpecificity] = useState<number>(0.90); // P(Test- | Healthy)

  // Calculations for Normal Curve
  const zLower = (lowerBound - mu) / sigma;
  const zUpper = (upperBound - mu) / sigma;

  const calculatedProbability = useMemo(() => {
    switch (boundType) {
      case 'between': {
        const p1 = normalCdf(zLower);
        const p2 = normalCdf(zUpper);
        return Math.max(0, p2 - p1);
      }
      case 'less_than':
        return normalCdf(zUpper);
      case 'greater_than':
        return 1.0 - normalCdf(zLower);
      case 'two_tailed': {
        const absZ = Math.abs(zUpper);
        return 2.0 * (1.0 - normalCdf(absZ));
      }
      default:
        return 0;
    }
  }, [boundType, zLower, zUpper]);

  // Bayes Calculations
  const bayesResults = useMemo(() => {
    const pD = priorP; // P(D)
    const pDc = 1 - priorP; // P(D')
    const pPosGivenD = sensitivity; // P(+ | D)
    const pNegGivenD = 1 - sensitivity; // P(- | D)
    const pNegGivenDc = specificity; // P(- | D')
    const pPosGivenDc = 1 - specificity; // P(+ | D')

    // Law of Total Probability for P(+)
    const pPos = pPosGivenD * pD + pPosGivenDc * pDc;
    // Posterior P(D | +) = [P(+ | D) * P(D)] / P(+)
    const posteriorGivenPos = pPos > 0 ? (pPosGivenD * pD) / pPos : 0;
    // Posterior P(D' | -) = [P(- | D') * P(D')] / P(-)
    const pNeg = pNegGivenD * pD + pNegGivenDc * pDc;
    const posteriorGivenNeg = pNeg > 0 ? (pNegGivenDc * pDc) / pNeg : 0;

    return {
      pD,
      pDc,
      pPosGivenD,
      pNegGivenD,
      pNegGivenDc,
      pPosGivenDc,
      pPos,
      pNeg,
      posteriorGivenPos,
      posteriorGivenNeg,
    };
  }, [priorP, sensitivity, specificity]);

  // SVG Geometry Dimensions
  const svgWidth = 680;
  const svgHeight = 280;
  const padding = { top: 30, right: 30, bottom: 45, left: 30 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const minX = mu - 4 * sigma;
  const maxX = mu + 4 * sigma;
  const maxPdf = normalPdf(mu, mu, sigma) * 1.15;

  const toSvgX = (x: number) => padding.left + ((x - minX) / (maxX - minX)) * graphWidth;
  const toSvgY = (y: number) => padding.top + graphHeight - (y / maxPdf) * graphHeight;

  // Generate Normal PDF path
  const curvePoints: Array<[number, number]> = [];
  const numSteps = 160;
  for (let i = 0; i <= numSteps; i++) {
    const currX = minX + (i / numSteps) * (maxX - minX);
    const currY = normalPdf(currX, mu, sigma);
    curvePoints.push([toSvgX(currX), toSvgY(currY)]);
  }
  const curvePathD = curvePoints.reduce((acc, pt, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${pt[0]} ${pt[1]}`, '');

  // Generate Shaded Region path
  let shadeStart = minX;
  let shadeEnd = maxX;
  if (boundType === 'between') {
    shadeStart = Math.max(minX, Math.min(lowerBound, upperBound));
    shadeEnd = Math.min(maxX, Math.max(lowerBound, upperBound));
  } else if (boundType === 'less_than') {
    shadeStart = minX;
    shadeEnd = Math.min(maxX, upperBound);
  } else if (boundType === 'greater_than') {
    shadeStart = Math.max(minX, lowerBound);
    shadeEnd = maxX;
  }

  const shadedPoints: Array<[number, number]> = [];
  const shadeSteps = 100;
  for (let i = 0; i <= shadeSteps; i++) {
    const currX = shadeStart + (i / shadeSteps) * (shadeEnd - shadeStart);
    const currY = normalPdf(currX, mu, sigma);
    shadedPoints.push([toSvgX(currX), toSvgY(currY)]);
  }

  const baselineY = toSvgY(0);
  const shadedPathD =
    shadedPoints.length > 0
      ? `M ${shadedPoints[0][0]} ${baselineY} ` +
        shadedPoints.map((pt) => `L ${pt[0]} ${pt[1]}`).join(' ') +
        ` L ${shadedPoints[shadedPoints.length - 1][0]} ${baselineY} Z`
      : '';

  // Empirical presets
  const applyEmpiricalRule = (k: 1 | 2 | 3) => {
    setBoundType('between');
    setLowerBound(mu - k * sigma);
    setUpperBound(mu + k * sigma);
  };

  return (
    <div className="space-y-6">
      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Binary className="w-5 h-5 text-emerald-400" />
          <h4 className="text-sm font-bold text-slate-200">
            {isArabic
              ? 'مختبر التوزيع الطبيعي ومبرهنة بايز الاحتمالية'
              : 'Normal Distribution & Bayesian Inference Laboratory'}
          </h4>
        </div>

        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('normal_curve')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'normal_curve'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{isArabic ? 'منحنى التوزيع الطبيعي N(μ,σ²)' : 'Normal Bell Curve'}</span>
          </button>
          <button
            onClick={() => setActiveTab('bayes_tree')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'bayes_tree'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>{isArabic ? 'شجرة بايز والاستدلال الشرطي' : 'Bayesian Inference Tree'}</span>
          </button>
        </div>
      </div>

      {/* MODE 1: NORMAL DISTRIBUTION CURVE */}
      {activeTab === 'normal_curve' && (
        <div className="space-y-6">
          {/* Main SVG Curve Card */}
          <div
            className={`rounded-2xl p-5 border relative overflow-hidden ${
              isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-slate-950/80 border-slate-800 shadow-xl'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-300">
                  {isArabic ? 'المعادلة المعيارية:' : 'Standard Density Function:'}
                </span>
                <span className="font-mono text-xs text-emerald-400">
                  <MathRenderer
                    math={
                      isArabic
                        ? `X \\sim N(${toHindiDigits(mu)}, ${toHindiDigits(sigma)}^2)`
                        : `X \\sim N(${mu}, ${sigma}^2)`
                    }
                    lang={lang}
                  />
                </span>
              </div>

              {/* Calculated Probability Display */}
              <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/40 px-3.5 py-1.5 rounded-xl text-emerald-300 font-mono text-xs font-bold shadow-inner">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {boundType === 'between' &&
                    (isArabic
                      ? `P(${toHindiDigits(lowerBound)} \\le X \\le ${toHindiDigits(upperBound)})`
                      : `P(${lowerBound} \\le X \\le ${upperBound})`)}
                  {boundType === 'less_than' &&
                    (isArabic ? `P(X \\le ${toHindiDigits(upperBound)})` : `P(X \\le ${upperBound})`)}
                  {boundType === 'greater_than' &&
                    (isArabic ? `P(X \\ge ${toHindiDigits(lowerBound)})` : `P(X \\ge ${lowerBound})`)}
                  {boundType === 'two_tailed' &&
                    (isArabic
                      ? `P(|Z| \\ge ${toHindiDigits(Math.abs(zUpper).toFixed(2))})`
                      : `P(|Z| \\ge ${Math.abs(zUpper).toFixed(2)})`)}
                  {' = '}
                  <span className="text-white text-sm font-black">
                    {isArabic
                      ? toHindiDigits((calculatedProbability * 100).toFixed(2)) + '%'
                      : (calculatedProbability * 100).toFixed(2) + '%'}
                  </span>
                  <span className="text-emerald-400/80 text-[10px] ml-1">
                    ({isArabic ? toHindiDigits(calculatedProbability.toFixed(4)) : calculatedProbability.toFixed(4)})
                  </span>
                </span>
              </div>
            </div>

            {/* SVG Plot */}
            <div className="w-full overflow-x-auto">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-auto select-none"
              >
                <defs>
                  <linearGradient id="normalShadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.10" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* X Axis Baseline */}
                <line
                  x1={padding.left}
                  y1={baselineY}
                  x2={svgWidth - padding.right}
                  y2={baselineY}
                  stroke="#334155"
                  strokeWidth="1.5"
                />

                {/* Standard Deviation Tick Marks */}
                {[-3, -2, -1, 0, 1, 2, 3].map((k) => {
                  const valX = mu + k * sigma;
                  const svgX = toSvgX(valX);
                  const isMean = k === 0;

                  return (
                    <g key={k}>
                      <line
                        x1={svgX}
                        y1={baselineY}
                        x2={svgX}
                        y2={isMean ? toSvgY(normalPdf(mu, mu, sigma)) : baselineY + 6}
                        stroke={isMean ? '#10b981' : '#475569'}
                        strokeWidth={isMean ? '1.5' : '1'}
                        strokeDasharray={isMean ? '4 3' : undefined}
                      />
                      <text
                        x={svgX}
                        y={baselineY + 20}
                        textAnchor="middle"
                        fontSize="10"
                        fill={isMean ? '#34d399' : '#94a3b8'}
                        fontFamily="monospace"
                        fontWeight={isMean ? 'bold' : 'normal'}
                      >
                        {isArabic ? toHindiDigits(valX) : valX}
                      </text>
                      <text
                        x={svgX}
                        y={baselineY + 34}
                        textAnchor="middle"
                        fontSize="9"
                        fill="#64748b"
                        fontFamily="sans-serif"
                      >
                        {k === 0 ? 'μ' : `${k > 0 ? '+' : ''}${k}σ`}
                      </text>
                    </g>
                  );
                })}

                {/* Shaded Area Under Curve */}
                {shadedPathD && <path d={shadedPathD} fill="url(#normalShadeGrad)" />}

                {/* Main Normal Bell Curve Outline */}
                <path
                  d={curvePathD}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />

                {/* Lower Bound Boundary Line */}
                {(boundType === 'between' || boundType === 'greater_than') && (
                  <g>
                    <line
                      x1={toSvgX(lowerBound)}
                      y1={baselineY}
                      x2={toSvgX(lowerBound)}
                      y2={toSvgY(normalPdf(lowerBound, mu, sigma))}
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    <circle
                      cx={toSvgX(lowerBound)}
                      cy={toSvgY(normalPdf(lowerBound, mu, sigma))}
                      r="4"
                      fill="#f59e0b"
                    />
                    <text
                      x={toSvgX(lowerBound)}
                      y={toSvgY(normalPdf(lowerBound, mu, sigma)) - 8}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#fbbf24"
                      fontWeight="bold"
                    >
                      a = {isArabic ? toHindiDigits(lowerBound) : lowerBound}
                    </text>
                  </g>
                )}

                {/* Upper Bound Boundary Line */}
                {(boundType === 'between' || boundType === 'less_than') && (
                  <g>
                    <line
                      x1={toSvgX(upperBound)}
                      y1={baselineY}
                      x2={toSvgX(upperBound)}
                      y2={toSvgY(normalPdf(upperBound, mu, sigma))}
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />
                    <circle
                      cx={toSvgX(upperBound)}
                      cy={toSvgY(normalPdf(upperBound, mu, sigma))}
                      r="4"
                      fill="#38bdf8"
                    />
                    <text
                      x={toSvgX(upperBound)}
                      y={toSvgY(normalPdf(upperBound, mu, sigma)) - 8}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#38bdf8"
                      fontWeight="bold"
                    >
                      b = {isArabic ? toHindiDigits(upperBound) : upperBound}
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* Quick Empirical Rule Presets (68-95-99.7) */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold text-slate-400">
              {isArabic ? 'القاعدة التجريبية المعيارية:' : 'Empirical Rule (68-95-99.7):'}
            </span>
            <button
              onClick={() => applyEmpiricalRule(1)}
              className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>[μ - σ, μ + σ] ≈ 68.27%</span>
            </button>
            <button
              onClick={() => applyEmpiricalRule(2)}
              className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>[μ - 2σ, μ + 2σ] ≈ 95.45%</span>
            </button>
            <button
              onClick={() => applyEmpiricalRule(3)}
              className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>[μ - 3σ, μ + 3σ] ≈ 99.73%</span>
            </button>
          </div>

          {/* Interactive Sliders & Parameter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
            {/* Mean Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-emerald-400">{isArabic ? 'المتوسط الحسابي (μ):' : 'Mean (μ):'}</span>
                <span className="font-mono text-slate-200">{isArabic ? toHindiDigits(mu) : mu}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={mu}
                onChange={(e) => setMu(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Sigma Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-cyan-400">{isArabic ? 'الانحراف المعياري (σ):' : 'Std Deviation (σ):'}</span>
                <span className="font-mono text-slate-200">{isArabic ? toHindiDigits(sigma) : sigma}</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={sigma}
                onChange={(e) => setSigma(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Bound Type Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 block">
                {isArabic ? 'نوع المساحة الاحتمالية:' : 'Interval Type:'}
              </label>
              <select
                value={boundType}
                onChange={(e) => setBoundType(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs text-slate-200 focus:border-emerald-500"
              >
                <option value="between">{isArabic ? 'بين قيمتين P(a ≤ X ≤ b)' : 'Between P(a ≤ X ≤ b)'}</option>
                <option value="less_than">{isArabic ? 'أقل من قيمة P(X ≤ b)' : 'Left Tail P(X ≤ b)'}</option>
                <option value="greater_than">{isArabic ? 'أكبر من قيمة P(X ≥ a)' : 'Right Tail P(X ≥ a)'}</option>
              </select>
            </div>

            {/* Interval Sliders */}
            <div className="space-y-2">
              {(boundType === 'between' || boundType === 'greater_than') && (
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-amber-400">
                    <span>{isArabic ? 'الحد الأدنى (a):' : 'Lower (a):'}</span>
                    <span className="font-mono">{isArabic ? toHindiDigits(lowerBound) : lowerBound}</span>
                  </div>
                  <input
                    type="range"
                    min={mu - 3.5 * sigma}
                    max={mu + 3.5 * sigma}
                    step="1"
                    value={lowerBound}
                    onChange={(e) => setLowerBound(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              )}

              {(boundType === 'between' || boundType === 'less_than') && (
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-sky-400">
                    <span>{isArabic ? 'الحد الأعلى (b):' : 'Upper (b):'}</span>
                    <span className="font-mono">{isArabic ? toHindiDigits(upperBound) : upperBound}</span>
                  </div>
                  <input
                    type="range"
                    min={mu - 3.5 * sigma}
                    max={mu + 3.5 * sigma}
                    step="1"
                    value={upperBound}
                    onChange={(e) => setUpperBound(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: BAYESIAN INFERENCE TREE */}
      {activeTab === 'bayes_tree' && (
        <div className="space-y-6">
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h5 className="text-xs font-bold text-slate-200">
                {isArabic
                  ? 'نموذج الفحص الطبي ومفارقة الإيجابية الكاذبة (The False Positive Paradox)'
                  : 'Diagnostic Testing & The False Positive Paradox in Bayesian Probability'}
              </h5>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {isArabic
                ? 'توضح مبرهنة بايز كيف يتغير الاحتمال البعدي P(Disease | Positive Test) جذرياً عندما يكون انتشار المرض في المجتمع P(Disease) نادراً جداً، حتى ولو كانت دقة الفحص ٩٥٪.'
                : 'Bayes Theorem reveals how posterior probability P(Disease | Positive) changes drastically when the prior prevalence P(Disease) is rare, even with a test accuracy of 95%.'}
            </p>

            {/* Tree Diagram Visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Branch 1: Condition Positive */}
              <div className="bg-slate-900/90 border border-indigo-950 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-indigo-300 border-b border-slate-800 pb-2">
                  <span>{isArabic ? 'مسار المصابين فعلياً' : 'Condition Present (D)'}</span>
                  <span className="font-mono text-indigo-400">P(D) = {(bayesResults.pD * 100).toFixed(1)}%</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-semibold">
                      {isArabic ? 'فحص إيجابي صحيح (+|D):' : 'True Positive (+|D):'}
                    </span>
                    <span className="font-mono text-slate-200">
                      {(bayesResults.pPosGivenD * 100).toFixed(1)}% (
                      {(bayesResults.pD * bayesResults.pPosGivenD * 100).toFixed(2)}% of total)
                    </span>
                  </div>

                  <div className="flex justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-rose-400 font-semibold">
                      {isArabic ? 'فحص سلبي كاذب (-|D):' : 'False Negative (-|D):'}
                    </span>
                    <span className="font-mono text-slate-200">
                      {(bayesResults.pNegGivenD * 100).toFixed(1)}% (
                      {(bayesResults.pD * bayesResults.pNegGivenD * 100).toFixed(2)}% of total)
                    </span>
                  </div>
                </div>
              </div>

              {/* Branch 2: Condition Negative */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 border-b border-slate-800 pb-2">
                  <span>{isArabic ? 'مسار غير المصابين (الأصحاء)' : 'Condition Absent (D\')'}</span>
                  <span className="font-mono text-slate-400">P(D') = {(bayesResults.pDc * 100).toFixed(1)}%</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-amber-400 font-semibold">
                      {isArabic ? 'فحص إيجابي كاذب (+|D\'):' : 'False Positive (+|D\'):'}
                    </span>
                    <span className="font-mono text-slate-200">
                      {(bayesResults.pPosGivenDc * 100).toFixed(1)}% (
                      {(bayesResults.pDc * bayesResults.pPosGivenDc * 100).toFixed(2)}% of total)
                    </span>
                  </div>

                  <div className="flex justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-semibold">
                      {isArabic ? 'فحص سلبي صحيح (-|D\'):' : 'True Negative (-|D\'):'}
                    </span>
                    <span className="font-mono text-slate-200">
                      {(bayesResults.pNegGivenDc * 100).toFixed(1)}% (
                      {(bayesResults.pDc * bayesResults.pNegGivenDc * 100).toFixed(2)}% of total)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Posterior Result Card */}
            <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900 to-indigo-950/50 border border-emerald-500/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  {isArabic ? 'مبرهنة بايز للاحتمال البعدي:' : 'Bayesian Posterior Probability:'}
                </span>
                <p className="text-sm font-black text-slate-100">
                  {isArabic
                    ? `إذا ظهر الفحص إيجابياً، فإن احتمال الإصابة الفعلية P(D | +) هو:`
                    : `Given a positive test, actual probability of disease P(D | +) is:`}
                </p>
              </div>

              <div className="text-center sm:text-right rtl:sm:text-left">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  {isArabic
                    ? toHindiDigits((bayesResults.posteriorGivenPos * 100).toFixed(1)) + '%'
                    : (bayesResults.posteriorGivenPos * 100).toFixed(1) + '%'}
                </span>
                <p className="text-[10px] text-slate-400">
                  {isArabic
                    ? `مقابل ${(100 - bayesResults.posteriorGivenPos * 100).toFixed(1)}% إيجابية كاذبة`
                    : `vs ${(100 - bayesResults.posteriorGivenPos * 100).toFixed(1)}% false positive`}
                </p>
              </div>
            </div>

            {/* Bayes Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-indigo-400">{isArabic ? 'نسبة الانتشار P(D):' : 'Prevalence P(D):'}</span>
                  <span className="font-mono text-slate-200">{(priorP * 100).toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.005"
                  max="0.30"
                  step="0.005"
                  value={priorP}
                  onChange={(e) => setPriorP(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-emerald-400">
                    {isArabic ? 'حساسية الفحص P(+|D):' : 'Sensitivity P(+|D):'}
                  </span>
                  <span className="font-mono text-slate-200">{(sensitivity * 100).toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.80"
                  max="0.999"
                  step="0.005"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-cyan-400">
                    {isArabic ? 'خصوصية الفحص P(-|D\'):' : 'Specificity P(-|D\'):'}
                  </span>
                  <span className="font-mono text-slate-200">{(specificity * 100).toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.80"
                  max="0.999"
                  step="0.005"
                  value={specificity}
                  onChange={(e) => setSpecificity(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
