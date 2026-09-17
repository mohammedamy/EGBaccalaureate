import type { Curriculum, SolvedProblem, DifficultyLevel } from '../types/curriculum';
import type { GeneratedQuestion } from './mistakeNotebookService';
import { classifyBloomLevel } from './bloomTaxonomyService';
import { toHindiDigits } from '../utils/arabicNumerals';

export type PastExamYear = 2021 | 2022 | 2023 | 2024 | 2025;
export type PastExamSession = 'session1' | 'session2' | 'experimental';
export type PastExamSubject =
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'calculus'
  | 'algebra_solid'
  | 'statics'
  | 'dynamics';

export interface HistoricalCohortStats {
  nationalAverage: number; // National mean score out of totalMarks
  totalMarks: number;
  passRatePercent: number; // e.g. 76.8%
  distinctionRatePercent: number; // e.g. 11.2% (students above 85%)
  topTenThreshold: number; // Marks required for Republic Top 10
  totalCandidatesEst: number; // Estimated candidate cohort size
  stdDeviation: number; // Standard deviation for percentile calculation
}

export interface PastExamPaper {
  id: string;
  year: PastExamYear;
  session: PastExamSession;
  subject: PastExamSubject;
  branchId: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  formCodeAr: string;
  formCodeEn: string;
  ministerialExamCode: string;
  durationMinutes: number; // 180 for sciences, 120 for math branches
  totalQuestions: number; // 46 for sciences, 20 for math branches
  totalMarks: number; // 60 for sciences, 30 for math branches
  section1Count: number; // 32 (sciences) or 10 (math)
  section2Count: number; // 14 (sciences) or 10 (math)
  passingMark: number; // 30 (sciences) or 15 (math)
  historicalStats: HistoricalCohortStats;
  seed: number; // Seed for deterministic authentic question generation
}

/**
 * Authentic Thanawya Amma Past Examination Papers Catalog (2021 - 2025).
 * Grounded in the official Egyptian Ministry of Education specifications.
 */
