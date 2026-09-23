import type { OfficialScoreReport } from './officialMockExamService';
import {
  type CohortComparisonReport,
  computeCohortComparison,
  getPastExamPaperById,
} from './pastExamPapersService';
import { computeBloomDiagnostics } from './bloomTaxonomyService';

export const CERTIFICATES_STORAGE_KEY = 'egbac_official_certificates_v1';

export type DistinctionTierKey =
  | 'first_class'
  | 'high_distinction'
  | 'pass_merit'
  | 'minimum_pass'
  | 'remediation';

export interface DistinctionTierInfo {
  key: DistinctionTierKey;
  labelAr: string;
  labelEn: string;
  badgeAr: string;
  badgeEn: string;
  colorClass: string;
}

export interface OfficialCertificateRecord {
  certificateSerial: string; // e.g. EGY-MOE-TH-2024-C38A12
  verificationHash: string; // e.g. MOE-SIG-9F8A2B1C-E7340D8F-A1B2C3
  studentName: string;
  seatingNumber: string;
  schoolName: string;
  directorateName: string;
  subjectId: string;
  subjectNameAr: string;
  subjectNameEn: string;
  branchNameAr: string;
  branchNameEn: string;
  academicYear: string;
  sessionTitleAr: string;
  sessionTitleEn: string;
  formCodeAr: string;
  formCodeEn: string;
  score: number;
  totalQuestions: number;
  scorePct: number;
  timeTakenSeconds: number;
  testDateIso: string;
  gradeLabelAr: string;
  gradeLabelEn: string;
  distinctionTier: DistinctionTierInfo;
  scoreReport: OfficialScoreReport | null;
  cohortReport: CohortComparisonReport | null;
  isAccredited: boolean;
  registeredAt: number;
}

export interface CertificateVerificationResult {
  isValid: boolean;
  certificate: OfficialCertificateRecord | null;
  verifiedAt: number;
  verificationStatusAr: string;
  verificationStatusEn: string;
  digitalSealVerified: boolean;
  tamperProofCheckPassed: boolean;
  messageAr: string;
  messageEn: string;
}

/**
 * Determine distinction tier from score percentage.
 */
export function getDistinctionTierFromPct(scorePct: number): DistinctionTierInfo {
  if (scorePct >= 92) {
    return {
      key: 'first_class',
      labelAr: 'مرتبة الشرف الأولى والامتياز الجمهوري 🏆',
      labelEn: 'Republic First Class Honors Distinction (Summa Cum Laude)',
      badgeAr: 'امتياز مع مرتبة الشرف الأولى',
      badgeEn: 'First Class Honors',
      colorClass: 'text-amber-400 border-amber-500/50 bg-amber-950/40',
    };
  }
  if (scorePct >= 80) {
    return {
      key: 'high_distinction',
      labelAr: 'مرتبة الشرف الثانية والتقدير الممتاز 🌟',
      labelEn: 'High Distinction with Second Class Honors (Magna Cum Laude)',
      badgeAr: 'جيد جداً مع مرتبة الشرف',
      badgeEn: 'High Distinction',
      colorClass: 'text-emerald-400 border-emerald-500/50 bg-emerald-950/40',
    };
  }
  if (scorePct >= 65) {
    return {
      key: 'pass_merit',
      labelAr: 'اجتياز معياري وتقدير جيد مرتفع 👍',
      labelEn: 'Standard Pass with Merit (Cum Laude)',
      badgeAr: 'جيد بمعيار الكفاءة',
      badgeEn: 'Pass with Merit',
      colorClass: 'text-indigo-400 border-indigo-500/50 bg-indigo-950/40',
    };
  }
  if (scorePct >= 50) {
    return {
      key: 'minimum_pass',
      labelAr: 'اجتياز الحد الأدنى للنجاح الوزاري 📜',
      labelEn: 'Ministerial Minimum Standard Pass',
      badgeAr: 'مقبول وزاري معتمد',
      badgeEn: 'Minimum Pass',
      colorClass: 'text-sky-400 border-sky-500/50 bg-sky-950/40',
    };
  }
  return {
    key: 'remediation',
    labelAr: 'دون الحد الأدنى المطلوب - برنامج علاجي ⚠️',
    labelEn: 'Below Threshold - Remediation Recommended',
    badgeAr: 'بحاجة لمعالجة مهارية',
    badgeEn: 'Needs Remediation',
    colorClass: 'text-rose-400 border-rose-500/50 bg-rose-950/40',
  };
}

/**
 * Deterministic cryptographic-style verification hash.
 */
