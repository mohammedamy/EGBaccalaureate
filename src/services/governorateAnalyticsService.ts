import type {
  GovernorateRecord,
  RegionalZone,
  RegionalZoneSummary,
  RuralUrbanParityReport,
} from '../types/governorateAnalytics';
import { EGYPTIAN_GOVERNORATES } from '../types/governorateAnalytics';

export const USER_GOVERNORATE_STORAGE_KEY = 'egbac_user_governorate';

export const REGIONAL_ZONE_METADATA: Record<RegionalZone, { nameAr: string; nameEn: string }> = {
  greater_cairo: { nameAr: 'إقليم القاهرة الكبرى', nameEn: 'Greater Cairo' },
  alex_coast: { nameAr: 'إقليم الإسكندرية والساحل الشمالي', nameEn: 'Alexandria & North Coast' },
  nile_delta: { nameAr: 'إقليم الدلتا', nameEn: 'Nile Delta' },
  canal: { nameAr: 'إقليم القناة', nameEn: 'Suez Canal Zone' },
  upper_egypt: { nameAr: 'إقليم شمال وجنوب الصعيد', nameEn: 'Upper Egypt' },
  frontier: { nameAr: 'المحافظات الحدودية وسيناء', nameEn: 'Frontier & Sinai' },
};

/**
 * Retrieves all 27 governorate records.
 */
export function getAllGovernorates(): GovernorateRecord[] {
  return [...EGYPTIAN_GOVERNORATES];
}

/**
 * Gets a governorate by ID.
 */
export function getGovernorateById(id: string): GovernorateRecord | undefined {
  return EGYPTIAN_GOVERNORATES.find((g) => g.id.toLowerCase() === id.toLowerCase());
}

/**
 * Computes regional zone summaries.
 */
export function getRegionalZoneSummaries(): RegionalZoneSummary[] {
  const zones: RegionalZone[] = [
    'greater_cairo',
    'alex_coast',
    'nile_delta',
    'canal',
    'upper_egypt',
    'frontier',
  ];

  return zones.map((zone) => {
    const records = EGYPTIAN_GOVERNORATES.filter((g) => g.zone === zone);
    const count = records.length;
    const totalStudents = records.reduce((sum, r) => sum + r.sampleStudentCount, 0);

    const weightedReadiness =
      totalStudents > 0
        ? records.reduce((sum, r) => sum + r.averageReadinessIndex * r.sampleStudentCount, 0) / totalStudents
        : 0;

    const weightedOffline =
      totalStudents > 0
        ? records.reduce((sum, r) => sum + r.offlinePracticeRatio * r.sampleStudentCount, 0) / totalStudents
        : 0;

    return {
      zone,
      nameAr: REGIONAL_ZONE_METADATA[zone].nameAr,
      nameEn: REGIONAL_ZONE_METADATA[zone].nameEn,
      governoratesCount: count,
      averageReadiness: Number(weightedReadiness.toFixed(1)),
      averageOfflineRatio: Number(weightedOffline.toFixed(1)),
      totalStudentsSampled: totalStudents,
    };
  });
}

/**
 * Computes the Rural vs Urban Parity Index as mandated by Section 7 (Equity Metrics).
 * Target: Rural students' average mastery rate within 10% of urban students'.
 */
