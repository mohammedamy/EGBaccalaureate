/**
 * STEM Engineering Capstone & Egypt's Grand Challenges Virtual Laboratory Data
 * Accredited for Egyptian General Secondary STEM Schools & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Multidisciplinary Engineering Simulation Architecture
 */

// ============================================================================
// STATION 1: Water Desalination & Drainage Treatment (Grand Challenge: Water Security)
// ============================================================================

export interface WaterDesalinationPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  technology: 'swro_erd' | 'solar_med' | 'drainage_recycling' | 'forward_osmosis';
  capacityM3Day: number;
  feedSalinityPpm: number;
  permeateSalinityPpm: number;
  recoveryRatio: number; // e.g. 0.45 = 45%
  operatingPressureBar: number;
  energyRecoveryEfficiency: number; // e.g. 0.97 = 97%
  specificEnergyKwhM3: number;
  annualFreshwaterMillionM3: number;
}

export const WATER_DESALINATION_PRESETS: WaterDesalinationPreset[] = [
  {
    id: 'al_alamein_swro',
    nameEn: 'Al-Alamein Mega SWRO Desalination Plant',
    nameAr: 'محطة تحلية مياه البحر بالتناضح العكسي بالعلمين الجديدة',
    locationEn: 'New Alamein City, Matrouh Governorate (Mediterranean Coast)',
    locationAr: 'مدينة العلمين الجديدة، محافظة مطروح (الساحل الشمالي)',
    technology: 'swro_erd',
    capacityM3Day: 150000,
    feedSalinityPpm: 38000,
    permeateSalinityPpm: 280,
    recoveryRatio: 0.45,
    operatingPressureBar: 65,
    energyRecoveryEfficiency: 0.975,
    specificEnergyKwhM3: 2.85,
    annualFreshwaterMillionM3: 54.75,
  },
  {
    id: 'ain_sokhna_swro',
    nameEn: 'Ain Sokhna Industrial SWRO & Power Complex',
    nameAr: 'محطة العين السخنة لتحلية مياه البحر والمجمع الصناعي',
    locationEn: 'Ain Sokhna, Suez Governorate (Gulf of Suez)',
    locationAr: 'العين السخنة، محافظة السويس (خليج السويس)',
    technology: 'swro_erd',
    capacityM3Day: 164000,
    feedSalinityPpm: 42000,
    permeateSalinityPpm: 310,
    recoveryRatio: 0.42,
    operatingPressureBar: 70,
    energyRecoveryEfficiency: 0.98,
    specificEnergyKwhM3: 3.1,
    annualFreshwaterMillionM3: 59.86,
  },
  {
    id: 'bahr_el_baqar_reuse',
    nameEn: 'Bahr El-Baqar Agricultural Drainage Treatment Plant',
    nameAr: 'محطة معالجة مياه مصرف بحر البقر (السيناء)',
    locationEn: 'Port Said / North Sinai Reclamation Corridor',
    locationAr: 'بورسعيد / مسار استصلاح شمال سيناء',
    technology: 'drainage_recycling',
    capacityM3Day: 5600000,
    feedSalinityPpm: 4500,
    permeateSalinityPpm: 450,
    recoveryRatio: 0.95,
    operatingPressureBar: 12,
    energyRecoveryEfficiency: 0.90,
    specificEnergyKwhM3: 0.65,
    annualFreshwaterMillionM3: 2044.0,
  },
  {
    id: 'new_delta_reuse',
    nameEn: 'New Delta Mega Wastewater Treatment Plant',
    nameAr: 'محطة معالجة مياه الدلتا الجديدة العملاقة (محور الضبعة)',
    locationEn: 'Dabaa Corridor, Western Desert',
    locationAr: 'محور الضبعة، الصحراء الغربية',
    technology: 'drainage_recycling',
    capacityM3Day: 7500000,
    feedSalinityPpm: 3800,
    permeateSalinityPpm: 380,
    recoveryRatio: 0.96,
    operatingPressureBar: 10,
    energyRecoveryEfficiency: 0.92,
    specificEnergyKwhM3: 0.58,
    annualFreshwaterMillionM3: 2737.5,
  },
];

// ============================================================================
// STATION 2: Smart Microgrids & Clean Hydrogen (Grand Challenge: Energy Transition)
// ============================================================================

export interface SmartMicrogridPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  pvCapacityMw: number;
  bessCapacityMwh: number;
  electrolyzerType: 'pem' | 'alkaline' | 'soec';
  electrolyzerCapacityMw: number;
  hydrogenKgDay: number;
  droopGainHzKw: number;
  autonomyHours: number;
}

