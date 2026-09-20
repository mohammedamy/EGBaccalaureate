/**
 * Advanced Electronics, VLSI & IoT Systems Virtual Simulation Studio Data
 * Accredited for Egyptian General Secondary STEM Schools & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Engineering Simulation Architecture
 */

// ============================================================================
// STATION 1: BJT & MOSFET Power Stages & Small-Signal Amplifier Lab
// ============================================================================

export interface AmplifierPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  facilityEn: string;
  facilityAr: string;
  transistorType: 'npn_bjt' | 'pnp_bjt' | 'n_channel_mosfet' | 'sic_power_mosfet';
  topology: 'common_emitter' | 'common_source' | 'push_pull_class_ab' | 'cascode_high_freq';
  supplyVoltageVolts: number;
  quiescentCurrentMa: number;
  smallSignalGainDb: number;
  bandwidthKhz: number;
  inputImpedanceOhms: number;
  outputImpedanceOhms: number;
  thdPercent: number;
}

export const AMPLIFIER_PRESETS: AmplifierPreset[] = [
  {
    id: 'benban_solar_inverter_mosfet_stage',
    nameEn: 'Benban Solar Park Utility-Scale Inverter Push-Pull Power MOSFET Stage',
    nameAr: 'مرحلة دفع وجذب لترانزستورات القدرة MOSFET بمحطة بنبان للطاقة الشمسية بأسوان',
    facilityEn: 'Benban Solar Energy Complex, Aswan Governorate',
    facilityAr: 'مجمع بنبان للطاقة الشمسية، محافظة أسوان',
    transistorType: 'sic_power_mosfet',
    topology: 'push_pull_class_ab',
    supplyVoltageVolts: 48,
    quiescentCurrentMa: 150,
    smallSignalGainDb: 28.5,
    bandwidthKhz: 500,
    inputImpedanceOhms: 1000000,
    outputImpedanceOhms: 0.08,
    thdPercent: 0.12,
  },
  {
    id: 'new_capital_public_address_bjt',
    nameEn: 'New Administrative Capital Opera House Class-AB High-Fidelity BJT Amplifier',
    nameAr: 'مكبر قدرة صوتي فائق النقاء Class-AB بدار الأوبرا بالعاصمة الإدارية الجديدة',
    facilityEn: 'City of Arts and Culture Opera House, New Administrative Capital',
    facilityAr: 'مدينة الفنون والثقافة، العاصمة الإدارية الجديدة',
    transistorType: 'npn_bjt',
    topology: 'push_pull_class_ab',
    supplyVoltageVolts: 36,
    quiescentCurrentMa: 85,
    smallSignalGainDb: 34.0,
    bandwidthKhz: 120,
    inputImpedanceOhms: 47000,
    outputImpedanceOhms: 0.04,
    thdPercent: 0.03,
  },
  {
    id: 'helwan_defense_wideband_cascode',
    nameEn: 'Helwan Advanced Defense Avionics Radar Wideband RF Cascode Preamplifier',
    nameAr: 'المكبر التمهيدي ذو النطاق العريض Cascode لرادارات الدفاع الجوي بحلوان',
    facilityEn: 'Helwan Electronics and Radar Technology Facility 360',
    facilityAr: 'مصنع 360 للرادار والإلكترونيات الحربية المتقدمة، حلوان',
    transistorType: 'n_channel_mosfet',
    topology: 'cascode_high_freq',
    supplyVoltageVolts: 12,
    quiescentCurrentMa: 40,
    smallSignalGainDb: 42.0,
    bandwidthKhz: 85000,
    inputImpedanceOhms: 50,
    outputImpedanceOhms: 50,
    thdPercent: 0.08,
  },
];

// ============================================================================
// STATION 2: Precision Op-Amp Active Filters & Instrumentation Studio
// ============================================================================

export interface ActiveFilterPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  clinicalFacilityEn: string;
  clinicalFacilityAr: string;
  filterTopology: 'sallen_key_lowpass' | 'sallen_key_highpass' | 'multiple_feedback_bandpass' | 'instrumentation_inamp';
  cutoffFrequencyHz: number;
  qualityFactorQ: number;
  passbandGainDb: number;
  cmrrDb: number;
  inputBiasCurrentPa: number;
  gainBandwidthProductMhz: number;
}