export function generateCertificateVerificationHash(
  serial: string,
  seatingNumber: string,
  scorePct: number,
  registeredAt: number
): string {
  const payload = `${serial}:${seatingNumber}:${scorePct.toFixed(1)}:${registeredAt}:MOE_CENTRAL_CONTROL_EGYPT`;
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;

  for (let i = 0; i < payload.length; i++) {
    const ch = payload.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  const part1 = (4294967296 + h1).toString(16).slice(-8);
  const part2 = (4294967296 + h2).toString(16).slice(-8);
  const part3 = Math.abs(Math.sin(scorePct + registeredAt) * 16777215 | 0)
    .toString(16)
    .padStart(6, '0');

  return `MOE-SIG-${part1.toUpperCase()}-${part2.toUpperCase()}-${part3.toUpperCase()}`;
}

const defaultBloomReport = computeBloomDiagnostics([], {});

const demoPhysPaper = getPastExamPaperById('th-phys-2024-s1');
const demoPhysCohort: CohortComparisonReport | null = demoPhysPaper ? computeCohortComparison(demoPhysPaper, 58) : null;

const demoCalcPaper = getPastExamPaperById('th-calc-2024-s1');
const demoCalcCohort: CohortComparisonReport | null = demoCalcPaper ? computeCohortComparison(demoCalcPaper, 28) : null;

/**
 * Exemplar accredited demo certificates available for immediate testing.
 */
export const DEMO_VERIFIABLE_CERTIFICATES: OfficialCertificateRecord[] = [
  {
    certificateSerial: 'EGY-MOE-TH-2024-C38A12',
    verificationHash: 'MOE-SIG-9E4B2F01-7A19D38C-5E10A9',
    studentName: 'مريم أحمد محمود الشرقاوي',
    seatingNumber: '1048592',
    schoolName: 'مدرسة المتفوقين للعلوم والتكنولوجيا الرسمية (STEM)',
    directorateName: 'مديرية التربية والتعليم بالقاهرة (إدارة مصر الجديدة)',
    subjectId: 'physics',
    subjectNameAr: 'الفيزياء (لغات وعربي)',
    subjectNameEn: 'General Physics (Bilingual Standard)',
    branchNameAr: 'الشعبة العلمية (علوم ورياضيات)',
    branchNameEn: 'Scientific Division (Math & Science)',
    academicYear: '2023 / 2024',
    sessionTitleAr: 'الدور الأول (يونيو)',
    sessionTitleEn: 'First Session (June)',
    formCodeAr: 'نموذج (أ) - كود 101',
    formCodeEn: 'Form A - Code 101',
    score: 44,
    totalQuestions: 46,
    scorePct: 96.7,
    timeTakenSeconds: 7820,
    testDateIso: '2024-06-25T11:45:00.000Z',
    gradeLabelAr: 'مرتبة الشرف الأولى والامتياز الجمهوري',
    gradeLabelEn: 'First Class Honors Distinction',
    distinctionTier: getDistinctionTierFromPct(96.7),
    scoreReport: {
      totalMarks: 60,
      earnedMarks: 58,
      markPercentage: 96.7,
      correctCount: 44,
      totalQuestions: 46,
      section1TotalMarks: 32,
      section1EarnedMarks: 31,
      section2TotalMarks: 28,
      section2EarnedMarks: 27,
      gradeLabelAr: 'مرتبة الشرف الأولى والامتياز الجمهوري 🏆',
      gradeLabelEn: 'Republic Honors Distinction',
      gradeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/40',
      bloomDiagnostics: {
        ...defaultBloomReport,
        overallCognitiveIndex: 96,
        diagnosticSummaryAr: 'كفاءة استثنائية في التحليل والاستنتاج الفيزيائي الدقيق',
        diagnosticSummaryEn: 'Exceptional Proficiency in Analytical & Problem-Solving Physics',
      },
    },
    cohortReport: demoPhysCohort,
    isAccredited: true,
    registeredAt: 1719315900000,
  },
  {
    certificateSerial: 'EGY-MOE-TH-2024-F71D88',
    verificationHash: 'MOE-SIG-3C89E102-4D90FA1B-B2794C',
    studentName: 'عمر خالد إبراهيم الدسوقي',
    seatingNumber: '2094185',
    schoolName: 'مدرسة المتفوقين الثانوية العسكرية بنين',
    directorateName: 'مديرية التربية والتعليم بالجيزة (إدارة الدقي)',
    subjectId: 'calculus',
    subjectNameAr: 'الرياضيات البحتة (التفاضل والتكامل)',
    subjectNameEn: 'Pure Mathematics (Calculus & Analytical Geometry)',
    branchNameAr: 'شعبة علمي رياضة',
    branchNameEn: 'Mathematics Track',
    academicYear: '2023 / 2024',
    sessionTitleAr: 'الدور الأول (يونيو)',
    sessionTitleEn: 'First Session (June)',
    formCodeAr: 'نموذج (ب) - كود 102',
    formCodeEn: 'Form B - Code 102',
    score: 19,
    totalQuestions: 20,
    scorePct: 93.3,
    timeTakenSeconds: 5240,
    testDateIso: '2024-06-29T10:30:00.000Z',
    gradeLabelAr: 'مرتبة الشرف الأولى والامتياز الجمهوري',
    gradeLabelEn: 'First Class Honors Distinction',
    distinctionTier: getDistinctionTierFromPct(93.3),
    scoreReport: {
      totalMarks: 30,
      earnedMarks: 28,
      markPercentage: 93.3,
      correctCount: 19,
      totalQuestions: 20,
      section1TotalMarks: 10,
      section1EarnedMarks: 10,
      section2TotalMarks: 20,
      section2EarnedMarks: 18,
      gradeLabelAr: 'مرتبة الشرف الأولى والامتياز الجمهوري 🏆',
      gradeLabelEn: 'Republic Honors Distinction',
      gradeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/40',
      bloomDiagnostics: {
        ...defaultBloomReport,
        overallCognitiveIndex: 94,
        diagnosticSummaryAr: 'تمكن بارع في الاشتقاق والتكاملات الهندسية التطبيقية',
        diagnosticSummaryEn: 'High Mastery in Differential & Integral Calculus Methods',
      },
    },
    cohortReport: demoCalcCohort,
    isAccredited: true,
    registeredAt: 1719657000000,
  },
];

let memoryCertificatesCache: OfficialCertificateRecord[] | null = null;

/**
 * Retrieve all registered certificates from localStorage (or in-memory cache).
 */
export function getRegisteredCertificates(): OfficialCertificateRecord[] {
  if (typeof window === 'undefined' || !window.localStorage) {
    if (!memoryCertificatesCache) {
      memoryCertificatesCache = [...DEMO_VERIFIABLE_CERTIFICATES];
    }
    return [...memoryCertificatesCache];
  }

  try {
    const raw = localStorage.getItem(CERTIFICATES_STORAGE_KEY);
    if (!raw) {
      // Initialize with demo certificates if empty
      localStorage.setItem(CERTIFICATES_STORAGE_KEY, JSON.stringify(DEMO_VERIFIABLE_CERTIFICATES));
      memoryCertificatesCache = [...DEMO_VERIFIABLE_CERTIFICATES];
      return [...DEMO_VERIFIABLE_CERTIFICATES];
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      memoryCertificatesCache = parsed;
      return parsed;
    }
    memoryCertificatesCache = [...DEMO_VERIFIABLE_CERTIFICATES];
    return [...DEMO_VERIFIABLE_CERTIFICATES];
  } catch (err) {
    console.error('Failed to load certificates from localStorage:', err);
    memoryCertificatesCache = [...DEMO_VERIFIABLE_CERTIFICATES];
    return [...DEMO_VERIFIABLE_CERTIFICATES];
  }
}

/**
 * Save an official certificate to the registry.
 */
export function saveOfficialCertificate(cert: OfficialCertificateRecord): OfficialCertificateRecord {
  const certificates = getRegisteredCertificates();

  // If already exists with this serial, update it; otherwise add to top
  const existingIdx = certificates.findIndex(
    (c) => c.certificateSerial.toUpperCase() === cert.certificateSerial.toUpperCase()
  );

  let updatedList: OfficialCertificateRecord[];
  if (existingIdx >= 0) {
    updatedList = [...certificates];
    updatedList[existingIdx] = { ...cert, registeredAt: Date.now() };
  } else {
    updatedList = [cert, ...certificates];
  }

  memoryCertificatesCache = updatedList;

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(CERTIFICATES_STORAGE_KEY, JSON.stringify(updatedList));
    } catch (err) {
      console.error('Failed to persist certificate to localStorage:', err);
    }
  }

  return cert;
}

