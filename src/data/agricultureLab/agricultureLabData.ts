/**
 * Agricultural Sciences & Agrotechnology Virtual Laboratory Data
 * Accredited for Egyptian MoE Thanaweya Amma and New Egyptian Baccalaureate (EG-Bac)
 */

export interface SoilTypePreset {
  id: string;
  nameAr: string;
  nameEn: string;
  sandPct: number;
  siltPct: number;
  clayPct: number;
  bulkDensity: number; // g/cm3
  fieldCapacityPct: number;
  wiltingPointPct: number;
  defaultPh: number;
  defaultCec: number; // meq / 100g
  defaultEc: number;  // dS/m
  drainageRate: 'excessive' | 'good' | 'moderate' | 'slow';
  egyptianRegionAr: string;
  egyptianRegionEn: string;
}

export const SOIL_TYPE_PRESETS: SoilTypePreset[] = [
  {
    id: 'nile_alluvial_clay',
    nameAr: 'طمي وادي النيل والدلتا القديم (طين ثقيل)',
    nameEn: 'Old Nile Valley Alluvial Clay',
    sandPct: 15,
    siltPct: 35,
    clayPct: 50,
    bulkDensity: 1.25,
    fieldCapacityPct: 38,
    wiltingPointPct: 20,
    defaultPh: 8.1,
    defaultCec: 42,
    defaultEc: 1.8,
    drainageRate: 'slow',
    egyptianRegionAr: 'أراضي الدلتا القديمة، المنوفية، الغربية، أسيوط',
    egyptianRegionEn: 'Old Delta & Nile Valley floodplains (Menoufia, Gharbia, Assiut)',
  },
  {
    id: 'desert_sandy_toshka',
    nameAr: 'رملية صحراوية خشنة (توشكى وشرق العوينات)',
    nameEn: 'Desert Coarse Sand (Toshka & East Oweinat)',
    sandPct: 88,
    siltPct: 7,
    clayPct: 5,
    bulkDensity: 1.62,
    fieldCapacityPct: 11,
    wiltingPointPct: 4,
    defaultPh: 7.9,
    defaultCec: 5.5,
    defaultEc: 0.8,
    drainageRate: 'excessive',
    egyptianRegionAr: 'مشروع توشكى الخير، شرق العوينات، الوادي الجديد',
    egyptianRegionEn: 'Toshka El-Kheir, East Oweinat, New Valley Oases',
  },
  {
    id: 'calcareous_new_delta',
    nameAr: 'أراضي جيرية كلسية (الدلتا الجديدة ومحور الضبعة)',
    nameEn: 'Calcareous Loam (New Delta & Dabaa Axis)',
    sandPct: 52,
    siltPct: 28,
    clayPct: 20,
    bulkDensity: 1.40,
    fieldCapacityPct: 24,
    wiltingPointPct: 11,
    defaultPh: 8.4,
    defaultCec: 18,
    defaultEc: 3.2,
    drainageRate: 'moderate',
    egyptianRegionAr: 'امتداد الدلتا الجديدة، وادي النطرون، الساحل الشمالي الغربي',
    egyptianRegionEn: 'New Delta project, Wadi El-Natrun, North-West Coast',
  },
  {
    id: 'saline_sodic_north_delta',
    nameAr: 'أراضي ملحية صودية متأثرة بالأملاح (شمال الدلتا وبحيرة المنزلة)',
    nameEn: 'Saline-Sodic Soil (North Delta & Lake Manzala Fringe)',
    sandPct: 25,
    siltPct: 35,
    clayPct: 40,
    bulkDensity: 1.35,
    fieldCapacityPct: 34,
    wiltingPointPct: 18,
    defaultPh: 8.7,
    defaultCec: 36,
    defaultEc: 12.5,
    drainageRate: 'slow',
    egyptianRegionAr: 'كفر الشيخ، بورسعيد، شمال الحسينية، سهل الطينة بسيناء',
    egyptianRegionEn: 'Kafr El-Sheikh, Port Said, North Husseiniya, Tina Plain Sinai',
  },
  {
    id: 'sandy_loam_ismailia',
    nameAr: 'طميية رملية خفيفة (الإسماعيلية وشرق السويس)',
    nameEn: 'Sandy Loam (Ismailia & East Suez)',
    sandPct: 65,
    siltPct: 23,
    clayPct: 12,
    bulkDensity: 1.48,
    fieldCapacityPct: 18,
    wiltingPointPct: 8,
    defaultPh: 7.7,
    defaultCec: 12,
    defaultEc: 1.2,
    drainageRate: 'good',
    egyptianRegionAr: 'الإسماعيلية، الصالحية الجديدة، سيناء غرب العريش',
    egyptianRegionEn: 'Ismailia, New Salhiya, Western Arish Sinai',
  },
];

