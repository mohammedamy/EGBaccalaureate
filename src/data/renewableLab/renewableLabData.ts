/**
 * Renewable Energy & Environmental Sustainability Virtual Laboratory Data
 * Accredited for Egyptian General Secondary (Thanaweya Amma) & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Renewable Energy, Clean Tech & Climate Simulation Architecture
 */

// ============================================================================
// STATION 1: Solar Photovoltaic & Concentrated Solar Power (CSP)
// ============================================================================

export interface SolarFarmPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  type: 'pv_silicon' | 'pv_bifacial' | 'pv_tandem' | 'csp_molten_salt';
  capacityMw: number;
  irradianceWm2: number;
  ambientTempC: number;
  nominalCellEfficiency: number;
  tempCoefficientPercentPerC: number;
  trackingType: 'fixed' | 'single_axis' | 'dual_axis';
  albedoCoefficient: number;
  thermalStorageHours?: number;
  annualDniKwhM2: number;
}

export const SOLAR_FARM_PRESETS: SolarFarmPreset[] = [
  {
    id: 'benban_solar_plot_1',
    nameEn: 'Benban Solar Park - Plot 1 (Aswan)',
    nameAr: 'مجمع بنبان للطاقة الشمسية - محطة ١ (أسوان)',
    locationEn: 'Benban, Aswan Governorate (Upper Egypt)',
    locationAr: 'قرية بنبان، محافظة أسوان (صعيد مصر)',
    type: 'pv_silicon',
    capacityMw: 50,
    irradianceWm2: 1020,
    ambientTempC: 38,
    nominalCellEfficiency: 0.215, // 21.5%
    tempCoefficientPercentPerC: -0.38,
    trackingType: 'single_axis',
    albedoCoefficient: 0.28,
    annualDniKwhM2: 2450,
  },
  {
    id: 'kom_ombo_bifacial',
    nameEn: 'Kom Ombo Bifacial Utility Farm',
    nameAr: 'محطة كوم أمبو للألواح ثنائية الوجه (أسوان)',
    locationEn: 'Kom Ombo, Aswan Governorate',
    locationAr: 'مركز كوم أمبو، محافظة أسوان',
    type: 'pv_bifacial',
    capacityMw: 200,
    irradianceWm2: 1040,
    ambientTempC: 36,
    nominalCellEfficiency: 0.228, // 22.8%
    tempCoefficientPercentPerC: -0.32,
    trackingType: 'single_axis',
    albedoCoefficient: 0.36, // desert sand reflective boost
    annualDniKwhM2: 2480,
  },
  {
    id: 'zafarana_csp_molten',
    nameEn: 'Zafarana Parabolic Trough CSP with TES',
    nameAr: 'محطة الزعفرانة للطاقة الشمسية المركزة بالتخزين الحراري',
    locationEn: 'Zafarana, Gulf of Suez / Red Sea',
    locationAr: 'منطقة الزعفرانة، ساحل خليج السويس والبحر الأحمر',
    type: 'csp_molten_salt',
    capacityMw: 100,
    irradianceWm2: 980,
    ambientTempC: 32,
    nominalCellEfficiency: 0.385, // Rankine turbine thermal-to-electric
    tempCoefficientPercentPerC: 0.0, // CSP uses thermal heat
    trackingType: 'single_axis',
    albedoCoefficient: 0.20,
    thermalStorageHours: 8, // 8 nocturnal storage hours
    annualDniKwhM2: 2350,
  },
  {
    id: 'perovskite_tandem_pilot',
    nameEn: 'New Valley Perovskite-Silicon Tandem Pilot',
    nameAr: 'المحطة التجريبية لخلايا البيروفسكايت والسيليكون بالوادي الجديد',
    locationEn: 'Kharga Oasis, New Valley Governorate',
    locationAr: 'واحة الخارجة، محافظة الوادي الجديد',
    type: 'pv_tandem',
    capacityMw: 25,
    irradianceWm2: 1050,
    ambientTempC: 35,
    nominalCellEfficiency: 0.295, // 29.5% tandem lab-tested
    tempCoefficientPercentPerC: -0.25,
    trackingType: 'dual_axis',
    albedoCoefficient: 0.32,
    annualDniKwhM2: 2520,
  },
];

