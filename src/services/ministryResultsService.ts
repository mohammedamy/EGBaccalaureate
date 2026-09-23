import type {
  AcademicTrack,
  MinistryPortalLink,
  OfficialResultsRecord,
  OfficialSubjectScore,
} from '../types/ministryResults';
import { OFFICIAL_TRACK_SUBJECTS } from '../types/ministryResults';

export const OFFICIAL_RESULTS_STORAGE_KEY = 'egbac_official_ministry_scores';

export const OFFICIAL_PORTALS: MinistryPortalLink[] = [
  {
    id: 'emis_gov',
    nameAr: 'بوابة مركز معلومات وزارة التربية والتعليم الرسمية',
    nameEn: 'Ministry of Education Official Portal (EMIS)',
    baseUrl: 'https://g12.emis.gov.eg/',
    buildQueryUrl: (seatNumber?: string) => {
      const trimmed = seatNumber ? seatNumber.trim() : '';
      return trimmed ? `https://g12.emis.gov.eg/?seat=${encodeURIComponent(trimmed)}` : 'https://g12.emis.gov.eg/';
    },
    reliabilityRank: 1,
    descriptionAr: 'البوابة الحكومية الرسمية لإعلان واعتماد نتائج الثانوية العامة فور اعتماد الوزير.',
  },
  {
    id: 'youm7',
    nameAr: 'بوابة اليوم السابع لنتائج الثانوية العامة',
    nameEn: 'Youm7 Secondary Certificate Results Portal',
    baseUrl: 'https://nateega.youm7.com/',
    buildQueryUrl: (seatNumber?: string) => {
      const trimmed = seatNumber ? seatNumber.trim() : '';
      return trimmed ? `https://nateega.youm7.com/?seat=${encodeURIComponent(trimmed)}` : 'https://nateega.youm7.com/';
    },
    reliabilityRank: 2,
    descriptionAr: 'أسرع سيرفر إعلامي مصري معتمد لتحميل درجات الطلاب ورقم الجلوس.',
  },
  {
    id: 'elwatan',
    nameAr: 'بوابة جريدة الوطن لنتائج الشهادة الثانوية',
    nameEn: 'El-Watan News Results Portal',
    baseUrl: 'https://homeresult.elwatannews.com/',
    buildQueryUrl: (seatNumber?: string) => {
      const trimmed = seatNumber ? seatNumber.trim() : '';
      return trimmed ? `https://homeresult.elwatannews.com/?s=${encodeURIComponent(trimmed)}` : 'https://homeresult.elwatannews.com/';
    },
    reliabilityRank: 3,
    descriptionAr: 'بوابة بديلة معتمدة لعرض تفاصيل الدرجات والمجموع الكلي.',
  },
  {
    id: 'dostor',
    nameAr: 'بوابة الدستور الرسمية لنتائج الامتحانات',
    nameEn: 'Al-Dostor National Results Server',
    baseUrl: 'https://nateega.dostor.org/',
    buildQueryUrl: (seatNumber?: string) => {
      const trimmed = seatNumber ? seatNumber.trim() : '';
      return trimmed ? `https://nateega.dostor.org/?id=${encodeURIComponent(trimmed)}` : 'https://nateega.dostor.org/';
    },
    reliabilityRank: 4,
    descriptionAr: 'سيرفر خفيف سريع الاستجابة لتفادي ضغط الشبكة وقت إعلان النتيجة.',
  },
];

/**
 * Initializes a blank subject score set for a specific track.
 */
export function getInitialSubjectScoresForTrack(track: AcademicTrack): OfficialSubjectScore[] {
  const definitions = OFFICIAL_TRACK_SUBJECTS[track] || OFFICIAL_TRACK_SUBJECTS.scientific_math;
  return definitions.map((sub) => ({
    subjectId: sub.id,
    nameAr: sub.nameAr,
    nameEn: sub.nameEn,
    maxMarks: sub.maxMarks,
    passMarks: sub.passMarks,
    studentMarks: 0,
  }));
}