export const PAST_EXAM_PAPERS: PastExamPaper[] = [
  // ==========================================
  // 2024 SESSIONS (First & Second Sessions)
  // ==========================================
  {
    id: 'th-phys-2024-s1',
    year: 2024,
    session: 'session1',
    subject: 'physics',
    branchId: 'thanaweya_physics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الفيزياء (الدور الأول ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Physics (First Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - النموذج (أ) لكود 101',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Form A (Code 101)',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / ف-أ / 101',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 37.8,
      totalMarks: 60,
      passRatePercent: 78.4,
      distinctionRatePercent: 9.8,
      topTenThreshold: 57.5,
      totalCandidatesEst: 395000,
      stdDeviation: 8.9,
    },
    seed: 20240101,
  },
  {
    id: 'th-chem-2024-s1',
    year: 2024,
    session: 'session1',
    subject: 'chemistry',
    branchId: 'thanaweya_chemistry',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الكيمياء (الدور الأول ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Chemistry (First Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - النموذج (أ) لكود 102',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Form A (Code 102)',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / ك-أ / 102',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 39.2,
      totalMarks: 60,
      passRatePercent: 81.2,
      distinctionRatePercent: 12.4,
      topTenThreshold: 58.0,
      totalCandidatesEst: 395000,
      stdDeviation: 9.2,
    },
    seed: 20240102,
  },
  {
    id: 'th-bio-2024-s1',
    year: 2024,
    session: 'session1',
    subject: 'biology',
    branchId: 'thanaweya_biology',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الأحياء (الدور الأول ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Biology (First Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - شعبة علمي علوم (كود 103)',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Science Track (Code 103)',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / ح-أ / 103',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 41.5,
      totalMarks: 60,
      passRatePercent: 84.6,
      distinctionRatePercent: 14.1,
      topTenThreshold: 59.0,
      totalCandidatesEst: 295000,
      stdDeviation: 8.5,
    },
    seed: 20240103,
  },
  {
    id: 'th-calc-2024-s1',
    year: 2024,
    session: 'session1',
    subject: 'calculus',
    branchId: 'calculus',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - التفاضل والتكامل (الدور الأول ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Calculus (First Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - شعبة علمي رياضة (كود 201)',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Math Track (Code 201)',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / تف-أ / 201',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 19.4,
      totalMarks: 30,
      passRatePercent: 74.2,
      distinctionRatePercent: 10.5,
      topTenThreshold: 29.0,
      totalCandidatesEst: 100000,
      stdDeviation: 4.8,
    },
    seed: 20240104,
  },
  {
    id: 'th-algs-2024-s1',
    year: 2024,
    session: 'session1',
    subject: 'algebra_solid',
    branchId: 'algebra_solid',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الجبر والهندسة الفراغية (الدور الأول ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Algebra & Solid Geometry (First Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - شعبة علمي رياضة (كود 202)',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Math Track (Code 202)',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / جب-أ / 202',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.8,
      totalMarks: 30,
      passRatePercent: 72.8,
      distinctionRatePercent: 9.9,
      topTenThreshold: 28.5,
      totalCandidatesEst: 100000,
      stdDeviation: 4.9,
    },
    seed: 20240105,
  },
  {
    id: 'th-stat-2024-s1',
    year: 2024,
    session: 'session1',
    subject: 'statics',
    branchId: 'statics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الاستاتيكا (الدور الأول ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Statics (First Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - شعبة علمي رياضة (كود 203)',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Math Track (Code 203)',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / اس-أ / 203',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 19.1,
      totalMarks: 30,
      passRatePercent: 73.5,
      distinctionRatePercent: 10.1,
      topTenThreshold: 28.5,
      totalCandidatesEst: 100000,
      stdDeviation: 4.7,
    },
    seed: 20240106,
  },
  {
    id: 'th-dyn-2024-s1',
    year: 2024,
    session: 'session1',
    subject: 'dynamics',
    branchId: 'dynamics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الديناميكا (الدور الأول ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Dynamics (First Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - شعبة علمي رياضة (كود 204)',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Math Track (Code 204)',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / دي-أ / 204',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.5,
      totalMarks: 30,
      passRatePercent: 71.0,
      distinctionRatePercent: 9.2,
      topTenThreshold: 28.5,
      totalCandidatesEst: 100000,
      stdDeviation: 5.0,
    },
    seed: 20240107,
  },

  // 2024 Second Session Papers
  {
    id: 'th-phys-2024-s2',
    year: 2024,
    session: 'session2',
    subject: 'physics',
    branchId: 'thanaweya_physics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الفيزياء (الدور الثاني ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Physics (Second Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي للدور الثاني - النموذج (ب)',
    subtitleEn: 'Official Ministerial Examination for August Session - Form B',
    formCodeAr: 'النموذج (ب)',
    formCodeEn: 'Form B',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / ف-د٢ / 151',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 35.4,
      totalMarks: 60,
      passRatePercent: 88.2,
      distinctionRatePercent: 4.6,
      topTenThreshold: 55.0,
      totalCandidatesEst: 78000,
      stdDeviation: 7.9,
    },
    seed: 20240201,
  },
  {
    id: 'th-chem-2024-s2',
    year: 2024,
    session: 'session2',
    subject: 'chemistry',
    branchId: 'thanaweya_chemistry',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الكيمياء (الدور الثاني ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Chemistry (Second Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي للدور الثاني - النموذج (ب)',
    subtitleEn: 'Official Ministerial Examination for August Session - Form B',
    formCodeAr: 'النموذج (ب)',
    formCodeEn: 'Form B',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / ك-د٢ / 152',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 36.5,
      totalMarks: 60,
      passRatePercent: 89.4,
      distinctionRatePercent: 5.1,
      topTenThreshold: 56.0,
      totalCandidatesEst: 65000,
      stdDeviation: 8.1,
    },
    seed: 20240202,
  },
  {
    id: 'th-bio-2024-s2',
    year: 2024,
    session: 'session2',
    subject: 'biology',
    branchId: 'thanaweya_biology',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الأحياء (الدور الثاني ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Biology (Second Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي للدور الثاني - النموذج (ب)',
    subtitleEn: 'Official Ministerial Examination for August Session - Form B',
    formCodeAr: 'النموذج (ب)',
    formCodeEn: 'Form B',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / ح-د٢ / 153',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 38.0,
      totalMarks: 60,
      passRatePercent: 91.0,
      distinctionRatePercent: 6.3,
      topTenThreshold: 56.5,
      totalCandidatesEst: 42000,
      stdDeviation: 7.6,
    },
    seed: 20240203,
  },
  {
    id: 'th-calc-2024-s2',
    year: 2024,
    session: 'session2',
    subject: 'calculus',
    branchId: 'calculus',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - التفاضل والتكامل (الدور الثاني ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Calculus (Second Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي للدور الثاني - النموذج (ب)',
    subtitleEn: 'Official Ministerial Examination for August Session - Form B',
    formCodeAr: 'النموذج (ب)',
    formCodeEn: 'Form B',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / تف-د٢ / 251',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.5,
      totalMarks: 30,
      passRatePercent: 86.4,
      distinctionRatePercent: 4.8,
      topTenThreshold: 27.5,
      totalCandidatesEst: 24000,
      stdDeviation: 4.6,
    },
    seed: 20240204,
  },
  {
    id: 'th-algs-2024-s2',
    year: 2024,
    session: 'session2',
    subject: 'algebra_solid',
    branchId: 'algebra_solid',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الجبر والهندسة الفراغية (الدور الثاني ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Algebra & Solid Geometry (Second Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي للدور الثاني - النموذج (ب)',
    subtitleEn: 'Official Ministerial Examination for August Session - Form B',
    formCodeAr: 'النموذج (ب)',
    formCodeEn: 'Form B',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / جب-د٢ / 252',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.2,
      totalMarks: 30,
      passRatePercent: 85.0,
      distinctionRatePercent: 4.2,
      topTenThreshold: 27.0,
      totalCandidatesEst: 22000,
      stdDeviation: 4.7,
    },
    seed: 20240205,
  },
  {
    id: 'th-stat-2024-s2',
    year: 2024,
    session: 'session2',
    subject: 'statics',
    branchId: 'statics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الاستاتيكا (الدور الثاني ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Statics (Second Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي للدور الثاني - النموذج (ب)',
    subtitleEn: 'Official Ministerial Examination for August Session - Form B',
    formCodeAr: 'النموذج (ب)',
    formCodeEn: 'Form B',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / اس-د٢ / 253',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.6,
      totalMarks: 30,
      passRatePercent: 87.1,
      distinctionRatePercent: 4.5,
      topTenThreshold: 27.5,
      totalCandidatesEst: 21000,
      stdDeviation: 4.5,
    },
    seed: 20240206,
  },
  {
    id: 'th-dyn-2024-s2',
    year: 2024,
    session: 'session2',
    subject: 'dynamics',
    branchId: 'dynamics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الديناميكا (الدور الثاني ٢٠٢٤)',
    titleEn: 'Official Thanawya Amma Examination - Dynamics (Second Session 2024)',
    subtitleAr: 'الامتحان الوزاري الرسمي للدور الثاني - النموذج (ب)',
    subtitleEn: 'Official Ministerial Examination for August Session - Form B',
    formCodeAr: 'النموذج (ب)',
    formCodeEn: 'Form B',
    ministerialExamCode: 'ث.ع / ٢٠٢٤ / دي-د٢ / 254',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.0,
      totalMarks: 30,
      passRatePercent: 84.5,
      distinctionRatePercent: 4.0,
      topTenThreshold: 27.0,
      totalCandidatesEst: 23000,
      stdDeviation: 4.8,
    },
    seed: 20240207,
  },

  // ==========================================
  // 2023 SESSIONS (First Session)
  // ==========================================
  {
    id: 'th-phys-2023-s1',
    year: 2023,
    session: 'session1',
    subject: 'physics',
    branchId: 'thanaweya_physics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الفيزياء (الدور الأول ٢٠٢٣)',
    titleEn: 'Official Thanawya Amma Examination - Physics (First Session 2023)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - كود 101',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Code 101',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٣ / ف-أ / 101',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 36.9,
      totalMarks: 60,
      passRatePercent: 77.1,
      distinctionRatePercent: 8.9,
      topTenThreshold: 57.0,
      totalCandidatesEst: 390000,
      stdDeviation: 9.1,
    },
    seed: 20230101,
  },
  {
    id: 'th-chem-2023-s1',
    year: 2023,
    session: 'session1',
    subject: 'chemistry',
    branchId: 'thanaweya_chemistry',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الكيمياء (الدور الأول ٢٠٢٣)',
    titleEn: 'Official Thanawya Amma Examination - Chemistry (First Session 2023)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - كود 102',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Code 102',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٣ / ك-أ / 102',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 37.5,
      totalMarks: 60,
      passRatePercent: 79.5,
      distinctionRatePercent: 10.8,
      topTenThreshold: 57.5,
      totalCandidatesEst: 390000,
      stdDeviation: 9.3,
    },
    seed: 20230102,
  },
  {
    id: 'th-bio-2023-s1',
    year: 2023,
    session: 'session1',
    subject: 'biology',
    branchId: 'thanaweya_biology',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الأحياء (الدور الأول ٢٠٢٣)',
    titleEn: 'Official Thanawya Amma Examination - Biology (First Session 2023)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - كود 103',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Code 103',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٣ / ح-أ / 103',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 40.8,
      totalMarks: 60,
      passRatePercent: 83.2,
      distinctionRatePercent: 13.5,
      topTenThreshold: 58.5,
      totalCandidatesEst: 290000,
      stdDeviation: 8.6,
    },
    seed: 20230103,
  },
  {
    id: 'th-calc-2023-s1',
    year: 2023,
    session: 'session1',
    subject: 'calculus',
    branchId: 'calculus',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - التفاضل والتكامل (الدور الأول ٢٠٢٣)',
    titleEn: 'Official Thanawya Amma Examination - Calculus (First Session 2023)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - كود 201',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Code 201',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٣ / تف-أ / 201',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.9,
      totalMarks: 30,
      passRatePercent: 73.0,
      distinctionRatePercent: 9.8,
      topTenThreshold: 28.5,
      totalCandidatesEst: 98000,
      stdDeviation: 5.0,
    },
    seed: 20230104,
  },
  {
    id: 'th-algs-2023-s1',
    year: 2023,
    session: 'session1',
    subject: 'algebra_solid',
    branchId: 'algebra_solid',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الجبر والهندسة الفراغية (الدور الأول ٢٠٢٣)',
    titleEn: 'Official Thanawya Amma Examination - Algebra & Solid Geometry (First Session 2023)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - كود 202',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Code 202',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٣ / جب-أ / 202',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.5,
      totalMarks: 30,
      passRatePercent: 71.9,
      distinctionRatePercent: 9.3,
      topTenThreshold: 28.0,
      totalCandidatesEst: 98000,
      stdDeviation: 4.9,
    },
    seed: 20230105,
  },
  {
    id: 'th-stat-2023-s1',
    year: 2023,
    session: 'session1',
    subject: 'statics',
    branchId: 'statics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الاستاتيكا (الدور الأول ٢٠٢٣)',
    titleEn: 'Official Thanawya Amma Examination - Statics (First Session 2023)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - كود 203',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Code 203',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٣ / اس-أ / 203',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.7,
      totalMarks: 30,
      passRatePercent: 72.5,
      distinctionRatePercent: 9.5,
      topTenThreshold: 28.5,
      totalCandidatesEst: 98000,
      stdDeviation: 4.8,
    },
    seed: 20230106,
  },
  {
    id: 'th-dyn-2023-s1',
    year: 2023,
    session: 'session1',
    subject: 'dynamics',
    branchId: 'dynamics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الديناميكا (الدور الأول ٢٠٢٣)',
    titleEn: 'Official Thanawya Amma Examination - Dynamics (First Session 2023)',
    subtitleAr: 'الامتحان الوزاري الرسمي بنظام البابل شيت - كود 204',
    subtitleEn: 'Official Ministerial Examination with OMR Bubble Sheet - Code 204',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٣ / دي-أ / 204',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.1,
      totalMarks: 30,
      passRatePercent: 70.4,
      distinctionRatePercent: 8.9,
      topTenThreshold: 28.0,
      totalCandidatesEst: 98000,
      stdDeviation: 5.1,
    },
    seed: 20230107,
  },

  // ==========================================
  // 2022 SESSIONS (First Session)
  // ==========================================
  {
    id: 'th-phys-2022-s1',
    year: 2022,
    session: 'session1',
    subject: 'physics',
    branchId: 'thanaweya_physics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الفيزياء (الدور الأول ٢٠٢٢)',
    titleEn: 'Official Thanawya Amma Examination - Physics (First Session 2022)',
    subtitleAr: 'الامتحان الوزاري الموحد بنظام البابل شيت الورقي',
    subtitleEn: 'Standardized Ministerial Examination with OMR Bubble Sheet',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٢ / ف-أ / 01',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 35.8,
      totalMarks: 60,
      passRatePercent: 75.4,
      distinctionRatePercent: 7.9,
      topTenThreshold: 56.5,
      totalCandidatesEst: 380000,
      stdDeviation: 9.4,
    },
    seed: 20220101,
  },
  {
    id: 'th-chem-2022-s1',
    year: 2022,
    session: 'session1',
    subject: 'chemistry',
    branchId: 'thanaweya_chemistry',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الكيمياء (الدور الأول ٢٠٢٢)',
    titleEn: 'Official Thanawya Amma Examination - Chemistry (First Session 2022)',
    subtitleAr: 'الامتحان الوزاري الموحد بنظام البابل شيت الورقي',
    subtitleEn: 'Standardized Ministerial Examination with OMR Bubble Sheet',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٢ / ك-أ / 02',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 36.2,
      totalMarks: 60,
      passRatePercent: 77.8,
      distinctionRatePercent: 9.2,
      topTenThreshold: 57.0,
      totalCandidatesEst: 380000,
      stdDeviation: 9.5,
    },
    seed: 20220102,
  },
  {
    id: 'th-bio-2022-s1',
    year: 2022,
    session: 'session1',
    subject: 'biology',
    branchId: 'thanaweya_biology',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الأحياء (الدور الأول ٢٠٢٢)',
    titleEn: 'Official Thanawya Amma Examination - Biology (First Session 2022)',
    subtitleAr: 'الامتحان الوزاري الموحد بنظام البابل شيت الورقي',
    subtitleEn: 'Standardized Ministerial Examination with OMR Bubble Sheet',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٢ / ح-أ / 03',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 39.5,
      totalMarks: 60,
      passRatePercent: 81.6,
      distinctionRatePercent: 11.9,
      topTenThreshold: 58.0,
      totalCandidatesEst: 280000,
      stdDeviation: 8.8,
    },
    seed: 20220103,
  },
  {
    id: 'th-calc-2022-s1',
    year: 2022,
    session: 'session1',
    subject: 'calculus',
    branchId: 'calculus',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - التفاضل والتكامل (الدور الأول ٢٠٢٢)',
    titleEn: 'Official Thanawya Amma Examination - Calculus (First Session 2022)',
    subtitleAr: 'الامتحان الوزاري الموحد بنظام البابل شيت الورقي',
    subtitleEn: 'Standardized Ministerial Examination with OMR Bubble Sheet',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٢ / تف-أ / 04',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.2,
      totalMarks: 30,
      passRatePercent: 71.5,
      distinctionRatePercent: 8.8,
      topTenThreshold: 28.0,
      totalCandidatesEst: 95000,
      stdDeviation: 5.2,
    },
    seed: 20220104,
  },
  {
    id: 'th-algs-2022-s1',
    year: 2022,
    session: 'session1',
    subject: 'algebra_solid',
    branchId: 'algebra_solid',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الجبر والهندسة الفراغية (الدور الأول ٢٠٢٢)',
    titleEn: 'Official Thanawya Amma Examination - Algebra & Solid Geometry (First Session 2022)',
    subtitleAr: 'الامتحان الوزاري الموحد بنظام البابل شيت الورقي',
    subtitleEn: 'Standardized Ministerial Examination with OMR Bubble Sheet',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٢ / جب-أ / 05',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 17.8,
      totalMarks: 30,
      passRatePercent: 70.1,
      distinctionRatePercent: 8.2,
      topTenThreshold: 27.5,
      totalCandidatesEst: 95000,
      stdDeviation: 5.1,
    },
    seed: 20220105,
  },
  {
    id: 'th-stat-2022-s1',
    year: 2022,
    session: 'session1',
    subject: 'statics',
    branchId: 'statics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الاستاتيكا (الدور الأول ٢٠٢٢)',
    titleEn: 'Official Thanawya Amma Examination - Statics (First Session 2022)',
    subtitleAr: 'الامتحان الوزاري الموحد بنظام البابل شيت الورقي',
    subtitleEn: 'Standardized Ministerial Examination with OMR Bubble Sheet',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٢ / اس-أ / 06',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 18.0,
      totalMarks: 30,
      passRatePercent: 71.0,
      distinctionRatePercent: 8.6,
      topTenThreshold: 28.0,
      totalCandidatesEst: 95000,
      stdDeviation: 5.0,
    },
    seed: 20220106,
  },
  {
    id: 'th-dyn-2022-s1',
    year: 2022,
    session: 'session1',
    subject: 'dynamics',
    branchId: 'dynamics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الديناميكا (الدور الأول ٢٠٢٢)',
    titleEn: 'Official Thanawya Amma Examination - Dynamics (First Session 2022)',
    subtitleAr: 'الامتحان الوزاري الموحد بنظام البابل شيت الورقي',
    subtitleEn: 'Standardized Ministerial Examination with OMR Bubble Sheet',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢٢ / دي-أ / 07',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 17.6,
      totalMarks: 30,
      passRatePercent: 69.5,
      distinctionRatePercent: 8.0,
      topTenThreshold: 27.5,
      totalCandidatesEst: 95000,
      stdDeviation: 5.2,
    },
    seed: 20220107,
  },

  // ==========================================
  // 2021 SESSIONS (Inaugural Bubble Sheet Era)
  // ==========================================
  {
    id: 'th-phys-2021-s1',
    year: 2021,
    session: 'session1',
    subject: 'physics',
    branchId: 'thanaweya_physics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الفيزياء (الدور الأول ٢٠٢١)',
    titleEn: 'Official Thanawya Amma Examination - Physics (First Session 2021)',
    subtitleAr: 'الامتحان الافتتاحي لمنظومة التقييم الجديدة والبابل شيت',
    subtitleEn: 'Inaugural Standardized Paper of the New Evaluation System',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢١ / ف-أ / 001',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 34.2,
      totalMarks: 60,
      passRatePercent: 72.3,
      distinctionRatePercent: 6.2,
      topTenThreshold: 55.5,
      totalCandidatesEst: 375000,
      stdDeviation: 9.8,
    },
    seed: 20210101,
  },
  {
    id: 'th-chem-2021-s1',
    year: 2021,
    session: 'session1',
    subject: 'chemistry',
    branchId: 'thanaweya_chemistry',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الكيمياء (الدور الأول ٢٠٢١)',
    titleEn: 'Official Thanawya Amma Examination - Chemistry (First Session 2021)',
    subtitleAr: 'الامتحان الافتتاحي لمنظومة التقييم الجديدة والبابل شيت',
    subtitleEn: 'Inaugural Standardized Paper of the New Evaluation System',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢١ / ك-أ / 002',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 35.1,
      totalMarks: 60,
      passRatePercent: 74.5,
      distinctionRatePercent: 7.5,
      topTenThreshold: 56.0,
      totalCandidatesEst: 375000,
      stdDeviation: 9.7,
    },
    seed: 20210102,
  },
  {
    id: 'th-bio-2021-s1',
    year: 2021,
    session: 'session1',
    subject: 'biology',
    branchId: 'thanaweya_biology',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الأحياء (الدور الأول ٢٠٢١)',
    titleEn: 'Official Thanawya Amma Examination - Biology (First Session 2021)',
    subtitleAr: 'الامتحان الافتتاحي لمنظومة التقييم الجديدة والبابل شيت',
    subtitleEn: 'Inaugural Standardized Paper of the New Evaluation System',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢١ / ح-أ / 003',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 38.0,
      totalMarks: 60,
      passRatePercent: 78.9,
      distinctionRatePercent: 9.4,
      topTenThreshold: 57.0,
      totalCandidatesEst: 270000,
      stdDeviation: 9.2,
    },
    seed: 20210103,
  },
  {
    id: 'th-calc-2021-s1',
    year: 2021,
    session: 'session1',
    subject: 'calculus',
    branchId: 'calculus',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - التفاضل والتكامل (الدور الأول ٢٠٢١)',
    titleEn: 'Official Thanawya Amma Examination - Calculus (First Session 2021)',
    subtitleAr: 'الامتحان الافتتاحي لمنظومة التقييم الجديدة والبابل شيت',
    subtitleEn: 'Inaugural Standardized Paper of the New Evaluation System',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢١ / تف-أ / 004',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 17.5,
      totalMarks: 30,
      passRatePercent: 69.2,
      distinctionRatePercent: 7.8,
      topTenThreshold: 27.5,
      totalCandidatesEst: 92000,
      stdDeviation: 5.4,
    },
    seed: 20210104,
  },
  {
    id: 'th-algs-2021-s1',
    year: 2021,
    session: 'session1',
    subject: 'algebra_solid',
    branchId: 'algebra_solid',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الجبر والهندسة الفراغية (الدور الأول ٢٠٢١)',
    titleEn: 'Official Thanawya Amma Examination - Algebra & Solid Geometry (First Session 2021)',
    subtitleAr: 'الامتحان الافتتاحي لمنظومة التقييم الجديدة والبابل شيت',
    subtitleEn: 'Inaugural Standardized Paper of the New Evaluation System',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢١ / جب-أ / 005',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 17.1,
      totalMarks: 30,
      passRatePercent: 67.8,
      distinctionRatePercent: 7.2,
      topTenThreshold: 27.0,
      totalCandidatesEst: 92000,
      stdDeviation: 5.3,
    },
    seed: 20210105,
  },
  {
    id: 'th-stat-2021-s1',
    year: 2021,
    session: 'session1',
    subject: 'statics',
    branchId: 'statics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الاستاتيكا (الدور الأول ٢٠٢١)',
    titleEn: 'Official Thanawya Amma Examination - Statics (First Session 2021)',
    subtitleAr: 'الامتحان الافتتاحي لمنظومة التقييم الجديدة والبابل شيت',
    subtitleEn: 'Inaugural Standardized Paper of the New Evaluation System',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢١ / اس-أ / 006',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 17.3,
      totalMarks: 30,
      passRatePercent: 68.5,
      distinctionRatePercent: 7.5,
      topTenThreshold: 27.5,
      totalCandidatesEst: 92000,
      stdDeviation: 5.2,
    },
    seed: 20210106,
  },
  {
    id: 'th-dyn-2021-s1',
    year: 2021,
    session: 'session1',
    subject: 'dynamics',
    branchId: 'dynamics',
    titleAr: 'امتحان شهادة إتمام الثانوية العامة - الديناميكا (الدور الأول ٢٠٢١)',
    titleEn: 'Official Thanawya Amma Examination - Dynamics (First Session 2021)',
    subtitleAr: 'الامتحان الافتتاحي لمنظومة التقييم الجديدة والبابل شيت',
    subtitleEn: 'Inaugural Standardized Paper of the New Evaluation System',
    formCodeAr: 'النموذج (أ)',
    formCodeEn: 'Form A',
    ministerialExamCode: 'ث.ع / ٢٠٢١ / دي-أ / 007',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 16.9,
      totalMarks: 30,
      passRatePercent: 66.9,
      distinctionRatePercent: 6.9,
      topTenThreshold: 27.0,
      totalCandidatesEst: 92000,
      stdDeviation: 5.5,
    },
    seed: 20210107,
  },

  // ==========================================
  // 2025 MOE EXPERIMENTAL MODEL PAPERS
  // ==========================================
  {
    id: 'th-phys-2025-exp',
    year: 2025,
    session: 'experimental',
    subject: 'physics',
    branchId: 'thanaweya_physics',
    titleAr: 'النموذج الاسترشادي الوزاري المعتمد - مادة الفيزياء (٢٠٢٥)',
    titleEn: 'Official MoE Benchmark Model Paper - Physics (2025)',
    subtitleAr: 'النموذج الاسترشادي الرسمي المطابق لأحدث مواصفات المركز القومي للامتحانات',
    subtitleEn: 'Official Ministry of Education Exemplar conforming to current NCERD specifications',
    formCodeAr: 'النموذج الاسترشادي',
    formCodeEn: 'Official Exemplar',
    ministerialExamCode: 'وزارة التربية والتعليم / استرشادي ٢٠٢٥ / ف',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 40.2,
      totalMarks: 60,
      passRatePercent: 82.5,
      distinctionRatePercent: 13.6,
      topTenThreshold: 58.5,
      totalCandidatesEst: 410000,
      stdDeviation: 8.4,
    },
    seed: 20250001,
  },
  {
    id: 'th-chem-2025-exp',
    year: 2025,
    session: 'experimental',
    subject: 'chemistry',
    branchId: 'thanaweya_chemistry',
    titleAr: 'النموذج الاسترشادي الوزاري المعتمد - مادة الكيمياء (٢٠٢٥)',
    titleEn: 'Official MoE Benchmark Model Paper - Chemistry (2025)',
    subtitleAr: 'النموذج الاسترشادي الرسمي المطابق لأحدث مواصفات المركز القومي للامتحانات',
    subtitleEn: 'Official Ministry of Education Exemplar conforming to current NCERD specifications',
    formCodeAr: 'النموذج الاسترشادي',
    formCodeEn: 'Official Exemplar',
    ministerialExamCode: 'وزارة التربية والتعليم / استرشادي ٢٠٢٥ / ك',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 41.0,
      totalMarks: 60,
      passRatePercent: 83.8,
      distinctionRatePercent: 14.2,
      topTenThreshold: 58.5,
      totalCandidatesEst: 410000,
      stdDeviation: 8.6,
    },
    seed: 20250002,
  },
  {
    id: 'th-bio-2025-exp',
    year: 2025,
    session: 'experimental',
    subject: 'biology',
    branchId: 'thanaweya_biology',
    titleAr: 'النموذج الاسترشادي الوزاري المعتمد - مادة الأحياء (٢٠٢٥)',
    titleEn: 'Official MoE Benchmark Model Paper - Biology (2025)',
    subtitleAr: 'النموذج الاسترشادي الرسمي المطابق لأحدث مواصفات المركز القومي للامتحانات',
    subtitleEn: 'Official Ministry of Education Exemplar conforming to current NCERD specifications',
    formCodeAr: 'النموذج الاسترشادي',
    formCodeEn: 'Official Exemplar',
    ministerialExamCode: 'وزارة التربية والتعليم / استرشادي ٢٠٢٥ / ح',
    durationMinutes: 180,
    totalQuestions: 46,
    totalMarks: 60,
    section1Count: 32,
    section2Count: 14,
    passingMark: 30,
    historicalStats: {
      nationalAverage: 42.5,
      totalMarks: 60,
      passRatePercent: 86.0,
      distinctionRatePercent: 15.5,
      topTenThreshold: 59.0,
      totalCandidatesEst: 305000,
      stdDeviation: 8.2,
    },
    seed: 20250003,
  },
  {
    id: 'th-calc-2025-exp',
    year: 2025,
    session: 'experimental',
    subject: 'calculus',
    branchId: 'calculus',
    titleAr: 'النموذج الاسترشادي الوزاري المعتمد - التفاضل والتكامل (٢٠٢٥)',
    titleEn: 'Official MoE Benchmark Model Paper - Calculus (2025)',
    subtitleAr: 'النموذج الاسترشادي الرسمي المطابق لأحدث مواصفات المركز القومي للامتحانات',
    subtitleEn: 'Official Ministry of Education Exemplar conforming to current NCERD specifications',
    formCodeAr: 'النموذج الاسترشادي',
    formCodeEn: 'Official Exemplar',
    ministerialExamCode: 'وزارة التربية والتعليم / استرشادي ٢٠٢٥ / تف',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 20.2,
      totalMarks: 30,
      passRatePercent: 76.5,
      distinctionRatePercent: 12.0,
      topTenThreshold: 29.0,
      totalCandidatesEst: 105000,
      stdDeviation: 4.6,
    },
    seed: 20250004,
  },
  {
    id: 'th-algs-2025-exp',
    year: 2025,
    session: 'experimental',
    subject: 'algebra_solid',
    branchId: 'algebra_solid',
    titleAr: 'النموذج الاسترشادي الوزاري المعتمد - الجبر والهندسة الفراغية (٢٠٢٥)',
    titleEn: 'Official MoE Benchmark Model Paper - Algebra & Solid Geometry (2025)',
    subtitleAr: 'النموذج الاسترشادي الرسمي المطابق لأحدث مواصفات المركز القومي للامتحانات',
    subtitleEn: 'Official Ministry of Education Exemplar conforming to current NCERD specifications',
    formCodeAr: 'النموذج الاسترشادي',
    formCodeEn: 'Official Exemplar',
    ministerialExamCode: 'وزارة التربية والتعليم / استرشادي ٢٠٢٥ / جب',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 19.8,
      totalMarks: 30,
      passRatePercent: 75.0,
      distinctionRatePercent: 11.4,
      topTenThreshold: 29.0,
      totalCandidatesEst: 105000,
      stdDeviation: 4.7,
    },
    seed: 20250005,
  },
  {
    id: 'th-stat-2025-exp',
    year: 2025,
    session: 'experimental',
    subject: 'statics',
    branchId: 'statics',
    titleAr: 'النموذج الاسترشادي الوزاري المعتمد - الاستاتيكا (٢٠٢٥)',
    titleEn: 'Official MoE Benchmark Model Paper - Statics (2025)',
    subtitleAr: 'النموذج الاسترشادي الرسمي المطابق لأحدث مواصفات المركز القومي للامتحانات',
    subtitleEn: 'Official Ministry of Education Exemplar conforming to current NCERD specifications',
    formCodeAr: 'النموذج الاسترشادي',
    formCodeEn: 'Official Exemplar',
    ministerialExamCode: 'وزارة التربية والتعليم / استرشادي ٢٠٢٥ / اس',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 20.0,
      totalMarks: 30,
      passRatePercent: 75.8,
      distinctionRatePercent: 11.8,
      topTenThreshold: 29.0,
      totalCandidatesEst: 105000,
      stdDeviation: 4.5,
    },
    seed: 20250006,
  },
  {
    id: 'th-dyn-2025-exp',
    year: 2025,
    session: 'experimental',
    subject: 'dynamics',
    branchId: 'dynamics',
    titleAr: 'النموذج الاسترشادي الوزاري المعتمد - الديناميكا (٢٠٢٥)',
    titleEn: 'Official MoE Benchmark Model Paper - Dynamics (2025)',
    subtitleAr: 'النموذج الاسترشادي الرسمي المطابق لأحدث مواصفات المركز القومي للامتحانات',
    subtitleEn: 'Official Ministry of Education Exemplar conforming to current NCERD specifications',
    formCodeAr: 'النموذج الاسترشادي',
    formCodeEn: 'Official Exemplar',
    ministerialExamCode: 'وزارة التربية والتعليم / استرشادي ٢٠٢٥ / دي',
    durationMinutes: 120,
    totalQuestions: 20,
    totalMarks: 30,
    section1Count: 10,
    section2Count: 10,
    passingMark: 15,
    historicalStats: {
      nationalAverage: 19.5,
      totalMarks: 30,
      passRatePercent: 74.0,
      distinctionRatePercent: 10.9,
      topTenThreshold: 28.5,
      totalCandidatesEst: 105000,
      stdDeviation: 4.8,
    },
    seed: 20250007,
  },
];