export interface CropKcStage {
  stage: 'initial' | 'development' | 'mid_season' | 'late_season';
  nameAr: string;
  nameEn: string;
  days: number;
  kc: number;
  rootDepthM: number;
  npkRatio: { n: number; p: number; k: number };
}

export interface StrategicCropData {
  id: string;
  nameAr: string;
  nameEn: string;
  scientificName: string;
  seasonAr: 'شتوي' | 'صيفي' | 'معمر دائم';
  seasonEn: 'Winter' | 'Summer' | 'Perennial';
  growthStages: CropKcStage[];
  baseEcThreshold: number; // dS/m before yield drop
  salinityYieldLossPerUnit: number; // % yield loss per dS/m increase above threshold
  optimalPhRange: [number, number];
  targetYieldTonsPerFeddan: number;
  descriptionAr: string;
  descriptionEn: string;
}

export const STRATEGIC_CROPS: StrategicCropData[] = [
  {
    id: 'wheat_egypt',
    nameAr: 'قمح الخبز المصري (سخا 95 وجيزة 171)',
    nameEn: 'Egyptian Bread Wheat (Sakha 95 & Giza 171)',
    scientificName: 'Triticum aestivum',
    seasonAr: 'شتوي',
    seasonEn: 'Winter',
    growthStages: [
      { stage: 'initial', nameAr: 'الإنبات والتفريع (20-30 يوماً)', nameEn: 'Emergence & Tillering', days: 25, kc: 0.35, rootDepthM: 0.3, npkRatio: { n: 40, p: 30, k: 10 } },
      { stage: 'development', nameAr: 'الاستطالة وطرد السنابل (35-45 يوماً)', nameEn: 'Stem Elongation & Heading', days: 40, kc: 0.75, rootDepthM: 0.7, npkRatio: { n: 80, p: 20, k: 30 } },
      { stage: 'mid_season', nameAr: 'الإزهار وامتلاء الحبوب (40-50 يوماً)', nameEn: 'Flowering & Grain Filling', days: 45, kc: 1.15, rootDepthM: 1.1, npkRatio: { n: 30, p: 10, k: 60 } },
      { stage: 'late_season', nameAr: 'النضج والجفاف (20-25 يوماً)', nameEn: 'Ripening & Maturation', days: 25, kc: 0.45, rootDepthM: 1.1, npkRatio: { n: 0, p: 0, k: 10 } },
    ],
    baseEcThreshold: 6.0,
    salinityYieldLossPerUnit: 7.1,
    optimalPhRange: [6.5, 7.8],
    targetYieldTonsPerFeddan: 3.2,
    descriptionAr: 'المحصول الاستراتيجي الأول للأمن الغذائي المصري، يزرع بنظم تسوية بالليزر وزراعة على مصاطب لتوفير 20% من مياه الري.',
    descriptionEn: 'Primary food security crop in Egypt. Grown with laser land leveling and raised beds saving 20% irrigation water.',
  },
  {
    id: 'cotton_giza',
    nameAr: 'القطن المصري طويل التيلة (جيزة 94 وجيزة 97)',
    nameEn: 'Long-Staple Egyptian Cotton (Giza 94 & Giza 97)',
    scientificName: 'Gossypium barbadense',
    seasonAr: 'صيفي',
    seasonEn: 'Summer',
    growthStages: [
      { stage: 'initial', nameAr: 'الإنبات والبادرات', nameEn: 'Emergence & Seedling', days: 30, kc: 0.40, rootDepthM: 0.35, npkRatio: { n: 30, p: 40, k: 15 } },
      { stage: 'development', nameAr: 'النمو الخضري وتكوين الوسواس', nameEn: 'Vegetative & Squaring', days: 45, kc: 0.80, rootDepthM: 0.9, npkRatio: { n: 70, p: 20, k: 40 } },
      { stage: 'mid_season', nameAr: 'الإزهار وتكوين اللوز', nameEn: 'Flowering & Boll Setting', days: 60, kc: 1.20, rootDepthM: 1.4, npkRatio: { n: 40, p: 15, k: 90 } },
      { stage: 'late_season', nameAr: 'تفتح اللوز والجني', nameEn: 'Boll Opening & Harvest', days: 35, kc: 0.65, rootDepthM: 1.4, npkRatio: { n: 0, p: 0, k: 20 } },
    ],
    baseEcThreshold: 7.7,
    salinityYieldLossPerUnit: 5.2,
    optimalPhRange: [6.8, 8.0],
    targetYieldTonsPerFeddan: 1.8,
    descriptionAr: 'الذهب الأبيض المصري ذو الشهرة العالمية بالنعومة والمتانة، يزرع بالتنقيط في المشروعات الحديثة وبالمطور في الدلتا.',
    descriptionEn: 'Famous Egyptian White Gold with world-renowned fineness and fiber strength, irrigated with drip in modern reclamation.',
  },
  {
    id: 'date_palm_barhi',
    nameAr: 'نخيل البلح البرحي والمجدول (توشكى والواحات)',
    nameEn: 'Tissue-Culture Date Palm (Barhi & Medjool)',
    scientificName: 'Phoenix dactylifera',
    seasonAr: 'معمر دائم',
    seasonEn: 'Perennial',
    growthStages: [
      { stage: 'initial', nameAr: 'السكون وبداية النشاط الربيعي', nameEn: 'Spring Dormancy Break', days: 45, kc: 0.65, rootDepthM: 2.2, npkRatio: { n: 50, p: 25, k: 40 } },
      { stage: 'development', nameAr: 'التلقيح وعقد الثمار (الخلال)', nameEn: 'Pollination & Fruit Set', days: 60, kc: 0.85, rootDepthM: 2.5, npkRatio: { n: 60, p: 30, k: 70 } },
      { stage: 'mid_season', nameAr: 'نمو الثمار والتحول اللوني (البسر والرطب)', nameEn: 'Fruit Sizing & Color Transition', days: 75, kc: 0.95, rootDepthM: 2.5, npkRatio: { n: 20, p: 20, k: 120 } },
      { stage: 'late_season', nameAr: 'النضج النهائي (التمر) وما بعد الجني', nameEn: 'Ripening & Post-Harvest Flush', days: 60, kc: 0.70, rootDepthM: 2.5, npkRatio: { n: 30, p: 40, k: 30 } },
    ],
    baseEcThreshold: 4.0,
    salinityYieldLossPerUnit: 3.6,
    optimalPhRange: [6.5, 8.2],
    targetYieldTonsPerFeddan: 8.5,
    descriptionAr: 'أكبر مزرعة تمور في العالم بمشروع توشكى الخير (2.5 مليون نخلة مسجلة بموسوعة غينيس للأرقام القياسية).',
    descriptionEn: 'World record date palm farm in Toshka El-Kheir (2.5 million palms registered in Guinness World Records).',
  },
  {
    id: 'sugar_beet_canal',
    nameAr: 'بنجر السكر (مشروع غرب غرب المنيا والقناة للسكر)',
    nameEn: 'Sugar Beet (West-West Minya & Canal Sugar)',
    scientificName: 'Beta vulgaris subsp. vulgaris',
    seasonAr: 'شتوي',
    seasonEn: 'Winter',
    growthStages: [
      { stage: 'initial', nameAr: 'الإنبات والورقة الحقيقية الرابعة', nameEn: 'Emergence & 4-Leaf Stage', days: 30, kc: 0.35, rootDepthM: 0.3, npkRatio: { n: 40, p: 50, k: 20 } },
      { stage: 'development', nameAr: 'التغطية الورقية وتضخم الجذور', nameEn: 'Canopy Cover & Root Thickening', days: 50, kc: 0.80, rootDepthM: 0.7, npkRatio: { n: 80, p: 30, k: 60 } },
      { stage: 'mid_season', nameAr: 'تراكم السكروز والكتلة الحيوية', nameEn: 'Sucrose Accumulation', days: 70, kc: 1.15, rootDepthM: 1.2, npkRatio: { n: 20, p: 10, k: 100 } },
      { stage: 'late_season', nameAr: 'النضج والتصويم قبل الحصاد', nameEn: 'Pre-Harvest Drying Out', days: 30, kc: 0.60, rootDepthM: 1.2, npkRatio: { n: 0, p: 0, k: 20 } },
    ],
    baseEcThreshold: 7.0,
    salinityYieldLossPerUnit: 5.9,
    optimalPhRange: [6.5, 8.0],
    targetYieldTonsPerFeddan: 35.0,
    descriptionAr: 'محصول استراتيجي لإنتاج السكر، يتحمل الملوحة بدرجة عالية ويستهلك ثلث كمية مياه قصب السكر التقليدي.',
    descriptionEn: 'High salt tolerance, consumes one-third the water of sugarcane; anchors the Canal Sugar mega-refinery in West Minya.',
  },
];

