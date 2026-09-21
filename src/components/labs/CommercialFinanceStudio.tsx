import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  FINANCIAL_STATEMENT_PRESETS,
  LOAN_PRESETS,
  CAPITAL_PROJECT_PRESETS,
  BORROWER_PROFILES,
  FINANCIAL_ASSETS,
  type FinancialStatementPreset,
  type LoanPreset,
  type CapitalProjectPreset,
  type BorrowerCreditProfile,
  type FinancialAsset,
} from '../../data/commercialLab/commercialLabData';
import {
  Landmark,
  TrendingUp,
  PieChart,
  Calculator,
  ShieldCheck,
  Maximize2,
  Minimize2,
  Download,
  Building2,
  DollarSign,
  Scale,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialStation?: CommercialStation;
}

export type CommercialStation =
  | 'financial_statements'
  | 'compound_interest'
  | 'capital_budgeting'
  | 'banking_credit'
  | 'portfolio_risk';

// ============================================================================
// HIGH-RESOLUTION SCIENTIFIC VECTOR SCHEMATICS FOR COMMERCIAL FINANCE
// ============================================================================

const DupontPyramidSchematic: React.FC<{
  roePct: number;
  netMarginPct: number;
  assetTurnover: number;
  equityMultiplier: number;
  netIncome: number;
  sales: number;
  totalAssets: number;
  totalEquity: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({
  roePct,
  netMarginPct,
  assetTurnover,
  equityMultiplier,
  netIncome,
  sales,
  totalAssets,
  totalEquity,
  isArabic,
  isLight = false,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-[11px] font-bold text-slate-400 mb-2 font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        {isArabic
          ? 'مخطط هرم ديبون لتفكيك العائد على حقوق الملكية (DuPont ROE Decomposition Pyramid)'
          : 'DuPont ROE Decomposition Architecture Pyramid'}
      </div>
      <svg viewBox="0 0 760 320" className="w-full max-w-[760px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="dupontRoeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="dupontPillarTeal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#134e4a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#042f2e" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="dupontPillarAmber" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#78350f" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#451a03" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="dupontPillarPurple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#581c87" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Outer Viewport Box */}
        <rect
          x="10"
          y="10"
          width="740"
          height="300"
          rx="12"
          fill={isLight ? '#f8fafc' : '#070b14'}
          stroke={isLight ? '#cbd5e1' : '#1e293b'}
          strokeWidth="1.5"
        />

        {/* Tree Circuit Bus Connecting Lines */}
        <path d="M 380 75 L 380 110" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M 130 110 L 630 110" stroke="#38bdf8" strokeWidth="2" />
        <line x1="130" y1="110" x2="130" y2="135" stroke="#14b8a6" strokeWidth="2" />
        <line x1="380" y1="110" x2="380" y2="135" stroke="#f59e0b" strokeWidth="2" />
        <line x1="630" y1="110" x2="630" y2="135" stroke="#a855f7" strokeWidth="2" />

        {/* Multiplier Operator Badges on Bus */}
        <circle cx="255" cy="110" r="10" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#0284c7' : '#38bdf8'} strokeWidth="1.5" />
        <text x="255" y="114" fill={isLight ? '#0369a1' : '#38bdf8'} fontSize="11" fontWeight="bold" textAnchor="middle">×</text>
        <circle cx="505" cy="110" r="10" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#0284c7' : '#38bdf8'} strokeWidth="1.5" />
        <text x="505" y="114" fill={isLight ? '#0369a1' : '#38bdf8'} fontSize="11" fontWeight="bold" textAnchor="middle">×</text>

        {/* Connecting Lines from Middle to Bottom */}
        <line x1="130" y1="200" x2="130" y2="225" stroke={isLight ? '#0d9488' : '#14b8a6'} strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M 70 225 L 190 225" stroke={isLight ? '#0d9488' : '#14b8a6'} strokeWidth="1.5" />
        <line x1="70" y1="225" x2="70" y2="240" stroke={isLight ? '#0d9488' : '#14b8a6'} strokeWidth="1.5" />
        <line x1="190" y1="225" x2="190" y2="240" stroke={isLight ? '#0d9488' : '#14b8a6'} strokeWidth="1.5" />

        <line x1="380" y1="200" x2="380" y2="225" stroke={isLight ? '#d97706' : '#f59e0b'} strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M 320 225 L 440 225" stroke={isLight ? '#d97706' : '#f59e0b'} strokeWidth="1.5" />
        <line x1="320" y1="225" x2="320" y2="240" stroke={isLight ? '#d97706' : '#f59e0b'} strokeWidth="1.5" />
        <line x1="440" y1="225" x2="440" y2="240" stroke={isLight ? '#d97706' : '#f59e0b'} strokeWidth="1.5" />

        <line x1="630" y1="200" x2="630" y2="225" stroke={isLight ? '#9333ea' : '#a855f7'} strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M 570 225 L 690 225" stroke={isLight ? '#9333ea' : '#a855f7'} strokeWidth="1.5" />
        <line x1="570" y1="225" x2="570" y2="240" stroke={isLight ? '#9333ea' : '#a855f7'} strokeWidth="1.5" />
        <line x1="690" y1="225" x2="690" y2="240" stroke={isLight ? '#9333ea' : '#a855f7'} strokeWidth="1.5" />

        {/* Division badges */}
        <circle cx="130" cy="225" r="8" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#0d9488' : '#14b8a6'} strokeWidth={isLight ? '1.5' : '1'} />
        <text x="130" y="228" fill={isLight ? '#0f766e' : '#14b8a6'} fontSize="9" fontWeight="bold" textAnchor="middle">÷</text>
        <circle cx="380" cy="225" r="8" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#d97706' : '#f59e0b'} strokeWidth={isLight ? '1.5' : '1'} />
        <text x="380" y="228" fill={isLight ? '#b45309' : '#f59e0b'} fontSize="9" fontWeight="bold" textAnchor="middle">÷</text>
        <circle cx="630" cy="225" r="8" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#9333ea' : '#a855f7'} strokeWidth={isLight ? '1.5' : '1'} />
        <text x="630" y="228" fill={isLight ? '#7e22ce' : '#a855f7'} fontSize="9" fontWeight="bold" textAnchor="middle">÷</text>

        {/* LEVEL 1: TOP ROE APEX CARD */}
        <g transform="translate(380, 48)">
          <rect
            x="-140"
            y="-30"
            width="280"
            height="58"
            rx="10"
            fill="url(#dupontRoeGrad)"
            stroke="#2dd4bf"
            strokeWidth="2"
          />
          <text x="0" y="-12" fill="#ccfbf1" fontSize="9" fontWeight="bold" textAnchor="middle">
            {isArabic ? 'العائد على حقوق الملكية (ROE)' : 'Return on Equity (ROE)'}
          </text>
          <text x="0" y="10" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {roePct.toFixed(1)}%
          </text>
          <text x="0" y="22" fill="#99f6e4" fontSize="7" textAnchor="middle">
            {isArabic ? 'كفاءة تعظيم ثروة المساهمين والمستثمرين' : 'Shareholder Wealth Generation Efficiency'}
          </text>
        </g>

        {/* LEVEL 2: THREE OPERATIONAL PILLARS */}
        {/* Pillar 1: Profit Margin (Left) */}
        <g transform="translate(130, 168)">
          <rect
            x="-105"
            y="-32"
            width="210"
            height="64"
            rx="8"
            fill="url(#dupontPillarTeal)"
            stroke="#14b8a6"
            strokeWidth="1.5"
          />
          <text x="0" y="-16" fill="#5eead4" fontSize="8.5" fontWeight="bold" textAnchor="middle">
            {isArabic ? '١. صافي هامش الربح' : '1. Net Profit Margin'}
          </text>
          <text x="0" y="4" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {netMarginPct.toFixed(1)}%
          </text>
          <text x="0" y="18" fill="#94a3b8" fontSize="7" textAnchor="middle">
            {isArabic ? 'كفاءة التشغيل والتسعير وضبط التكاليف' : 'Operating Cost & Pricing Efficiency'}
          </text>
        </g>

        {/* Pillar 2: Asset Turnover (Center) */}
        <g transform="translate(380, 168)">
          <rect
            x="-105"
            y="-32"
            width="210"
            height="64"
            rx="8"
            fill="url(#dupontPillarAmber)"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <text x="0" y="-16" fill="#fde68a" fontSize="8.5" fontWeight="bold" textAnchor="middle">
            {isArabic ? '٢. معدل دوران الأصول' : '2. Total Asset Turnover'}
          </text>
          <text x="0" y="4" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {assetTurnover.toFixed(2)}x
          </text>
          <text x="0" y="18" fill="#94a3b8" fontSize="7" textAnchor="middle">
            {isArabic ? 'كفاءة تشغيل الأصول وتوليد الإيرادات' : 'Asset Capital Productivity & Revenue Velocity'}
          </text>
        </g>

        {/* Pillar 3: Equity Multiplier (Right) */}
        <g transform="translate(630, 168)">
          <rect
            x="-105"
            y="-32"
            width="210"
            height="64"
            rx="8"
            fill="url(#dupontPillarPurple)"
            stroke="#a855f7"
            strokeWidth="1.5"
          />
          <text x="0" y="-16" fill="#e9d5ff" fontSize="8.5" fontWeight="bold" textAnchor="middle">
            {isArabic ? '٣. مضاعف الرفع المالي' : '3. Equity Multiplier (Leverage)'}
          </text>
          <text x="0" y="4" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {equityMultiplier.toFixed(2)}x
          </text>
          <text x="0" y="18" fill="#94a3b8" fontSize="7" textAnchor="middle">
            {isArabic ? 'هيكل التمويل ومخاطر الالتزامات' : 'Capital Structure & Financial Solvency'}
          </text>
        </g>

        {/* LEVEL 3: RAW ACCOUNTING INPUT NODES */}
        {/* Node 1: Net Income */}
        <g transform="translate(70, 265)">
          <rect x="-50" y="-18" width="100" height="36" rx="6" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#0d9488' : '#14b8a6'} strokeWidth={isLight ? '1.5' : '1'} />
          <text x="0" y="-5" fill={isLight ? '#475569' : '#94a3b8'} fontSize="7" fontWeight={isLight ? 'bold' : 'normal'} textAnchor="middle">
            {isArabic ? 'صافي الدخل' : 'Net Income'}
          </text>
          <text x="0" y="9" fill={isLight ? '#0f766e' : '#14b8a6'} fontSize="8.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {(netIncome / 1000).toFixed(0)}k EGP
          </text>
        </g>

        {/* Node 2: Sales Revenue */}
        <g transform="translate(190, 265)">
          <rect x="-50" y="-18" width="100" height="36" rx="6" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#0d9488' : '#14b8a6'} strokeWidth={isLight ? '1.5' : '1'} />
          <text x="0" y="-5" fill={isLight ? '#475569' : '#94a3b8'} fontSize="7" fontWeight={isLight ? 'bold' : 'normal'} textAnchor="middle">
            {isArabic ? 'المبيعات' : 'Sales Revenue'}
          </text>
          <text x="0" y="9" fill={isLight ? '#0f766e' : '#14b8a6'} fontSize="8.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {(sales / 1000).toFixed(0)}k EGP
          </text>
        </g>

        {/* Node 3: Sales (for Turnover) */}
        <g transform="translate(320, 265)">
          <rect x="-50" y="-18" width="100" height="36" rx="6" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#d97706' : '#f59e0b'} strokeWidth={isLight ? '1.5' : '1'} />
          <text x="0" y="-5" fill={isLight ? '#475569' : '#94a3b8'} fontSize="7" fontWeight={isLight ? 'bold' : 'normal'} textAnchor="middle">
            {isArabic ? 'المبيعات' : 'Sales Revenue'}
          </text>
          <text x="0" y="9" fill={isLight ? '#b45309' : '#f59e0b'} fontSize="8.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {(sales / 1000).toFixed(0)}k EGP
          </text>
        </g>

        {/* Node 4: Total Assets */}
        <g transform="translate(440, 265)">
          <rect x="-50" y="-18" width="100" height="36" rx="6" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#d97706' : '#f59e0b'} strokeWidth={isLight ? '1.5' : '1'} />
          <text x="0" y="-5" fill={isLight ? '#475569' : '#94a3b8'} fontSize="7" fontWeight={isLight ? 'bold' : 'normal'} textAnchor="middle">
            {isArabic ? 'إجمالي الأصول' : 'Total Assets'}
          </text>
          <text x="0" y="9" fill={isLight ? '#b45309' : '#f59e0b'} fontSize="8.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {(totalAssets / 1000).toFixed(0)}k EGP
          </text>
        </g>

        {/* Node 5: Total Assets for Leverage */}
        <g transform="translate(570, 265)">
          <rect x="-50" y="-18" width="100" height="36" rx="6" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#9333ea' : '#a855f7'} strokeWidth={isLight ? '1.5' : '1'} />
          <text x="0" y="-5" fill={isLight ? '#475569' : '#94a3b8'} fontSize="7" fontWeight={isLight ? 'bold' : 'normal'} textAnchor="middle">
            {isArabic ? 'إجمالي الأصول' : 'Total Assets'}
          </text>
          <text x="0" y="9" fill={isLight ? '#7e22ce' : '#a855f7'} fontSize="8.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {(totalAssets / 1000).toFixed(0)}k EGP
          </text>
        </g>

        {/* Node 6: Total Equity */}
        <g transform="translate(690, 265)">
          <rect x="-50" y="-18" width="100" height="36" rx="6" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#9333ea' : '#a855f7'} strokeWidth={isLight ? '1.5' : '1'} />
          <text x="0" y="-5" fill={isLight ? '#475569' : '#94a3b8'} fontSize="7" fontWeight={isLight ? 'bold' : 'normal'} textAnchor="middle">
            {isArabic ? 'حقوق الملكية' : 'Total Equity'}
          </text>
          <text x="0" y="9" fill={isLight ? '#7e22ce' : '#a855f7'} fontSize="8.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {(totalEquity / 1000).toFixed(0)}k EGP
          </text>
        </g>
      </svg>
    </div>
  );
};

const LoanAmortizationScheduleSchematic: React.FC<{
  principal: number;
  totalInterest: number;
  totalCost: number;
  periodicInstallment: number;
  loanYears: number;
  compoundingFreq: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({
  principal,
  totalInterest,
  totalCost,
  periodicInstallment,
  loanYears,
  compoundingFreq,
  isArabic,
  isLight = false,
}) => {
  const totalPeriods = loanYears * compoundingFreq;
  const principalSharePct = totalCost > 0 ? (principal / totalCost) * 100 : 0;
  const interestSharePct = totalCost > 0 ? (totalInterest / totalCost) * 100 : 0;

  // Generate 24 continuous steps for stacked area geometry
  const numSteps = 24;
  const stepsData = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= numSteps; i++) {
      const frac = i / numSteps;
      const period = Math.max(1, Math.round(frac * totalPeriods));
      const decay = Math.pow(1 - frac, 1.18);
      const balance = principal * decay;
      const interest = periodicInstallment * (1 - Math.pow(frac, 0.85)) * (interestSharePct / 100) * 1.5;
      const prinPortion = Math.max(0, periodicInstallment - interest);
      pts.push({ frac, period, balance, interest, prinPortion });
    }
    return pts;
  }, [principal, totalPeriods, periodicInstallment, interestSharePct]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-[11px] font-bold text-slate-400 mb-2 font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        {isArabic
          ? 'ديناميكية استهلاك القرض وتلاشي الرصيد المدين (Loan Amortization Dynamics & Balance Decay)'
          : 'Loan Amortization Dynamics & Principal-Interest Stack'}
      </div>
      <svg viewBox="0 0 760 280" className="w-full max-w-[760px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="amortPrinArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#115e59" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="amortIntArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="amortBalanceLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {/* Viewport Box */}
        <rect
          x="10"
          y="10"
          width="740"
          height="260"
          rx="12"
          fill={isLight ? '#f8fafc' : '#070b14'}
          stroke={isLight ? '#cbd5e1' : '#1e293b'}
          strokeWidth="1.5"
        />

        {/* LEFT PANEL: STACKED AMORTIZATION AREA */}
        <g transform="translate(45, 35)">
          {/* Background Grid */}
          {[0, 0.25, 0.5, 0.75, 1.0].map((g) => (
            <line
              key={g}
              x1="0"
              y1={190 * (1 - g)}
              x2="460"
              y2={190 * (1 - g)}
              stroke={isLight ? '#e2e8f0' : '#1e293b'}
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          ))}

          {/* Principal Area (bottom) */}
          <path
            d={`M 0 190 ${stepsData.map((d) => `L ${d.frac * 460} ${190 - (d.prinPortion / (periodicInstallment || 1)) * 150}`).join(' ')} L 460 190 Z`}
            fill="url(#amortPrinArea)"
          />
          {/* Interest Area (top) */}
          <path
            d={`M 0 40 ${stepsData.map((d) => `L ${d.frac * 460} 40`).join(' ')} L 460 190 ${stepsData.slice().reverse().map((d) => `L ${d.frac * 460} ${190 - (d.prinPortion / (periodicInstallment || 1)) * 150}`).join(' ')} Z`}
            fill="url(#amortIntArea)"
          />

          {/* Remaining Balance Decay Line */}
          <path
            d={`M 0 15 ${stepsData.map((d) => `L ${d.frac * 460} ${15 + (1 - d.balance / (principal || 1)) * 175}`).join(' ')}`}
            fill="none"
            stroke="url(#amortBalanceLine)"
            strokeWidth="3"
          />

          {/* Baseline axes */}
          <line x1="0" y1="190" x2="460" y2="190" stroke="#475569" strokeWidth="1.5" />
          <line x1="0" y1="0" x2="0" y2="190" stroke="#475569" strokeWidth="1.5" />
          <line x1="460" y1="0" x2="460" y2="190" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

          {/* Crossover Milestone Vertical Line */}
          <line x1="230" y1="0" x2="230" y2="190" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
          <rect x="180" y="2" width="100" height="18" rx="3" fill="#0f172a" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <text x="230" y="14" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">
            {isArabic ? 'نقطة انقلاب الفائدة' : 'Principal Crossover'}
          </text>

          {/* Axis Labels */}
          <text x="0" y="204" fill="#94a3b8" fontSize="8" textAnchor="start">
            {isArabic ? 'الفترة ١ (بداية القرض)' : 'P1 (Loan Start)'}
          </text>
          <text x="230" y="204" fill="#94a3b8" fontSize="8" textAnchor="middle">
            {isArabic ? `منتصف المدة (${Math.round(totalPeriods / 2)})` : `Mid (${Math.round(totalPeriods / 2)})`}
          </text>
          <text x="460" y="204" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="end">
            {isArabic ? `الفترة ${totalPeriods} (السداد الكامل)` : `P${totalPeriods} (Maturity)`}
          </text>

          {/* Y Axis Labels */}
          <text x="-6" y="20" fill="#38bdf8" fontSize="7.5" textAnchor="end" fontFamily="monospace">
            {(principal / 1000).toFixed(0)}k EGP
          </text>
          <text x="-6" y="190" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="monospace">
            0
          </text>

          {/* Area Legend labels */}
          <rect x="15" y="155" width="10" height="10" rx="2" fill="#0d9488" />
          <text x="30" y="163" fill="#ccfbf1" fontSize="7.5" fontWeight="bold">
            {isArabic ? 'سداد أصل الدين (Principal)' : 'Principal Repayment'}
          </text>
          <rect x="15" y="70" width="10" height="10" rx="2" fill="#f59e0b" />
          <text x="30" y="78" fill="#fef3c7" fontSize="7.5" fontWeight="bold">
            {isArabic ? 'تكلفة الفائدة (Interest)' : 'Interest Charge'}
          </text>
        </g>

        {/* RIGHT PANEL: COST BREAKDOWN DONUT & METRICS */}
        <g transform="translate(635, 135)">
          <circle cx="0" cy="0" r="54" fill="none" stroke="#1e293b" strokeWidth="18" />
          <circle
            cx="0"
            cy="0"
            r="54"
            fill="none"
            stroke="#0d9488"
            strokeWidth="18"
            strokeDasharray={`${(principalSharePct / 100) * 339.29} 339.29`}
            strokeDashoffset="84.82"
          />
          <circle
            cx="0"
            cy="0"
            r="54"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="18"
            strokeDasharray={`${(interestSharePct / 100) * 339.29} 339.29`}
            strokeDashoffset={`${84.82 - (principalSharePct / 100) * 339.29}`}
          />

          <text x="0" y="-8" fill="#94a3b8" fontSize="7.5" textAnchor="middle">
            {isArabic ? 'إجمالي التكلفة' : 'Total Outlay'}
          </text>
          <text x="0" y="10" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {(totalCost / 1000).toFixed(0)}k
          </text>
          <text x="0" y="22" fill="#38bdf8" fontSize="7" textAnchor="middle">
            EGP
          </text>

          {/* Cost Legend Cards */}
          <g transform="translate(-75, 75)">
            <rect x="0" y="0" width="70" height="34" rx="4" fill="#042f2e" stroke="#0d9488" strokeWidth="1" />
            <text x="35" y="13" fill="#5eead4" fontSize="7" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'أصل القرض' : 'Principal'}
            </text>
            <text x="35" y="27" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              {principalSharePct.toFixed(1)}%
            </text>

            <rect x="80" y="0" width="70" height="34" rx="4" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
            <text x="115" y="13" fill="#fde68a" fontSize="7" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'إجمالي الفوائد' : 'Interest'}
            </text>
            <text x="115" y="27" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              {interestSharePct.toFixed(1)}%
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

