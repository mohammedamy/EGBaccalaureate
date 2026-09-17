import React, { useState, useEffect, useId } from 'react';
import {
  Award,
  Printer,
  Edit3,
  Save,
  Check,
  Share2,
  X,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  School,
  User,
  Hash,
  FileCheck,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { OfficialScoreReport } from '../services/officialMockExamService';
import type { CohortComparisonReport } from '../services/pastExamPapersService';
import {
  saveOfficialCertificate,
  generateCertificateVerificationHash,
  getDistinctionTierFromPct,
  type OfficialCertificateRecord,
} from '../services/certificateRegistryService';
import { CertificateVerificationModal } from './CertificateVerificationModal';

export interface OfficialPerformanceCertificateProps {
  studentName?: string;
  seatingNumber?: string;
  schoolName?: string;
  directorateName?: string;
  subjectId: string;
  subjectNameAr: string;
  subjectNameEn: string;
  branchNameAr?: string;
  branchNameEn?: string;
  academicYear?: string;
  sessionTitleAr?: string;
  sessionTitleEn?: string;
  formCodeAr?: string;
  formCodeEn?: string;
  scoreReport: OfficialScoreReport | null;
  cohortReport: CohortComparisonReport | null;
  score: number;
  totalQuestions: number;
  scorePct: number;
  gradeLabelAr: string;
  gradeLabelEn: string;
  timeTakenSeconds: number;
  testDate?: Date;
  onClose?: () => void;
  lang: 'ar' | 'en';
}

/**
 * High-definition SVG of the Golden Eagle of Saladin (عقاب صلاح الدين الذهبي)
 * Used as the central ministerial crest and authentic watermark.
 */
const SaladinEagleCrest: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-16 h-16',
  size = 64,
}) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outstretched Wings & Feathers */}
    <path
      d="M50 18 C46 16 42 17 38 20 C34 23 28 29 24 38 C20 47 18 57 20 66 C21 71 24 74 28 73 C31 72 32 67 34 62 C33 69 36 74 40 73 C43 72 44 67 45 61 C45 67 48 72 52 72 C55 72 56 67 56 61 C57 67 60 72 63 71 C67 70 69 66 69 60 C71 66 73 70 76 69 C79 68 81 63 81 57 C83 49 81 40 77 32 C73 24 67 19 62 18 Z"
      fill="#c59b27"
      stroke="#854d0e"
      strokeWidth="1.2"
    />
    {/* Head turned to viewer's left (dexter) */}
    <path
      d="M49 14 C47 11 44 10 40 10 C37 10 34 12 33 14 L30 14 C31 16 33 18 36 18 C37 19 39 20 42 20 C45 20 48 18 49 14 Z"
      fill="#c59b27"
      stroke="#854d0e"
      strokeWidth="1"
    />
    <circle cx="37" cy="13" r="1.2" fill="#451a03" />
    {/* Heraldic Shield on Eagle's Breast */}
    <path
      d="M42 32 L58 32 C58 46 54 56 50 62 C46 56 42 46 42 32 Z"
      fill="#ffffff"
      stroke="#854d0e"
      strokeWidth="1.6"
    />
    {/* Shield Stripes (Egyptian Tricolor Motif) */}
    <rect x="44" y="34" width="3.5" height="20" fill="#dc2626" opacity="0.85" />
    <rect x="48.5" y="34" width="3" height="24" fill="#ffffff" />
    <rect x="52.5" y="34" width="3.5" height="20" fill="#1e293b" />
    {/* Talons */}
    <path
      d="M38 72 L44 72 L42 77 L36 77 Z M56 72 L62 72 L64 77 L58 77 Z"
      fill="#a16207"
      stroke="#713f12"
      strokeWidth="0.8"
    />
    {/* Base Cartouche / Scroll */}
    <rect
      x="30"
      y="76"
      width="40"
      height="8"
      rx="2"
      fill="#eab308"
      stroke="#854d0e"
      strokeWidth="1.2"
    />
    <line x1="34" y1="80" x2="66" y2="80" stroke="#713f12" strokeWidth="0.8" strokeDasharray="3 1.5" />
  </svg>
);

/**
 * Authentic Circular Republic Seal (خاتم شعار الجمهورية المعتمد)
 * Red circular embossed stamp of the Egyptian General Administration of Examinations.
 */
const RepublicCircularSeal: React.FC<{ serial: string; lang: 'ar' | 'en' }> = ({ serial, lang }) => {
  const textPathId = useId();
  return (
    <div className="relative flex flex-col items-center justify-center text-center select-none print-cert-seal">
      <svg
        viewBox="0 0 140 140"
        width="110"
        height="110"
        className="transform -rotate-6 filter drop-shadow-xs"
        style={{ color: '#b91c1c' }}
      >
        {/* Double Circular Outer Rim */}
        <circle cx="70" cy="70" r="66" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="70" cy="70" r="61" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="70" cy="70" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" />

        {/* Circular Curved Text */}
        <defs>
          <path
            id={textPathId}
            d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
          />
        </defs>
        <text fontSize="8.5" fontWeight="bold" fill="currentColor" letterSpacing="1">
          <textPath href={`#${textPathId}`} startOffset="0%">
            {lang === 'ar'
              ? '★ جمهورية مصر العربية ★ وزارة التربية والتعليم والتعليم الفني ★ الإدارة العامة للامتحانات ★'
              : '★ ARAB REPUBLIC OF EGYPT ★ MINISTRY OF EDUCATION ★ EXAMINATIONS SECTOR ★'}
          </textPath>
        </text>

        {/* Central Eagle Silhouette & Stamp Text */}
        <g transform="translate(48, 48) scale(0.44)">
          <path
            d="M50 18 C46 16 42 17 38 20 C34 23 28 29 24 38 C20 47 18 57 20 66 C21 71 24 74 28 73 C31 72 32 67 34 62 C33 69 36 74 40 73 C43 72 44 67 45 61 C45 67 48 72 52 72 C55 72 56 67 56 61 C57 67 60 72 63 71 C67 70 69 66 69 60 C71 66 73 70 76 69 C79 68 81 63 81 57 C83 49 81 40 77 32 C73 24 67 19 62 18 Z"
            fill="currentColor"
          />
        </g>
        <text
          x="70"
          y="93"
          textAnchor="middle"
          fontSize="7"
          fontWeight="900"
          fill="currentColor"
        >
          {lang === 'ar' ? 'كنترول الثانوية العامة' : 'THANAWEYA CONTROL'}
        </text>
        <text
          x="70"
          y="102"
          textAnchor="middle"
          fontSize="5.5"
          fontWeight="bold"
          fill="currentColor"
        >
          {serial}
        </text>
      </svg>
    </div>
  );
};

