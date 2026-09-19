// Business Administration & Entrepreneurship Virtual Studio Data
// Covering DCF Valuation, Break-Even Analysis, Lean Canvas, EOQ Supply Chain, and Strategic Decision Scenarios

export interface DCFValuationPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  sectorEn: string;
  sectorAr: string;
  descriptionEn: string;
  descriptionAr: string;
  initialCashFlow: number; // Year 0 FCF (in thousands EGP)
  growthRateEarly: number; // Years 1-3 growth rate (%)
  growthRateLate: number;  // Years 4-5 growth rate (%)
  terminalGrowthRate: number; // Perpetual g (%)
  riskFreeRate: number; // Rf (%)
  equityBeta: number; // Beta
  marketRiskPremium: number; // ERP (%)
  costOfDebtPreTax: number; // Rd (%)
  taxRate: number; // Tax (%)
  debtWeight: number; // Weight of Debt (%)
  equityWeight: number; // Weight of Equity (%)
  sharesOutstanding: number; // Number of shares (in thousands)
  netDebt: number; // Total Debt - Cash (in thousands EGP)
}

export interface BreakEvenPreset {
  id: string;
  titleEn: string;
  titleAr: string;
  industryEn: string;
  industryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  fixedCosts: number; // EGP
  variableCostPerUnit: number; // EGP
  sellingPricePerUnit: number; // EGP
  currentVolume: number; // current planned units
  targetProfit: number; // target net profit EGP
}

export interface LeanCanvasBlock {
  blockKey: 'problem' | 'solution' | 'uvp' | 'advantage' | 'segments' | 'metrics' | 'channels' | 'costs' | 'revenue';
  titleEn: string;
  titleAr: string;
  placeholderEn: string;
  placeholderAr: string;
  iconName: string;
}

export interface LeanCanvasCaseStudy {
  id: string;
  ventureNameEn: string;
  ventureNameAr: string;
  taglineEn: string;
  taglineAr: string;
  industryEn: string;
  industryAr: string;
  blocks: {
    problemEn: string[];
    problemAr: string[];
    solutionEn: string[];
    solutionAr: string[];
    uvpEn: string;
    uvpAr: string;
    advantageEn: string;
    advantageAr: string;
    segmentsEn: string[];
    segmentsAr: string[];
    metricsEn: string[];
    metricsAr: string[];
    channelsEn: string[];
    channelsAr: string[];
    costsEn: string[];
    costsAr: string[];
    revenueEn: string[];
    revenueAr: string[];
  };
}

export interface EOQSupplyChainPreset {
  id: string;
  productNameEn: string;
  productNameAr: string;
  categoryEn: string;
  categoryAr: string;
  annualDemand: number; // D (units/year)
  orderCost: number; // S (EGP per order)
  holdingCostPerUnit: number; // H (EGP/unit/year)
  unitPurchasePrice: number; // C (EGP)
  leadTimeDays: number; // L (days)
  workingDaysPerYear: number;
  safetyStockUnits: number;
}

export interface BusinessScenarioQuizItem {
  id: string;
  titleEn: string;
  titleAr: string;
  contextEn: string;
  contextAr: string;
  questionEn: string;
  questionAr: string;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  rationaleEn: string;
  rationaleAr: string;
  bloomLevel: 'Analysis' | 'Evaluation' | 'Strategic Decision';
}

export const DCF_VALUATION_PRESETS: DCFValuationPreset[] = [
  {
    id: 'fintech_saas',
    nameEn: 'PayFlow MENA (FinTech SaaS)',
    nameAr: 'باي فلو مينا (منصة دفع سحابية رقمية)',
    sectorEn: 'Digital Payments & Financial Software',
    sectorAr: 'المدفوعات الإلكترونية وبرمجيات التقنية المالية',
    descriptionEn: 'High-growth B2B fintech gateway offering instant settlement APIs and multi-currency merchant processing across Egypt and the GCC.',
    descriptionAr: 'بوابة تقنية مالية سريعة النمو توفر واجهات برمجة (APIs) للتسوية الفورية والتحصيل متعدد العملات للتجار في مصر والخليج.',
    initialCashFlow: 12000,
    growthRateEarly: 38,
    growthRateLate: 22,
    terminalGrowthRate: 5.5,
    riskFreeRate: 18.5,
    equityBeta: 1.35,
    marketRiskPremium: 8.0,
    costOfDebtPreTax: 21.0,
    taxRate: 22.5,
    debtWeight: 15,
    equityWeight: 85,
    sharesOutstanding: 5000,
    netDebt: -15000, // Net cash
  },
  {
    id: 'fmcg_food',
    nameEn: 'Nile Grains & Food Industries',
    nameAr: 'صناعات حبوب النيل والأغذية المحفوظة',
    sectorEn: 'FMCG & Food Processing',
    sectorAr: 'السلع الاستهلاكية سريعة الدوران والتصنيع الغذائي',
    descriptionEn: 'Established Egyptian consumer goods manufacturer with strong domestic brand equity, automated packaging lines, and stable export channels.',
    descriptionAr: 'مؤسسة صناعية مصرية رائدة في إنتاج السلع الغذائية الاستهلاكية تمتلك حصة سوقية مستقرة وخطوط تعبئة آلية متطورة وشبكة تصدير إقليمية.',
    initialCashFlow: 45000,
    growthRateEarly: 14,
    growthRateLate: 9,
    terminalGrowthRate: 4.0,
    riskFreeRate: 18.5,
    equityBeta: 0.85,
    marketRiskPremium: 7.5,
    costOfDebtPreTax: 20.0,
    taxRate: 22.5,
    debtWeight: 40,
    equityWeight: 60,
    sharesOutstanding: 12000,
    netDebt: 35000,
  },
  {
    id: 'renewable_energy',
    nameEn: 'Aswan Solar Spark Infrastructure',
    nameAr: 'مؤسسة شرارة أسوان للطاقة المتجددة',
    sectorEn: 'Utility-Scale Solar Energy & Infrastructure',
    sectorAr: 'مشروعات البنية التحتية ومحطات الطاقة الشمسية',
    descriptionEn: 'Utility-scale 250MW photovoltaic project operating under long-term Feed-in Tariff (FiT) government power purchase agreements (PPA).',
    descriptionAr: 'مشروع محطة توليد كهروضوئية بقدرة ٢٥٠ ميجاوات يعمل بموجب اتفاقية شراء طاقة (PPA) طويلة الأجل بتعريفة تغذية محددة مع وزارة الكهرباء.',
    initialCashFlow: 85000,
    growthRateEarly: 6,
    growthRateLate: 4,
    terminalGrowthRate: 3.0,
    riskFreeRate: 18.5,
    equityBeta: 0.65,
    marketRiskPremium: 7.0,
    costOfDebtPreTax: 19.5,
    taxRate: 22.5,
    debtWeight: 70,
    equityWeight: 30,
    sharesOutstanding: 20000,
    netDebt: 180000,
  },
];