export interface IrrigationMethod {
  id: string;
  nameAr: string;
  nameEn: string;
  efficiencyPct: number; // Water application efficiency
  uniformityCoeffPct: number;
  evaporationLossPct: number;
  suitabilityAr: string;
  suitabilityEn: string;
  energyDemandKwhPerFeddan: number;
}

export const IRRIGATION_METHODS: IrrigationMethod[] = [
  {
    id: 'drip_subsurface',
    nameAr: 'الري بالتنقيط السطحي وتحت السطحي (المطور)',
    nameEn: 'Subsurface & Surface Drip Irrigation',
    efficiencyPct: 92,
    uniformityCoeffPct: 94,
    evaporationLossPct: 4,
    suitabilityAr: 'الأشجار المثمرة، الخضر المحمية، النخيل، الدلتا الجديدة ومستقبل مصر',
    suitabilityEn: 'Fruit orchards, greenhouse vegetables, date palms, New Delta & Future of Egypt',
    energyDemandKwhPerFeddan: 18,
  },
  {
    id: 'center_pivot',
    nameAr: 'الري بالرش المحوري (Center Pivot)',
    nameEn: 'Center Pivot Sprinkler Irrigation',
    efficiencyPct: 83,
    uniformityCoeffPct: 88,
    evaporationLossPct: 12,
    suitabilityAr: 'المحاصيل الحقلية الاستراتيجية (القمح، الذرة، البرسيم) في توشكى والعوينات',
    suitabilityEn: 'Strategic field crops (wheat, maize, alfalfa) in Toshka and East Oweinat',
    energyDemandKwhPerFeddan: 28,
  },
  {
    id: 'surface_furrow_improved',
    nameAr: 'الري السطحي المطور بالتسوية الليزرية ومواسير مبطنة',
    nameEn: 'Improved Surface Furrow with Laser Leveling',
    efficiencyPct: 72,
    uniformityCoeffPct: 75,
    evaporationLossPct: 20,
    suitabilityAr: 'أراضي الوادي القديم والدلتا المطورة بعد تبطين المساقي والترع',
    suitabilityEn: 'Old Nile Valley modernized lands after canal lining and laser grading',
    energyDemandKwhPerFeddan: 8,
  },
  {
    id: 'traditional_flood',
    nameAr: 'الري بالغمر التقليدي العشوائي (القديم غير المطور)',
    nameEn: 'Traditional Unlined Flood Irrigation',
    efficiencyPct: 52,
    uniformityCoeffPct: 55,
    evaporationLossPct: 38,
    suitabilityAr: 'الممارسات القديمة غير المستدامة الممنوعة في المشروعات القومية المستصلحة',
    suitabilityEn: 'Legacy unmanaged flooding prohibited in all modern reclamation zones',
    energyDemandKwhPerFeddan: 5,
  },
];