/**
 * Authentic Verification QR Code representation with corner locator blocks
 */
const VerificationQRCode: React.FC<{ code: string }> = ({ code }) => (
  <div className="flex flex-col items-center justify-center p-1.5 bg-white border border-slate-700 rounded-lg shadow-xs">
    <svg viewBox="0 0 60 60" width="62" height="62" className="text-slate-900">
      {/* Top Left Locator */}
      <rect x="2" y="2" width="16" height="16" fill="currentColor" />
      <rect x="5" y="5" width="10" height="10" fill="#ffffff" />
      <rect x="7" y="7" width="6" height="6" fill="currentColor" />

      {/* Top Right Locator */}
      <rect x="42" y="2" width="16" height="16" fill="currentColor" />
      <rect x="45" y="5" width="10" height="10" fill="#ffffff" />
      <rect x="47" y="7" width="6" height="6" fill="currentColor" />

      {/* Bottom Left Locator */}
      <rect x="2" y="42" width="16" height="16" fill="currentColor" />
      <rect x="5" y="45" width="10" height="10" fill="#ffffff" />
      <rect x="7" y="47" width="6" height="6" fill="currentColor" />

      {/* Timing Patterns */}
      <line x1="20" y1="9" x2="40" y2="9" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="9" y1="20" x2="9" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />

      {/* Synthetic Data Pixels */}
      <rect x="22" y="22" width="4" height="4" fill="currentColor" />
      <rect x="28" y="22" width="4" height="4" fill="currentColor" />
      <rect x="34" y="22" width="4" height="4" fill="currentColor" />
      <rect x="22" y="28" width="4" height="4" fill="currentColor" />
      <rect x="34" y="28" width="4" height="4" fill="currentColor" />
      <rect x="28" y="34" width="4" height="4" fill="currentColor" />
      <rect x="22" y="40" width="4" height="4" fill="currentColor" />
      <rect x="34" y="40" width="4" height="4" fill="currentColor" />
      <rect x="42" y="24" width="4" height="4" fill="currentColor" />
      <rect x="48" y="30" width="4" height="4" fill="currentColor" />
      <rect x="44" y="38" width="4" height="4" fill="currentColor" />
      <rect x="52" y="44" width="4" height="4" fill="currentColor" />
      <rect x="24" y="48" width="4" height="4" fill="currentColor" />
      <rect x="30" y="52" width="4" height="4" fill="currentColor" />
      <rect x="38" y="50" width="4" height="4" fill="currentColor" />
      <rect x="44" y="52" width="4" height="4" fill="currentColor" />
      <rect x="50" y="52" width="4" height="4" fill="currentColor" />
    </svg>
    <span className="text-[7.5pt] font-mono font-bold text-slate-700 mt-0.5 tracking-tighter">
      {code}
    </span>
  </div>
);

/**
 * Authentic Egyptian Ministry Official Performance Certificate & Grade Statement Component
 */
