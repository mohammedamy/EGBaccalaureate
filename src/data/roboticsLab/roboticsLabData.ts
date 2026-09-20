/**
 * Robotics, Mechatronics & Embedded Systems Virtual Simulation Studio Data
 * Accredited for Egyptian General Secondary STEM Schools & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Multidisciplinary Engineering Simulation Architecture
 */

// ============================================================================
// STATION 1: 6-DOF Industrial Robotic Manipulator & Kinematics
// ============================================================================

export interface RoboticArmPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  facilityEn: string;
  facilityAr: string;
  armType: 'articulated_6dof' | 'scara_4dof' | 'collaborative_cobot' | 'delta_high_speed';
  degreesOfFreedom: number;
  payloadKg: number;
  reachMm: number;
  repeatabilityMm: number;
  linkLengthsMm: [number, number, number]; // L1, L2, L3
  maxJointVelocityDegSec: number;
  powerConsumptionWatts: number;
}

export const ROBOTIC_ARM_PRESETS: RoboticArmPreset[] = [
  {
    id: 'cairo_auto_welding_arm',
    nameEn: 'Automotive Heavy Spot Welding 6-DOF Articulated Robot',
    nameAr: 'روبوت اللحام النقطي للسيارات بست درجات حرية (مجمع أكتوبر الصناعي)',
    facilityEn: 'Egyptian Automotive Manufacturing Complex, 6th of October City',
    facilityAr: 'مجمع تصنيع وتجميع السيارات، مدينة السادس من أكتوبر',
    armType: 'articulated_6dof',
    degreesOfFreedom: 6,
    payloadKg: 150,
    reachMm: 2700,
    repeatabilityMm: 0.05,
    linkLengthsMm: [650, 1150, 1000],
    maxJointVelocityDegSec: 180,
    powerConsumptionWatts: 4200,
  },
  {
    id: 'alex_pharma_cleanroom_cobot',
    nameEn: 'Pharmaceutical Cleanroom Collaborative Packaging Cobot',
    nameAr: 'روبوت تعاوني (Cobot) لتعبئة الأدوية في الغرف المعقمة بالإسكندرية',
    facilityEn: 'Alexandria International Pharmaceutical City, Borg El-Arab',
    facilityAr: 'مدينة الإسكندرية الدوائية العالمية، برج العرب',
    armType: 'collaborative_cobot',
    degreesOfFreedom: 6,
    payloadKg: 10,
    reachMm: 1300,
    repeatabilityMm: 0.03,
    linkLengthsMm: [350, 500, 450],
    maxJointVelocityDegSec: 120,
    powerConsumptionWatts: 350,
  },
  {
    id: 'suez_heavy_machining_arm',
    nameEn: 'SCZone Heavy Marine Component Deburring & Milling Manipulator',
    nameAr: 'ذراع التشغيل الآلي الثقيل للمعدات البحرية بالمنطقة الاقتصادية لقناة السويس',
    facilityEn: 'Suez Canal Shipyard & Heavy Industries Complex, Port Said',
    facilityAr: 'ترسانة هيئة قناة السويس ومجمع الصناعات الثقيلة، بورسعيد',
    armType: 'articulated_6dof',
    degreesOfFreedom: 6,
    payloadKg: 300,
    reachMm: 3100,
    repeatabilityMm: 0.08,
    linkLengthsMm: [800, 1300, 1100],
    maxJointVelocityDegSec: 110,
    powerConsumptionWatts: 7500,
  },
];

// ============================================================================
// STATION 2: Autonomous Mobile Robot (AMR) & LiDAR SLAM Navigation
// ============================================================================

export interface MobileRobotPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  environmentEn: string;
  environmentAr: string;
  driveType: 'differential' | 'mecanum_omnidirectional' | 'ackermann_steer';
  payloadCapacityKg: number;
  maxSpeedMs: number;
  lidarRangeMeters: number;
  lidarScanRateHz: number;
  batteryCapacityWh: number;
  runtimeHours: number;
  navigationStack: 'ros2_nav2' | 'cartographer_slam' | 'ekf_vio_fusion';
}

