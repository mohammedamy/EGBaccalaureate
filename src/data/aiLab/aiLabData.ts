/**
 * Artificial Intelligence & Data Science Virtual Simulation Studio Data
 * Accredited for Egyptian General Secondary STEM Schools & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Advanced AI Engineering Simulation Architecture
 */

// ============================================================================
// STATION 1: Classical Machine Learning Benchmark & Optimization Studio
// ============================================================================

export interface MlClassifierPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  applicationEn: string;
  applicationAr: string;
  algorithm: 'logistic_regression' | 'random_forest' | 'xgboost' | 'support_vector_machine';
  regularization: 'none' | 'l1_lasso' | 'l2_ridge' | 'elastic_net';
  datasetRows: number;
  featureCount: number;
  trainingTimeSec: number;
  accuracyPercent: number;
  f1ScorePercent: number;
  aucRocPercent: number;
}

export const ML_CLASSIFIER_BENCHMARK_PRESETS: MlClassifierPreset[] = [
  {
    id: 'nile_delta_crop_yield_xgboost',
    nameEn: 'Nile Delta Precision Agriculture Crop Yield & Soil Health XGBoost Classifier',
    nameAr: 'مصنف XGBoost لإنتاجية المحاصيل وصحة التربة الزراعية في دلتا النيل',
    applicationEn: 'Ministry of Agriculture Precision Farming Telemetry, Kafr El-Sheikh',
    applicationAr: 'منظومة الزراعة الذكية التابعة لوزارة الزراعة، كفر الشيخ',
    algorithm: 'xgboost',
    regularization: 'l2_ridge',
    datasetRows: 250000,
    featureCount: 42,
    trainingTimeSec: 8.4,
    accuracyPercent: 96.8,
    f1ScorePercent: 96.5,
    aucRocPercent: 99.1,
  },
  {
    id: 'cairo_metro_fare_evasion_random_forest',
    nameEn: 'Greater Cairo Metro Transit Flow & Turnstile Anomaly Random Forest Model',
    nameAr: 'نموذج الغابات العشوائية لتحليل تدفقات ركاب مترو القاهرة الكبرى واكتشاف الاختناقات',
    applicationEn: 'Cairo Metro Operations Control Center, Ramses Station',
    applicationAr: 'مركز التحكم والتشغيل لمترو أنفاق القاهرة، محطة رمسيس',
    algorithm: 'random_forest',
    regularization: 'none',
    datasetRows: 1200000,
    featureCount: 28,
    trainingTimeSec: 14.2,
    accuracyPercent: 98.2,
    f1ScorePercent: 97.9,
    aucRocPercent: 99.4,
  },
  {
    id: 'egyptian_credit_risk_lasso_logreg',
    nameEn: 'Egyptian Banking Sector Credit Risk & Default Prediction L1 Lasso Logistic Model',
    nameAr: 'نموذج الانحدار اللوجستي المنتظم بـ L1 لتقييم المخاطر الائتمانية بالبنوك المصرية',
    applicationEn: 'Central Bank of Egypt FinTech Regulatory Sandbox, Cairo',
    applicationAr: 'مختبر التكنولوجيا المالية التنظيمي بالبنك المركزي المصري، القاهرة',
    algorithm: 'logistic_regression',
    regularization: 'l1_lasso',
    datasetRows: 500000,
    featureCount: 65,
    trainingTimeSec: 3.1,
    accuracyPercent: 93.4,
    f1ScorePercent: 92.8,
    aucRocPercent: 97.2,
  },
];

// ============================================================================
// STATION 2: Neural Vision & Deep Object Detection Studio
// ============================================================================

export interface NeuralVisionPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  infrastructureEn: string;
  infrastructureAr: string;
  backboneArchitecture: 'resnet50' | 'yolov8_x' | 'vision_transformer_vit' | 'efficientnet_b7';
  inputResolution: string;
  parametersMillions: number;
  gigaFlops: number;
  inferenceLatencyMs: number;
  meanAveragePrecisionMap: number;
  targetObjectClasses: number;
}

