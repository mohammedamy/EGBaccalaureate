/**
 * Commercial Sciences, Financial Accounting & Banking Virtual Laboratory Data
 * Accredited for Egyptian General Secondary (Thanaweya Amma) & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Financial Simulation Architecture
 */

// ============================================================================
// STATION 1: Financial Statements & Ratio Analysis
// ============================================================================

export interface FinancialStatementPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  sectorEn: string;
  sectorAr: string;
  descriptionEn: string;
  descriptionAr: string;
  cash: number;
  accountsReceivable: number;
  inventory: number;
  equipmentGross: number;
  accumulatedDepreciation: number;
  accountsPayable: number;
  shortTermNotes: number;
  longTermDebt: number;
  paidInCapital: number;
  retainedEarningsBeginning: number;
  salesRevenue: number;
  costOfGoodsSold: number;
  operatingExpenses: number;
  taxRatePct: number;
}

export const FINANCIAL_STATEMENT_PRESETS: FinancialStatementPreset[] = [
  {
    id: 'industrial_corp',
    nameEn: 'Nile Industrial & Manufacturing S.A.E.',
    nameAr: 'شركة النيل للصناعات الهندسية والميكانيكية ش.م.م',
    sectorEn: 'Heavy Manufacturing & Engineering',
    sectorAr: 'الصناعات الهندسية والميكانيكية الثقيلة',
    descriptionEn: 'Large-scale manufacturer with significant plant and machinery, balanced inventory turnover, and healthy retained earnings.',
    descriptionAr: 'منشأة صناعية كبرى تمتلك أصولاً رأسمالية ضخمة من الآلات وخطوط الإنتاج ومعدل دوران مخزون متوازن وأرباحاً محتجزة متينة.',
    cash: 850000,
    accountsReceivable: 1250000,
    inventory: 1650000,
    equipmentGross: 6500000,
    accumulatedDepreciation: 1500000,
    accountsPayable: 950000,
    shortTermNotes: 350000,
    longTermDebt: 2200000,
    paidInCapital: 3500000,
    retainedEarningsBeginning: 1750000,
    salesRevenue: 7200000,
    costOfGoodsSold: 4320000,
    operatingExpenses: 1440000,
    taxRatePct: 22.5,
  },
  {
    id: 'retail_distributor',
    nameEn: 'Delta Commercial Logistics & Retail S.A.E.',
    nameAr: 'شركة الدلتا للتجارة والتوزيع وسلاسل الإمداد ش.م.م',
    sectorEn: 'Wholesale Trade & Retail Supply Chain',
    sectorAr: 'تجارة الجملة والتجزئة والتوزيع السريع',
    descriptionEn: 'High-turnover consumer goods distributor with substantial inventory and receivables, operating on tight margins.',
    descriptionAr: 'شركة توزيع تجارية سريعة الدوران تعتمد على حجم مبيعات ضخم ومخزون مرتفع مع هوامش ربحية تنافسية.',
    cash: 520000,
    accountsReceivable: 1850000,
    inventory: 2400000,
    equipmentGross: 2100000,
    accumulatedDepreciation: 600000,
    accountsPayable: 1950000,
    shortTermNotes: 450000,
    longTermDebt: 800000,
    paidInCapital: 2000000,
    retainedEarningsBeginning: 1070000,
    salesRevenue: 9500000,
    costOfGoodsSold: 7600000,
    operatingExpenses: 1140000,
    taxRatePct: 22.5,
  },
  {
    id: 'fintech_tech',
    nameEn: 'Cairo FinTech Digital Banking Innovations',
    nameAr: 'مؤسسة القاهرة لحلول التكنولوجيا المالية والمدفوعات الرقمية',
    sectorEn: 'FinTech & Digital Payment Gateway',
    sectorAr: 'التكنولوجيا المالية وبوابات الدفع الإلكتروني',
    descriptionEn: 'Asset-light digital platform with massive cash liquidity, minimal inventory, zero long-term debt, and high net margins.',
    descriptionAr: 'منصة تكنولوجية خفيفة الأصول تتمتع بسيولة نقدية فائقة وانعدام تام للمخزون السلعي وهوامش ربح صافية مرتفعة.',
    cash: 3800000,
    accountsReceivable: 920000,
    inventory: 0,
    equipmentGross: 1200000,
    accumulatedDepreciation: 400000,
    accountsPayable: 320000,
    shortTermNotes: 100000,
    longTermDebt: 0,
    paidInCapital: 4000000,
    retainedEarningsBeginning: 1100000,
    salesRevenue: 5400000,
    costOfGoodsSold: 1080000,
    operatingExpenses: 2160000,
    taxRatePct: 22.5,
  },
];