export const BREAK_EVEN_PRESETS: BreakEvenPreset[] = [
  {
    id: 'manufacturing_plastics',
    titleEn: 'EcoPolymer Packaging Plant',
    titleAr: 'مصنع إيكو بوليمر لمواد التعبئة الصديقة للبيئة',
    industryEn: 'Industrial Manufacturing',
    industryAr: 'التصنيع الصناعي والبتروكيماويات التحويلية',
    descriptionEn: 'High-capacity production facility making biodegradable packaging materials with high factory overhead and raw polymer bulk costs.',
    descriptionAr: 'منشأة صناعية ذات طاقة إنتاجية ضخمة لإنتاج عبوات قابلة للتحلل الحيوي بتكاليف إيجار وصيانة وتأمين رأسمالية مرتفعة وتكلفة خامات متغيرة.',
    fixedCosts: 1800000,
    variableCostPerUnit: 24,
    sellingPricePerUnit: 48,
    currentVolume: 95000,
    targetProfit: 600000,
  },
  {
    id: 'saas_cloud',
    titleEn: 'EduSuite Cloud LMS',
    titleAr: 'منصة إديو سويت السحابية لإدارة التعلم',
    industryEn: 'SaaS Software Platform',
    industryAr: 'البرمجيات كخدمة سحابية (SaaS)',
    descriptionEn: 'B2B subscription software for private schools. High fixed engineering salaries and cloud servers, but negligible marginal delivery cost per student seat.',
    descriptionAr: 'منصة اشتراكات برمجية سحابية للمدارس الخاصة؛ تتميز بتكاليف ثابتة لرواتب المطورين والخوادم، مقابل تكلفة حدية شبه معدومة لكل اشتراك إضافي.',
    fixedCosts: 750000,
    variableCostPerUnit: 15,
    sellingPricePerUnit: 165,
    currentVolume: 8000,
    targetProfit: 450000,
  },
  {
    id: 'specialty_cafe',
    titleEn: 'Artisan Roastery & Specialty Café',
    titleAr: 'محمصة وكافيه القهوة المختصة',
    industryEn: 'Food & Beverage / Retail Hospitality',
    industryAr: 'الأغذية والمشروبات والضيافة',
    descriptionEn: 'Urban flagship café with prime real estate rent, barista payroll, espresso machinery depreciation, and single-origin coffee bean cost.',
    descriptionAr: 'فرع تجاري مميز في موقع حيوي، يتحمل إيجاراً مرتفعاً وأجور صانعي القهوة واستهلاك ماكينات الإسبريسو وتكلفة حبوب البن المختصة والحليب.',
    fixedCosts: 320000,
    variableCostPerUnit: 35,
    sellingPricePerUnit: 95,
    currentVolume: 7200,
    targetProfit: 120000,
  },
];