export const ACTIVE_FILTER_PRESETS: ActiveFilterPreset[] = [
  {
    id: 'kasr_al_ainy_ecg_inamp_front_end',
    nameEn: 'Kasr Al-Ainy Medical Center 12-Lead ECG Bioelectric Instrumentation Amplifier',
    nameAr: 'مكبر الأجهزة الطبية الدقيقة ثلاثي المكبرات لتخطيط كهربية القلب بمستشفيات قصر العيني',
    clinicalFacilityEn: 'Kasr Al-Ainy Faculty of Medicine Cardiology Center, Cairo University',
    clinicalFacilityAr: 'مركز أمراض القلب، كلية طب قصر العيني، جامعة القاهرة',
    filterTopology: 'instrumentation_inamp',
    cutoffFrequencyHz: 150,
    qualityFactorQ: 0.707,
    passbandGainDb: 60.0,
    cmrrDb: 120.0,
    inputBiasCurrentPa: 5,
    gainBandwidthProductMhz: 10.0,
  },
  {
    id: 'suez_canal_subsea_acoustic_filter',
    nameEn: 'Suez Canal Subsea Acoustic Navigation Sonar Active Bandpass Filter',
    nameAr: 'المرشح الفعال لتمرير النطاق الصوتي لسونار الملاحة تحت المائية بهيئة قناة السويس',
    clinicalFacilityEn: 'Suez Canal Authority Maritime Research Center, Ismailia',
    clinicalFacilityAr: 'مركز الأبحاث البحرية، هيئة قناة السويس، الإسماعيلية',
    filterTopology: 'multiple_feedback_bandpass',
    cutoffFrequencyHz: 25000,
    qualityFactorQ: 4.5,
    passbandGainDb: 24.0,
    cmrrDb: 95.0,
    inputBiasCurrentPa: 50,
    gainBandwidthProductMhz: 45.0,
  },
  {
    id: 'tenth_ramadan_turbine_antialiasing',
    nameEn: '10th of Ramadan Heavy Industrial Turbine Vibration Antialiasing Filter',
    nameAr: 'مرشح سالين-كي لمنع التعرج لحساسات اهتزاز التوربينات بمدينة العاشر من رمضان',
    clinicalFacilityEn: '10th of Ramadan Power Equipment & Turbine Manufacturing Complex',
    clinicalFacilityAr: 'مجمع تصنيع التوربينات ومعدات توليد الطاقة، العاشر من رمضان',
    filterTopology: 'sallen_key_lowpass',
    cutoffFrequencyHz: 2000,
    qualityFactorQ: 0.707,
    passbandGainDb: 0.0,
    cmrrDb: 88.0,
    inputBiasCurrentPa: 120,
    gainBandwidthProductMhz: 16.0,
  },
];

// ============================================================================
// STATION 3: FPGA RTL Synthesis & Static Timing Analysis (STA) Workbench
// ============================================================================

export interface FpgaDesignPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  deploymentEn: string;
  deploymentAr: string;
  deviceFamily: 'xilinx_artix_7' | 'intel_cyclone_v' | 'lattice_ecp5' | 'xilinx_zynq_ultrascale';
  lutCount: number;
  flipFlopCount: number;
  dspSlices: number;
  blockRamKb: number;
  targetFrequencyMhz: number;
  worstNegativeSlackNs: number; // Positive = timing met
  dynamicPowerWatts: number;
}