// ============================================================================
// STATION 2: Compound Interest & Loan Amortization
// ============================================================================

export interface LoanPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'commercial_mortgage' | 'equipment_finance' | 'sme_credit' | 'corporate_bond';
  principal: number; // EGP
  annualInterestRatePct: number; // %
  termYears: number; // Years
  compoundingFrequency: 1 | 2 | 4 | 12; // Annual, Semi-Annual, Quarterly, Monthly
  descriptionEn: string;
  descriptionAr: string;
}

export const LOAN_PRESETS: LoanPreset[] = [
  {
    id: 'equipment_expansion',
    nameEn: 'Industrial Equipment Lease-Purchase Facility',
    nameAr: 'تمويل خطوط إنتاج صناعية بنظام التأجير التمويلي',
    category: 'equipment_finance',
    principal: 1000000,
    annualInterestRatePct: 14.5,
    termYears: 5,
    compoundingFrequency: 12,
    descriptionEn: 'Medium-term commercial loan to acquire high-capacity CNC machinery and automated assembly lines.',
    descriptionAr: 'تمويل متوسط الأجل لشراء ماكينات صناعية متطورة وخطوط إنتاج آلية متكاملة.',
  },
  {
    id: 'sme_working_capital',
    nameEn: 'SME Commercial Working Capital Loan',
    nameAr: 'قرض تمويل رأس المال العامل للمشروعات المتوسطة',
    category: 'sme_credit',
    principal: 400000,
    annualInterestRatePct: 12.0,
    termYears: 3,
    compoundingFrequency: 12,
    descriptionEn: 'Support operational cash flows, raw material procurement, and supplier invoices.',
    descriptionAr: 'تمويل السيولة التشغيلية وشراء المواد الخام وسداد مستحقات الموردين.',
  },
  {
    id: 'commercial_real_estate',
    nameEn: 'Commercial Headquarters Long-Term Mortgage',
    nameAr: 'تمويل عقاري تجاري طويل الأجل للمقر الرئيسي',
    category: 'commercial_mortgage',
    principal: 3000000,
    annualInterestRatePct: 16.0,
    termYears: 10,
    compoundingFrequency: 12,
    descriptionEn: 'Long-term secured corporate mortgage financing commercial premises in New Administrative Capital.',
    descriptionAr: 'تمويل عقاري مؤسسي طويل الأجل لامتلاك مقر إداري تجاري بالعاصمة الإدارية الجديدة.',
  },
];

// ============================================================================
// STATION 3: Capital Budgeting & DCF Project Valuation
// ============================================================================

export interface CapitalProjectPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  sectorEn: string;
  sectorAr: string;
  initialOutlay: number; // CF0 (positive number representing expenditure)
  cashFlows: number[]; // CF1 to CF5
  hurdleRateWaccPct: number; // Discount rate %
  economicLifeYears: number;
  descriptionEn: string;
  descriptionAr: string;
}