export const MOBILE_ROBOT_PRESETS: MobileRobotPreset[] = [
  {
    id: 'tenth_ramadan_smart_warehouse_amr',
    nameEn: '10th of Ramadan Logistics Mega-Warehouse Heavy Pallet AMR',
    nameAr: 'روبوت نقل المنصات الثقيلة المستقل (AMR) بالمستودعات الذكية بالعاشر من رمضان',
    environmentEn: '10th of Ramadan City Central Logistics City',
    environmentAr: 'المنطقة اللوجستية المركزية، مدينة العاشر من رمضان',
    driveType: 'differential',
    payloadCapacityKg: 1200,
    maxSpeedMs: 1.8,
    lidarRangeMeters: 25,
    lidarScanRateHz: 15,
    batteryCapacityWh: 2400,
    runtimeHours: 10,
    navigationStack: 'ros2_nav2',
  },
  {
    id: 'new_capital_medical_delivery_amr',
    nameEn: 'New Administrative Capital Hospital Autonomous Sterile Courier',
    nameAr: 'الروبوت المستقل لنقل الأدوية والعينات الطبية المعقمة بالعاصمة الإدارية',
    environmentEn: 'New Administrative Capital Medical City',
    environmentAr: 'المدينة الطبية، العاصمة الإدارية الجديدة',
    driveType: 'mecanum_omnidirectional',
    payloadCapacityKg: 80,
    maxSpeedMs: 1.2,
    lidarRangeMeters: 12,
    lidarScanRateHz: 20,
    batteryCapacityWh: 600,
    runtimeHours: 14,
    navigationStack: 'cartographer_slam',
  },
  {
    id: 'borg_el_arab_electronics_agv',
    nameEn: 'Borg El-Arab High-Precision Electronics Wafer Transport AGV',
    nameAr: 'عربة النقل الآلي الموجهة (AGV) لرقائق الإلكترونيات ببرج العرب',
    environmentEn: 'Silicon Park Technology Cluster, New Borg El-Arab',
    environmentAr: 'واحة السيليكون ومجمع التكنولوجيا، برج العرب الجديدة',
    driveType: 'differential',
    payloadCapacityKg: 150,
    maxSpeedMs: 1.5,
    lidarRangeMeters: 20,
    lidarScanRateHz: 25,
    batteryCapacityWh: 950,
    runtimeHours: 12,
    navigationStack: 'ekf_vio_fusion',
  },
];

// ============================================================================
// STATION 3: Brushless DC (BLDC) Motor Drive & FOC Vector Control Studio
// ============================================================================

export interface MotorDrivePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  applicationEn: string;
  applicationAr: string;
  motorType: 'bldc_inrunner' | 'bldc_outrunner' | 'pmsm_servo';
  dcBusVoltageVolts: number;
  ratedCurrentAmps: number;
  peakTorqueNm: number;
  ratedRpm: number;
  polePairs: number;
  pwmFrequencyKhz: number;
  focEfficiencyPercent: number;
}