export const FPGA_DESIGN_PRESETS: FpgaDesignPreset[] = [
  {
    id: 'egysa_satellite_telemetry_fpga',
    nameEn: 'Egyptian Space Agency CubeSat Multi-Channel Telemetry Pipelined Encoder',
    nameAr: 'المشفر الرقمي المتسلسل لبيانات الأقمار الصناعية بوكالة الفضاء المصرية (EgSA)',
    deploymentEn: 'Egyptian Space City Satellite Assembly & Integration Testing Center, New Cairo',
    deploymentAr: 'مركز تجميع واختبار الأقمار الصناعية، وكالة الفضاء المصرية، القاهرة الجديدة',
    deviceFamily: 'xilinx_zynq_ultrascale',
    lutCount: 14200,
    flipFlopCount: 18400,
    dspSlices: 64,
    blockRamKb: 1152,
    targetFrequencyMhz: 250,
    worstNegativeSlackNs: 0.42, // Met timing with 0.42ns positive slack
    dynamicPowerWatts: 1.85,
  },
  {
    id: 'alex_telecom_10g_serdes_framer',
    nameEn: 'Alexandria Subsea Optical Cable Landing Station 10Gbps Ethernet Framer',
    nameAr: 'معالج حزم الألياف الضوئية بسرعة 10 جيجابت/ث بمحطة إنزال الكابلات البحرية بالإسكندرية',
    deploymentEn: 'Abu Talat Submarine Cable International Landing Station, Alexandria',
    deploymentAr: 'محطة إنزال الكابلات البحرية الدولية بأبو تلات، الإسكندرية',
    deviceFamily: 'xilinx_artix_7',
    lutCount: 28600,
    flipFlopCount: 31200,
    dspSlices: 32,
    blockRamKb: 2048,
    targetFrequencyMhz: 312.5,
    worstNegativeSlackNs: 0.18,
    dynamicPowerWatts: 2.65,
  },
  {
    id: 'cairo_ring_road_radar_fft_coprocessor',
    nameEn: 'Greater Cairo Intelligent Traffic 77GHz FMCW Radar 1024-Point FFT Accelerator',
    nameAr: 'معالج تسريع تحويل فورييه السريع FFT لرادارات المرور الذكية بالطريق الدائري',
    deploymentEn: 'National ITS Intelligent Transportation Operations Command, Cairo',
    deploymentAr: 'مركز التحكم الوطني لمنظومة النقل الذكي (ITS)، القاهرة',
    deviceFamily: 'intel_cyclone_v',
    lutCount: 19800,
    flipFlopCount: 22400,
    dspSlices: 96,
    blockRamKb: 1536,
    targetFrequencyMhz: 180,
    worstNegativeSlackNs: 0.55,
    dynamicPowerWatts: 1.40,
  },
];

// ============================================================================
// STATION 4: Embedded IoT Microcontroller Node & Multi-Sensor Workbench
// ============================================================================

export interface IotNodePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  mcuCore: 'arm_cortex_m4' | 'esp32_dual_xtensa' | 'arm_cortex_m0_plus' | 'risc_v_32bit';
  primaryRadio: 'wifi_80211' | 'ble_5' | 'lorawan_868' | 'cellular_nb_iot';
  sensorsAttached: string[];
  batteryCapacityMah: number;
  activeCurrentMa: number;
  deepSleepCurrentUa: number;
  expectedBatteryLifeYears: number;
  mqttQosLevel: 0 | 1 | 2;
}

export const IOT_NODE_PRESETS: IotNodePreset[] = [
  {
    id: 'new_delta_smart_irrigation_node',
    nameEn: 'New Delta Agricultural Mega-Project Solar-Powered Precision Soil Telemetry Node',
    nameAr: 'عقدة القياس اللاسلكية الذكية لرطوبة التربة والري بمشروع الدلتا الجديدة العملاق',
    locationEn: 'New Delta National Agricultural Reclamation Axis, Western Desert',
    locationAr: 'محور الدلتا الجديدة للاستصلاح الزراعي، الصحراء الغربية',
    mcuCore: 'arm_cortex_m4',
    primaryRadio: 'lorawan_868',
    sensorsAttached: ['TDR Soil Moisture Probe', 'Soil Electrical Conductivity (EC)', 'Subsurface Temperature Array'],
    batteryCapacityMah: 3400,
    activeCurrentMa: 45,
    deepSleepCurrentUa: 4.2,
    expectedBatteryLifeYears: 6.5,
    mqttQosLevel: 1,
  },
  {
    id: 'toshka_weather_solar_node',
    nameEn: 'Toshka Spillway Hybrid Microgrid Solar Irradiance & Ambient Telemetry Station',
    nameAr: 'محطة الرصد المناخي والإشعاع الشمسي لشبكات توشكى الهجينة المستقلة',
    locationEn: 'Toshka Lakes & Upper Egypt Agricultural Engineering Basin',
    locationAr: 'مشروع توشكى الخير، جنوب الوادي',
    mcuCore: 'esp32_dual_xtensa',
    primaryRadio: 'wifi_80211',
    sensorsAttached: ['Pyranometer Solar Flux Sensor', 'Anemometer Wind Speed', 'Ambient Humidity & Temperature'],
    batteryCapacityMah: 5000,
    activeCurrentMa: 110,
    deepSleepCurrentUa: 12.0,
    expectedBatteryLifeYears: 4.2,
    mqttQosLevel: 1,
  },
  {
    id: 'greater_cairo_particulate_air_monitor',
    nameEn: 'Greater Cairo Clean Air Network Laser Scattering PM2.5/PM10 Urban Station',
    nameAr: 'محطة الرصد البيئي للجسيمات العالقة الدقيقة PM2.5 بشبكة هواء القاهرة الكبرى',
    locationEn: 'Ministry of Environment Urban Monitoring Network, Maadi, Cairo',
    locationAr: 'شبكة الرصد البيئي لوزارة البيئة، المعادي، القاهرة',
    mcuCore: 'arm_cortex_m0_plus',
    primaryRadio: 'cellular_nb_iot',
    sensorsAttached: ['Laser Particle Counter (PM2.5/PM10)', 'NDIR Carbon Dioxide Sensor', 'BME680 VOC Gas Sensor'],
    batteryCapacityMah: 7200,
    activeCurrentMa: 65,
    deepSleepCurrentUa: 6.8,
    expectedBatteryLifeYears: 5.0,
    mqttQosLevel: 2,
  },
];