export const OfficialPerformanceCertificate: React.FC<OfficialPerformanceCertificateProps> = ({
  studentName: initialStudentName,
  seatingNumber: initialSeatingNumber,
  schoolName: initialSchoolName,
  directorateName: initialDirectorateName,
  subjectId = 'general',
  subjectNameAr,
  subjectNameEn,
  branchNameAr = 'الشعبة العلمية (علوم ورياضيات)',
  branchNameEn = 'Scientific Division',
  academicYear = '2024 / 2025',
  sessionTitleAr = 'الدور الأول (يونيو)',
  sessionTitleEn = 'First Session (June)',
  formCodeAr = 'نموذج (أ) - كود 101',
  formCodeEn = 'Form A - Code 101',
  scoreReport,
  cohortReport,
  score,
  totalQuestions,
  scorePct,
  gradeLabelAr = 'اجتياز معتمد',
  gradeLabelEn = 'Certified Pass',
  timeTakenSeconds,
  testDate = new Date(),
  onClose,
  lang,
}) => {
  // Local editable student metadata backed by localStorage
  const [studentName, setStudentName] = useState<string>(() => {
    return (
      initialStudentName ||
      localStorage.getItem('eg_exam_student_name') ||
      localStorage.getItem('eg_exam_teacher_name') ||
      (lang === 'ar' ? 'طالب الثانوية العامة المتفوق' : 'Thanaweya High-Achieving Student')
    );
  });

  const [seatingNumber, setSeatingNumber] = useState<string>(() => {
    return (
      initialSeatingNumber ||
      localStorage.getItem('eg_exam_seat_number') ||
      '1048592'
    );
  });

  const [schoolName, setSchoolName] = useState<string>(() => {
    return (
      initialSchoolName ||
      localStorage.getItem('eg_exam_school_name') ||
      (lang === 'ar' ? 'مدرسة المتفوقين الرسمية للغات (STEM)' : 'Excellence Official Secondary School')
    );
  });

  const [directorateName, setDirectorateName] = useState<string>(() => {
    return (
      initialDirectorateName ||
      localStorage.getItem('eg_exam_directorate_name') ||
      (lang === 'ar' ? 'مديرية التربية والتعليم بالقاهرة' : 'Cairo Educational Directorate')
    );
  });

  const [isEditingMetadata, setIsEditingMetadata] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Synchronize localStorage on metadata edit
  const handleSaveMetadata = () => {
    localStorage.setItem('eg_exam_student_name', studentName);
    localStorage.setItem('eg_exam_seat_number', seatingNumber);
    localStorage.setItem('eg_exam_school_name', schoolName);
    localStorage.setItem('eg_exam_directorate_name', directorateName);
    setIsEditingMetadata(false);
  };

  // Certificate Serial Number
  const certificateSerial = `EGY-MOE-TH-${testDate.getFullYear()}-${Math.abs(
    seatingNumber.split('').reduce((acc, char) => acc * 31 + char.charCodeAt(0), 7)
  )
    .toString(16)
    .toUpperCase()
    .slice(0, 6)}`;

  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState<boolean>(false);

  // Auto-register certificate in central digital accreditation registry
  useEffect(() => {
    const certRecord: OfficialCertificateRecord = {
      certificateSerial,
      verificationHash: generateCertificateVerificationHash(
        certificateSerial,
        seatingNumber,
        scorePct,
        testDate.getTime()
      ),
      studentName,
      seatingNumber,
      schoolName,
      directorateName,
      subjectId,
      subjectNameAr,
      subjectNameEn,
      branchNameAr,
      branchNameEn,
      academicYear,
      sessionTitleAr,
      sessionTitleEn,
      formCodeAr,
      formCodeEn,
      score,
      totalQuestions,
      scorePct,
      timeTakenSeconds,
      testDateIso: testDate.toISOString(),
      gradeLabelAr,
      gradeLabelEn,
      distinctionTier: getDistinctionTierFromPct(scorePct),
      scoreReport,
      cohortReport,
      isAccredited: true,
      registeredAt: Date.now(),
    };
    saveOfficialCertificate(certRecord);
  }, [
    certificateSerial,
    seatingNumber,
    studentName,
    schoolName,
    directorateName,
    subjectId,
    subjectNameAr,
    subjectNameEn,
    branchNameAr,
    branchNameEn,
    academicYear,
    sessionTitleAr,
    sessionTitleEn,
    formCodeAr,
    formCodeEn,
    score,
    totalQuestions,
    scorePct,
    timeTakenSeconds,
    testDate,
    gradeLabelAr,
    gradeLabelEn,
    scoreReport,
    cohortReport,
  ]);

  // Formatted date
  const formattedDateAr = new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(testDate);

  const formattedDateEn = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(testDate);

  // Distinction formula
  const distinctionTier = (() => {
    if (scorePct >= 92) {
      return {
        labelAr: 'مرتبة الشرف الأولى والامتياز الجمهوري 🏆',
        labelEn: 'Republic Honors Distinction (Summa Cum Laude)',
        bg: 'bg-amber-500/10 border-amber-500/40 text-amber-900',
        badge: 'امتياز مع مرتبة الشرف الأولى',
      };
    } else if (scorePct >= 80) {
      return {
        labelAr: 'مرتبة الشرف الثانية والتقدير الممتاز 🌟',
        labelEn: 'High Distinction with Honors (Magna Cum Laude)',
        bg: 'bg-emerald-500/10 border-emerald-500/40 text-emerald-900',
        badge: 'جيد جداً مع مرتبة الشرف',
      };
    } else if (scorePct >= 65) {
      return {
        labelAr: 'اجتياز معياري وتقدير جيد مرتفع 👍',
        labelEn: 'Standard Pass with Merit (Cum Laude)',
        bg: 'bg-indigo-500/10 border-indigo-500/40 text-indigo-900',
        badge: 'جيد بمعيار الكفاءة',
      };
    } else if (scorePct >= 50) {
      return {
        labelAr: 'اجتياز الحد الأدنى المقرر للنجاح 📋',
        labelEn: 'Official Minimum Passing Grade',
        bg: 'bg-slate-500/10 border-slate-500/40 text-slate-800',
        badge: 'ناجح بالحد المقرر',
      };
    } else {
      return {
        labelAr: 'دون الحد الأدنى للنجاح (بحاجة لاختبار علاجي) ⚠️',
        labelEn: 'Below Passing Threshold (Remediation Required)',
        bg: 'bg-rose-500/10 border-rose-500/40 text-rose-900',
        badge: 'بحاجة للدور الثاني',
      };
    }
  })();

  // Dedicated single-page certificate print trigger
  const handlePrintCertificate = () => {
    document.body.classList.add('print-cert-only');
    const handleAfterPrint = () => {
      document.body.classList.remove('print-cert-only');
      window.removeEventListener('afterprint', handleAfterPrint);
    };
    window.addEventListener('afterprint', handleAfterPrint);
    window.print();
    setTimeout(() => {
      document.body.classList.remove('print-cert-only');
    }, 2000);
  };

  // Copy verification code and summary
  const handleCopyVerification = async () => {
    const summary = `${
      lang === 'ar' ? 'بيان درجات رسمي معتمد' : 'Certified Official Grade Transcript'
    } - ${lang === 'ar' ? subjectNameAr : subjectNameEn}
${lang === 'ar' ? 'الطالب:' : 'Student:'} ${studentName} (${lang === 'ar' ? 'رقم الجلوس:' : 'Seat:'} ${seatingNumber})
${lang === 'ar' ? 'الدرجة المحرزة:' : 'Earned Score:'} ${
      scoreReport ? `${scoreReport.earnedMarks} / ${scoreReport.totalMarks}` : `${score} / ${totalQuestions}`
    } (${scorePct}%) - ${distinctionTier.badge}
${cohortReport ? `${lang === 'ar' ? 'الرتبة المئوية بالجمهورية:' : 'Percentile:'} ${cohortReport.percentileRank}%\n` : ''}${
      lang === 'ar' ? 'رقم التحقق:' : 'Verification Serial:'
    } ${certificateSerial}`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div className="space-y-4 my-6">
      {/* Interactive Top Toolbar (Hidden during printing) */}
      <div className="no-print bg-slate-900/95 border border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-black text-slate-100">
                {lang === 'ar'
                  ? 'شهادة التقدير وبيان الدرجات الرسمي المعتمد'
                  : 'Official Performance Certificate & Certified Transcript'}
              </h4>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {lang === 'ar' ? 'نسخة طبق الأصل A4' : 'A4 Authentic Document'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'ar'
                ? 'موثقة ومطابقة لمعايير وزارة التربية والتعليم والتعليم الفني والإدارة العامة للامتحانات.'
                : 'Certified to Egyptian Ministry of Education & Examinations Sector blueprints.'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsEditingMetadata(!isEditingMetadata)}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'تعديل البيانات' : 'Edit Details'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsVerificationModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 text-xs font-bold border border-emerald-500/40 flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'ar' ? 'فحص الاعتماد الرقمي' : 'Verify Accreditation'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyVerification}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-all"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">{lang === 'ar' ? 'تم النسخ!' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === 'ar' ? 'نسخ رقم التحقق' : 'Share Verification'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrintCertificate}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <Printer className="w-4 h-4 text-slate-950" />
            <span>{lang === 'ar' ? 'طباعة الشهادة الرسمية (A4)' : 'Print Official Certificate (A4)'}</span>
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 cursor-pointer transition-colors"
              title={lang === 'ar' ? 'إغلاق المعاينة' : 'Close Preview'}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Inline Candidate Details Editor Drawer (Hidden during print) */}
      {isEditingMetadata && (
        <div className="no-print bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <Edit3 className="w-4 h-4" />
              {lang === 'ar' ? 'تخصيص البيانات الرسمية للطالب والمدرسة:' : 'Customize Official Student & School Metadata:'}
            </span>
            <button
              type="button"
              onClick={handleSaveMetadata}
              className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'حفظ البيانات' : 'Save'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">{lang === 'ar' ? 'اسم الطالب الرباعي:' : 'Student Full Name:'}</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">{lang === 'ar' ? 'رقم الجلوس (7 أرقام):' : 'Seating Number (7 Digits):'}</label>
              <input
                type="text"
                value={seatingNumber}
                onChange={(e) => setSeatingNumber(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 font-mono focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">{lang === 'ar' ? 'المدرسة:' : 'School Name:'}</label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">{lang === 'ar' ? 'الإدارة التعليمية:' : 'Educational Directorate:'}</label>
              <input
                type="text"
                value={directorateName}
                onChange={(e) => setDirectorateName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------
          AUTHENTIC A4 OFFICIAL MINISTERIAL PERFORMANCE CERTIFICATE
          Styled for onscreen majesty and pure high-resolution A4 print fidelity
          ---------------------------------------------------------------------------------- */}
      <div
        id="official-ministerial-certificate"
        className="print-official-certificate bg-white text-slate-900 rounded-2xl sm:rounded-3xl border-4 sm:border-8 border-amber-900/90 shadow-2xl p-4 sm:p-8 relative overflow-hidden space-y-4"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Ornate Classical Outer-Inner Border Framing */}
        <div className="absolute inset-1.5 sm:inset-3 border-2 border-amber-800/80 pointer-events-none rounded-xl" />
        <div className="absolute inset-2.5 sm:inset-5 border border-dashed border-amber-700/60 pointer-events-none rounded-lg" />

        {/* 4 Corner Classical Arabesque Motifs */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-7 h-7 sm:w-10 sm:h-10 border-t-3 border-l-3 border-amber-800 pointer-events-none" />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 border-t-3 border-r-3 border-amber-800 pointer-events-none" />
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-7 h-7 sm:w-10 sm:h-10 border-b-3 border-l-3 border-amber-800 pointer-events-none" />
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 border-b-3 border-r-3 border-amber-800 pointer-events-none" />

        {/* Center Authentic Watermark (Saladin Eagle Crest with Low Opacity) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.045] select-none z-0">
          <SaladinEagleCrest size={400} />
        </div>

        {/* Content Container (z-10 above watermark) */}
        <div className="relative z-10 space-y-4">
          {/* Ministerial Header Trinity */}
          <div className="border-b-2 border-amber-900/40 pb-3">
            <div className="grid grid-cols-12 gap-2 items-center">
              {/* Right Column: Ministry of Education Official Masthead */}
              <div className="col-span-4 text-right rtl:text-right ltr:text-left space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <EgyptFlag className="h-4 w-auto rounded-[2px]" />
                  <span className="text-[11px] sm:text-xs font-black text-slate-900 tracking-tight">
                    {lang === 'ar' ? 'جمهورية مصر العربية' : 'Arab Republic of Egypt'}
                  </span>
                </div>
                <h5 className="text-[10px] sm:text-xs font-black text-amber-950">
                  {lang === 'ar' ? 'وزارة التربية والتعليم والتعليم الفني' : 'Ministry of Education & Technical Education'}
                </h5>
                <p className="text-[9px] sm:text-[10.5px] font-bold text-slate-700">
                  {lang === 'ar' ? 'قطاع التعليم العام — الإدارة العامة للامتحانات' : 'General Education Sector — Central Exams Admin'}
                </p>
                <p className="text-[8.5px] sm:text-[10px] font-bold text-slate-600">
                  {lang === 'ar' ? 'لجنة النظام والمراقبة لامتحان شهادة إتمام الدراسة الثانوية العامة' : 'Thanaweya Amma System & Control Committee'}
                </p>
              </div>

              {/* Center Column: Golden Eagle & Certificate Calligraphic Banner */}
              <div className="col-span-4 flex flex-col items-center justify-center text-center">
                <SaladinEagleCrest size={52} className="drop-shadow-xs" />
                <h3 className="text-base sm:text-xl font-black text-amber-950 tracking-tight mt-1">
                  {lang === 'ar' ? 'شهادة تفوق وبيان درجات رسمي معتمد' : 'Certificate of Merit & Certified Transcript'}
                </h3>
                <p className="text-[9.5px] sm:text-[11px] font-bold text-slate-700">
                  {lang === 'ar'
                    ? 'امتحان شهادة إتمام الدراسة الثانوية العامة (نظام التقييم الإلكتروني وبابل شيت)'
                    : 'Certificate of General Secondary Education Completion (National MoE Blueprint)'}
                </p>
                <div className="mt-1 px-3 py-0.5 rounded-full border border-amber-800 bg-amber-100/70 text-amber-950 text-[9px] sm:text-[10.5px] font-black tracking-wide">
                  {lang === 'ar' ? distinctionTier.labelAr : distinctionTier.labelEn}
                </div>
              </div>

              {/* Left Column: Official Administrative Identifiers & QR Code */}
              <div className="col-span-4 flex flex-col items-end rtl:items-start ltr:items-end text-[9px] sm:text-[10.5px] space-y-0.5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsVerificationModalOpen(true)}
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                    title={lang === 'ar' ? 'فحص الاعتماد الرقمي والختم الإلكتروني' : 'Verify Digital Accreditation & Seal'}
                  >
                    <VerificationQRCode code={certificateSerial} />
                    <span className="text-[7.5px] font-bold text-emerald-800 bg-emerald-100/90 px-1.5 py-0.5 rounded-sm border border-emerald-300 group-hover:bg-emerald-200 transition-colors">
                      {lang === 'ar' ? 'فحص الاعتماد 🛡️' : 'Verify 🛡️'}
                    </span>
                  </button>
                  <div className="space-y-0.5 text-right rtl:text-left ltr:text-right">
                    <div>
                      <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'العام الدراسي: ' : 'Academic Year: '}</span>
                      <span className="font-bold text-slate-900">{academicYear}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'الدور: ' : 'Session: '}</span>
                      <span className="font-bold text-slate-900">{lang === 'ar' ? sessionTitleAr : sessionTitleEn}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'كود النموذج: ' : 'Form Code: '}</span>
                      <span className="font-black text-amber-900">{lang === 'ar' ? formCodeAr : formCodeEn}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'مسلسل الاعتماد: ' : 'Serial No: '}</span>
                      <span className="font-mono font-bold text-slate-800 text-[8.5px]">{certificateSerial}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Identity & Examination Metadata Matrix */}
          <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-3 sm:p-4 text-xs font-bold text-slate-800 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] sm:text-xs">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-amber-800 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[9.5px] font-normal">{lang === 'ar' ? 'اسم الطالب:' : 'Student Name:'}</span>
                  <span className="font-black text-slate-950">{studentName}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-amber-800 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[9.5px] font-normal">{lang === 'ar' ? 'رقم الجلوس المعتمد:' : 'Certified Seating Number:'}</span>
                  <span className="font-mono font-black text-amber-950 text-sm">
                    {lang === 'ar' ? toHindiDigits(seatingNumber) : seatingNumber}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[9.5px] font-normal">{lang === 'ar' ? 'المادة المقررة:' : 'Subject:'}</span>
                  <span className="font-black text-slate-950">
                    {lang === 'ar' ? subjectNameAr : subjectNameEn}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <School className="w-4 h-4 text-amber-800 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[9.5px] font-normal">{lang === 'ar' ? 'الشعبة والمدرسة:' : 'Track & School:'}</span>
                  <span className="font-semibold text-slate-900 truncate block max-w-[160px]" title={`${schoolName} - ${directorateName}`}>
                    {lang === 'ar' ? branchNameAr : branchNameEn} • {schoolName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Official Grade & Score Transcript Table */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-black text-amber-950">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-800" />
                {lang === 'ar' ? 'جدول رصد الدرجات والتقييم المعياري الرسمي:' : 'Official Certified Score & Assessment Transcript:'}
              </span>
              <span className="text-[10px] text-slate-600 font-mono">
                {lang === 'ar'
                  ? `زمن الإجابة المستغرق: ${toHindiDigits(Math.floor(timeTakenSeconds / 60))} دقيقة و${toHindiDigits(timeTakenSeconds % 60)} ثانية`
                  : `Elapsed Time: ${Math.floor(timeTakenSeconds / 60)}m ${timeTakenSeconds % 60}s`}
              </span>
            </div>

            <div className="overflow-x-auto border-2 border-slate-700 rounded-xl bg-white">
              <table className="w-full text-center border-collapse print-cert-table text-[11px] sm:text-xs">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-2 text-right rtl:text-right ltr:text-left">{lang === 'ar' ? 'بند التقييم والأسئلة' : 'Assessment Component'}</th>
                    <th className="p-2">{lang === 'ar' ? 'عدد الأسئلة' : 'Count'}</th>
                    <th className="p-2">{lang === 'ar' ? 'الدرجة العظمى' : 'Max Marks'}</th>
                    <th className="p-2">{lang === 'ar' ? 'الدرجة الصغرى للنجاح' : 'Pass Min (50%)'}</th>
                    <th className="p-2">{lang === 'ar' ? 'الدرجة المحرزة' : 'Earned Marks'}</th>
                    <th className="p-2">{lang === 'ar' ? 'نسبة الإتقان' : 'Accuracy %'}</th>
                    <th className="p-2">{lang === 'ar' ? 'التقدير المعتمد' : 'Certified Grade'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 font-semibold text-slate-800">
                  {scoreReport ? (
                    <>
                      {/* Section 1 */}
                      <tr className="hover:bg-slate-50">
                        <td className="p-2 text-right rtl:text-right ltr:text-left font-bold text-slate-900">
                          {lang === 'ar'
                            ? 'القسم الأول: أسئلة الفهم والتطبيق المباشر (درجة واحدة لكل مفردة)'
                            : 'Section 1: Direct Understanding & Application (1 Mark per item)'}
                        </td>
                        <td className="p-2 font-mono">
                          {lang === 'ar' ? toHindiDigits(scoreReport.section1TotalMarks) : scoreReport.section1TotalMarks}
                        </td>
                        <td className="p-2 font-mono font-bold">
                          {lang === 'ar' ? toHindiDigits(scoreReport.section1TotalMarks) : scoreReport.section1TotalMarks}
                        </td>
                        <td className="p-2 font-mono text-slate-600">
                          {lang === 'ar' ? toHindiDigits(Math.ceil(scoreReport.section1TotalMarks / 2)) : Math.ceil(scoreReport.section1TotalMarks / 2)}
                        </td>
                        <td className="p-2 font-mono font-black text-emerald-700 text-sm">
                          {lang === 'ar' ? toHindiDigits(scoreReport.section1EarnedMarks) : scoreReport.section1EarnedMarks}
                        </td>
                        <td className="p-2 font-mono font-bold">
                          {lang === 'ar'
                            ? toHindiDigits(
                                scoreReport.section1TotalMarks > 0
                                  ? Math.round((scoreReport.section1EarnedMarks / scoreReport.section1TotalMarks) * 100)
                                  : 0
                              )
                            : scoreReport.section1TotalMarks > 0
                            ? Math.round((scoreReport.section1EarnedMarks / scoreReport.section1TotalMarks) * 100)
                            : 0}%
                        </td>
                        <td className="p-2 text-emerald-800 font-bold">
                          {scoreReport.section1EarnedMarks / (scoreReport.section1TotalMarks || 1) >= 0.85
                            ? (lang === 'ar' ? 'ممتاز' : 'Excellent')
                            : scoreReport.section1EarnedMarks / (scoreReport.section1TotalMarks || 1) >= 0.65
                            ? (lang === 'ar' ? 'جيد جداً' : 'Very Good')
                            : (lang === 'ar' ? 'مقبول' : 'Pass')}
                        </td>
                      </tr>

                      {/* Section 2 */}
                      <tr className="hover:bg-slate-50">
                        <td className="p-2 text-right rtl:text-right ltr:text-left font-bold text-slate-900">
                          {lang === 'ar'
                            ? 'القسم الثاني: أسئلة مهارات التفكير العليا HOTS (درجتان لكل مفردة)'
                            : 'Section 2: High-Order Thinking Skills HOTS (2 Marks per item)'}
                        </td>
                        <td className="p-2 font-mono">
                          {lang === 'ar' ? toHindiDigits(Math.round(scoreReport.section2TotalMarks / 2)) : Math.round(scoreReport.section2TotalMarks / 2)}
                        </td>
                        <td className="p-2 font-mono font-bold">
                          {lang === 'ar' ? toHindiDigits(scoreReport.section2TotalMarks) : scoreReport.section2TotalMarks}
                        </td>
                        <td className="p-2 font-mono text-slate-600">
                          {lang === 'ar' ? toHindiDigits(Math.ceil(scoreReport.section2TotalMarks / 2)) : Math.ceil(scoreReport.section2TotalMarks / 2)}
                        </td>
                        <td className="p-2 font-mono font-black text-amber-700 text-sm">
                          {lang === 'ar' ? toHindiDigits(scoreReport.section2EarnedMarks) : scoreReport.section2EarnedMarks}
                        </td>
                        <td className="p-2 font-mono font-bold">
                          {lang === 'ar'
                            ? toHindiDigits(
                                scoreReport.section2TotalMarks > 0
                                  ? Math.round((scoreReport.section2EarnedMarks / scoreReport.section2TotalMarks) * 100)
                                  : 0
                              )
                            : scoreReport.section2TotalMarks > 0
                            ? Math.round((scoreReport.section2EarnedMarks / scoreReport.section2TotalMarks) * 100)
                            : 0}%
                        </td>
                        <td className="p-2 text-amber-800 font-bold">
                          {scoreReport.section2EarnedMarks / (scoreReport.section2TotalMarks || 1) >= 0.85
                            ? (lang === 'ar' ? 'ممتاز' : 'Excellent')
                            : scoreReport.section2EarnedMarks / (scoreReport.section2TotalMarks || 1) >= 0.65
                            ? (lang === 'ar' ? 'جيد جداً' : 'Very Good')
                            : (lang === 'ar' ? 'مقبول' : 'Pass')}
                        </td>
                      </tr>
                    </>
                  ) : (
                    <tr className="hover:bg-slate-50">
                      <td className="p-2 text-right rtl:text-right ltr:text-left font-bold text-slate-900">
                        {lang === 'ar' ? 'المفردات الاختبارية الشاملة' : 'Comprehensive Assessment Items'}
                      </td>
                      <td className="p-2 font-mono">{lang === 'ar' ? toHindiDigits(totalQuestions) : totalQuestions}</td>
                      <td className="p-2 font-mono font-bold">{lang === 'ar' ? toHindiDigits(totalQuestions) : totalQuestions}</td>
                      <td className="p-2 font-mono text-slate-600">{lang === 'ar' ? toHindiDigits(Math.ceil(totalQuestions / 2)) : Math.ceil(totalQuestions / 2)}</td>
                      <td className="p-2 font-mono font-black text-emerald-700 text-sm">{lang === 'ar' ? toHindiDigits(score) : score}</td>
                      <td className="p-2 font-mono font-bold">{lang === 'ar' ? toHindiDigits(scorePct) : scorePct}%</td>
                      <td className="p-2 text-emerald-800 font-bold">{distinctionTier.badge}</td>
                    </tr>
                  )}

                  {/* Summary Row */}
                  <tr className="bg-amber-100/60 font-black text-slate-950 border-t-2 border-slate-700">
                    <td className="p-2.5 text-right rtl:text-right ltr:text-left text-xs sm:text-sm font-black text-amber-950">
                      {lang === 'ar' ? 'المجموع الكلي المعتمد لمادة الامتحان:' : 'Total Certified Subject Score:'}
                    </td>
                    <td className="p-2.5 font-mono text-xs sm:text-sm">
                      {lang === 'ar' ? toHindiDigits(scoreReport?.totalQuestions || totalQuestions) : (scoreReport?.totalQuestions || totalQuestions)}
                    </td>
                    <td className="p-2.5 font-mono text-xs sm:text-sm">
                      {lang === 'ar' ? toHindiDigits(scoreReport?.totalMarks || totalQuestions) : (scoreReport?.totalMarks || totalQuestions)}
                    </td>
                    <td className="p-2.5 font-mono text-xs sm:text-sm text-slate-700">
                      {lang === 'ar' ? toHindiDigits(Math.ceil((scoreReport?.totalMarks || totalQuestions) / 2)) : Math.ceil((scoreReport?.totalMarks || totalQuestions) / 2)}
                    </td>
                    <td className="p-2.5 font-mono text-base font-black text-amber-950">
                      {lang === 'ar'
                        ? toHindiDigits(scoreReport?.earnedMarks || score)
                        : (scoreReport?.earnedMarks || score)}
                    </td>
                    <td className="p-2.5 font-mono text-sm font-black text-amber-950">
                      {lang === 'ar' ? toHindiDigits(scorePct) : scorePct}%
                    </td>
                    <td className="p-2.5 text-xs sm:text-sm font-black text-amber-950">
                      {distinctionTier.badge}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* National Republic Cohort Statistical Benchmark (if available) */}
          {cohortReport && (
            <div className="bg-cyan-50/70 border border-cyan-300 rounded-xl p-3 sm:p-3.5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-200 pb-1.5">
                <span className="text-xs font-black text-cyan-950 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-cyan-700" />
                  {lang === 'ar'
                    ? 'الموقع الإحصائي المعياري مقارنة بعموم طلاب الجمهورية:'
                    : 'National Republic Cohort Statistical Benchmark:'}
                </span>
                <span className="text-xs font-black text-cyan-900 bg-cyan-100 px-2.5 py-0.5 rounded-full border border-cyan-300">
                  {lang === 'ar' ? cohortReport.tierBadgeAr : cohortReport.tierBadgeEn}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white p-2 rounded-lg border border-cyan-200">
                  <span className="text-[10px] text-slate-600 block">{lang === 'ar' ? 'الرتبة المئوية بالجمهورية' : 'Percentile Rank'}</span>
                  <span className="text-base font-black text-cyan-700 font-mono">
                    {lang === 'ar' ? toHindiDigits(cohortReport.percentileRank) : cohortReport.percentileRank}%
                  </span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-cyan-200">
                  <span className="text-[10px] text-slate-600 block">{lang === 'ar' ? 'متوسط درجات الجمهورية' : 'National Mean'}</span>
                  <span className="text-base font-black text-slate-900 font-mono">
                    {lang === 'ar' ? toHindiDigits(cohortReport.nationalAverage) : cohortReport.nationalAverage}
                  </span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-cyan-200">
                  <span className="text-[10px] text-slate-600 block">{lang === 'ar' ? 'الفارق عن المتوسط' : 'Delta from Mean'}</span>
                  <span className={`text-base font-black font-mono ${cohortReport.differenceFromAverage >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {cohortReport.differenceFromAverage >= 0 ? '+' : ''}
                    {lang === 'ar' ? toHindiDigits(cohortReport.differenceFromAverage) : cohortReport.differenceFromAverage}
                  </span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-cyan-200">
                  <span className="text-[10px] text-slate-600 block">{lang === 'ar' ? 'شريحة التفوق' : 'Cohort Standing'}</span>
                  <span className="text-xs font-black text-indigo-900 block mt-1">
                    {cohortReport.isTopTenCandidate
                      ? (lang === 'ar' ? 'شريحة أوائل الجمهورية 🏆' : 'Republic Top 1%')
                      : cohortReport.isDistinction
                      ? (lang === 'ar' ? 'شريحة الامتياز 🌟' : 'Distinction Tier')
                      : (lang === 'ar' ? 'فوق المتوسط العام 👍' : 'Above Average')}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bloom's Cognitive Competency Attestation Matrix */}
          {scoreReport?.bloomDiagnostics && (
            <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span>{lang === 'ar' ? 'تقييم الكفايات المعرفية لبلوم (Bloom’s Cognitive Attestation):' : 'Bloom’s Cognitive Competency Profile:'}</span>
                <span className="font-mono text-amber-900 font-black">
                  {lang === 'ar'
                    ? `مؤشر النضج المعرفي العام: ${toHindiDigits(scoreReport.bloomDiagnostics.overallCognitiveIndex)}%`
                    : `Cognitive Maturity Index: ${scoreReport.bloomDiagnostics.overallCognitiveIndex}%`}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10.5px]">
                {(['remembering', 'understanding', 'application', 'analysis'] as const).map((lvl) => {
                  const scoreObj = scoreReport.bloomDiagnostics.levels[lvl];
                  const info = scoreObj.info;
                  return (
                    <div key={lvl} className="bg-white p-1.5 rounded-lg border border-slate-200">
                      <span className="text-slate-600 font-semibold block text-[10px]">
                        {lang === 'ar' ? info.shortLabelAr : info.shortLabelEn}
                      </span>
                      <span className="font-mono font-black text-slate-900 text-xs">
                        {lang === 'ar' ? toHindiDigits(scoreObj.accuracyPct) : scoreObj.accuracyPct}%
                      </span>
                      <span className="text-[9px] text-slate-500 font-mono block">
                        ({lang === 'ar' ? `${toHindiDigits(scoreObj.earnedMarks)}/${toHindiDigits(scoreObj.totalMarks)}` : `${scoreObj.earnedMarks}/${scoreObj.totalMarks}`})
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Official Ministerial Legal Certification & Attestation Text */}
          <div className="text-center px-4 py-2 border-y border-amber-900/30 text-xs sm:text-[12.5px] leading-relaxed text-slate-800 font-medium">
            <p>
              {lang === 'ar'
                ? `تشهد وزارة التربية والتعليم والتعليم الفني — الإدارة العامة للامتحانات بأن الطالب الموضح بياناته بعاليه قد اجتاز بنجاح واقتدار امتحان شهادة إتمام الدراسة الثانوية العامة في مادة (${subjectNameAr}) وفق المعايير والضوابط التقييمية الوزارية المعتمدة، وقد اعتمدت درجاته ورتبته المئوية بعد تدقيق أوراق إجابة البابل شيت والرصد الإلكتروني بكنترول الثانوية العامة.`
                : `The Ministry of Education certifies that the student named above has completed the General Secondary Education Examination in (${subjectNameEn}) in strict compliance with ministerial assessment blueprints, and their certified grades have been officially endorsed by the Thanaweya Amma Examination Control.`}
            </p>
          </div>

          {/* Ministerial Signatures & Republic Seal Block */}
          <div className="pt-2">
            <div className="grid grid-cols-3 gap-2 items-center text-center text-xs">
              {/* Right Signature: System & Control Committee Member */}
              <div className="space-y-1">
                <p className="font-bold text-slate-900">{lang === 'ar' ? 'رئيس لجنة الرصد والمراجعة الإلكترونية' : 'Head of Digital Audit'}</p>
                <p className="text-[10px] text-slate-600">{lang === 'ar' ? 'عضو لجنة النظام والمراقبة (الكنترول)' : 'System & Control Board'}</p>
                <div className="font-serif italic text-sm text-slate-700 font-black pt-2 select-none tracking-widest">
                  {lang === 'ar' ? 'مـ. عـادل نـصـار' : 'M. Adel Nassar'}
                </div>
              </div>

              {/* Center Seal: Official Circular Seal of the Republic */}
              <div className="flex flex-col items-center justify-center">
                <RepublicCircularSeal serial={certificateSerial} lang={lang} />
                <div className="inline-flex items-center gap-1 mt-1 text-[8.5px] font-bold text-amber-900 border border-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                  <ShieldCheck className="w-3 h-3 text-emerald-700" />
                  <span>{lang === 'ar' ? 'وثيقة رسمية مؤمنة ومعتمدة' : 'Official Endorsed Document'}</span>
                </div>
              </div>

              {/* Left Signature: General Examination President & Minister */}
              <div className="space-y-1">
                <p className="font-bold text-slate-900">{lang === 'ar' ? 'رئيس عام امتحانات الثانوية العامة' : 'President of National Exams'}</p>
                <p className="text-[10px] text-slate-600">{lang === 'ar' ? 'يعتمد،، وزير التربية والتعليم والتعليم الفني' : 'Approved, Minister of Education'}</p>
                <div className="font-serif italic text-sm text-slate-700 font-black pt-2 select-none tracking-widest">
                  {lang === 'ar' ? 'أ.د. طـارق رشاد' : 'Prof. Tarek Rashad'}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security Barcode & Disclaimer Footnote */}
          <div className="border-t border-slate-300 pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] text-slate-500 font-medium">
            <div className="flex items-center gap-2 font-mono">
              <span className="font-black text-slate-700 tracking-wider">
                ||||| | |||| || |||||| | ||| ||||| |||| || |
              </span>
              <span>{certificateSerial}</span>
            </div>
            <div className="text-center sm:text-right rtl:sm:text-left">
              <span>
                {lang === 'ar'
                  ? `تحريراً في: ${formattedDateAr} م — أي كشط أو تعديل أو شطب يلغي هذه الشهادة.`
                  : `Issued on: ${formattedDateEn} — Any alteration or erasure invalidates this transcript.`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Accreditation Verification Modal */}
      {isVerificationModalOpen && (
        <CertificateVerificationModal
          isOpen={isVerificationModalOpen}
          initialSerial={certificateSerial}
          onClose={() => setIsVerificationModalOpen(false)}
          lang={lang}
        />
      )}
    </div>
  );
};

export default OfficialPerformanceCertificate;