export const CAPITAL_PROJECT_PRESETS: CapitalProjectPreset[] = [
  {
    id: 'solar_energy_park',
    nameEn: 'Commercial Rooftop Solar Photovoltaic Facility (1.5 MW)',
    nameAr: 'مشروع محطة طاقة شمسية كهروضوئية تجارية (١.٥ ميجاوات)',
    sectorEn: 'Clean Energy & Industrial Efficiency',
    sectorAr: 'الطاقة النظيفة وخفض تكاليف الكهرباء الصناعية',
    initialOutlay: 2500000,
    cashFlows: [750000, 850000, 920000, 950000, 980000],
    hurdleRateWaccPct: 14.0,
    economicLifeYears: 5,
    descriptionEn: 'Generates clean on-site electricity for industrial plant, selling excess power to grid under net metering regulations.',
    descriptionAr: 'توليد الطاقة الكهربائية ذاتياً للمجمع الصناعي وتوفير تكلفة الفواتير مع بيع الفائض للشبكة القومية.',
  },
  {
    id: 'automated_logistics_hub',
    nameEn: 'Cold-Chain Refrigerated Logistics Distribution Center',
    nameAr: 'مركز لوجستي مبرد لسلاسل الإمداد والتخزين الذكي',
    sectorEn: 'Food Logistics & Modern Warehousing',
    sectorAr: 'الخدمات اللوجستية والتخزين المبرد للصادرات الغذائية',
    initialOutlay: 4000000,
    cashFlows: [1100000, 1350000, 1600000, 1750000, 1900000],
    hurdleRateWaccPct: 15.5,
    economicLifeYears: 5,
    descriptionEn: 'High-tech temperature-controlled logistics hub serving domestic pharmaceutical and agricultural export markets.',
    descriptionAr: 'مركز تخزين لوجستي فائق التطور بمواصفات قياسية لخدمة صادرات المنتجات الزراعية والدوائية.',
  },
  {
    id: 'fintech_cloud_switch',
    nameEn: 'Next-Gen Instant Electronic Payment Processing Gateway',
    nameAr: 'بوابة معالجة المدفوعات والتحصيل الإلكتروني اللحظي',
    sectorEn: 'Financial Technology & Cloud Infrastructure',
    sectorAr: 'التكنولوجيا المالية والبنية التحتية السحابية للمدفوعات',
    initialOutlay: 1800000,
    cashFlows: [600000, 900000, 1200000, 1400000, 1500000],
    hurdleRateWaccPct: 18.0,
    economicLifeYears: 5,
    descriptionEn: 'Proprietary payment switch connecting e-commerce merchants with InstaPay and national banking rails.',
    descriptionAr: 'بوابة دفع مصرفية مؤتمتة لربط المتاجر الإلكترونية بشبكة إنستاباي الوطنية والبطاقات المصرفية.',
  },
];

// ============================================================================
// STATION 4: Commercial Banking & Credit Risk Engine
// ============================================================================

export interface BorrowerCreditProfile {
  id: string;
  nameEn: string;
  nameAr: string;
  industryEn: string;
  industryAr: string;
  characterScore: number; // 0-100 (Credit history, management integrity, audit clean opinion)
  capacityScore: number; // 0-100 (Interest Coverage Ratio, operating cash flows)
  capitalScore: number; // 0-100 (Leverage D/E ratio, net worth, equity contribution)
  collateralScore: number; // 0-100 (Mortgage/tangible pledge coverage, appraisal quality)
  conditionsScore: number; // 0-100 (Industry cycle, economic stability, regulatory standing)
  loanAmountRequested: number;
  interestRateSpreadPct: number; // Base rate + spread
}