// ============================================================================
// STATION 5: Industrial IoT (IIoT) Factory Edge Gateway & Fieldbus Console
// ============================================================================

export interface IiotGatewayPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  enterpriseEn: string;
  enterpriseAr: string;
  industrialBus: 'modbus_rtu_rs485' | 'opc_ua_tsn' | 'profinet_industrial' | 'ethercat';
  edgeAiFramework: 'tinyml_cmsis_nn' | 'tflite_micro' | 'edge_impulse' | 'none';
  connectedSlaves: number;
  cycleTimeMs: number;
  hardwareSecurityModule: 'crypto_auth_atecc608' | 'puf_sram_ro_t' | 'tpm_2_0';
  anomalyDetectionAccuracyPercent: number;
}

export const IIOT_GATEWAY_PRESETS: IiotGatewayPreset[] = [
  {
    id: 'ain_sokhna_petrochemical_modbus_gateway',
    nameEn: 'Suez Canal Economic Zone Petrochemical Refinery Modbus RTU Edge Gateway',
    nameAr: 'بوابة إنترنت الأشياء الصناعي Modbus لمصفاة البتروكيماويات بالمنطقة الاقتصادية بالسخنة',
    enterpriseEn: 'SCZone Petrochemical Storage and Refining Terminal, Ain Sokhna',
    enterpriseAr: 'مجمع تكرير وتخزين البتروكيماويات بالعين السخنة، الهيئة العامة للمنطقة الاقتصادية',
    industrialBus: 'modbus_rtu_rs485',
    edgeAiFramework: 'tinyml_cmsis_nn',
    connectedSlaves: 32,
    cycleTimeMs: 10.0,
    hardwareSecurityModule: 'crypto_auth_atecc608',
    anomalyDetectionAccuracyPercent: 98.6,
  },
  {
    id: 'october_automotive_tsn_cell_gateway',
    nameEn: '6th of October Vehicle Stamping Plant Deterministic OPC UA TSN Industrial Gateway',
    nameAr: 'بوابة الشبكات الحساسة للوقت TSN لخطوط كبس وتصنيع السيارات بالسادس من أكتوبر',
    enterpriseEn: 'Egyptian Automotive Industrial Manufacturing Zone, 6th of October City',
    enterpriseAr: 'المنطقة الصناعية لتجميع وتصنيع المركبات، مدينة السادس من أكتوبر',
    industrialBus: 'opc_ua_tsn',
    edgeAiFramework: 'tflite_micro',
    connectedSlaves: 64,
    cycleTimeMs: 0.5,
    hardwareSecurityModule: 'puf_sram_ro_t',
    anomalyDetectionAccuracyPercent: 99.4,
  },
  {
    id: 'damietta_port_crane_vibration_predictor',
    nameEn: 'Damietta Maritime Port Container Crane Predictive Maintenance Edge AI Node',
    nameAr: 'عقدة الذكاء الاصطناعي الطرفي للصيانة التنبؤية لأوناش الحاويات بميناء دمياط البحري',
    enterpriseEn: 'Damietta Container & Cargo Handling Terminal, Damietta Port',
    enterpriseAr: 'محطة تداول الحاويات والبضائع، ميناء دمياط البحري',
    industrialBus: 'profinet_industrial',
    edgeAiFramework: 'edge_impulse',
    connectedSlaves: 16,
    cycleTimeMs: 5.0,
    hardwareSecurityModule: 'tpm_2_0',
    anomalyDetectionAccuracyPercent: 97.9,
  },
];