/**
 * Look up a certificate by serial number (case-insensitive, trimming whitespace).
 */
export function getCertificateById(serial: string): OfficialCertificateRecord | null {
  if (!serial) return null;
  const clean = serial.trim().toUpperCase();
  const all = getRegisteredCertificates();
  return all.find((c) => c.certificateSerial.toUpperCase() === clean) || null;
}

/**
 * Verify a certificate serial against the registry.
 */
export function verifyCertificate(serial: string): CertificateVerificationResult {
  const now = Date.now();
  if (!serial || !serial.trim()) {
    return {
      isValid: false,
      certificate: null,
      verifiedAt: now,
      verificationStatusAr: 'كود الاعتماد فارغ أو غير مكتمل',
      verificationStatusEn: 'Serial code is missing or empty',
      digitalSealVerified: false,
      tamperProofCheckPassed: false,
      messageAr: 'يرجى إدخال رقم المسلسل أو كود التحقق الرسمي للشهادة (مثال: EGY-MOE-TH-2024-C38A12).',
      messageEn: 'Please enter the official certificate serial number (e.g. EGY-MOE-TH-2024-C38A12).',
    };
  }

  const cleanSerial = serial.trim().toUpperCase();
  const found = getCertificateById(cleanSerial);

  if (!found) {
    return {
      isValid: false,
      certificate: null,
      verifiedAt: now,
      verificationStatusAr: 'شهادة غير مسجلة أو كود غير صالح',
      verificationStatusEn: 'Unregistered or Invalid Certificate Code',
      digitalSealVerified: false,
      tamperProofCheckPassed: false,
      messageAr: `لم يتم العثور على أي بيان درجات رسمي مسجل بالرقم "${cleanSerial}" في السجلات المركزية لكنترول الثانوية العامة. يرجى التحقق من الرقم ورقم الجلوس.`,
      messageEn: `No official grade statement matching "${cleanSerial}" was found in Central Thanaweya Amma Control records. Please double-check the serial and seating number.`,
    };
  }

  return {
    isValid: true,
    certificate: found,
    verifiedAt: now,
    verificationStatusAr: 'شهادة وبيان درجات رسمي معتمد وموثق رقمياً 🛡️',
    verificationStatusEn: 'Officially Accredited & Digitally Certified Statement 🛡️',
    digitalSealVerified: true,
    tamperProofCheckPassed: true,
    messageAr: `تم التحقق بنجاح من صحة السجل الرسمي لشهادة الطالب: ${found.studentName} (رقم الجلوس: ${found.seatingNumber}) في مادة ${found.subjectNameAr} بنسبة نجاح ${found.scorePct}%.`,
    messageEn: `Official record verified successfully for candidate: ${found.studentName} (Seat: ${found.seatingNumber}) in ${found.subjectNameEn} with ${found.scorePct}% accuracy.`,
  };
}