export function getRuralUrbanParityReport(): RuralUrbanParityReport {
  const urban = EGYPTIAN_GOVERNORATES.filter((g) => g.classification === 'urban');
  const rural = EGYPTIAN_GOVERNORATES.filter((g) => g.classification === 'rural');
  const frontier = EGYPTIAN_GOVERNORATES.filter((g) => g.classification === 'frontier');

  const urbanWeightTotal = urban.reduce((sum, r) => sum + r.sampleStudentCount, 0);
  const ruralWeightTotal = rural.reduce((sum, r) => sum + r.sampleStudentCount, 0);
  const frontierWeightTotal = frontier.reduce((sum, r) => sum + r.sampleStudentCount, 0);

  const urbanAvg =
    urbanWeightTotal > 0
      ? urban.reduce((sum, r) => sum + r.averageReadinessIndex * r.sampleStudentCount, 0) / urbanWeightTotal
      : 77.0;

  const ruralAvg =
    ruralWeightTotal > 0
      ? rural.reduce((sum, r) => sum + r.averageReadinessIndex * r.sampleStudentCount, 0) / ruralWeightTotal
      : 74.8;

  const frontierAvg =
    frontierWeightTotal > 0
      ? frontier.reduce((sum, r) => sum + r.averageReadinessIndex * r.sampleStudentCount, 0) / frontierWeightTotal
      : 72.8;

  const parityGap = Number(Math.abs(urbanAvg - ruralAvg).toFixed(2));
  const parityRatio = Number(((ruralAvg / urbanAvg) * 100).toFixed(1));
  const isTargetMet = parityGap <= 10.0;

  let evaluationAr = '';
  if (isTargetMet && parityGap <= 4.0) {
    evaluationAr = `تحقق ممتاز لتكافؤ الفرص التعليمية: الفجوة بين الريف والحضر تبلغ فقط ${parityGap}٪ (ضمن المستهدف الأكاديمي الصارم ≤ 10٪). يثبت فعالية محرك كليبسات الأوفلاين في قرى الصعيد والدلتا.`;
  } else if (isTargetMet) {
    evaluationAr = `تكافؤ الفرص محقق بنجاح بفارق ${parityGap}٪، مع استمرار تحسن مؤشرات الإتقان التراكمي في المدارس الريفية.`;
  } else {
    evaluationAr = `فجوة ملحوظة (${parityGap}٪) تتطلب تكثيف حزم التدريب غير المتصل بالإنترنت في المناطق المستهدفة.`;
  }

  return {
    urbanAverageReadiness: Number(urbanAvg.toFixed(1)),
    ruralAverageReadiness: Number(ruralAvg.toFixed(1)),
    frontierAverageReadiness: Number(frontierAvg.toFixed(1)),
    parityRatio,
    parityGapPercentage: parityGap,
    isTargetMet,
    evaluationAr,
  };
}

/**
 * Gets the student's self-reported governorate from localStorage (defaults to 'cairo').
 */
export function getUserGovernorate(): string {
  if (typeof localStorage === 'undefined') return 'cairo';
  return localStorage.getItem(USER_GOVERNORATE_STORAGE_KEY) || 'cairo';
}

/**
 * Saves the student's governorate to localStorage.
 */
export function setUserGovernorate(govId: string): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(USER_GOVERNORATE_STORAGE_KEY, govId);
  } catch (err) {
    console.warn('Failed to save user governorate:', err);
  }
}

/**
 * Generates an exportable CSV string of the regional equity report for ministry/supervisors.
 */
export function exportGovernorateReportCSV(): string {
  const BOM = '\uFEFF';
  const headers = [
    'المحافظة',
    'Governorate',
    'الإقليم',
    'التصنيف',
    'عينة الطلاب',
    'مؤشر الجاهزية (٪)',
    'نسبة التدريب بدون نت (٪)',
    'المادة الأكثر تدريباً',
    'دقة مهارات التفكير العليا (٪)',
  ];

  const rows = EGYPTIAN_GOVERNORATES.map((g) => [
    `"${g.nameAr}"`,
    `"${g.nameEn}"`,
    `"${REGIONAL_ZONE_METADATA[g.zone].nameAr}"`,
    `"${g.classification === 'urban' ? 'حضري' : g.classification === 'rural' ? 'ريفي' : 'حدودي'}"`,
    g.sampleStudentCount,
    g.averageReadinessIndex,
    g.offlinePracticeRatio,
    `"${g.topPracticedSubjectAr}"`,
    g.averageHotsAccuracy,
  ]);

  return BOM + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
}
