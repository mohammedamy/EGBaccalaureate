import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  DCF_VALUATION_PRESETS,
  BREAK_EVEN_PRESETS,
  LEAN_CANVAS_CASES,
  EOQ_PRESETS,
  BUSINESS_SCENARIO_QUIZ,
  type DCFValuationPreset,
  type BreakEvenPreset,
  type LeanCanvasCaseStudy,
  type EOQSupplyChainPreset,
} from '../../data/businessLab/businessLabData';
import {
  Briefcase,
  TrendingUp,
  PieChart,
  Layers,
  ShieldCheck,
  DollarSign,
  Building2,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Calculator,
  AlertCircle,
  Truck,
  BarChart3,
  Lightbulb,
  Share2,
  Receipt,
  Users,
  Award,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: BusinessStudioTab;
}

export type BusinessStudioTab = 'dcf' | 'breakeven' | 'leancanvas' | 'supplychain' | 'quiz';

// ============================================================================
// 1. DCF ENTERPRISE VALUATION & WACC SCHEMATIC
// ============================================================================
interface DcfEnterpriseValuationSchematicProps {
  fcfYears: number[];
  pvFcfYears: number[];
  sumPvFcf: number;
  terminalValue: number;
  pvTerminalValue: number;
  enterpriseValue: number;
  equityValue: number;
  fairValuePerShare: number;
  wacc: number;
  costOfEquity: number;
  afterTaxCostOfDebt: number;
  debtWeight: number;
  selectedPreset: DCFValuationPreset;
  isLight?: boolean;
  isArabic?: boolean;
}

const DcfEnterpriseValuationSchematic: React.FC<DcfEnterpriseValuationSchematicProps> = ({
  fcfYears,
  pvFcfYears,
  sumPvFcf,
  terminalValue,
  pvTerminalValue,
  enterpriseValue,
  equityValue,
  fairValuePerShare,
  wacc,
  costOfEquity,
  afterTaxCostOfDebt,
  debtWeight,
  selectedPreset,
  isLight = false,
  isArabic = false,
}) => {
  const maxFcf = Math.max(...fcfYears, terminalValue * 0.25, 10000);
  const chartBaselineY = 340;
  const maxBarH = 170;

  // WACC balance beam angle: tilt = (We - Wd) / 100 * 12 deg
  const equityWeight = 100 - debtWeight;
  const tiltAngle = ((equityWeight - debtWeight) / 100) * 12;

  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            {isArabic
              ? 'مخطط شلال التدفقات النقدية المخصومة (DCF) وميزان هيكل رأس المال (WACC)'
              : 'Discounted Cash Flow (DCF) Waterfall & WACC Capital Structure Scale'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'الشركة:' : 'Firm:'} <strong className="text-indigo-300">{selectedPreset.nameEn}</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
            EV: {(enterpriseValue / 1000).toFixed(1)}M EGP
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 440"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="DCF Valuation and WACC Capital Structure Schematic"
        >
          <defs>
            <linearGradient id="dcfNominalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="dcfPvGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#4338CA" />
            </linearGradient>
            <linearGradient id="dcfTvGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <filter id="dcfGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: 5-Year Cash Flow Waterfall & Terminal Value */}
          <rect
            x="20"
            y="20"
            width="510"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="40" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'شلال التدفقات النقدية الحرة ومنحنى الخصم المركب (PV)' : '5-Year Free Cash Flow Waterfall & Discounting Schedule'}
          </text>
          <text x="40" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            PV(t) = FCFF(t) / (1 + WACC)^t | WACC = {wacc.toFixed(2)}%
          </text>

          {/* Baseline & Grid */}
          <line x1="40" y1={chartBaselineY} x2="510" y2={chartBaselineY} stroke={isLight ? '#94A3B8' : '#334155'} strokeWidth="1.5" />
          <line x1="40" y1={chartBaselineY - 50} x2="510" y2={chartBaselineY - 50} stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeDasharray="3,3" />
          <line x1="40" y1={chartBaselineY - 100} x2="510" y2={chartBaselineY - 100} stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeDasharray="3,3" />
          <line x1="40" y1={chartBaselineY - 150} x2="510" y2={chartBaselineY - 150} stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeDasharray="3,3" />

          {/* 5-Year Cash Flow Waterfall Bars */}
          {fcfYears.map((fcf, yrIdx) => {
            const pv = pvFcfYears[yrIdx] || 0;
            const barX = 45 + yrIdx * 65;
            const nomH = Math.min(maxBarH, (fcf / maxFcf) * maxBarH);
            const pvH = Math.min(maxBarH, (pv / maxFcf) * maxBarH);

            return (
              <g key={`dcf-yr-${yrIdx}`}>
                {/* Nominal Cash Flow Bar (Transparent) */}
                <rect
                  x={barX}
                  y={chartBaselineY - nomH}
                  width="44"
                  height={nomH}
                  rx="3"
                  fill="url(#dcfNominalGrad)"
                  stroke="#0284C7"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
                {/* Discounted Present Value Bar (Solid Vibrant) */}
                <rect
                  x={barX + 4}
                  y={chartBaselineY - pvH}
                  width="36"
                  height={pvH}
                  rx="3"
                  fill="url(#dcfPvGrad)"
                  stroke="#4338CA"
                  strokeWidth="1"
                />

                {/* Values labels */}
                <text x={barX + 22} y={chartBaselineY - nomH - 6} textAnchor="middle" fill="#38BDF8" fontSize="7.5" fontFamily="monospace">
                  {(fcf / 1000).toFixed(1)}M
                </text>
                <text x={barX + 22} y={chartBaselineY - pvH + 12} textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  {(pv / 1000).toFixed(1)}M
                </text>

                {/* X Axis Year Label */}
                <text x={barX + 22} y={chartBaselineY + 14} textAnchor="middle" fill={isLight ? '#334155' : '#94A3B8'} fontSize="8" fontWeight="bold">
                  Y{yrIdx + 1}
                </text>
              </g>
            );
          })}

          {/* Exponential Discounting Decay Curve Line */}
          <path
            d={`M 67,${chartBaselineY - Math.min(maxBarH, (fcfYears[0] / maxFcf) * maxBarH)}
                Q 197,${chartBaselineY - Math.min(maxBarH, (fcfYears[2] / maxFcf) * maxBarH) + 15}
                  327,${chartBaselineY - Math.min(maxBarH, (fcfYears[4] / maxFcf) * maxBarH) + 20}`}
            fill="none"
            stroke="#EC4899"
            strokeWidth="2"
            strokeDasharray="4,4"
          />
          <text x="210" y="110" fill="#EC4899" fontSize="8" fontWeight="bold">
            Discounting Decay: (1 + WACC)^-t
          </text>

          {/* Terminal Value Pillar (Right side of Left Box) */}
          <g transform="translate(385, 0)">
            {/* Gordon Growth Terminal Value Box */}
            <rect
              x="0"
              y={chartBaselineY - Math.min(maxBarH + 20, (terminalValue * 0.15 / maxFcf) * maxBarH)}
              width="110"
              height={Math.min(maxBarH + 20, (terminalValue * 0.15 / maxFcf) * maxBarH)}
              rx="4"
              fill="url(#dcfTvGrad)"
              stroke="#059669"
              strokeWidth="1.5"
              filter="url(#dcfGlow)"
            />
            <text x="55" y={chartBaselineY - Math.min(maxBarH + 20, (terminalValue * 0.15 / maxFcf) * maxBarH) - 8} textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">
              TERMINAL VALUE (TV)
            </text>
            <text x="55" y={chartBaselineY - 40} textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="monospace">
              {(pvTerminalValue / 1000).toFixed(1)}M
            </text>
            <text x="55" y={chartBaselineY - 24} textAnchor="middle" fill="#D1FAE5" fontSize="7.5">
              PV of Terminal Value
            </text>
            <text x="55" y={chartBaselineY + 14} textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">
              TV (Perpetual g)
            </text>
          </g>

          {/* Enterprise Value Summation Bracket Banner */}
          <rect x="40" y="375" width="470" height="32" rx="6" fill={isLight ? '#F1F5F9' : '#141D2B'} stroke="#6366F1" strokeWidth="1" />
          <text x="55" y="395" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="9" fontWeight="bold">
            {isArabic ? 'إجمالي قيمة المنشأة (EV):' : 'Total Enterprise Value (EV):'}{' '}
            <tspan fill="#38BDF8">∑PV(FCFF₁₋₅) = {(sumPvFcf / 1000).toFixed(1)}M</tspan> +{' '}
            <tspan fill="#10B981">PV(TV) = {(pvTerminalValue / 1000).toFixed(1)}M</tspan> ={' '}
            <tspan fill="#F59E0B" fontSize="11" fontFamily="monospace">
              {(enterpriseValue / 1000).toFixed(1)}M EGP
            </tspan>
          </text>

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: WACC Capital Structure Scale & Equity Bridge */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="550"
            y="20"
            width="350"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="570" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'ميزان تكلفة رأس المال المرجح (WACC)' : 'WACC Capital Structure Balancing Scale'}
          </text>
          <text x="570" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            WACC = We × Ke + Wd × Kd(1 - T)
          </text>

          {/* Mechanical Balance Scale Graphic */}
          <g transform={`translate(725, 140) rotate(${tiltAngle})`}>
            {/* Beam */}
            <line x1="-120" y1="0" x2="120" y2="0" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="0" cy="0" r="6" fill="#F59E0B" />

            {/* Left Pan: Cost of Equity */}
            <line x1="-100" y1="0" x2="-100" y2="35" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M -130,35 Q -100,55 -70,35 Z" fill="#38BDF8" opacity="0.85" />
            <text x="-100" y="25" textAnchor="middle" fill="#38BDF8" fontSize="8" fontWeight="bold">
              Ke: {costOfEquity.toFixed(1)}%
            </text>
            <text x="-100" y="46" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="bold">
              Equity {equityWeight}%
            </text>

            {/* Right Pan: Cost of Debt */}
            <line x1="100" y1="0" x2="100" y2="35" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M 70,35 Q 100,55 130,35 Z" fill="#A855F7" opacity="0.85" />
            <text x="100" y="25" textAnchor="middle" fill="#C084FC" fontSize="8" fontWeight="bold">
              Kd: {afterTaxCostOfDebt.toFixed(1)}%
            </text>
            <text x="100" y="46" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="bold">
              Debt {debtWeight}%
            </text>
          </g>

          {/* Scale Fulcrum Triangle Base */}
          <polygon points="725,140 710,185 740,185" fill="#475569" stroke="#64748B" strokeWidth="1" />
          <rect x="690" y="185" width="70" height="8" rx="2" fill="#334155" />

          {/* Central Composite WACC Meter Gauge Badge */}
          <rect x="650" y="200" width="150" height="34" rx="8" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.5" />
          <text x="725" y="222" textAnchor="middle" fill="#A5B4FC" fontSize="13" fontWeight="bold" fontFamily="monospace">
            WACC: {wacc.toFixed(2)}%
          </text>

          {/* Section 2: Enterprise to Equity Bridge & Share Fair Value */}
          <line x1="570" y1="248" x2="880" y2="248" stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeWidth="1" />
          <text x="570" y="268" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="10.5" fontWeight="bold">
            {isArabic ? 'جسر التقييم العادل وحصة السهم المستهدفة' : 'Fair Value per Share Valuation Bridge'}
          </text>

          <div className="text-xs">
            {/* Step 1: EV */}
            <rect x="570" y="280" width="310" height="24" rx="4" fill={isLight ? '#EFF6FF' : '#172554'} />
            <text x="580" y="296" fill="#38BDF8" fontSize="8.5" fontWeight="bold">
              1. Enterprise Value (EV):
            </text>
            <text x="870" y="296" textAnchor="end" fill="#38BDF8" fontSize="9" fontWeight="bold" fontFamily="monospace">
              {(enterpriseValue / 1000).toFixed(1)}M EGP
            </text>

            {/* Step 2: Less Net Debt */}
            <rect x="570" y="310" width="310" height="24" rx="4" fill={isLight ? '#FFFBEB' : '#451A03'} />
            <text x="580" y="326" fill="#F59E0B" fontSize="8.5" fontWeight="bold">
              2. Less: Net Debt (Debt - Cash):
            </text>
            <text x="870" y="326" textAnchor="end" fill="#F59E0B" fontSize="9" fontWeight="bold" fontFamily="monospace">
              {(selectedPreset.netDebt / 1000).toFixed(1)}M EGP
            </text>

            {/* Step 3: Equity Value */}
            <rect x="570" y="340" width="310" height="24" rx="4" fill={isLight ? '#F0FDF4' : '#064E3B'} />
            <text x="580" y="356" fill="#10B981" fontSize="8.5" fontWeight="bold">
              3. Implied Equity Value:
            </text>
            <text x="870" y="356" textAnchor="end" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="monospace">
              {(equityValue / 1000).toFixed(1)}M EGP
            </text>

            {/* Final Target Share Price Stamp */}
            <rect x="570" y="372" width="310" height="38" rx="6" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
            <text x="585" y="396" fill="#A7F3D0" fontSize="10" fontWeight="bold">
              FAIR VALUE / SHARE:
            </text>
            <text x="870" y="397" textAnchor="end" fill="#34D399" fontSize="15" fontWeight="bold" fontFamily="monospace">
              {fairValuePerShare.toFixed(2)} EGP
            </text>
          </div>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// 2. CVP BREAK-EVEN & OPERATING LEVERAGE SCHEMATIC