export const NEURAL_VISION_PRESETS: NeuralVisionPreset[] = [
  {
    id: 'suez_canal_vessel_detection_yolo',
    nameEn: 'Suez Canal Maritime Traffic Automated Vessel Tracking & Classification YOLOv8',
    nameAr: 'منظومة YOLOv8 للتتبع والتعرف الآلي على السفن وقوافل العبور بقناة السويس',
    infrastructureEn: 'Suez Canal Authority Vessel Traffic Management System, Ismailia',
    infrastructureAr: 'نظام إدارة حركة الملاحة بهيئة قناة السويس، الإسماعيلية',
    backboneArchitecture: 'yolov8_x',
    inputResolution: '1280x1280',
    parametersMillions: 68.2,
    gigaFlops: 258.0,
    inferenceLatencyMs: 12.5,
    meanAveragePrecisionMap: 89.4,
    targetObjectClasses: 18,
  },
  {
    id: 'new_capital_traffic_monitoring_vit',
    nameEn: 'New Administrative Capital Autonomous Traffic Surveillance Vision Transformer (ViT)',
    nameAr: 'محول الرؤية ViT لمراقبة وتوجيه حركة المرور الذكية بالعاصمة الإدارية الجديدة',
    infrastructureEn: 'Smart City Command & Control Center, New Administrative Capital',
    infrastructureAr: 'مركز القيادة والتحكم للمدينة الذكية، العاصمة الإدارية الجديدة',
    backboneArchitecture: 'vision_transformer_vit',
    inputResolution: '384x384',
    parametersMillions: 86.6,
    gigaFlops: 112.4,
    inferenceLatencyMs: 18.2,
    meanAveragePrecisionMap: 92.1,
    targetObjectClasses: 32,
  },
  {
    id: 'national_heritage_artifact_resnet',
    nameEn: 'Grand Egyptian Museum Ancient Artifact Restoration & Defect Analysis ResNet-50',
    nameAr: 'شبكة ResNet-50 لفحص وترميم النقوش والقطع الأثرية بالمتحف المصري الكبير',
    infrastructureEn: 'Grand Egyptian Museum Conservation Center, Giza Plateau',
    infrastructureAr: 'مركز ترميم الآثار بالمتحف المصري الكبير، هضبة الأهرام',
    backboneArchitecture: 'resnet50',
    inputResolution: '512x512',
    parametersMillions: 25.6,
    gigaFlops: 41.2,
    inferenceLatencyMs: 6.8,
    meanAveragePrecisionMap: 94.6,
    targetObjectClasses: 45,
  },
];

// ============================================================================
// STATION 3: Transformer NLP & Large Language Model Studio
// ============================================================================

export interface TransformerNlpPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  institutionEn: string;
  institutionAr: string;
  modelType: 'encoder_bert' | 'decoder_gpt' | 'retrieval_augmented_rag' | 'arabic_bilingual_llm';
  vocabSize: number;
  hiddenDimension: number;
  attentionHeads: number;
  contextWindowTokens: number;
  perplexityScore: number;
  hallucinationRatePercent: number;
}