export interface EgyptianMegaProject {
  id: string;
  nameAr: string;
  nameEn: string;
  targetAreaFeddan: number;
  currentAreaFeddan: number;
  waterSourcesAr: string[];
  waterSourcesEn: string[];
  waterTreatmentCapacityM3PerDay?: number;
  mainCropsAr: string[];
  mainCropsEn: string[];
  latitude: number;
  longitude: number;
  keyFeaturesAr: string[];
  keyFeaturesEn: string[];
  achievementMetricAr: string;
  achievementMetricEn: string;
}

export const EGYPTIAN_MEGA_PROJECTS: EgyptianMegaProject[] = [
  {
    id: 'toshka_el_kheir',
    nameAr: 'مشروع توشكى الخير القومي',
    nameEn: 'Toshka El-Kheir National Mega-Project',
    targetAreaFeddan: 600000,
    currentAreaFeddan: 450000,
    waterSourcesAr: ['قناة الشيخ زايد المغذاة من بحيرة ناصر (مفيض توشكى)', 'الخزان الجوفي النوبي الحفري العميق'],
    waterSourcesEn: ['Sheikh Zayed Canal fed from Lake Nasser (Toshka Spillway)', 'Deep fossil Nubian Sandstone Aquifer'],
    mainCropsAr: ['القمح الاستراتيجي', 'نخيل البلح الفاخر (البرحي والمجدول)', 'الذرة الصفراء', 'العنب التصديري', 'القطن'],
    mainCropsEn: ['Strategic wheat', 'Tissue-culture Date Palms (Barhi & Medjool)', 'Yellow Maize', 'Table Grapes', 'Cotton'],
    latitude: 22.68,
    longitude: 31.62,
    keyFeaturesAr: [
      'أكبر مزرعة تمور متكاملة في العالم تضم 2.5 مليون نخلة مسجلة في جينيس للأرقام القياسية',
      'إزالة وإعادة نسف جدار جرانيتي صخري بطول 9 كم لفتح مسار قناة الري',
      'اعتماد تام على أجهزة الري المحوري الذكية المدارة بنظم الاستشعار والمجسات الأرضية',
      'إنتاجية قمح تفوق 22 إردباً للفدان بفضل غياب الصقيع والمناخ الصحراوي الجاف',
    ],
    keyFeaturesEn: [
      'World largest continuous date palm farm (2.5 million palms in Guinness World Records)',
      'Engineering blasting of a 9km solid granite ridge to pave the Sheikh Zayed canal branch',
      '100% smart telemetry center-pivot irrigation using subterranean capacitance soil probes',
      'Wheat yields exceeding 22 ardabs/feddan supported by frost-free dry desert microclimate',
    ],
    achievementMetricAr: '450 ألف فدان منزرعة بالفعل و2.5 مليون نخلة مثمرة',
    achievementMetricEn: '450k feddans fully cultivated & 2.5M productive palms',
  },
  {
    id: 'new_delta_future_egypt',
    nameAr: 'مشروع الدلتا الجديدة ومستقبل مصر الزراعي',
    nameEn: 'New Delta & Future of Egypt Mega-Project',
    targetAreaFeddan: 2200000,
    currentAreaFeddan: 1050000,
    waterSourcesAr: [
      'محطة معالجة مياه مصرف الحمام العملاقة (محطة الدلتا الجديدة بطاقة 7.5 مليون م3/يوم)',
      'المياه الجوفية بالساحل الشمالي الغربي ومحور الضبعة',
    ],
    waterSourcesEn: [
      'Al-Hammam / New Delta Mega-Treatment Plant (7.5 million m³/day capacity - largest globally)',
      'North-West Coast shallow & deep aquifers along Dabaa Axis',
    ],
    waterTreatmentCapacityM3PerDay: 7500000,
    mainCropsAr: ['القمح', 'بنجر السكر', 'البطاطس المعتمدة', 'البصل والثوم', 'المحاصيل الزيتية (دوار الشمس والكانولا)'],
    mainCropsEn: ['Wheat', 'Sugar Beet', 'Certified Seed Potatoes', 'Onions & Garlic', 'Oilseeds (Sunflower & Canola)'],
    latitude: 30.35,
    longitude: 29.85,
    keyFeaturesAr: [
      'أضخم مشروع استصلاح زراعي في تاريخ مصر والشرق الأوسط على مساحة 2.2 مليون فدان',
      'إنشاء أطول نهر صناعي في العالم بطول 170 كم لنقل المياه المعالجة عبر ترع مكشوفة ومواسير مغطاة',
      'محطة معالجة مياه الدلتا الجديدة مسجلة بموسوعة جينيس كأضخم محطة معالجة مياه ثلاثية على كوكب الأرض',
      'قرب لوجستي فائق من موانئ الإسكندرية والدخيلة وجرجوب ومطارات برج العرب وسفنكس للتصدير المباشر',
    ],
    keyFeaturesEn: [
      'Largest single agricultural reclamation initiative in Egypt history spanning 2.2 million feddans',
      'Longest engineered artificial river globally (170 km) carrying recycled drainage water',
      'Guinness record New Delta Tertiary Treatment Plant treating 7.5M cubic meters daily',
      'Exceptional multimodal logistics proximity to Alexandria, Dekheila, and Gargoub export ports',
    ],
    achievementMetricAr: '1.05 مليون فدان مستصلحة ومحطة معالجة 7.5 مليون م3/يوم',
    achievementMetricEn: '1.05M feddans cultivated with 7.5M m³/day tertiary plant',
  },
  {
    id: 'east_oweinat',
    nameAr: 'مشروع شرق العوينات للزراعة النظيفة والأورجانيك',
    nameEn: 'East Oweinat Organic & Clean Agriculture Project',
    targetAreaFeddan: 280000,
    currentAreaFeddan: 240000,
    waterSourcesAr: ['خزان الحجر الرملي النوبي العذب فائق النقاء'],
    waterSourcesEn: ['Pristine ultra-pure Nubian Sandstone deep fossil aquifer'],
    mainCropsAr: ['بطاطس التقاوي الخالية من العفن البني', 'القمح العضوي', 'الأعلاف الخضراء الموجهة للتصدير (البرسيم الحجازي)', 'الذرة'],
    mainCropsEn: ['Certified Brown-Rot-Free seed potatoes', 'Organic Wheat', 'Export-grade Alfalfa', 'Maize'],
    latitude: 22.45,
    longitude: 28.70,
    keyFeaturesAr: [
      'منطقة حجر زراعي طبيعي معزولة في قلب الصحراء الغربية خالية تماماً من الآفات الحجرية والعفن البني',
      'مستودع مصر القومي لتقاوي البطاطس المعزولة ومحاصيل التصدير العضوي إلى الاتحاد الأوروبي',
      'إدارة صيانة السحب المستدام من خزان المياه الجوفية باستخدام مجسات مراقبة الهبوط الهيدروليكي',
      'مطار شرق العوينات الدولي لشحن الصادرات الطازجة مباشرة للأسواق العالمية',
    ],
    keyFeaturesEn: [
      'Natural quarantine isolation in Western Desert completely free from brown rot disease',
      'National strategic reservoir for certified seed potatoes and EU organic exports',
      'Automated piezometric telemetry network safeguarding Nubian aquifer from depletion',
      'Dedicated East Oweinat International Airport for rapid cold-chain export delivery',
    ],
    achievementMetricAr: '240 ألف فدان من أنقى المنتجات الزراعية الخالية من الملوثات',
    achievementMetricEn: '240k feddans of certified pesticide-free organic cropland',
  },
  {
    id: 'sinai_bahr_baqar',
    nameAr: 'مشروع تنمية شمال ووسط سيناء ومحطة بحر البقر',
    nameEn: 'Sinai Agricultural Reclamation & Bahr El-Baqar Plant',
    targetAreaFeddan: 450000,
    currentAreaFeddan: 275000,
    waterSourcesAr: [
      'محطة معالجة مياه مصرف بحر البقر (5.6 مليون م3/يوم الحائزة على 3 أرقام قياسية بجينيس)',
      'سحارة سرابيوم وسحارة المحسمة أسفل قناة السويس',
    ],
    waterSourcesEn: [
      'Bahr El-Baqar Mega-Treatment Plant (5.6M m³/day - 3 Guinness World Records)',
      'Serapeum & Mahsama Siphons engineered underneath the Suez Canal maritime channel',
    ],
    waterTreatmentCapacityM3PerDay: 5600000,
    mainCropsAr: ['الزيتون السيناوي الممتاز', 'الرمان', 'التين', 'النباتات الطبية والعطرية', 'القمح والشعير'],
    mainCropsEn: ['Premium Sinai Olives', 'Pomegranates', 'Figs', 'Medicinal & Aromatic Herbs', 'Wheat & Barley'],
    latitude: 31.05,
    longitude: 32.55,
    keyFeaturesAr: [
      'عبور المياه المعالجة ثلاثياً عبر سحارات عملاقة تمر تحت المجرى الملاحي لقناة السويس بـ 60 متراً',
      'تحويل مسار مياه الصرف الزراعي من تلويث بحيرة المنزلة إلى استصلاح 450 ألف فدان في أرض الفيروز',
      'زراعة أصناف زيتون ذات قدرة استخلاص زيت تفوق 22% وأشجار رمان تصديرية مقاومة لملوحة التربة',
    ],
    keyFeaturesEn: [
      'Treated effluent transferred via deep pressurized siphons 60m underneath the Suez Canal',
      'Diverted polluted agricultural runoff from Lake Manzala to irrigate 450k feddans in Sinai',
      'Cultivation of high-oil yield olive cultivars (>22% extraction) and salt-tolerant pomegranates',
    ],
    achievementMetricAr: '275 ألف فدان و3 أرقام قياسية مسجلة بجينيس لمحطة بحر البقر',
    achievementMetricEn: '275k feddans & 3 Guinness World Records for Bahr El-Baqar',
  },
];