// ============================================================================
interface CvpOperatingLeverageSchematicProps {
  fixedCosts: number;
  variableCost: number;
  sellingPrice: number;
  currentVolume: number;
  targetProfit: number;
  breakEvenUnits: number;
  breakEvenRevenue: number;
  currentRevenue: number;
  currentProfit: number;
  marginOfSafetyUnits: number;
  marginOfSafetyPercent: number;
  selectedPreset: BreakEvenPreset;
  isLight?: boolean;
  isArabic?: boolean;
}

const CvpOperatingLeverageSchematic: React.FC<CvpOperatingLeverageSchematicProps> = ({
  fixedCosts,
  variableCost,
  sellingPrice,
  currentVolume,
  targetProfit,
  breakEvenUnits,
  breakEvenRevenue,
  currentRevenue,
  currentProfit,
  marginOfSafetyUnits,
  marginOfSafetyPercent,
  selectedPreset,
  isLight = false,
  isArabic = false,
}) => {
  const chartStartX = 50;
  const chartWidth = 440;
  const chartBaselineY = 350;
  const chartHeight = 260;

  const maxUnits = Math.max(currentVolume * 1.35, breakEvenUnits * 1.5, 10000);
  const maxRevenueEst = Math.max(currentRevenue * 1.25, breakEvenRevenue * 1.5, fixedCosts * 2.2, 50000);

  const scaleX = (units: number) => chartStartX + (Math.min(maxUnits, units) / maxUnits) * chartWidth;
  const scaleY = (rev: number) => chartBaselineY - (Math.min(maxRevenueEst, rev) / maxRevenueEst) * chartHeight;

  const bepX = scaleX(breakEvenUnits);
  const bepY = scaleY(breakEvenRevenue);
  const fcY = scaleY(fixedCosts);
  const currentX = scaleX(currentVolume);
  const currentRevY = scaleY(currentRevenue);
  const currentCostY = scaleY(fixedCosts + variableCost * currentVolume);

  // Degree of Operating Leverage (DOL) at current volume
  const cmTotal = currentVolume * (sellingPrice - variableCost);
  const ebit = cmTotal - fixedCosts;
  const dol = ebit > 0 ? (cmTotal / ebit).toFixed(2) : 'N/A (Loss)';

  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
            {isArabic
              ? 'مخطط تحليل التعادل (CVP)، الرافعة التشغيلية (DOL)، وهامش الأمان'
              : 'Cost-Volume-Profit (CVP) Break-Even, Operating Leverage (DOL) & Safety Margin'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'الحالة:' : 'Case:'} <strong className="text-sky-300">{selectedPreset.titleEn}</strong>
          </span>
          <span
            className={`px-2 py-0.5 rounded font-bold border ${
              currentProfit >= 0
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}
          >
            BEP: {Math.round(breakEvenUnits).toLocaleString()} {isArabic ? 'وحدة' : 'Units'}
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 430"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="CVP Break-Even and Operating Leverage Schematic"
        >
          <defs>
            <linearGradient id="cvpProfitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="cvpLossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
            </linearGradient>
            <filter id="cvpGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: Continuous CVP Break-Even Chart */}
          <rect
            x="20"
            y="20"
            width="500"
            height="390"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="40" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'منحنى التعادل وهيكل التكاليف والأرباح (CVP Chart)' : 'Cost-Volume-Profit Continuous Break-Even Model'}
          </text>
          <text x="40" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            P = {sellingPrice} EGP | VC = {variableCost} EGP | CM = {sellingPrice - variableCost} EGP/Unit
          </text>

          {/* Chart Canvas Area */}
          <rect
            x="40"
            y="70"
            width="460"
            height="315"
            rx="8"
            fill={isLight ? '#F8FAFC' : '#0A0E17'}
            stroke={isLight ? '#E2E8F0' : '#1E293B'}
            strokeWidth="1"
          />

          {/* Loss Zone (Triangle for Q < Q*) */}
          <polygon
            points={`${chartStartX},${scaleY(0)} ${chartStartX},${fcY} ${bepX},${bepY}`}
            fill="url(#cvpLossGrad)"
          />

          {/* Profit Zone (Expanding Area for Q > Q*) */}
          <polygon
            points={`${bepX},${bepY} ${chartStartX + chartWidth},${scaleY(sellingPrice * maxUnits)} ${chartStartX + chartWidth},${scaleY(fixedCosts + variableCost * maxUnits)}`}
            fill="url(#cvpProfitGrad)"
          />

          {/* Fixed Overhead Horizontal Line */}
          <line
            x1={chartStartX}
            y1={fcY}
            x2={chartStartX + chartWidth}
            y2={fcY}
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <text x={chartStartX + 5} y={fcY - 5} fill="#94A3B8" fontSize="8" fontWeight="bold">
            FC = {fixedCosts.toLocaleString()} EGP
          </text>

          {/* Total Cost Line TC = FC + VC * Q */}
          <line
            x1={chartStartX}
            y1={fcY}
            x2={chartStartX + chartWidth}
            y2={scaleY(fixedCosts + variableCost * maxUnits)}
            stroke="#EF4444"
            strokeWidth="2.5"
          />
          <text
            x={chartStartX + chartWidth - 5}
            y={scaleY(fixedCosts + variableCost * maxUnits) - 6}
            textAnchor="end"
            fill="#EF4444"
            fontSize="8.5"
            fontWeight="bold"
          >
            TC = FC + (VC × Q)
          </text>

          {/* Total Revenue Line TR = P * Q */}
          <line
            x1={chartStartX}
            y1={chartBaselineY}
            x2={chartStartX + chartWidth}
            y2={scaleY(sellingPrice * maxUnits)}
            stroke="#10B981"
            strokeWidth="2.5"
          />
          <text
            x={chartStartX + chartWidth - 5}
            y={scaleY(sellingPrice * maxUnits) - 6}
            textAnchor="end"
            fill="#10B981"
            fontSize="8.5"
            fontWeight="bold"
          >
            TR = Price × Q
          </text>

          {/* Break-Even Intersection Beacon Q* */}
          <circle cx={bepX} cy={bepY} r="6" fill="#F59E0B" filter="url(#cvpGlow)" />
          <circle cx={bepX} cy={bepY} r="2.5" fill="#FFFFFF" />
          <line x1={bepX} y1={bepY} x2={bepX} y2={chartBaselineY} stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,3" />

          <rect x={bepX - 45} y={bepY - 26} width="90" height="20" rx="3" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
          <text x={bepX} y={bepY - 13} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">
            Q*: {Math.round(breakEvenUnits).toLocaleString()} Units
          </text>

          {/* Current Volume Vertical Guide */}
          <line
            x1={currentX}
            y1={Math.min(currentCostY, currentRevY) - 10}
            x2={currentX}
            y2={chartBaselineY}
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <circle cx={currentX} cy={currentRevY} r="5" fill="#38BDF8" />
          <circle cx={currentX} cy={currentCostY} r="5" fill="#EF4444" />

          {/* Margin of Safety Callout Band */}
          {currentVolume >= breakEvenUnits && (
            <g>
              <line x1={bepX} y1={chartBaselineY - 18} x2={currentX} y2={chartBaselineY - 18} stroke="#10B981" strokeWidth="3" />
              <text x={(bepX + currentX) / 2} y={chartBaselineY - 22} textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">
                Margin of Safety: {marginOfSafetyPercent.toFixed(1)}%
              </text>
            </g>
          )}

          {/* Current Operating Result Callout */}
          <rect
            x={Math.min(380, Math.max(60, currentX - 60))}
            y={Math.min(currentCostY, currentRevY) - 34}
            width="120"
            height="24"
            rx="4"
            fill={currentProfit >= 0 ? '#064E3B' : '#881337'}
            stroke={currentProfit >= 0 ? '#10B981' : '#F43F5E'}
            strokeWidth="1"
          />
          <text
            x={Math.min(380, Math.max(60, currentX - 60)) + 60}
            y={Math.min(currentCostY, currentRevY) - 18}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="8.5"
            fontWeight="bold"
          >
            {currentVolume.toLocaleString()} Units: {currentProfit >= 0 ? `+${Math.round(currentProfit).toLocaleString()}` : Math.round(currentProfit).toLocaleString()} EGP
          </text>

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: Operating Leverage (DOL) & Risk Radar */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="540"
            y="20"
            width="360"
            height="390"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="560" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'الرافعة التشغيلية ومؤشرات الأمان المالي' : 'Degree of Operating Leverage & Safety'}
          </text>
          <text x="560" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            DOL = %ΔEBIT / %ΔSales = Total CM / Operating Profit
          </text>

          {/* DOL Badge */}
          <rect x="560" y="75" width="150" height="60" rx="8" fill={isLight ? '#F0FDFA' : '#042F2E'} stroke="#14B8A6" strokeWidth="1.5" />
          <text x="575" y="93" fill="#0D9488" fontSize="8.5" fontWeight="bold">
            DEGREE OF OPERATING LEVERAGE
          </text>
          <text x="575" y="118" fill="#14B8A6" fontSize="18" fontWeight="bold" fontFamily="monospace">
            {dol}x
          </text>
          <text x="575" y="130" fill={isLight ? '#64748B' : '#99F6E4'} fontSize="7.5">
            EBIT Sensitivity Multiplier
          </text>

          {/* Margin of Safety Badge */}
          <rect x="730" y="75" width="150" height="60" rx="8" fill={isLight ? '#F0FDF4' : '#064E3B'} stroke="#10B981" strokeWidth="1.5" />
          <text x="745" y="93" fill="#059669" fontSize="8.5" fontWeight="bold">
            MARGIN OF SAFETY (MOS)
          </text>
          <text x="745" y="118" fill="#34D399" fontSize="18" fontWeight="bold" fontFamily="monospace">
            {marginOfSafetyPercent.toFixed(1)}%
          </text>
          <text x="745" y="130" fill={isLight ? '#64748B' : '#A7F3D0'} fontSize="7.5">
            Buffer: {Math.max(0, Math.round(marginOfSafetyUnits)).toLocaleString()} Units
          </text>

          {/* Radial Safety Speedometer Arc */}
          <g transform="translate(720, 225)">
            <path d="M -80,0 A 80,80 0 0,1 80,0" fill="none" stroke="#334155" strokeWidth="14" strokeLinecap="round" />
            {/* Color bands: Red (0-20%), Yellow (20-40%), Green (40-100%) */}
            <path d="M -80,0 A 80,80 0 0,1 -55,-55" fill="none" stroke="#EF4444" strokeWidth="14" />
            <path d="M -55,-55 A 80,80 0 0,1 0,-80" fill="none" stroke="#F59E0B" strokeWidth="14" />
            <path d="M 0,-80 A 80,80 0 0,1 80,0" fill="none" stroke="#10B981" strokeWidth="14" />

            {/* Gauge Needle */}
            {(() => {
              const gaugeAngle = -180 + Math.min(180, Math.max(0, (marginOfSafetyPercent / 100) * 180));
              return (
                <g transform={`rotate(${gaugeAngle})`}>
                  <line x1="0" y1="0" x2="68" y2="0" stroke="#F8FAFC" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="5" fill="#38BDF8" />
                </g>
              );
            })()}
            <text x="0" y="20" textAnchor="middle" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold" fontFamily="monospace">
              MOS: {marginOfSafetyPercent.toFixed(1)}%
            </text>
          </g>

          {/* Strategic Decision Recommendation Card */}
          <rect x="560" y="275" width="320" height="115" rx="8" fill={isLight ? '#F1F5F9' : '#141D2B'} stroke={isLight ? '#CBD5E1' : '#334155'} strokeWidth="1" />
          <text x="575" y="295" fill="#38BDF8" fontSize="9" fontWeight="bold">
            {isArabic ? 'التحليل الاستراتيجي لهامش الأمان والربح المستهدف:' : 'Strategic Target & Profit Milestone:'}
          </text>
          <text x="575" y="315" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8.5">
            {isArabic
              ? `• لتحقيق الربح المستهدف (${targetProfit.toLocaleString()} ج.م)، يجب إنتاج ${Math.round((fixedCosts + targetProfit) / Math.max(1, sellingPrice - variableCost)).toLocaleString()} وحدة.`
              : `• To achieve target profit (${targetProfit.toLocaleString()} EGP), production must reach ${Math.round((fixedCosts + targetProfit) / Math.max(1, sellingPrice - variableCost)).toLocaleString()} units.`}
          </text>
          <text x="575" y="335" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8.5">
            {isArabic
              ? `• نسبة هامش المساهمة (CM Ratio): ${(Math.max(0.1, sellingPrice - variableCost) / sellingPrice * 100).toFixed(1)}% من كل جنيه مبيعات.`
              : `• Contribution Margin Ratio: ${(Math.max(0.1, sellingPrice - variableCost) / sellingPrice * 100).toFixed(1)}% per sales EGP.`}
          </text>
          <text x="575" y="365" fill="#10B981" fontSize="9" fontWeight="bold">
            STATUS: {marginOfSafetyPercent > 25 ? 'SECURE OPERATING BUFFER' : 'HIGH BREAK-EVEN EXPOSURE'}
          </text>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// 3. LEAN CANVAS 9-BLOCK INTERACTIVE MATRIX SCHEMATIC
// ============================================================================
interface LeanCanvasInteractiveMatrixSchematicProps {
  selectedCase: LeanCanvasCaseStudy;
  isLight?: boolean;
  isArabic?: boolean;
}

const LeanCanvasInteractiveMatrixSchematic: React.FC<LeanCanvasInteractiveMatrixSchematicProps> = ({
  selectedCase,
  isLight = false,
  isArabic = false,
}) => {
  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
            {isArabic
              ? 'مخطط نموذج العمل المرن (Lean Canvas Matrix) وروابط دورة القيمة'
              : 'Lean Business Model Canvas Architectural Matrix & Value Circuit Traces'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'الشركة الناشئة:' : 'Startup:'} <strong className="text-purple-300">{selectedCase.ventureNameEn}</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
            {selectedCase.industryEn}
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 440"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Lean Canvas Architectural Matrix"
        >
          <defs>
            <filter id="canvasGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Main Background Frame */}
          <rect
            x="20"
            y="20"
            width="880"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          {/* Connecting Value Circuit Traces in Background */}
          {/* Problem -> UVP -> Customer Segments */}
          <path
            d="M 110,140 C 200,100 370,100 460,140 C 550,100 720,100 810,140"
            fill="none"
            stroke="#6366F1"
            strokeWidth="2"
            strokeDasharray="6,4"
            opacity="0.4"
          />
          {/* Solution -> UVP -> Channels */}
          <path
            d="M 285,160 L 460,160 L 635,160"
            fill="none"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="4,4"
            opacity="0.4"
          />
          {/* Cost Structure <-> Revenue Streams */}
          <line x1="240" y1="360" x2="680" y2="360" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />

          {/* ========================================================= */}
          {/* TOP 5 COLUMNS (Ash Maurya Lean Canvas Standard) */}
          {/* ========================================================= */}

          {/* 1. PROBLEM (Col 1: x=35, w=160, h=250) */}
          <rect x="35" y="35" width="165" height="250" rx="8" fill={isLight ? '#FFF1F2' : '#2A0E14'} stroke="#F43F5E" strokeWidth="1.5" />
          <text x="47" y="55" fill="#FB7185" fontSize="10" fontWeight="bold">
            1. PROBLEM (المشكلة)
          </text>
          <text x="47" y="68" fill="#F43F5E" fontSize="7.5">
            Top 3 Core Customer Pain Points
          </text>
          {(isArabic ? selectedCase.blocks.problemAr : selectedCase.blocks.problemEn).slice(0, 3).map((item, idx) => (
            <text key={`prob-${idx}`} x="47" y={92 + idx * 26} fill={isLight ? '#0F172A' : '#FECDD3'} fontSize="8" className="line-clamp-2">
              • {item.slice(0, 24)}...
            </text>
          ))}
          <rect x="45" y="245" width="145" height="26" rx="4" fill="#881337" opacity="0.6" />
          <text x="117" y="261" textAnchor="middle" fill="#FFE4E6" fontSize="7.5" fontWeight="bold">
            EXISTING ALTERNATIVES
          </text>

          {/* 4. SOLUTION (Col 2 Top: x=210, w=165, h=120) */}
          <rect x="210" y="35" width="165" height="120" rx="8" fill={isLight ? '#F0F9FF' : '#082F49'} stroke="#0284C7" strokeWidth="1.5" />
          <text x="222" y="55" fill="#38BDF8" fontSize="10" fontWeight="bold">
            4. SOLUTION (الحل)
          </text>
          <text x="222" y="68" fill="#0284C7" fontSize="7.5">
            Minimum Viable Product (MVP)
          </text>
          {(isArabic ? selectedCase.blocks.solutionAr : selectedCase.blocks.solutionEn).slice(0, 2).map((item, idx) => (
            <text key={`sol-${idx}`} x="222" y={90 + idx * 22} fill={isLight ? '#0F172A' : '#E0F2FE'} fontSize="8">
              • {item.slice(0, 24)}...
            </text>
          ))}

          {/* 8. KEY METRICS (Col 2 Bottom: x=210, w=165, h=120) */}
          <rect x="210" y="165" width="165" height="120" rx="8" fill={isLight ? '#FAF5FF' : '#2E1065'} stroke="#9333EA" strokeWidth="1.5" />
          <text x="222" y="185" fill="#C084FC" fontSize="10" fontWeight="bold">
            8. KEY METRICS (المقاييس)
          </text>
          <text x="222" y="198" fill="#A855F7" fontSize="7.5">
            AARRR Pirate Funnel
          </text>
          {(isArabic ? selectedCase.blocks.metricsAr : selectedCase.blocks.metricsEn).slice(0, 2).map((item, idx) => (
            <text key={`met-${idx}`} x="222" y={220 + idx * 22} fill={isLight ? '#0F172A' : '#F3E8FF'} fontSize="8">
              • {item.slice(0, 24)}...
            </text>
          ))}

          {/* 3. UNIQUE VALUE PROPOSITION (Col 3 Center: x=385, w=165, h=250) */}
          <rect x="385" y="35" width="165" height="250" rx="8" fill={isLight ? '#EEF2FF' : '#1E1B4B'} stroke="#6366F1" strokeWidth="2" filter="url(#canvasGlow)" />
          <text x="397" y="55" fill="#818CF8" fontSize="10" fontWeight="bold">
            3. UVP (عرض القيمة)
          </text>
          <text x="397" y="68" fill="#6366F1" fontSize="7.5">
            Compelling Difference
          </text>
          <rect x="395" y="85" width="145" height="85" rx="5" fill="#312E81" />
          <text x="467" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="bold">
            "{selectedCase.ventureNameEn.slice(0, 15)}"
          </text>
          <text x="467" y="135" textAnchor="middle" fill="#C7D2FE" fontSize="7.5">
            {(isArabic ? selectedCase.blocks.uvpAr : selectedCase.blocks.uvpEn).slice(0, 36)}...
          </text>
          <rect x="395" y="245" width="145" height="26" rx="4" fill="#4338CA" />
          <text x="467" y="261" textAnchor="middle" fill="#E0E7FF" fontSize="7.5" fontWeight="bold">
            HIGH-CONCEPT PITCH
          </text>

          {/* 9. UNFAIR ADVANTAGE (Col 4 Top: x=560, w=165, h=120) */}
          <rect x="560" y="35" width="165" height="120" rx="8" fill={isLight ? '#FFFBEB' : '#451A03'} stroke="#D97706" strokeWidth="1.5" />
          <text x="572" y="55" fill="#FCD34D" fontSize="10" fontWeight="bold">
            9. UNFAIR ADVANTAGE (الميزة)
          </text>
          <text x="572" y="68" fill="#D97706" fontSize="7.5">
            Defensible Moat
          </text>
          <text x="572" y="95" fill={isLight ? '#0F172A' : '#FEF3C7'} fontSize="8">
            {(isArabic ? selectedCase.blocks.advantageAr : selectedCase.blocks.advantageEn).slice(0, 30)}...
          </text>

          {/* 5. CHANNELS (Col 4 Bottom: x=560, w=165, h=120) */}
          <rect x="560" y="165" width="165" height="120" rx="8" fill={isLight ? '#F0FDFA' : '#042F2E'} stroke="#0D9488" strokeWidth="1.5" />
          <text x="572" y="185" fill="#5EEAD4" fontSize="10" fontWeight="bold">
            5. CHANNELS (قنوات التوزيع)
          </text>
          <text x="572" y="198" fill="#0D9488" fontSize="7.5">
            Path to Customers
          </text>
          {(isArabic ? selectedCase.blocks.channelsAr : selectedCase.blocks.channelsEn).slice(0, 2).map((item, idx) => (
            <text key={`chan-${idx}`} x="572" y={220 + idx * 22} fill={isLight ? '#0F172A' : '#CCFBF1'} fontSize="8">
              • {item.slice(0, 24)}...
            </text>
          ))}

          {/* 2. CUSTOMER SEGMENTS (Col 5: x=735, w=150, h=250) */}
          <rect x="735" y="35" width="150" height="250" rx="8" fill={isLight ? '#F0FDF4' : '#052E16'} stroke="#059669" strokeWidth="1.5" />
          <text x="747" y="55" fill="#6EE7B7" fontSize="10" fontWeight="bold">
            2. CUSTOMERS (العملاء)
          </text>
          <text x="747" y="68" fill="#059669" fontSize="7.5">
            Target ICP & Users
          </text>
          {(isArabic ? selectedCase.blocks.segmentsAr : selectedCase.blocks.segmentsEn).slice(0, 3).map((item, idx) => (
            <text key={`seg-${idx}`} x="747" y={92 + idx * 26} fill={isLight ? '#0F172A' : '#D1FAE5'} fontSize="8">
              • {item.slice(0, 20)}...
            </text>
          ))}
          <rect x="743" y="245" width="134" height="26" rx="4" fill="#065F46" />
          <text x="810" y="261" textAnchor="middle" fill="#ECFDF5" fontSize="7.5" fontWeight="bold">
            EARLY ADOPTERS
          </text>

          {/* ========================================================= */}
          {/* BOTTOM FOUNDATION BLOCKS (Costs & Revenues) */}
          {/* ========================================================= */}

          {/* 7. COST STRUCTURE (Bottom Left: x=35, w=415, h=110) */}
          <rect x="35" y="295" width="415" height="110" rx="8" fill={isLight ? '#FFF1F2' : '#2A0E14'} stroke="#F43F5E" strokeWidth="1.5" />
          <text x="50" y="315" fill="#FB7185" fontSize="10" fontWeight="bold">
            7. COST STRUCTURE (هيكل التكاليف)
          </text>
          <text x="50" y="328" fill="#F43F5E" fontSize="7.5">
            Customer Acquisition Cost (CAC), Hosting, Logistics & Payroll
          </text>
          <g transform="translate(50, 340)">
            {(isArabic ? selectedCase.blocks.costsAr : selectedCase.blocks.costsEn).slice(0, 3).map((item, idx) => (
              <text key={`cost-${idx}`} x={idx * 135} y="15" fill={isLight ? '#0F172A' : '#FECDD3'} fontSize="8">
                • {item.slice(0, 18)}...
              </text>
            ))}
          </g>

          {/* 6. REVENUE STREAMS (Bottom Right: x=465, w=420, h=110) */}
          <rect x="465" y="295" width="420" height="110" rx="8" fill={isLight ? '#F0FDF4' : '#052E16'} stroke="#059669" strokeWidth="1.5" />
          <text x="480" y="315" fill="#6EE7B7" fontSize="10" fontWeight="bold">
            6. REVENUE STREAMS (مصادر الإيرادات)
          </text>
          <text x="480" y="328" fill="#059669" fontSize="7.5">
            Lifetime Value (LTV), Subscriptions, Take-Rate & Unit Margin
          </text>
          <g transform="translate(480, 340)">
            {(isArabic ? selectedCase.blocks.revenueAr : selectedCase.blocks.revenueEn).slice(0, 3).map((item, idx) => (
              <text key={`rev-${idx}`} x={idx * 135} y="15" fill={isLight ? '#0F172A' : '#D1FAE5'} fontSize="8">
                • {item.slice(0, 18)}...
              </text>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// 4. EOQ INVENTORY SAWTOOTH & COST CONVEXITY SCHEMATIC
// ============================================================================
interface EoqInventorySawtoothSchematicProps {
  annualDemand: number;
  orderCost: number;
  holdingCostPerUnit: number;
  unitPurchasePrice: number;
  leadTimeDays: number;
  safetyStockUnits: number;
  eoqUnits: number;
  ordersPerYear: number;
  annualOrderingCost: number;
  annualHoldingCost: number;
  totalAnnualInventoryCost: number;
  reorderPoint: number;
  cycleTimeDays: number;
  selectedPreset: EOQSupplyChainPreset;
  isLight?: boolean;
  isArabic?: boolean;
}

const EoqInventorySawtoothSchematic: React.FC<EoqInventorySawtoothSchematicProps> = ({
  annualDemand,
  orderCost,
  holdingCostPerUnit,
  leadTimeDays,
  safetyStockUnits,
  eoqUnits,
  ordersPerYear,
  annualOrderingCost,
  annualHoldingCost,
  totalAnnualInventoryCost,
  reorderPoint,
  cycleTimeDays,
  selectedPreset,
  isLight = false,
  isArabic = false,
}) => {
  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
            {isArabic
              ? 'مخطط موجة سن المنشار للمخزون (Sawtooth Wave) وتحدب تكلفة EOQ'
              : 'Inventory Sawtooth Waveform & EOQ Total Cost Convexity Curve'}
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'المنتج:' : 'SKU:'} <strong className="text-teal-300">{selectedPreset.productNameEn}</strong>
          </span>
          <span className="text-slate-400">
            S: <strong className="text-sky-300">{orderCost.toLocaleString()} EGP</strong> | H: <strong className="text-indigo-300">{holdingCostPerUnit.toLocaleString()} EGP</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 font-bold">
            EOQ: {eoqUnits.toLocaleString()} ({ordersPerYear.toFixed(1)} {isArabic ? 'طلبات/سنة' : 'orders/yr'})
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 440"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="EOQ Inventory Sawtooth and Cost Optimization Schematic"
        >
          <defs>
            <linearGradient id="safetyStockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0D9488" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="sawtoothFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0" />
            </linearGradient>
            <filter id="eoqGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: Classical Inventory Sawtooth Waveform */}
          <rect
            x="20"
            y="20"
            width="460"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="40" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'دورة التوريد والاستهلاك (Inventory Sawtooth Wave)' : 'Classical Inventory Sawtooth Replenishment Cycle'}
          </text>
          <text x="40" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            D = {annualDemand.toLocaleString()} | Cycle = {cycleTimeDays.toFixed(1)} Days | Lead Time = {leadTimeDays} Days
          </text>

          {/* Sawtooth Graph Canvas */}
          <rect
            x="40"
            y="70"
            width="420"
            height="325"
            rx="8"
            fill={isLight ? '#F8FAFC' : '#0A0E17'}
            stroke={isLight ? '#E2E8F0' : '#1E293B'}
            strokeWidth="1"
          />

          {/* Safety Stock Buffer Zone (Bottom 50px) */}
          <rect x="50" y="330" width="400" height="45" fill="url(#safetyStockGrad)" stroke="#0D9488" strokeWidth="1" strokeDasharray="3,3" />
          <text x="60" y="358" fill="#14B8A6" fontSize="8" fontWeight="bold">
            SAFETY STOCK (SS) = {safetyStockUnits.toLocaleString()} UNITS
          </text>

          {/* Reorder Point (ROP) Horizontal Line */}
          <line x1="50" y1="280" x2="450" y2="280" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4,4" />
          <text x="60" y="275" fill="#F59E0B" fontSize="8.5" fontWeight="bold">
            REORDER POINT (ROP) = {reorderPoint.toLocaleString()} Units (d·L + SS)
          </text>

          {/* Peak Batch Inventory Q + SS Line */}
          <line x1="50" y1="110" x2="450" y2="110" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3,3" />
          <text x="60" y="105" fill="#38BDF8" fontSize="8" fontWeight="bold">
            MAX INVENTORY = Q + SS ({Math.round(eoqUnits + safetyStockUnits).toLocaleString()} Units)
          </text>

          {/* 3 Replenishment Sawtooth Wave Cycles */}
          {/* Cycle 1: (50, 110) -> (170, 330) -> (170, 110) */}
          {/* Cycle 2: (170, 110) -> (290, 330) -> (290, 110) */}
          {/* Cycle 3: (290, 110) -> (410, 330) -> (410, 110) */}
          <polygon
            points="50,110 170,330 170,110 290,330 290,110 410,330 410,110"
            fill="url(#sawtoothFillGrad)"
          />
          <path
            d="M 50,110 L 170,330 L 170,110 L 290,330 L 290,110 L 410,330 L 410,110"
            fill="none"
            stroke="#14B8A6"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Reorder Placement Beacons */}
          {/* Cycle 1 ROP crossing at x = 142.7 */}
          <circle cx="142" cy="280" r="4" fill="#F59E0B" filter="url(#eoqGlow)" />
          <line x1="142" y1="280" x2="142" y2="375" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
          <text x="142" y="388" textAnchor="middle" fill="#F59E0B" fontSize="7" fontWeight="bold">
            ORDER #1
          </text>

          {/* Cycle 2 ROP crossing at x = 262.7 */}
          <circle cx="262" cy="280" r="4" fill="#F59E0B" filter="url(#eoqGlow)" />
          <line x1="262" y1="280" x2="262" y2="375" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
          <text x="262" y="388" textAnchor="middle" fill="#F59E0B" fontSize="7" fontWeight="bold">
            ORDER #2
          </text>

          {/* Lead Time Bracket L Days */}
          <line x1="142" y1="365" x2="170" y2="365" stroke="#EC4899" strokeWidth="2" />
          <text x="156" y="360" textAnchor="middle" fill="#EC4899" fontSize="7" fontWeight="bold">
            L={leadTimeDays}d
          </text>

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: Convex Total Inventory Cost Parabola */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="500"
            y="20"
            width="400"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="520" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'منحنى تحدب تكلفة المخزون الكلية وحجم الطلب الأمثل' : 'Total Inventory Cost Convexity & Optimum EOQ Point'}
          </text>
          <text x="520" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            EOQ = √((2·D·S) / H) | Total Cost = (D/Q)·S + (Q/2)·H
          </text>

          {/* Cost Chart Area */}
          <rect
            x="520"
            y="70"
            width="360"
            height="325"
            rx="8"
            fill={isLight ? '#F8FAFC' : '#0A0E17'}
            stroke={isLight ? '#E2E8F0' : '#1E293B'}
            strokeWidth="1"
          />

          {/* Cost Axes */}
          <line x1="535" y1="365" x2="865" y2="365" stroke={isLight ? '#94A3B8' : '#334155'} strokeWidth="1.5" />
          <line x1="535" y1="365" x2="535" y2="85" stroke={isLight ? '#94A3B8' : '#334155'} strokeWidth="1.5" />

          {/* 1. Holding Cost Line: H * (Q / 2) -> Linear upward slope */}
          <line x1="535" y1="365" x2="865" y2="125" stroke="#6366F1" strokeWidth="2" strokeDasharray="4,4" />
          <text x="860" y="118" textAnchor="end" fill="#818CF8" fontSize="8" fontWeight="bold">
            Holding Cost = (Q/2)·H
          </text>

          {/* 2. Ordering Cost Curve: S * (D / Q) -> Hyperbolic decay */}
          <path
            d="M 545,95 Q 580,290 865,355"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            strokeDasharray="4,4"
          />
          <text x="860" y="348" textAnchor="end" fill="#F87171" fontSize="8" fontWeight="bold">
            Ordering Cost = (D/Q)·S
          </text>

          {/* 3. Total Annual Cost Convex U-Curve */}
          <path
            d="M 545,115 Q 675,340 865,190"
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
          />
          <text x="750" y="180" fill="#10B981" fontSize="8.5" fontWeight="bold">
            Total Inventory Cost
          </text>

          {/* Equilibrium Intersection Beacon at EOQ (x=675, y=245) */}
          <line x1="675" y1="245" x2="675" y2="365" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="675" cy="245" r="6" fill="#F59E0B" filter="url(#eoqGlow)" />
          <circle cx="675" cy="245" r="2.5" fill="#FFFFFF" />

          {/* Callout box for EOQ */}
          <rect x="625" y="215" width="100" height="24" rx="4" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
          <text x="675" y="231" textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
            EOQ*: {eoqUnits.toLocaleString()} Units
          </text>

          {/* Cost Equality Confirmation Banner */}
          <rect x="535" y="315" width="330" height="42" rx="6" fill={isLight ? '#F1F5F9' : '#141D2B'} stroke="#14B8A6" strokeWidth="1" />
          <text x="548" y="333" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="8.5" fontWeight="bold">
            {isArabic ? 'شرط التوازن: تكلفة الطلب = تكلفة التخزين' : 'Equilibrium: Annual Ordering = Holding Cost'}
          </text>
          <text x="548" y="348" fill="#14B8A6" fontSize="8" fontFamily="monospace">
            {Math.round(annualOrderingCost).toLocaleString()} EGP ≈ {Math.round(annualHoldingCost).toLocaleString()} EGP | Min Cost: {Math.round(totalAnnualInventoryCost).toLocaleString()} EGP
          </text>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT: BusinessModelingStudio
// ============================================================================
export const BusinessModelingStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'dcf',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Active Tab
  const [activeTab, setActiveTab] = useState<BusinessStudioTab>(initialTab);

  // Tab 1: DCF Valuation State
  const [selectedDcfPreset, setSelectedDcfPreset] = useState<DCFValuationPreset>(DCF_VALUATION_PRESETS[0]);
  const [dcfFcf0, setDcfFcf0] = useState<number>(selectedDcfPreset.initialCashFlow);
  const [dcfGrowthEarly, setDcfGrowthEarly] = useState<number>(selectedDcfPreset.growthRateEarly);
  const [dcfGrowthLate, setDcfGrowthLate] = useState<number>(selectedDcfPreset.growthRateLate);
  const [dcfTerminalG, setDcfTerminalG] = useState<number>(selectedDcfPreset.terminalGrowthRate);
  const [dcfBeta, setDcfBeta] = useState<number>(selectedDcfPreset.equityBeta);
  const [dcfRf, setDcfRf] = useState<number>(selectedDcfPreset.riskFreeRate);
  const [dcfErp, setDcfErp] = useState<number>(selectedDcfPreset.marketRiskPremium);
  const [dcfRd, setDcfRd] = useState<number>(selectedDcfPreset.costOfDebtPreTax);
  const [dcfTax, setDcfTax] = useState<number>(selectedDcfPreset.taxRate);
  const [dcfDebtWeight, setDcfDebtWeight] = useState<number>(selectedDcfPreset.debtWeight);

  const handleSelectDcfPreset = (preset: DCFValuationPreset) => {
    setSelectedDcfPreset(preset);
    setDcfFcf0(preset.initialCashFlow);
    setDcfGrowthEarly(preset.growthRateEarly);
    setDcfGrowthLate(preset.growthRateLate);
    setDcfTerminalG(preset.terminalGrowthRate);
    setDcfBeta(preset.equityBeta);
    setDcfRf(preset.riskFreeRate);
    setDcfErp(preset.marketRiskPremium);
    setDcfRd(preset.costOfDebtPreTax);
    setDcfTax(preset.taxRate);
    setDcfDebtWeight(preset.debtWeight);
  };

  // DCF Calculations
  const dcfCalculations = useMemo(() => {
    const costOfEquity = dcfRf + dcfBeta * dcfErp; // Ke = Rf + Beta * ERP
    const afterTaxCostOfDebt = dcfRd * (1 - dcfTax / 100);
    const weightD = dcfDebtWeight / 100;
    const weightE = 1 - weightD;
    const wacc = weightE * costOfEquity + weightD * afterTaxCostOfDebt;

    // Projected Cash Flows for 5 Years
    const fcfYears: number[] = [];
    let currentFcf = dcfFcf0;
    for (let yr = 1; yr <= 5; yr++) {
      const growth = yr <= 3 ? dcfGrowthEarly / 100 : dcfGrowthLate / 100;
      currentFcf = currentFcf * (1 + growth);
      fcfYears.push(currentFcf);
    }

    // Present Value of 5-Year Cash Flows
    const pvFcfYears: number[] = fcfYears.map((cf, idx) => {
      const discountFactor = Math.pow(1 + wacc / 100, idx + 1);
      return cf / discountFactor;
    });

    const sumPvFcf = pvFcfYears.reduce((a, b) => a + b, 0);

    // Terminal Value
    const terminalGDec = dcfTerminalG / 100;
    const waccDec = wacc / 100;
    const terminalYearCf = fcfYears[4] * (1 + terminalGDec);
    const effectiveDenominator = Math.max(0.005, waccDec - terminalGDec);
    const terminalValue = terminalYearCf / effectiveDenominator;
    const pvTerminalValue = terminalValue / Math.pow(1 + waccDec, 5);

    // Enterprise Value & Equity Value
    const enterpriseValue = sumPvFcf + pvTerminalValue;
    const equityValue = enterpriseValue - selectedDcfPreset.netDebt;
    const fairValuePerShare = selectedDcfPreset.sharesOutstanding > 0 ? equityValue / selectedDcfPreset.sharesOutstanding : 0;

    return {
      costOfEquity,
      afterTaxCostOfDebt,
      wacc,
      fcfYears,
      pvFcfYears,
      sumPvFcf,
      terminalValue,
      pvTerminalValue,
      enterpriseValue,
      equityValue,
      fairValuePerShare,
    };
  }, [
    dcfFcf0,
    dcfGrowthEarly,
    dcfGrowthLate,
    dcfTerminalG,
    dcfBeta,
    dcfRf,
    dcfErp,
    dcfRd,
    dcfTax,
    dcfDebtWeight,
    selectedDcfPreset,
  ]);

  // Tab 2: Break-Even State
  const [selectedBePreset, setSelectedBePreset] = useState<BreakEvenPreset>(BREAK_EVEN_PRESETS[0]);
  const [fixedCosts, setFixedCosts] = useState<number>(selectedBePreset.fixedCosts);
  const [variableCost, setVariableCost] = useState<number>(selectedBePreset.variableCostPerUnit);
  const [sellingPrice, setSellingPrice] = useState<number>(selectedBePreset.sellingPricePerUnit);
  const [currentVolume, setCurrentVolume] = useState<number>(selectedBePreset.currentVolume);
  const [targetProfit, setTargetProfit] = useState<number>(selectedBePreset.targetProfit);

  const handleSelectBePreset = (preset: BreakEvenPreset) => {
    setSelectedBePreset(preset);
    setFixedCosts(preset.fixedCosts);
    setVariableCost(preset.variableCostPerUnit);
    setSellingPrice(preset.sellingPricePerUnit);
    setCurrentVolume(preset.currentVolume);
    setTargetProfit(preset.targetProfit);
  };

  // Break-Even Calculations
  const beCalculations = useMemo(() => {
    const contributionMargin = Math.max(0.1, sellingPrice - variableCost);
    const cmRatio = contributionMargin / Math.max(0.1, sellingPrice);
    const breakEvenUnits = fixedCosts / contributionMargin;
    const breakEvenRevenue = breakEvenUnits * sellingPrice;
    const unitsForTargetProfit = (fixedCosts + targetProfit) / contributionMargin;
    const currentRevenue = currentVolume * sellingPrice;
    const currentProfit = currentVolume * contributionMargin - fixedCosts;
    const marginOfSafetyUnits = currentVolume - breakEvenUnits;
    const marginOfSafetyPercent = currentVolume > 0 ? (marginOfSafetyUnits / currentVolume) * 100 : 0;

    return {
      contributionMargin,
      cmRatio,
      breakEvenUnits,
      breakEvenRevenue,
      unitsForTargetProfit,
      currentRevenue,
      currentProfit,
      marginOfSafetyUnits,
      marginOfSafetyPercent,
    };
  }, [fixedCosts, variableCost, sellingPrice, currentVolume, targetProfit]);

  // Tab 3: Lean Canvas State
  const [selectedCase, setSelectedCase] = useState<LeanCanvasCaseStudy>(LEAN_CANVAS_CASES[0]);

  // Tab 4: Supply Chain & EOQ State
  const [selectedEoqPreset, setSelectedEoqPreset] = useState<EOQSupplyChainPreset>(EOQ_PRESETS[0]);
  const [eoqDemand, setEoqDemand] = useState<number>(selectedEoqPreset.annualDemand);
  const [eoqOrderCost, setEoqOrderCost] = useState<number>(selectedEoqPreset.orderCost);
  const [eoqHoldingCost, setEoqHoldingCost] = useState<number>(selectedEoqPreset.holdingCostPerUnit);
  const [eoqUnitPrice, setEoqUnitPrice] = useState<number>(selectedEoqPreset.unitPurchasePrice);
  const [eoqLeadDays, setEoqLeadDays] = useState<number>(selectedEoqPreset.leadTimeDays);
  const [eoqSafetyStock, setEoqSafetyStock] = useState<number>(selectedEoqPreset.safetyStockUnits);

  const handleSelectEoqPreset = (preset: EOQSupplyChainPreset) => {
    setSelectedEoqPreset(preset);
    setEoqDemand(preset.annualDemand);
    setEoqOrderCost(preset.orderCost);
    setEoqHoldingCost(preset.holdingCostPerUnit);
    setEoqUnitPrice(preset.unitPurchasePrice);
    setEoqLeadDays(preset.leadTimeDays);
    setEoqSafetyStock(preset.safetyStockUnits);
  };

  // EOQ Calculations
  const eoqCalculations = useMemo(() => {
    // EOQ = sqrt((2 * D * S) / H)
    const eoqUnits = Math.round(Math.sqrt((2 * eoqDemand * eoqOrderCost) / Math.max(0.01, eoqHoldingCost)));
    const ordersPerYear = eoqUnits > 0 ? eoqDemand / eoqUnits : 0;
    const annualOrderingCost = ordersPerYear * eoqOrderCost;
    const annualHoldingCost = (eoqUnits / 2) * eoqHoldingCost;
    const totalAnnualInventoryCost = annualOrderingCost + annualHoldingCost;
    const annualPurchaseCost = eoqDemand * eoqUnitPrice;
    const dailyDemand = eoqDemand / selectedEoqPreset.workingDaysPerYear;
    const leadTimeDemand = dailyDemand * eoqLeadDays;
    const reorderPoint = Math.round(leadTimeDemand + eoqSafetyStock);
    const cycleTimeDays = ordersPerYear > 0 ? selectedEoqPreset.workingDaysPerYear / ordersPerYear : 0;

    return {
      eoqUnits,
      ordersPerYear,
      annualOrderingCost,
      annualHoldingCost,
      totalAnnualInventoryCost,
      annualPurchaseCost,
      reorderPoint,
      cycleTimeDays,
      leadTimeDemand,
    };
  }, [eoqDemand, eoqOrderCost, eoqHoldingCost, eoqUnitPrice, eoqLeadDays, eoqSafetyStock, selectedEoqPreset]);

  // Tab 5: Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  const handleQuizSubmit = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    setIsAnswerSubmitted(true);
    if (index === BUSINESS_SCENARIO_QUIZ[currentQIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < BUSINESS_SCENARIO_QUIZ.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
  };

  // Theme Styles
  const themeClasses = isContrast
    ? 'bg-black text-yellow-300 border-yellow-400'
    : isLight
    ? 'bg-slate-50 text-slate-900 border-slate-200'
    : 'bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-900 text-slate-100 border-slate-800';

  const cardClasses = isContrast
    ? 'bg-black border border-yellow-400/80 shadow-none'
    : isLight
    ? 'bg-white border border-slate-200/80 shadow-sm'
    : 'bg-slate-900/80 backdrop-blur border border-indigo-500/20 shadow-xl shadow-indigo-950/10';

  return (
    <div
      className={`border p-4 md:p-6 transition-all duration-300 flex flex-col gap-6 ${themeClasses} ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0' : 'rounded-2xl min-h-[700px]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-indigo-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-slate-800 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
              {isArabic
                ? 'مختبر نمذجة الأعمال وريادة الأعمال الافتراضي'
                : 'Business Modeling & Entrepreneurship Virtual Studio'}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-medium">
                {isArabic ? 'ثانوية عامة + بكالوريا' : 'Thanaweya + EG-Bac'}
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              {isArabic
                ? 'نمذجة التقييم المالي (DCF & WACC)، نقطة التعادل، اللين ستارت أب، سلاسل الإمداد، وسيناريوهات اتخاذ القرارات'
                : 'Interactive DCF & WACC Corporate Valuation, Break-Even Economics, Lean Canvas, EOQ Supply Chain, & Strategic Scenarios'}
            </p>
          </div>
        </div>

        {/* Global Key Metric Quick Stats */}
        <div className="hidden lg:flex items-center gap-2">
          <div className={`px-3.5 py-2 min-h-[40px] rounded-xl border text-xs flex items-center gap-2 ${cardClasses}`}>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>{isArabic ? 'تقييم المنشأة:' : 'EV Metric:'}</span>
            <span className="font-bold text-emerald-400">
              {(dcfCalculations.enterpriseValue / 1000).toFixed(1)}M EGP
            </span>
          </div>
          <div className={`px-3.5 py-2 min-h-[40px] rounded-xl border text-xs flex items-center gap-2 ${cardClasses}`}>
            <Calculator className="w-4 h-4 text-sky-400" />
            <span>{isArabic ? 'نقطة التعادل:' : 'Break-Even:'}</span>
            <span className="font-bold text-sky-400">
              {Math.round(beCalculations.breakEvenUnits).toLocaleString()} {isArabic ? 'وحدة' : 'Units'}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Ergonomic Touch Targets >= 44px) */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-950/60 border border-slate-800">
        {[
          {
            id: 'dcf' as BusinessStudioTab,
            labelEn: 'DCF & WACC Valuation',
            labelAr: 'تقييم الشركات (DCF & WACC)',
            icon: DollarSign,
          },
          {
            id: 'breakeven' as BusinessStudioTab,
            labelEn: 'Break-Even & Margin',
            labelAr: 'نقطة التعادل وهامش المساهمة',
            icon: Calculator,
          },
          {
            id: 'leancanvas' as BusinessStudioTab,
            labelEn: 'Lean Canvas Builder',
            labelAr: 'مخطط نموذج العمل (Lean Canvas)',
            icon: Layers,
          },
          {
            id: 'supplychain' as BusinessStudioTab,
            labelEn: 'EOQ Supply Chain',
            labelAr: 'إدارة المخزون واللوجستيات (EOQ)',
            icon: Truck,
          },
          {
            id: 'quiz' as BusinessStudioTab,
            labelEn: 'Strategic Scenarios',
            labelAr: 'سيناريوهات القرارات والحوكمة',
            icon: ShieldCheck,
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs md:text-sm font-semibold transition-all ${
                isActive
                  ? isContrast
                    ? 'bg-yellow-400 text-black font-bold'
                    : 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/60 transition-colors border border-slate-800 ml-auto"
          title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-sky-400" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* ============================================================= */}
      {/* TAB 1: DCF & WACC VALUATION */}
      {/* ============================================================= */}
      {activeTab === 'dcf' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Scientific Vector Schematic: DCF Waterfall & WACC Balancing Scale */}
          <DcfEnterpriseValuationSchematic
            fcfYears={dcfCalculations.fcfYears}
            pvFcfYears={dcfCalculations.pvFcfYears}
            sumPvFcf={dcfCalculations.sumPvFcf}
            terminalValue={dcfCalculations.terminalValue}
            pvTerminalValue={dcfCalculations.pvTerminalValue}
            enterpriseValue={dcfCalculations.enterpriseValue}
            equityValue={dcfCalculations.equityValue}
            fairValuePerShare={dcfCalculations.fairValuePerShare}
            wacc={dcfCalculations.wacc}
            costOfEquity={dcfCalculations.costOfEquity}
            afterTaxCostOfDebt={dcfCalculations.afterTaxCostOfDebt}
            debtWeight={dcfDebtWeight}
            selectedPreset={selectedDcfPreset}
            isLight={isLight}
            isArabic={isArabic}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Controls & Preset Selector */}
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border ${cardClasses}`}>
                <h3 className="text-sm font-semibold text-indigo-300 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                  {isArabic ? 'النماذج المؤسسية المعتمدة للتقييم' : 'Pre-calibrated Valuation Models'}
                </h3>
                <div className="space-y-2">
                  {DCF_VALUATION_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectDcfPreset(preset)}
                      className={`w-full text-start p-3 min-h-[44px] rounded-lg border text-xs transition-all ${
                        selectedDcfPreset.id === preset.id
                          ? 'border-indigo-500 bg-indigo-500/10 text-indigo-300 font-semibold shadow-sm'
                          : 'border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="font-bold text-sm">{isArabic ? preset.nameAr : preset.nameEn}</div>
                      <div className="text-slate-400 mt-0.5">{isArabic ? preset.sectorAr : preset.sectorEn}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Financial Parameters Sliders */}
              <div className={`p-4 rounded-xl border space-y-4 text-xs ${cardClasses}`}>
                <h3 className="font-semibold text-sky-300 flex items-center justify-between">
                  <span>{isArabic ? 'مدخلات التقييم المالي' : 'Valuation Parameters'}</span>
                  <span className="text-slate-400 font-normal">CAPM & WACC</span>
                </h3>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'التدفق النقدي الحر الأولي (FCF₀):' : 'Year 0 FCF:'}</span>
                    <span className="font-mono text-indigo-400">{(dcfFcf0 / 1000).toFixed(1)}M EGP</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="120000"
                    step="1000"
                    value={dcfFcf0}
                    onChange={(e) => setDcfFcf0(Number(e.target.value))}
                    className="w-full h-2 accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'معدل النمو الأولي (سنوات ١-٣):' : 'Years 1-3 Growth Rate:'}</span>
                    <span className="font-mono text-indigo-400">{dcfGrowthEarly}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    step="1"
                    value={dcfGrowthEarly}
                    onChange={(e) => setDcfGrowthEarly(Number(e.target.value))}
                    className="w-full h-2 accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'معدل النمو الدائم (Terminal g):' : 'Terminal Growth (g):'}</span>
                    <span className="font-mono text-indigo-400">{dcfTerminalG}%</span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="8.0"
                    step="0.25"
                    value={dcfTerminalG}
                    onChange={(e) => setDcfTerminalG(Number(e.target.value))}
                    className="w-full h-2 accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'معامل بيتا للسهم (Beta β):' : 'Equity Beta (β):'}</span>
                    <span className="font-mono text-indigo-400">{dcfBeta.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.4"
                    max="2.2"
                    step="0.05"
                    value={dcfBeta}
                    onChange={(e) => setDcfBeta(Number(e.target.value))}
                    className="w-full h-2 accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'نسبة الدين في الهيكل التمويلي (Weight of Debt):' : 'Debt Weight (Wd):'}</span>
                    <span className="font-mono text-indigo-400">{dcfDebtWeight}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="85"
                    step="5"
                    value={dcfDebtWeight}
                    onChange={(e) => setDcfDebtWeight(Number(e.target.value))}
                    className="w-full h-2 accent-indigo-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Detailed Valuation Output & Schedule */}
            <div className="lg:col-span-2 space-y-4">
              {/* Top Metrics Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'تكلفة الملكية (Ke):' : 'Cost of Equity:'}</div>
                  <div className="text-lg font-bold text-sky-400 font-mono">
                    {dcfCalculations.costOfEquity.toFixed(2)}%
                  </div>
                  <div className="text-[10px] text-slate-500">{isArabic ? 'نموذج تسعير الأصول CAPM' : 'CAPM Formula'}</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'تكلفة الدين بعد الضريبة:' : 'After-Tax Rd:'}</div>
                  <div className="text-lg font-bold text-indigo-400 font-mono">
                    {dcfCalculations.afterTaxCostOfDebt.toFixed(2)}%
                  </div>
                  <div className="text-[10px] text-slate-500">{isArabic ? 'درع الوفر الضريبي' : 'Tax Shield Benefit'}</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'المتوسط المرجح (WACC):' : 'Weighted WACC:'}</div>
                  <div className="text-lg font-bold text-purple-400 font-mono">
                    {dcfCalculations.wacc.toFixed(2)}%
                  </div>
                  <div className="text-[10px] text-slate-500">{isArabic ? 'معدل الخصم المركب' : 'Discount Hurdle'}</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'القيمة العادلة للسهم:' : 'Fair Value / Share:'}</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    {dcfCalculations.fairValuePerShare.toFixed(2)} EGP
                  </div>
                  <div className="text-[10px] text-slate-500">{isArabic ? 'تقييم حقوق الملكية' : 'Equity Value / Shs'}</div>
                </div>
              </div>

              {/* 5-Year Cash Flow Projection Table */}
              <div className={`p-4 rounded-xl border overflow-x-auto ${cardClasses}`}>
                <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-sky-400" />
                    {isArabic ? 'جدول التدفقات النقدية المستقبلية والقيمة الحالية (PV)' : '5-Year Free Cash Flow & Discount Schedule'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Unit: 1,000 EGP</span>
                </h3>
                <table className="w-full text-xs text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2 text-start">{isArabic ? 'السنة' : 'Year'}</th>
                      <th className="py-2 text-end">{isArabic ? 'التدفق النقدي (FCFF)' : 'FCFF'}</th>
                      <th className="py-2 text-end">{isArabic ? 'معامل الخصم' : 'Discount Factor'}</th>
                      <th className="py-2 text-end">{isArabic ? 'القيمة الحالية (PV)' : 'Present Value (PV)'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono">
                    {dcfCalculations.fcfYears.map((cf, i) => {
                      const df = Math.pow(1 + dcfCalculations.wacc / 100, i + 1);
                      return (
                        <tr key={i} className="hover:bg-slate-800/30">
                          <td className="py-2 font-sans text-slate-200">{isArabic ? `السنة ${i + 1}` : `Year ${i + 1}`}</td>
                          <td className="py-2 text-end">{Math.round(cf).toLocaleString()}</td>
                          <td className="py-2 text-end text-slate-400">{df.toFixed(3)}</td>
                          <td className="py-2 text-end text-indigo-400 font-semibold">
                            {Math.round(dcfCalculations.pvFcfYears[i]).toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="bg-indigo-950/20 font-semibold">
                      <td className="py-2 font-sans text-indigo-300">
                        {isArabic ? 'القيمة المتبقية المستمرة (TV)' : 'Terminal Value (TV)'}
                      </td>
                      <td className="py-2 text-end">{Math.round(dcfCalculations.terminalValue).toLocaleString()}</td>
                      <td className="py-2 text-end text-slate-400">
                        {Math.pow(1 + dcfCalculations.wacc / 100, 5).toFixed(3)}
                      </td>
                      <td className="py-2 text-end text-emerald-400">
                        {Math.round(dcfCalculations.pvTerminalValue).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Enterprise Valuation Bridge */}
              <div className={`p-4 rounded-xl border ${cardClasses}`}>
                <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  {isArabic ? 'جسر تقييم المنشأة وحقوق الملكية (Enterprise to Equity Value Bridge)' : 'Enterprise to Equity Value Bridge'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'قيمة المنشأة (EV):' : 'Enterprise Value (EV):'}</div>
                    <div className="text-base font-bold text-sky-400 font-mono mt-1">
                      {(dcfCalculations.enterpriseValue / 1000).toFixed(2)}M EGP
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">PV(Years 1-5) + PV(Terminal)</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'صافي الدين (Net Debt):' : 'Net Debt (Debt - Cash):'}</div>
                    <div className="text-base font-bold text-amber-400 font-mono mt-1">
                      {(selectedDcfPreset.netDebt / 1000).toFixed(2)}M EGP
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      {selectedDcfPreset.netDebt < 0 ? (isArabic ? 'فائض سيولة نقدية' : 'Net Cash Surplus') : (isArabic ? 'التزام دين مستحق' : 'Net Borrowings')}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'قيمة حقوق المساهمين:' : 'Equity Value:'}</div>
                    <div className="text-base font-bold text-emerald-400 font-mono mt-1">
                      {(dcfCalculations.equityValue / 1000).toFixed(2)}M EGP
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">Enterprise Value - Net Debt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* TAB 2: BREAK-EVEN & CONTRIBUTION MARGIN */}
      {/* ============================================================= */}
      {activeTab === 'breakeven' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Scientific Vector Schematic: CVP Break-Even & Operating Leverage */}
          <CvpOperatingLeverageSchematic
            fixedCosts={fixedCosts}
            variableCost={variableCost}
            sellingPrice={sellingPrice}
            currentVolume={currentVolume}
            targetProfit={targetProfit}
            breakEvenUnits={beCalculations.breakEvenUnits}
            breakEvenRevenue={beCalculations.breakEvenRevenue}
            currentRevenue={beCalculations.currentRevenue}
            currentProfit={beCalculations.currentProfit}
            marginOfSafetyUnits={beCalculations.marginOfSafetyUnits}
            marginOfSafetyPercent={beCalculations.marginOfSafetyPercent}
            selectedPreset={selectedBePreset}
            isLight={isLight}
            isArabic={isArabic}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Controls */}
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border ${cardClasses}`}>
                <h3 className="text-sm font-semibold text-sky-300 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  {isArabic ? 'حالات دراسية صناعية وخدمية' : 'Industry Sector Presets'}
                </h3>
                <div className="space-y-2">
                  {BREAK_EVEN_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectBePreset(preset)}
                      className={`w-full text-start p-3 min-h-[44px] rounded-lg border text-xs transition-all ${
                        selectedBePreset.id === preset.id
                          ? 'border-sky-500 bg-sky-500/10 text-sky-300 font-semibold shadow-sm'
                          : 'border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="font-bold text-sm">{isArabic ? preset.titleAr : preset.titleEn}</div>
                      <div className="text-slate-400 mt-0.5">{isArabic ? preset.industryAr : preset.industryEn}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Sliders */}
              <div className={`p-4 rounded-xl border space-y-4 text-xs ${cardClasses}`}>
                <h3 className="font-semibold text-slate-200">{isArabic ? 'معايير التكلفة والإنتاج' : 'Cost & Volume Parameters'}</h3>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'التكاليف الثابتة الكلية (Fixed Costs):' : 'Fixed Overhead (FC):'}</span>
                    <span className="font-mono text-sky-400">{fixedCosts.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="4000000"
                    step="25000"
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'سعر بيع الوحدة (Price P):' : 'Unit Selling Price (P):'}</span>
                    <span className="font-mono text-sky-400">{sellingPrice.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'التكلفة المتغيرة للوحدة (Variable Cost VC):' : 'Unit Variable Cost (VC):'}</span>
                    <span className="font-mono text-sky-400">{variableCost.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max={Math.max(3, sellingPrice - 1)}
                    step="2"
                    value={variableCost}
                    onChange={(e) => setVariableCost(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'حجم المبيعات الفعلي المخطط:' : 'Planned Production Volume:'}</span>
                    <span className="font-mono text-sky-400">{currentVolume.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="200000"
                    step="1000"
                    value={currentVolume}
                    onChange={(e) => setCurrentVolume(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results & Visualizer */}
            <div className="lg:col-span-2 space-y-4">
              {/* Break-even KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'كمية التعادل (BEP Units):' : 'BEP Units:'}</div>
                  <div className="text-lg font-bold text-sky-400 font-mono">
                    {Math.round(beCalculations.breakEvenUnits).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500">{isArabic ? 'وحدات تغطية التكاليف' : 'FC / Unit CM'}</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'قيمة مبيعات التعادل:' : 'BEP Revenue:'}</div>
                  <div className="text-lg font-bold text-indigo-400 font-mono">
                    {Math.round(beCalculations.breakEvenRevenue).toLocaleString()} EGP
                  </div>
                  <div className="text-[10px] text-slate-500">{isArabic ? 'BEP × سعر البيع' : 'BEP × Price'}</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'هامش المساهمة للوحدة:' : 'Unit Contribution:'}</div>
                  <div className="text-lg font-bold text-purple-400 font-mono">
                    {beCalculations.contributionMargin.toFixed(1)} EGP
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {(beCalculations.cmRatio * 100).toFixed(1)}% CM Ratio
                  </div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'صافي الربح المتوقع:' : 'Net Operating Profit:'}</div>
                  <div
                    className={`text-lg font-bold font-mono ${
                      beCalculations.currentProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {Math.round(beCalculations.currentProfit).toLocaleString()} EGP
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {beCalculations.currentProfit >= 0 ? (isArabic ? 'فائض ربحي' : 'Profitable') : (isArabic ? 'عجز تشغيلي' : 'Deficit')}
                  </div>
                </div>
              </div>

              {/* Operating Performance Quotation Details */}
              <div className={`p-4 rounded-xl border space-y-3 ${cardClasses}`}>
                <h3 className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-emerald-400" />
                    {isArabic ? 'بيان ملخص الأداء المالي عند حجم الإنتاج الفعلي' : 'Financial Operating Summary at Actual Volume'}
                  </span>
                  <span className="font-mono text-xs text-sky-400">
                    {currentVolume.toLocaleString()} {isArabic ? 'وحدة' : 'Units'}
                  </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'إجمالي المبيعات المخططة:' : 'Total Planned Revenue:'}</div>
                    <div className="text-base font-bold text-sky-400 font-mono mt-1">
                      {Math.round(beCalculations.currentRevenue).toLocaleString()} EGP
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'إجمالي التكاليف الكلية:' : 'Total Costs (FC + VC):'}</div>
                    <div className="text-base font-bold text-amber-400 font-mono mt-1">
                      {Math.round(fixedCosts + variableCost * currentVolume).toLocaleString()} EGP
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'هامش الأمان النسبي (MOS):' : 'Margin of Safety %:'}</div>
                    <div
                      className={`text-base font-bold font-mono mt-1 ${
                        beCalculations.marginOfSafetyPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {beCalculations.marginOfSafetyPercent.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* TAB 3: LEAN CANVAS 9-BLOCK BUILDER */}
      {/* ============================================================= */}
      {activeTab === 'leancanvas' && (
        <div className="space-y-4 animate-fadeIn">
          {/* Case Study Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-bold text-slate-200">
                {isArabic ? 'دراسات حالة الشركات الناشئة:' : 'Startup Case Studies:'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {LEAN_CANVAS_CASES.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCase(cs)}
                  className={`px-3.5 py-2 min-h-[40px] rounded-lg text-xs font-semibold transition-all ${
                    selectedCase.id === cs.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {isArabic ? cs.ventureNameAr : cs.ventureNameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Scientific Vector Schematic: Lean Canvas Matrix with Circuit Traces */}
          <LeanCanvasInteractiveMatrixSchematic
            selectedCase={selectedCase}
            isLight={isLight}
            isArabic={isArabic}
          />

          {/* Case Banner */}
          <div className={`p-4 rounded-xl border ${cardClasses}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-indigo-300">
                  {isArabic ? selectedCase.ventureNameAr : selectedCase.ventureNameEn}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isArabic ? selectedCase.taglineAr : selectedCase.taglineEn}
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                {isArabic ? selectedCase.industryAr : selectedCase.industryEn}
              </span>
            </div>
          </div>

          {/* 9-Block Grid Standard Lean Canvas Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Box 1: Problem */}
            <div className={`p-3 rounded-xl border flex flex-col justify-between ${cardClasses}`}>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{isArabic ? '١. المشكلة' : '1. Problem'}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {(isArabic ? selectedCase.blocks.problemAr : selectedCase.blocks.problemEn).map((p, idx) => (
                    <li key={idx} className="leading-snug">{p}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500">
                {isArabic ? 'نقاط الألم الجوهرية' : 'Core Pain Points'}
              </div>
            </div>

            {/* Box 4: Solution */}
            <div className={`p-3 rounded-xl border flex flex-col justify-between ${cardClasses}`}>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>{isArabic ? '٤. الحل المقترح' : '4. Solution (MVP)'}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {(isArabic ? selectedCase.blocks.solutionAr : selectedCase.blocks.solutionEn).map((s, idx) => (
                    <li key={idx} className="leading-snug">{s}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500">
                {isArabic ? 'ميزات النموذج الأولي' : 'MVP Feature Set'}
              </div>
            </div>

            {/* Box 3: Unique Value Proposition (Central Column) */}
            <div className={`p-3 rounded-xl border flex flex-col justify-between border-indigo-500/40 bg-indigo-950/20 ${cardClasses}`}>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 mb-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>{isArabic ? '٣. عرض القيمة الفريد' : '3. UVP'}</span>
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed bg-slate-950/50 p-2.5 rounded-lg border border-indigo-500/30">
                  "{isArabic ? selectedCase.blocks.uvpAr : selectedCase.blocks.uvpEn}"
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-indigo-400 font-semibold">
                {isArabic ? 'رسالة التمايز التنافسي' : 'Core Differentiator'}
              </div>
            </div>

            {/* Box 9: Unfair Advantage */}
            <div className={`p-3 rounded-xl border flex flex-col justify-between ${cardClasses}`}>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isArabic ? '٩. الميزة الحصينة' : '9. Unfair Advantage'}</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  {isArabic ? selectedCase.blocks.advantageAr : selectedCase.blocks.advantageEn}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500">
                {isArabic ? 'يصعب تقليدها أو شراؤها' : 'Cannot be easily copied'}
              </div>
            </div>

            {/* Box 2: Customer Segments */}
            <div className={`p-3 rounded-xl border flex flex-col justify-between ${cardClasses}`}>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                  <Users className="w-4 h-4" />
                  <span>{isArabic ? '٢. شرائح العملاء' : '2. Customer Segments'}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {(isArabic ? selectedCase.blocks.segmentsAr : selectedCase.blocks.segmentsEn).map((seg, idx) => (
                    <li key={idx} className="leading-snug">{seg}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500">
                {isArabic ? 'الرواد الأوائل والجمهور المستهدف' : 'Early Adopters & ICP'}
              </div>
            </div>
          </div>

          {/* Bottom Dual Rows: Metrics & Channels (Row 2) + Costs & Revenue (Row 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Metrics & Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>{isArabic ? '٨. المقاييس الأساسية' : '8. Key Metrics'}</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                  {(isArabic ? selectedCase.blocks.metricsAr : selectedCase.blocks.metricsEn).map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-400 mb-2">
                  <Share2 className="w-4 h-4" />
                  <span>{isArabic ? '٥. قنوات التوزيع' : '5. Channels'}</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                  {(isArabic ? selectedCase.blocks.channelsAr : selectedCase.blocks.channelsEn).map((ch, idx) => (
                    <li key={idx}>{ch}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Costs & Revenues */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300 mb-2">
                  <Receipt className="w-4 h-4" />
                  <span>{isArabic ? '٧. هيكل التكاليف' : '7. Cost Structure'}</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                  {(isArabic ? selectedCase.blocks.costsAr : selectedCase.blocks.costsEn).map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span>{isArabic ? '٦. مصادر الإيرادات' : '6. Revenue Streams'}</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                  {(isArabic ? selectedCase.blocks.revenueAr : selectedCase.blocks.revenueEn).map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* TAB 4: SUPPLY CHAIN & EOQ OPTIMIZER */}
      {/* ============================================================= */}
      {activeTab === 'supplychain' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Scientific Vector Schematic: EOQ Inventory Sawtooth & Cost Convexity */}
          <EoqInventorySawtoothSchematic
            annualDemand={eoqDemand}
            orderCost={eoqOrderCost}
            holdingCostPerUnit={eoqHoldingCost}
            unitPurchasePrice={eoqUnitPrice}
            leadTimeDays={eoqLeadDays}
            safetyStockUnits={eoqSafetyStock}
            eoqUnits={eoqCalculations.eoqUnits}
            ordersPerYear={eoqCalculations.ordersPerYear}
            annualOrderingCost={eoqCalculations.annualOrderingCost}
            annualHoldingCost={eoqCalculations.annualHoldingCost}
            totalAnnualInventoryCost={eoqCalculations.totalAnnualInventoryCost}
            reorderPoint={eoqCalculations.reorderPoint}
            cycleTimeDays={eoqCalculations.cycleTimeDays}
            selectedPreset={selectedEoqPreset}
            isLight={isLight}
            isArabic={isArabic}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Controls */}
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border ${cardClasses}`}>
                <h3 className="text-sm font-semibold text-teal-300 mb-3 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-teal-400" />
                  {isArabic ? 'فئات المنتجات اللوجستية المعتمدة' : 'Inventory Presets'}
                </h3>
                <div className="space-y-2">
                  {EOQ_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectEoqPreset(preset)}
                      className={`w-full text-start p-3 min-h-[44px] rounded-lg border text-xs transition-all ${
                        selectedEoqPreset.id === preset.id
                          ? 'border-teal-500 bg-teal-500/10 text-teal-300 font-semibold shadow-sm'
                          : 'border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="font-bold text-sm">{isArabic ? preset.productNameAr : preset.productNameEn}</div>
                      <div className="text-slate-400 mt-0.5">{isArabic ? preset.categoryAr : preset.categoryEn}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className={`p-4 rounded-xl border space-y-4 text-xs ${cardClasses}`}>
                <h3 className="font-semibold text-slate-200">{isArabic ? 'متغيرات نموذج EOQ' : 'EOQ Parameters'}</h3>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'الطلب السنوي (Demand D):' : 'Annual Demand (D):'}</span>
                    <span className="font-mono text-teal-400">{eoqDemand.toLocaleString()} {isArabic ? 'وحدة' : 'Units'}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="200000"
                    step="1000"
                    value={eoqDemand}
                    onChange={(e) => setEoqDemand(Number(e.target.value))}
                    className="w-full h-2 accent-teal-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'تكلفة إصدار أمر التوريد (Order Cost S):' : 'Order Cost (S):'}</span>
                    <span className="font-mono text-teal-400">{eoqOrderCost.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={eoqOrderCost}
                    onChange={(e) => setEoqOrderCost(Number(e.target.value))}
                    className="w-full h-2 accent-teal-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'تكلفة الاحتفاظ بالوحدة سنوياً (Holding Cost H):' : 'Holding Cost/Unit (H):'}</span>
                    <span className="font-mono text-teal-400">{eoqHoldingCost.toFixed(1)} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="300"
                    step="1"
                    value={eoqHoldingCost}
                    onChange={(e) => setEoqHoldingCost(Number(e.target.value))}
                    className="w-full h-2 accent-teal-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'فترة التوريد بالأيام (Lead Time L):' : 'Lead Time (Days):'}</span>
                    <span className="font-mono text-teal-400">{eoqLeadDays} {isArabic ? 'يوم' : 'Days'}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    step="1"
                    value={eoqLeadDays}
                    onChange={(e) => setEoqLeadDays(Number(e.target.value))}
                    className="w-full h-2 accent-teal-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>{isArabic ? 'مخزون الأمان (Safety Stock SS):' : 'Safety Stock (SS):'}</span>
                    <span className="font-mono text-teal-400">{eoqSafetyStock.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={eoqSafetyStock}
                    onChange={(e) => setEoqSafetyStock(Number(e.target.value))}
                    className="w-full h-2 accent-teal-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'الحجم الاقتصادي الأمثل (EOQ):' : 'Optimal EOQ:'}</div>
                  <div className="text-lg font-bold text-teal-400 font-mono">
                    {eoqCalculations.eoqUnits.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500">√((2·D·S)/H)</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'عدد الطلبات سنوياً:' : 'Orders / Year:'}</div>
                  <div className="text-lg font-bold text-indigo-400 font-mono">
                    {eoqCalculations.ordersPerYear.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-slate-500">D / EOQ</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'نقطة إعادة الطلب (ROP):' : 'Reorder Point:'}</div>
                  <div className="text-lg font-bold text-amber-400 font-mono">
                    {eoqCalculations.reorderPoint.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500">d·L + SS</div>
                </div>

                <div className={`p-3 rounded-xl border ${cardClasses}`}>
                  <div className="text-[11px] text-slate-400">{isArabic ? 'الدورة الزمنية للطلب:' : 'Order Cycle:'}</div>
                  <div className="text-lg font-bold text-purple-400 font-mono">
                    {eoqCalculations.cycleTimeDays.toFixed(1)} {isArabic ? 'يوم' : 'Days'}
                  </div>
                  <div className="text-[10px] text-slate-500">300 / (Orders/yr)</div>
                </div>
              </div>

              {/* Inventory Cost Equilibrium Card */}
              <div className={`p-4 rounded-xl border ${cardClasses}`}>
                <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-teal-400" />
                    {isArabic ? 'توازن تكلفة التوريد وتكلفة التخزين عند الحجم الأمثل' : 'Inventory Cost Equilibrium at EOQ'}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {isArabic ? 'أقل تكلفة كلية ممكنة' : 'Minimum Total Cost'}
                  </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'تكلفة أوامر التوريد السنوية:' : 'Annual Ordering Cost:'}</div>
                    <div className="text-base font-bold text-sky-400 font-mono mt-1">
                      {Math.round(eoqCalculations.annualOrderingCost).toLocaleString()} EGP
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">(D / Q) × S</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'تكلفة الاحتفاظ بالمخزون السنوية:' : 'Annual Holding Cost:'}</div>
                    <div className="text-base font-bold text-indigo-400 font-mono mt-1">
                      {Math.round(eoqCalculations.annualHoldingCost).toLocaleString()} EGP
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">(Q / 2) × H</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    <div className="text-slate-400">{isArabic ? 'إجمالي تكلفة إدارة المخزون:' : 'Total Annual Inventory Cost:'}</div>
                    <div className="text-base font-bold text-teal-400 font-mono mt-1">
                      {Math.round(eoqCalculations.totalAnnualInventoryCost).toLocaleString()} EGP
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">Ordering Cost + Holding Cost</div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-teal-400 font-semibold">{isArabic ? 'قاعدة التوازن الاقتصادي: ' : 'Equilibrium Theorem: '}</span>
                  {isArabic
                    ? 'عند حجم الطلب الاقتصادي الأمثل (EOQ)، تتساوى تكلفة إصدار أوامر التوريد السنوية تماماً مع تكلفة الاحتفاظ بالمخزون السنوية، محققة الحد الأدنى الرياضي المطلق لإجمالي تكاليف إدارة المخزون.'
                    : 'At the exact Economic Order Quantity (EOQ), annual ordering costs mathematically intersect and equal annual holding costs, minimizing total logistics inventory holding expenditure.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* TAB 5: STRATEGIC DECISION SCENARIO QUIZ */}
      {/* ============================================================= */}
      {activeTab === 'quiz' && (
        <div className="max-w-3xl mx-auto w-full space-y-6 animate-fadeIn">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>
                {isArabic ? `السيناريو ${currentQIndex + 1} من ${BUSINESS_SCENARIO_QUIZ.length}` : `Scenario ${currentQIndex + 1} of ${BUSINESS_SCENARIO_QUIZ.length}`}
              </span>
            </span>
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-semibold">
                {BUSINESS_SCENARIO_QUIZ[currentQIndex].bloomLevel}
              </span>
              <span className="text-emerald-400 font-mono font-bold">
                {isArabic ? `النقاط: ${quizScore}` : `Score: ${quizScore}`}
              </span>
            </div>
          </div>

          {/* Scenario Card */}
          <div className={`p-6 rounded-2xl border space-y-4 ${cardClasses}`}>
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                {isArabic ? BUSINESS_SCENARIO_QUIZ[currentQIndex].titleAr : BUSINESS_SCENARIO_QUIZ[currentQIndex].titleEn}
              </h3>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs md:text-sm text-slate-300 leading-relaxed">
                {isArabic ? BUSINESS_SCENARIO_QUIZ[currentQIndex].contextAr : BUSINESS_SCENARIO_QUIZ[currentQIndex].contextEn}
              </div>
            </div>

            <div className="font-semibold text-sm text-indigo-300 pt-2">
              {isArabic ? BUSINESS_SCENARIO_QUIZ[currentQIndex].questionAr : BUSINESS_SCENARIO_QUIZ[currentQIndex].questionEn}
            </div>

            {/* Options */}
            <div className="space-y-2.5 pt-2">
              {(isArabic ? BUSINESS_SCENARIO_QUIZ[currentQIndex].optionsAr : BUSINESS_SCENARIO_QUIZ[currentQIndex].optionsEn).map((opt, idx) => {
                const isCorrect = idx === BUSINESS_SCENARIO_QUIZ[currentQIndex].correctIndex;
                const isSelected = selectedOption === idx;

                let optionStyle = 'border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-200';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-300 font-medium';
                  } else if (isSelected) {
                    optionStyle = 'border-rose-500 bg-rose-500/10 text-rose-300';
                  } else {
                    optionStyle = 'border-slate-800/40 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleQuizSubmit(idx)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border text-xs md:text-sm transition-all flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt}</span>
                    {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                    {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                  </button>
                );
              })}
            </div>

            {/* Pedagogical Rationale */}
            {isAnswerSubmitted && (
              <div className="mt-4 p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-xs md:text-sm text-slate-200 space-y-2 animate-fadeIn">
                <div className="font-bold text-indigo-400 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>{isArabic ? 'التحليل الاستراتيجي التربوي النموذجي:' : 'Pedagogical Strategic Rationale:'}</span>
                </div>
                <p className="leading-relaxed">
                  {isArabic ? BUSINESS_SCENARIO_QUIZ[currentQIndex].rationaleAr : BUSINESS_SCENARIO_QUIZ[currentQIndex].rationaleEn}
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isArabic ? 'إعادة الاختبار' : 'Reset Quiz'}</span>
            </button>

            {isAnswerSubmitted && currentQIndex < BUSINESS_SCENARIO_QUIZ.length - 1 && (
              <button
                onClick={nextQuestion}
                className="px-4 py-2.5 min-h-[44px] rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs md:text-sm font-semibold shadow-md shadow-indigo-600/30 transition-all"
              >
                {isArabic ? 'السيناريو التالي' : 'Next Scenario'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