export const MOTOR_DRIVE_PRESETS: MotorDrivePreset[] = [
  {
    id: 'high_speed_drone_bldc',
    nameEn: 'Surveillance UAV High-Efficiency Outrunner BLDC Propulsion Motor',
    nameAr: 'محرك الدفع عديم المسفرات (BLDC) عالي الكفاءة لطائرات الدرون المصرية',
    applicationEn: 'Long-Endurance Reconnaissance Multirotor Drone System',
    applicationAr: 'طائرات الاستطلاع الذاتي بدون طيار بعيدة المدى',
    motorType: 'bldc_outrunner',
    dcBusVoltageVolts: 24,
    ratedCurrentAmps: 25,
    peakTorqueNm: 1.6,
    ratedRpm: 8500,
    polePairs: 7,
    pwmFrequencyKhz: 32,
    focEfficiencyPercent: 91.5,
  },
  {
    id: 'industrial_servo_pmsm',
    nameEn: 'Precision CNC Machining Center 3-Phase Synchronous AC Servomotor',
    nameAr: 'محرك السيرفو التزامني ثلاثي الطور لمراكز التشغيل الرقمي CNC بحلوان',
    applicationEn: 'Helwan Advanced Defense & Machine Tool Factory 999',
    applicationAr: 'مصنع 999 الحربي للآلات الدقيقة والتشغيل الآلي، حلوان',
    motorType: 'pmsm_servo',
    dcBusVoltageVolts: 310,
    ratedCurrentAmps: 12,
    peakTorqueNm: 18.5,
    ratedRpm: 3000,
    polePairs: 4,
    pwmFrequencyKhz: 16,
    focEfficiencyPercent: 95.2,
  },
  {
    id: 'ev_traction_inverter_bldc',
    nameEn: 'Electric Light Utility Vehicle High-Torque Traction Motor',
    nameAr: 'محرك الجر الكهربائي عالي العزم للسيارات الكهربائية الخفيفة (النصر للسيارات)',
    applicationEn: 'El-Nasr Automotive National Urban EV Manufacturing Line',
    applicationAr: 'شركة النصر لصناعة السيارات، خط إنتاج المركبات الكهربائية الحضرية',
    motorType: 'bldc_inrunner',
    dcBusVoltageVolts: 72,
    ratedCurrentAmps: 80,
    peakTorqueNm: 65.0,
    ratedRpm: 4200,
    polePairs: 5,
    pwmFrequencyKhz: 20,
    focEfficiencyPercent: 93.8,
  },
];

// ============================================================================
// STATION 4: Embedded RTOS & Deterministic CAN Bus Network Architecture
// ============================================================================

export interface EmbeddedRtosPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  hardwarePlatformEn: string;
  hardwarePlatformAr: string;
  mcuCore: 'cortex_m4f' | 'cortex_m7' | 'dual_core_h7';
  clockFrequencyMhz: number;
  rtosKernel: 'FreeRTOS' | 'Zephyr' | 'ThreadX';
  taskCount: number;
  canBaudRateKbps: number;
  maxInterruptLatencyNs: number;
  cpuUtilizationPercent: number;
}

export const EMBEDDED_RTOS_PRESETS: EmbeddedRtosPreset[] = [
  {
    id: 'flight_controller_cortex_m7',
    nameEn: 'UAV Autopilot Dual-Core Hard Real-Time Flight Controller',
    nameAr: 'متحكم الطيران الآني فائق السرعة بمعالج ARM Cortex-M7 للطائرات المسيرة',
    hardwarePlatformEn: 'STM32H7 Dual-Core ARM Cortex-M7/M4 System Board',
    hardwarePlatformAr: 'لوحة التحكم المركزية STM32H7 ثنائية النواة',
    mcuCore: 'dual_core_h7',
    clockFrequencyMhz: 480,
    rtosKernel: 'FreeRTOS',
    taskCount: 8,
    canBaudRateKbps: 1000,
    maxInterruptLatencyNs: 25,
    cpuUtilizationPercent: 42.5,
  },
  {
    id: 'industrial_plc_canopen_node',
    nameEn: 'Industrial Automation PLC CANopen Remote Motion I/O Node',
    nameAr: 'عقدة التحكم الحركي والمداخل والمخارج الصناعية عبر ناقل CANopen',
    hardwarePlatformEn: 'Industrial Cortex-M4 Field Controller Node',
    hardwarePlatformAr: 'وحدة التحكم الميداني الصناعي ARM Cortex-M4',
    mcuCore: 'cortex_m4f',
    clockFrequencyMhz: 168,
    rtosKernel: 'FreeRTOS',
    taskCount: 5,
    canBaudRateKbps: 500,
    maxInterruptLatencyNs: 65,
    cpuUtilizationPercent: 35.0,
  },
  {
    id: 'automotive_ecu_gateway',
    nameEn: 'Automotive Powertrain & Telematics CAN FD Central Gateway',
    nameAr: 'بوابة التحكم المركزي السريعة للسيارات بشبكة CAN FD الحديثة',
    hardwarePlatformEn: 'Automotive-Grade Safety Microcontroller Node',
    hardwarePlatformAr: 'وحدة التحكم الإلكتروني المعتمدة للسيارات (ECU)',
    mcuCore: 'cortex_m7',
    clockFrequencyMhz: 300,
    rtosKernel: 'FreeRTOS',
    taskCount: 12,
    canBaudRateKbps: 2000,
    maxInterruptLatencyNs: 40,
    cpuUtilizationPercent: 55.0,
  },
];