export interface PlantPathologyDiagnostic {
  id: string;
  cropNameAr: string;
  cropNameEn: string;
  problemNameAr: string;
  problemNameEn: string;
  causalAgent: string;
  category: 'fungal' | 'bacterial' | 'viral' | 'insect_pest' | 'physiological';
  symptomsAr: string;
  symptomsEn: string;
  economicThresholdAr: string;
  economicThresholdEn: string;
  biologicalControlAr: string;
  biologicalControlEn: string;
  chemicalControlAr: string;
  chemicalControlEn: string;
  preventiveCulturalAr: string;
  preventiveCulturalEn: string;
}

export const IPM_DIAGNOSTICS_CATALOG: PlantPathologyDiagnostic[] = [
  {
    id: 'wheat_stripe_rust',
    cropNameAr: 'القمح',
    cropNameEn: 'Wheat',
    problemNameAr: 'الصدأ الأصفر (الصدأ المخطط)',
    problemNameEn: 'Stripe Rust (Yellow Rust)',
    causalAgent: 'Puccinia striiformis f. sp. tritici',
    category: 'fungal',
    symptomsAr: 'بثرات يوريدية صفراء مائلة للبرتقالي مرتبة في خطوط طولية متوازية على نصل الأوراق والسنبلة، تترك مسحوقاً أصفر على الأصابع.',
    symptomsEn: 'Bright yellow-orange urediniospores arranged in narrow linear stripes along leaf blades and glumes; rubs off as powder.',
    economicThresholdAr: 'ظهور بؤر إصابة مبكرة بنسبة 1-2% من نباتات الحقل في الطور الخضري أو طرد السنابل.',
    economicThresholdEn: 'Detection of initial focal spots (1-2% canopy incidence) during tillering to heading.',
    biologicalControlAr: 'استخدام مستخلصات الخميرة الحيوية (Saccharomyces) والبكتيريا المضادة Bacillus subtilis لتقوية المقاومة المستحثة.',
    biologicalControlEn: 'Foliar application of Bacillus subtilis and bio-inducer yeast formulations promoting systemic acquired resistance (SAR).',
    chemicalControlAr: 'الرش الفوري بأحد مبيدات مجموعة التريازول (ترياديمينول، تيبوكونازول، ديفينوكونازول) المعتمدة من وزارة الزراعة.',
    chemicalControlEn: 'Immediate curative spray with registered triazole fungicides (Tebuconazole, Difenoconazole, Triadimenol).',
    preventiveCulturalAr: 'زراعة أصناف مقاومة معتمدة (مثل مصر 3 وسخا 95 وجيزة 171) وتجنب زراعة الأصناف القابلة للكسر (سدس 12).',
    preventiveCulturalEn: 'Planting certified rust-resistant Egyptian cultivars (Misr 3, Sakha 95, Giza 171) and strictly avoiding susceptible ones.',
  },
  {
    id: 'red_palm_weevil',
    cropNameAr: 'نخيل البلح',
    cropNameEn: 'Date Palm',
    problemNameAr: 'سوسة النخيل الحمراء (إيدز النخيل)',
    problemNameEn: 'Red Palm Weevil (RPW)',
    causalAgent: 'Rhynchophorus ferrugineus (Olivier)',
    category: 'insect_pest',
    symptomsAr: 'إفرازات صمغية بنية مسودة ذات رائحة تخمر كريهة من جذع النخلة، نشارة خشبية ممضوغة عند قواعد الكرب، وصوت قضم اليرقات داخل الجذع.',
    symptomsEn: 'Fermented brownish-black oozing fluid, chewed fibrous frass at leaf bases, and distinct larval chewing acoustics inside trunk.',
    economicThresholdAr: 'عتبة الصفر الحجري (وجود حشرة بالغة واحدة في المصائد الفيرمونية أو نخلة واحدة مصابة يتطلب تدخلاً فورياً).',
    economicThresholdEn: 'Zero-tolerance threshold: Single adult captured in pheromone trap or single symptomatic palm demands immediate action.',
    biologicalControlAr: 'حقن الفطر الممرض للحشرات Beauveria bassiana والنيماتودا الممرضة للحشرات Steinernema carpocapsae داخل أنفاق اليرقات.',
    biologicalControlEn: 'Direct trunk injection with entomopathogenic fungi (Beauveria bassiana) and beneficial nematodes (Steinernema carpocapsae).',
    chemicalControlAr: 'حقن الجذع بمبيدات جهازية متخصصة (إيميداكلوبريد أو فيبرونيل) بواسطة مضخات الضغط الهيدروليكي وقفل الثقوب بالأسمنت الزراعي.',
    chemicalControlEn: 'Systemic pressurized trunk injection with Imidacloprid or Fipronil followed by sealing holes with antiseptic mastic/cement.',
    preventiveCulturalAr: 'المصائد الفيرمونية الكيرمونية الضوئية، تطهير الجروح بعد تقليم الكرب، ومكافحة حجرية صارمة لنقل الفسائل.',
    preventiveCulturalEn: 'Aggregated pheromone-kairomone traps, antiseptic pruning sealants, and strict domestic quarantine on offshoot transport.',
  },
  {
    id: 'fall_armyworm',
    cropNameAr: 'الذرة الشامية',
    cropNameEn: 'Maize',
    problemNameAr: 'دودة الحشد الخريفية',
    problemNameEn: 'Fall Armyworm (FAW)',
    causalAgent: 'Spodoptera frugiperda (J.E. Smith)',
    category: 'insect_pest',
    symptomsAr: 'ثقوب نافذة تشبه طلقات الرصاص على الأوراق، براز دقيق يشبه نشارة الخشب داخل البلعوم القمعي للبادرة، وتآكل تام للقمة النامية.',
    symptomsEn: 'Shot-hole perforations on leaves, dense sawdust-like frass accumulating inside whorls, and destructed apical meristem.',
    economicThresholdAr: 'إصابة 20% من البادرات في طور الإنبات إلى 6 أوراق، أو 10% في طور تكوين الكيزان.',
    economicThresholdEn: '20% damaged whorls during vegetative V1-V6 stages, or 10% damage during tasseling/silking.',
    biologicalControlAr: 'إطلاق طفيليات البيض Trichogramma وتطبيق بكتيريا Bacillus thuringiensis (Bt) ومستخلص النيم الأزادرختين.',
    biologicalControlEn: 'Mass release of Trichogramma egg parasitoids, foliar Bacillus thuringiensis kurstaki, and Azadirachtin neem bio-insecticide.',
    chemicalControlAr: 'الرش الموجه لقلب البلعوم بمبيدات الكلورانترانيليبرول (كوراجين) أو الإيمامكتين بنزوات عند الغروب.',
    chemicalControlEn: 'Targeted whorl spraying with Chlorantraniliprole (Coragen) or Emamectin benzoate applied at dusk.',
    preventiveCulturalAr: 'التبكير في الزراعة، التخلص من الحشائش النجيلية العائلة، ونصب المصائد الفيرمونية للإنذار المبكر بمحافظات الصعيد والدلتا.',
    preventiveCulturalEn: 'Early sowing dates, eliminating gramineous weed reservoirs, and establishing regional pheromone surveillance traps.',
  },
  {
    id: 'tomato_late_blight',
    cropNameAr: 'الطماطم المحمية والمكشوفة',
    cropNameEn: 'Protected & Field Tomatoes',
    problemNameAr: 'اللفحة المتأخرة (الندوة المتأخرة)',
    problemNameEn: 'Late Blight',
    causalAgent: 'Phytophthora infestans (Mont.) de Bary',
    category: 'fungal',
    symptomsAr: 'بقع مائية خضراء داكنة إلى بنية محروقة على الأوراق مع نمو زغبي أبيض فضي على السطح السفلي في الصباح الرطب، وعفن جلدي بني على الثمار.',
    symptomsEn: 'Water-soaked dark lesions rapidly expanding to necrotic blights; delicate white downy sporulation on lower leaf surface and greasy fruit rot.',
    economicThresholdAr: 'تحذير وبائي فوري بمجرد توفر رطوبة نسبية >90% وحرارة 15-20°م مع رصد أول بقعة.',
    economicThresholdEn: 'Zero tolerance under conducive weather (RH > 90%, Temp 15-20°C): immediate fungicide shield required.',
    biologicalControlAr: 'المعالجة الوقائية بمركبات الكيتوزان المحفزة للمناعة وحساء بكتيريا الباسيلس Bacillus subtilis.',
    biologicalControlEn: 'Preventive bio-elicitors (Chitosan oligosaccharides) and Bacillus subtilis bio-fungicide sprays.',
    chemicalControlAr: 'الرش الوقائي بمركبات النحاس، أو العلاجي بخلطات السيموكسانيل أو الفيناميدون مع المانكوزيب ومبيدات الميفينوكسام.',
    chemicalControlEn: 'Protective copper oxychloride, or curative systemic compounds (Cymoxanil, Fenamidone + Mancozeb, Mefenoxam).',
    preventiveCulturalAr: 'التحكم الدقيق في رطوبة البيوت المحمية عبر التهوية المستمرة والتدفئة، والري بالتنقيط لتفادي بلل المجموع الخضري.',
    preventiveCulturalEn: 'Greenhouse microclimate humidity management via ventilation, radiant heating, and strictly avoiding overhead sprinkler splash.',
  },
];