const CapitalBudgetingNpvProfileSchematic: React.FC<{
  initialOutlay: number;
  cashFlows: number[];
  discountedFlows: number[];
  hurdleRatePct: number;
  npv: number;
  irrPct: number;
  paybackYears: number;
  isAccepted: boolean;
  npvCurve: Array<{ ratePct: number; npv: number }>;
  isArabic: boolean;
  isLight?: boolean;
}> = ({
  initialOutlay,
  discountedFlows,
  hurdleRatePct,
  npv,
  irrPct,
  paybackYears,
  isAccepted,
  npvCurve,
  isArabic,
  isLight = false,
}) => {
  const maxNpv = Math.max(initialOutlay * 1.2, ...npvCurve.map((p) => p.npv));
  const minNpv = -initialOutlay * 0.9;
  const zeroY = 35 + ((maxNpv - 0) / (maxNpv - minNpv)) * 185;

  const pointsStr = npvCurve
    .map((pt) => {
      const x = 45 + (pt.ratePct / 32) * 395;
      const y = 35 + ((maxNpv - pt.npv) / (maxNpv - minNpv)) * 185;
      return `${Math.max(45, Math.min(440, x))},${Math.max(35, Math.min(220, y))}`;
    })
    .join(' ');

  const irrX = 45 + (Math.min(32, Math.max(0, irrPct)) / 32) * 395;
  const waccX = 45 + (Math.min(32, Math.max(0, hurdleRatePct)) / 32) * 395;
  const waccY = 35 + ((maxNpv - npv) / (maxNpv - minNpv)) * 185;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-[11px] font-bold text-slate-400 mb-2 font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        {isArabic
          ? 'منحنى حساسية صافي القيمة الحالية ومخطط شلال التدفقات المخصومة (NPV Profile & DCF Waterfall)'
          : 'NPV Profile Sensitivity Curve & DCF Cash Flow Waterfall'}
      </div>
      <svg viewBox="0 0 760 280" className="w-full max-w-[760px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="npvCreationGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="npvDestructionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e11d48" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="npvLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>

        {/* Viewport Box */}
        <rect
          x="10"
          y="10"
          width="740"
          height="260"
          rx="12"
          fill={isLight ? '#f8fafc' : '#070b14'}
          stroke={isLight ? '#cbd5e1' : '#1e293b'}
          strokeWidth="1.5"
        />

        {/* LEFT PANEL: NPV PROFILE CURVE */}
        <rect x="45" y="35" width="395" height={Math.max(0, zeroY - 35)} fill="url(#npvCreationGrad)" />
        <rect x="45" y={zeroY} width="395" height={Math.max(0, 220 - zeroY)} fill="url(#npvDestructionGrad)" />

        <line x1="45" y1={zeroY} x2="440" y2={zeroY} stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="45" y1="35" x2="45" y2="220" stroke="#475569" strokeWidth="1.5" />

        {[0, 8, 16, 24, 32].map((r) => {
          const gx = 45 + (r / 32) * 395;
          return (
            <g key={r}>
              <line x1={gx} y1="35" x2={gx} y2="220" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
              <text x={gx} y="233" fill="#64748b" fontSize="7.5" textAnchor="middle">
                {r}%
              </text>
            </g>
          );
        })}

        <polyline fill="none" stroke="url(#npvLineGrad)" strokeWidth="3" points={pointsStr} />

        <text x="442" y={zeroY + 3} fill="#38bdf8" fontSize="8" fontWeight="bold">
          NPV = 0
        </text>

        {/* IRR Marker & Drop Line */}
        <line x1={irrX} y1={zeroY} x2={irrX} y2="220" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx={irrX} cy={zeroY} r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
        <g transform={`translate(${Math.min(390, Math.max(70, irrX))}, ${zeroY - 24})`}>
          <rect x="-42" y="-12" width="84" height="20" rx="3" fill="#022c22" stroke="#10b981" strokeWidth="1" />
          <text x="0" y="1" fill="#6ee7b7" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            IRR: {irrPct.toFixed(1)}%
          </text>
        </g>

        {/* Current WACC Point */}
        <line x1={waccX} y1={waccY} x2={waccX} y2="220" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2 2" />
        <circle cx={waccX} cy={waccY} r="5.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
        <g transform={`translate(${Math.min(390, Math.max(70, waccX))}, ${Math.max(48, waccY - 18)})`}>
          <rect x="-48" y="-10" width="96" height="18" rx="3" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
          <text x="0" y="2" fill="#fde68a" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            WACC: {hurdleRatePct}% | {npv >= 0 ? '+' : ''}{(npv / 1000).toFixed(0)}k
          </text>
        </g>

        <text x="55" y="55" fill="#14b8a6" fontSize="8" fontWeight="bold" opacity="0.8">
          {isArabic ? 'نطاق تعظيم الثروة (NPV > 0)' : 'Value Creation Zone (NPV > 0)'}
        </text>
        <text x="55" y="210" fill="#f43f5e" fontSize="8" fontWeight="bold" opacity="0.8">
          {isArabic ? 'نطاق تدمير الثروة (NPV < 0)' : 'Value Destruction Zone (NPV < 0)'}
        </text>

        {/* RIGHT PANEL: DCF WATERFALL DIAGRAM */}
        <g transform="translate(485, 35)">
          <text x="0" y="0" fill="#94a3b8" fontSize="8" fontWeight="bold">
            {isArabic ? 'شلال التدفقات المخصومة (DCF Waterfall)' : 'Discounted Cash Flows Waterfall'}
          </text>

          <g transform="translate(10, 40)">
            <rect x="0" y="0" width="28" height="110" rx="3" fill="#e11d48" opacity="0.85" />
            <text x="14" y="-5" fill="#fca5a5" fontSize="7" fontWeight="bold" textAnchor="middle">
              CF₀
            </text>
            <text x="14" y="55" fill="#ffffff" fontSize="7" fontFamily="monospace" transform="rotate(-90 14 55)" textAnchor="middle">
              -{(initialOutlay / 1000).toFixed(0)}k
            </text>
          </g>

          {discountedFlows.slice(0, 5).map((pv, i) => {
            const barHeight = Math.min(110, (pv / (initialOutlay || 1)) * 140);
            return (
              <g key={i} transform={`translate(${48 + i * 36}, 40)`}>
                <rect x="0" y={110 - barHeight} width="28" height={barHeight} rx="3" fill="#0d9488" opacity="0.85" />
                <text x="14" y="-5" fill="#5eead4" fontSize="7" fontWeight="bold" textAnchor="middle">
                  Y{i + 1}
                </text>
                <text x="14" y={110 - barHeight / 2 + 3} fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle">
                  +{(pv / 1000).toFixed(0)}k
                </text>
              </g>
            );
          })}

          <g transform="translate(115, 185)">
            <rect
              x="-110"
              y="-12"
              width="220"
              height="26"
              rx="5"
              fill={isAccepted ? '#022c22' : '#4c0519'}
              stroke={isAccepted ? '#10b981' : '#f43f5e'}
              strokeWidth="1.2"
            />
            <text
              x="0"
              y="4"
              fill={isAccepted ? '#6ee7b7' : '#fca5a5'}
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              {isAccepted
                ? (isArabic ? `مقبول استثمارياً (فترة الاسترداد: ${paybackYears.toFixed(1)} سنة)` : `Economically Accepted (Payback: ${paybackYears.toFixed(1)} yrs)`)
                : (isArabic ? 'مشروع مرفوض (العائد أقل من تكلفة رأس المال)' : 'Project Rejected (IRR < WACC)')}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

const CreditScorePentagonRadarSchematic: React.FC<{
  characterScore: number;
  capacityScore: number;
  capitalScore: number;
  collateralScore: number;
  conditionsScore: number;
  compositeScore: number;
  ratingGrade: string;
  isApproved: boolean;
  depositMultiplier: number;
  carPct: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({
  characterScore,
  capacityScore,
  capitalScore,
  collateralScore,
  conditionsScore,
  compositeScore,
  ratingGrade,
  isApproved,
  depositMultiplier,
  carPct,
  isArabic,
  isLight = false,
}) => {
  const angles = [-Math.PI / 2, -Math.PI / 10, (3 * Math.PI) / 10, (7 * Math.PI) / 10, (11 * Math.PI) / 10];
  const maxR = 85;

  const scores = [characterScore, capacityScore, capitalScore, collateralScore, conditionsScore];
  const borrowerPoints = scores
    .map((s, idx) => {
      const r = (s / 100) * maxR;
      const x = r * Math.cos(angles[idx]);
      const y = r * Math.sin(angles[idx]);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const iScore = 300 + (compositeScore / 100) * 550;
  const gaugeAngleDeg = 180 - (compositeScore / 100) * 180;
  const needleRad = (gaugeAngleDeg * Math.PI) / 180;
  const needleLen = 70;
  const needleX = needleLen * Math.cos(needleRad);
  const needleY = -needleLen * Math.sin(needleRad);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-[11px] font-bold text-slate-400 mb-2 font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        {isArabic
          ? 'رادار المعايير الخمسة للجدارة الائتمانية ومؤشر الجودة المصرفية (5 Cs Radar & I-Score Gauge)'
          : '5 Cs Credit Assessment Radar & Egyptian I-Score Terminal'}
      </div>
      <svg viewBox="0 0 760 280" className="w-full max-w-[760px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="radarAreaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gaugeArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <rect
          x="10"
          y="10"
          width="740"
          height="260"
          rx="12"
          fill={isLight ? '#f8fafc' : '#070b14'}
          stroke={isLight ? '#cbd5e1' : '#1e293b'}
          strokeWidth="1.5"
        />

        {/* LEFT SECTION: 5 Cs RADAR */}
        <g transform="translate(210, 140)">
          {[0.2, 0.4, 0.6, 0.8, 1.0].map((frac) => {
            const pts = angles
              .map((a) => {
                const r = frac * maxR;
                return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`;
              })
              .join(' ');
            return (
              <polygon
                key={frac}
                points={pts}
                fill="none"
                stroke={isLight ? '#cbd5e1' : '#1e293b'}
                strokeWidth={frac === 1.0 ? '1.5' : '1'}
                strokeDasharray={frac === 0.6 ? '3 2' : 'none'}
              />
            );
          })}

          {angles.map((a, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={(maxR * Math.cos(a)).toFixed(1)}
              y2={(maxR * Math.sin(a)).toFixed(1)}
              stroke={isLight ? '#94a3b8' : '#334155'}
              strokeWidth="1"
            />
          ))}

          <polygon points={borrowerPoints} fill="url(#radarAreaGrad)" stroke="#2dd4bf" strokeWidth="2" />

          {scores.map((s, idx) => {
            const r = (s / 100) * maxR;
            const vx = r * Math.cos(angles[idx]);
            const vy = r * Math.sin(angles[idx]);
            return (
              <circle key={idx} cx={vx} cy={vy} r="4" fill="#2dd4bf" stroke="#0f172a" strokeWidth="1.5" />
            );
          })}

          {[
            { labelAr: 'الشخصية', labelEn: 'Character', a: angles[0], offX: 0, offY: -14 },
            { labelAr: 'القدرة', labelEn: 'Capacity', a: angles[1], offX: 20, offY: 0 },
            { labelAr: 'رأس المال', labelEn: 'Capital', a: angles[2], offX: 18, offY: 14 },
            { labelAr: 'الضمانات', labelEn: 'Collateral', a: angles[3], offX: -18, offY: 14 },
            { labelAr: 'الظروف', labelEn: 'Conditions', a: angles[4], offX: -22, offY: 0 },
          ].map((item, i) => {
            const lx = (maxR + 12) * Math.cos(item.a) + item.offX;
            const ly = (maxR + 12) * Math.sin(item.a) + item.offY;
            return (
              <text key={i} x={lx} y={ly} fill="#94a3b8" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                {isArabic ? item.labelAr : item.labelEn}
              </text>
            );
          })}
        </g>

        {/* RIGHT SECTION: I-SCORE GAUGE */}
        <g transform="translate(550, 150)">
          <path d="M -90 0 A 90 90 0 0 1 90 0" fill="none" stroke="#1e293b" strokeWidth="18" strokeLinecap="round" />
          <path d="M -90 0 A 90 90 0 0 1 90 0" fill="none" stroke="url(#gaugeArcGrad)" strokeWidth="18" strokeLinecap="round" />

          <text x="-90" y="16" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">
            300
          </text>
          <text x="0" y="-98" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">
            575
          </text>
          <text x="90" y="16" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">
            850
          </text>

          <line x1="0" y1="0" x2={needleX} y2={needleY} stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="0" cy="0" r="7" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="0" cy="0" r="3" fill="#38bdf8" />

          <text x="0" y="32" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            {Math.round(iScore)}
          </text>
          <text x="0" y="44" fill="#94a3b8" fontSize="7.5" textAnchor="middle">
            {isArabic ? 'درجة الجدارة الائتمانية المصرية (I-Score)' : 'Egyptian I-Score Benchmark'}
          </text>

          <g transform="translate(0, 62)">
            <rect x="-60" y="-10" width="120" height="20" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="0" y="3" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
              {ratingGrade}
            </text>
          </g>

          <g transform="translate(0, 95)">
            <rect
              x="-90"
              y="-12"
              width="180"
              height="24"
              rx="4"
              fill={isApproved ? '#022c22' : '#4c0519'}
              stroke={isApproved ? '#10b981' : '#f43f5e'}
              strokeWidth="1.5"
            />
            <text x="0" y="3" fill={isApproved ? '#6ee7b7' : '#fca5a5'} fontSize="8.5" fontWeight="bold" textAnchor="middle">
              {isApproved
                ? (isArabic ? '✓ موافقة ائتمانية معتمدة' : '✓ CREDIT FACILITY APPROVED')
                : (isArabic ? '✗ ائتمان مرفوض (مخاطر عالية)' : '✗ CREDIT FACILITY REJECTED')}
            </text>
          </g>
        </g>

        <g transform="translate(380, 255)">
          <text x="0" y="0" fill="#64748b" fontSize="7.5" textAnchor="middle" fontFamily="monospace">
            {isArabic
              ? `كفاية رأس المال بازل ٣: ${carPct.toFixed(1)}% (المعيار: ≥ ١٠.٥%) • مضاعف الائتمان المصرفي: ${depositMultiplier.toFixed(1)}x`
              : `Basel III CAR: ${carPct.toFixed(1)}% (Benchmark: ≥ 10.5%) • Bank Credit Multiplier: ${depositMultiplier.toFixed(1)}x`}
          </text>
        </g>
      </svg>
    </div>
  );
};

const MarkowitzEfficientFrontierSchematic: React.FC<{
  frontierPoints: Array<{ wA: number; ret: number; risk: number }>;
  expectedReturn: number;
  volatilitySigma: number;
  sharpeRatio: number;
  capmRequiredReturn: number;
  alphaSpread: number;
  assetA: FinancialAsset;
  assetB: FinancialAsset;
  weightA: number;
  correlationRho: number;
  riskFreeRate: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({
  frontierPoints,
  expectedReturn,
  volatilitySigma,
  sharpeRatio,
  capmRequiredReturn,
  alphaSpread,
  assetA,
  assetB,
  weightA,
  correlationRho,
  riskFreeRate,
  isArabic,
  isLight = false,
}) => {
  const scaleX = (risk: number) => 50 + ((Math.max(5, Math.min(35, risk)) - 5) / 30) * 470;
  const scaleY = (ret: number) => 220 - ((Math.max(6, Math.min(28, ret)) - 6) / 22) * 185;

  const frontierPointsStr = frontierPoints
    .map((pt) => `${scaleX(pt.risk).toFixed(1)},${scaleY(pt.ret).toFixed(1)}`)
    .join(' ');

  const curX = scaleX(volatilitySigma);
  const curY = scaleY(expectedReturn);

  const assetAx = scaleX(assetA.volatilityPct);
  const assetAy = scaleY(assetA.expectedReturnPct);
  const assetBx = scaleX(assetB.volatilityPct);
  const assetBy = scaleY(assetB.expectedReturnPct);

  const rfY = scaleY(riskFreeRate);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-[11px] font-bold text-slate-400 mb-2 font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        {isArabic
          ? 'الحد الكفء لماركويتز وخط تخصيص رأس المال (Markowitz Efficient Frontier & CAL)'
          : 'Markowitz Efficient Frontier, Diversification Geometry & CAL'}
      </div>
      <svg viewBox="0 0 760 280" className="w-full max-w-[760px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="frontierLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        <rect
          x="10"
          y="10"
          width="740"
          height="260"
          rx="12"
          fill={isLight ? '#f8fafc' : '#070b14'}
          stroke={isLight ? '#cbd5e1' : '#1e293b'}
          strokeWidth="1.5"
        />

        {/* Coordinate System Grid */}
        {[5, 10, 15, 20, 25, 30, 35].map((rx) => {
          const gx = scaleX(rx);
          return (
            <g key={rx}>
              <line x1={gx} y1="35" x2={gx} y2="220" stroke={isLight ? '#e2e8f0' : '#1e293b'} strokeWidth="1" strokeDasharray="2 2" />
              <text x={gx} y="233" fill="#64748b" fontSize="7.5" textAnchor="middle">
                {rx}%
              </text>
            </g>
          );
        })}

        {[8, 12, 16, 20, 24, 28].map((ry) => {
          const gy = scaleY(ry);
          return (
            <g key={ry}>
              <line x1="50" y1={gy} x2="520" y2={gy} stroke={isLight ? '#e2e8f0' : '#1e293b'} strokeWidth="1" strokeDasharray="2 2" />
              <text x="44" y={gy + 3} fill="#64748b" fontSize="7.5" textAnchor="end">
                {ry}%
              </text>
            </g>
          );
        })}

        <line x1="50" y1="220" x2="530" y2="220" stroke="#475569" strokeWidth="1.5" />
        <line x1="50" y1="25" x2="50" y2="220" stroke="#475569" strokeWidth="1.5" />
        <text x="532" y="223" fill="#94a3b8" fontSize="8" fontWeight="bold">
          {isArabic ? 'المخاطرة σ' : 'Risk (σ)'}
        </text>
        <text x="50" y="20" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'العائد E(R)' : 'Return E(R)'}
        </text>

        {/* Straight dashed line between A and B */}
        <line x1={assetAx} y1={assetAy} x2={assetBx} y2={assetBy} stroke="#64748b" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />

        <polyline fill="none" stroke="url(#frontierLineGrad)" strokeWidth="3" points={frontierPointsStr} />

        {/* Capital Allocation Line (CAL) */}
        <line
          x1="50"
          y1={rfY}
          x2="480"
          y2={scaleY(riskFreeRate + (sharpeRatio || 0.8) * 25)}
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.85"
        />
        <text x="54" y={rfY - 4} fill="#f59e0b" fontSize="7.5" fontWeight="bold">
          Rf = {riskFreeRate}%
        </text>

        {/* Marker for Asset A */}
        <circle cx={assetAx} cy={assetAy} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
        <text x={assetAx + 8} y={assetAy + 3} fill="#38bdf8" fontSize="7.5" fontWeight="bold">
          {assetA.ticker} ({(weightA * 100).toFixed(0)}%)
        </text>

        {/* Marker for Asset B */}
        <circle cx={assetBx} cy={assetBy} r="5" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
        <text x={assetBx + 8} y={assetBy + 3} fill="#a855f7" fontSize="7.5" fontWeight="bold">
          {assetB.ticker} ({((1 - weightA) * 100).toFixed(0)}%)
        </text>

        {/* Current User Portfolio Point */}
        <circle cx={curX} cy={curY} r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
        <circle cx={curX} cy={curY} r="12" fill="#f59e0b" opacity="0.25" />
        <g transform={`translate(${Math.min(460, curX + 15)}, ${Math.max(45, curY - 10)})`}>
          <rect x="0" y="-12" width="105" height="24" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="6" y="2" fill="#fde68a" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
            E(R): {expectedReturn.toFixed(1)}% | σ: {volatilitySigma.toFixed(1)}%
          </text>
        </g>

        {/* Diversification Curvature Callout */}
        <g transform="translate(180, 50)">
          <text x="0" y="0" fill="#2dd4bf" fontSize="7.5" fontWeight="bold">
            {isArabic
              ? `أثر التنويع الرياضي (معامل الارتباط ρ = ${correlationRho.toFixed(2)})`
              : `Diversification Convexity Benefit (ρ = ${correlationRho.toFixed(2)})`}
          </text>
          <text x="0" y="11" fill="#94a3b8" fontSize="7">
            {isArabic
              ? 'انحناء المنحنى لليسار يخفض المخاطر غير المنتظمة دون التضحية بالعائد'
              : 'Curve bends leftward, eliminating unsystematic risk without sacrificing return'}
          </text>
        </g>

        {/* RIGHT PANEL: CAPM SML & ALPHA SPREAD */}
        <g transform="translate(560, 40)">
          <text x="0" y="0" fill="#94a3b8" fontSize="8" fontWeight="bold">
            {isArabic ? 'تسعير الأصول الرأسمالية (CAPM SML)' : 'CAPM Asset Pricing Model'}
          </text>

          <g transform="translate(0, 20)">
            <rect x="0" y="0" width="165" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="12" y="15" fill="#94a3b8" fontSize="7">
              {isArabic ? 'العائد المطلوب (CAPM Required):' : 'CAPM Required Return:'}
            </text>
            <text x="12" y="32" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
              {capmRequiredReturn.toFixed(2)}%
            </text>
          </g>

          <g transform="translate(0, 72)">
            <rect x="0" y="0" width="165" height="42" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
            <text x="12" y="15" fill="#94a3b8" fontSize="7">
              {isArabic ? 'العائد المتوقع للمحفظة E(Rp):' : 'Portfolio Expected Return:'}
            </text>
            <text x="12" y="32" fill="#10b981" fontSize="12" fontWeight="bold" fontFamily="monospace">
              {expectedReturn.toFixed(2)}%
            </text>
          </g>

          <g transform="translate(0, 124)">
            <rect
              x="0"
              y="0"
              width="165"
              height="48"
              rx="6"
              fill={alphaSpread >= 0 ? '#022c22' : '#4c0519'}
              stroke={alphaSpread >= 0 ? '#10b981' : '#f43f5e'}
              strokeWidth="1.2"
            />
            <text x="12" y="15" fill="#94a3b8" fontSize="7">
              {isArabic ? 'عائد ألفا الفائض (Jensen Alpha):' : "Jensen's Alpha Spread:"}
            </text>
            <text
              x="12"
              y="33"
              fill={alphaSpread >= 0 ? '#6ee7b7' : '#fca5a5'}
              fontSize="13"
              fontWeight="bold"
              fontFamily="monospace"
            >
              {alphaSpread >= 0 ? '+' : ''}{alphaSpread.toFixed(2)}%
            </text>
            <text x="12" y="44" fill={alphaSpread >= 0 ? '#34d399' : '#f87171'} fontSize="6.5">
              {alphaSpread >= 0
                ? (isArabic ? 'أداء متفوق فوق خط SML' : 'Outperforming SML Line')
                : (isArabic ? 'عائد دون المستوى المطلوب' : 'Sub-market Return')}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const CommercialFinanceStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialStation = 'financial_statements',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeStation, setActiveStation] = useState<CommercialStation>(initialStation);

  // -------------------------------------------------------------
  // STATION 1: Financial Statements & Ratio Analysis
  // -------------------------------------------------------------
  const [selectedFsPreset, setSelectedFsPreset] = useState<FinancialStatementPreset>(FINANCIAL_STATEMENT_PRESETS[0]);
  const [cashVal, setCashVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].cash);
  const [arVal, setArVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].accountsReceivable);
  const [invVal, setInvVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].inventory);
  const [equipGrossVal, setEquipGrossVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].equipmentGross);
  const [accumDepVal, setAccumDepVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].accumulatedDepreciation);
  const [apVal, setApVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].accountsPayable);
  const [stNotesVal, setStNotesVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].shortTermNotes);
  const [ltDebtVal, setLtDebtVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].longTermDebt);
  const [salesVal, setSalesVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].salesRevenue);
  const [cogsVal, setCogsVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].costOfGoodsSold);
  const [opexVal, setOpexVal] = useState<number>(FINANCIAL_STATEMENT_PRESETS[0].operatingExpenses);

  const handleApplyFsPreset = (preset: FinancialStatementPreset) => {
    setSelectedFsPreset(preset);
    setCashVal(preset.cash);
    setArVal(preset.accountsReceivable);
    setInvVal(preset.inventory);
    setEquipGrossVal(preset.equipmentGross);
    setAccumDepVal(preset.accumulatedDepreciation);
    setApVal(preset.accountsPayable);
    setStNotesVal(preset.shortTermNotes);
    setLtDebtVal(preset.longTermDebt);
    setSalesVal(preset.salesRevenue);
    setCogsVal(preset.costOfGoodsSold);
    setOpexVal(preset.operatingExpenses);
  };

  const fsMetrics = useMemo(() => {
    const netEquipment = Math.max(0, equipGrossVal - accumDepVal);
    const currentAssets = cashVal + arVal + invVal;
    const totalAssets = currentAssets + netEquipment;

    const currentLiabilities = apVal + stNotesVal;
    const totalLiabilities = currentLiabilities + ltDebtVal;

    const grossProfit = salesVal - cogsVal;
    const operatingProfitEBIT = grossProfit - opexVal;
    const taxExpense = operatingProfitEBIT > 0 ? operatingProfitEBIT * (selectedFsPreset.taxRatePct / 100) : 0;
    const netIncome = operatingProfitEBIT - taxExpense;

    const retainedEarningsEnd = selectedFsPreset.retainedEarningsBeginning + netIncome;
    const totalEquity = selectedFsPreset.paidInCapital + retainedEarningsEnd;

    // Ratios
    const currentRatio = currentLiabilities > 0 ? currentAssets / currentLiabilities : 0;
    const quickRatio = currentLiabilities > 0 ? (cashVal + arVal) / currentLiabilities : 0;
    const debtToEquity = totalEquity > 0 ? totalLiabilities / totalEquity : 0;
    const grossMarginPct = salesVal > 0 ? (grossProfit / salesVal) * 100 : 0;
    const netMarginPct = salesVal > 0 ? (netIncome / salesVal) * 100 : 0;
    const roePct = totalEquity > 0 ? (netIncome / totalEquity) * 100 : 0;
    const accountingBalanceDiff = totalAssets - (totalLiabilities + totalEquity);

    return {
      currentAssets,
      netEquipment,
      totalAssets,
      currentLiabilities,
      totalLiabilities,
      grossProfit,
      operatingProfitEBIT,
      taxExpense,
      netIncome,
      totalEquity,
      currentRatio,
      quickRatio,
      debtToEquity,
      grossMarginPct,
      netMarginPct,
      roePct,
      accountingBalanceDiff,
    };
  }, [
    cashVal,
    arVal,
    invVal,
    equipGrossVal,
    accumDepVal,
    apVal,
    stNotesVal,
    ltDebtVal,
    salesVal,
    cogsVal,
    opexVal,
    selectedFsPreset,
  ]);

  // -------------------------------------------------------------
  // STATION 2: Compound Interest & Loan Amortization
  // -------------------------------------------------------------
  const [selectedLoan, setSelectedLoan] = useState<LoanPreset>(LOAN_PRESETS[0]);
  const [loanPrincipal, setLoanPrincipal] = useState<number>(LOAN_PRESETS[0].principal);
  const [loanRatePct, setLoanRatePct] = useState<number>(LOAN_PRESETS[0].annualInterestRatePct);
  const [loanYears, setLoanYears] = useState<number>(LOAN_PRESETS[0].termYears);
  const [compoundingFreq, setCompoundingFreq] = useState<number>(LOAN_PRESETS[0].compoundingFrequency);

  const handleApplyLoanPreset = (preset: LoanPreset) => {
    setSelectedLoan(preset);
    setLoanPrincipal(preset.principal);
    setLoanRatePct(preset.annualInterestRatePct);
    setLoanYears(preset.termYears);
    setCompoundingFreq(preset.compoundingFrequency);
  };

  const loanAmortizationData = useMemo(() => {
    const totalPeriods = loanYears * compoundingFreq;
    const periodicRate = loanRatePct / 100 / compoundingFreq;

    // Monthly/Periodic Installment R = P * [r / (1 - (1+r)^-n)]
    const periodicInstallment =
      periodicRate > 0
        ? loanPrincipal * (periodicRate / (1 - Math.pow(1 + periodicRate, -totalPeriods)))
        : loanPrincipal / totalPeriods;

    const schedule = [];
    let currentBalance = loanPrincipal;
    let totalInterestPaid = 0;

    // We generate summary schedule rows (first 12 periods or representative periods)
    for (let p = 1; p <= totalPeriods; p++) {
      const interestPortion = currentBalance * periodicRate;
      const principalPortion = periodicInstallment - interestPortion;
      currentBalance = Math.max(0, currentBalance - principalPortion);
      totalInterestPaid += interestPortion;

      if (p <= 12 || p === totalPeriods || p % compoundingFreq === 0) {
        schedule.push({
          period: p,
          beginningBalance: currentBalance + principalPortion,
          payment: periodicInstallment,
          interest: interestPortion,
          principal: principalPortion,
          endingBalance: currentBalance,
        });
      }
    }

    const totalCostOfLoan = loanPrincipal + totalInterestPaid;
    const effectiveAnnualRatePct = (Math.pow(1 + periodicRate, compoundingFreq) - 1) * 100;

    return {
      totalPeriods,
      periodicInstallment,
      totalInterestPaid,
      totalCostOfLoan,
      effectiveAnnualRatePct,
      schedule,
    };
  }, [loanPrincipal, loanRatePct, loanYears, compoundingFreq]);

  // -------------------------------------------------------------
  // STATION 3: Capital Budgeting & DCF Project Valuation
  // -------------------------------------------------------------
  const [selectedProject, setSelectedProject] = useState<CapitalProjectPreset>(CAPITAL_PROJECT_PRESETS[0]);
  const [initialOutlay, setInitialOutlay] = useState<number>(CAPITAL_PROJECT_PRESETS[0].initialOutlay);
  const [cashFlows, setCashFlows] = useState<number[]>([...CAPITAL_PROJECT_PRESETS[0].cashFlows]);
  const [hurdleRatePct, setHurdleRatePct] = useState<number>(CAPITAL_PROJECT_PRESETS[0].hurdleRateWaccPct);

  const handleApplyProjectPreset = (preset: CapitalProjectPreset) => {
    setSelectedProject(preset);
    setInitialOutlay(preset.initialOutlay);
    setCashFlows([...preset.cashFlows]);
    setHurdleRatePct(preset.hurdleRateWaccPct);
  };

  const capitalBudgetingMetrics = useMemo(() => {
    const r = hurdleRatePct / 100;
    let sumPvInflows = 0;
    const discountedFlows: number[] = [];

    cashFlows.forEach((cf, idx) => {
      const pv = cf / Math.pow(1 + r, idx + 1);
      discountedFlows.push(pv);
      sumPvInflows += pv;
    });

    const npv = sumPvInflows - initialOutlay;
    const profitabilityIndex = initialOutlay > 0 ? sumPvInflows / initialOutlay : 0;

    // Numerical bisection to solve for IRR
    let lowRate = 0.0;
    let highRate = 1.0;
    let irr = 0.0;

    for (let iter = 0; iter < 40; iter++) {
      const midRate = (lowRate + highRate) / 2;
      let npvMid = -initialOutlay;
      cashFlows.forEach((cf, idx) => {
        npvMid += cf / Math.pow(1 + midRate, idx + 1);
      });

      if (npvMid > 0) {
        lowRate = midRate;
      } else {
        highRate = midRate;
      }
      irr = midRate;
    }

    const irrPct = irr * 100;

    // Payback calculation
    let cumulative = 0;
    let paybackYears = 0;
    for (let i = 0; i < cashFlows.length; i++) {
      if (cumulative + cashFlows[i] >= initialOutlay) {
        const remaining = initialOutlay - cumulative;
        paybackYears = i + (cashFlows[i] > 0 ? remaining / cashFlows[i] : 0);
        break;
      }
      cumulative += cashFlows[i];
      if (i === cashFlows.length - 1) paybackYears = cashFlows.length;
    }

    // NPV Profile curve points from 0% to 30% discount rates
    const npvCurve: { ratePct: number; npv: number }[] = [];
    for (let rate = 0; rate <= 32; rate += 2) {
      const rateDec = rate / 100;
      let curveNpv = -initialOutlay;
      cashFlows.forEach((cf, idx) => {
        curveNpv += cf / Math.pow(1 + rateDec, idx + 1);
      });
      npvCurve.push({ ratePct: rate, npv: curveNpv });
    }

    const isAccepted = npv > 0 && irrPct > hurdleRatePct;

    return {
      npv,
      irrPct,
      profitabilityIndex,
      paybackYears,
      isAccepted,
      discountedFlows,
      npvCurve,
    };
  }, [initialOutlay, cashFlows, hurdleRatePct]);

  // -------------------------------------------------------------
  // STATION 4: Commercial Banking & Credit Risk Engine
  // -------------------------------------------------------------
  const [selectedBorrower, setSelectedBorrower] = useState<BorrowerCreditProfile>(BORROWER_PROFILES[0]);
  const [characterScore, setCharacterScore] = useState<number>(BORROWER_PROFILES[0].characterScore);
  const [capacityScore, setCapacityScore] = useState<number>(BORROWER_PROFILES[0].capacityScore);
  const [capitalScore, setCapitalScore] = useState<number>(BORROWER_PROFILES[0].capitalScore);
  const [collateralScore, setCollateralScore] = useState<number>(BORROWER_PROFILES[0].collateralScore);
  const [conditionsScore, setConditionsScore] = useState<number>(BORROWER_PROFILES[0].conditionsScore);

  // Bank regulatory params
  const [statutoryReserveRatioPct, setStatutoryReserveRatioPct] = useState<number>(18.0); // % CBE Reserve Ratio
  const primaryDepositEgp = 2000000; // 2 Million EGP
  const bankRegulatoryCapitalEgp = 140000000; // 140M EGP Tier 1+2
  const riskWeightedAssetsEgp = 1000000000; // 1,000M EGP RWA

  const handleApplyBorrowerPreset = (preset: BorrowerCreditProfile) => {
    setSelectedBorrower(preset);
    setCharacterScore(preset.characterScore);
    setCapacityScore(preset.capacityScore);
    setCapitalScore(preset.capitalScore);
    setCollateralScore(preset.collateralScore);
    setConditionsScore(preset.conditionsScore);
  };

  const bankingMetrics = useMemo(() => {
    // 5 Cs Weighted Scoring
    // Weights: Character 25%, Capacity 25%, Capital 20%, Collateral 15%, Conditions 15%
    const compositeScore =
      characterScore * 0.25 +
      capacityScore * 0.25 +
      capitalScore * 0.2 +
      collateralScore * 0.15 +
      conditionsScore * 0.15;

    let ratingGrade = 'CCC';
    let isApproved = false;
    let riskRecommendationEn = '';
    let riskRecommendationAr = '';

    if (compositeScore >= 90) {
      ratingGrade = 'AAA (Prime)';
      isApproved = true;
      riskRecommendationEn = 'Unconditional approval. Prime corporate facility with lowest statutory loan-loss provision.';
      riskRecommendationAr = 'موافقة ائتمانية فورية غير مشروطة. عميل نخبة بأدنى مخصص للمخاطر وفق تعليمات البنك المركزي.';
    } else if (compositeScore >= 80) {
      ratingGrade = 'AA (High Grade)';
      isApproved = true;
      riskRecommendationEn = 'Approval recommended. Standard covenants and positive cash flow pledge required.';
      riskRecommendationAr = 'يوصى بالموافقة مع وضع شروط قياسية لتحويل مستحقات التدفقات النقدية التشغيلية للبنك.';
    } else if (compositeScore >= 70) {
      ratingGrade = 'BBB (Investment Grade)';
      isApproved = true;
      riskRecommendationEn = 'Conditional approval. Requires supplementary personal guarantees and 125% collateral pledge.';
      riskRecommendationAr = 'موافقة مشروطة بتقديم كفالات شخصية وضمانات عينية عقارية لا تقل عن ١٢٥٪ من قيمة التمويل.';
    } else {
      ratingGrade = 'Non-Investment Grade';
      isApproved = false;
      riskRecommendationEn = 'Rejected / High Risk. Substandard debt servicing capacity; elevated default probability.';
      riskRecommendationAr = 'رفض الائتمان لارتفاع المخاطر وضعف التغطية النقدية لفوائد وأقساط الدين المصرفي.';
    }

    // Monetary Policy Multiplier
    const reserveDec = statutoryReserveRatioPct / 100;
    const depositMultiplier = reserveDec > 0 ? 1 / reserveDec : 0;
    const maxSystemCreditExpansion = primaryDepositEgp * (depositMultiplier - 1);

    // Basel III CAR
    const carPct = riskWeightedAssetsEgp > 0 ? (bankRegulatoryCapitalEgp / riskWeightedAssetsEgp) * 100 : 0;
    const meetsBaselThree = carPct >= 10.5;

    return {
      compositeScore,
      ratingGrade,
      isApproved,
      riskRecommendationEn,
      riskRecommendationAr,
      depositMultiplier,
      maxSystemCreditExpansion,
      carPct,
      meetsBaselThree,
    };
  }, [
    characterScore,
    capacityScore,
    capitalScore,
    collateralScore,
    conditionsScore,
    statutoryReserveRatioPct,
    primaryDepositEgp,
    bankRegulatoryCapitalEgp,
    riskWeightedAssetsEgp,
  ]);

  // -------------------------------------------------------------
  // STATION 5: Portfolio Theory, CAPM & Financial Risk Analytics
  // -------------------------------------------------------------
  const [assetA, setAssetA] = useState<FinancialAsset>(FINANCIAL_ASSETS[0]); // CIB
  const [assetB, setAssetB] = useState<FinancialAsset>(FINANCIAL_ASSETS[1]); // Telecom Egypt
  const [weightA, setWeightA] = useState<number>(0.6); // 60% Asset A
  const [correlationRho, setCorrelationRho] = useState<number>(0.15); // Correlation rho
  const riskFreeRatePct = 9.0; // 9% Treasury bills
  const marketReturnPct = 17.0; // 17% EGX30 index return

  const portfolioMetrics = useMemo(() => {
    const wA = weightA;
    const wB = 1 - weightA;

    const rA = assetA.expectedReturnPct;
    const rB = assetB.expectedReturnPct;

    const sigA = assetA.volatilityPct;
    const sigB = assetB.volatilityPct;

    const expectedReturn = wA * rA + wB * rB;

    // Variance: wA^2 * sigA^2 + wB^2 * sigB^2 + 2*wA*wB*sigA*sigB*rho
    const variance =
      Math.pow(wA, 2) * Math.pow(sigA, 2) +
      Math.pow(wB, 2) * Math.pow(sigB, 2) +
      2 * wA * wB * sigA * sigB * correlationRho;
    const volatilitySigma = Math.sqrt(Math.max(0, variance));

    // Portfolio Beta
    const portfolioBeta = wA * assetA.beta + wB * assetB.beta;

    // CAPM Required Return on Portfolio: Rf + Beta * (Rm - Rf)
    const capmRequiredReturn = riskFreeRatePct + portfolioBeta * (marketReturnPct - riskFreeRatePct);
    const alphaSpread = expectedReturn - capmRequiredReturn;

    // Sharpe Ratio: (E(Rp) - Rf) / Sigma_p
    const sharpeRatio = volatilitySigma > 0 ? (expectedReturn - riskFreeRatePct) / volatilitySigma : 0;

    // Generate 11 points on the Efficient Frontier by varying wA from 0 to 1
    const frontierPoints: { wA: number; ret: number; risk: number }[] = [];
    for (let w = 0; w <= 10; w++) {
      const weight = w / 10;
      const ptRet = weight * rA + (1 - weight) * rB;
      const ptVar =
        Math.pow(weight, 2) * Math.pow(sigA, 2) +
        Math.pow(1 - weight, 2) * Math.pow(sigB, 2) +
        2 * weight * (1 - weight) * sigA * sigB * correlationRho;
      frontierPoints.push({
        wA: weight,
        ret: ptRet,
        risk: Math.sqrt(Math.max(0, ptVar)),
      });
    }

    return {
      wA,
      wB,
      expectedReturn,
      volatilitySigma,
      portfolioBeta,
      capmRequiredReturn,
      alphaSpread,
      sharpeRatio,
      frontierPoints,
    };
  }, [assetA, assetB, weightA, correlationRho, riskFreeRatePct, marketReturnPct]);

  // CSV Data Table Exporter
  const handleExportCsv = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    if (activeStation === 'financial_statements') {
      csvContent += 'Metric,Value EGP\n';
      csvContent += `Total Current Assets,${fsMetrics.currentAssets}\n`;
      csvContent += `Net Plant & Equipment,${fsMetrics.netEquipment}\n`;
      csvContent += `Total Assets,${fsMetrics.totalAssets}\n`;
      csvContent += `Total Current Liabilities,${fsMetrics.currentLiabilities}\n`;
      csvContent += `Total Long-Term Debt,${ltDebtVal}\n`;
      csvContent += `Total Liabilities,${fsMetrics.totalLiabilities}\n`;
      csvContent += `Total Shareholders Equity,${fsMetrics.totalEquity}\n`;
      csvContent += `Gross Profit,${fsMetrics.grossProfit}\n`;
      csvContent += `Net Income,${fsMetrics.netIncome}\n`;
      csvContent += `Current Ratio,${fsMetrics.currentRatio.toFixed(2)}\n`;
      csvContent += `Quick Ratio,${fsMetrics.quickRatio.toFixed(2)}\n`;
      csvContent += `Debt to Equity,${fsMetrics.debtToEquity.toFixed(2)}\n`;
    } else if (activeStation === 'compound_interest') {
      csvContent += 'Period,Beginning Balance,Payment,Interest,Principal,Ending Balance\n';
      loanAmortizationData.schedule.forEach((row) => {
        csvContent += `${row.period},${row.beginningBalance.toFixed(0)},${row.payment.toFixed(0)},${row.interest.toFixed(0)},${row.principal.toFixed(0)},${row.endingBalance.toFixed(0)}\n`;
      });
    } else if (activeStation === 'capital_budgeting') {
      csvContent += 'Year,Cash Flow EGP,Discounted PV EGP\n';
      csvContent += `Year 0,-${initialOutlay},-${initialOutlay}\n`;
      cashFlows.forEach((cf, idx) => {
        csvContent += `Year ${idx + 1},${cf},${capitalBudgetingMetrics.discountedFlows[idx]?.toFixed(0)}\n`;
      });
      csvContent += `NPV,${capitalBudgetingMetrics.npv.toFixed(0)}\n`;
      csvContent += `IRR %,${capitalBudgetingMetrics.irrPct.toFixed(2)}\n`;
      csvContent += `Profitability Index,${capitalBudgetingMetrics.profitabilityIndex.toFixed(2)}\n`;
    } else if (activeStation === 'banking_credit') {
      csvContent += 'Dimension,Score (0-100)\n';
      csvContent += `Character,${characterScore}\n`;
      csvContent += `Capacity,${capacityScore}\n`;
      csvContent += `Capital,${capitalScore}\n`;
      csvContent += `Collateral,${collateralScore}\n`;
      csvContent += `Conditions,${conditionsScore}\n`;
      csvContent += `Composite Score,${bankingMetrics.compositeScore.toFixed(1)}\n`;
      csvContent += `Rating Grade,${bankingMetrics.ratingGrade}\n`;
      csvContent += `Capital Adequacy Ratio CAR %,${bankingMetrics.carPct.toFixed(2)}\n`;
    } else if (activeStation === 'portfolio_risk') {
      csvContent += 'Weight Asset A,Expected Return %,Portfolio Volatility Sigma %\n';
      portfolioMetrics.frontierPoints.forEach((pt) => {
        csvContent += `${pt.wA.toFixed(2)},${pt.ret.toFixed(2)},${pt.risk.toFixed(2)}\n`;
      });
      csvContent += `Current Selected Sharpe Ratio,${portfolioMetrics.sharpeRatio.toFixed(2)}\n`;
      csvContent += `CAPM Required Return %,${portfolioMetrics.capmRequiredReturn.toFixed(2)}\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `commercial_finance_${activeStation}_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'relative w-full my-6'
      } ${
        isContrast
          ? 'bg-black text-white border-white'
          : isLight
          ? 'bg-slate-50 text-slate-900 border-slate-200 shadow-xl'
          : 'bg-[#0D1117] text-slate-100 border-slate-800 shadow-2xl'
      }`}
    >
      {/* ------------------------------------------------------------- */}
      {/* Studio Header */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
          isContrast
            ? 'border-white bg-black'
            : isLight
            ? 'border-slate-200 bg-white'
            : 'border-slate-800 bg-[#161B22]'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-500 border border-teal-500/20">
            <Landmark className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                {isArabic
                  ? 'مختبر العلوم التجارية والمحاسبة والمالية والمصرفية'
                  : 'Commercial Sciences, Financial Accounting & Banking Studio'}
              </h2>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                {isArabic ? 'معتمد رسمياً' : 'MoE Certified'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isArabic
                ? 'القوائم المالية والنسب، الفائدة المركبة والأقساط، تقييم المشاريع DCF، الائتمان المصرفي، ونموذج تسعير الأصول CAPM'
                : 'Financial Statements, Compound Interest & Annuities, DCF Valuation, Banking Credit & CAPM Portfolio'}
            </p>
          </div>
        </div>

        {/* Global Controls: Export CSV & Fullscreen */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCsv}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isArabic ? 'تصدير البيانات CSV' : 'Export CSV Data'}
          >
            <Download className="w-3.5 h-3.5 text-teal-500" />
            <span>{isArabic ? 'تصدير' : 'CSV Export'}</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isFullscreen ? (isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Station Navigation Tabs */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`flex border-b overflow-x-auto scrollbar-none px-4 ${
          isLight ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-900/50 border-slate-800'
        }`}
      >
        {[
          {
            id: 'financial_statements' as CommercialStation,
            labelEn: '1. Financial Statements & Ratios',
            labelAr: '١. القوائم المالية والتحليل بالنسب',
            icon: Scale,
          },
          {
            id: 'compound_interest' as CommercialStation,
            labelEn: '2. Compound Interest & Annuities',
            labelAr: '٢. الفائدة المركبة والأقساط والاستهلاك',
            icon: Calculator,
          },
          {
            id: 'capital_budgeting' as CommercialStation,
            labelEn: '3. Capital Budgeting & DCF',
            labelAr: '٣. تقييم المشاريع الرأسمالية (DCF)',
            icon: TrendingUp,
          },
          {
            id: 'banking_credit' as CommercialStation,
            labelEn: '4. Commercial Banking & Credit',
            labelAr: '٤. العمليات المصرفية وتقييم الائتمان',
            icon: ShieldCheck,
          },
          {
            id: 'portfolio_risk' as CommercialStation,
            labelEn: '5. Portfolio Theory & CAPM',
            labelAr: '٥. نظرية المحفظة وتسعير الأصول CAPM',
            icon: PieChart,
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeStation === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveStation(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 min-h-[44px] text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
                isActive
                  ? 'border-teal-500 text-teal-500 bg-teal-500/5'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Studio Workspace Content */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 flex-1 overflow-y-auto">
        {/* ========================================================= */}
        {/* STATION 1: Financial Statements & Ratio Analysis          */}
        {/* ========================================================= */}
        {activeStation === 'financial_statements' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold flex items-center gap-2">
                  <Scale className="w-5 h-5 text-teal-500" />
                  {isArabic
                    ? 'محطة إعداد القوائم المالية والتحليل المالي بالنسب'
                    : 'Financial Statements & Ratio Analysis Workstation'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isArabic
                    ? 'تسجيل قيود ميزان المراجعة، الميزانية العمومية، قائمة الدخل، ومؤشرات السيولة والربحية'
                    : 'Ledger T-Accounts, Classified Balance Sheet, Income Statement & Liquidity/Profitability Ratios'}
                </p>
              </div>

              {/* Presets */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{isArabic ? 'النموذج:' : 'Model:'}</span>
                <div className="flex gap-1.5">
                  {FINANCIAL_STATEMENT_PRESETS.map((pr) => (
                    <button
                      key={pr.id}
                      onClick={() => handleApplyFsPreset(pr)}
                      className={`px-3 py-1.5 min-h-[40px] text-xs rounded-lg border font-medium transition-all ${
                        selectedFsPreset.id === pr.id
                          ? 'border-teal-500 bg-teal-500/10 text-teal-400 font-bold'
                          : 'border-slate-700 hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isArabic ? pr.nameAr.split(' ')[1] : pr.nameEn.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'border-slate-800 bg-slate-900/40'}`}>
                <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'} block`}>{isArabic ? 'إجمالي الأصول' : 'Total Assets'}</span>
                <span className={`text-base font-bold tabular-nums ${isLight ? 'text-teal-700' : 'text-teal-400'}`}>
                  {fsMetrics.totalAssets.toLocaleString()} EGP
                </span>
              </div>
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'border-slate-800 bg-slate-900/40'}`}>
                <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'} block`}>{isArabic ? 'إجمالي الالتزامات' : 'Total Liabilities'}</span>
                <span className={`text-base font-bold tabular-nums ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                  {fsMetrics.totalLiabilities.toLocaleString()} EGP
                </span>
              </div>
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'border-slate-800 bg-slate-900/40'}`}>
                <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'} block`}>{isArabic ? 'حقوق الملكية' : 'Total Equity'}</span>
                <span className={`text-base font-bold tabular-nums ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                  {fsMetrics.totalEquity.toLocaleString()} EGP
                </span>
              </div>
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'border-slate-800 bg-slate-900/40'}`}>
                <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'} block`}>{isArabic ? 'صافي الدخل' : 'Net Income'}</span>
                <span className={`text-base font-bold tabular-nums ${isLight ? 'text-sky-700' : 'text-sky-400'}`}>
                  {fsMetrics.netIncome.toLocaleString()} EGP
                </span>
              </div>
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'border-slate-800 bg-slate-900/40'}`}>
                <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'} block`}>{isArabic ? 'نسبة التداول (CR)' : 'Current Ratio'}</span>
                <span className={`text-base font-bold tabular-nums ${fsMetrics.currentRatio >= 1.5 ? (isLight ? 'text-emerald-700' : 'text-emerald-400') : (isLight ? 'text-rose-700' : 'text-rose-400')}`}>
                  {fsMetrics.currentRatio.toFixed(2)}x
                </span>
              </div>
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'border-slate-800 bg-slate-900/40'}`}>
                <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'} block`}>{isArabic ? 'العائد على الملكية' : 'Return on Equity'}</span>
                <span className={`text-base font-bold tabular-nums ${isLight ? 'text-purple-700' : 'text-purple-400'}`}>
                  {fsMetrics.roePct.toFixed(1)}%
                </span>
              </div>
            </div>

            {/* High-Resolution DuPont ROE Decomposition Schematic */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'border-slate-800 bg-slate-900/40'}`}>
              <DupontPyramidSchematic
                roePct={fsMetrics.roePct}
                netMarginPct={fsMetrics.netMarginPct}
                assetTurnover={salesVal > 0 && fsMetrics.totalAssets > 0 ? salesVal / fsMetrics.totalAssets : 0}
                equityMultiplier={fsMetrics.totalEquity > 0 ? fsMetrics.totalAssets / fsMetrics.totalEquity : 1}
                netIncome={fsMetrics.netIncome}
                sales={salesVal}
                totalAssets={fsMetrics.totalAssets}
                totalEquity={fsMetrics.totalEquity}
                isArabic={isArabic}
                isLight={isLight}
              />
            </div>

            {/* Interactive Sliders & Equation Check */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Asset & Revenue Sliders */}
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'border-slate-800 bg-slate-900/30'} space-y-4`}>
                <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'} flex items-center gap-2`}>
                  <DollarSign className={`w-4 h-4 ${isLight ? 'text-teal-700' : 'text-teal-400'}`} />
                  {isArabic ? 'تعديل بنود الأصول والإيرادات' : 'Assets & Revenue Adjustments'}
                </h4>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'النقدية وما في حكمها:' : 'Cash & Equivalents:'}</span>
                    <span className="font-mono text-teal-400">{cashVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={5000000}
                    step={50000}
                    value={cashVal}
                    onChange={(e) => setCashVal(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'العملاء وحسابات القبض:' : 'Accounts Receivable:'}</span>
                    <span className="font-mono text-teal-400">{arVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={4000000}
                    step={50000}
                    value={arVal}
                    onChange={(e) => setArVal(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'المخزون السلعي:' : 'Merchandise Inventory:'}</span>
                    <span className="font-mono text-teal-400">{invVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    step={50000}
                    value={invVal}
                    onChange={(e) => setInvVal(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'صافي المبيعات السنوية:' : 'Annual Sales Revenue:'}</span>
                    <span className="font-mono text-teal-400">{salesVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={1000000}
                    max={15000000}
                    step={250000}
                    value={salesVal}
                    onChange={(e) => setSalesVal(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>
              </div>

              {/* Liabilities & Cost Sliders */}
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'border-slate-800 bg-slate-900/30'} space-y-4`}>
                <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'} flex items-center gap-2`}>
                  <Building2 className={`w-4 h-4 ${isLight ? 'text-amber-800' : 'text-amber-400'}`} />
                  {isArabic ? 'تعديل الخصوم والتكاليف' : 'Liabilities & Operational Costs'}
                </h4>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الموردون وأوراق الدفع (قصيرة الأجل):' : 'Accounts Payable & Notes:'}</span>
                    <span className="font-mono text-amber-400">{apVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={4000000}
                    step={50000}
                    value={apVal}
                    onChange={(e) => setApVal(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'القروض والديون طويلة الأجل:' : 'Long-Term Corporate Debt:'}</span>
                    <span className="font-mono text-amber-400">{ltDebtVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={6000000}
                    step={100000}
                    value={ltDebtVal}
                    onChange={(e) => setLtDebtVal(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'تكلفة البضاعة المباعة (COGS):' : 'Cost of Goods Sold (COGS):'}</span>
                    <span className="font-mono text-amber-400">{cogsVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={500000}
                    max={12000000}
                    step={100000}
                    value={cogsVal}
                    onChange={(e) => setCogsVal(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'المصروفات البيعية والعمومية (OpEx):' : 'Operating Expenses (OpEx):'}</span>
                    <span className="font-mono text-amber-400">{opexVal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={200000}
                    max={5000000}
                    step={50000}
                    value={opexVal}
                    onChange={(e) => setOpexVal(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Visual Ratio Health Benchmarks */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {isArabic ? 'مؤشرات الفحص المالي والسيولة والملاءة' : 'Financial Health & Solvency Benchmarks'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-lg border border-slate-800/80 bg-slate-950/60">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span>{isArabic ? 'النسبة السريعة (Acid-Test)' : 'Quick Ratio'}</span>
                    <span className="font-mono font-bold text-teal-400">{fsMetrics.quickRatio.toFixed(2)}x</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${fsMetrics.quickRatio >= 1.0 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                      style={{ width: `${Math.min(100, (fsMetrics.quickRatio / 2.0) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {isArabic ? 'المعيار الوزاري: ≥ ١.٠٠x' : 'MoE Benchmark: ≥ 1.00x'}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-800/80 bg-slate-950/60">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span>{isArabic ? 'نسبة المديونية للملكية (D/E)' : 'Debt-to-Equity'}</span>
                    <span className="font-mono font-bold text-amber-400">{fsMetrics.debtToEquity.toFixed(2)}x</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${fsMetrics.debtToEquity <= 1.5 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      style={{ width: `${Math.min(100, (fsMetrics.debtToEquity / 3.0) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {isArabic ? 'المعيار الوزاري: ≤ ١.٥٠x' : 'MoE Benchmark: ≤ 1.50x'}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-800/80 bg-slate-950/60">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span>{isArabic ? 'هامش مجمل الربح' : 'Gross Margin'}</span>
                    <span className="font-mono font-bold text-sky-400">{fsMetrics.grossMarginPct.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-500"
                      style={{ width: `${Math.min(100, fsMetrics.grossMarginPct)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {isArabic ? 'هامش الصافي: ' : 'Net Margin: '}
                    {fsMetrics.netMarginPct.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 2: Compound Interest & Loan Amortization          */}
        {/* ========================================================= */}
        {activeStation === 'compound_interest' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-teal-500" />
                  {isArabic
                    ? 'محطة الرياضة المالية وحساب الفائدة المركبة والأقساط'
                    : 'Compound Interest, Annuities & Loan Amortization Studio'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isArabic
                    ? 'حساب القيمة المستقبلية، الأقساط الدورية المتساوية، وجداول استهلاك القروض بالكامل'
                    : 'Future Value, Equal Periodic Installments, and Full Amortization Schedules'}
                </p>
              </div>

              {/* Loan Presets */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{isArabic ? 'التسهيل:' : 'Facility:'}</span>
                <div className="flex gap-1.5">
                  {LOAN_PRESETS.map((pr) => (
                    <button
                      key={pr.id}
                      onClick={() => handleApplyLoanPreset(pr)}
                      className={`px-3 py-1.5 min-h-[40px] text-xs rounded-lg border font-medium transition-all ${
                        selectedLoan.id === pr.id
                          ? 'border-teal-500 bg-teal-500/10 text-teal-400 font-bold'
                          : 'border-slate-700 hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isArabic ? pr.nameAr.split(' ')[0] : pr.nameEn.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Inputs & Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Sliders */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'محددات القرض ومعدل الفائدة' : 'Loan Terms & Interest Rate'}
                </h4>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'أصل القرض المطلوب:' : 'Principal Amount (P):'}</span>
                    <span className="font-mono text-teal-400">{loanPrincipal.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={5000000}
                    step={25000}
                    value={loanPrincipal}
                    onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معدل الفائدة السنوي الاسمي:' : 'Annual Nominal Rate (i):'}</span>
                    <span className="font-mono text-teal-400">{loanRatePct.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min={5.0}
                    max={30.0}
                    step={0.5}
                    value={loanRatePct}
                    onChange={(e) => setLoanRatePct(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'مدة السداد (سنوات):' : 'Repayment Term (Years):'}</span>
                    <span className="font-mono text-teal-400">{loanYears} {isArabic ? 'سنوات' : 'Years'}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={15}
                    step={1}
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">
                    {isArabic ? 'دورية سداد الأقساط (m):' : 'Payment Frequency (m):'}
                  </label>
                  <select
                    value={compoundingFreq}
                    onChange={(e) => setCompoundingFreq(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200"
                  >
                    <option value={12}>{isArabic ? 'شهري (١٢ قسطاً/سنة)' : 'Monthly (12 payments/yr)'}</option>
                    <option value={4}>{isArabic ? 'ربع سنوي (٤ أقساط/سنة)' : 'Quarterly (4 payments/yr)'}</option>
                    <option value={2}>{isArabic ? 'نصف سنوي (قسطان/سنة)' : 'Semi-Annual (2 payments/yr)'}</option>
                    <option value={1}>{isArabic ? 'سنوي (قسط واحد/سنة)' : 'Annual (1 payment/yr)'}</option>
                  </select>
                </div>
              </div>

              {/* Financial Calculations Display */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'نتائج الاستهلاك والتحليل الرياضي' : 'Amortization Results & Metrics'}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'القسط الدوري (R)' : 'Periodic Payment (R)'}</span>
                    <span className="text-sm font-bold text-teal-400 tabular-nums">
                      {loanAmortizationData.periodicInstallment.toFixed(0)} EGP
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'إجمالي الفوائد' : 'Total Interest'}</span>
                    <span className="text-sm font-bold text-amber-400 tabular-nums">
                      {loanAmortizationData.totalInterestPaid.toFixed(0)} EGP
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'التكلفة الكلية للقرض' : 'Total Cost of Loan'}</span>
                    <span className="text-sm font-bold text-sky-400 tabular-nums">
                      {loanAmortizationData.totalCostOfLoan.toFixed(0)} EGP
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'المعدل الفعلي (EAR)' : 'Effective Annual (EAR)'}</span>
                    <span className="text-sm font-bold text-purple-400 tabular-nums">
                      {loanAmortizationData.effectiveAnnualRatePct.toFixed(2)}%
                    </span>
                  </div>
                </div>

                {/* High-Resolution Loan Amortization Stack & Balance Decay Schematic */}
                <LoanAmortizationScheduleSchematic
                  principal={loanPrincipal}
                  totalInterest={loanAmortizationData.totalInterestPaid}
                  totalCost={loanAmortizationData.totalCostOfLoan}
                  periodicInstallment={loanAmortizationData.periodicInstallment}
                  loanYears={loanYears}
                  compoundingFreq={compoundingFreq}
                  isArabic={isArabic}
                  isLight={isLight}
                />

                {/* Mini Schedule Table Preview */}
                <div className="border border-slate-800 rounded-lg overflow-hidden">
                  <div className="max-h-56 overflow-y-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-950 sticky top-0 border-b border-slate-800 text-slate-400">
                        <tr>
                          <th className="py-2 px-3">{isArabic ? 'الفترة' : 'Period'}</th>
                          <th className="py-2 px-3">{isArabic ? 'رصيد البداية' : 'Begin Balance'}</th>
                          <th className="py-2 px-3">{isArabic ? 'القسط المسدد' : 'Payment'}</th>
                          <th className="py-2 px-3">{isArabic ? 'الفائدة' : 'Interest'}</th>
                          <th className="py-2 px-3">{isArabic ? 'أصل الدين' : 'Principal'}</th>
                          <th className="py-2 px-3">{isArabic ? 'الرصيد المتبقي' : 'End Balance'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                        {loanAmortizationData.schedule.map((row) => (
                          <tr key={row.period} className="hover:bg-slate-800/30">
                            <td className="py-1.5 px-3">{row.period}</td>
                            <td className="py-1.5 px-3">{row.beginningBalance.toFixed(0)}</td>
                            <td className="py-1.5 px-3 text-teal-400">{row.payment.toFixed(0)}</td>
                            <td className="py-1.5 px-3 text-amber-400">{row.interest.toFixed(0)}</td>
                            <td className="py-1.5 px-3 text-emerald-400">{row.principal.toFixed(0)}</td>
                            <td className="py-1.5 px-3">{row.endingBalance.toFixed(0)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 3: Capital Budgeting & DCF Project Valuation      */}
        {/* ========================================================= */}
        {activeStation === 'capital_budgeting' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal-500" />
                  {isArabic
                    ? 'محطة تقييم المشاريع الرأسمالية والتدفقات النقدية المخصومة (DCF)'
                    : 'Capital Budgeting, DCF & Project Valuation Studio'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isArabic
                    ? 'حساب صافي القيمة الحالية (NPV)، معدل العائد الداخلي (IRR)، دليل الربحية (PI)، وفترة الاسترداد'
                    : 'Net Present Value, Internal Rate of Return, Profitability Index & Payback Period'}
                </p>
              </div>

              {/* Presets */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{isArabic ? 'المشروع:' : 'Project:'}</span>
                <div className="flex gap-1.5">
                  {CAPITAL_PROJECT_PRESETS.map((pr) => (
                    <button
                      key={pr.id}
                      onClick={() => handleApplyProjectPreset(pr)}
                      className={`px-3 py-1.5 min-h-[40px] text-xs rounded-lg border font-medium transition-all ${
                        selectedProject.id === pr.id
                          ? 'border-teal-500 bg-teal-500/10 text-teal-400 font-bold'
                          : 'border-slate-700 hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isArabic ? pr.nameAr.split(' ')[1] : pr.nameEn.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Decision Banner */}
            <div
              className={`p-4 rounded-xl border flex items-center justify-between ${
                capitalBudgetingMetrics.isAccepted
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                  : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6" />
                <div>
                  <h4 className="text-sm font-bold">
                    {capitalBudgetingMetrics.isAccepted
                      ? isArabic
                        ? 'المشروع مقبول استثمارياً (NPV > 0 & IRR > WACC)'
                        : 'Project Economically Viable (NPV > 0 & IRR > WACC)'
                      : isArabic
                      ? 'المشروع مرفوض استثمارياً (العائد دون تكلفة الفرصة البديلة)'
                      : 'Project Rejected (Substandard Return Below Hurdle Rate)'}
                  </h4>
                  <p className="text-xs opacity-80 mt-0.5">
                    {isArabic
                      ? 'مؤشر الربحية (PI): ' + capitalBudgetingMetrics.profitabilityIndex.toFixed(2) + 'x'
                      : 'Profitability Index (PI): ' + capitalBudgetingMetrics.profitabilityIndex.toFixed(2) + 'x'}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase opacity-75 block">{isArabic ? 'صافي القيمة الحالية' : 'Net Present Value'}</span>
                <span className="text-lg font-bold font-mono">
                  {capitalBudgetingMetrics.npv >= 0 ? '+' : ''}
                  {capitalBudgetingMetrics.npv.toLocaleString()} EGP
                </span>
              </div>
            </div>

            {/* High-Resolution NPV Profile Curve & DCF Waterfall Schematic */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <CapitalBudgetingNpvProfileSchematic
                initialOutlay={initialOutlay}
                cashFlows={cashFlows}
                discountedFlows={capitalBudgetingMetrics.discountedFlows}
                hurdleRatePct={hurdleRatePct}
                npv={capitalBudgetingMetrics.npv}
                irrPct={capitalBudgetingMetrics.irrPct}
                paybackYears={capitalBudgetingMetrics.paybackYears}
                isAccepted={capitalBudgetingMetrics.isAccepted}
                npvCurve={capitalBudgetingMetrics.npvCurve}
                isArabic={isArabic}
                isLight={isLight}
              />
            </div>

            {/* Cash Flow Inputs & NPV Profile Curve */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'محددات المشروع وتكلفة رأس المال' : 'Outlay & Hurdle Rate Parameters'}
                </h4>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الاستثمار المبدئي (CF0):' : 'Initial Outlay (CF0):'}</span>
                    <span className="font-mono text-rose-400">-{initialOutlay.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min={500000}
                    max={8000000}
                    step={100000}
                    value={initialOutlay}
                    onChange={(e) => setInitialOutlay(Number(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معدل الخصم / تكلفة التمويل (WACC):' : 'Hurdle Rate / WACC:'}</span>
                    <span className="font-mono text-teal-400">{hurdleRatePct.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min={6.0}
                    max={25.0}
                    step={0.5}
                    value={hurdleRatePct}
                    onChange={(e) => setHurdleRatePct(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block font-semibold">
                    {isArabic ? 'التدفقات النقدية التشغيلية (السنوات ١ إلى ٥):' : 'Operating Cash Flows (Years 1 to 5):'}
                  </span>
                  {cashFlows.map((cf, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 w-16">{isArabic ? `السنة ${idx + 1}:` : `Yr ${idx + 1}:`}</span>
                      <input
                        type="range"
                        min={100000}
                        max={3000000}
                        step={50000}
                        value={cf}
                        onChange={(e) => {
                          const updated = [...cashFlows];
                          updated[idx] = Number(e.target.value);
                          setCashFlows(updated);
                        }}
                        className="flex-1 accent-teal-500"
                      />
                      <span className="text-xs font-mono text-teal-400 w-24 text-right">
                        {cf.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Metrics & Capital Recovery */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {isArabic ? 'مؤشرات التقييم الاستثماري والقرار' : 'Capital Valuation Indicators'}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                      <span className="text-[11px] text-slate-400 block">{isArabic ? 'معدل العائد الداخلي (IRR)' : 'Internal Rate of Return'}</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">
                        {capitalBudgetingMetrics.irrPct.toFixed(2)}%
                      </span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                      <span className="text-[11px] text-slate-400 block">{isArabic ? 'فترة الاسترداد' : 'Payback Period'}</span>
                      <span className="text-base font-bold text-teal-400 font-mono">
                        {capitalBudgetingMetrics.paybackYears.toFixed(2)} {isArabic ? 'سنوات' : 'Years'}
                      </span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                      <span className="text-[11px] text-slate-400 block">{isArabic ? 'دليل الربحية (PI)' : 'Profitability Index'}</span>
                      <span className="text-base font-bold text-purple-400 font-mono">
                        {capitalBudgetingMetrics.profitabilityIndex.toFixed(2)}x
                      </span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                      <span className="text-[11px] text-slate-400 block">{isArabic ? 'العائد الفائض فوق WACC' : 'Spread Above WACC'}</span>
                      <span className={`text-base font-bold font-mono ${capitalBudgetingMetrics.irrPct - hurdleRatePct >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {capitalBudgetingMetrics.irrPct - hurdleRatePct >= 0 ? '+' : ''}
                        {(capitalBudgetingMetrics.irrPct - hurdleRatePct).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs mt-3 pt-2 border-t border-slate-800">
                  <span className="text-slate-400">
                    {isArabic ? 'فترة الاسترداد التقديرية:' : 'Payback Period:'}{' '}
                    <span className="font-mono text-teal-400 font-bold">
                      {capitalBudgetingMetrics.paybackYears.toFixed(2)} {isArabic ? 'سنوات' : 'Years'}
                    </span>
                  </span>
                  <span className="text-slate-400">
                    {isArabic ? 'معدل العائد الداخلي (IRR):' : 'Internal Rate of Return:'}{' '}
                    <span className="font-mono text-emerald-400 font-bold">
                      {capitalBudgetingMetrics.irrPct.toFixed(2)}%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 4: Commercial Banking & Credit Risk Engine        */}
        {/* ========================================================= */}
        {activeStation === 'banking_credit' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-500" />
                  {isArabic
                    ? 'محطة العمليات المصرفية والتقييم الائتماني ومعايير بازل'
                    : 'Commercial Banking Operations & Credit Assessment Studio'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isArabic
                    ? 'معايير الجدارة الائتمانية الخمسة (5 Cs)، مضاعف الودائع، ونسبة كفاية رأس المال بازل ٣'
                    : 'The 5 Cs of Credit Scoring, Deposit Expansion Multiplier & Basel III CAR'}
                </p>
              </div>

              {/* Borrower Presets */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{isArabic ? 'المقترض:' : 'Borrower:'}</span>
                <div className="flex gap-1.5">
                  {BORROWER_PROFILES.map((pr) => (
                    <button
                      key={pr.id}
                      onClick={() => handleApplyBorrowerPreset(pr)}
                      className={`px-3 py-1.5 min-h-[40px] text-xs rounded-lg border font-medium transition-all ${
                        selectedBorrower.id === pr.id
                          ? 'border-teal-500 bg-teal-500/10 text-teal-400 font-bold'
                          : 'border-slate-700 hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isArabic ? pr.nameAr.split(' ')[1] : pr.nameEn.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Credit Score & Recommendation Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">{isArabic ? 'التقييم الائتماني الإجمالي' : 'Composite Credit Score'}</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold font-mono text-teal-400">
                      {bankingMetrics.compositeScore.toFixed(1)}
                    </span>
                    <span className="text-xs text-slate-500">/ 100</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] uppercase text-slate-500 block">{isArabic ? 'التصنيف الائتماني' : 'Credit Rating'}</span>
                  <span className="text-xs font-bold text-sky-400">{bankingMetrics.ratingGrade}</span>
                </div>
              </div>

              <div className="md:col-span-2 p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">{isArabic ? 'توصية لجنة الائتمان والمخاطر' : 'Credit Committee Recommendation'}</span>
                  <p className="text-xs text-slate-200 mt-1 font-medium leading-relaxed">
                    {isArabic ? bankingMetrics.riskRecommendationAr : bankingMetrics.riskRecommendationEn}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs pt-2 border-t border-slate-800">
                  <span className="text-slate-400">
                    {isArabic ? 'فارق سعر الفائدة الموصى به:' : 'Recommended Spread:'}{' '}
                    <span className="font-mono text-amber-400 font-bold">+{selectedBorrower.interestRateSpreadPct}%</span>
                  </span>
                  <span className="text-slate-400">
                    {isArabic ? 'مبلغ القرض المطلوب:' : 'Loan Requested:'}{' '}
                    <span className="font-mono text-teal-400 font-bold">{selectedBorrower.loanAmountRequested.toLocaleString()} EGP</span>
                  </span>
                </div>
              </div>
            </div>

            {/* High-Resolution 5 Cs Credit Radar & Egyptian I-Score Schematic */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <CreditScorePentagonRadarSchematic
                characterScore={characterScore}
                capacityScore={capacityScore}
                capitalScore={capitalScore}
                collateralScore={collateralScore}
                conditionsScore={conditionsScore}
                compositeScore={bankingMetrics.compositeScore}
                ratingGrade={bankingMetrics.ratingGrade}
                isApproved={bankingMetrics.isApproved}
                depositMultiplier={bankingMetrics.depositMultiplier}
                carPct={bankingMetrics.carPct}
                isArabic={isArabic}
                isLight={isLight}
              />
            </div>

            {/* 5 Cs Sliders & Monetary Multiplier */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 5 Cs of Credit Scoring Sliders */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {isArabic ? 'معايير الجدارة الائتمانية الخمسة (The 5 Cs)' : 'The 5 Cs of Credit Assessment'}
                </h4>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الشخصية والسمعة الائتمانية (Character - 25%):' : 'Character (25% weight):'}</span>
                    <span className="font-mono text-teal-400">{characterScore}/100</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={characterScore}
                    onChange={(e) => setCharacterScore(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'القدرة على السداد والتدفقات (Capacity - 25%):' : 'Capacity (25% weight):'}</span>
                    <span className="font-mono text-teal-400">{capacityScore}/100</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={capacityScore}
                    onChange={(e) => setCapacityScore(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'رأس المال والملاءة (Capital - 20%):' : 'Capital (20% weight):'}</span>
                    <span className="font-mono text-teal-400">{capitalScore}/100</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={capitalScore}
                    onChange={(e) => setCapitalScore(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الضمانات العينية المرهونة (Collateral - 15%):' : 'Collateral (15% weight):'}</span>
                    <span className="font-mono text-teal-400">{collateralScore}/100</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={collateralScore}
                    onChange={(e) => setCollateralScore(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الظروف الاقتصادية والقطاعية (Conditions - 15%):' : 'Conditions (15% weight):'}</span>
                    <span className="font-mono text-teal-400">{conditionsScore}/100</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={conditionsScore}
                    onChange={(e) => setConditionsScore(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>
              </div>

              {/* Central Bank Reserve Multiplier & Basel III */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'السياسة النقدية ومضاعف الائتمان ومعايير بازل' : 'Monetary Multiplier & Basel III Framework'}
                </h4>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'نسبة الاحتياطي الإلزامي (CBE Reserve Ratio):' : 'Statutory Reserve Ratio (RR):'}</span>
                    <span className="font-mono text-amber-400">{statutoryReserveRatioPct.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min={10.0}
                    max={25.0}
                    step={0.5}
                    value={statutoryReserveRatioPct}
                    onChange={(e) => setStatutoryReserveRatioPct(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/60">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'مضاعف الودائع (1/RR)' : 'Deposit Multiplier'}</span>
                    <span className="text-base font-bold text-amber-400 font-mono">
                      {bankingMetrics.depositMultiplier.toFixed(2)}x
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/60">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'أقصى خلق ائتماني' : 'Max Credit Expansion'}</span>
                    <span className="text-sm font-bold text-teal-400 font-mono">
                      {bankingMetrics.maxSystemCreditExpansion.toLocaleString()} EGP
                    </span>
                  </div>
                </div>

                {/* Basel III Capital Adequacy Gauge */}
                <div className="p-3.5 rounded-lg border border-slate-800 bg-slate-950/60">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'نسبة كفاية رأس المال (Basel III CAR):' : 'Capital Adequacy Ratio (CAR):'}</span>
                    <span className={`font-mono font-bold ${bankingMetrics.meetsBaselThree ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {bankingMetrics.carPct.toFixed(2)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${bankingMetrics.meetsBaselThree ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      style={{ width: `${Math.min(100, (bankingMetrics.carPct / 18.0) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {isArabic ? 'الحد الأدنى الإلزامي لبازل ٣: ١٠.٥٪' : 'Basel III Minimum Regulatory Benchmark: 10.5%'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 5: Portfolio Theory, CAPM & Financial Risk Analytics */}
        {/* ========================================================= */}
        {activeStation === 'portfolio_risk' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-teal-500" />
                  {isArabic
                    ? 'محطة نظرية المحفظة لماركويتز ونموذج تسعير الأصول (CAPM)'
                    : 'Portfolio Theory, Efficient Frontier & CAPM Studio'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isArabic
                    ? 'الحد الكفء لماركويتز، التنويع الاستثماري، مخاطر بيتا السوقية، ونسبة شارب'
                    : 'Markowitz Efficient Frontier, Risk Diversification, Systematic Beta & Sharpe Ratio'}
                </p>
              </div>
            </div>

            {/* Asset Allocation Sliders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'تخصيص الأوزان في المحفظة' : 'Portfolio Asset Weighting'}
                </h4>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">
                    {isArabic ? 'السهم الأول (الأصل أ):' : 'Asset A Selection:'}
                  </label>
                  <select
                    value={assetA.id}
                    onChange={(e) => {
                      const found = FINANCIAL_ASSETS.find((a) => a.id === e.target.value);
                      if (found) setAssetA(found);
                    }}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200"
                  >
                    {FINANCIAL_ASSETS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.ticker} - {isArabic ? a.nameAr : a.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">
                    {isArabic ? 'السهم الثاني (الأصل ب):' : 'Asset B Selection:'}
                  </label>
                  <select
                    value={assetB.id}
                    onChange={(e) => {
                      const found = FINANCIAL_ASSETS.find((a) => a.id === e.target.value);
                      if (found) setAssetB(found);
                    }}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200"
                  >
                    {FINANCIAL_ASSETS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.ticker} - {isArabic ? a.nameAr : a.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? `وزن السهم أ (${assetA.ticker}):` : `Weight in ${assetA.ticker} (wA):`}</span>
                    <span className="font-mono text-teal-400">{(weightA * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={weightA}
                    onChange={(e) => setWeightA(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-0.5">
                    <span>{assetB.ticker}: {((1 - weightA) * 100).toFixed(0)}%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معامل الارتباط (Correlation ρ):' : 'Correlation Coefficient (ρ):'}</span>
                    <span className="font-mono text-teal-400">{correlationRho.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min={-1.0}
                    max={1.0}
                    step={0.05}
                    value={correlationRho}
                    onChange={(e) => setCorrelationRho(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>
              </div>

              {/* Portfolio Performance KPI & Risk Metrics */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'خصائص المحفظة ونموذج CAPM' : 'Portfolio Metrics & CAPM SML Valuation'}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'العائد المتوقع E(Rp)' : 'Expected Return'}</span>
                    <span className="text-base font-bold text-teal-400 font-mono">
                      {portfolioMetrics.expectedReturn.toFixed(2)}%
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'المخاطرة الكلية (Sigma)' : 'Volatility (Sigma)'}</span>
                    <span className="text-base font-bold text-amber-400 font-mono">
                      {portfolioMetrics.volatilitySigma.toFixed(2)}%
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'معامل بيتا المحفظة' : 'Portfolio Beta'}</span>
                    <span className="text-base font-bold text-sky-400 font-mono">
                      {portfolioMetrics.portfolioBeta.toFixed(2)}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/70">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'نسبة شارب' : 'Sharpe Ratio'}</span>
                    <span className="text-base font-bold text-purple-400 font-mono">
                      {portfolioMetrics.sharpeRatio.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* High-Resolution Markowitz Efficient Frontier & CAPM Schematic */}
                <MarkowitzEfficientFrontierSchematic
                  frontierPoints={portfolioMetrics.frontierPoints}
                  expectedReturn={portfolioMetrics.expectedReturn}
                  volatilitySigma={portfolioMetrics.volatilitySigma}
                  sharpeRatio={portfolioMetrics.sharpeRatio}
                  capmRequiredReturn={portfolioMetrics.capmRequiredReturn}
                  alphaSpread={portfolioMetrics.alphaSpread}
                  assetA={assetA}
                  assetB={assetB}
                  weightA={weightA}
                  correlationRho={correlationRho}
                  riskFreeRate={riskFreeRatePct}
                  isArabic={isArabic}
                  isLight={isLight}
                />

                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-800">
                  <span className="text-slate-400">
                    {isArabic ? 'العائد المطلوب وفق CAPM:' : 'CAPM Required Return:'}{' '}
                    <span className="font-mono text-teal-400 font-bold">
                      {portfolioMetrics.capmRequiredReturn.toFixed(2)}%
                    </span>
                  </span>
                  <span className="text-slate-400">
                    {isArabic ? 'عائد ألفا الإضافي (Alpha):' : 'Alpha Excess Spread:'}{' '}
                    <span className={`font-mono font-bold ${portfolioMetrics.alphaSpread >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {portfolioMetrics.alphaSpread >= 0 ? '+' : ''}
                      {portfolioMetrics.alphaSpread.toFixed(2)}%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
