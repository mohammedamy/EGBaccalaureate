/**
 * Types and definitions for Egyptian Governorate-Level Analytics & Equity Metrics
 * Covers all 27 Egyptian Governorates across 6 official planning zones.
 */

export type RegionalZone =
  | 'greater_cairo'
  | 'alex_coast'
  | 'nile_delta'
  | 'canal'
  | 'upper_egypt'
  | 'frontier';

export type UrbanRuralClassification = 'urban' | 'rural' | 'frontier';

export interface GovernorateRecord {
  id: string;
  nameAr: string;
  nameEn: string;
  zone: RegionalZone;
  classification: UrbanRuralClassification;
  populationEstimateMillions: number;
  sampleStudentCount: number;
  averageReadinessIndex: number; // 0 - 100
  offlinePracticeRatio: number; // % of sessions completed offline
  topPracticedSubjectAr: string;
  averageHotsAccuracy: number; // % on Higher Order Thinking Skills
}

export interface RegionalZoneSummary {
  zone: RegionalZone;
  nameAr: string;
  nameEn: string;
  governoratesCount: number;
  averageReadiness: number;
  averageOfflineRatio: number;
  totalStudentsSampled: number;
}

export interface RuralUrbanParityReport {
  urbanAverageReadiness: number;
  ruralAverageReadiness: number;
  frontierAverageReadiness: number;
  parityRatio: number; // (rural / urban) * 100
  parityGapPercentage: number; // |urban - rural|
  isTargetMet: boolean; // parityGap <= 10% (Section 7 target)
  evaluationAr: string;
}