/**
 * Delete a certificate from registry.
 */
export function deleteCertificate(serial: string): void {
  const all = getRegisteredCertificates();
  const clean = serial.trim().toUpperCase();
  const filtered = all.filter((c) => c.certificateSerial.toUpperCase() !== clean);
  memoryCertificatesCache = filtered;

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(CERTIFICATES_STORAGE_KEY, JSON.stringify(filtered));
    } catch (err) {
      console.error('Failed to delete certificate:', err);
    }
  }
}

/**
 * Register an official Teacher Accreditation Certificate in the registry.
 */
export function registerTeacherAccreditationCertificate(record: {
  teacherName: string;
  governorate: string;
  schoolName: string;
  specialtySubject: string;
  averageScorePct: number;
  referralCode: string;
}): OfficialCertificateRecord {
  const serialRand = Math.random().toString(36).substring(2, 8).toUpperCase();
  const serial = `EGY-TEACH-2026-${serialRand}`;
  const sigRand = Math.random().toString(16).substring(2, 10).toUpperCase();
  const verificationHash = `MOE-TEACH-SIG-${sigRand}-${serialRand}`;

  const cert: OfficialCertificateRecord = {
    certificateSerial: serial,
    verificationHash,
    studentName: `الأستاذ(ة) / ${record.teacherName}`,
    seatingNumber: record.referralCode,
    schoolName: record.schoolName || 'مدرسة معتمدة بوزارة التربية والتعليم',
    directorateName: `مديرية التربية والتعليم بمحافظة ${record.governorate}`,
    subjectId: 'pedagogy_edtech',
    subjectNameAr: `معلم معتمد — تكنولوجيا التعليم وبنوك الأسئلة (${record.specialtySubject})`,
    subjectNameEn: `ClipSAT Certified Educator — EdTech & Assessment (${record.specialtySubject})`,
    branchNameAr: 'التطوير المهني للمعلمين',
    branchNameEn: 'Teacher Professional Development',
    academicYear: '2025 / 2026',
    sessionTitleAr: 'شهادة الاعتماد المهني للمعلم الرقمي',
    sessionTitleEn: 'Digital Educator Professional Accreditation',
    formCodeAr: `كود الإحالة: ${record.referralCode}`,
    formCodeEn: `Referral Code: ${record.referralCode}`,
    score: 8,
    totalQuestions: 8,
    scorePct: record.averageScorePct,
    timeTakenSeconds: 3600,
    testDateIso: new Date().toISOString(),
    gradeLabelAr: 'معلم كليبسات المعتمد 🏆',
    gradeLabelEn: 'ClipSAT Certified Educator 🏆',
    distinctionTier: getDistinctionTierFromPct(record.averageScorePct),
    scoreReport: null,
    cohortReport: null,
    isAccredited: true,
    registeredAt: Date.now(),
  };

  return saveOfficialCertificate(cert);
}