// ============================================================================
// STATION 2: Wind Turbine Aerodynamics & Betz Limit
// ============================================================================

export interface WindTurbinePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  siteEn: string;
  siteAr: string;
  turbineModel: string;
  ratedPowerKw: number;
  rotorDiameterM: number;
  hubHeightM: number;
  ratedWindSpeedMs: number;
  cutInWindSpeedMs: number;
  cutOutWindSpeedMs: number;
  powerCoefficientCp: number; // Betz benchmark comparison
  generatorTypeEn: string;
  generatorTypeAr: string;
  avgSiteWindSpeedMs: number;
}

export const WIND_TURBINE_PRESETS: WindTurbinePreset[] = [
  {
    id: 'gabal_el_zeit_turbine',
    nameEn: 'Gabal El-Zeit Wind Complex (580 MW)',
    nameAr: 'مجمع رياح جبل الزيت بالبحر الأحمر (٥٨٠ ميجاوات)',
    siteEn: 'Gabal El-Zeit, Red Sea Governorate',
    siteAr: 'منطقة جبل الزيت، محافظة البحر الأحمر',
    turbineModel: 'Gamesa G80 / 2.0 MW',
    ratedPowerKw: 2000,
    rotorDiameterM: 80,
    hubHeightM: 85,
    ratedWindSpeedMs: 12.0,
    cutInWindSpeedMs: 3.5,
    cutOutWindSpeedMs: 25.0,
    powerCoefficientCp: 0.46, // 46% vs 59.3% Betz max
    generatorTypeEn: 'Doubly-Fed Induction Generator (DFIG)',
    generatorTypeAr: 'مولد حثي ثنائي التغذية (DFIG)',
    avgSiteWindSpeedMs: 10.5,
  },
  {
    id: 'zafarana_phase_4',
    nameEn: 'Zafarana Coastal Wind Station (545 MW)',
    nameAr: 'محطة رياح الزعفرانة الساحلية بخليج السويس',
    siteEn: 'Zafarana, Gulf of Suez',
    siteAr: 'الزعفرانة، ساحل خليج السويس',
    turbineModel: 'Nordex N60 / 1.3 MW',
    ratedPowerKw: 1300,
    rotorDiameterM: 60,
    hubHeightM: 70,
    ratedWindSpeedMs: 12.5,
    cutInWindSpeedMs: 3.0,
    cutOutWindSpeedMs: 24.0,
    powerCoefficientCp: 0.43,
    generatorTypeEn: 'Geared Asynchronous Induction Machine',
    generatorTypeAr: 'محرك حثي غير تزامني بصندوق تروس كوكبي',
    avgSiteWindSpeedMs: 9.2,
  },
  {
    id: 'gulf_suez_deep_offshore',
    nameEn: 'Gulf of Suez Deepwater Offshore Concept',
    nameAr: 'محطة رياح خليج السويس البحرية العائمة (مشروع مستقبلي)',
    siteEn: 'Deepwaters of Southern Gulf of Suez',
    siteAr: 'المياه العميقة لجنوب خليج السويس',
    turbineModel: 'Vestas V164 / 8.0 MW Spar-Buoy',
    ratedPowerKw: 8000,
    rotorDiameterM: 164,
    hubHeightM: 110,
    ratedWindSpeedMs: 11.5,
    cutInWindSpeedMs: 3.0,
    cutOutWindSpeedMs: 28.0,
    powerCoefficientCp: 0.485,
    generatorTypeEn: 'Direct-Drive Permanent Magnet Synchronous (PMSG)',
    generatorTypeAr: 'مولد تزامني ذو دفع مباشر ومغناطيس دائم (PMSG)',
    avgSiteWindSpeedMs: 11.8,
  },
];

// ============================================================================
// STATION 3: Green Hydrogen Electrolysis & Power-to-X Reactor
// ============================================================================

export interface HydrogenElectrolyzerPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  technology: 'alkaline' | 'pem' | 'soec';
  facilityLocationEn: string;
  facilityLocationAr: string;
  electrolyzerPowerMw: number;
  cellEfficiencyPercent: number; // lower heating value based
  specificEnergyKwhPerKg: number;
  operatingTempC: number;
  operatingPressureBar: number;
  waterConsumptionLitersPerKg: number;
  downstreamProductEn: string;
  downstreamProductAr: string;
}

export const HYDROGEN_ELECTROLYZER_PRESETS: HydrogenElectrolyzerPreset[] = [
  {
    id: 'sczone_ain_sokhna_pem',
    nameEn: 'SCZone Green Hydrogen & Ammonia Corridor (Ain Sokhna)',
    nameAr: 'ممر الهيدروجين والأمونيا الخضراء بالعين السخنة (قناة السويس)',
    technology: 'pem',
    facilityLocationEn: 'Ain Sokhna Special Economic Zone',
    facilityLocationAr: 'المنطقة الاقتصادية الخاصة بالعين السخنة',
    electrolyzerPowerMw: 100,
    cellEfficiencyPercent: 68.0,
    specificEnergyKwhPerKg: 49.5,
    operatingTempC: 75,
    operatingPressureBar: 30,
    waterConsumptionLitersPerKg: 9.8,
    downstreamProductEn: 'Green Ammonia (NH3) for Maritime Bunker & Europe Export',
    downstreamProductAr: 'أمونيا خضراء (NH3) لتزويد السفن بالوقود وتصديرها لأوروبا',
  },
  {
    id: 'east_port_said_alkaline',
    nameEn: 'East Port Said Maritime Decarbonization Hub',
    nameAr: 'مجمع شرق بورسعيد لإزالة الكربون وتزويد الملاحة بالهيدروجين',
    technology: 'alkaline',
    facilityLocationEn: 'East Port Said Port Industrial Zone',
    facilityLocationAr: 'المنطقة الصناعية بميناء شرق بورسعيد',
    electrolyzerPowerMw: 250,
    cellEfficiencyPercent: 63.5,
    specificEnergyKwhPerKg: 52.8,
    operatingTempC: 80,
    operatingPressureBar: 16,
    waterConsumptionLitersPerKg: 10.2,
    downstreamProductEn: 'Liquid Green Hydrogen & Clean Chemical Feedstock',
    downstreamProductAr: 'هيدروجين أخضر مسال ومدخلات للصناعات الكيماوية النظيفة',
  },
  {
    id: 'damietta_soec_synfuel',
    nameEn: 'Damietta High-Temperature SOEC Synfuel Plant',
    nameAr: 'محطة دمياط للتحليل الكهربائي عالي الحرارة وتخليق وقود الطيران',
    technology: 'soec',
    facilityLocationEn: 'Damietta Port Industrial Complex',
    facilityLocationAr: 'المجمع الصناعي بميناء دمياط',
    electrolyzerPowerMw: 50,
    cellEfficiencyPercent: 82.5,
    specificEnergyKwhPerKg: 38.2, // uses waste industrial steam
    operatingTempC: 780,
    operatingPressureBar: 1.5,
    waterConsumptionLitersPerKg: 9.0,
    downstreamProductEn: 'Sustainable Aviation Fuel (SAF) via Fischer-Tropsch',
    downstreamProductAr: 'وقود طيران اصطناعي مستدام (SAF) عبر تفاعل فيشر-تروبش',
  },
];

// ============================================================================
// STATION 4: Smart Grids, BESS Storage & Regional Interconnection
// ============================================================================

export interface GridStoragePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  storageType: 'pumped_hydro' | 'bess_lfp' | 'hvdc_link';
  ratedPowerMw: number;
  storageCapacityMwh: number;
  roundTripEfficiencyPercent: number;
  durationHours: number;
  responseLatencyMs: number;
  frequencyRegulationMw: number;
  keyInfrastructureEn: string;
  keyInfrastructureAr: string;
}