export const TRANSFORMER_NLP_PRESETS: TransformerNlpPreset[] = [
  {
    id: 'egyptian_legal_rag_assistant',
    nameEn: 'Egyptian Ministry of Justice Statutory RAG Vector Search & Clause Analyzer',
    nameAr: 'المساعد الذكي لاسترجاع وتفسير المواد القانونية والتشريعات المصرية بنظام RAG',
    institutionEn: 'Egyptian Judicial & Legislative Digitization Authority, Cairo',
    institutionAr: 'الهيئة القومية لرقمنة المنظومة القضائية والتشريعية، القاهرة',
    modelType: 'retrieval_augmented_rag',
    vocabSize: 64000,
    hiddenDimension: 4096,
    attentionHeads: 32,
    contextWindowTokens: 8192,
    perplexityScore: 4.8,
    hallucinationRatePercent: 0.9,
  },
  {
    id: 'arabert_dialectal_sentiment_engine',
    nameEn: 'Egyptian Classical & Dialectal Sentiment Analysis & Entity Recognition ArabERT',
    nameAr: 'نموذج ArabERT لتحليل المشاعر واستخراج الكيانات للنصوص الفصحى والعامية المصرية',
    institutionEn: 'Information Technology Industry Development Agency (ITIDA), Smart Village',
    institutionAr: 'هيئة تنمية صناعة تكنولوجيا المعلومات (إيتيدا)، القرية الذكية',
    modelType: 'encoder_bert',
    vocabSize: 32000,
    hiddenDimension: 768,
    attentionHeads: 12,
    contextWindowTokens: 512,
    perplexityScore: 6.2,
    hallucinationRatePercent: 1.4,
  },
  {
    id: 'thanaweya_curriculum_tutor_llm',
    nameEn: 'Thanaweya Amma Multilingual STEM Educational Reasoning & Pedagogical LLM',
    nameAr: 'النموذج اللغوي التعليمي لمدارس المتفوقين والإجابة عن استفسارات العلوم والرياضيات',
    institutionEn: 'Egyptian Ministry of Education National E-Learning Hub, Cairo',
    institutionAr: 'المركز القومي للتعليم الإلكتروني بوزارة التربية والتعليم، القاهرة',
    modelType: 'arabic_bilingual_llm',
    vocabSize: 128000,
    hiddenDimension: 8192,
    attentionHeads: 64,
    contextWindowTokens: 16384,
    perplexityScore: 3.9,
    hallucinationRatePercent: 1.1,
  },
];

// ============================================================================
// STATION 4: Reinforcement Learning & Autonomous Decision Agent Studio
// ============================================================================

export interface ReinforcementLearningPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  missionEn: string;
  missionAr: string;
  rlAlgorithm: 'deep_q_network' | 'proximal_policy_optimization' | 'soft_actor_critic' | 'td3';
  actionSpaceType: 'discrete' | 'continuous' | 'hybrid';
  discountFactorGamma: number;
  learningRateAlpha: number;
  trainingEpisodes: number;
  averageReward: number;
  convergenceStabilityPercent: number;
}

export const REINFORCEMENT_LEARNING_PRESETS: ReinforcementLearningPreset[] = [
  {
    id: 'benban_solar_grid_dispatch_ppo',
    nameEn: 'Benban Solar Complex Dynamic Energy Grid Battery Storage PPO Dispatch Agent',
    nameAr: 'وكيل PPO لجدولة شحن وتفريغ بطاريات مجمع بنبان للطاقة الشمسية بشبكة الكهرباء',
    missionEn: 'Egyptian Electricity Transmission Company Smart Grid Dispatch, Aswan',
    missionAr: 'الشركة المصرية لنقل الكهرباء - إدارة الشبكات الذكية بأسوان',
    rlAlgorithm: 'proximal_policy_optimization',
    actionSpaceType: 'continuous',
    discountFactorGamma: 0.99,
    learningRateAlpha: 0.0003,
    trainingEpisodes: 50000,
    averageReward: 4850.0,
    convergenceStabilityPercent: 99.2,
  },
  {
    id: 'toshka_irrigation_autonomous_dqn',
    nameEn: 'Toshka Arid Land Precision Variable-Rate Irrigation Pivot DQN Agent',
    nameAr: 'وكيل DQN للإدارة الذاتية لرشاشات الري المحوري للأراضي المستصلحة بتوشكى',
    missionEn: 'New Valley National Agricultural Reclamation Megaproject, Toshka',
    missionAr: 'المشروع القومي لاستصلاح الأراضي الزراعية بتوشكى، الوادي الجديد',
    rlAlgorithm: 'deep_q_network',
    actionSpaceType: 'discrete',
    discountFactorGamma: 0.95,
    learningRateAlpha: 0.001,
    trainingEpisodes: 30000,
    averageReward: 2920.0,
    convergenceStabilityPercent: 97.8,
  },
  {
    id: 'alexandria_harbor_tugboat_sac',
    nameEn: 'Alexandria Port Maritime Terminal Autonomous Collision Avoidance Tugboat SAC',
    nameAr: 'وكيل Soft Actor-Critic للملاحة الآلية وتفادي التصادم لقاطرات ميناء الإسكندرية',
    missionEn: 'Alexandria Port Authority Maritime Navigational Safety Department',
    missionAr: 'هيئة ميناء الإسكندرية - إدارة السلامة الملاحية البحرية',
    rlAlgorithm: 'soft_actor_critic',
    actionSpaceType: 'continuous',
    discountFactorGamma: 0.995,
    learningRateAlpha: 0.0002,
    trainingEpisodes: 80000,
    averageReward: 6410.0,
    convergenceStabilityPercent: 98.7,
  },
];

