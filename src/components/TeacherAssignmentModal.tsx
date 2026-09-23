import React, { useState, useEffect } from 'react';
import type { Language } from '../i18n/translations';
import {
  X,
  Users,
  PlusCircle,
  BarChart3,
  Copy,
  Check,
  Share2,
  BookOpen,
  Clock,
  Award,
  AlertCircle,
  Sparkles,
  MessageSquare,
  FileCheck,
  AlertTriangle,
  Download,
  GraduationCap,
  CheckCircle2,
  QrCode,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import { TeacherQuestionBankView } from './TeacherQuestionBankView';
import { TeacherGradingDashboard } from './TeacherGradingDashboard';
import type { TeacherCustomQuestion } from '../types/teacherQuestionBank';
import {
  generateAssignmentCode,
  createAssignment,
  getAssignmentByCode,
  getClassAnalytics,
  encodeAssignmentToShareableUrl,
  getLocalAssignments,
  getLocalSubmissions,
  getSubmissionsForAssignment,
  getAtRiskStudents,
  getTopicGapHeatmap,
  generateRemedialAssignment,
  exportClassAnalyticsCSV,
  type AtRiskStudentSummary,
  type TopicGapItem,
} from '../services/teacherAssignmentService';
import type {
  Assignment,
  AssignmentSubmission,
  ClassAnalyticsSummary,
} from '../types/teacherAssignment';
import { SUBJECTS } from '../data/subjects';

export type TeacherModalTab =
  | 'student_solve'
  | 'teacher_create'
  | 'teacher_grading'
  | 'teacher_question_bank'
  | 'teacher_analytics';

interface ClassroomAssignmentQRCodeProps {
  code: string;
  url: string;
  title: string;
  subject: string;
  onClose: () => void;
  lang: Language;
}

const ClassroomAssignmentQRCode: React.FC<ClassroomAssignmentQRCodeProps> = ({
  code,
  url,
  title,
  subject,
  onClose,
  lang,
}) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = `${isAr ? 'واجب منصة البكالوريا المصرية' : 'EGBaccalaureate Assignment'}: ${title}\nكود الواجب: ${code}\nرابط الدخول المباشر: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-center animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          {isAr ? 'رمز الاستجابة السريعة للسبورة الذكية' : 'Smartboard Classroom QR'}
        </span>

        <h3 className="text-lg font-bold text-white mt-3 mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs text-slate-400 capitalize">{subject}</p>

        {/* QR Code Graphic */}
        <div className="my-5 p-4 bg-white rounded-2xl inline-block shadow-lg mx-auto">
          <svg viewBox="0 0 60 60" width="180" height="180" className="text-slate-900 block">
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

            {/* Synthetic Data Grid */}
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
        </div>

        {/* Code display */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-amber-400/40 text-amber-300 font-mono text-xl font-black tracking-widest mb-3">
          <span>{code}</span>
        </div>

        <p className="text-xs text-slate-300 mb-5 leading-relaxed">
          {isAr
            ? 'وجّه كاميرا هاتفك نحو الرمز أو اكتب الكود أعلاه لبدء الاختبار فوراً بدون تسجيل دخول.'
            : 'Scan the QR code or enter the code above to begin test immediately without login.'}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleCopy}
            className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الرابط' : 'Copy URL')}</span>
          </button>
          <button
            onClick={handleWhatsApp}
            className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-emerald-600/30"
          >
            <Share2 className="w-4 h-4" />
            <span>{isAr ? 'مشاركة واتساب' : 'WhatsApp'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  onStartAssignmentTest?: (assignment: Assignment, studentName: string) => void;
  initialCode?: string;
  initialTab?: TeacherModalTab;
  onOpenTeacherCertification?: () => void;
}

export const TeacherAssignmentModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  onStartAssignmentTest,
  initialCode = '',
  initialTab,
  onOpenTeacherCertification,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [activeTab, setActiveTab] = useState<TeacherModalTab>(
    initialTab || (initialCode ? 'student_solve' : 'student_solve')
  );

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Student Tab state
  const [inputCode, setInputCode] = useState(initialCode);
  const [studentName, setStudentName] = useState('');
  const [resolvingCode, setResolvingCode] = useState(false);
  const [resolvedAssignment, setResolvedAssignment] = useState<Assignment | null>(null);
  const [codeError, setCodeError] = useState<string | null>(null);
  const [previousSubmissions, setPreviousSubmissions] = useState<AssignmentSubmission[]>([]);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  // Auto-fill studentName from saved profile
  useEffect(() => {
    try {
      const rawProfile = typeof localStorage !== 'undefined' ? localStorage.getItem('egbac_user_profile_v1') : null;
      if (rawProfile) {
        const parsed = JSON.parse(rawProfile);
        if (parsed.displayName) {
          setStudentName(parsed.displayName);
        }
      }
    } catch {}
  }, []);

  // Teacher Create state
  const [createSubjectId, setCreateSubjectId] = useState('physics');
  const [createTitle, setCreateTitle] = useState('');
  const [createQuestionCount, setCreateQuestionCount] = useState(10);
  const [createTimeLimit, setCreateTimeLimit] = useState(20);
  const [createTeacherName, setCreateTeacherName] = useState('');
  const [createTeacherTip, setCreateTeacherTip] = useState('');
  const [createdAssignment, setCreatedAssignment] = useState<Assignment | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Teacher Analytics state
  const [analyticsCode, setAnalyticsCode] = useState('');
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [classAnalytics, setClassAnalytics] = useState<ClassAnalyticsSummary | null>(null);
  const [recentAssignments, setRecentAssignments] = useState<Assignment[]>([]);
  const [atRiskList, setAtRiskList] = useState<AtRiskStudentSummary[]>([]);
  const [topicGaps, setTopicGaps] = useState<TopicGapItem[]>([]);
  const [currentSubmissions, setCurrentSubmissions] = useState<AssignmentSubmission[]>([]);
  const [remedialCode, setRemedialCode] = useState<string | null>(null);
  const [currentAssignmentObj, setCurrentAssignmentObj] = useState<Assignment | null>(null);

  useEffect(() => {
    if (initialCode) {
      setInputCode(initialCode.toUpperCase());
      handleResolveCode(initialCode.toUpperCase());
    }
    const local = Object.values(getLocalAssignments());
    setRecentAssignments(local.reverse().slice(0, 8));
  }, [initialCode, isOpen]);

  if (!isOpen) return null;

  const handleResolveCode = async (codeToTest?: string) => {
    const code = (codeToTest || inputCode).trim().toUpperCase();
    if (!code) {
      setCodeError(isAr ? 'يرجى إدخال كود الواجب المكون من 6 خانات' : 'Please enter the 6-character assignment code');
      return;
    }
    setResolvingCode(true);
    setCodeError(null);
    try {
      const found = await getAssignmentByCode(code);
      if (found) {
        setResolvedAssignment(found);
        const localSubs = getLocalSubmissions();
        const past = localSubs.filter((s) => s.assignmentCode === code);
        setPreviousSubmissions(past);
      } else {
        setCodeError(
          isAr
            ? 'لم يتم العثور على واجب بهذا الكود. تأكد من صحة الحروف أو أن المعلم شارك الكود الصحيح.'
            : 'Assignment code not found. Please verify the code with your teacher.'
        );
      }
    } catch {
      setCodeError(isAr ? 'حدث خطأ أثناء البحث عن الواجب' : 'Error resolving assignment');
    } finally {
      setResolvingCode(false);
    }
  };

  const handleLaunchTest = () => {
    if (!resolvedAssignment) return;
    if (!studentName.trim()) {
      setCodeError(isAr ? 'يرجى كتابة اسم الطالب للمتابعة' : 'Please enter student name to continue');
      return;
    }
    if (onStartAssignmentTest) {
      onStartAssignmentTest(resolvedAssignment, studentName.trim());
      onClose();
    }
  };

  const handleCreateFromCustomQuestions = async (selectedQuestions: TeacherCustomQuestion[]) => {
    if (selectedQuestions.length === 0) return;
    const firstSub = selectedQuestions[0].subjectId || 'physics';
    const title = isAr
      ? `واجب مخصص من أسئلة المعلم (${selectedQuestions.length} سؤال)`
      : `Custom Teacher Assignment (${selectedQuestions.length} Questions)`;
    const code = generateAssignmentCode(firstSub.slice(0, 3).toUpperCase());
    try {
      const asgn = await createAssignment({
        title,
        titleAr: title,
        subjectId: firstSub,
        chapterIds: Array.from(new Set(selectedQuestions.map((q) => q.chapterTitleAr))),
        questionIds: selectedQuestions.map((q) => q.id),
        customQuestions: selectedQuestions,
        totalPoints: selectedQuestions.length * 2,
        timeLimitMinutes: Math.max(10, selectedQuestions.length * 2),
        teacherName: selectedQuestions[0].teacherName || undefined,
        teacherTip: isAr ? 'تم توليد هذا الواجب من بنك أسئلة المعلم المخصص.' : 'Generated from custom question bank.',
      }, code);
      setCreatedAssignment(asgn);
      setRecentAssignments((prev) => [asgn, ...prev]);
      setActiveTab('teacher_create');
    } catch (err) {
      console.error('Failed to create assignment from custom questions:', err);
    }
  };

  const handleCreateAssignment = async () => {
    const selectedSub = SUBJECTS.find((s) => s.id === createSubjectId);
    const subNameAr = selectedSub?.titleAr || 'المادة';
    const subNameEn = selectedSub?.titleEn || 'Subject';
    const titleToUse = createTitle.trim() || `${isAr ? 'واجب' : 'Assignment'}: ${isAr ? subNameAr : subNameEn}`;

    setIsCreating(true);
    try {
      const code = generateAssignmentCode(createSubjectId.slice(0, 3).toUpperCase());
      const newAsgn = await createAssignment({
        title: titleToUse,
        titleAr: titleToUse,
        subjectId: createSubjectId,
        chapterIds: [],
        questionIds: [], // Generated dynamically or from pool
        totalPoints: createQuestionCount * 2,
        timeLimitMinutes: createTimeLimit,
        teacherName: createTeacherName.trim() || undefined,
        teacherTip: createTeacherTip.trim() || undefined,
      }, code);

      setCreatedAssignment(newAsgn);
      setRecentAssignments((prev) => [newAsgn, ...prev]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsCreating(false);
    }
  };

  const handleFetchAnalytics = async (codeToQuery?: string) => {
    const code = (codeToQuery || analyticsCode).trim().toUpperCase();
    if (!code) return;
    setAnalyticsLoading(true);
    setRemedialCode(null);
    try {
      const asgnObj = await getAssignmentByCode(code);
      setCurrentAssignmentObj(asgnObj);
      const summary = await getClassAnalytics(code);
      setClassAnalytics(summary);
      const subs = await getSubmissionsForAssignment(code);
      setCurrentSubmissions(subs);
      const atRisk = getAtRiskStudents(subs, 50);
      setAtRiskList(atRisk);
      const gaps = getTopicGapHeatmap(subs, asgnObj);
      setTopicGaps(gaps);
    } catch (err) {
      console.error(err);
    } finally {
      setAnalyticsLoading(false);
    }
  };

  const handleExportCsv = () => {
    if (!classAnalytics || currentSubmissions.length === 0) return;
    const csvContent = exportClassAnalyticsCSV(classAnalytics, currentSubmissions);
    const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `كشف_درجات_${classAnalytics.assignmentCode}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateRemedial = () => {
    if (!currentAssignmentObj || topicGaps.length === 0) return;
    const remedial = generateRemedialAssignment(
      topicGaps,
      currentAssignmentObj.teacherName || 'معلم الفصل',
      currentAssignmentObj.subjectId,
      currentAssignmentObj.titleAr || currentAssignmentObj.title
    );
    setRemedialCode(remedial.assignmentCode);
    setRecentAssignments((prev) => [remedial, ...prev]);
  };


  const copyToClipboard = (text: string, type: 'code' | 'url') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 my-auto ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : 'bg-slate-900/95 border-indigo-500/30 text-white shadow-indigo-950/50'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div
          className={`px-5 py-4 flex items-center justify-between border-b ${
            isLight ? 'bg-indigo-50/70 border-slate-200' : 'bg-slate-800/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">
                  {isAr ? 'منصة واجبات واختبارات المعلم' : 'Teacher Assignments & Classroom'}
                </h2>
                <span className="hidden sm:inline-block">
                  <EgyptFlag className="w-5 h-3.5" />
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isAr
                  ? 'مشاركة الواجبات بأكواد سداسية بدون إنترنت أو عبر السحابة'
                  : '6-character code distribution with offline URL packing and live analytics'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {onOpenTeacherCertification && (
              <button
                onClick={onOpenTeacherCertification}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-500/30 transition-colors"
                title={isAr ? 'برنامج اعتماد معلمي الثانوية العامة' : 'Teacher Accreditation Program'}
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'شهادة اعتماد المعلم' : 'Teacher Certification'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors ${
                isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex items-center overflow-x-auto no-scrollbar border-b text-xs sm:text-sm font-semibold shrink-0 ${
            isLight ? 'border-slate-200 bg-slate-100/60' : 'border-slate-800 bg-slate-950/40'
          }`}
        >
          <button
            onClick={() => setActiveTab('student_solve')}
            className={`py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 border-b-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'student_solve'
                ? 'border-indigo-500 text-indigo-500 dark:text-indigo-400 bg-indigo-500/5 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>{isAr ? 'حل الواجب (طالب)' : 'Solve (Student)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('teacher_create')}
            className={`py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 border-b-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'teacher_create'
                ? 'border-amber-500 text-amber-500 dark:text-amber-400 bg-amber-500/5 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <PlusCircle className="w-4 h-4 shrink-0" />
            <span>{isAr ? 'إنشاء واجب' : 'Create'}</span>
          </button>

          <button
            onClick={() => setActiveTab('teacher_grading')}
            className={`py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 border-b-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'teacher_grading'
                ? 'border-emerald-500 text-emerald-500 dark:text-emerald-400 bg-emerald-500/5 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{isAr ? 'تصحيح ومراجعة الطلاب' : 'Grading & Review'}</span>
          </button>

          <button
            onClick={() => setActiveTab('teacher_question_bank')}
            className={`py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 border-b-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'teacher_question_bank'
                ? 'border-cyan-500 text-cyan-500 dark:text-cyan-400 bg-cyan-500/5 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{isAr ? 'بنك أسئلتي المخصص' : 'Custom Question Bank'}</span>
          </button>

          <button
            onClick={() => setActiveTab('teacher_analytics')}
            className={`py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 border-b-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'teacher_analytics'
                ? 'border-purple-500 text-purple-500 dark:text-purple-400 bg-purple-500/5 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <BarChart3 className="w-4 h-4 shrink-0" />
            <span>{isAr ? 'تحليلات الفصل' : 'Analytics'}</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-5 max-h-[70vh] overflow-y-auto">
          {/* TAB 1: STUDENT SOLVE */}
          {activeTab === 'student_solve' && (
            <div className="space-y-5">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-indigo-50/50 border-indigo-100' : 'bg-indigo-950/20 border-indigo-800/40'
                }`}
              >
                <label className="block text-xs font-bold text-indigo-400 mb-2 uppercase tracking-wider">
                  {isAr ? 'أدخل كود الواجب المكون من 6 خانات' : 'Enter 6-Character Assignment Code'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={10}
                    value={inputCode}
                    onChange={(e) => {
                      setInputCode(e.target.value.toUpperCase());
                      setCodeError(null);
                    }}
                    placeholder="مثال: MATH26 أو PHY24B"
                    className={`flex-1 px-4 py-2.5 rounded-xl border font-mono text-center tracking-widest text-lg font-bold uppercase transition-all ${
                      isLight
                        ? 'bg-white border-slate-300 text-slate-900 focus:border-indigo-500'
                        : 'bg-slate-800/80 border-slate-700 text-amber-300 focus:border-amber-400'
                    }`}
                  />
                  <button
                    onClick={() => handleResolveCode()}
                    disabled={resolvingCode || !inputCode.trim()}
                    className="px-5 py-2.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all disabled:opacity-50 flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
                  >
                    {resolvingCode ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>{isAr ? 'تحقق' : 'Verify'}</span>
                    )}
                  </button>
                </div>
                {codeError && (
                  <p className="mt-2 text-xs font-semibold text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {codeError}
                  </p>
                )}
              </div>

              {/* Resolved Assignment Card */}
              {resolvedAssignment && (
                <div
                  className={`p-5 rounded-xl border animate-in fade-in slide-in-from-top-2 duration-300 ${
                    isLight ? 'bg-emerald-50/60 border-emerald-200' : 'bg-emerald-950/20 border-emerald-700/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                        {isAr ? 'واجب معتمد' : 'Verified Assignment'}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-emerald-300 mt-1">
                        {resolvedAssignment.titleAr || resolvedAssignment.title}
                      </h3>
                      {resolvedAssignment.teacherName && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {isAr ? `إعداد الأستاذ: ${resolvedAssignment.teacherName}` : `Teacher: ${resolvedAssignment.teacherName}`}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-amber-400 border border-slate-700">
                      {resolvedAssignment.assignmentCode}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-400" />
                      <div>
                        <div className="text-slate-500">{isAr ? 'زمن الاختبار' : 'Time Limit'}</div>
                        <div className="font-bold">
                          {resolvedAssignment.timeLimitMinutes > 0
                            ? `${resolvedAssignment.timeLimitMinutes} ${isAr ? 'دقيقة' : 'min'}`
                            : isAr ? 'غير محدد' : 'Untimed'}
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <div>
                        <div className="text-slate-500">{isAr ? 'الدرجة الكلية' : 'Total Marks'}</div>
                        <div className="font-bold">{resolvedAssignment.totalPoints} {isAr ? 'درجة' : 'pts'}</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2 col-span-2 sm:col-span-1">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-slate-500">{isAr ? 'المادة' : 'Subject'}</div>
                        <div className="font-bold capitalize">{resolvedAssignment.subjectId}</div>
                      </div>
                    </div>
                  </div>

                  {resolvedAssignment.teacherTip && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 mb-4 flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block">{isAr ? 'توجيهات المعلم:' : 'Teacher Tip:'}</span>
                        {resolvedAssignment.teacherTip}
                      </div>
                    </div>
                  )}

                  {/* Previous Submission Status & Teacher Feedback Card */}
                  {previousSubmissions.length > 0 && (
                    <div
                      className={`p-4 rounded-xl border mb-4 ${
                        isLight ? 'bg-amber-50/80 border-amber-200' : 'bg-amber-950/30 border-amber-600/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          {isAr ? 'آخر نتيجة مسجلة لك في هذا الواجب:' : 'Your Latest Recorded Result:'}
                        </span>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300">
                          {previousSubmissions[0].score} / {previousSubmissions[0].totalPoints} ({previousSubmissions[0].percentage}%)
                        </span>
                      </div>

                      {previousSubmissions[0].teacherFeedback ? (
                        <div
                          className={`p-3 rounded-lg border text-xs mt-2 ${
                            isLight
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                              : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{isAr ? 'تم تدقيق الإجابة بواسطة المعلم' : 'Reviewed by Teacher'}</span>
                            {previousSubmissions[0].teacherFeedback.teacherScoreAdjustment ? (
                              <span className="mr-2 px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">
                                {previousSubmissions[0].teacherFeedback.teacherScoreAdjustment > 0
                                  ? `+${previousSubmissions[0].teacherFeedback.teacherScoreAdjustment}`
                                  : previousSubmissions[0].teacherFeedback.teacherScoreAdjustment}{' '}
                                {isAr ? 'درجة إضافية' : 'marks'}
                              </span>
                            ) : null}
                          </div>
                          {previousSubmissions[0].teacherFeedback.teacherNotes && (
                            <p className="text-[11px] leading-relaxed opacity-90 mt-1 italic">
                              "{previousSubmissions[0].teacherFeedback.teacherNotes}"
                            </p>
                          )}
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-400 mt-1">
                          {isAr
                            ? 'تم إرسال إجابتك بنجاح وفي انتظار مراجعة وتدقيق المعلم.'
                            : 'Submission submitted and awaiting teacher review.'}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Student Name Input */}
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isAr ? 'اكتب اسمك الثلاثي لتسجيل النتيجة في كشف المعلم:' : 'Enter your full name for the class roster:'}
                    </label>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder={isAr ? 'مثال: أحمد محمد علي' : 'e.g. Ahmed Mohamed'}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all mb-3 ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900'
                          : 'bg-slate-800 border-slate-700 text-white'
                      }`}
                    />
                    <button
                      onClick={handleLaunchTest}
                      className="w-full py-3 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>
                        {previousSubmissions.length > 0
                          ? (isAr ? 'إعادة حل الواجب لتحسين الدرجة' : 'Retake Assignment to Improve Score')
                          : (isAr ? 'ابدأ حل الواجب الآن' : 'Start Assignment Test Now')}
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TEACHER CREATE */}
          {activeTab === 'teacher_create' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    {isAr ? 'المادة الأكاديمية' : 'Subject'}
                  </label>
                  <select
                    value={createSubjectId}
                    onChange={(e) => setCreateSubjectId(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-700 text-white'
                    }`}
                  >
                    {SUBJECTS.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        {isAr ? sub.titleAr : sub.titleEn}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    {isAr ? 'عنوان الواجب أو الاختبار' : 'Assignment Title'}
                  </label>
                  <input
                    type="text"
                    value={createTitle}
                    onChange={(e) => setCreateTitle(e.target.value)}
                    placeholder={isAr ? 'مثال: واجب الاستاتيكا - عزم القوة' : 'e.g. Statics Homework #3'}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-700 text-white'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    {isAr ? 'عدد الأسئلة' : 'Question Count'}
                  </label>
                  <select
                    value={createQuestionCount}
                    onChange={(e) => setCreateQuestionCount(Number(e.target.value))}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-700 text-white'
                    }`}
                  >
                    <option value={5}>5 {isAr ? 'أسئلة' : 'Questions'}</option>
                    <option value={10}>10 {isAr ? 'أسئلة (موصى به)' : 'Questions (Recommended)'}</option>
                    <option value={15}>15 {isAr ? 'سؤالاً' : 'Questions'}</option>
                    <option value={20}>20 {isAr ? 'سؤالاً' : 'Questions'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    {isAr ? 'الزمن المحدد (بالدقائق)' : 'Time Limit (minutes)'}
                  </label>
                  <select
                    value={createTimeLimit}
                    onChange={(e) => setCreateTimeLimit(Number(e.target.value))}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-700 text-white'
                    }`}
                  >
                    <option value={0}>{isAr ? 'بدون توقيت (تدريب حر)' : 'Untimed'}</option>
                    <option value={15}>15 {isAr ? 'دقيقة' : 'min'}</option>
                    <option value={20}>20 {isAr ? 'دقيقة' : 'min'}</option>
                    <option value={30}>30 {isAr ? 'دقيقة' : 'min'}</option>
                    <option value={45}>45 {isAr ? 'دقيقة' : 'min'}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    {isAr ? 'اسم المعلم / المدرس' : 'Teacher Name'}
                  </label>
                  <input
                    type="text"
                    value={createTeacherName}
                    onChange={(e) => setCreateTeacherName(e.target.value)}
                    placeholder={isAr ? 'أ/ محمد إبراهيم' : 'Mr. Mohamed'}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-700 text-white'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    {isAr ? 'نصيحة أو توجيه للطلاب' : 'Teacher Tip / Advice'}
                  </label>
                  <input
                    type="text"
                    value={createTeacherTip}
                    onChange={(e) => setCreateTeacherTip(e.target.value)}
                    placeholder={isAr ? 'ركز في التحويلات الهندسية ورسم مخطط الجسم الحر' : 'Watch signs and units carefully'}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-700 text-white'
                    }`}
                  />
                </div>
              </div>

              <button
                onClick={handleCreateAssignment}
                disabled={isCreating}
                className="w-full mt-2 py-3 rounded-xl font-bold bg-amber-600 hover:bg-amber-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30"
              >
                {isCreating ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{isAr ? 'إنشاء كود الواجب الآن' : 'Generate Assignment Code'}</span>
                  </>
                )}
              </button>

              {/* Created Assignment Result */}
              {createdAssignment && (
                <div
                  className={`mt-4 p-5 rounded-xl border animate-in zoom-in-95 duration-300 ${
                    isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-amber-950/20 border-amber-500/40'
                  }`}
                >
                  <div className="text-center">
                    <span className="text-xs font-bold text-amber-500 block mb-1">
                      {isAr ? 'تم توليد كود الواجب بنجاح!' : 'Assignment Created Successfully!'}
                    </span>
                    <div className="inline-flex items-center gap-3 p-3 px-6 rounded-2xl bg-slate-900 border-2 border-amber-400 shadow-xl my-2">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-amber-300 tracking-widest">
                        {createdAssignment.assignmentCode}
                      </span>
                      <button
                        onClick={() => copyToClipboard(createdAssignment.assignmentCode, 'code')}
                        className="p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 transition-colors"
                        title={isAr ? 'نسخ الكود' : 'Copy Code'}
                      >
                        {copiedCode ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 max-w-md mx-auto mt-2">
                      {isAr
                        ? 'شارك هذا الكود المكون من 6 خانات مع طلابك ليفتحوا الواجب مباشرة من هواتفهم بدون تسجيل دخول!'
                        : 'Share this 6-character code with your students for instant zero-login access!'}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-amber-500/20 flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        const url = encodeAssignmentToShareableUrl(createdAssignment);
                        copyToClipboard(url, 'url');
                      }}
                      className="flex-1 min-w-[140px] py-2 px-3 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedUrl ? (isAr ? 'تم نسخ الرابط!' : 'URL Copied!') : (isAr ? 'نسخ رابط واتساب' : 'Copy WhatsApp URL')}</span>
                    </button>
                    <button
                      onClick={() => setShowQrModal(true)}
                      className="py-2 px-3 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span>{isAr ? 'عرض QR للفصل' : 'Classroom QR'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setAnalyticsCode(createdAssignment.assignmentCode);
                        setActiveTab('teacher_analytics');
                        handleFetchAnalytics(createdAssignment.assignmentCode);
                      }}
                      className="py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>{isAr ? 'متابعة النتائج' : 'View Results'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TEACHER ANALYTICS */}
          {activeTab === 'teacher_analytics' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={10}
                  value={analyticsCode}
                  onChange={(e) => setAnalyticsCode(e.target.value.toUpperCase())}
                  placeholder={isAr ? 'أدخل كود الواجب لعرض كشف الدرجات' : 'Enter Assignment Code for Roster'}
                  className={`flex-1 px-4 py-2 rounded-xl border text-sm font-mono uppercase ${
                    isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-700 text-amber-300'
                  }`}
                />
                <button
                  onClick={() => handleFetchAnalytics()}
                  disabled={analyticsLoading || !analyticsCode.trim()}
                  className="px-4 py-2 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all text-xs disabled:opacity-50"
                >
                  {analyticsLoading ? '...' : isAr ? 'عرض الكشف' : 'View Report'}
                </button>
              </div>

              {/* Quick links to recently created assignments */}
              {recentAssignments.length > 0 && (
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  <span className="text-[11px] text-slate-500 whitespace-nowrap">{isAr ? 'أكواد سابقة:' : 'Recent:'}</span>
                  {recentAssignments.map((asgn) => (
                    <button
                      key={asgn.assignmentCode}
                      onClick={() => {
                        setAnalyticsCode(asgn.assignmentCode);
                        handleFetchAnalytics(asgn.assignmentCode);
                      }}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border transition-colors ${
                        analyticsCode === asgn.assignmentCode
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                    >
                      {asgn.assignmentCode}
                    </button>
                  ))}
                </div>
              )}

              {/* Class Analytics View */}
              {classAnalytics && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="text-xs font-semibold text-slate-300">
                      {isAr ? `تقرير الفصل لكود: ${classAnalytics.assignmentCode}` : `Classroom Report: ${classAnalytics.assignmentCode}`}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCreateRemedial}
                        disabled={topicGaps.length === 0}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                        title={isAr ? 'توليد واجب علاجي يستهدف نقاط الضعف المسجلة' : 'Generate Targeted Remedial Assignment'}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>{isAr ? 'توليد واجب علاجي ذكي' : 'Smart Remedial'}</span>
                      </button>
                      <button
                        onClick={handleExportCsv}
                        disabled={currentSubmissions.length === 0}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                        title={isAr ? 'تصدير كشف الدرجات لملف إكسل متوافق مع اللغة العربية' : 'Export UTF-8 Arabic Excel CSV'}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{isAr ? 'تصدير كشف إكسل (CSV)' : 'Export CSV'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Remedial Generated Success Banner */}
                  {remedialCode && (
                    <div className="p-3 rounded-xl bg-indigo-950/70 border border-indigo-500/50 text-indigo-100 flex items-center justify-between animate-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-2 text-xs">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>
                          {isAr
                            ? `تم إنشاء واجب علاجي تلقائي للطلاب بكود: `
                            : `Remedial assignment created with code: `}
                          <strong className="font-mono text-amber-300 text-sm px-1.5 py-0.5 bg-slate-900 rounded border border-amber-400/40">
                            {remedialCode}
                          </strong>
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(remedialCode, 'code')}
                        className="px-2 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-colors"
                      >
                        {copiedCode ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الكود' : 'Copy')}
                      </button>
                    </div>
                  )}

                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-[11px] text-slate-400">{isAr ? 'عدد الطلاب المسلمين' : 'Submissions'}</div>
                      <div className="text-xl font-bold text-sky-400 mt-0.5">{classAnalytics.submissionCount}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-[11px] text-slate-400">{isAr ? 'متوسط نسبة النجاح' : 'Class Average'}</div>
                      <div className="text-xl font-bold text-emerald-400 mt-0.5">{classAnalytics.averagePercentage}%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-[11px] text-slate-400">{isAr ? 'الدرجة الوسيطة' : 'Median Score'}</div>
                      <div className="text-xl font-bold text-amber-400 mt-0.5">{classAnalytics.medianScore}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-[11px] text-slate-400">{isAr ? 'أعلى درجة بالفصل' : 'Highest Score'}</div>
                      <div className="text-xl font-bold text-purple-400 mt-0.5">{classAnalytics.highestScore}</div>
                    </div>
                  </div>

                  {/* Early Warning: At-Risk Students (< 50%) */}
                  <div className="p-3.5 rounded-xl border bg-slate-900/60 border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                        <AlertTriangle className={`w-4 h-4 ${atRiskList.length > 0 ? 'text-rose-400' : 'text-emerald-400'}`} />
                        <span>{isAr ? 'نظام الإنذار المبكر: الطلاب الأكثر احتياجاً للدعم (< 50%)' : 'Early Warning: Students At Risk (< 50%)'}</span>
                      </h4>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${atRiskList.length > 0 ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                        {atRiskList.length} {isAr ? 'طلاب' : 'students'}
                      </span>
                    </div>

                    {atRiskList.length === 0 ? (
                      <div className="p-3 text-center rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 text-xs">
                        {isAr
                          ? 'ممتاز! لا يوجد طلاب في منطقة الخطر الحرجة (< 50%) في هذا الواجب.'
                          : 'Great news! No students currently fall into the critical at-risk category (< 50%).'}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {atRiskList.map((st) => (
                          <div
                            key={st.studentId}
                            className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-rose-200">{st.studentName}</span>
                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                  st.riskLevel === 'critical' ? 'bg-rose-600 text-white' : 'bg-amber-600/80 text-white'
                                }`}>
                                  {st.riskLevel === 'critical' ? (isAr ? 'حرج جداً' : 'Critical') : (isAr ? 'متوسط' : 'Moderate')}
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5">
                                {isAr ? st.reasonAr : st.reasonEn}
                              </div>
                              <div className="text-[10px] text-indigo-300 mt-0.5">
                                💡 {isAr ? st.recommendedActionAr : st.recommendedActionEn}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 self-end sm:self-center">
                              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold font-mono">
                                {st.scorePct}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Topic Gap Priority Heatmap */}
                  {topicGaps.length > 0 && (
                    <div className="p-3.5 rounded-xl border bg-slate-900/60 border-slate-800">
                      <h4 className="text-xs font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                        <BarChart3 className="w-4 h-4 text-amber-400" />
                        <span>{isAr ? 'خريطة أولويات الفجوات المعرفية (وزن الامتحان)' : 'Topic Gap Priority Heatmap (Exam Weight)'}</span>
                      </h4>
                      <div className="space-y-2.5">
                        {topicGaps.map((gap, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-200">{isAr ? gap.topicTitleAr : (gap.topicTitleEn || gap.topicTitleAr)}</span>
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                    gap.examWeight >= 4
                                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                      : gap.examWeight === 3
                                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                      : 'bg-slate-800 text-slate-400'
                                  }`}
                                >
                                  {gap.examWeight >= 4
                                    ? (isAr ? 'وزن امتحاني مرتفع 🔥' : 'High Exam Weight')
                                    : gap.examWeight === 3
                                    ? (isAr ? 'وزن متوسط' : 'Medium Weight')
                                    : (isAr ? 'وزن عادي' : 'Standard')}
                                </span>
                              </div>
                              <span className="font-bold text-rose-400 font-mono">
                                {gap.failureRatePct}% {isAr ? 'نسبة الخطأ' : 'error rate'}
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  gap.failureRatePct >= 60
                                    ? 'bg-rose-500'
                                    : gap.failureRatePct >= 40
                                    ? 'bg-amber-500'
                                    : 'bg-emerald-500'
                                }`}
                                style={{ width: `${gap.failureRatePct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Common Error Types Analysis */}
                  {classAnalytics.commonErrorTypes.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                      <h4 className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                        <span>{isAr ? 'أبرز أسباب فقدان الدرجات بالفصل (تصنيف الأخطاء)' : 'Most Frequent Error Root Causes'}</span>
                      </h4>
                      <div className="space-y-2">
                        {classAnalytics.commonErrorTypes.map((err) => (
                          <div key={err.type} className="text-xs">
                            <div className="flex justify-between text-slate-400 mb-1">
                              <span>
                                {err.type === 'concept_gap'
                                  ? (isAr ? 'فجوة في فهم المفهوم العلمي والقانون' : 'Concept / Law Misunderstanding')
                                  : err.type === 'calculation_error'
                                  ? (isAr ? 'خطأ حسابي أو إشارة رقمية' : 'Calculation / Sign Error')
                                  : err.type === 'comprehension_misread'
                                  ? (isAr ? 'تسرع وقراءة خاطئة للمطلوب' : 'Misread Question / Negation')
                                  : err.type}
                              </span>
                              <span className="font-bold text-slate-200">{err.count} ({err.percentage}%)</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                              <div
                                className="h-full bg-rose-500 rounded-full"
                                style={{ width: `${err.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Student Submissions Table */}
                  <div className="rounded-xl border border-slate-800 overflow-hidden">
                    <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 text-xs font-bold text-slate-300">
                      {isAr ? 'كشف تسليم الطلاب الأخير' : 'Recent Student Submissions'}
                    </div>
                    {classAnalytics.recentSubmissions.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-500">
                        {isAr
                          ? 'لم يقم أي طالب بتسليم الواجب حتى الآن. شارك الكود ليبدأ الطلاب.'
                          : 'No submissions recorded yet for this assignment code.'}
                      </div>
                    ) : (
                      <div className="divide-y divide-slate-800">
                        {classAnalytics.recentSubmissions.map((sub, idx) => (
                          <div key={idx} className="p-3 flex items-center justify-between text-xs hover:bg-slate-800/40">
                            <div className="font-semibold text-slate-200">{sub.studentName}</div>
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-slate-400">
                                {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded font-bold ${
                                  sub.percentage >= 80
                                    ? 'bg-emerald-500/20 text-emerald-400'
                                    : sub.percentage >= 50
                                    ? 'bg-amber-500/20 text-amber-400'
                                    : 'bg-rose-500/20 text-rose-400'
                                }`}
                              >
                                {sub.score} ({sub.percentage}%)
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: TEACHER GRADING */}
          {activeTab === 'teacher_grading' && (
            <TeacherGradingDashboard
              lang={lang}
              theme={theme}
              initialAssignmentCode={analyticsCode || createdAssignment?.assignmentCode || ''}
            />
          )}

          {/* TAB: TEACHER QUESTION BANK */}
          {activeTab === 'teacher_question_bank' && (
            <TeacherQuestionBankView
              lang={lang}
              theme={theme}
              onGenerateAssignmentFromQuestions={handleCreateFromCustomQuestions}
            />
          )}
        </div>
      </div>

      {/* Classroom Smartboard QR Code Modal */}
      {showQrModal && createdAssignment && (
        <ClassroomAssignmentQRCode
          code={createdAssignment.assignmentCode}
          url={encodeAssignmentToShareableUrl(createdAssignment)}
          title={isAr ? (createdAssignment.titleAr || createdAssignment.title) : createdAssignment.title}
          subject={createdAssignment.subjectId}
          onClose={() => setShowQrModal(false)}
          lang={lang}
        />
      )}
    </div>
  );
};