export const GRID_STORAGE_PRESETS: GridStoragePreset[] = [
  {
    id: 'ataka_pumped_storage_suez',
    nameEn: 'Ataka Mount Pumped-Storage Hydro Project (Suez)',
    nameAr: 'مشروع جبل عتاقة للضخ والتخزين الكهرومائي بالسويس',
    categoryEn: 'Bulk Utility Pumped Hydro Storage (PHS)',
    categoryAr: 'التخزين الكهرومائي بالضخ والتخزين لمقاييس الشبكة الموحدة',
    storageType: 'pumped_hydro',
    ratedPowerMw: 2400,
    storageCapacityMwh: 14400, // 6 hours full generation
    roundTripEfficiencyPercent: 76.5,
    durationHours: 6.0,
    responseLatencyMs: 30000, // 30 seconds startup
    frequencyRegulationMw: 800,
    keyInfrastructureEn: 'Upper Mountain Reservoir (7.3M m³) & 8 Reversible Francis Pump-Turbines',
    keyInfrastructureAr: 'خزان علوي بقمة جبل عتاقة (٧.٣ مليون م³) و٨ توربينات فرانسيس عكوسة',
  },
  {
    id: 'new_capital_bess_hub',
    nameEn: 'New Administrative Capital Fast-Response BESS Hub',
    nameAr: 'محطة بطاريات تخزين الطاقة الفائقة بالعاصمة الإدارية الجديدة',
    categoryEn: 'Grid-Forming Lithium-Iron-Phosphate (LFP) Battery',
    categoryAr: 'بطاريات فوسفات حديد الليثيوم السريعة لتشكيل تردد الشبكة',
    storageType: 'bess_lfp',
    ratedPowerMw: 100,
    storageCapacityMwh: 400, // 4 hours duration
    roundTripEfficiencyPercent: 88.0,
    durationHours: 4.0,
    responseLatencyMs: 20, // 20 milliseconds synthetic inertia
    frequencyRegulationMw: 100,
    keyInfrastructureEn: 'Modular LFP Racks, Bi-directional Grid-forming Smart Inverters & Fire Suppression',
    keyInfrastructureAr: 'وحدات خلايا LFP وعواكس ذكية ثنائية الاتجاه لتشكيل التردد وأنظمة إطفاء بالغاز',
  },
  {
    id: 'egypt_saudi_hvdc_interconnector',
    nameEn: 'Egypt–Saudi Arabia 3,000 MW HVDC Interconnection',
    nameAr: 'مشروع الربط الكهربائي المصري السعودي بالتيار المستمر (٣٠٠٠ ميجاوات)',
    categoryEn: 'Subsea & Overhead High Voltage Direct Current (HVDC)',
    categoryAr: 'خطوط الربط البحري والبري بالتيار المستمر عالي الجهد (±٥٠٠ كيلوفولت)',
    storageType: 'hvdc_link',
    ratedPowerMw: 3000,
    storageCapacityMwh: 24000, // daily bilateral power exchange capacity
    roundTripEfficiencyPercent: 96.2,
    durationHours: 8.0,
    responseLatencyMs: 50,
    frequencyRegulationMw: 500,
    keyInfrastructureEn: 'Badr (Egypt) & Tabuk/Medina (KSA) Converter Stations, Gulf of Aqaba 20 km Subsea Cable',
    keyInfrastructureAr: 'محطتا محولات بدر (مصر) وتبوك/المدينة (السعودية) وكابل بحري بخليج العقبة بطول ٢٠ كم',
  },
];

// ============================================================================
// STATION 5: Carbon Accounting & Life Cycle Emissions (LCA / CBAM)
// ============================================================================

export interface IndustrialDecarbonizationPreset {
  id: string;
  facilityNameEn: string;
  facilityNameAr: string;
  sectorEn: string;
  sectorAr: string;
  annualProductionTons: number;
  scope1EmissionsTonsCo2e: number;
  scope2EmissionsTonsCo2e: number;
  scope3EmissionsTonsCo2e: number;
  euCbamBenchmarkTonsPerTon: number;
  euEtsCarbonPriceEurPerTon: number;
  decarbonizationInterventionEn: string;
  decarbonizationInterventionAr: string;
}