export const BORROWER_PROFILES: BorrowerCreditProfile[] = [
  {
    id: 'blue_chip_manufacturer',
    nameEn: 'Alexandria Heavy Forging & Steel Co.',
    nameAr: 'شركة الإسكندرية للحدادة الهندسية وتشكيل المعادن',
    industryEn: 'Heavy Industrial Engineering',
    industryAr: 'الصناعات الهندسية والتعدينية الثقيلة',
    characterScore: 95,
    capacityScore: 92,
    capitalScore: 88,
    collateralScore: 94,
    conditionsScore: 86,
    loanAmountRequested: 5000000,
    interestRateSpreadPct: 2.25,
  },
  {
    id: 'mid_market_pharma',
    nameEn: 'Pharaohs Pharmaceutical Laboratories',
    nameAr: 'مختبرات الفراعنة للصناعات الدوائية والمستلزمات الطبية',
    industryEn: 'Pharmaceuticals & Healthcare',
    industryAr: 'الأدوية والمستحضرات والمستلزمات الطبية',
    characterScore: 84,
    capacityScore: 78,
    capitalScore: 76,
    collateralScore: 80,
    conditionsScore: 82,
    loanAmountRequested: 2500000,
    interestRateSpreadPct: 4.5,
  },
  {
    id: 'speculative_developer',
    nameEn: 'Oasis Luxury Coastal Resort Development',
    nameAr: 'شركة الواحة للتطوير السياحي والمنتجعات الساحلية',
    industryEn: 'Leisure & Real Estate Development',
    industryAr: 'التطوير العقاري السياحي والضيافة',
    characterScore: 68,
    capacityScore: 58,
    capitalScore: 52,
    collateralScore: 72,
    conditionsScore: 55,
    loanAmountRequested: 4000000,
    interestRateSpreadPct: 7.75,
  },
];

// ============================================================================
// STATION 5: Portfolio Theory, CAPM & Financial Risk Analytics
// ============================================================================

export interface FinancialAsset {
  id: string;
  ticker: string;
  nameEn: string;
  nameAr: string;
  expectedReturnPct: number; // E(R) %
  volatilityPct: number; // Standard deviation sigma %
  beta: number; // Systematic risk beta
  dividendYieldPct: number; // %
  sectorEn: string;
  sectorAr: string;
}

export const FINANCIAL_ASSETS: FinancialAsset[] = [
  {
    id: 'egx_bank',
    ticker: 'COMI',
    nameEn: 'Commercial International Bank (CIB Egypt)',
    nameAr: 'البنك التجاري الدولي (CIB)',
    expectedReturnPct: 21.5,
    volatilityPct: 18.0,
    beta: 1.15,
    dividendYieldPct: 4.2,
    sectorEn: 'Banking & Financial Services',
    sectorAr: 'الخدمات المصرفية والمالية',
  },
  {
    id: 'egx_telecom',
    ticker: 'ETEL',
    nameEn: 'Telecom Egypt S.A.E. (WE)',
    nameAr: 'الشركة المصرية للاتصالات (WE)',
    expectedReturnPct: 17.5,
    volatilityPct: 14.0,
    beta: 0.85,
    dividendYieldPct: 5.5,
    sectorEn: 'Telecommunications & Digital Infrastructure',
    sectorAr: 'الاتصالات وتكنولوجيا المعلومات',
  },
  {
    id: 'egx_industrial',
    ticker: 'SWDY',
    nameEn: 'Elsewedy Electric Co.',
    nameAr: 'شركة السويدي إليكتريك',
    expectedReturnPct: 24.0,
    volatilityPct: 22.0,
    beta: 1.30,
    dividendYieldPct: 3.8,
    sectorEn: 'Heavy Cables & Industrial Infrastructure',
    sectorAr: 'الكابلات والصناعات الهندسية المتطورة',
  },
  {
    id: 'egx_defensive',
    ticker: 'JUFO',
    nameEn: 'Juhayna Food Industries',
    nameAr: 'جهينة للصناعات الغذائية',
    expectedReturnPct: 15.0,
    volatilityPct: 11.5,
    beta: 0.65,
    dividendYieldPct: 6.0,
    sectorEn: 'Consumer Staples & Packaged Food',
    sectorAr: 'السلع الاستهلاكية والأغذية المعبأة',
  },
];