export const SMART_MICROGRID_PRESETS: SmartMicrogridPreset[] = [
  {
    id: 'toshka_solar_microgrid',
    nameEn: 'Toshka Hybrid Solar-BESS Agricultural Microgrid',
    nameAr: 'الشبكة الدقيقة الهجينة للطاقة الشمسية والبطاريات بتوشكى',
    locationEn: 'Toshka Basin, Aswan Governorate (South Valley)',
    locationAr: 'منخفض توشكى، محافظة أسوان (مشروع الوادي الجديد)',
    pvCapacityMw: 100,
    bessCapacityMwh: 250,
    electrolyzerType: 'pem',
    electrolyzerCapacityMw: 20,
    hydrogenKgDay: 8000,
    droopGainHzKw: 0.04,
    autonomyHours: 8,
  },
  {
    id: 'siwa_oasis_autonomous_grid',
    nameEn: 'Siwa Oasis Off-Grid Eco-Microgrid',
    nameAr: 'الشبكة الدقيقة المستقلة لواحة سيوة (الصحراء الغربية)',
    locationEn: 'Siwa Oasis, Western Desert',
    locationAr: 'واحة سيوة، الصحراء الغربية',
    pvCapacityMw: 30,
    bessCapacityMwh: 90,
    electrolyzerType: 'pem',
    electrolyzerCapacityMw: 5,
    hydrogenKgDay: 2000,
    droopGainHzKw: 0.05,
    autonomyHours: 12,
  },
  {
    id: 'sczone_green_hydrogen_hub',
    nameEn: 'SCZone Green Hydrogen & Ammonia Export Microgrid',
    nameAr: 'مجمع الهيدروجين والأمونيا الخضراء بالمنطقة الاقتصادية لقناة السويس',
    locationEn: 'Suez Canal Economic Zone (SCZone), Sokhna',
    locationAr: 'المنطقة الاقتصادية لقناة السويس (السخنة)',
    pvCapacityMw: 500,
    bessCapacityMwh: 800,
    electrolyzerType: 'pem',
    electrolyzerCapacityMw: 200,
    hydrogenKgDay: 85000,
    droopGainHzKw: 0.02,
    autonomyHours: 16,
  },
];

// ============================================================================
// STATION 3: Arid Agri-Tech & Desert Reclamation (Grand Challenge: Food Security)
// ============================================================================

export interface DesertAgriTechPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  cropTypeEn: string;
  cropTypeAr: string;
  irrigationMethod: 'subsurface_drip' | 'precision_pivot' | 'hydroponic_nft' | 'aeroponics';
  waterConsumptionM3HaDay: number;
  waterSavingPercent: number;
  salinityTolerancePpm: number;
  yieldMultiplier: number;
}

export const DESERT_AGRITECH_PRESETS: DesertAgriTechPreset[] = [
  {
    id: 'new_delta_precision_wheat',
    nameEn: 'New Delta Subsurface Drip Precision Wheat Project',
    nameAr: 'مشروع زراعة القمح بالري بالتنقيط الدقيق بالدلتا الجديدة',
    locationEn: 'New Delta Reclamation Corridor, Western Desert',
    locationAr: 'مسار مشروع الدلتا الجديدة، الصحراء الغربية',
    cropTypeEn: 'Drought-Tolerant Bread Wheat (Triticum aestivum)',
    cropTypeAr: 'قمح الخبز المقاوم للجفاف',
    irrigationMethod: 'subsurface_drip',
    waterConsumptionM3HaDay: 38.5,
    waterSavingPercent: 42,
    salinityTolerancePpm: 4500,
    yieldMultiplier: 1.8,
  },
  {
    id: 'toshka_halophyte_salicornia',
    nameEn: 'Toshka Biosaline Halophyte (Salicornia) Plantation',
    nameAr: 'مزارع الساليكورنيا والنباتات الملحية في منخفض توشكى',
    locationEn: 'Toshka Hyper-Arid Plain, Aswan',
    locationAr: 'سهول توشكى شديدة الجفاف، أسوان',
    cropTypeEn: 'Biofuel & Seed Halophyte (Salicornia bigelovii)',
    cropTypeAr: 'نبات الساليكورنيا لإنتاج الزيوت والأعلاف',
    irrigationMethod: 'precision_pivot',
    waterConsumptionM3HaDay: 48.0,
    waterSavingPercent: 35,
    salinityTolerancePpm: 35000,
    yieldMultiplier: 2.2,
  },
  {
    id: 'farafra_smart_oasis_greenhouse',
    nameEn: 'Farafra Climate-Controlled Hydroponic Tomato Cluster',
    nameAr: 'مجمع الصوب الزراعية المائية الذكية بواحة الفرافرة',
    locationEn: 'Farafra Oasis, New Valley Governorate',
    locationAr: 'واحة الفرافرة، محافظة الوادي الجديد',
    cropTypeEn: 'Commercial Table Tomatoes & Salad Greens',
    cropTypeAr: 'طماطم المائدة والخضراوات الورقية',
    irrigationMethod: 'hydroponic_nft',
    waterConsumptionM3HaDay: 6.5,
    waterSavingPercent: 92,
    salinityTolerancePpm: 2500,
    yieldMultiplier: 28.5,
  },
];

// ============================================================================
// STATION 4: Smart Transit & Traffic Optimization (Grand Challenge: Urban Congestion)
// ============================================================================