export const INDUSTRIAL_DECARBONIZATION_PRESETS: IndustrialDecarbonizationPreset[] = [
  {
    id: 'ezz_steel_rebar',
    facilityNameEn: 'Ezz Steel Integrated DRI & EAF Complex (Suez)',
    facilityNameAr: 'مجمع حديد عز المتكامل للاختزال المباشر وقوس الكهرباء (السويس)',
    sectorEn: 'Iron and Steel (CBAM Annex I Priority)',
    sectorAr: 'الحديد والصلب (أولوية الملحق ١ لآلية تعديل ألكربون الأوروبية)',
    annualProductionTons: 1200000, // 1.2M tons rebar/billet
    scope1EmissionsTonsCo2e: 1320000, // direct natural gas DRI
    scope2EmissionsTonsCo2e: 480000,  // electric arc furnace grid power
    scope3EmissionsTonsCo2e: 360000,  // upstream iron ore pellets shipping
    euCbamBenchmarkTonsPerTon: 1.25,
    euEtsCarbonPriceEurPerTon: 75.0,
    decarbonizationInterventionEn: 'Replacing Natural Gas with 30% Green Hydrogen in DRI furnace + 100 MW On-site Solar PV',
    decarbonizationInterventionAr: 'استبدال ٣٠٪ من الغاز الطبيعي بالهيدروجين الأخضر بفرن الاختزال ومحطة شمسية بقدرة ١٠٠ ميجاوات',
  },
  {
    id: 'abu_qir_fertilizers',
    facilityNameEn: 'Abu Qir Fertilizers & Chemical Industries (Alexandria)',
    facilityNameAr: 'شركة أبو قير للأسمدة والصناعات الكيماوية (الإسكندرية)',
    sectorEn: 'Nitrogen Fertilizers & Urea (CBAM Sector)',
    sectorAr: 'الأسمدة النيتروجينية واليوريا (قطاع خاضع لضريبة CBAM)',
    annualProductionTons: 1800000,
    scope1EmissionsTonsCo2e: 2160000,
    scope2EmissionsTonsCo2e: 340000,
    scope3EmissionsTonsCo2e: 280000,
    euCbamBenchmarkTonsPerTon: 1.15,
    euEtsCarbonPriceEurPerTon: 75.0,
    decarbonizationInterventionEn: 'Electrification of Ammonia Loop + Green Hydrogen Import from SCZone Pipeline',
    decarbonizationInterventionAr: 'كهربة خطوط إنتاج الأمونيا واستيراد الهيدروجين الأخضر عبر خط أنابيب السخنة',
  },
  {
    id: 'misr_aluminum_nag_hammadi',
    facilityNameEn: 'EgyptAlum Smelter & Anode Baking Plant (Nag Hammadi)',
    facilityNameAr: 'مجمع مصانع مصر للألومنيوم ومحمصات الأنود (نجع حمادي)',
    sectorEn: 'Primary Aluminum Smelting & Extrusion',
    sectorAr: 'صهر وتشكيل الألومنيوم الأولي عالي النقاوة',
    annualProductionTons: 320000,
    scope1EmissionsTonsCo2e: 512000,  // anode carbon oxidation
    scope2EmissionsTonsCo2e: 1760000, // massive electricity electrolysis demand
    scope3EmissionsTonsCo2e: 256000,  // bauxite and pitch transport
    euCbamBenchmarkTonsPerTon: 6.50,
    euEtsCarbonPriceEurPerTon: 75.0,
    decarbonizationInterventionEn: 'Direct Power Purchase Agreement (PPA) with High Dam Hydro + 500 MW Solar Complex in Qena',
    decarbonizationInterventionAr: 'عقد توريد كهرباء خضراء مباشر (PPA) من السد العالي ومجمع شمسي ٥٠٠ ميجاوات بقنا',
  },
];
