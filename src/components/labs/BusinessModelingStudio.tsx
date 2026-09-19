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
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  initialTab?: BusinessStudioTab;
}

export type BusinessStudioTab = 'dcf' | 'breakeven' | 'leancanvas' | 'supplychain' | 'quiz';

export const BusinessModelingStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen = false,
  initialTab = 'dcf',
}) => {
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
      className={`rounded-2xl border p-4 md:p-6 transition-all duration-300 flex flex-col gap-6 ${themeClasses} ${
        isFullscreen ? 'min-h-screen' : 'min-h-[700px]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
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
          <div className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-2 ${cardClasses}`}>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>{isArabic ? 'تقييم المنشأة:' : 'EV Metric:'}</span>
            <span className="font-bold text-emerald-400">
              {(dcfCalculations.enterpriseValue / 1000).toFixed(1)}M EGP
            </span>
          </div>
          <div className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-2 ${cardClasses}`}>
            <Calculator className="w-4 h-4 text-sky-400" />
            <span>{isArabic ? 'نقطة التعادل:' : 'Break-Even:'}</span>
            <span className="font-bold text-sky-400">
              {Math.round(beCalculations.breakEvenUnits).toLocaleString()} {isArabic ? 'وحدة' : 'Units'}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
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
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
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
      </div>

      {/* TAB 1: DCF & WACC VALUATION */}
      {activeTab === 'dcf' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
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
                    className={`w-full text-start p-3 rounded-lg border text-xs transition-all ${
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
                  className="w-full accent-indigo-500 cursor-pointer"
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
                  className="w-full accent-indigo-500 cursor-pointer"
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
                  className="w-full accent-indigo-500 cursor-pointer"
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
                  className="w-full accent-indigo-500 cursor-pointer"
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
                  className="w-full accent-indigo-500 cursor-pointer"
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
      )}

      {/* TAB 2: BREAK-EVEN & CONTRIBUTION MARGIN */}
      {activeTab === 'breakeven' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
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
                    className={`w-full text-start p-3 rounded-lg border text-xs transition-all ${
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
                  className="w-full accent-sky-500 cursor-pointer"
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
                  className="w-full accent-sky-500 cursor-pointer"
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
                  className="w-full accent-sky-500 cursor-pointer"
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
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results & Visualizer */}
          <div className="lg:col-span-2 space-y-4">
            {/* Break-even KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="text-[11px] text-slate-400">{isArabic ? 'هامش المساهمة للوحدة:' : 'Unit Contribution:'}</div>
                <div className="text-lg font-bold text-sky-400 font-mono">
                  {beCalculations.contributionMargin.toFixed(1)} EGP
                </div>
                <div className="text-[10px] text-slate-500">P - VC</div>
              </div>

              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="text-[11px] text-slate-400">{isArabic ? 'نسبة هامش المساهمة:' : 'CM Ratio:'}</div>
                <div className="text-lg font-bold text-indigo-400 font-mono">
                  {(beCalculations.cmRatio * 100).toFixed(1)}%
                </div>
                <div className="text-[10px] text-slate-500">(P - VC) / P</div>
              </div>

              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="text-[11px] text-slate-400">{isArabic ? 'نقطة التعادل (بالوحدات):' : 'BE Units:'}</div>
                <div className="text-lg font-bold text-purple-400 font-mono">
                  {Math.round(beCalculations.breakEvenUnits).toLocaleString()}
                </div>
                <div className="text-[10px] text-slate-500">FC / CM</div>
              </div>

              <div className={`p-3 rounded-xl border ${cardClasses}`}>
                <div className="text-[11px] text-slate-400">{isArabic ? 'هامش الأمان (Margin of Safety):' : 'Margin of Safety:'}</div>
                <div className={`text-lg font-bold font-mono ${beCalculations.marginOfSafetyPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {beCalculations.marginOfSafetyPercent.toFixed(1)}%
                </div>
                <div className="text-[10px] text-slate-500">{beCalculations.marginOfSafetyUnits.toLocaleString()} units</div>
              </div>
            </div>

            {/* Visual Break-Even Gauge / Bar */}
            <div className={`p-4 rounded-xl border ${cardClasses}`}>
              <h3 className="text-sm font-semibold text-slate-200 mb-2 flex items-center justify-between">
                <span>{isArabic ? 'المقارنة بين حجم الإنتاج ونقطة التعادل' : 'Production Volume vs Break-Even Threshold'}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                  currentVolume >= beCalculations.breakEvenUnits
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}>
                  {currentVolume >= beCalculations.breakEvenUnits
                    ? isArabic ? 'منطقة الأرباح التشغيلية' : 'Operating Profit Zone'
                    : isArabic ? 'منطقة الخسائر التشغيلية' : 'Operating Loss Zone'}
                </span>
              </h3>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden relative my-3">
                <div
                  className={`h-full transition-all duration-500 ${
                    currentVolume >= beCalculations.breakEvenUnits
                      ? 'bg-gradient-to-r from-sky-500 to-emerald-500'
                      : 'bg-gradient-to-r from-amber-500 to-rose-500'
                  }`}
                  style={{
                    width: `${Math.min(100, (currentVolume / (beCalculations.breakEvenUnits * 1.6)) * 100)}%`,
                  }}
                />
              </div>

              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>0 Units</span>
                <span className="text-purple-300 font-bold">
                  {isArabic ? 'نقطة التعادل: ' : 'BE: '}
                  {Math.round(beCalculations.breakEvenUnits).toLocaleString()}
                </span>
                <span>{Math.round(beCalculations.breakEvenUnits * 1.6).toLocaleString()} Units</span>
              </div>
            </div>

            {/* Income Statement Breakdown */}
            <div className={`p-4 rounded-xl border ${cardClasses}`}>
              <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Receipt className="w-4 h-4 text-emerald-400" />
                {isArabic ? 'قائمة الدخل التقديرية بالحجم الحالي (Pro-Forma Contribution Income Statement)' : 'Pro-Forma Contribution Income Statement'}
              </h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-300 font-sans">{isArabic ? 'إيرادات المبيعات الكلية:' : 'Total Sales Revenue:'}</span>
                  <span className="text-emerald-400 font-bold">{Math.round(beCalculations.currentRevenue).toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-300 font-sans">{isArabic ? 'ناقص: التكاليف المتغيرة الكلية:' : 'Less: Total Variable Costs:'}</span>
                  <span className="text-rose-400">({Math.round(currentVolume * variableCost).toLocaleString()}) EGP</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 bg-sky-950/20 px-2 rounded">
                  <span className="text-sky-300 font-sans font-semibold">{isArabic ? 'إجمالي هامش المساهمة (Total CM):' : 'Total Contribution Margin:'}</span>
                  <span className="text-sky-400 font-bold">{Math.round(currentVolume * beCalculations.contributionMargin).toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-300 font-sans">{isArabic ? 'ناقص: التكاليف الثابتة الكلية:' : 'Less: Fixed Overhead Costs:'}</span>
                  <span className="text-rose-400">({fixedCosts.toLocaleString()}) EGP</span>
                </div>
                <div className={`flex justify-between py-2 px-2 rounded text-sm font-bold ${
                  beCalculations.currentProfit >= 0 ? 'bg-emerald-950/30 text-emerald-400' : 'bg-rose-950/30 text-rose-400'
                }`}>
                  <span className="font-sans">{isArabic ? 'صافي الربح / (الخسارة) التشغيلي (EBIT):' : 'Net Operating Income (EBIT):'}</span>
                  <span>{Math.round(beCalculations.currentProfit).toLocaleString()} EGP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LEAN CANVAS 9-BLOCK BUILDER */}
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
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

      {/* TAB 4: SUPPLY CHAIN & EOQ OPTIMIZER */}
      {activeTab === 'supplychain' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
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
                    className={`w-full text-start p-3 rounded-lg border text-xs transition-all ${
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
                  className="w-full accent-teal-500 cursor-pointer"
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
                  className="w-full accent-teal-500 cursor-pointer"
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
                  className="w-full accent-teal-500 cursor-pointer"
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
                  className="w-full accent-teal-500 cursor-pointer"
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
                  className="w-full accent-teal-500 cursor-pointer"
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
      )}

      {/* TAB 5: STRATEGIC DECISION SCENARIO QUIZ */}
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
                    className={`w-full text-start p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-start gap-3 ${optionStyle}`}
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isArabic ? 'إعادة الاختبار' : 'Reset Quiz'}</span>
            </button>

            {isAnswerSubmitted && currentQIndex < BUSINESS_SCENARIO_QUIZ.length - 1 && (
              <button
                onClick={nextQuestion}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs md:text-sm font-semibold shadow-md shadow-indigo-600/30 transition-all"
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