export const LEAN_CANVAS_BLOCKS: LeanCanvasBlock[] = [
  {
    blockKey: 'problem',
    titleEn: '1. Problem',
    titleAr: '١. المشكلة القائمة',
    placeholderEn: 'Top 3 core pain points experienced by target customer personas...',
    placeholderAr: 'أبرز ٣ مشاكل وتحديات جوهرية يعاني منها العملاء المستهدفون...',
    iconName: 'AlertCircle',
  },
  {
    blockKey: 'segments',
    titleEn: '2. Customer Segments',
    titleAr: '٢. شرائح العملاء',
    placeholderEn: 'Target customers and defining traits of early adopters...',
    placeholderAr: 'العملاء المستهدفون بدقة والخصائص المميزة للرواد الأوائل (Early Adopters)...',
    iconName: 'Users',
  },
  {
    blockKey: 'uvp',
    titleEn: '3. Unique Value Proposition',
    titleAr: '٣. عرض القيمة الفريد (UVP)',
    placeholderEn: 'Single, clear, compelling message stating why you are different and worth paying for...',
    placeholderAr: 'رسالة واضحة وجذابة تلخص سبب تفرد الحل وقيمته ولماذا يستحق الشراء...',
    iconName: 'Sparkles',
  },
  {
    blockKey: 'solution',
    titleEn: '4. Solution',
    titleAr: '٤. الحل المقترح (MVP)',
    placeholderEn: 'Top 3 core features of the Minimum Viable Product...',
    placeholderAr: 'أبرز ٣ ميزات وخصائص جوهرية في النموذج الأولي القابل للتطبيق...',
    iconName: 'Lightbulb',
  },
  {
    blockKey: 'channels',
    titleEn: '5. Channels',
    titleAr: '٥. قنوات الوصول والتوزيع',
    placeholderEn: 'Direct, digital, and partnership pathways to reach customers...',
    placeholderAr: 'المسارات الرقمية والمباشرة والشراكات للوصول للعملاء وإتمام البيع...',
    iconName: 'Share2',
  },
  {
    blockKey: 'revenue',
    titleEn: '6. Revenue Streams',
    titleAr: '٦. مصادر الإيرادات',
    placeholderEn: 'Monetization models: subscriptions, transaction fees, margins...',
    placeholderAr: 'نماذج تحقيق الدخل: الاشتراكات الشهرية، عمولات المعاملات، وهوامش الربح...',
    iconName: 'DollarSign',
  },
  {
    blockKey: 'costs',
    titleEn: '7. Cost Structure',
    titleAr: '٧. هيكل التكاليف',
    placeholderEn: 'Customer acquisition costs, engineering, infrastructure, licensing...',
    placeholderAr: 'تكاليف استقطاب العملاء (CAC)، الرواتب الهندسية، السيرفرات، والتراخيص...',
    iconName: 'Receipt',
  },
  {
    blockKey: 'metrics',
    titleEn: '8. Key Metrics',
    titleAr: '٨. المقاييس الرقمية الأساسية',
    placeholderEn: 'AARRR funnel metrics: Acquisition, Activation, Retention, Referral, Revenue...',
    placeholderAr: 'مؤشرات قمع النمو AARRR: الاستقطاب، التفعيل، الاستبقاء، الإحالة، والإيراد...',
    iconName: 'TrendingUp',
  },
  {
    blockKey: 'advantage',
    titleEn: '9. Unfair Advantage',
    titleAr: '٩. الميزة التنافسية الحصينة',
    placeholderEn: 'Asset or capability that cannot be easily copied, bought, or replicated...',
    placeholderAr: 'أصل أو قدرة حصرية لا يمكن للمنافسين شراؤها أو نسخها أو هندستها عكسياً...',
    iconName: 'ShieldCheck',
  },
];