export const EGYPTIAN_GOVERNORATES: GovernorateRecord[] = [
  // Greater Cairo
  {
    id: 'cairo',
    nameAr: 'القاهرة',
    nameEn: 'Cairo',
    zone: 'greater_cairo',
    classification: 'urban',
    populationEstimateMillions: 10.2,
    sampleStudentCount: 4250,
    averageReadinessIndex: 78.4,
    offlinePracticeRatio: 38.2,
    topPracticedSubjectAr: 'الفيزياء',
    averageHotsAccuracy: 71.8,
  },
  {
    id: 'giza',
    nameAr: 'الجيزة',
    nameEn: 'Giza',
    zone: 'greater_cairo',
    classification: 'urban',
    populationEstimateMillions: 9.3,
    sampleStudentCount: 3890,
    averageReadinessIndex: 76.9,
    offlinePracticeRatio: 41.5,
    topPracticedSubjectAr: 'التفاضل والتكامل',
    averageHotsAccuracy: 69.4,
  },
  {
    id: 'qalyubia',
    nameAr: 'القليوبية',
    nameEn: 'Qalyubia',
    zone: 'greater_cairo',
    classification: 'rural',
    populationEstimateMillions: 6.1,
    sampleStudentCount: 2410,
    averageReadinessIndex: 74.2,
    offlinePracticeRatio: 52.8,
    topPracticedSubjectAr: 'الكيمياء',
    averageHotsAccuracy: 66.8,
  },

  // Alexandria & North Coast
  {
    id: 'alexandria',
    nameAr: 'الإسكندرية',
    nameEn: 'Alexandria',
    zone: 'alex_coast',
    classification: 'urban',
    populationEstimateMillions: 5.5,
    sampleStudentCount: 2980,
    averageReadinessIndex: 77.8,
    offlinePracticeRatio: 42.1,
    topPracticedSubjectAr: 'اللغة الإنجليزية',
    averageHotsAccuracy: 70.6,
  },
  {
    id: 'beheira',
    nameAr: 'البحيرة',
    nameEn: 'Beheira',
    zone: 'alex_coast',
    classification: 'rural',
    populationEstimateMillions: 6.7,
    sampleStudentCount: 2650,
    averageReadinessIndex: 73.8,
    offlinePracticeRatio: 61.4,
    topPracticedSubjectAr: 'الأحياء',
    averageHotsAccuracy: 65.2,
  },
  {
    id: 'matrouh',
    nameAr: 'مطروح',
    nameEn: 'Matrouh',
    zone: 'alex_coast',
    classification: 'frontier',
    populationEstimateMillions: 0.6,
    sampleStudentCount: 420,
    averageReadinessIndex: 71.5,
    offlinePracticeRatio: 74.2,
    topPracticedSubjectAr: 'اللغة العربية',
    averageHotsAccuracy: 62.7,
  },

  // Nile Delta
  {
    id: 'dakahlia',
    nameAr: 'الدقهلية',
    nameEn: 'Dakahlia',
    zone: 'nile_delta',
    classification: 'rural',
    populationEstimateMillions: 7.0,
    sampleStudentCount: 3120,
    averageReadinessIndex: 76.5,
    offlinePracticeRatio: 54.3,
    topPracticedSubjectAr: 'الفيزياء',
    averageHotsAccuracy: 69.1,
  },
  {
    id: 'sharqia',
    nameAr: 'الشرقية',
    nameEn: 'Sharqia',
    zone: 'nile_delta',
    classification: 'rural',
    populationEstimateMillions: 7.8,
    sampleStudentCount: 3340,
    averageReadinessIndex: 75.1,
    offlinePracticeRatio: 56.7,
    topPracticedSubjectAr: 'الاستاتيكا',
    averageHotsAccuracy: 67.5,
  },
  {
    id: 'gharbia',
    nameAr: 'الغربية',
    nameEn: 'Gharbia',
    zone: 'nile_delta',
    classification: 'rural',
    populationEstimateMillions: 5.4,
    sampleStudentCount: 2510,
    averageReadinessIndex: 76.2,
    offlinePracticeRatio: 53.1,
    topPracticedSubjectAr: 'الكيمياء',
    averageHotsAccuracy: 68.9,
  },
  {
    id: 'monufia',
    nameAr: 'المنوفية',
    nameEn: 'Monufia',
    zone: 'nile_delta',
    classification: 'rural',
    populationEstimateMillions: 4.6,
    sampleStudentCount: 2280,
    averageReadinessIndex: 77.1,
    offlinePracticeRatio: 55.4,
    topPracticedSubjectAr: 'الرياضيات التطبيقية',
    averageHotsAccuracy: 70.2,
  },
  {
    id: 'kafr_el_sheikh',
    nameAr: 'كفر الشيخ',
    nameEn: 'Kafr El-Sheikh',
    zone: 'nile_delta',
    classification: 'rural',
    populationEstimateMillions: 3.7,
    sampleStudentCount: 1720,
    averageReadinessIndex: 74.8,
    offlinePracticeRatio: 63.8,
    topPracticedSubjectAr: 'الأحياء',
    averageHotsAccuracy: 66.4,
  },
  {
    id: 'damietta',
    nameAr: 'دمياط',
    nameEn: 'Damietta',
    zone: 'nile_delta',
    classification: 'urban',
    populationEstimateMillions: 1.6,
    sampleStudentCount: 1140,
    averageReadinessIndex: 76.7,
    offlinePracticeRatio: 46.2,
    topPracticedSubjectAr: 'الفيزياء',
    averageHotsAccuracy: 69.8,
  },

  // Canal Zone
  {
    id: 'port_said',
    nameAr: 'بورسعيد',
    nameEn: 'Port Said',
    zone: 'canal',
    classification: 'urban',
    populationEstimateMillions: 0.8,
    sampleStudentCount: 980,
    averageReadinessIndex: 78.1,
    offlinePracticeRatio: 36.5,
    topPracticedSubjectAr: 'اللغة الإنجليزية',
    averageHotsAccuracy: 71.5,
  },
  {
    id: 'ismailia',
    nameAr: 'الإسماعيلية',
    nameEn: 'Ismailia',
    zone: 'canal',
    classification: 'urban',
    populationEstimateMillions: 1.4,
    sampleStudentCount: 1250,
    averageReadinessIndex: 75.6,
    offlinePracticeRatio: 47.9,
    topPracticedSubjectAr: 'الكيمياء',
    averageHotsAccuracy: 67.9,
  },
  {
    id: 'suez',
    nameAr: 'السويس',
    nameEn: 'Suez',
    zone: 'canal',
    classification: 'urban',
    populationEstimateMillions: 0.8,
    sampleStudentCount: 890,
    averageReadinessIndex: 76.0,
    offlinePracticeRatio: 44.8,
    topPracticedSubjectAr: 'الفيزياء',
    averageHotsAccuracy: 68.6,
  },

  // Upper Egypt (الصعيد)
  {
    id: 'faiyum',
    nameAr: 'الفيوم',
    nameEn: 'Faiyum',
    zone: 'upper_egypt',
    classification: 'rural',
    populationEstimateMillions: 4.0,
    sampleStudentCount: 1860,
    averageReadinessIndex: 72.8,
    offlinePracticeRatio: 67.2,
    topPracticedSubjectAr: 'اللغة العربية',
    averageHotsAccuracy: 63.9,
  },
  {
    id: 'beni_suef',
    nameAr: 'بني سويف',
    nameEn: 'Beni Suef',
    zone: 'upper_egypt',
    classification: 'rural',
    populationEstimateMillions: 3.5,
    sampleStudentCount: 1690,
    averageReadinessIndex: 73.1,
    offlinePracticeRatio: 65.8,
    topPracticedSubjectAr: 'الكيمياء',
    averageHotsAccuracy: 64.7,
  },
  {
    id: 'minya',
    nameAr: 'المنيا',
    nameEn: 'Minya',
    zone: 'upper_egypt',
    classification: 'rural',
    populationEstimateMillions: 6.2,
    sampleStudentCount: 2790,
    averageReadinessIndex: 73.5,
    offlinePracticeRatio: 69.1,
    topPracticedSubjectAr: 'الفيزياء',
    averageHotsAccuracy: 65.1,
  },
  {
    id: 'asyut',
    nameAr: 'أسيوط',
    nameEn: 'Asyut',
    zone: 'upper_egypt',
    classification: 'rural',
    populationEstimateMillions: 4.9,
    sampleStudentCount: 2310,
    averageReadinessIndex: 73.9,
    offlinePracticeRatio: 70.5,
    topPracticedSubjectAr: 'الأحياء',
    averageHotsAccuracy: 65.8,
  },
  {
    id: 'sohag',
    nameAr: 'سوهاج',
    nameEn: 'Sohag',
    zone: 'upper_egypt',
    classification: 'rural',
    populationEstimateMillions: 5.6,
    sampleStudentCount: 2640,
    averageReadinessIndex: 74.3,
    offlinePracticeRatio: 72.4,
    topPracticedSubjectAr: 'الرياضيات البحتة',
    averageHotsAccuracy: 66.3,
  },
  {
    id: 'qena',
    nameAr: 'قنا',
    nameEn: 'Qena',
    zone: 'upper_egypt',
    classification: 'rural',
    populationEstimateMillions: 3.5,
    sampleStudentCount: 1780,
    averageReadinessIndex: 73.4,
    offlinePracticeRatio: 73.9,
    topPracticedSubjectAr: 'الجيولوجيا',
    averageHotsAccuracy: 64.9,
  },
  {
    id: 'luxor',
    nameAr: 'الأقصر',
    nameEn: 'Luxor',
    zone: 'upper_egypt',
    classification: 'urban',
    populationEstimateMillions: 1.4,
    sampleStudentCount: 960,
    averageReadinessIndex: 74.8,
    offlinePracticeRatio: 58.6,
    topPracticedSubjectAr: 'اللغة الإنجليزية',
    averageHotsAccuracy: 66.8,
  },
  {
    id: 'aswan',
    nameAr: 'أسوان',
    nameEn: 'Aswan',
    zone: 'upper_egypt',
    classification: 'rural',
    populationEstimateMillions: 1.6,
    sampleStudentCount: 1080,
    averageReadinessIndex: 73.6,
    offlinePracticeRatio: 71.3,
    topPracticedSubjectAr: 'الفيزياء',
    averageHotsAccuracy: 65.4,
  },

  // Frontier & Sinai
  {
    id: 'north_sinai',
    nameAr: 'شمال سيناء',
    nameEn: 'North Sinai',
    zone: 'frontier',
    classification: 'frontier',
    populationEstimateMillions: 0.5,
    sampleStudentCount: 380,
    averageReadinessIndex: 72.1,
    offlinePracticeRatio: 78.6,
    topPracticedSubjectAr: 'اللغة العربية',
    averageHotsAccuracy: 63.5,
  },
  {
    id: 'south_sinai',
    nameAr: 'جنوب سيناء',
    nameEn: 'South Sinai',
    zone: 'frontier',
    classification: 'frontier',
    populationEstimateMillions: 0.2,
    sampleStudentCount: 240,
    averageReadinessIndex: 73.0,
    offlinePracticeRatio: 72.1,
    topPracticedSubjectAr: 'اللغة الإنجليزية',
    averageHotsAccuracy: 64.8,
  },
  {
    id: 'red_sea',
    nameAr: 'البحر الأحمر',
    nameEn: 'Red Sea',
    zone: 'frontier',
    classification: 'frontier',
    populationEstimateMillions: 0.4,
    sampleStudentCount: 390,
    averageReadinessIndex: 74.5,
    offlinePracticeRatio: 64.7,
    topPracticedSubjectAr: 'الكيمياء',
    averageHotsAccuracy: 66.2,
  },
  {
    id: 'new_valley',
    nameAr: 'الوادي الجديد',
    nameEn: 'New Valley',
    zone: 'frontier',
    classification: 'frontier',
    populationEstimateMillions: 0.3,
    sampleStudentCount: 290,
    averageReadinessIndex: 72.8,
    offlinePracticeRatio: 81.3,
    topPracticedSubjectAr: 'الجيولوجيا',
    averageHotsAccuracy: 64.1,
  },
];
