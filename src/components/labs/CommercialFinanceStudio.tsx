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
              className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
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
                      className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-all ${
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
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                <span className="text-[11px] text-slate-400 block">{isArabic ? 'إجمالي الأصول' : 'Total Assets'}</span>
                <span className="text-base font-bold text-teal-400 tabular-nums">
                  {fsMetrics.totalAssets.toLocaleString()} EGP
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                <span className="text-[11px] text-slate-400 block">{isArabic ? 'إجمالي الالتزامات' : 'Total Liabilities'}</span>
                <span className="text-base font-bold text-amber-400 tabular-nums">
                  {fsMetrics.totalLiabilities.toLocaleString()} EGP
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                <span className="text-[11px] text-slate-400 block">{isArabic ? 'حقوق الملكية' : 'Total Equity'}</span>
                <span className="text-base font-bold text-emerald-400 tabular-nums">
                  {fsMetrics.totalEquity.toLocaleString()} EGP
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                <span className="text-[11px] text-slate-400 block">{isArabic ? 'صافي الدخل' : 'Net Income'}</span>
                <span className="text-base font-bold text-sky-400 tabular-nums">
                  {fsMetrics.netIncome.toLocaleString()} EGP
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                <span className="text-[11px] text-slate-400 block">{isArabic ? 'نسبة التداول (CR)' : 'Current Ratio'}</span>
                <span className={`text-base font-bold tabular-nums ${fsMetrics.currentRatio >= 1.5 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {fsMetrics.currentRatio.toFixed(2)}x
                </span>
              </div>
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                <span className="text-[11px] text-slate-400 block">{isArabic ? 'العائد على الملكية' : 'Return on Equity'}</span>
                <span className="text-base font-bold text-purple-400 tabular-nums">
                  {fsMetrics.roePct.toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Interactive Sliders & Equation Check */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Asset & Revenue Sliders */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-teal-400" />
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
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
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
                      className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-all ${
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
                      className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-all ${
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
                        ? 'القرار الاستثماري المعتمد: قبول المشروع (Accept Investment)'
                        : 'Investment Decision: Accept Project'
                      : isArabic
                      ? 'القرار الاستثماري المعتمد: رفض المشروع (Reject Investment)'
                      : 'Investment Decision: Reject Project'}
                  </h4>
                  <p className="text-xs opacity-80">
                    {isArabic
                      ? `صافي القيمة الحالية = ${capitalBudgetingMetrics.npv.toFixed(0)} جنيه | معدل العائد الداخلي = ${capitalBudgetingMetrics.irrPct.toFixed(1)}% مقارنة بمعدل الخصم ${hurdleRatePct}%`
                      : `NPV = ${capitalBudgetingMetrics.npv.toFixed(0)} EGP | IRR = ${capitalBudgetingMetrics.irrPct.toFixed(1)}% vs Hurdle Rate ${hurdleRatePct}%`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs block opacity-70">{isArabic ? 'دليل الربحية (PI)' : 'Profitability Index'}</span>
                <span className="text-base font-mono font-bold">{capitalBudgetingMetrics.profitabilityIndex.toFixed(2)}x</span>
              </div>
            </div>

            {/* Cash Flow Inputs & NPV Profile Curve */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'التدفقات النقدية السنوية ومعدل الخصم' : 'Annual Cash Flows & Hurdle Rate'}
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

              {/* NPV Profile Curve SVG Chart */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {isArabic ? 'منحنى حساسية صافي القيمة الحالية (NPV Profile Curve)' : 'NPV Profile Sensitivity Curve'}
                  </h4>
                  <p className="text-[11px] text-slate-500 mb-4">
                    {isArabic
                      ? 'يوضح العلاقة العكسية بين معدل الخصم وNPV ونقطة تقاطع الصفر (IRR)'
                      : 'Inverse relationship between discount rate and project NPV intersecting zero at IRR'}
                  </p>
                </div>

                {/* SVG Graph */}
                <div className="h-52 w-full bg-slate-950/70 rounded-lg p-3 relative flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full overflow-visible">
                    {/* Zero axis */}
                    <line x1="40" y1="80" x2="380" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="385" y="83" fill="#64748B" fontSize="9">NPV=0</text>

                    {/* Curve Polyline */}
                    <polyline
                      fill="none"
                      stroke="#14B8A6"
                      strokeWidth="2.5"
                      points={capitalBudgetingMetrics.npvCurve
                        .map((pt, idx) => {
                          const x = 50 + idx * 20;
                          // Scale NPV around 80px center
                          const y = 80 - (pt.npv / (initialOutlay * 0.8)) * 50;
                          return `${x},${Math.max(15, Math.min(145, y))}`;
                        })
                        .join(' ')}
                    />

                    {/* Point of Current WACC */}
                    <circle
                      cx={50 + (hurdleRatePct / 2) * 20}
                      cy={Math.max(15, Math.min(145, 80 - (capitalBudgetingMetrics.npv / (initialOutlay * 0.8)) * 50))}
                      r="4.5"
                      fill="#38BDF8"
                    />
                  </svg>
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
                      className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-all ${
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

                {/* Markowitz Efficient Frontier SVG */}
                <div className="h-44 w-full bg-slate-950/70 rounded-lg p-3 relative flex items-center justify-center">
                  <svg viewBox="0 0 400 130" className="w-full h-full overflow-visible">
                    {/* Axes */}
                    <line x1="40" y1="110" x2="380" y2="110" stroke="#334155" strokeWidth="1" />
                    <line x1="40" y1="10" x2="40" y2="110" stroke="#334155" strokeWidth="1" />
                    <text x="385" y="113" fill="#64748B" fontSize="9">Risk (σ)</text>
                    <text x="25" y="12" fill="#64748B" fontSize="9">Return</text>

                    {/* Frontier Curve */}
                    <polyline
                      fill="none"
                      stroke="#14B8A6"
                      strokeWidth="2.5"
                      points={portfolioMetrics.frontierPoints
                        .map((pt) => {
                          const x = 50 + (pt.risk - 8) * 18;
                          const y = 110 - (pt.ret - 10) * 6;
                          return `${Math.max(45, Math.min(370, x))},${Math.max(15, Math.min(105, y))}`;
                        })
                        .join(' ')}
                    />

                    {/* Current Portfolio Point */}
                    <circle
                      cx={Math.max(45, Math.min(370, 50 + (portfolioMetrics.volatilitySigma - 8) * 18))}
                      cy={Math.max(15, Math.min(105, 110 - (portfolioMetrics.expectedReturn - 10) * 6))}
                      r="5"
                      fill="#F59E0B"
                    />
                  </svg>
                </div>

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