export const LEAN_CANVAS_CASES: LeanCanvasCaseStudy[] = [
  {
    id: 'case_seha_tech',
    ventureNameEn: 'SehaTech Egypt',
    ventureNameAr: 'صحة تك مصر',
    taglineEn: 'AI-Powered Digital Triage & Rural Telemedicine Network',
    taglineAr: 'شبكة التطبيب عن بعد والفرز الإكلينيكي الذكي للقرى والمحافظات',
    industryEn: 'Digital HealthTech',
    industryAr: 'التقنية الطبية والرعاية الصحية الرقمية',
    blocks: {
      problemEn: [
        'Acute shortage of specialized medical consultants in Upper Egypt and Delta provinces.',
        'High travel costs, lost working days, and severe clinic waiting queues for chronic disease patients.',
        'Fragmented paper medical records causing diagnostic duplications and medication error risks.',
      ],
      problemAr: [
        'عجز حاد في توافر الأطباء الاستشاريين التخصصيين بمحافظات الصعيد والدلتا مقارنة بالقاهرة الكبرى.',
        'تكاليف سفر وإقامة باهظة وفقدان أيام عمل للمرضى مع طوابير انتظار مجهدة بعيادات المدن الكبرى.',
        'تبعثر السجلات الطبية الورقية وفقدانها مما يؤدي لتكرار الفحوصات ومخاطر التداخلات الدوائية.',
      ],
      solutionEn: [
        'Secure HIPAA-compliant HD video consultation app integrated with digital prescription generation.',
        'Cloud Electronic Health Record (EHR) synchronized across pharmacies, labs, and specialists.',
        'AI triage symptom checker routing patients to the exact medical specialty within 90 seconds.',
      ],
      solutionAr: [
        'منصة استشارات مرئية فائقة الجودة مشفرة بالكامل مع إصدار وصفات طبية إلكترونية معتمدة.',
        'ملف صحي رقمي موحد (EHR) متصل سحابياً مع شبكات الصيدليات ومعامل التحاليل المركزية.',
        'خوارزمية ذكاء اصطناعي لفرز الأعراض وتوجيه المريض للتخصص الدقيق خلال ٩٠ ثانية.',
      ],
      uvpEn: 'Consult top university professors within 15 minutes from your home at 60% lower total cost than traveling to Cairo.',
      uvpAr: 'استشر كبار أساتذة الطب الجامعيين خلال ١٥ دقيقة من منزلك بتكلفة تقل ٦٠٪ عن مشقة السفر للعاصمة.',
      advantageEn: 'Proprietary clinical diagnostic dialect NLP dataset for Egyptian Arabic + exclusive tele-consultation agreements with 6 University Teaching Hospitals.',
      advantageAr: 'خوارزمية معالجة لغوية طبيعية متدربة على اللهجات الطبية الشعبية المصرية + بروتوكولات حصرية مع ٦ مستشفيات جامعية كبرى.',
      segmentsEn: [
        'Chronic illness patients (diabetes, hypertension, cardiology) in Upper Egypt and Nile Delta.',
        'Early Adopters: Tech-savvy adult children booking and financing consultations for elderly parents.',
      ],
      segmentsAr: [
        'مرضى الحالات المزمنة (السكري، الضغط، القلب) المقيمين في المحافظات والأقاليم البعيدة.',
        'المتبنون الأوائل: الأبناء الموظفون والشباب الذين يحجزون ويدفعون إلكترونياً لوالديهم المسنين.',
      ],
      metricsEn: [
        'Monthly Active Consultations (MAC)',
        '30-Day Patient Retention & Follow-up Rate (>45%)',
        'Customer Acquisition Cost (CAC) vs Lifetime Value (LTV > 4x CAC)',
      ],
      metricsAr: [
        'عدد الاستشارات النشطة شهرياً (MAC)',
        'معدل عودة المريض واستمراريته خلال ٣٠ يوماً (>٤٥٪)',
        'تكلفة استقطاب العميل (CAC) مقارنة بالقيمة الدائمة للعميل (LTV > 4x CAC)',
      ],
      channelsEn: [
        'Partnerships with rural pharmacy networks acting as local digital booking kiosks.',
        'Targeted Facebook & TikTok educational health videos by verified Egyptian medical doctors.',
        'Corporate B2B employee health wellness packages for agrarian and industrial enterprises.',
      ],
      channelsAr: [
        'شراكات مع سلاسل الصيدليات بالأقاليم كنقاط حجز وقياس حيوي ومساعدة تقنية للمرضى.',
        'حملات توعية صحية مستهدفة عبر فيسبوك وتيك توك يقدمها أطباء معتمدون ومحبوبون.',
        'عقود رعاية طبية وتأمين تكميلي لموظفي الشركات الزراعية والمصانع الإقليمية.',
      ],
      costsEn: [
        'Cloud server infrastructure & WebRTC video streaming bandwidth.',
        'Medical compliance, ISO certification, and ministerial telehealth operating licensing.',
        'Performance marketing, customer support team, and physician onboarding incentives.',
      ],
      costsAr: [
        'تكاليف الخوادم السحابية ونطاق نقل البث المرئي المشفر (WebRTC).',
        'تراخيص مزاولة الطب عن بعد واعتمادات هيئة الرقابة الصحية والامتثال الطبي القانوني.',
        'حملات التسويق الرقمي وفريق خدمة العملاء ومكافآت تدريب واعتماد الأطباء الجدد.',
      ],
      revenueEn: [
        '18% platform transaction commission on every completed video consultation fee.',
        'Monthly SaaS subscription from private specialized clinics utilizing the EHR suite.',
        'B2B diagnostic commission sharing with partnered nationwide laboratory and radiology chains.',
      ],
      revenueAr: [
        'عمولة وساطة بنسبة ١٨٪ على قيمة كل استشارة طبية تتم بنجاح عبر المنصة.',
        'اشتراك شهري للعيادات الخاصة الراغبة في استخدام برمجية السجل الطبي الإلكتروني.',
        'نسبة مشاركة في إيرادات التحاليل والأشعة المحولة لمراكز الفحوصات والتحاليل الشريكة.',
      ],
    },
  },
  {
    id: 'case_mahsoly',
    ventureNameEn: 'Mahsoly ColdChain Logistics',
    ventureNameAr: 'محصولي للوجستيات وسلاسل التبريد',
    taglineEn: 'IoT Cold-Chain Transport & Direct B2B Agricultural Marketplace',
    taglineAr: 'منظومة سلاسل التبريد المتصلة بإنترنت الأشياء ومنصة التجارة الزراعية المباشرة',
    industryEn: 'AgriTech & Cold Chain Supply Network',
    industryAr: 'التقنية الزراعية وسلاسل الإمداد المبردة',
    blocks: {
      problemEn: [
        'Over 32% of fresh horticultural harvest spoils before reaching urban markets due to lack of refrigerated transport.',
        'Multiple predatory middlemen layers squeeze farmer farmgate prices while driving retail food inflation.',
        'Absence of traceable harvest grading standards restricting smallholders from high-margin export markets.',
      ],
      problemAr: [
        'تلف أكثر من ٣٢٪ من المحاصيل البستانية والخضروات قبل وصولها للأسواق بسبب غياب شاحنات التبريد المتطورة.',
        'تعدد طبقات الوسطاء والمضاربين مما يخفض سعر البيع للمزارع ويرفع السعر النهائي على المستهلك.',
        'غياب معايير الفرز والتدريج الرقمي الموثوق مما يحرم صغار الفلاحين من عوائد التصدير المجزية.',
      ],
      solutionEn: [
        'On-demand fleet matching app for temperature-controlled refrigerated reefers equipped with IoT telemetry.',
        'Direct B2B procurement portal connecting farmer cooperatives directly with supermarket chains and hotels.',
        'Decentralized mobile grading & hydro-cooling hubs at primary agrarian collection zones.',
      ],
      solutionAr: [
        'تطبيق لطلب ومشاركة شاحنات التبريد المجهزة بحساسات إنترنت الأشياء لمراقبة الحرارة والرطوبة لحظياً.',
        'سوق جملة رقمي يربط الجمعيات الزراعية مباشرة بسلاسل السوبرماركت ومصانع الأغذية والفنادق.',
        'محطات فرز وتبريد مائي أولية متنقلة تقام بالقرب من حقول التجميع في المحافظات الزراعية.',
      ],
      uvpEn: 'Cut harvest transport spoilage to under 3% while increasing farmer net take-home cash margins by 28%.',
      uvpAr: 'تقليص نسب هدر وتلف المحاصيل إلى أقل من ٣٪ مع رفع صافي أرباح المزارع بنسبة ٢٨٪.',
      advantageEn: 'Proprietary dynamic thermal routing algorithm optimizing reefer backhaul loads across agricultural trade corridors.',
      advantageAr: 'خوارزمية مسارات تبريد ذكية تحسن شحن البضائع في رحلات العودة مما يخفض تكلفة النقل بنسبة ٤٠٪.',
      segmentsEn: [
        'Export-oriented small-to-medium horticultural farm owners in Beheira, Nubaria, and Minya.',
        'B2B Buyers: Hypermarket retail procurement managers and food canning export factories.',
      ],
      segmentsAr: [
        'صغار ومتوسطو مزارعي الخضار والفواكه التصديرية بمناطق النوبارية، البحيرة، والمنيا.',
        'مشترو الجملة: مدراء التوريدات بسلاسل الهايبرماركت ومصانع تجميد وتعبئة الأغذية للتصدير.',
      ],
      metricsEn: [
        'Tons of Fresh Produce Transported per Month',
        'Average Spoilage Percentage in Transit (<3%)',
        'Reefer Fleet Capacity Utilization Factor (>82%)',
      ],
      metricsAr: [
        'أطنان المحاصيل الطازجة المنقولة شهرياً',
        'نسبة التلف والفاقد أثناء الشحن والنقل (<٣٪)',
        'معامل تشغيل واستغلال أسطول الشاحنات المبردة (>٨٢٪)',
      ],
      channelsEn: [
        'Direct partnerships with Agricultural Cooperatives and local agrarian reform syndicates.',
        'B2B trade exhibitions (Sahara Expo, Food Africa) and agricultural chamber of commerce delegations.',
        'Agronomic field agents visiting packhouses equipped with demonstration IoT tablets.',
      ],
      channelsAr: [
        'التعاون الميداني المباشر مع الجمعيات الزراعية التعاونية وروابط مستخدمي المياه.',
        'المعارض الزراعية والتجارية الدولية (معرض صحارى، فوود أفريكا) والغرف التجارية.',
        'مندوبو إرشاد ميداني يزورون محطات التعبئة والمزارع مزودين بأجهزة لوحية للشرح الحي.',
      ],
      costsEn: [
        'IoT sensor telemetry hardware procurement and cellular data transmission charges.',
        'Refrigerated fleet partner advance guarantees and freight cargo insurance policies.',
        'Agronomic quality assurance inspection teams and warehouse leasing.',
      ],
      costsAr: [
        'تكلفة شراء وتركيب حساسات التبريد IoT وشحن باقات نقل البيانات الخلوية المشفرة.',
        'وثائق التأمين الشامل على البضائع والشحنات المبردة وضمانات سداد مستحقات السائقين.',
        'رواتب مهندسي الفرز وضبط الجودة وتأجير مراكز التبريد والفرز اللوجستية.',
      ],
      revenueEn: [
        '8% take rate on gross merchandise value (GMV) of transacted wholesale agricultural produce.',
        'Per-kilometer refrigerated freight logistics fee paid by corporate institutional buyers.',
        'Premium quality certification and laboratory residue testing fees.',
      ],
      revenueAr: [
        'نسبة عمولة ٨٪ من القيمة الإجمالية للمحاصيل المباعة عبر المنصة (GMV).',
        'تعريفة نقل شحن مبرد لكل طن/كيلومتر تدفعها الشركات والمصانع المستلمة للبضائع.',
        'رسوم خدمات الفحص المخبري وإصدار شهادات مطابقة الجودة وخلو المتبقيات للتصدير.',
      ],
    },
  },
];

