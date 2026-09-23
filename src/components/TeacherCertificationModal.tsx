import React, { useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  GraduationCap,
  HelpCircle,
  RotateCcw,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  TEACHER_CERTIFICATION_MODULES,
  type CertificationModule,
  type TeacherCertificationRecord,
  getSavedTeacherCertification,
  saveTeacherCertification,
  generateTeacherReferralCode,
  evaluateCertificationProgress,
} from '../data/teacherCertificationData';
import { registerTeacherAccreditationCertificate } from '../services/certificateRegistryService';

export interface TeacherCertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'ar' | 'en';
  onOpenVerification?: (serial: string) => void;
}

export const TeacherCertificationModal: React.FC<TeacherCertificationModalProps> = ({
  isOpen,
  onClose,
  lang = 'ar',
  onOpenVerification,
}) => {
  const isAr = lang === 'ar';
  const formatNum = (val: string | number) => (isAr ? toHindiDigits(val) : String(val));

  // Teacher Profile Information
  const [teacherName, setTeacherName] = useState<string>('');
  const [governorate, setGovernorate] = useState<string>('القاهرة');
  const [schoolName, setSchoolName] = useState<string>('');
  const [specialtySubject, setSpecialtySubject] = useState<string>('الرياضيات والفيزياء');

  // Navigation State
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [activeView, setActiveView] = useState<'study' | 'quiz' | 'certificate'>('study');

  // Progress State
  const [moduleScores, setModuleScores] = useState<Record<string, number>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [savedRecord, setSavedRecord] = useState<TeacherCertificationRecord | null>(null);

  // Clipboard
  const [copiedReferral, setCopiedReferral] = useState<boolean>(false);

  // Load existing certification on mount / open
  useEffect(() => {
    if (isOpen) {
      const existing = getSavedTeacherCertification();
      if (existing) {
        setSavedRecord(existing);
        setTeacherName(existing.teacherName);
        setGovernorate(existing.governorate);
        setSchoolName(existing.schoolName);
        setSpecialtySubject(existing.specialtySubject);
        setModuleScores(existing.moduleScores || {});
        if (existing.isCertified) {
          setActiveView('certificate');
        }
      }
    }
  }, [isOpen]);

  const activeModule: CertificationModule = TEACHER_CERTIFICATION_MODULES[activeModuleIndex];

  // Evaluate Overall Progress
  const progress = evaluateCertificationProgress(moduleScores);

  if (!isOpen) return null;

  // Handle Quiz Option Selection
  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  // Submit Quiz for Active Module
  const handleSubmitQuiz = () => {
    let correctCount = 0;
    activeModule.quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const scorePct = Math.round((correctCount / activeModule.quiz.length) * 100);
    const updatedScores = {
      ...moduleScores,
      [activeModule.id]: scorePct,
    };
    setModuleScores(updatedScores);
    setQuizSubmitted(true);

    // Check if overall course is now completed
    const evalResult = evaluateCertificationProgress(updatedScores);
    if (evalResult.isEligibleForCertificate && teacherName.trim()) {
      completeAccreditation(updatedScores, evalResult.averageScorePct);
    }
  };

  // Retake Active Quiz
  const handleRetakeQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  // Finalize Official Accreditation
  const completeAccreditation = (scores: Record<string, number>, avgScorePct: number) => {
    const finalName = teacherName.trim() || 'المعلم المتميز';
    const finalGov = governorate.trim() || 'القاهرة';
    const refCode = savedRecord?.referralCode || generateTeacherReferralCode(finalName, finalGov);

    const certRecord = registerTeacherAccreditationCertificate({
      teacherName: finalName,
      governorate: finalGov,
      schoolName: schoolName.trim() || 'مدرسة معتمدة',
      specialtySubject,
      averageScorePct: avgScorePct,
      referralCode: refCode,
    });

    const record: TeacherCertificationRecord = {
      teacherName: finalName,
      governorate: finalGov,
      schoolName: schoolName.trim() || 'مدرسة معتمدة',
      specialtySubject,
      referralCode: refCode,
      completedModuleIds: Object.keys(scores),
      moduleScores: scores,
      averageScorePct: avgScorePct,
      certificateSerial: certRecord.certificateSerial,
      verificationHash: certRecord.verificationHash,
      certifiedAt: Date.now(),
      isCertified: true,
    };

    saveTeacherCertification(record);
    setSavedRecord(record);
    setActiveView('certificate');
  };

  const handleCopyReferral = () => {
    if (!savedRecord) return;
    const msg = isAr
      ? `أبنائي وبناتي الطلاب، يرجى استخدام كود المعلم المعتمد (${savedRecord.referralCode}) للربط بمنصتي التعليمية على كليبسات ومتابعة الواجبات المدرسية: ${window.location.origin}`
      : `Students, use Certified Educator code (${savedRecord.referralCode}) on ClipSAT: ${window.location.origin}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(msg);
      setCopiedReferral(true);
      setTimeout(() => setCopiedReferral(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    if (!savedRecord) return;
    const text = isAr
      ? `مرحباً بكم، معلمكم المعتمد من منصة كليبسات يشارككم كود الفصل: *${savedRecord.referralCode}*. ادخلوا الآن لحل الواجبات والاستعداد لامتحانات الثانوية العامة: ${window.location.origin}`
      : `Welcome students, use Educator Code *${savedRecord.referralCode}* on ClipSAT: ${window.location.origin}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto text-white animate-in fade-in zoom-in-95 duration-200"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Top Gold Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-b from-slate-800/90 to-slate-900 border-b border-slate-700 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-inner">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <EgyptFlag className="w-5 h-3.5" />
                <h2 className="text-base sm:text-lg font-bold text-amber-300">
                  {isAr ? 'برنامج اعتماد معلم كليبسات الرقمي (معلم معتمد)' : 'ClipSAT Certified Educator Program'}
                </h2>
              </div>
              <p className="text-xs text-slate-400">
                {isAr
                  ? 'برنامج تدريب مهني معتمد من ٨ وحدات بيداغوجية لقيادة فصول الثانوية العامة الحديثة'
                  : '8-Module professional development curriculum for modern Thanawya classroom leadership'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course Progress Header Bar */}
        <div className="bg-slate-950/70 border-b border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-300">
              {isAr ? 'التقدم الإجمالي:' : 'Overall Progress:'}
            </span>
            <div className="w-32 sm:w-48 bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(progress.completedCount / progress.totalModules) * 100}%`,
                }}
              />
            </div>
            <span className="font-bold text-amber-400">
              {formatNum(progress.completedCount)} / {formatNum(progress.totalModules)}{' '}
              {isAr ? 'وحدات' : 'Modules'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">{isAr ? 'متوسط الدرجات:' : 'Average Score:'}</span>
            <span
              className={`font-bold px-2 py-0.5 rounded-full ${
                progress.averageScorePct >= 80
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                  : 'bg-amber-950/80 text-amber-400 border border-amber-500/40'
              }`}
            >
              {formatNum(progress.averageScorePct)}%
            </span>

            {savedRecord?.isCertified && (
              <button
                onClick={() => setActiveView('certificate')}
                className="ml-2 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold hover:bg-amber-500/30 transition-all flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isAr ? 'عرض الشهادة المعتمدة' : 'View Certificate'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Certificate View (If unlocked & selected) */}
          {activeView === 'certificate' && savedRecord?.isCertified ? (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              {/* Official Certificate Card */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-amber-500/60 shadow-2xl text-center space-y-5">
                <div className="flex items-center justify-center gap-2 text-amber-400">
                  <EgyptFlag className="w-6 h-4" />
                  <span className="text-xs uppercase tracking-widest font-bold">
                    {isAr ? 'جمهورية مصر العربية — وزارة التربية والتعليم' : 'Arab Republic of Egypt — MOE'}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                    {isAr ? 'شهادة اعتماد معلم رقمي محترف' : 'Certified Digital Educator Diploma'}
                  </h3>
                  <p className="text-xs text-amber-400/80">
                    {isAr ? 'معلم معتمد في تكنولوجيا التعليم والتقييم التكيفي' : 'ClipSAT Accredited Professional Educator'}
                  </p>
                </div>

                <div className="py-4 border-y border-amber-500/30 space-y-2">
                  <p className="text-sm text-slate-300">{isAr ? 'تشهد منصة كليبسات بأن الأستاذ(ة):' : 'This certifies that:'}</p>
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {savedRecord.teacherName}
                  </p>
                  <p className="text-xs text-slate-400">
                    {savedRecord.schoolName} — {savedRecord.governorate}
                  </p>
                  <p className="text-xs text-slate-300 max-w-xl mx-auto pt-2 leading-relaxed">
                    {isAr
                      ? `قد أتم بنجاح متطلبات البرنامج التدريبي المتخصص في تكنولوجيا التقييم وبنوك الأسئلة الوزارية والتعليم التكيفي، وحصل على نسبة إتقان ${formatNum(savedRecord.averageScorePct)}% مع استحقاق رتبة معلم كليبسات المعتمد.`
                      : `Has successfully fulfilled all curriculum requirements for the ClipSAT Adaptive Assessment & Ministerial Databanks Program with an average score of ${savedRecord.averageScorePct}%.`}
                  </p>
                </div>

                {/* Digital Verification & Referral Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-700/80 text-right space-y-1">
                    <span className="text-slate-400 font-medium block">
                      {isAr ? 'رقم المسلسل الرسمي (Serial):' : 'Official Serial:'}
                    </span>
                    <span className="font-mono text-amber-300 font-bold tracking-wider select-all block">
                      {savedRecord.certificateSerial}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-right space-y-1">
                    <span className="text-amber-400/90 font-medium block">
                      {isAr ? 'كود إحالة المعلم للطلاب (Referral):' : 'Teacher Referral Code:'}
                    </span>
                    <span className="font-mono text-yellow-300 font-bold tracking-widest text-sm select-all block">
                      {savedRecord.referralCode}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleCopyReferral}
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    {copiedReferral ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedReferral ? (isAr ? 'تم نسخ كود الإحالة!' : 'Copied!') : (isAr ? 'نسخ كود الفصل للطلاب' : 'Copy Student Code')}</span>
                  </button>

                  <button
                    onClick={handleShareWhatsApp}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{isAr ? 'مشاركة الكود عبر واتساب' : 'Share via WhatsApp'}</span>
                  </button>

                  {onOpenVerification && (
                    <button
                      onClick={() => onOpenVerification(savedRecord.certificateSerial)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-xs transition-all flex items-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>{isAr ? 'فحص السجل المركزي للشهادة' : 'Verify Central Record'}</span>
                    </button>
                  )}

                  <button
                    onClick={() => setActiveView('study')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    {isAr ? 'العودة لمراجعة الوحدات' : 'Review Modules'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Profile Inputs (Shown at top if not certified yet) */}
              {!savedRecord?.isCertified && (
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>{isAr ? 'بيانات المعلم لإصدار الشهادة المعتمدة وكود الإحالة:' : 'Teacher Accreditation Profile:'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <label className="text-slate-400 mb-1 block">{isAr ? 'اسم المعلم ثلاثي:' : 'Full Name:'}</label>
                      <input
                        type="text"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        placeholder={isAr ? 'مثال: أحمد محمد إبراهيم' : 'e.g. Ahmed Mohamed'}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 mb-1 block">{isAr ? 'المحافظة:' : 'Governorate:'}</label>
                      <input
                        type="text"
                        value={governorate}
                        onChange={(e) => setGovernorate(e.target.value)}
                        placeholder={isAr ? 'مثال: الجيزة' : 'e.g. Giza'}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 mb-1 block">{isAr ? 'اسم المدرسة:' : 'School Name:'}</label>
                      <input
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        placeholder={isAr ? 'مثال: السعيدية الثانوية' : 'e.g. El-Saidiya High'}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 mb-1 block">{isAr ? 'مادة التخصص:' : 'Specialty Subject:'}</label>
                      <input
                        type="text"
                        value={specialtySubject}
                        onChange={(e) => setSpecialtySubject(e.target.value)}
                        placeholder={isAr ? 'مثال: الفيزياء' : 'e.g. Physics'}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Module Carousel / Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {TEACHER_CERTIFICATION_MODULES.map((mod, idx) => {
                  const score = moduleScores[mod.id];
                  const isCompleted = typeof score === 'number' && score >= 80;
                  const isCurrent = idx === activeModuleIndex;

                  return (
                    <button
                      key={mod.id}
                      onClick={() => {
                        setActiveModuleIndex(idx);
                        setActiveView('study');
                        setQuizSubmitted(false);
                        setQuizAnswers({});
                      }}
                      className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                        isCurrent
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                          : isCompleted
                          ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/30'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span>{formatNum(mod.number)}.</span>
                      <span className="truncate max-w-[120px] sm:max-w-[150px]">
                        {isAr ? mod.titleAr : mod.titleEn}
                      </span>
                      {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Module Header & View Switcher */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {isAr ? `الوحدة ${formatNum(activeModule.number)} من ٨` : `Module ${activeModule.number} of 8`}
                    </span>
                    <span>•</span>
                    <span>{formatNum(activeModule.estimatedMinutes)} {isAr ? 'دقيقة دراسة' : 'mins'}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {isAr ? activeModule.titleAr : activeModule.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isAr ? activeModule.summaryAr : activeModule.summaryEn}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveView('study')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeView === 'study'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {isAr ? 'الشرح البيداغوجي' : 'Pedagogy Study'}
                  </button>
                  <button
                    onClick={() => setActiveView('quiz')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeView === 'quiz'
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{isAr ? 'اختبار الوحدة (٥ أسئلة)' : 'Module Quiz (5 MCQs)'}</span>
                    {typeof moduleScores[activeModule.id] === 'number' && (
                      <span className="px-1.5 py-0.2 rounded-full bg-slate-900 text-[10px] text-amber-300">
                        {formatNum(moduleScores[activeModule.id])}%
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* View 1: Study Mode */}
              {activeView === 'study' && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  {/* Objectives */}
                  <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-2">
                    <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      {isAr ? 'الأهداف التعليمية للوحدة:' : 'Module Learning Objectives:'}
                    </span>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                      {(isAr ? activeModule.objectivesAr : activeModule.objectivesEn).map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-4">
                    {activeModule.sections.map((sec, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 space-y-2">
                        <h4 className="text-sm font-bold text-amber-300">
                          {isAr ? sec.headingAr : sec.headingEn}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {isAr ? sec.bodyAr : sec.bodyEn}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Pedagogical Classroom Tips */}
                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {isAr ? 'تطبيقات عملية مقترحة داخل الفصل الدراسي:' : 'Actionable Classroom Application Tips:'}
                    </span>
                    <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                      {(isAr ? activeModule.pedagogicalTipsAr : activeModule.pedagogicalTipsEn).map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Advance to Quiz Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      disabled={activeModuleIndex === 0}
                      onClick={() => setActiveModuleIndex((prev) => prev - 1)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>{isAr ? 'الوحدة السابقة' : 'Previous Module'}</span>
                    </button>

                    <button
                      onClick={() => setActiveView('quiz')}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs hover:opacity-95 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                    >
                      <span>{isAr ? 'الانتقال لاختبار الوحدة (٥ أسئلة)' : 'Take Module Quiz'}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* View 2: Quiz Mode */}
              {activeView === 'quiz' && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div className="space-y-4">
                    {activeModule.quiz.map((q, qIndex) => {
                      const selectedIdx = quizAnswers[q.id];
                      const isCorrect = selectedIdx === q.correctIndex;

                      return (
                        <div
                          key={q.id}
                          className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-xs font-bold text-amber-400">
                              {isAr ? `السؤال ${formatNum(qIndex + 1)}:` : `Question ${qIndex + 1}:`}
                            </span>
                            {quizSubmitted && (
                              <span
                                className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                                  isCorrect
                                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                                    : 'bg-rose-950 text-rose-400 border border-rose-500/40'
                                }`}
                              >
                                {isCorrect ? (isAr ? 'صحيح ✓' : 'Correct') : (isAr ? 'غير صحيح ✕' : 'Incorrect')}
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm font-semibold text-white">
                            {isAr ? q.questionAr : q.questionEn}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {(isAr ? q.optionsAr : q.optionsEn).map((opt, optIdx) => {
                              const isSelected = selectedIdx === optIdx;
                              let btnClasses =
                                'p-3 rounded-xl text-xs text-right border transition-all ';

                              if (quizSubmitted) {
                                if (optIdx === q.correctIndex) {
                                  btnClasses +=
                                    'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                                } else if (isSelected && !isCorrect) {
                                  btnClasses +=
                                    'bg-rose-950/80 border-rose-500 text-rose-300';
                                } else {
                                  btnClasses +=
                                    'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
                                }
                              } else {
                                if (isSelected) {
                                  btnClasses +=
                                    'bg-amber-500/20 border-amber-500 text-amber-300 font-bold';
                                } else {
                                  btnClasses +=
                                    'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700';
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  disabled={quizSubmitted}
                                  onClick={() => handleSelectOption(q.id, optIdx)}
                                  className={btnClasses}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {/* Rationale explanation when submitted */}
                          {quizSubmitted && (
                            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                              <span className="font-bold text-amber-400 block">
                                {isAr ? 'التوضيح البيداغوجي:' : 'Pedagogical Rationale:'}
                              </span>
                              <p>{isAr ? q.rationaleAr : q.rationaleEn}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Quiz Action Bar */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveView('study')}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                    >
                      {isAr ? 'العودة لقراءة الشرح' : 'Back to Study'}
                    </button>

                    <div className="flex items-center gap-2">
                      {quizSubmitted ? (
                        <>
                          <button
                            onClick={handleRetakeQuiz}
                            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>{isAr ? 'إعادة المحاولة' : 'Retake Quiz'}</span>
                          </button>

                          {activeModuleIndex < TEACHER_CERTIFICATION_MODULES.length - 1 && (
                            <button
                              onClick={() => {
                                setActiveModuleIndex((prev) => prev + 1);
                                setActiveView('study');
                                setQuizSubmitted(false);
                                setQuizAnswers({});
                              }}
                              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                            >
                              <span>{isAr ? 'الوحدة التالية' : 'Next Module'}</span>
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          disabled={Object.keys(quizAnswers).length < activeModule.quiz.length}
                          onClick={handleSubmitQuiz}
                          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:opacity-95 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{isAr ? 'تسليم الإجابات وحساب النتيجة' : 'Submit Answers'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