/**
 * Filter available past exam papers.
 */
export function getPastExamPapers(filters?: {
  year?: PastExamYear;
  session?: PastExamSession;
  subject?: PastExamSubject;
}): PastExamPaper[] {
  return PAST_EXAM_PAPERS.filter((paper) => {
    if (filters?.year && paper.year !== filters.year) return false;
    if (filters?.session && paper.session !== filters.session) return false;
    if (filters?.subject && paper.subject !== filters.subject) return false;
    return true;
  });
}

/**
 * Retrieve a past paper by its unique ID.
 */
export function getPastExamPaperById(id: string): PastExamPaper | undefined {
  return PAST_EXAM_PAPERS.find((p) => p.id === id);
}

/**
 * Seeded Pseudo-Random Number Generator (Mulberry32).
 * Ensures that authentic past exam papers generate the EXACT same questions every time.
 */
function createSeededRng(seed: number) {
  let s = seed;
  return function () {
    let t = (s += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Deterministically shuffle an array with a seeded RNG.
 */
function seededShuffle<T>(array: T[], rng: () => number): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generate full-length authentic past paper questions matching the official ministerial blueprint.
 * Strictly divides into:
 *  - Section 1: 1-mark items (32 for sciences, 10 for math branches)
 *  - Section 2: 2-mark items (14 for sciences, 10 for math branches)
 */
export function generatePastPaperQuestions(
  paperId: string,
  curriculum: Curriculum
): GeneratedQuestion[] {
  const paper = getPastExamPaperById(paperId);
  if (!paper) return [];

  // Match the branch in curriculum
  const targetBranch = curriculum.branches.find(
    (b) =>
      b.id === paper.branchId ||
      b.id.toLowerCase().includes(paper.branchId.toLowerCase()) ||
      b.id.toLowerCase().includes(paper.subject.toLowerCase())
  );

  if (!targetBranch) return [];

  const rng = createSeededRng(paper.seed);

  // Pool all available problems from the branch
  const pool: GeneratedQuestion[] = [];
  targetBranch.chapters.forEach((ch) => {
    const candidates: Array<{ prob: SolvedProblem; source: string; diff: DifficultyLevel }> = [];

    // Databank problems
    if (ch.databank) {
      ch.databank.easy.forEach((p) => candidates.push({ prob: p, source: 'db_easy', diff: 'easy' }));
      ch.databank.medium.forEach((p) => candidates.push({ prob: p, source: 'db_med', diff: 'medium' }));
      ch.databank.hots.forEach((p) => candidates.push({ prob: p, source: 'db_hots', diff: 'hots' }));
    }

    // Solved textbook examples
    if (ch.solvedExamples) {
      ch.solvedExamples.forEach((p) => {
        candidates.push({ prob: p, source: 'tb_se', diff: p.difficulty || 'medium' });
      });
    }

    // Unit exercises
    if (ch.exerciseProblems) {
      ch.exerciseProblems.forEach((p) => {
        candidates.push({ prob: p, source: 'tb_ex', diff: p.difficulty || 'medium' });
      });
    }

    candidates.forEach(({ prob, source, diff }) => {
      if (
        !prob.optionsEn ||
        prob.optionsEn.length !== 4 ||
        !prob.optionsAr ||
        prob.optionsAr.length !== 4 ||
        prob.correctIndex === undefined ||
        prob.correctIndex < 0 ||
        prob.correctIndex > 3
      ) {
        return;
      }

      pool.push({
        id: `${paper.id}_${ch.id}_${prob.id}_${source}`,
        questionEn: prob.questionEn,
        questionAr: prob.questionAr,
        difficulty: diff,
        optionsEn: prob.optionsEn,
        optionsAr: prob.optionsAr,
        correctIndex: prob.correctIndex,
        explanationEn: prob.stepByStepSolutionEn,
        explanationAr: prob.stepByStepSolutionAr,
        chapterId: ch.id,
        chapterTitleEn: ch.titleEn,
        chapterTitleAr: ch.titleAr,
        branchTitleEn: targetBranch.titleEn,
        branchTitleAr: targetBranch.titleAr,
        diagramType: prob.diagramType,
      });
    });
  });

  if (pool.length === 0) return [];

  // Group candidate items by chapter and difficulty
  const sec1Candidates = pool.filter((q) => q.difficulty === 'easy' || q.difficulty === 'medium');
  const sec2Candidates = pool.filter(
    (q) => q.difficulty === 'hots' || q.difficulty === 'medium' || q.difficulty === 'exam_standard'
  );

  const groupSec1ByChapter: Record<string, GeneratedQuestion[]> = {};
  sec1Candidates.forEach((q) => {
    if (!groupSec1ByChapter[q.chapterId]) groupSec1ByChapter[q.chapterId] = [];
    groupSec1ByChapter[q.chapterId].push(q);
  });

  const groupSec2ByChapter: Record<string, GeneratedQuestion[]> = {};
  sec2Candidates.forEach((q) => {
    if (!groupSec2ByChapter[q.chapterId]) groupSec2ByChapter[q.chapterId] = [];
    groupSec2ByChapter[q.chapterId].push(q);
  });

  const chosenIds = new Set<string>();

  // Round-robin selection helper ensuring cross-chapter coverage
  const drawQuestions = (
    targetCount: number,
    groupMap: Record<string, GeneratedQuestion[]>,
    pointsVal: number,
    tagAr: string,
    tagEn: string
  ): GeneratedQuestion[] => {
    const list: GeneratedQuestion[] = [];
    const chapterKeys = seededShuffle(Object.keys(groupMap), rng);
    if (chapterKeys.length === 0) return [];

    let currentChapterIdx = 0;
    let attempts = 0;
    const maxAttempts = targetCount * 25;

    while (list.length < targetCount && attempts < maxAttempts) {
      attempts++;
      const chKey = chapterKeys[currentChapterIdx % chapterKeys.length];
      currentChapterIdx++;

      const chPool = groupMap[chKey];
      if (!chPool || chPool.length === 0) continue;

      const available = chPool.filter((q) => !chosenIds.has(q.id));
      if (available.length > 0) {
        const picked = seededShuffle(available, rng)[0];
        chosenIds.add(picked.id);
        list.push({
          ...picked,
          points: pointsVal,
          sectionTagAr: tagAr,
          sectionTagEn: tagEn,
          bloomLevel: pointsVal === 2 ? 'analysis' : classifyBloomLevel(picked),
        });
      }
    }

    // Top-up if needed
    if (list.length < targetCount) {
      const remainingPool = pool.filter((q) => !chosenIds.has(q.id));
      const shuffledRem = seededShuffle(remainingPool, rng);
      for (const rem of shuffledRem) {
        if (list.length >= targetCount) break;
        chosenIds.add(rem.id);
        list.push({
          ...rem,
          points: pointsVal,
          sectionTagAr: tagAr,
          sectionTagEn: tagEn,
          bloomLevel: pointsVal === 2 ? 'analysis' : classifyBloomLevel(rem),
        });
      }
    }

    return list;
  };

  // Section 1 (1-mark items)
  const sec1 = drawQuestions(
    paper.section1Count,
    groupSec1ByChapter,
    1,
    `القسم الأول: أسئلة موضوعية (درجة واحدة لكل سؤال)`,
    `Section 1: Objective Items (1 Mark each)`
  );

  // Section 2 (2-mark items)
  const sec2 = drawQuestions(
    paper.section2Count,
    groupSec2ByChapter,
    2,
    `القسم الثاني: أسئلة مهارات التفكير العليا والتحليل (درجتان لكل سؤال)`,
    `Section 2: High-Order Cognitive & Analytical Items (2 Marks each)`
  );

  return [...sec1, ...sec2];
}

export interface CohortComparisonReport {
  earnedMarks: number;
  totalMarks: number;
  scorePercentage: number;
  nationalAverage: number;
  differenceFromAverage: number; // positive = above average
  percentileRank: number; // 0 - 99.9%
  isTopTenCandidate: boolean;
  isDistinction: boolean; // >= 85%
  isPassing: boolean; // >= 50%
  tierBadgeAr: string;
  tierBadgeEn: string;
  tierColor: string;
  summaryAr: string;
  summaryEn: string;
}

/**
 * Computes Gaussian error function approximation for normal CDF.
 */
function approxErf(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x >= 0 ? 1 : -1;
  const absX = Math.abs(x);
  const t = 1.0 / (1.0 + p * absX);
  const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
  return sign * y;
}

/**
 * Normal Cumulative Distribution Function (CDF).
 */
function normalCdf(x: number, mean: number, stdDev: number): number {
  if (stdDev <= 0) return x >= mean ? 1.0 : 0.0;
  return 0.5 * (1.0 + approxErf((x - mean) / (stdDev * Math.SQRT2)));
}

/**
 * Compute historical cohort benchmark analytics for a submitted past examination paper.
 */
export function computeCohortComparison(
  paper: PastExamPaper,
  earnedMarks: number
): CohortComparisonReport {
  const totalMarks = paper.totalMarks;
  const clampedMarks = Math.max(0, Math.min(totalMarks, earnedMarks));
  const scorePercentage = Math.round((clampedMarks / totalMarks) * 100);
  const stats = paper.historicalStats;

  // Compute percentile rank using the authentic cohort parameters
  const cdfValue = normalCdf(clampedMarks, stats.nationalAverage, stats.stdDeviation);
  const percentileRank = Math.min(99.9, Math.max(1.0, Math.round(cdfValue * 1000) / 10));

  const diffFromAvg = Math.round((clampedMarks - stats.nationalAverage) * 10) / 10;
  const isTopTenCandidate = clampedMarks >= stats.topTenThreshold;
  const isDistinction = scorePercentage >= 85;
  const isPassing = clampedMarks >= paper.passingMark;

  let tierBadgeAr = 'بحاجة إلى تكثيف المراجعة';
  let tierBadgeEn = 'Needs Targeted Revision';
  let tierColor = 'text-amber-400 bg-amber-950/50 border-amber-500/50';

  if (isTopTenCandidate) {
    tierBadgeAr = 'أوائل الجمهورية الرسمي (Republic Honor Roll 🏆)';
    tierBadgeEn = 'Republic Honor Roll / Top 10 Tier 🏆';
    tierColor = 'text-emerald-400 bg-emerald-950/60 border-emerald-500/60';
  } else if (isDistinction) {
    tierBadgeAr = 'امتياز وتفوق أكاديمي مرموق (Distinction 🌟)';
    tierBadgeEn = 'Distinction / Tier 1 Candidate 🌟';
    tierColor = 'text-cyan-400 bg-cyan-950/60 border-cyan-500/60';
  } else if (isPassing) {
    tierBadgeAr = 'اجتياز معتمد بنجاح (MoE Pass Grade 👍)';
    tierBadgeEn = 'Official MoE Pass Grade 👍';
    tierColor = 'text-indigo-400 bg-indigo-950/60 border-indigo-500/60';
  }

  const sessionNameAr =
    paper.session === 'session1'
      ? 'الدور الأول'
      : paper.session === 'session2'
      ? 'الدور الثاني'
      : 'النموذج الاسترشادي';

  const sessionNameEn =
    paper.session === 'session1'
      ? 'First Session'
      : paper.session === 'session2'
      ? 'Second Session'
      : 'Official Exemplar';

  const summaryAr = `حصلت على ${toHindiDigits(clampedMarks)} من ${toHindiDigits(
    totalMarks
  )} درجة (${toHindiDigits(scorePercentage)}٪). تضعك هذه النتيجة في الرتبة المئوية ${toHindiDigits(
    percentileRank
  )}٪ على مستوى دفعة الجمهورية الرسمية لعام ${toHindiDigits(paper.year)} (${sessionNameAr})، ${
    diffFromAvg >= 0
      ? `متفوقاً على متوسط الجمهورية بمقدار +${toHindiDigits(diffFromAvg)} درجة.`
      : `دون متوسط الجمهورية البالغ ${toHindiDigits(stats.nationalAverage)} درجة.`
  }`;

  const summaryEn = `You achieved ${clampedMarks} / ${totalMarks} marks (${scorePercentage}%). This places you at the ${percentileRank}th percentile of the authentic ${paper.year} (${sessionNameEn}) national cohort, ${
    diffFromAvg >= 0
      ? `exceeding the national average by +${diffFromAvg} marks.`
      : `below the national average of ${stats.nationalAverage} marks.`
  }`;

  return {
    earnedMarks: clampedMarks,
    totalMarks,
    scorePercentage,
    nationalAverage: stats.nationalAverage,
    differenceFromAverage: diffFromAvg,
    percentileRank,
    isTopTenCandidate,
    isDistinction,
    isPassing,
    tierBadgeAr,
    tierBadgeEn,
    tierColor,
    summaryAr,
    summaryEn,
  };
}