// ============================================================================
// STATION 5: Computer Vision & Real-Time Object Pose Estimation
// ============================================================================

export interface ComputerVisionPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  workcellEn: string;
  workcellAr: string;
  visionSensor: 'rgb_d_depth' | 'stereo_vision' | 'mono_industrial_global_shutter';
  frameResolution: string;
  processingFps: number;
  detectionPipeline: 'opencv_canny_hough' | 'yolov8_6d_pose' | 'aruco_fiducial_pnp';
  graspCycleTimeMs: number;
  detectionAccuracyPercent: number;
}

export const COMPUTER_VISION_PRESETS: ComputerVisionPreset[] = [
  {
    id: 'smart_factory_bin_picking',
    nameEn: 'High-Speed 3D Structured Light Bin-Picking Workcell',
    nameAr: 'محطة التقاط وفرز القطع ثلاثية الأبعاد بالضوء المهيكل (المصانع الذكية)',
    workcellEn: 'SCZone Smart Logistics & Automated Assembly Station',
    workcellAr: 'محطة التجميع والفرز الذاتي بالمنطقة الاقتصادية لقناة السويس',
    visionSensor: 'rgb_d_depth',
    frameResolution: '1920x1080',
    processingFps: 30,
    detectionPipeline: 'yolov8_6d_pose',
    graspCycleTimeMs: 450,
    detectionAccuracyPercent: 98.6,
  },
  {
    id: 'autonomous_sorting_conveyor',
    nameEn: 'High-Throughput Optical Color & Shape Quality Sorting Station',
    nameAr: 'محطة الفرز البصري فائق السرعة للألوان والأشكال على خطوط الإنتاج',
    workcellEn: 'Egyptian Agro-Industrial Packaging Facilities, Sadat City',
    workcellAr: 'مجمع الصناعات الغذائية والتعبئة الآلية، مدينة السادات',
    visionSensor: 'mono_industrial_global_shutter',
    frameResolution: '1280x720',
    processingFps: 120,
    detectionPipeline: 'opencv_canny_hough',
    graspCycleTimeMs: 180,
    detectionAccuracyPercent: 99.4,
  },
  {
    id: 'collaborative_inspection_head',
    nameEn: 'Precision PCB Surface-Mount Component Inspection Cobot Head',
    nameAr: 'رأس التفتيش البصري المجهري لمكونات اللوحات الإلكترونية (PCB)',
    workcellEn: 'Asyut Regional Electronics Innovation & R&D Hub',
    workcellAr: 'مجمع الإلكترونيات والتصميم المتقدم، أسيوط الجديدة',
    visionSensor: 'stereo_vision',
    frameResolution: '2560x1440',
    processingFps: 60,
    detectionPipeline: 'aruco_fiducial_pnp',
    graspCycleTimeMs: 250,
    detectionAccuracyPercent: 99.8,
  },
];