/**
 * Calculates the total marks, max marks, and percentage for a list of subjects.
 */
export function calculateResultsSummary(subjects: OfficialSubjectScore[]): {
  totalMarks: number;
  maxTotalMarks: number;
  percentage: number;
} {
  const totalMarks = subjects.reduce((sum, s) => sum + Math.max(0, s.studentMarks || 0), 0);
  const maxTotalMarks = subjects.reduce((sum, s) => sum + s.maxMarks, 0);
  const percentage = maxTotalMarks > 0 ? Number(((totalMarks / maxTotalMarks) * 100).toFixed(2)) : 0;

  return { totalMarks, maxTotalMarks, percentage };
}

/**
 * Loads the saved official results from localStorage.
 */
export function loadSavedOfficialResults(): OfficialResultsRecord | null {
  try {
    const raw = localStorage.getItem(OFFICIAL_RESULTS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as OfficialResultsRecord;
    if (parsed && Array.isArray(parsed.subjects) && parsed.subjects.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.warn('[MinistryResultsService] Failed to load official results:', err);
  }
  return null;
}

/**
 * Saves or updates official results in localStorage.
 */
export function saveOfficialResults(
  track: AcademicTrack,
  subjects: OfficialSubjectScore[],
  seatNumber?: string,
  governorate?: string
): OfficialResultsRecord {
  const { totalMarks, maxTotalMarks, percentage } = calculateResultsSummary(subjects);

  const record: OfficialResultsRecord = {
    seatNumber: seatNumber ? seatNumber.trim() : undefined,
    governorate: governorate ? governorate.trim() : undefined,
    academicTrack: track,
    subjects,
    totalMarks,
    maxTotalMarks,
    percentage,
    enteredTimestamp: Date.now(),
    isCalibrated: true,
  };

  try {
    localStorage.setItem(OFFICIAL_RESULTS_STORAGE_KEY, JSON.stringify(record));
  } catch (err) {
    console.error('[MinistryResultsService] Failed to save official results:', err);
  }

  return record;
}

/**
 * Clears saved official results from localStorage.
 */
export function clearSavedOfficialResults(): void {
  try {
    localStorage.removeItem(OFFICIAL_RESULTS_STORAGE_KEY);
  } catch (err) {
    console.error('[MinistryResultsService] Failed to clear official results:', err);
  }
}

/**
 * Computes prediction calibration metrics given predicted percentage vs actual percentage.
 */
export function computeScoreCalibration(predictedPercentage: number, actualPercentage: number): {
  calibrationFactor: number;
  residualError: number;
  direction: 'overestimated' | 'underestimated' | 'exact';
  insightAr: string;
} {
  const safePredicted = Math.max(1, predictedPercentage);
  const calibrationFactor = Number((actualPercentage / safePredicted).toFixed(3));
  const residualError = Number((actualPercentage - predictedPercentage).toFixed(2));

  let direction: 'overestimated' | 'underestimated' | 'exact' = 'exact';
  let insightAr = 'تطابق ممتاز بين تقدير المنظومة والدرجة الرسمية المحققة.';

  if (residualError > 1.5) {
    direction = 'underestimated';
    insightAr = `أداؤك الفعلي أعلى من التقدير الأولي بفارق +${residualError}٪ (عامل تصحيح إيجابي ${calibrationFactor}x). تم ضبط التنبؤات القادمة تلقائياً.`;
  } else if (residualError < -1.5) {
    direction = 'overestimated';
    insightAr = `أداؤك الفعلي أقل من التقدير الأولي بفارق ${residualError}٪. تم تطبيق معامل أمان تحوطي (${calibrationFactor}x) لمراعاة ظروف ضغط قاعة الامتحان الرسمية.`;
  }

  return { calibrationFactor, residualError, direction, insightAr };
}