// ============================================================================
// STATION 5: Enterprise MLOps & Big Data Pipeline Studio
// ============================================================================

export interface MlopsPipelinePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  organizationEn: string;
  organizationAr: string;
  distributedFramework: 'apache_spark_cluster' | 'deepspeed_zero3' | 'ray_distributed' | 'horovod_allreduce';
  clusterComputeNodes: number;
  dataThroughputGbps: number;
  driftDetectionMetric: 'population_stability_index' | 'kolmogorov_smirnov' | 'wasserstein_distance';
  retrainingTriggerThreshold: number;
  serviceUptimePercent: number;
}

export const BIGDATA_MLOPS_PRESETS: MlopsPipelinePreset[] = [
  {
    id: 'egypt_telecom_fraud_spark_cluster',
    nameEn: 'Telecom Egypt Real-Time CDR Stream Anomaly Detection Spark Cluster & MLflow',
    nameAr: 'عنقود Apache Spark ومعايير MLflow لكشف الاحتيال في سجلات مكالمات المصرية للاتصالات',
    organizationEn: 'Telecom Egypt Enterprise Cloud Center, Smart Village, Giza',
    organizationAr: 'مركز سحابة الأعمال بالمصرية للاتصالات، القرية الذكية، الجيزة',
    distributedFramework: 'apache_spark_cluster',
    clusterComputeNodes: 64,
    dataThroughputGbps: 45.0,
    driftDetectionMetric: 'population_stability_index',
    retrainingTriggerThreshold: 0.25,
    serviceUptimePercent: 99.99,
  },
  {
    id: 'national_id_biometric_deepspeed',
    nameEn: 'Egyptian Civil Registry National Biometric Multimodal Foundation Model DeepSpeed ZeRO-3',
    nameAr: 'منظومة DeepSpeed ZeRO-3 لتدريب نموذج البصمات البيومترية بالسجل المدني المصري',
    organizationEn: 'Ministry of Interior National Civil Information Hub, Abbassia',
    organizationAr: 'قطاع الأحوال المدنية بوزارة الداخلية، العباسية، القاهرة',
    distributedFramework: 'deepspeed_zero3',
    clusterComputeNodes: 128,
    dataThroughputGbps: 120.0,
    driftDetectionMetric: 'wasserstein_distance',
    retrainingTriggerThreshold: 0.15,
    serviceUptimePercent: 99.98,
  },
  {
    id: 'suez_logistics_container_ray',
    nameEn: 'SCZone Freight Forwarding Container Optimization Distributed Ray Cluster',
    nameAr: 'عنقود Ray الموزع لإدارة ساحات الحاويات وسلاسل الإمداد بالمنطقة الاقتصادية بالسويس',
    organizationEn: 'Suez Canal Economic Zone Logistics Terminal, Ain Sokhna Port',
    organizationAr: 'محطة الحاويات بالمنطقة الاقتصادية لقناة السويس، ميناء العين السخنة',
    distributedFramework: 'ray_distributed',
    clusterComputeNodes: 32,
    dataThroughputGbps: 22.5,
    driftDetectionMetric: 'kolmogorov_smirnov',
    retrainingTriggerThreshold: 0.05,
    serviceUptimePercent: 99.95,
  },
];