export const EOQ_PRESETS: EOQSupplyChainPreset[] = [
  {
    id: 'pharma_vials',
    productNameEn: 'Sterile Antibiotic Vials (500mg)',
    productNameAr: 'أمبولات مضادات حيوية معقمة (٥٠٠ مجم)',
    categoryEn: 'Pharmaceuticals & Medical Supplies',
    categoryAr: 'الأدوية والمستلزمات الطبية الحرجة',
    annualDemand: 120000,
    orderCost: 450,
    holdingCostPerUnit: 3.5,
    unitPurchasePrice: 28,
    leadTimeDays: 7,
    workingDaysPerYear: 300,
    safetyStockUnits: 1500,
  },
  {
    id: 'automotive_filters',
    productNameEn: 'High-Flow Engine Oil Filters',
    productNameAr: 'فلاتر زيت محركات عالية التدفق',
    categoryEn: 'Automotive Parts & Assembly',
    categoryAr: 'قطع غيار وهندسة السيارات',
    annualDemand: 36000,
    orderCost: 650,
    holdingCostPerUnit: 12.0,
    unitPurchasePrice: 110,
    leadTimeDays: 14,
    workingDaysPerYear: 300,
    safetyStockUnits: 800,
  },
  {
    id: 'solar_inverters',
    productNameEn: '10kW Hybrid Solar Inverters',
    productNameAr: 'محولات طاقة شمسية هجينة بقدرة ١٠ كيلووات',
    categoryEn: 'Clean Energy & Electrical Equipment',
    categoryAr: 'الطاقة النظيفة والمعدات الكهربائية الصناعية',
    annualDemand: 4800,
    orderCost: 2200,
    holdingCostPerUnit: 180.0,
    unitPurchasePrice: 14500,
    leadTimeDays: 25,
    workingDaysPerYear: 300,
    safetyStockUnits: 250,
  },
];

