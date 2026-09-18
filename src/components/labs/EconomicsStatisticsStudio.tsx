import React, { useState, useMemo } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  TrendingUp,
  BarChart3,
  Scale,
  Activity,
  RotateCcw,
  Sparkles,
  Sliders,
  DollarSign,
  PieChart,
  Percent,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  initialMode?: 'market_equilibrium' | 'national_income' | 'correlation_regression' | 'probability_tree' | 'normal_distribution';
}

export type EconStudioMode =
  | 'market_equilibrium'
  | 'national_income'
  | 'correlation_regression'
  | 'probability_tree'
  | 'normal_distribution';

export const EconomicsStatisticsStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  initialMode = 'market_equilibrium',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<EconStudioMode>(initialMode);

  // -------------------------------------------------------------
  // Mode 1: Supply, Demand & Market Equilibrium Simulator
  // -------------------------------------------------------------
  // Demand: Qd = a - b*P
  // Supply: Qs = c + d*P
  const [demandA, setDemandA] = useState<number>(120);
  const [demandB, setDemandB] = useState<number>(2);
  const [supplyC, setSupplyC] = useState<number>(20);
  const [supplyD, setSupplyD] = useState<number>(3);
  const [currentPrice, setCurrentPrice] = useState<number>(20);
  const [taxPerUnit, setTaxPerUnit] = useState<number>(0);

  // Derived equilibrium: Qd = Qs -> a - b*P = c + d*(P - tax) -> a - c + d*tax = (b + d)*P
  const eqPrice = useMemo(() => {
    const denom = demandB + supplyD;
    if (denom === 0) return 0;
    return Number(((demandA - supplyC + supplyD * taxPerUnit) / denom).toFixed(2));
  }, [demandA, demandB, supplyC, supplyD, taxPerUnit]);

  const eqQuantity = useMemo(() => {
    const q = demandA - demandB * eqPrice;
    return Number(Math.max(0, q).toFixed(2));
  }, [demandA, demandB, eqPrice]);

  const currentQd = useMemo(() => Math.max(0, demandA - demandB * currentPrice), [demandA, demandB, currentPrice]);
  const currentQs = useMemo(() => Math.max(0, supplyC + supplyD * Math.max(0, currentPrice - taxPerUnit)), [supplyC, supplyD, currentPrice, taxPerUnit]);
  const marketStatus = useMemo(() => {
    const diff = currentQs - currentQd;
    if (Math.abs(diff) < 0.5) return 'equilibrium';
    if (diff > 0) return 'surplus';
    return 'shortage';
  }, [currentQs, currentQd]);

  // Price Elasticity of Demand: Ed = -b * (P / Q)
  const priceElasticity = useMemo(() => {
    if (currentQd === 0) return 0;
    return Number((demandB * (currentPrice / currentQd)).toFixed(2));
  }, [demandB, currentPrice, currentQd]);

  // -------------------------------------------------------------
  // Mode 2: Keynesian National Income & Investment Multiplier
  // -------------------------------------------------------------
  // Y = C + I + G + (X - M)
  // C = C0 + MPC * Y
  // Y = (C0 + I0 + G0 + NX) / (1 - MPC)
  const [c0, setC0] = useState<number>(50); // Autonomous consumption
  const [mpc, setMpc] = useState<number>(0.75); // Marginal Propensity to Consume
  const [inv0, setInv0] = useState<number>(40); // Autonomous Investment
  const [gov0, setGov0] = useState<number>(30); // Government spending
  const [netX, setNetX] = useState<number>(10); // Net Exports (X - M)
  const [fullEmploymentY, setFullEmploymentY] = useState<number>(550); // Potential GDP

  const mps = useMemo(() => Number((1 - mpc).toFixed(2)), [mpc]);
  const investmentMultiplier = useMemo(() => {
    if (mps <= 0.01) return 100;
    return Number((1 / mps).toFixed(2));
  }, [mps]);

  const autonomousExpenditure = useMemo(() => c0 + inv0 + gov0 + netX, [c0, inv0, gov0, netX]);
  const eqNationalIncome = useMemo(() => {
    return Number((autonomousExpenditure * investmentMultiplier).toFixed(2));
  }, [autonomousExpenditure, investmentMultiplier]);

  const outputGap = useMemo(() => {
    return Number((eqNationalIncome - fullEmploymentY).toFixed(2));
  }, [eqNationalIncome, fullEmploymentY]);

  // -------------------------------------------------------------
  // Mode 3: Pearson & Spearman Linear Correlation & Regression Lab
  // -------------------------------------------------------------
  interface DataPoint {
    id: number;
    x: number;
    y: number;
    labelEn: string;
    labelAr: string;
  }

  const defaultPoints: DataPoint[] = [
    { id: 1, x: 2, y: 3, labelEn: 'Obs A', labelAr: 'مفردة أ' },
    { id: 2, x: 4, y: 5, labelEn: 'Obs B', labelAr: 'مفردة ب' },
    { id: 3, x: 5, y: 7, labelEn: 'Obs C', labelAr: 'مفردة ج' },
    { id: 4, x: 7, y: 8, labelEn: 'Obs D', labelAr: 'مفردة د' },
    { id: 5, x: 8, y: 11, labelEn: 'Obs E', labelAr: 'مفردة هـ' },
    { id: 6, x: 10, y: 12, labelEn: 'Obs F', labelAr: 'مفردة و' },
  ];

  const [dataPoints, setDataPoints] = useState<DataPoint[]>(defaultPoints);
  const [predictX, setPredictX] = useState<number>(6);

  // Statistics computation
  const stats = useMemo(() => {
    const n = dataPoints.length;
    if (n < 2) {
      return { n, r: 0, rs: 0, slopeB: 0, interceptA: 0, meanX: 0, meanY: 0, sumX: 0, sumY: 0 };
    }

    let sumX = 0;
    let sumY = 0;
    let sumX2 = 0;
    let sumY2 = 0;
    let sumXY = 0;

    for (const p of dataPoints) {
      sumX += p.x;
      sumY += p.y;
      sumX2 += p.x * p.x;
      sumY2 += p.y * p.y;
      sumXY += p.x * p.y;
    }

    const meanX = sumX / n;
    const meanY = sumY / n;

    // Pearson r
    const num = n * sumXY - sumX * sumY;
    const denX = n * sumX2 - sumX * sumX;
    const denY = n * sumY2 - sumY * sumY;
    const den = Math.sqrt(Math.max(0, denX) * Math.max(0, denY));
    const r = den === 0 ? 0 : Number((num / den).toFixed(3));

    // Regression slope and intercept
    const slopeB = denX === 0 ? 0 : Number((num / denX).toFixed(3));
    const interceptA = Number((meanY - slopeB * meanX).toFixed(3));

    // Spearman rs
    const sortedByX = [...dataPoints].sort((a, b) => a.x - b.x);
    const sortedByY = [...dataPoints].sort((a, b) => a.y - b.y);
    const rankXMap = new Map<number, number>();
    const rankYMap = new Map<number, number>();

    sortedByX.forEach((p, idx) => rankXMap.set(p.id, idx + 1));
    sortedByY.forEach((p, idx) => rankYMap.set(p.id, idx + 1));

    let sumD2 = 0;
    for (const p of dataPoints) {
      const rx = rankXMap.get(p.id) || 0;
      const ry = rankYMap.get(p.id) || 0;
      const d = rx - ry;
      sumD2 += d * d;
    }
    const rs = Number((1 - (6 * sumD2) / (n * (n * n - 1))).toFixed(3));

    return { n, r, rs, slopeB, interceptA, meanX, meanY, sumX, sumY };
  }, [dataPoints]);

  const predictedY = useMemo(() => {
    return Number((stats.interceptA + stats.slopeB * predictX).toFixed(2));
  }, [stats, predictX]);

  // -------------------------------------------------------------
  // Mode 4: Conditional Probability Tree & Stochastic Independence
  // -------------------------------------------------------------
  const [probA, setProbA] = useState<number>(0.4);
  const [probB, setProbB] = useState<number>(0.5);
  const [probBgivenA, setProbBgivenA] = useState<number>(0.5); // P(B|A)

  const probAandB = useMemo(() => Number((probA * probBgivenA).toFixed(3)), [probA, probBgivenA]);
  const probAgivenB = useMemo(() => {
    if (probB === 0) return 0;
    return Number((probAandB / probB).toFixed(3));
  }, [probAandB, probB]);

  const isIndependent = useMemo(() => {
    const expectedInter = Number((probA * probB).toFixed(3));
    return Math.abs(expectedInter - probAandB) < 0.01;
  }, [probA, probB, probAandB]);

  const probAunionB = useMemo(() => {
    return Number(Math.min(1, probA + probB - probAandB).toFixed(3));
  }, [probA, probB, probAandB]);

  // -------------------------------------------------------------
  // Mode 5: Gaussian Bell Curve & Standard Normal Z-Score Engine
  // -------------------------------------------------------------
  const [normMean, setNormMean] = useState<number>(50);
  const [normStd, setNormStd] = useState<number>(10);
  const [zScoreTarget, setZScoreTarget] = useState<number>(65);
  const [calcType, setCalcType] = useState<'less' | 'greater' | 'symmetric'>('less');

  const computedZ = useMemo(() => {
    if (normStd <= 0) return 0;
    return Number(((zScoreTarget - normMean) / normStd).toFixed(2));
  }, [zScoreTarget, normMean, normStd]);

  // Rational approximation for cumulative standard normal distribution Phi(z)
  const phi = (z: number): number => {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const sign = z < 0 ? -1 : 1;
    const absZ = Math.abs(z) / Math.sqrt(2);
    const t = 1.0 / (1.0 + p * absZ);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absZ * absZ);

    return 0.5 * (1.0 + sign * y);
  };

  const cumulativeArea = useMemo(() => {
    const p = phi(computedZ);
    if (calcType === 'less') return Number(p.toFixed(4));
    if (calcType === 'greater') return Number((1 - p).toFixed(4));
    // Symmetric [-|z|, +|z|]
    return Number((2 * phi(Math.abs(computedZ)) - 1).toFixed(4));
  }, [computedZ, calcType]);

  // -------------------------------------------------------------
  // UI Theme Palettes
  // -------------------------------------------------------------
  const bgClass = isLight
    ? 'bg-gradient-to-br from-amber-50/70 via-slate-50 to-orange-50/50 text-slate-900 border-amber-200'
    : isContrast
    ? 'bg-black text-amber-300 border-amber-500'
    : 'bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-900 text-slate-100 border-amber-800/40';

  const cardBg = isLight
    ? 'bg-white/80 border-slate-200 shadow-sm'
    : isContrast
    ? 'bg-black border-amber-500'
    : 'bg-slate-900/80 border-amber-500/20 backdrop-blur-sm';

  return (
    <div className={`p-4 sm:p-6 rounded-2xl border ${bgClass} transition-all duration-300`}>
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-amber-500/20 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-500 text-white shadow-lg shadow-amber-500/20">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2">
              <span>{isArabic ? 'استوديو الاقتصاد والإحصاء التطبيقي' : 'Economics & Applied Statistics Studio'}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 font-medium">
                {isArabic ? 'معتمد رسمياً' : 'MoE Certified'}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {isArabic
                ? 'محاكاة تفاعلية لتوازن الأسواق، مضاعف الدخل القومي، معامل بيرسون وسبيرمان، شجرة الاحتمالات ومنحنى التوزيع الطبيعي'
                : 'Interactive simulations for Market Equilibrium, Keynesian Multiplier, Correlation & Regression, Probability Trees, and Gaussian Z-Scores'}
            </p>
          </div>
        </div>

        {/* Studio Mode Selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-800/60 border border-amber-500/30 text-xs w-full md:w-auto overflow-x-auto">
          {[
            { id: 'market_equilibrium', labelAr: 'توازن السوق', labelEn: 'Market Equilibrium', icon: Scale },
            { id: 'national_income', labelAr: 'الدخل القومي', labelEn: 'National Income', icon: DollarSign },
            { id: 'correlation_regression', labelAr: 'الارتباط والانحدار', labelEn: 'Correlation & Reg.', icon: BarChart3 },
            { id: 'probability_tree', labelAr: 'الاحتمال الشرطي', labelEn: 'Conditional Prob.', icon: PieChart },
            { id: 'normal_distribution', labelAr: 'التوزيع الطبيعي Z', labelEn: 'Normal Bell (Z)', icon: Activity },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSel = activeMode === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveMode(tab.id as EconStudioMode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  isSel
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md shadow-amber-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: Supply, Demand & Market Equilibrium Simulator    */}
      {/* ======================================================== */}
      {activeMode === 'market_equilibrium' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Controls Side */}
            <div className={`lg:col-span-5 p-5 rounded-xl border ${cardBg} space-y-4`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
                <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                  <Sliders className="w-4 h-4" />
                  {isArabic ? 'معاملات منحنيات الطلب والعرض' : 'Demand & Supply Parameters'}
                </h3>
                <button
                  onClick={() => {
                    setDemandA(120);
                    setDemandB(2);
                    setSupplyC(20);
                    setSupplyD(3);
                    setCurrentPrice(20);
                    setTaxPerUnit(0);
                  }}
                  className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {isArabic ? 'استعادة' : 'Reset'}
                </button>
              </div>

              {/* Demand Parameters */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-medium text-emerald-400">
                  <span>{isArabic ? 'سعر السوق الفعلي ($P$):' : 'Current Market Price (P):'}</span>
                  <span className="font-mono text-sm">{currentPrice} EGP</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={currentPrice}
                  onChange={(e) => setCurrentPrice(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />

                <div className="flex justify-between font-medium text-blue-400 pt-2">
                  <span>{isArabic ? 'ثابت دالة الطلب ($a$):' : 'Demand Intercept (a):'}</span>
                  <span className="font-mono">{demandA}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="180"
                  step="5"
                  value={demandA}
                  onChange={(e) => setDemandA(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />

                <div className="flex justify-between font-medium text-rose-400 pt-2">
                  <span>{isArabic ? 'ثابت دالة العرض ($c$):' : 'Supply Intercept (c):'}</span>
                  <span className="font-mono">{supplyC}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="5"
                  value={supplyC}
                  onChange={(e) => setSupplyC(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />

                <div className="flex justify-between font-medium text-amber-400 pt-2">
                  <span>{isArabic ? 'ضريبة نوعية على الوحدة ($t$):' : 'Unit Tax (t):'}</span>
                  <span className="font-mono">{taxPerUnit} EGP</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="1"
                  value={taxPerUnit}
                  onChange={(e) => setTaxPerUnit(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Quick Equations Display */}
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
                <p className="text-blue-400">Qd = {demandA} - {demandB} · P</p>
                <p className="text-rose-400">Qs = {supplyC} + {supplyD} · (P - {taxPerUnit})</p>
              </div>
            </div>

            {/* Visualizer & Results Side */}
            <div className={`lg:col-span-7 p-5 rounded-xl border ${cardBg} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/40 mb-4">
                  <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                    <Sparkles className="w-4 h-4" />
                    {isArabic ? 'تحليل التوازن ومرونة الطلب' : 'Equilibrium & Elasticity Analytics'}
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      marketStatus === 'equilibrium'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : marketStatus === 'surplus'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    }`}
                  >
                    {isArabic
                      ? marketStatus === 'equilibrium'
                        ? 'توازن مستقر'
                        : marketStatus === 'surplus'
                        ? 'فائض عرض (كساد)'
                        : 'عجز طلب (اختناق)'
                      : marketStatus.toUpperCase()}
                  </span>
                </div>

                {/* Metric Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'سعر التوازن P*' : 'Eq. Price P*'}</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">{eqPrice} EGP</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'كمية التوازن Q*' : 'Eq. Quantity Q*'}</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">{eqQuantity}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الطلب الفعلي Qd' : 'Actual Demand'}</span>
                    <span className="text-lg font-bold text-blue-400 font-mono">{currentQd}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'العرض الفعلي Qs' : 'Actual Supply'}</span>
                    <span className="text-lg font-bold text-rose-400 font-mono">{currentQs}</span>
                  </div>
                </div>

                {/* SVG Visual Graph of Supply and Demand */}
                <div className="h-44 w-full bg-slate-950/80 rounded-xl border border-slate-800 relative p-2 flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full">
                    {/* Axes */}
                    <line x1="40" y1="130" x2="380" y2="130" stroke="#64748b" strokeWidth="1.5" />
                    <line x1="40" y1="130" x2="40" y2="20" stroke="#64748b" strokeWidth="1.5" />
                    <text x="380" y="145" fill="#94a3b8" fontSize="10" textAnchor="end">Q</text>
                    <text x="25" y="25" fill="#94a3b8" fontSize="10">P</text>

                    {/* Demand Line */}
                    <line x1="60" y1="30" x2="360" y2="120" stroke="#3b82f6" strokeWidth="2.5" />
                    <text x="365" y="118" fill="#3b82f6" fontSize="10" fontWeight="bold">D</text>

                    {/* Supply Line */}
                    <line x1="60" y1="120" x2="360" y2="30" stroke="#f43f5e" strokeWidth="2.5" />
                    <text x="365" y="32" fill="#f43f5e" fontSize="10" fontWeight="bold">S</text>

                    {/* Equilibrium Intersection Point */}
                    <circle cx="210" cy="75" r="5" fill="#f59e0b" />
                    <line x1="210" y1="75" x2="210" y2="130" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="40" y1="75" x2="210" y2="75" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="210" y="142" fill="#f59e0b" fontSize="9" textAnchor="middle">Q*</text>
                    <text x="32" y="78" fill="#f59e0b" fontSize="9" textAnchor="end">P*</text>

                    {/* Current Price Line */}
                    {Math.abs(currentPrice - eqPrice) > 1 && (
                      <>
                        <line
                          x1="40"
                          y1={130 - (currentPrice / 50) * 105}
                          x2="380"
                          y2={130 - (currentPrice / 50) * 105}
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                        />
                        <text x="32" y={130 - (currentPrice / 50) * 105 + 3} fill="#10b981" fontSize="9" textAnchor="end">
                          P
                        </text>
                      </>
                    )}
                  </svg>
                </div>
              </div>

              {/* Elasticity Interpretation Badge */}
              <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs flex items-center justify-between">
                <div>
                  <span className="font-semibold text-amber-300">
                    {isArabic ? 'مرونة الطلب السعرية (Ed): ' : 'Price Elasticity of Demand (Ed): '}
                  </span>
                  <span className="font-mono text-amber-200">{priceElasticity}</span>
                </div>
                <span className="text-slate-400">
                  {priceElasticity > 1
                    ? isArabic ? 'طلب مرن (Ed > 1)' : 'Elastic (Ed > 1)'
                    : priceElasticity === 1
                    ? isArabic ? 'متكافئ المرونة (Ed = 1)' : 'Unitary (Ed = 1)'
                    : isArabic ? 'غير مرن (Ed < 1)' : 'Inelastic (Ed < 1)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: Keynesian National Income & Investment Multiplier*/}
      {/* ======================================================== */}
      {activeMode === 'national_income' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={`lg:col-span-5 p-5 rounded-xl border ${cardBg} space-y-4`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
                <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                  <DollarSign className="w-4 h-4" />
                  {isArabic ? 'عناصر الإنفاق القومي الكينزي' : 'Keynesian Expenditure Components'}
                </h3>
                <button
                  onClick={() => {
                    setC0(50);
                    setMpc(0.75);
                    setInv0(40);
                    setGov0(30);
                    setNetX(10);
                    setFullEmploymentY(550);
                  }}
                  className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {isArabic ? 'استعادة' : 'Reset'}
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-medium text-emerald-400">
                  <span>{isArabic ? 'الميل الحدي للاستهلاك (MPC):' : 'Marginal Propensity to Consume (MPC):'}</span>
                  <span className="font-mono font-bold">{mpc}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="0.95"
                  step="0.05"
                  value={mpc}
                  onChange={(e) => setMpc(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />

                <div className="flex justify-between font-medium text-blue-400 pt-2">
                  <span>{isArabic ? 'الاستهلاك التلقائي (C0):' : 'Autonomous Consumption (C0):'}</span>
                  <span className="font-mono">{c0} B EGP</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={c0}
                  onChange={(e) => setC0(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />

                <div className="flex justify-between font-medium text-amber-400 pt-2">
                  <span>{isArabic ? 'الإنفاق الاستثماري المبدئي (I0):' : 'Autonomous Investment (I0):'}</span>
                  <span className="font-mono">{inv0} B EGP</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={inv0}
                  onChange={(e) => setInv0(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />

                <div className="flex justify-between font-medium text-purple-400 pt-2">
                  <span>{isArabic ? 'الإنفاق الحكومي (G0):' : 'Government Spending (G0):'}</span>
                  <span className="font-mono">{gov0} B EGP</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="5"
                  value={gov0}
                  onChange={(e) => setGov0(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />

                <div className="flex justify-between font-medium text-cyan-400 pt-2">
                  <span>{isArabic ? 'صافي الصادرات (NX = X - M):' : 'Net Exports (NX):'}</span>
                  <span className="font-mono">{netX} B EGP</span>
                </div>
                <input
                  type="range"
                  min="-30"
                  max="40"
                  step="5"
                  value={netX}
                  onChange={(e) => setNetX(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-mono space-y-1">
                <p className="text-slate-300">
                  {isArabic ? 'الإنفاق المستقل A = ' : 'Autonomous Exp. A = '}
                  <span className="text-amber-400 font-bold">{autonomousExpenditure} B</span>
                </p>
                <p className="text-slate-300">
                  {isArabic ? 'الميل للادخار MPS = ' : 'Marginal Savings MPS = '}
                  <span className="text-emerald-400 font-bold">{mps}</span>
                </p>
              </div>
            </div>

            <div className={`lg:col-span-7 p-5 rounded-xl border ${cardBg} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/40 mb-4">
                  <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                    <TrendingUp className="w-4 h-4" />
                    {isArabic ? 'توازن الدخل القومي والتحليل الكينزي' : 'Keynesian Equilibrium & Multiplier'}
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      Math.abs(outputGap) < 10
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : outputGap > 0
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                    }`}
                  >
                    {Math.abs(outputGap) < 10
                      ? isArabic ? 'تشغيل كامل' : 'Full Employment'
                      : outputGap > 0
                      ? isArabic ? 'فجوة تضخمية' : 'Inflationary Gap'
                      : isArabic ? 'فجوة انكماشية (ركود)' : 'Recessionary Gap'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'مضاعف الاستثمار (k)' : 'Multiplier (k)'}</span>
                    <span className="text-xl font-bold text-amber-400 font-mono">{investmentMultiplier}x</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الدخل التوازني (Y*)' : 'Equilibrium Y*'}</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">{eqNationalIncome} B</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'دخل التشغيل الكامل' : 'Potential GDP (Yf)'}</span>
                    <span className="text-xl font-bold text-purple-400 font-mono">{fullEmploymentY} B</span>
                  </div>
                </div>

                {/* SVG 45-degree Keynesian Cross Diagram */}
                <div className="h-44 w-full bg-slate-950/80 rounded-xl border border-slate-800 relative p-2 flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full">
                    {/* Axes */}
                    <line x1="40" y1="130" x2="380" y2="130" stroke="#64748b" strokeWidth="1.5" />
                    <line x1="40" y1="130" x2="40" y2="20" stroke="#64748b" strokeWidth="1.5" />
                    <text x="380" y="145" fill="#94a3b8" fontSize="10" textAnchor="end">Income (Y)</text>
                    <text x="25" y="25" fill="#94a3b8" fontSize="10">AE</text>

                    {/* 45-degree Line */}
                    <line x1="40" y1="130" x2="350" y2="20" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="355" y="25" fill="#94a3b8" fontSize="9">Y = AE (45°)</text>

                    {/* Aggregate Expenditure AE = A + MPC*Y */}
                    <line x1="40" y1="90" x2="350" y2="35" stroke="#f59e0b" strokeWidth="2.5" />
                    <text x="355" y="42" fill="#f59e0b" fontSize="10" fontWeight="bold">AE</text>

                    {/* Intersection Equilibrium */}
                    <circle cx="210" cy="60" r="5" fill="#10b981" />
                    <line x1="210" y1="60" x2="210" y2="130" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="210" y="142" fill="#10b981" fontSize="9" textAnchor="middle">Y*</text>
                  </svg>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-slate-300">
                <p>
                  {isArabic
                    ? `قاعدة المضاعف: كل زيادة بمقدار 10 مليارات في الاستثمار ترفع الدخل القومي بمقدار ${(10 * investmentMultiplier).toFixed(1)} مليار جنيه.`
                    : `Multiplier Rule: Every 10B increase in investment generates ${(10 * investmentMultiplier).toFixed(1)}B increase in total National Income.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 3: Pearson & Spearman Linear Correlation Lab        */}
      {/* ======================================================== */}
      {activeMode === 'correlation_regression' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={`lg:col-span-5 p-5 rounded-xl border ${cardBg} space-y-4`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
                <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                  <BarChart3 className="w-4 h-4" />
                  {isArabic ? 'جدول بيانات المفردات الإحصائية' : 'Observation Data Table'}
                </h3>
                <button
                  onClick={() => setDataPoints(defaultPoints)}
                  className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {isArabic ? 'استعادة' : 'Reset'}
                </button>
              </div>

              {/* Data Table */}
              <div className="max-h-56 overflow-y-auto border border-slate-800 rounded-lg">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-950/70 text-slate-400 font-mono">
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">X (س)</th>
                      <th className="p-2">Y (ص)</th>
                      <th className="p-2 text-right">{isArabic ? 'تحكم' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono">
                    {dataPoints.map((p, idx) => (
                      <tr key={p.id} className="hover:bg-slate-800/30">
                        <td className="p-2 text-slate-400">{idx + 1}</td>
                        <td className="p-2">
                          <input
                            type="number"
                            value={p.x}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setDataPoints((prev) => prev.map((item) => (item.id === p.id ? { ...item, x: val } : item)));
                            }}
                            className="w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-center text-blue-400"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            value={p.y}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setDataPoints((prev) => prev.map((item) => (item.id === p.id ? { ...item, y: val } : item)));
                            }}
                            className="w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-400"
                          />
                        </td>
                        <td className="p-2 text-right">
                          <button
                            onClick={() => setDataPoints((prev) => prev.filter((item) => item.id !== p.id))}
                            className="text-rose-400 hover:text-rose-300 text-xs px-1.5 py-0.5"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add Point Button */}
              <button
                onClick={() => {
                  const newId = Date.now();
                  setDataPoints((prev) => [...prev, { id: newId, x: 12, y: 15, labelEn: 'New Pt', labelAr: 'نقطة جديدة' }]);
                }}
                className="w-full py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 text-xs font-semibold"
              >
                + {isArabic ? 'إضافة نقطة للمخطط' : 'Add Data Point'}
              </button>

              {/* Prediction Input */}
              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between font-medium text-slate-300">
                  <span>{isArabic ? 'التنبؤ بقيمة ص عند س = :' : 'Predict Y for given X = :'}</span>
                  <span className="font-mono text-amber-400">{predictX}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={predictX}
                  onChange={(e) => setPredictX(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Visualizer & Equations Side */}
            <div className={`lg:col-span-7 p-5 rounded-xl border ${cardBg} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/40 mb-4">
                  <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                    <Percent className="w-4 h-4" />
                    {isArabic ? 'معاملات الارتباط وخط الانحدار' : 'Correlation Coefficients & Regression'}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold font-mono">
                    N = {stats.n}
                  </span>
                </div>

                {/* Core Statistical Coefficients Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'بيرسون (r)' : 'Pearson (r)'}</span>
                    <span className="text-xl font-bold text-amber-400 font-mono">{stats.r}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'سبيرمان (rs)' : 'Spearman (rs)'}</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">{stats.rs}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الميل (b)' : 'Slope (b)'}</span>
                    <span className="text-xl font-bold text-blue-400 font-mono">{stats.slopeB}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الحد الثابت (a)' : 'Intercept (a)'}</span>
                    <span className="text-xl font-bold text-purple-400 font-mono">{stats.interceptA}</span>
                  </div>
                </div>

                {/* Regression Equation Formula Card */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 font-mono text-center text-sm mb-4">
                  <span className="text-slate-400">{isArabic ? 'معادلة خط انحدار ص على س: ' : 'Regression line: '}</span>
                  <span className="text-amber-400 font-bold">ŷ = {stats.interceptA} + ({stats.slopeB}) · x</span>
                </div>

                {/* Prediction Result */}
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs flex items-center justify-between font-mono">
                  <span className="text-emerald-300">
                    {isArabic ? `عند س = ${predictX}، القيمة التقديرية ŷ =` : `For X = ${predictX}, Predicted ŷ =`}
                  </span>
                  <span className="text-emerald-200 text-sm font-bold">{predictedY}</span>
                </div>
              </div>

              {/* Correlation Interpretation */}
              <div className="mt-4 p-3 rounded-lg bg-slate-950/40 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {Math.abs(stats.r) >= 0.7
                    ? isArabic ? 'ارتباط خطي قوي (طردي أو عكسي واضح الاتجاه).' : 'Strong linear correlation (|r| >= 0.7).'
                    : Math.abs(stats.r) >= 0.4
                    ? isArabic ? 'ارتباط خطي متوسط.' : 'Moderate linear correlation.'
                    : isArabic ? 'ارتباط ضعيف أو شبه منعدم.' : 'Weak or negligible correlation.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 4: Conditional Probability Tree & Stochastic Indep. */}
      {/* ======================================================== */}
      {activeMode === 'probability_tree' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={`lg:col-span-5 p-5 rounded-xl border ${cardBg} space-y-4`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
                <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                  <PieChart className="w-4 h-4" />
                  {isArabic ? 'معطيات الاحتمالات الأساسية' : 'Probability Parameters'}
                </h3>
                <button
                  onClick={() => {
                    setProbA(0.4);
                    setProbB(0.5);
                    setProbBgivenA(0.5);
                  }}
                  className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {isArabic ? 'استعادة' : 'Reset'}
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-medium text-blue-400 mb-1">
                    <span>{isArabic ? 'احتمال الحدث أ: P(A)' : 'Probability P(A):'}</span>
                    <span className="font-mono font-bold">{probA}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.05"
                    value={probA}
                    onChange={(e) => setProbA(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-medium text-purple-400 mb-1">
                    <span>{isArabic ? 'احتمال الحدث ب: P(B)' : 'Probability P(B):'}</span>
                    <span className="font-mono font-bold">{probB}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.05"
                    value={probB}
                    onChange={(e) => setProbB(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-medium text-amber-400 mb-1">
                    <span>{isArabic ? 'الاحتمال الشرطي: P(B|A)' : 'Conditional P(B|A):'}</span>
                    <span className="font-mono font-bold">{probBgivenA}</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="0.95"
                    step="0.05"
                    value={probBgivenA}
                    onChange={(e) => setProbBgivenA(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Independence Toggle Quick Button */}
              <button
                onClick={() => setProbBgivenA(probB)}
                className="w-full py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isArabic ? 'ضبط الحدثين كمستقلين تماماً' : 'Force Stochastic Independence'}
              </button>
            </div>

            <div className={`lg:col-span-7 p-5 rounded-xl border ${cardBg} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/40 mb-4">
                  <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                    <Activity className="w-4 h-4" />
                    {isArabic ? 'جبر الأحداث واختبار الاستقلال' : 'Event Algebra & Independence Test'}
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      isIndependent
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    }`}
                  >
                    {isIndependent
                      ? isArabic ? 'حدثان مستقلان تماماً' : 'Stochastically Independent'
                      : isArabic ? 'حدثان غير مستقلين' : 'Dependent Events'}
                  </span>
                </div>

                {/* Key Probability Identities */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 font-mono">
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'التقاطع P(A ∩ B)' : 'P(A ∩ B)'}</span>
                    <span className="text-xl font-bold text-amber-400">{probAandB}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الشرطي P(A|B)' : 'P(A|B)'}</span>
                    <span className="text-xl font-bold text-emerald-400">{probAgivenB}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الاتحاد P(A ∪ B)' : 'P(A ∪ B)'}</span>
                    <span className="text-xl font-bold text-purple-400">{probAunionB}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'حاصل P(A)·P(B)' : 'P(A)·P(B)'}</span>
                    <span className="text-xl font-bold text-cyan-400">{Number((probA * probB).toFixed(3))}</span>
                  </div>
                </div>

                {/* Mathematical Independence Proof Box */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>P(A ∩ B) = P(A) · P(B|A)</span>
                    <span className="text-amber-400 font-bold">{probA} · {probBgivenA} = {probAandB}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>P(A) · P(B)</span>
                    <span className="text-cyan-400 font-bold">{probA} · {probB} = {Number((probA * probB).toFixed(3))}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-slate-400">
                    {isIndependent
                      ? isArabic
                        ? '✅ تحقق شرط الاستقلال: P(A ∩ B) = P(A) · P(B)'
                        : '✅ Independence satisfied: P(A ∩ B) = P(A) · P(B)'
                      : isArabic
                      ? '❌ لم يتحقق شرط الاستقلال: وقوع الحدث أ يغير احتمال وقوع ب'
                      : '❌ Dependent: Event A alters the likelihood of Event B'}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-slate-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {isArabic
                    ? 'تنبيه وزاري: الأحداث المتنافية P(A ∩ B) = 0، ولا يمكن لحدثين غير مستحيلين أن يكونا متنافيين ومستقلين معاً.'
                    : 'MoE Key Rule: Mutually exclusive events have P(A ∩ B) = 0, and cannot be independent if probabilities are positive.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 5: Gaussian Bell Curve & Standard Normal Z-Engine   */}
      {/* ======================================================== */}
      {activeMode === 'normal_distribution' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={`lg:col-span-5 p-5 rounded-xl border ${cardBg} space-y-4`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
                <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                  <Activity className="w-4 h-4" />
                  {isArabic ? 'معالم التوزيع والدرجة المستهدفة' : 'Normal Distribution Parameters'}
                </h3>
                <button
                  onClick={() => {
                    setNormMean(50);
                    setNormStd(10);
                    setZScoreTarget(65);
                    setCalcType('less');
                  }}
                  className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {isArabic ? 'استعادة' : 'Reset'}
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-medium text-purple-400 mb-1">
                    <span>{isArabic ? 'المتوسط الحسابي (μ):' : 'Mean (μ):'}</span>
                    <span className="font-mono font-bold">{normMean}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={normMean}
                    onChange={(e) => setNormMean(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-medium text-cyan-400 mb-1">
                    <span>{isArabic ? 'الانحراف المعياري (σ):' : 'Std Deviation (σ):'}</span>
                    <span className="font-mono font-bold">{normStd}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="25"
                    step="1"
                    value={normStd}
                    onChange={(e) => setNormStd(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-medium text-amber-400 mb-1">
                    <span>{isArabic ? 'الدرجة الأصلية المطلوب حسابها (X):' : 'Target Metric (X):'}</span>
                    <span className="font-mono font-bold">{zScoreTarget}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="1"
                    value={zScoreTarget}
                    onChange={(e) => setZScoreTarget(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Area Case Selection */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400 block mb-2">{isArabic ? 'حالة المساحة المطلوبة:' : 'Area Region Case:'}</span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <button
                    onClick={() => setCalcType('less')}
                    className={`py-1.5 px-2 rounded-lg font-medium border text-center transition-all ${
                      calcType === 'less'
                        ? 'bg-amber-500 text-white border-amber-400'
                        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    P(X ≤ x)
                  </button>
                  <button
                    onClick={() => setCalcType('greater')}
                    className={`py-1.5 px-2 rounded-lg font-medium border text-center transition-all ${
                      calcType === 'greater'
                        ? 'bg-amber-500 text-white border-amber-400'
                        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    P(X ≥ x)
                  </button>
                  <button
                    onClick={() => setCalcType('symmetric')}
                    className={`py-1.5 px-2 rounded-lg font-medium border text-center transition-all ${
                      calcType === 'symmetric'
                        ? 'bg-amber-500 text-white border-amber-400'
                        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    P(|Z| ≤ z)
                  </button>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-7 p-5 rounded-xl border ${cardBg} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/40 mb-4">
                  <h3 className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                    <Sparkles className="w-4 h-4" />
                    {isArabic ? 'التحويل المعياري والمساحة الاحتمالية' : 'Standardization & Area Probabilities'}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono font-bold">
                    Z = {computedZ}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5 font-mono">
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الدرجة المعيارية (Z)' : 'Standard Z'}</span>
                    <span className="text-xl font-bold text-amber-400">{computedZ}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'المساحة الاحتمالية (P)' : 'Cumulative Area'}</span>
                    <span className="text-xl font-bold text-emerald-400">{cumulativeArea}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'النسبة المئوية (%)' : 'Percentage (%)'}</span>
                    <span className="text-xl font-bold text-purple-400">{(cumulativeArea * 100).toFixed(2)}%</span>
                  </div>
                </div>

                {/* SVG Bell Curve Visualization */}
                <div className="h-44 w-full bg-slate-950/80 rounded-xl border border-slate-800 relative p-2 flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full">
                    {/* Horizontal Axis */}
                    <line x1="20" y1="130" x2="380" y2="130" stroke="#64748b" strokeWidth="1.5" />

                    {/* Bell Curve Path: peaked at cx=200 */}
                    <path
                      d="M 40 130 C 100 130, 150 25, 200 25 C 250 25, 300 130, 360 130"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                    />

                    {/* Center Mean Line */}
                    <line x1="200" y1="25" x2="200" y2="130" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="200" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">μ (Z=0)</text>

                    {/* Z-target marker */}
                    {(() => {
                      const clampedZ = Math.max(-3, Math.min(3, computedZ));
                      const targetX = 200 + clampedZ * 45;
                      return (
                        <>
                          <line x1={targetX} y1="25" x2={targetX} y2="130" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
                          <circle cx={targetX} cy="130" r="4" fill="#10b981" />
                          <text x={targetX} y="18" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                            Z = {computedZ}
                          </text>
                        </>
                      );
                    })()}
                  </svg>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-slate-950/40 border border-slate-800 text-xs font-mono text-slate-300">
                <p>
                  {isArabic
                    ? `قانون التحويل: Z = (X - μ) / σ = (${zScoreTarget} - ${normMean}) / ${normStd} = ${computedZ}`
                    : `Z-Score Formula: Z = (X - μ) / σ = (${zScoreTarget} - ${normMean}) / ${normStd} = ${computedZ}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default EconomicsStatisticsStudio;