export interface SmartTransitPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  corridorEn: string;
  corridorAr: string;
  systemType: 'monorail' | 'lrt' | 'electric_brt' | 'marl_signal_network';
  networkLengthKm: number;
  dailyPassengers: number;
  annualCo2AvoidedTons: number;
  averageSpeedKmh: number;
  delayReductionPercent: number;
}

export const SMART_TRANSIT_PRESETS: SmartTransitPreset[] = [
  {
    id: 'cairo_monorail_east',
    nameEn: 'Cairo Monorail (East Nile Network)',
    nameAr: 'مونوريل شرق النيل (مدينة نصر - العاصمة الإدارية)',
    corridorEn: 'Nasr City Stadium to New Administrative Capital City',
    corridorAr: 'من استاد مدينة نصر إلى العاصمة الإدارية الجديدة',
    systemType: 'monorail',
    networkLengthKm: 56.5,
    dailyPassengers: 600000,
    annualCo2AvoidedTons: 145000,
    averageSpeedKmh: 80,
    delayReductionPercent: 48,
  },
  {
    id: 'cairo_lrt_capital',
    nameEn: 'Light Rail Transit (LRT) Salam-Capital Corridor',
    nameAr: 'القطار الكهربائي الخفيف LRT (محطة عدلي منصور - العاصمة الإدارية)',
    corridorEn: 'Adly Mansour Interchange to Knowledge City (10th of Ramadan Branch)',
    corridorAr: 'محطة عدلي منصور التبادلية إلى مدينة المعرفة ومدينة العاشر',
    systemType: 'lrt',
    networkLengthKm: 105.0,
    dailyPassengers: 750000,
    annualCo2AvoidedTons: 210000,
    averageSpeedKmh: 120,
    delayReductionPercent: 55,
  },
  {
    id: 'ring_road_electric_brt',
    nameEn: 'Greater Cairo Ring Road Dedicated Electric BRT',
    nameAr: 'الأتوبيس الترددي الكهربائي السريع BRT على الطريق الدائري',
    corridorEn: 'Greater Cairo Ring Road Expressway (Full Orbital Circuit)',
    corridorAr: 'كامل المسار الدائري للطريق الدائري حول القاهرة الكبرى',
    systemType: 'electric_brt',
    networkLengthKm: 106.0,
    dailyPassengers: 850000,
    annualCo2AvoidedTons: 185000,
    averageSpeedKmh: 65,
    delayReductionPercent: 42,
  },
];

// ============================================================================
// STATION 5: Green Building Envelopes & Public Health (Grand Challenge: Urban Health)
// ============================================================================

export interface GreenBuildingPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  buildingType: 'commercial_office' | 'government_complex' | 'educational_campus';
  envelopeUValueWM2K: number;
  windowShgc: number;
  roofAlbedo: number; // e.g. 0.85 = 85% reflectance
  coolingDemandReductionPercent: number;
  pm25FiltrationEfficiency: number; // e.g. 0.98 = 98%
  annualKwhSavedPerM2: number;
}

export const GREEN_BUILDING_PRESETS: GreenBuildingPreset[] = [
  {
    id: 'new_capital_ministry_complex',
    nameEn: 'New Capital Government District LEED Platinum Complex',
    nameAr: 'المجمع الحكومي بالعاصمة الإدارية الجديدة (تصنيف LEED البلاتيني)',
    locationEn: 'Government District, New Administrative Capital',
    locationAr: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    buildingType: 'government_complex',
    envelopeUValueWM2K: 0.38,
    windowShgc: 0.24,
    roofAlbedo: 0.82,
    coolingDemandReductionPercent: 38,
    pm25FiltrationEfficiency: 0.992,
    annualKwhSavedPerM2: 74,
  },
  {
    id: 'al_alamein_towers_green',
    nameEn: 'New Al-Alamein Coastal Eco-Towers & High-Performance Glazing',
    nameAr: 'أبراج العلمين الشاطئية الصديقة للبيئة والواجهات الذكية',
    locationEn: 'New Al-Alamein Coastal Boulevard',
    locationAr: 'الممشى السياحي، مدينة العلمين الجديدة',
    buildingType: 'commercial_office',
    envelopeUValueWM2K: 0.42,
    windowShgc: 0.22,
    roofAlbedo: 0.78,
    coolingDemandReductionPercent: 32,
    pm25FiltrationEfficiency: 0.985,
    annualKwhSavedPerM2: 65,
  },
  {
    id: 'borg_el_arab_eco_hub',
    nameEn: 'Borg El-Arab Advanced Technology Park Eco-Envelope',
    nameAr: 'مجمع الأبحاث والتكنولوجيا ببرج العرب الجديدة المستدام',
    locationEn: 'Borg El-Arab City, Alexandria Governorate',
    locationAr: 'مدينة برج العرب الجديدة، محافظة الإسكندرية',
    buildingType: 'educational_campus',
    envelopeUValueWM2K: 0.35,
    windowShgc: 0.20,
    roofAlbedo: 0.85,
    coolingDemandReductionPercent: 41,
    pm25FiltrationEfficiency: 0.995,
    annualKwhSavedPerM2: 82,
  },
];