export const BUSINESS_SCENARIO_QUIZ: BusinessScenarioQuizItem[] = [
  {
    id: 'scen_01',
    titleEn: 'Supplier Bargaining Power Crisis in Microchip Assembly',
    titleAr: 'أزمة تفاوضية مع موردي الرقائق الدقيقة في تجميع الإلكترونيات',
    contextEn: 'A Cairo-based smart metering enterprise finds its gross profit margins shrinking from 34% to 14% because its sole foreign microchip vendor imposed a 40% price hike on short notice. Substitutes require lengthy ministerial re-certification.',
    contextAr: 'تعاني شركة مصرية متخصصة في تجميع العدادات الذكية من تآكل هامش مجمل الربح من ٣٤٪ إلى ١٤٪ نتيجة قيام المورد الأجنبي الحصري للرقائق الدقيقة برفع الأسعار بنسبة ٤٠٪ بصورة مفاجئة، علماً بأن اعتماد مورد بديل يستلزم إجراءات فحص مطابقة وزارية تستغرق ٩ أشهر.',
    questionEn: 'Applying Porter’s Five Forces and strategic supply chain management, what is the most structurally sound strategic remedy for the executive leadership?',
    questionAr: 'بتطبيق نموذج القوى الخمس لبورتر والإدارة الاستراتيجية لسلاسل الإمداد، ما هو الإجراء الاستراتيجي الأكثر فاعلية لحماية الشركة واستدامة ربحيتها؟',
    optionsEn: [
      'Immediately halt all manufacturing operations until the sole supplier reduces prices back to previous levels.',
      'Initiate dual-sourcing pre-qualification, design modular chip architecture to reduce switching barriers, and explore long-term hedge contracts.',
      'Attempt predatory price cutting on the finished smart meters to drive domestic competitors out of the market.',
      'Absorb the cost indefinitely and reduce employee healthcare and quality assurance audits to preserve book profits.',
    ],
    optionsAr: [
      'الإيقاف التام لكافة خطوط الإنتاج والامتناع عن الشراء حتى يتراجع المورد الحصري عن زيادة الأسعار.',
      'البدء الفوري في اعتماد استراتيجية التوريد المزدوج، وإعادة تصميم هندسة اللوحات لتكون معيارية مرنة لتقليل تكاليف التحويل، وإبرام عقود تحوط طويلة الأجل.',
      'حرق أسعار بيع العدادات التامة في السوق المحلي لدفع المنافسين للإفلاس وتحمل الخسائر.',
      'تحمل الزيادة في التكلفة بشكل دائم مع تقليص ميزانيات الرعاية الصحية للموظفين واختبارات الجودة لتعويض العجز.',
    ],
    correctIndex: 1,
    rationaleEn: 'When supplier bargaining power is exceptionally high due to high switching costs and single-source dependency, the durable strategic remedy is dual-sourcing, engineering modular compatibility to slash future switching costs, and forward pricing contracts.',
    rationaleAr: 'عندما ترتفع القوة التفاوضية للموردين بسبب ارتفاع تكاليف التحويل والاعتماد على مصدر وحيد، يكون العلاج الاستراتيجي المستدام هو التوريد المتعدد (Dual-sourcing)، وهندسة معيارية تتيح تبديل الرقائق بسهولة مستقبلاً، وعقود توريد طويلة الأجل.',
    bloomLevel: 'Strategic Decision',
  },
  {
    id: 'scen_02',
    titleEn: 'Corporate Governance & The Agency Dilemma in Capital Reinvestment',
    titleAr: 'حوكمة الشركات ومعضلة الوكالة في إعادة استثمار الأرباح الرأسمالية',
    contextEn: 'The CEO of a publicly listed manufacturing firm recommends acquiring a prestigious luxury executive jet and constructing a high-profile skyscraper headquarters, funded by cutting research & development budgets and taking high-interest mezzanine debt.',
    contextAr: 'اقترح الرئيس التنفيذي لشركة صناعية مساهمة مقيدة بالبورصة شراء طائرة نفاثة فاخرة لكبار المديرين وبناء برج إداري شاهق التكلفة للمقر الرئيسي، مع تمويل ذلك عبر تجميد ميزانيات البحث والتطوير (R&D) والاقتراض قصير الأجل بفوائد بنكية مرتفعة.',
    questionEn: 'From an agency theory and board fiduciary duty perspective, what action should the Independent Audit and Governance Committee take?',
    questionAr: 'من منظور نظرية الوكالة (Agency Theory) والواجبات الائتمانية لأعضاء مجلس الإدارة المستقلين، ما هو الموقف الرقابي القويم الواجب اتخاذه؟',
    optionsEn: [
      'Unanimously approve the project because executive prestige directly improves customer brand perception.',
      'Veto the proposal, enforce strict capital allocation ROI benchmarks, and tie executive compensation to Long-Term Return on Invested Capital (ROIC).',
      'Encourage the CEO to double the borrowing amount to build two corporate towers in different governorates.',
      'Resign from the board immediately without issuing any official oversight report to the General Assembly.',
    ],
    optionsAr: [
      'الموافقة الفورية والإجماع على المقترح لأن المظاهر الفاخرة للقيادة التنفيذية تدعم الصورة الذهنية للعلامة التجارية.',
      'رفض المقترح واستخدام حق الفيتو، وإلزام الإدارة بمعايير العائد على رأس المال المستثمر (ROIC)، وربط مكافآت القيادة التنفيذية بالأداء المالي طويل الأجل.',
      'تشجيع الرئيس التنفيذي على مضاعفة الاقتراض البنكي لتشييد برجين في محافظتين مختلفتين.',
      'الاستقالة الجماعية الفورية لأعضاء اللجنة دون تدوين أي تقرير رقابي أو إخطار الجمعية العمومية للمساهمين.',
    ],
    correctIndex: 1,
    rationaleEn: 'Agency theory posits that managers may pursue empire building and personal perks at the expense of shareholder wealth. Independent board members have a fiduciary duty of care to reject value-destroying vanity projects and align incentives with ROIC.',
    rationaleAr: 'توضح نظرية الوكالة ميل بعض المديرين التنفيذيين لبناء مجد شخصي وإنفاق أموال الشركة على مظاهر ترفيهية لا تولد عائداً. ويفرض الواجب الائتماني للمجلس المستقل رفض هذه المشاريع وربط الحوافز بمعدل العائد على رأس المال المستثمر طويل الأجل (ROIC).',
    bloomLevel: 'Evaluation',
  },
  {
    id: 'scen_03',
    titleEn: 'Lean Startup Metrics: Pivot vs. Persevere Decision',
    titleAr: 'مؤشرات الشركات الناشئة الرشيقة: قرار التمحور (Pivot) مقابل الاستمرار',
    contextEn: 'An on-demand grocery delivery startup achieves 80,000 app downloads through massive advertising discounts, but cohort analysis reveals that 30-day user retention is only 3.5%, and Customer Acquisition Cost (CAC) is 420 EGP while Customer Lifetime Value (LTV) is 110 EGP.',
    contextAr: 'حققت شركة ناشئة لتوصيل البقالة ٨٠ ألف تحميل للتطبيق بفضل حملة تخفيضات إعلانية هائلة، لكن تحليل المجموعات (Cohort Analysis) أظهر أن نسبة استبقاء العملاء بعد ٣٠ يوماً لا تتعدى ٣.٥٪، وأن تكلفة استقطاب العميل (CAC) بلغت ٤٢٠ جنيهاً بينما القيمة الدائمة للعميل (LTV) لا تتجاوز ١١٠ جنيهات.',
    questionEn: 'Evaluating unit economics and Eric Ries’ Lean Startup framework, what should the founding team do?',
    questionAr: 'بتقييم اقتصاديات الوحدة (Unit Economics) وإطار الشركات الناشئة الرشيقة لإريك ريس، ما هو المسار الواجب اتباعه من قبل المؤسسين؟',
    optionsEn: [
      'Quadruple the advertising spend immediately to achieve vanity volume before anyone notices the churn.',
      'Recognize lack of Product-Market Fit, halt paid acquisition spending, interview churning cohorts, and execute a structured pivot.',
      'Ignore retention data because total downloaded users is the only metric venture investors examine.',
      'Raise consumer delivery fees by 300% to force LTV upward without changing the value proposition.',
    ],
    optionsAr: [
      'مضاعفة الإنفاق الإعلاني أربع مرات فوراً لتحقيق أرقام تنزيلات ضخمة للتغطية على تسرب العملاء.',
      'الاعتراف بغياب الملاءمة بين المنتج والسوق (Product-Market Fit)، وتجميد الإعلانات المدفوعة، ومقابلة العملاء المغادرين لتنفيذ تمحور استراتيجي (Pivot).',
      'تجاهل بيانات الاستبقاء باعتبار أن إجمالي عدد التحميلات هو المقياس الوحيد الذي يهتم به المستثمرون.',
      'رفع رسوم التوصيل على المستهلك بنسبة ٣٠٠٪ لإجبار قيمة العميل على الارتفاع دون تحسين القيمة المقدمة.',
    ],
    correctIndex: 1,
    rationaleEn: 'When LTV is significantly below CAC and retention is single-digit, the business model leaks capital. Pouring more money into acquisition burns cash on vanity metrics. The Lean Startup mandate is to halt spending and pivot based on customer discovery.',
    rationaleAr: 'عندما تنخفض القيمة الدائمة للعميل (LTV) عن تكلفة استقطابه (CAC) مع انهيار معدل الاستبقاء، يكون النموذج المالي خاسراً حتماً. ويقضي منهج اللين ستارت أب بوقف الهدر الإعلاني والعودة لدراسة رغبات العملاء لتنفيذ تمحور مدروس.',
    bloomLevel: 'Analysis',
  },
  {
    id: 'scen_04',
    titleEn: 'Working Capital Deficit & Overtrading Danger',
    titleAr: 'عجز رأس المال العامل ومخاطر الإفراط التجاري (Overtrading)',
    contextEn: 'A thriving textile factory wins three massive hotel supply contracts, multiplying sales by 300%. However, hotels demand 90-day deferred credit terms, while cotton yarn suppliers demand immediate cash payment upon delivery. The factory faces severe cash payroll default within 20 days.',
    contextAr: 'فاز مصنع منسوجات مصري بثلاثة عقود توريد ضخمة لسلاسل فنادق مما ضاعف مبيعاته بنسبة ٣٠٠٪. ولكن الفنادق تشترط السداد الآجل بعد ٩٠ يوماً، في حين يطالب موردو خيوط الغزل بالسداد النقدي الفوري عند الاستلام، مما هدد المصنع بالعجز التام عن سداد رواتب العمال والالتزامات خلال ٢٠ يوماً.',
    questionEn: 'Diagnosing this classic financial syndrome, what is the phenomenon called and what is the optimal working capital intervention?',
    questionAr: 'بتشخيص هذه الحالة المالية الكلاسيكية، ما هو التوصيف العلمي للأزمة وما هو الحل العاجل لإدارة رأس المال العامل؟',
    optionsEn: [
      'The company is bankrupt due to unprofitability; it must liquidate all looms and machinery immediately.',
      'This is classic "Overtrading"; the firm must secure invoice factoring or a revolving receivables working capital facility to bridge the cash conversion cycle.',
      'The company should double its orders of raw cotton to receive volume bulk discounts.',
      'The company should refuse to deliver the manufactured sheets and break all contracts unconditionally.',
    ],
    optionsAr: [
      'الشركة مفلسة تماماً ومعدومة الربحية؛ ويجب تصفية أصول المصنع وبيع الأنوال والآلات بالمزاد فوراً.',
      'هذه ظاهرة "الإفراط التجاري" (Overtrading) الناتجة عن اتساع فجوة دورة التحويل النقدي؛ والحل هو اللجوء لتمويل رأس المال العامل عبر خصم الفواتير (Factoring) أو تسهيل ائتماني متجدد.',
      'يجب على الشركة مضاعفة طلبات شراء القطن الخام للحصول على خصم كمية إضافي.',
      'الامتناع عن تسليم البضائع المصنعة للفنادق وفسخ العقود من طرف واحد.',
    ],
    correctIndex: 1,
    rationaleEn: 'Overtrading occurs when a profitable business expands operations too rapidly without adequate working capital cash liquidity. The cash conversion cycle lengthens due to receivables delay, requiring invoice factoring or receivables-backed lines of credit to bridge payroll.',
    rationaleAr: 'تحدث ظاهرة الإفراط التجاري عندما تتوسع شركة رابحة بسرعة تفوق سيولتها النقدية المتاحة، حيث تتسع فجوة دورة التحويل النقدي بسبب تأخر تحصيل الذمم المدينة. ويتطلب الحل تدبير تمويل قصير الأجل بضمان الفواتير (Factoring) لسد الفجوة.',
    bloomLevel: 'Strategic Decision',
  },
  {
    id: 'scen_05',
    titleEn: 'Optimal Capital Structure & WACC Minimization',
    titleAr: 'الهيكل التمويلي الأمثل وتخفيض التكلفة المرجحة لرأس المال (WACC)',
    contextEn: 'A renewable solar developer currently finances 100% of its operations through equity (Cost of Equity = 24%). Bank debt is available at 18% nominal interest, and corporate income tax is 22.5%.',
    contextAr: 'تمول شركة لتطوير محطات الطاقة الشمسية كافة مشروعاتها بنسبة ١٠٠٪ من أموال الملكية والأسهم (تكلفة الملكية = ٢٤٪). علماً بأن الاقتراض البنكي متاح بفائدة اسمية ١٨٪، ومعدل ضريبة الدخل على الشركات يبلغ ٢٢.٥٪.',
    questionEn: 'How does introducing a moderate 40% debt tranche into the capital structure impact the firm’s Weighted Average Cost of Capital (WACC) and enterprise valuation?',
    questionAr: 'كيف يؤثر إدخال شريحة اقتراض بنكي معتدلة بنسبة ٤٠٪ في الهيكل التمويلي على المتوسط المرجح لتكلفة رأس المال (WACC) وقيمة الشركة الكلية؟',
    optionsEn: [
      'WACC will increase significantly because taking any debt always damages enterprise reputation.',
      'WACC will decrease due to the lower nominal cost of debt and the interest tax shield (Rd * (1 - Tax) = 13.95%), thereby maximizing enterprise valuation.',
      'WACC remains entirely unaffected under all real-world tax conditions and capital structures.',
      'WACC will become negative, creating an immediate mathematical arbitrage impossibility.',
    ],
    optionsAr: [
      'سيرتفع WACC بشكل كبير لأن أي اقتراض بنكي يدمر سمعة الشركة في السوق حتماً.',
      'سينخفض WACC بفضل انخفاض تكلفة الدين والوفر الضريبي للفوائد (Rd * (1 - Tax) = 13.95%)، مما يؤدي لتعظيم القيمة الإجمالية للشركة.',
      'سيبقى WACC ثابتاً دون أي تغيير مهما تغيرت نسب التمويل والضرائب في الواقع العملي.',
      'ستصبح تكلفة رأس المال سالبة، مما يخلق مستحيلاً رياضياً وتناقضاً تمويلياً.',
    ],
    correctIndex: 1,
    rationaleEn: 'Because interest expenses are tax-deductible, the effective after-tax cost of debt is 18% * (1 - 0.225) = 13.95%, which is far below the cost of equity (24%). Introducing prudent debt lowers WACC, reducing the discount rate and increasing enterprise DCF value.',
    rationaleAr: 'نظراً لأن فوائد الديون قابلة للخصم من الوعاء الضريبي، تصبح تكلفة الدين الفعلية بعد الضريبة ١٨٪ × (١ - ٠.٢٢٥) = ١٣.٩٥٪، وهي أقل بكثير من تكلفة الملكية (٢٤٪). وإدخال نسبة دين رشيدة يخفض WACC مما يرفع التقييم الكلي للشركة.',
    bloomLevel: 'Analysis',
  },
];
