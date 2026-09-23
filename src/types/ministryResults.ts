/**
 * Types and schema for Ministry of Education Results Linkage & Score Verification
 * In strict compliance with Egyptian Data Protection Law (Law No. 151/2020),
 * student seat numbers (أرقام الجلوس) and score records are processed
 * strictly client-side on device and never transmitted to external servers.
 */

export type AcademicTrack = 'scientific_math' | 'scientific_science' | 'literary';

export interface OfficialSubjectScore {
  subjectId: string;
  nameAr: string;
  nameEn: string;
  maxMarks: number;
  passMarks: number;
  studentMarks: number;
}

export interface OfficialResultsRecord {
  seatNumber?: string;
  governorate?: string;
  academicTrack: AcademicTrack;
  subjects: OfficialSubjectScore[];
  totalMarks: number;
  maxTotalMarks: number;
  percentage: number;
  enteredTimestamp: number;
  isCalibrated: boolean;
}

export interface MinistryPortalLink {
  id: string;
  nameAr: string;
  nameEn: string;
  baseUrl: string;
  buildQueryUrl: (seatNumber?: string) => string;
  reliabilityRank: number;
  descriptionAr: string;
}

export const OFFICIAL_TRACK_SUBJECTS: Record<AcademicTrack, { id: string; nameAr: string; nameEn: string; maxMarks: number; passMarks: number }[]> = {
  scientific_math: [
    { id: 'arabic', nameAr: 'اللغة العربية', nameEn: 'Arabic', maxMarks: 80, passMarks: 40 },
    { id: 'first_foreign', nameAr: 'اللغة الأجنبية الأولى', nameEn: 'First Foreign Language', maxMarks: 50, passMarks: 25 },
    { id: 'second_foreign', nameAr: 'اللغة الأجنبية الثانية', nameEn: 'Second Foreign Language', maxMarks: 40, passMarks: 20 },
    { id: 'pure_math', nameAr: 'الرياضيات البحتة (تفاضل وتكامل وجبر وفراغية)', nameEn: 'Pure Mathematics', maxMarks: 60, passMarks: 30 },
    { id: 'applied_math', nameAr: 'الرياضيات التطبيقية (استاتيكا وديناميكا)', nameEn: 'Applied Mathematics', maxMarks: 60, passMarks: 30 },
    { id: 'physics', nameAr: 'الفيزياء', nameEn: 'Physics', maxMarks: 60, passMarks: 30 },
    { id: 'chemistry', nameAr: 'الكيمياء', nameEn: 'Chemistry', maxMarks: 60, passMarks: 30 },
  ],
  scientific_science: [
    { id: 'arabic', nameAr: 'اللغة العربية', nameEn: 'Arabic', maxMarks: 80, passMarks: 40 },
    { id: 'first_foreign', nameAr: 'اللغة الأجنبية الأولى', nameEn: 'First Foreign Language', maxMarks: 50, passMarks: 25 },
    { id: 'second_foreign', nameAr: 'اللغة الأجنبية الثانية', nameEn: 'Second Foreign Language', maxMarks: 40, passMarks: 20 },
    { id: 'biology', nameAr: 'الأحياء', nameEn: 'Biology', maxMarks: 60, passMarks: 30 },
    { id: 'geology', nameAr: 'الجيولوجيا وعلوم البيئة', nameEn: 'Geology & Environmental Science', maxMarks: 60, passMarks: 30 },
    { id: 'physics', nameAr: 'الفيزياء', nameEn: 'Physics', maxMarks: 60, passMarks: 30 },
    { id: 'chemistry', nameAr: 'الكيمياء', nameEn: 'Chemistry', maxMarks: 60, passMarks: 30 },
  ],
  literary: [
    { id: 'arabic', nameAr: 'اللغة العربية', nameEn: 'Arabic', maxMarks: 80, passMarks: 40 },
    { id: 'first_foreign', nameAr: 'اللغة الأجنبية الأولى', nameEn: 'First Foreign Language', maxMarks: 50, passMarks: 25 },
    { id: 'second_foreign', nameAr: 'اللغة الأجنبية الثانية', nameEn: 'Second Foreign Language', maxMarks: 40, passMarks: 20 },
    { id: 'history', nameAr: 'التاريخ', nameEn: 'History', maxMarks: 60, passMarks: 30 },
    { id: 'geography', nameAr: 'الجغرافيا', nameEn: 'Geography', maxMarks: 60, passMarks: 30 },
    { id: 'philosophy', nameAr: 'الفلسفة والمنطق', nameEn: 'Philosophy & Logic', maxMarks: 60, passMarks: 30 },
    { id: 'psychology', nameAr: 'علم النفس والاجتماع', nameEn: 'Psychology & Sociology', maxMarks: 60, passMarks: 30 },
  ],
};
