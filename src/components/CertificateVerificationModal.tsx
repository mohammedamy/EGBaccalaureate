import React, { useState, useEffect, useMemo } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  X,
  Sparkles,
  User,
  Award,
  TrendingUp,
  FileCheck,
  RotateCcw,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  getRegisteredCertificates,
  verifyCertificate,
  DEMO_VERIFIABLE_CERTIFICATES,
  type OfficialCertificateRecord,
  type CertificateVerificationResult,
} from '../services/certificateRegistryService';

export interface CertificateVerificationModalProps {
  initialSerial?: string;
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
  onViewCertificate?: (cert: OfficialCertificateRecord) => void;
}

export const CertificateVerificationModal: React.FC<CertificateVerificationModalProps> = ({
  initialSerial = '',
  isOpen,
  onClose,
  lang,
  onViewCertificate,
}) => {
  const isAr = lang === 'ar';
  const [inputSerial, setInputSerial] = useState<string>(initialSerial);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [registeredList, setRegisteredList] = useState<OfficialCertificateRecord[]>([]);

  useEffect(() => {
    if (isOpen) {
      setRegisteredList(getRegisteredCertificates());
      if (initialSerial) {
        setInputSerial(initialSerial);
      }
    }
  }, [isOpen, initialSerial]);

  // Verification result computed dynamically from inputSerial
  const verificationResult: CertificateVerificationResult = useMemo(() => {
    return verifyCertificate(inputSerial);
  }, [inputSerial]);

  if (!isOpen) return null;

  const handleSelectPreloaded = (serial: string) => {
    setInputSerial(serial);
  };

  const handleCopyVerificationCode = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2500);
    }
  };

  const cert = verificationResult.certificate;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Top Ministerial Gold Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700" />

        {/* Modal Header */}
        <div className="relative px-6 py-5 bg-gradient-to-b from-slate-800/90 to-slate-900 border-b border-slate-700/60 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <EgyptFlag className="w-5 h-3.5" />
                <span className="text-[11px] font-bold tracking-wider text-amber-400/90 uppercase">
                  {isAr
                    ? 'جمهورية مصر العربية — وزارة التربية والتعليم والتعليم الفني'
                    : 'Arab Republic of Egypt — Ministry of Education'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <span>
                  {isAr
                    ? 'بوابة التحقق الرقمي من شهادات وبيانات درجات الثانوية العامة'
                    : 'Digital Verification Portal for Thanaweya Amma Credentials'}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {isAr
                  ? 'منظومة الفحص والتحقق الفوري المعتمدة لكنترول الثانوية العامة ولجنة النظام والمراقبة'
                  : 'Central System & Control Examination Accreditation & Verification Hub'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Code Input Bar */}
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Search className="w-4 h-4 text-amber-400" />
                {isAr ? 'أدخل كود الشهادة أو الرقم المسلسل المعتمد:' : 'Enter Certificate Serial or Accreditation Code:'}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {isAr ? 'الصيغة: EGY-MOE-TH-YYYY-XXXXXX' : 'Format: EGY-MOE-TH-YYYY-XXXXXX'}
              </span>
            </label>

            <div className="relative">
              <input
                type="text"
                value={inputSerial}
                onChange={(e) => setInputSerial(e.target.value)}
                placeholder="EGY-MOE-TH-2024-C38A12"
                className="w-full px-4 py-3 bg-slate-950 border-2 border-slate-700 focus:border-amber-500 rounded-xl text-white font-mono text-sm tracking-wider uppercase placeholder:text-slate-600 focus:outline-hidden transition-all shadow-inner"
              />
              {inputSerial && (
                <button
                  onClick={() => setInputSerial('')}
                  className="absolute inset-y-0 ltr:right-3 rtl:left-3 flex items-center text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Select Preloaded & User Earned Certificates */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              {isAr ? 'الشهادات المسجلة المتاحة للتحقق السريع:' : 'Available Registered Certificates for Quick Inspection:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {registeredList.map((item) => (
                <button
                  key={item.certificateSerial}
                  onClick={() => handleSelectPreloaded(item.certificateSerial)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
                    inputSerial.trim().toUpperCase() === item.certificateSerial.toUpperCase()
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-xs'
                      : 'bg-slate-800/60 text-slate-300 border-slate-700/70 hover:border-slate-500'
                  }`}
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? item.subjectNameAr : item.subjectNameEn}</span>
                  <span className="font-mono text-[10px] text-slate-400">
                    ({item.certificateSerial.slice(-6)})
                  </span>
                </button>
              ))}

              <button
                onClick={() => handleSelectPreloaded(DEMO_VERIFIABLE_CERTIFICATES[0].certificateSerial)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-dashed border-amber-500/50 bg-amber-950/20 text-amber-300 hover:bg-amber-950/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'نموذج أوائل الجمهورية (فيزياء 2024)' : 'Top Honors Demo (Physics 2024)'}</span>
              </button>
            </div>
          </div>

          {/* Verification Result Card */}
          {inputSerial.trim() && (
            <div className="space-y-4">
              {verificationResult.isValid && cert ? (
                <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-emerald-500/50 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
                  {/* Verified Header Banner */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {isAr ? 'معتمد رسمياً' : 'Officially Accredited'}
                          </span>
                          <span className="text-xs text-slate-400">
                            {isAr ? 'كنترول الثانوية العامة' : 'Central Control Registry'}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                          {isAr ? verificationResult.verificationStatusAr : verificationResult.verificationStatusEn}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right sm:text-left rtl:sm:text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        {isAr ? 'كود التحقق والاعتماد' : 'Verification Serial'}
                      </div>
                      <div className="font-mono text-xs font-bold text-amber-400">
                        {cert.certificateSerial}
                      </div>
                    </div>
                  </div>

                  {/* Student & Examination Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {/* Candidate Info */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 space-y-2">
                      <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{isAr ? 'بيانات الطالب المعتمدة' : 'Verified Student Identity'}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-300">
                        <div>
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'الاسم:' : 'Name:'}</span>
                          <span className="font-bold text-white">{cert.studentName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'رقم الجلوس:' : 'Seat Number:'}</span>
                          <span className="font-mono font-bold text-amber-300">
                            {isAr ? toHindiDigits(cert.seatingNumber) : cert.seatingNumber}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'المدرسة:' : 'School:'}</span>
                          <span>{cert.schoolName}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'المديرية التعليمية:' : 'Directorate:'}</span>
                          <span>{cert.directorateName}</span>
                        </div>
                      </div>
                    </div>

                    {/* Exam Score & Academic Distinction */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 space-y-2">
                      <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                        <Award className="w-3.5 h-3.5" />
                        <span>{isAr ? 'المادة والتقدير الوزاري المعتمد' : 'Subject & Distinction Tier'}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-300">
                        <div className="col-span-2">
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'المادة والشعبة:' : 'Subject & Track:'}</span>
                          <span className="font-bold text-white">
                            {isAr ? cert.subjectNameAr : cert.subjectNameEn} ({isAr ? cert.branchNameAr : cert.branchNameEn})
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'العام والدور:' : 'Academic Year & Session:'}</span>
                          <span>{cert.academicYear} — {isAr ? cert.sessionTitleAr : cert.sessionTitleEn}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'الدرجة والنسبة:' : 'Marks & Percentage:'}</span>
                          <span className="font-bold text-emerald-400 font-mono text-sm">
                            {cert.scoreReport ? `${cert.scoreReport.earnedMarks} / ${cert.scoreReport.totalMarks}` : `${cert.score} / ${cert.totalQuestions}`}{' '}
                            ({cert.scorePct}%)
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-slate-500 block text-[10px]">{isAr ? 'المرتبة المعتمدة:' : 'Accredited Distinction:'}</span>
                          <span className="inline-block px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-[11px]">
                            {isAr ? cert.distinctionTier.labelAr : cert.distinctionTier.labelEn}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* National Cohort Percentile & Bloom Cognitive Attestation */}
                  {cert.cohortReport && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-indigo-300">
                        <TrendingUp className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>
                          {isAr
                            ? `الرتبة المئوية على مستوى الجمهورية: أعلى ${cert.cohortReport.percentileRank}% من طلاب الدفعة القومية.`
                            : `National Cohort Ranking: Ranked higher than ${cert.cohortReport.percentileRank}% of national examinees.`}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 text-[10px] font-bold">
                        {isAr ? cert.cohortReport.tierBadgeAr : cert.cohortReport.tierBadgeEn}
                      </span>
                    </div>
                  )}

                  {/* Cryptographic Signature Fingerprint */}
                  <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                        {isAr ? 'البصمة الرقمية للختم الوزاري (Digital Cryptographic Seal):' : 'Digital Cryptographic Seal Signature:'}
                      </div>
                      <div className="font-mono text-xs text-slate-400 break-all select-all">
                        {cert.verificationHash}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleCopyVerificationCode(cert.verificationHash)}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedHash ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ البصمة' : 'Copy Hash')}</span>
                      </button>

                      {onViewCertificate && (
                        <button
                          onClick={() => {
                            onClose();
                            onViewCertificate(cert);
                          }}
                          className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                        >
                          <FileCheck className="w-3.5 h-3.5" />
                          <span>{isAr ? 'عرض الشهادة الرسمية الكاملة' : 'View Full Certificate'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Unregistered / Invalid Notice */
                <div className="bg-rose-950/30 border-2 border-rose-500/40 rounded-2xl p-5 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 mx-auto">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-rose-300">
                      {isAr ? verificationResult.verificationStatusAr : verificationResult.verificationStatusEn}
                    </h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto mt-1 leading-relaxed">
                      {isAr ? verificationResult.messageAr : verificationResult.messageEn}
                    </p>
                  </div>

                  <button
                    onClick={() => handleSelectPreloaded(DEMO_VERIFIABLE_CERTIFICATES[0].certificateSerial)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isAr ? 'تجربة فحص نموذج رسمي معتمد' : 'Try Verifying an Accredited Exemplar'}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isAr ? 'خادم التوثيق الرقمي متصل ويعمل بصورة طبيعية' : 'Digital Verification Node Active'}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
          >
            {isAr ? 'إغلاق البوابة' : 'Close Portal'}
          </button>
        </div>
      </div>
    </div>
  );
};
