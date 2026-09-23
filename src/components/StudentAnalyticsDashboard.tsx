import React, { useState, useMemo } from 'react';
import type { Language } from '../i18n/translations';
import type { CurriculumType } from '../types/curriculum';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  getStudentAnalytics,
  getReadinessScore,
  getMasteryRadarData,
  getWeakestChapters,
  resetStudentAnalytics,
  getPredictiveScore,
  setActualScoreCalibration,
  resetActualScoreCalibration,
  type StudentAnalyticsState,
  type RadarTrackMode,
} from '../services/studentAnalyticsService';
import {
  evaluateBadges,
  resetBadgeHistory,
} from '../services/achievementBadgeService';
import {
  BrainCircuit,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Printer,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  BarChart3,
  Target,
  Play,
  Award,
  Trophy,
  Lock,
  ShieldCheck,
  FileCheck,
  MessageSquare,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import {
  getRegisteredCertificates,
  type OfficialCertificateRecord,
} from '../services/certificateRegistryService';
import { CertificateVerificationModal } from './CertificateVerificationModal';
import { OfficialPerformanceCertificate } from './OfficialPerformanceCertificate';
import { ParentProgressReportModal } from './ParentProgressReportModal';
import { MinistryResultsModal } from './MinistryResultsModal';
import { GraduationCap } from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  curriculum?: CurriculumType;
  onNavigateTab: (tab: string) => void;
  onStartTargetedQuiz?: (subjectId: string, chapterId?: string) => void;
  onStartDiagnosticExam?: () => void;
  onStartPastPapers?: (subjectId?: string) => void;
}

export const StudentAnalyticsDashboard: React.FC<Props> = ({
  lang,
  theme = 'dark',
  curriculum: _curriculum,
  onNavigateTab,
  onStartTargetedQuiz,
  onStartDiagnosticExam,
  onStartPastPapers,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [analyticsState, setAnalyticsState] = useState<StudentAnalyticsState>(() =>
    getStudentAnalytics()
  );

  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [badgeFilter, setBadgeFilter] = useState<string>('all');
  const [registeredCertificates, setRegisteredCertificates] = useState<OfficialCertificateRecord[]>(
    () => getRegisteredCertificates()
  );
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState<boolean>(false);
  const [verificationTargetSerial, setVerificationTargetSerial] = useState<string>('');
  const [activeCertificateToView, setActiveCertificateToView] = useState<OfficialCertificateRecord | null>(null);
  const [showCalibrationInput, setShowCalibrationInput] = useState(false);
  const [calibrationValue, setCalibrationValue] = useState('');
  const [isParentReportModalOpen, setIsParentReportModalOpen] = useState<boolean>(false);
  const [isMinistryModalOpen, setIsMinistryModalOpen] = useState<boolean>(false);

  const refreshAnalytics = () => {
    setAnalyticsState(getStudentAnalytics());
    setRegisteredCertificates(getRegisteredCertificates());
  };

  const [radarTrackMode, setRadarTrackMode] = useState<RadarTrackMode>('stem5');

  const readinessScore = useMemo(() => getReadinessScore(analyticsState), [analyticsState]);
  const radarPoints = useMemo(() => getMasteryRadarData(analyticsState, radarTrackMode), [analyticsState, radarTrackMode]);
  const predictiveScore = useMemo(() => getPredictiveScore(analyticsState), [analyticsState]);
  const weakestChapters = useMemo(() => getWeakestChapters(analyticsState, 3), [analyticsState]);

  // Evaluate Achievement Badges
  const badgeResult = useMemo(() => evaluateBadges(analyticsState), [analyticsState]);

  const filteredBadges = useMemo(() => {
    if (badgeFilter === 'all') return badgeResult.badges;
    return badgeResult.badges.filter((b) => b.category === badgeFilter);
  }, [badgeResult, badgeFilter]);

  // Overall accuracy
  const overallAccuracy = useMemo(() => {
    if (analyticsState.totalAttempted === 0) return 0;
    return Math.round((analyticsState.totalCorrect / analyticsState.totalAttempted) * 100);
  }, [analyticsState]);

  // Average time per question
  const avgPaceSeconds = useMemo(() => {
    if (analyticsState.totalAttempted === 0) return 0;
    return Math.round(analyticsState.totalTimeSpentSec / analyticsState.totalAttempted);
  }, [analyticsState]);

  // Reset confirmation
  const handleReset = () => {
    if (
      window.confirm(
        isAr
          ? 'هل أنت متأكد من رغبتك في إعادة تعيين كافة إحصائيات الأداء واختبارات الجاهزية وسجل الشارات؟'
          : 'Are you sure you want to reset all analytics, practice history, and badge unlocks?'
      )
    ) {
      resetStudentAnalytics();
      resetBadgeHistory();
      refreshAnalytics();
    }
  };

  // Printable handler
  const handlePrint = () => {
    window.print();
  };

  // SVG Radar Chart Math (Dynamic polygon adapting to STEM, Humanities, or All-8)
  const radarSvg = useMemo(() => {
    const size = 360;
    const center = size / 2;
    const numPoints = Math.max(3, radarPoints.length);
    const radius = numPoints > 5 ? 105 : 120;

    // Angle offset so first point is at the very top (-90 degrees)
    const angleStep = (2 * Math.PI) / numPoints;
    const initialAngle = -Math.PI / 2;

    // Generate concentric grid rings (20%, 40%, 60%, 80%, 100%)
    const gridRings = [0.2, 0.4, 0.6, 0.8, 1.0].map((level) => {
      const pts = [];
      for (let i = 0; i < numPoints; i++) {
        const angle = initialAngle + i * angleStep;
        const x = center + radius * level * Math.cos(angle);
        const y = center + radius * level * Math.sin(angle);
        pts.push(`${x},${y}`);
      }
      return { level: Math.round(level * 100), points: pts.join(' ') };
    });

    // Generate axis rays
    const axisRays = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = initialAngle + i * angleStep;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      axisRays.push({ x1: center, y1: center, x2: x, y2: y });
    }

    // Student polygon vertices
    const polygonPoints: Array<{ x: number; y: number; pct: number }> = [];
    radarPoints.forEach((pt, i) => {
      const angle = initialAngle + i * angleStep;
      // Default to small baseline 10% if unattempted so polygon is visible
      const effectivePct = Math.max(10, pt.scorePct) / 100;
      const x = center + radius * effectivePct * Math.cos(angle);
      const y = center + radius * effectivePct * Math.sin(angle);
      polygonPoints.push({ x, y, pct: pt.scorePct });
    });

    // Label positioning (slightly further than radius)
    const labels = radarPoints.map((pt, i) => {
      const angle = initialAngle + i * angleStep;
      const labelRadius = radius + (numPoints > 5 ? 28 : 34);
      const x = center + labelRadius * Math.cos(angle);
      const y = center + labelRadius * Math.sin(angle);
      return {
        ...pt,
        x,
        y,
      };
    });

    return {
      size,
      center,
      gridRings,
      axisRays,
      polygonString: polygonPoints.map((p) => `${p.x},${p.y}`).join(' '),
      polygonPoints,
      labels,
    };
  }, [radarPoints]);

  // Readiness status badge label & color
  const readinessBadge = useMemo(() => {
    if (readinessScore >= 85) {
      return {
        label: isAr ? 'جاهزية متقدمة للتفوق والدرجة النهائية 🏆' : 'Advanced Final Exam Mastery 🏆',
        color: isLight
          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      };
    } else if (readinessScore >= 70) {
      return {
        label: isAr ? 'مستوى واعد وقريب من الإتقان التام 🎯' : 'Promising Near-Mastery Level 🎯',
        color: isLight
          ? 'bg-cyan-100 text-cyan-800 border-cyan-300'
          : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      };
    } else if (readinessScore >= 50) {
      return {
        label: isAr ? 'مستوى متوسط يحتاج لتعزيز بعض الفصول 📈' : 'Moderate - Targeted Practice Recommended 📈',
        color: isLight
          ? 'bg-amber-100 text-amber-800 border-amber-300'
          : 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      };
    } else {
      return {
        label: isAr ? 'مرحلة البناء الأولي - ابدأ الاختبارات التجريبية 🚀' : 'Baseline - Start Practice Quizzes 🚀',
        color: isLight
          ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
          : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      };
    }
  }, [readinessScore, isAr, isLight]);

  // Filtered chapters
  const allChapterRecords = useMemo(() => {
    const list = Object.values(analyticsState.chapters);
    if (selectedSubjectFilter === 'all') return list;
    return list.filter((ch) => ch.subjectCategory === selectedSubjectFilter);
  }, [analyticsState, selectedSubjectFilter]);

  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  return (
    <div className="space-y-8" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Hero Diagnostic & Readiness Command Center */}
      <div className={`relative overflow-hidden rounded-3xl border-2 p-6 sm:p-8 shadow-2xl backdrop-blur-md ${
        isLight
          ? 'bg-gradient-to-br from-indigo-50/90 via-slate-50 to-cyan-50/80 border-indigo-200/80 shadow-md'
          : 'bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 border-indigo-800/40'
      }`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left / Info & Title */}
          <div className="space-y-4 max-w-2xl text-center lg:text-start">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isLight
                ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                : 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
            }`}>
              <BrainCircuit className={`w-4 h-4 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{isAr ? 'رادار الإتقان والتحليلات الأكاديمية' : 'Student Mastery Radar & Analytics'}</span>
            </div>

            <h1 className={`text-2xl sm:text-4xl font-black tracking-tight leading-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {isAr ? 'مؤشر الجاهزية للامتحانات الرسمية 🎯' : 'Curriculum Examination Readiness Index 🎯'}
            </h1>

            <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              {isAr
                ? 'تشخيص فوري شامل لمستوى الطالب المعرفي والمهاري، مبني على أوزان مواصفات الورقة الامتحانية لوزارة التربية والتعليم، مع رصد دقيق لدقة الإجابات، والمهارات العليا HOTS، ونقاط القوة والضعف.'
                : 'Comprehensive multidimensional diagnostic engine calibrated against official Ministry examination blueprints, computing real-time readiness across accuracy, cognitive tiers, and High Order Thinking Skills.'}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <div className={`px-3 py-1.5 rounded-xl border text-xs font-extrabold flex items-center gap-1.5 ${readinessBadge.color}`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{readinessBadge.label}</span>
              </div>

              <button
                onClick={() => {
                  if (onStartDiagnosticExam) {
                    onStartDiagnosticExam();
                  } else {
                    onNavigateTab('testGenerator');
                  }
                }}
                className="no-print px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white border border-cyan-400/40 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <Target className="w-3.5 h-3.5 text-cyan-200" />
                <span>{isAr ? 'اختبار تشخيص شامل (٢٠)' : 'Diagnostic Exam (20 Qs)'}</span>
              </button>

              {onStartPastPapers && (
                <button
                  onClick={() => onStartPastPapers()}
                  className="no-print px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <EgyptFlag className="h-3 w-auto rounded-[2px]" />
                  <Award className="w-3.5 h-3.5 text-amber-200" />
                  <span>{isAr ? 'امتحانات الوزارة الرسمية (٢٠٢١ - ٢٠٢٥)' : 'Official Past Papers (2021-2025)'}</span>
                </button>
              )}

              <button
                onClick={() => setIsVerificationModalOpen(true)}
                className="no-print px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border border-emerald-400/40 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
                <span>{isAr ? 'بوابة التحقق من الشهادات 🛡️' : 'Verify Credentials 🛡️'}</span>
              </button>

              <button
                onClick={() => setIsParentReportModalOpen(true)}
                className="no-print px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white border border-emerald-400/40 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
                <span>{isAr ? 'موجز ولي الأمر (واتساب) 💬' : 'Parent Weekly Digest 💬'}</span>
              </button>

              <button
                onClick={handlePrint}
                className={`no-print px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-xs'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isAr ? 'طباعة تقرير الجاهزية' : 'Print Readiness Card'}</span>
              </button>

              {analyticsState.totalAttempted > 0 && (
                <button
                  onClick={handleReset}
                  className={`no-print px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isLight
                      ? 'bg-white hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-300'
                      : 'bg-slate-800/40 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800'
                  }`}
                  title={isAr ? 'إعادة تعيين السجل' : 'Reset History'}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right / Readiness Circular Gauge */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r="68"
                  className={isLight ? 'stroke-slate-200' : 'stroke-slate-800'}
                  strokeWidth="12"
                  fill="transparent"
                />
                {/* Progress Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r="68"
                  className="transition-all duration-1000 ease-out"
                  strokeWidth="12"
                  strokeLinecap="round"
                  stroke="url(#readinessGradient)"
                  fill="transparent"
                  strokeDasharray="427.2"
                  strokeDashoffset={427.2 - (427.2 * readinessScore) / 100}
                />
                <defs>
                  <linearGradient id="readinessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {isAr ? `${toHindiDigits(readinessScore)}%` : `${readinessScore}%`}
                </span>
                <span className={`text-[11px] font-extrabold uppercase tracking-wider mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isAr ? 'مؤشر الجاهزية' : 'Readiness'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Quantitative KPIs */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
          <div className={`p-3 sm:p-4 rounded-2xl border text-center ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/80 border-slate-800'}`}>
            <span className={`text-[11px] font-bold block mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isAr ? 'الأسئلة المنجزة' : 'Practiced Questions'}
            </span>
            <span className={`text-xl sm:text-2xl font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {isAr ? toHindiDigits(analyticsState.totalAttempted) : analyticsState.totalAttempted}
            </span>
          </div>

          <div className={`p-3 sm:p-4 rounded-2xl border text-center ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/80 border-slate-800'}`}>
            <span className={`text-[11px] font-bold block mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isAr ? 'دقة الإجابات' : 'Overall Accuracy'}
            </span>
            <span className={`text-xl sm:text-2xl font-black ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
              {isAr ? `${toHindiDigits(overallAccuracy)}%` : `${overallAccuracy}%`}
            </span>
          </div>

          <div className={`p-3 sm:p-4 rounded-2xl border text-center ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/80 border-slate-800'}`}>
            <span className={`text-[11px] font-bold block mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isAr ? 'متوسط سرعة السؤال' : 'Avg Pace / Question'}
            </span>
            <span className={`text-xl sm:text-2xl font-black ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`}>
              {isAr ? `${toHindiDigits(avgPaceSeconds)}ث` : `${avgPaceSeconds}s`}
            </span>
          </div>

          <div className={`p-3 sm:p-4 rounded-2xl border text-center ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/80 border-slate-800'}`}>
            <span className={`text-[11px] font-bold block mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isAr ? 'الاختبارات المكتملة' : 'Quizzes Completed'}
            </span>
            <span className={`text-xl sm:text-2xl font-black ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`}>
              {isAr ? toHindiDigits(analyticsState.quizzesCompleted) : analyticsState.quizzesCompleted}
            </span>
          </div>
        </div>

        {/* AI Thanaweya Predictive Total Score & University Tier Card */}
        <div className={`mt-4 p-5 sm:p-6 rounded-3xl border shadow-xl ${
          isLight
            ? 'bg-gradient-to-br from-amber-50/80 via-white to-indigo-50/70 border-amber-200/90 shadow-md'
            : 'bg-gradient-to-br from-indigo-950/60 via-slate-900 to-amber-950/40 border-indigo-500/30 shadow-2xl'
        }`}>
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 font-black shadow-lg">
                <Trophy className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isLight ? 'text-amber-800' : 'text-amber-400'
                  }`}>
                    {isAr ? 'محرك التنبؤ الذكي لمجموع الثانوية العامة' : 'AI Thanaweya Score Predictor Engine'}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                    isLight
                      ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
                      : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                  }`}>
                    {isAr ? 'المقياس الرسمي: ٤١٠ درجة' : 'Official 410-Mark Standard'}
                  </span>
                </div>
                <h3 className={`text-base sm:text-lg font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {isAr ? 'التوقع التراكمي لنتيجة مكتب التنسيق' : 'Projected Ministerial Score & University Admission Tier'}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="text-right rtl:text-right">
                <span className={`text-[11px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'المجموع المتوقع' : 'Projected Score'}</span>
                <span className={`text-2xl sm:text-3xl font-black font-mono ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>
                  {isAr ? toHindiDigits(predictiveScore.predictedTotalMarks) : predictiveScore.predictedTotalMarks}
                  <span className={`text-sm font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}> / {isAr ? '٤١٠' : '410'}</span>
                </span>
              </div>
              <div className={`h-10 w-px hidden sm:block ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`} />
              <div className="text-right rtl:text-right">
                <span className={`text-[11px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'النسبة المئوية' : 'Percentage'}</span>
                <span className={`text-2xl sm:text-3xl font-black font-mono ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                  {isAr ? `${toHindiDigits(predictiveScore.predictedPercentage)}%` : `${predictiveScore.predictedPercentage}%`}
                </span>
              </div>
            </div>
          </div>

          {/* Statistical Confidence Interval Badge */}
          {predictiveScore.confidenceInterval && predictiveScore.confidenceInterval.marginOfErrorPercentage > 0 && (
            <div className="mt-2.5 flex items-center justify-end">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${
                isLight ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
              }`}>
                <span>{isAr ? 'فاصل الثقة الإحصائي (٩٥٪):' : '95% Confidence Interval:'}</span>
                <strong className="font-mono">
                  [{isAr ? toHindiDigits(predictiveScore.confidenceInterval.lowerPercentage) : predictiveScore.confidenceInterval.lowerPercentage}% - {isAr ? toHindiDigits(predictiveScore.confidenceInterval.upperPercentage) : predictiveScore.confidenceInterval.upperPercentage}%]
                </strong>
                <span className="text-slate-400 font-mono">(±{predictiveScore.confidenceInterval.marginOfErrorPercentage}%)</span>
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
            <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-950/60 border-slate-800/80'}`}>
              <span className={`font-bold block mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isAr ? 'الشريحة والتصنيف المتوقع:' : 'Predicted Admission Tier:'}
              </span>
              <p className={`text-sm font-black ${isLight ? 'text-indigo-800' : 'text-indigo-300'}`}>
                {isAr ? predictiveScore.universityTrackTierAr : predictiveScore.universityTrackTierEn}
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-950/60 border-slate-800/80'}`}>
              <span className={`font-bold block mb-1.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isAr ? 'الكليات والقطاعات المستهدفة الموصى بها:' : 'Target Faculty Recommendations:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(isAr ? predictiveScore.targetFacultyRecommendationsAr : predictiveScore.targetFacultyRecommendationsEn).map((fac: string, idx: number) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded-lg border text-[11px] font-medium ${
                      isLight
                        ? 'bg-slate-100 text-slate-800 border-slate-200'
                        : 'bg-slate-800 text-slate-200 border-slate-700'
                    }`}
                  >
                    {fac}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Model Calibration Row */}
          <div className={`mt-4 pt-3 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCalibrationInput(!showCalibrationInput)}
                className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  predictiveScore.hasCustomCalibration
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                }`}
              >
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {predictiveScore.hasCustomCalibration
                    ? (isAr ? 'تمت معايرة النموذج بنتيجتك الفعلية' : 'Calibrated with Real Exam Score')
                    : (isAr ? 'معايرة التوقع بدرجة امتحان تجريبي' : 'Calibrate with Mock Exam Score')}
                </span>
              </button>

              <button
                onClick={() => setIsMinistryModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30"
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isAr ? 'بوابة نتائج الوزارة والمعايرة الرسمية' : 'Ministry Results & Calibration'}</span>
              </button>

              {predictiveScore.hasCustomCalibration && (
                <button
                  onClick={() => {
                    resetActualScoreCalibration();
                    refreshAnalytics();
                  }}
                  className="text-[11px] text-rose-400 hover:underline"
                >
                  {isAr ? 'إعادة ضبط' : 'Reset'}
                </button>
              )}
            </div>

            <p className="text-[11px] text-slate-500 text-center sm:text-start">
              {isAr ? predictiveScore.disclaimerAr : predictiveScore.disclaimerEn}
            </p>
          </div>

          {/* Inline Calibration Input */}
          {showCalibrationInput && (
            <div className={`mt-3 p-3 rounded-xl border flex flex-col sm:flex-row items-center gap-2.5 animate-in fade-in duration-200 ${
              isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-700'
            }`}>
              <span className="text-xs text-slate-300">
                {isAr
                  ? 'أدخل درجتك في أي امتحان تجريبي وزاري (من ٤١٠ أو كنسبة مئوية ٪):'
                  : 'Enter your score on any ministerial mock exam (out of 410 or %):'}
              </span>
              <input
                type="number"
                value={calibrationValue}
                onChange={(e) => setCalibrationValue(e.target.value)}
                placeholder="مثال: 385 أو 94"
                className={`px-3 py-1 text-xs rounded-lg border font-mono w-28 text-center ${
                  isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-800 border-slate-600 text-amber-300'
                }`}
              />
              <button
                onClick={() => {
                  const val = parseFloat(calibrationValue);
                  if (!isNaN(val) && val > 0) {
                    const isPct = val <= 100;
                    setActualScoreCalibration(val, isPct, analyticsState);
                    setShowCalibrationInput(false);
                    setCalibrationValue('');
                    refreshAnalytics();
                  }
                }}
                className="px-3.5 py-1 text-xs rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors"
              >
                {isAr ? 'حفظ ومعايرة' : 'Apply'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* First-Time Diagnostic Calibration Hero Card (When 0 Attempted) */}
      {analyticsState.totalAttempted === 0 && (
        <div className={`relative overflow-hidden rounded-3xl border-2 p-6 sm:p-8 shadow-2xl space-y-4 ${
          isLight
            ? 'bg-gradient-to-r from-cyan-50/90 via-white to-indigo-50/80 border-cyan-300/80 shadow-md'
            : 'bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border-cyan-500/40 shadow-2xl'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start max-w-2xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-extrabold ${
                isLight
                  ? 'bg-cyan-100 border-cyan-300 text-cyan-800'
                  : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
              }`}>
                <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
                <span>{isAr ? 'معايرة رادار الإتقان لأول مرة' : 'First-Time Mastery Radar Calibration'}</span>
              </div>
              <h2 className={`text-xl sm:text-2xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {isAr
                  ? 'خض اختبار تحديد المستوى والتشخيص الشامل (٢٠ سؤالاً) 🎯'
                  : 'Take the 20-Q Comprehensive Diagnostic Benchmark Exam 🎯'}
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {isAr
                  ? 'لم تقم بعد بأداء اختبارات تدريبية. تم تصميم هذا الاختبار المتوازن خصيصاً لتفعيل رادار الإتقان الخماسي وحساب مؤشر جاهزيتك بدقة، بواقع ٤ أسئلة لكل فرع من فروع الثانوية العامة موزعة بالتساوي على مستويات بلوم المعرفية (تأسيسي، قياسي، تفكير عليا).'
                  : 'You have not taken any practice quizzes yet. This balanced diagnostic exam was specifically engineered to calibrate all 5 radar vertices and compute your genuine readiness index with 4 questions per domain across Bloom cognitive tiers.'}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                  isLight ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-blue-950/80 border-blue-800 text-blue-300'
                }`}>
                  📐 {isAr ? 'الرياضيات البحتة (٤)' : 'Pure Math (4)'}
                </span>
                <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                  isLight ? 'bg-indigo-50 border-indigo-200 text-indigo-800' : 'bg-indigo-950/80 border-indigo-800 text-indigo-300'
                }`}>
                  ⚙️ {isAr ? 'الرياضيات التطبيقية (٤)' : 'Applied Math (4)'}
                </span>
                <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                  isLight ? 'bg-cyan-50 border-cyan-200 text-cyan-800' : 'bg-cyan-950/80 border-cyan-800 text-cyan-300'
                }`}>
                  ⚡ {isAr ? 'الفيزياء (٤)' : 'Physics (4)'}
                </span>
                <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                  isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-emerald-950/80 border-emerald-800 text-emerald-300'
                }`}>
                  🧪 {isAr ? 'الكيمياء (٤)' : 'Chemistry (4)'}
                </span>
                <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                  isLight ? 'bg-purple-50 border-purple-200 text-purple-800' : 'bg-purple-950/80 border-purple-800 text-purple-300'
                }`}>
                  🧬 {isAr ? 'الأحياء (٤)' : 'Biology (4)'}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => {
                  if (onStartDiagnosticExam) {
                    onStartDiagnosticExam();
                  } else {
                    onNavigateTab('testGenerator');
                  }
                }}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl hover:shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Target className="w-5 h-5 text-white" />
                <span>{isAr ? 'بدء اختبار التشخيص الشامل (٣٠ دقيقة) 🚀' : 'Start Diagnostic Exam (30 Min) 🚀'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid Layout: Mastery Radar Pentagon + Cognitive Level Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Pentagon Mastery Radar (7 Cols) */}
        <div className={`lg:col-span-7 border rounded-3xl p-6 shadow-xl space-y-4 ${
          isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
        }`}>
          <div className={`flex items-center justify-between border-b pb-3 flex-wrap gap-2 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className={`flex items-center gap-2 font-bold text-base sm:text-lg ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              <Target className={`w-5 h-5 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>
                {radarTrackMode === 'stem5'
                  ? (isAr ? 'رادار الإتقان الخماسي (علمي)' : '5-Point STEM Mastery Radar')
                  : radarTrackMode === 'humanities'
                  ? (isAr ? 'رادار الإتقان الرباعي (أدبي)' : '4-Point Humanities Mastery Radar')
                  : (isAr ? 'رادار الإتقان الشامل (٨ مواد)' : 'Comprehensive 8-Subject Mastery Radar')}
              </span>
            </div>

            {/* Radar Track Mode Selector */}
            <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs ${
              isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
            }`}>
              <button
                onClick={() => setRadarTrackMode('stem5')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  radarTrackMode === 'stem5'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'علمي (٥ مواد)' : 'STEM (5)'}
              </button>
              <button
                onClick={() => setRadarTrackMode('humanities')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  radarTrackMode === 'humanities'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'أدبي (٤ مواد)' : 'Humanities (4)'}
              </button>
              <button
                onClick={() => setRadarTrackMode('all8')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  radarTrackMode === 'all8'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'الشامل (٨ مواد)' : 'All 8 Core'}
              </button>
            </div>
          </div>

          {/* Scalable Vector Graphics Pentagon Chart */}
          <div className="relative flex items-center justify-center p-2 sm:p-4">
            <svg
              viewBox={`0 0 ${radarSvg.size} ${radarSvg.size}`}
              className="w-full max-w-sm sm:max-w-md overflow-visible"
            >
              {/* Concentric Pentagon Grid Rings */}
              {radarSvg.gridRings.map((ring) => (
                <polygon
                  key={ring.level}
                  points={ring.points}
                  fill="none"
                  stroke={isLight ? '#cbd5e1' : '#334155'}
                  strokeWidth="1"
                  strokeDasharray={ring.level < 100 ? '3 3' : 'none'}
                />
              ))}

              {/* Rays from center */}
              {radarSvg.axisRays.map((ray, idx) => (
                <line
                  key={idx}
                  x1={ray.x1}
                  y1={ray.y1}
                  x2={ray.x2}
                  y2={ray.y2}
                  stroke={isLight ? '#cbd5e1' : '#334155'}
                  strokeWidth="1"
                />
              ))}

              {/* Student Mastery Filled Polygon */}
              <polygon
                points={radarSvg.polygonString}
                fill="url(#radarFill)"
                stroke="#6366F1"
                strokeWidth="3"
                className="transition-all duration-700 ease-out drop-shadow-lg"
              />

              {/* Vertex Circular Dots */}
              {radarSvg.polygonPoints.map((pt, idx) => (
                <circle
                  key={idx}
                  cx={pt.x}
                  cy={pt.y}
                  r="5"
                  className={`fill-cyan-500 ${isLight ? 'stroke-white' : 'stroke-slate-900'}`}
                  strokeWidth="2"
                />
              ))}

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.35" />
                </linearGradient>
              </defs>

              {/* Vertex Labels & Values */}
              {radarSvg.labels.map((lbl, idx) => (
                <g key={idx} transform={`translate(${lbl.x}, ${lbl.y})`}>
                  <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`text-[10px] sm:text-[11px] font-black ${isLight ? 'fill-slate-800' : 'fill-slate-200'}`}
                  >
                    {isAr ? lbl.labelAr : lbl.labelEn}
                  </text>
                  <text
                    y="14"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`text-[10px] font-bold ${isLight ? 'fill-cyan-700 font-extrabold' : 'fill-cyan-400'}`}
                  >
                    {isAr ? `${toHindiDigits(lbl.scorePct)}%` : `${lbl.scorePct}%`}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div
            className={`grid gap-2 pt-3 border-t text-center ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            } ${
              radarPoints.length === 4
                ? 'grid-cols-2 sm:grid-cols-4'
                : radarPoints.length === 8
                ? 'grid-cols-2 sm:grid-cols-4'
                : 'grid-cols-2 sm:grid-cols-5'
            }`}
          >
            {radarPoints.map((pt) => (
              <div key={pt.dimensionKey} className={`p-2 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}>
                <span className={`text-[10px] font-bold block truncate ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {isAr ? pt.labelAr : pt.labelEn}
                </span>
                <span className="text-sm font-black" style={{ color: pt.color }}>
                  {isAr ? `${toHindiDigits(pt.scorePct)}%` : `${pt.scorePct}%`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right / Cognitive Distribution & Strategic Priorities (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Cognitive Level Tiers (Bloom's Taxonomy / Ministry Blueprint) */}
          <div className={`border rounded-3xl p-6 shadow-xl space-y-4 ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
          }`}>
            <div className={`border-b pb-3 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
              <h3 className={`text-base font-bold flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                <BarChart3 className={`w-5 h-5 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />
                <span>{isAr ? 'مستويات التفكير المعرفي (بلوم)' : 'Cognitive Thinking Tiers'}</span>
              </h3>
              <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isAr ? 'المواصفة الوزارية: ۳۰٪ تأسيسي، ٤۰٪ معياري، ۳۰٪ مستويات عليا' : 'Ministry Specs: 30% Foundational, 40% Standard, 30% HOTS'}
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Foundational Easy */}
              {(() => {
                const cog = analyticsState.cognitive.easy;
                const pct = cog.attempted > 0 ? Math.round((cog.correct / cog.attempted) * 100) : 0;
                return (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>{isAr ? 'المستوى التأسيسي (سهل)' : 'Foundational (Easy)'}</span>
                      <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                        {isAr ? `${toHindiDigits(pct)}% (${toHindiDigits(cog.correct)}/${toHindiDigits(cog.attempted)})` : `${pct}% (${cog.correct}/${cog.attempted})`}
                      </span>
                    </div>
                    <div className={`w-full h-2.5 rounded-full overflow-hidden border ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                      <div className="bg-emerald-500 h-full rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })()}

              {/* Standard Medium */}
              {(() => {
                const cog = analyticsState.cognitive.medium;
                const pct = cog.attempted > 0 ? Math.round((cog.correct / cog.attempted) * 100) : 0;
                return (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className={isLight ? 'text-sky-700' : 'text-sky-400'}>{isAr ? 'المستوى المعياري (متوسط)' : 'Standard (Medium)'}</span>
                      <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                        {isAr ? `${toHindiDigits(pct)}% (${toHindiDigits(cog.correct)}/${toHindiDigits(cog.attempted)})` : `${pct}% (${cog.correct}/${cog.attempted})`}
                      </span>
                    </div>
                    <div className={`w-full h-2.5 rounded-full overflow-hidden border ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                      <div className="bg-sky-500 h-full rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })()}

              {/* HOTS Challenge */}
              {(() => {
                const cog = analyticsState.cognitive.hots;
                const pct = cog.attempted > 0 ? Math.round((cog.correct / cog.attempted) * 100) : 0;
                return (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className={isLight ? 'text-amber-700' : 'text-amber-400'}>{isAr ? 'المستويات العليا (HOTS للتفوق)' : 'High Order Skills (HOTS)'}</span>
                      <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                        {isAr ? `${toHindiDigits(pct)}% (${toHindiDigits(cog.correct)}/${toHindiDigits(cog.attempted)})` : `${pct}% (${cog.correct}/${cog.attempted})`}
                      </span>
                    </div>
                    <div className={`w-full h-2.5 rounded-full overflow-hidden border ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                      <div className="bg-amber-500 h-full rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Strategic Remediation Queue (Top 3 Weakest Chapters) */}
          <div className={`border rounded-3xl p-6 shadow-xl space-y-4 ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
          }`}>
            <div className={`border-b pb-3 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
              <h3 className={`text-base font-bold flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                <AlertTriangle className={`w-5 h-5 ${isLight ? 'text-rose-600' : 'text-rose-400'}`} />
                <span>{isAr ? 'خطة التدريب الموصى بها اليوم' : 'Targeted Practice Queue'}</span>
              </h3>
              <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isAr ? 'أهم الفصول المرشحة للمراجعة لرفع مؤشر الجاهزية' : 'Chapters with lowest accuracy needing immediate reinforcement'}
              </p>
            </div>

            {weakestChapters.length === 0 ? (
              <div className="text-center p-6 space-y-2">
                <CheckCircle2 className={`w-8 h-8 mx-auto ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />
                <p className={`text-xs font-semibold ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {isAr ? 'لا توجد فصول متعثرة حالياً! أداؤك متوازن ومستقر.' : 'No struggling chapters detected. Great balance!'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {weakestChapters.map((ch) => {
                  const acc = Math.round((ch.correct / ch.attempted) * 100);
                  const title = isAr ? ch.chapterTitleAr : ch.chapterTitleEn;
                  const branch = isAr ? ch.branchTitleAr : ch.branchTitleEn;

                  return (
                    <div
                      key={ch.chapterId}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${
                        isLight ? 'bg-rose-50/60 border-rose-200' : 'bg-slate-950/70 border-rose-900/40'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{title}</div>
                        <div className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{branch}</div>
                        <div className={`text-[10px] font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>
                          {isAr
                            ? `نسبة الدقة: ${toHindiDigits(acc)}% (${toHindiDigits(ch.correct)}/${toHindiDigits(ch.attempted)})`
                            : `Accuracy: ${acc}% (${ch.correct}/${ch.attempted})`}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (onStartTargetedQuiz) {
                            onStartTargetedQuiz(ch.subjectCategory, ch.chapterId);
                          } else {
                            onNavigateTab('testGenerator');
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md flex items-center gap-1 cursor-pointer shrink-0 transition-all"
                      >
                        <span>{isAr ? 'تدريب' : 'Practice'}</span>
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Official Past Papers & Republic Cohort Benchmark Hub */}
      <div className={`border-2 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden ${
        isLight
          ? 'bg-gradient-to-br from-amber-50/80 via-white to-amber-100/40 border-amber-300 shadow-md'
          : 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border-amber-600/30'
      }`}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 relative z-10 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="space-y-1">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
              isLight
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}>
              <EgyptFlag className="h-3.5 w-auto rounded-[2px]" />
              <Award className={`w-4 h-4 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
              <span>{isAr ? 'محاكاة امتحانات إتمام الثانوية العامة (٢٠٢١ - ٢٠٢٥)' : 'Official Thanawya Amma Past Papers (2021-2025)'}</span>
            </div>
            <h3 className={`text-lg font-black mt-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {isAr ? 'بنك الاختبارات الرسمية ونماذج الإجابة الوزارية المعتمدة' : 'Authentic MoE Examination Papers & Ministerial Rubrics'}
            </h3>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'امتحانات الدور الأول والدور الثاني والنماذج الاسترشادية التجريبية مطابقة تماماً للمواصفة الوزارية مع تصنيف الرتبة المئوية، ورقة بابل شيت (A4)، وشهادة تقدير وبيان درجات رسمي معتمد.'
                : 'First & Second session papers and experimental models with national percentile rankings, printable A4 OMR bubble sheets, and official certified grade transcripts.'}
            </p>
          </div>

          {onStartPastPapers && (
            <button
              onClick={() => onStartPastPapers()}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer hover:scale-105 shrink-0"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>{isAr ? 'بدء محاكاة امتحان وزاري كامل' : 'Launch Full Past Exam'}</span>
            </button>
          )}
        </div>

        {/* Quick Launch Pills for Subject Past Papers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 relative z-10">
          {[
            { id: 'physics', titleAr: 'الفيزياء', titleEn: 'Physics', qCount: isAr ? '٤٦ س / ٦٠ د' : '46 Qs / 60 M', badge: '2021-2025' },
            { id: 'chemistry', titleAr: 'الكيمياء', titleEn: 'Chemistry', qCount: isAr ? '٤٦ س / ٦٠ د' : '46 Qs / 60 M', badge: '2021-2025' },
            { id: 'biology', titleAr: 'الأحياء', titleEn: 'Biology', qCount: isAr ? '٤٦ س / ٦٠ د' : '46 Qs / 60 M', badge: '2021-2025' },
            { id: 'calculus', titleAr: 'التفاضل والتكامل', titleEn: 'Calculus', qCount: isAr ? '٢٠ س / ٣٠ د' : '20 Qs / 30 M', badge: '2021-2025' },
            { id: 'algebra_solid', titleAr: 'الجبر والهندسة', titleEn: 'Algebra & Solid', qCount: isAr ? '٢٠ س / ٣٠ د' : '20 Qs / 30 M', badge: '2021-2025' },
            { id: 'statics', titleAr: 'الاستاتيكا', titleEn: 'Statics', qCount: isAr ? '٢٠ س / ٣٠ د' : '20 Qs / 30 M', badge: '2021-2025' },
            { id: 'dynamics', titleAr: 'الديناميكا', titleEn: 'Dynamics', qCount: isAr ? '٢٠ س / ٣٠ د' : '20 Qs / 30 M', badge: '2021-2025' },
          ].map((sub) => (
            <button
              key={sub.id}
              onClick={() => {
                if (onStartPastPapers) onStartPastPapers(sub.id);
                else onNavigateTab('testGenerator');
              }}
              className={`p-3 rounded-2xl border text-start space-y-1.5 transition-all cursor-pointer group ${
                isLight
                  ? 'bg-white hover:bg-amber-50/70 border-slate-200 hover:border-amber-300 shadow-xs'
                  : 'bg-slate-950/80 hover:bg-amber-950/40 border-slate-800 hover:border-amber-500/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                  isLight
                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                }`}>
                  {sub.badge}
                </span>
              </div>
              <div className={`text-xs font-black transition-colors ${
                isLight ? 'text-slate-900 group-hover:text-amber-700' : 'text-slate-200 group-hover:text-amber-300'
              }`}>
                {isAr ? sub.titleAr : sub.titleEn}
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                {sub.qCount}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Official Accredited Certificates & Grade Transcripts Registry */}
      <div className={`border-2 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden ${
        isLight
          ? 'bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 border-amber-200 shadow-md'
          : 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 border-amber-500/30'
      }`}>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 relative z-10 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="space-y-1">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
              isLight
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}>
              <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />
              <span>{isAr ? 'كنترول الثانوية العامة — الاعتماد الرسمي' : 'Central Examination Control Registry'}</span>
            </div>
            <h3 className={`text-lg font-black flex items-center gap-2 mt-2 ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              <Award className={`w-5 h-5 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
              <span>{isAr ? 'سجل الشهادات وبيانات الدرجات الرسمية المعتمدة 📜' : 'Accredited Certificates & Grade Transcripts 📜'}</span>
            </h3>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'شهادات معتمدة صادرة بختم شعار الجمهورية الإلكتروني والرقم المسلسل الموثق لكل امتحان وزاري أو نموذج محاكاة مكتمل.'
                : 'Accredited certificates issued with digital Republic Seals and verifiable serials for all completed official exams.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setVerificationTargetSerial('');
                setIsVerificationModalOpen(true);
              }}
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>{isAr ? 'فحص كود التحقق 🔍' : 'Verify Certificate 🔍'}</span>
            </button>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        {registeredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {registeredCertificates.map((cert) => (
              <div
                key={cert.certificateSerial}
                className={`border rounded-2xl p-5 space-y-4 shadow-md transition-all hover:-translate-y-0.5 ${
                  isLight
                    ? 'bg-white border-amber-200 hover:border-amber-400 shadow-xs'
                    : 'bg-slate-950/90 border-amber-500/30 hover:border-amber-500/60'
                }`}
              >
                {/* Header */}
                <div className={`flex items-start justify-between gap-2 border-b pb-3 ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <div className="space-y-0.5">
                    <span className={`text-[10px] font-mono block ${
                      isLight ? 'text-amber-800 font-bold' : 'text-amber-400/90'
                    }`}>
                      {cert.certificateSerial}
                    </span>
                    <h4 className={`text-sm font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {isAr ? cert.subjectNameAr : cert.subjectNameEn}
                    </h4>
                    <span className={`text-[11px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {cert.academicYear} — {isAr ? cert.sessionTitleAr : cert.sessionTitleEn}
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                    isLight
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {isAr ? 'معتمد 🛡️' : 'Accredited 🛡️'}
                  </span>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`p-2.5 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}>
                    <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>{isAr ? 'الدرجة والنسبة:' : 'Score & Accuracy:'}</span>
                    <span className={`font-mono font-black text-sm ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                      {cert.scoreReport ? `${cert.scoreReport.earnedMarks} / ${cert.scoreReport.totalMarks}` : `${cert.score} / ${cert.totalQuestions}`}{' '}
                      <span className="text-xs">({cert.scorePct}%)</span>
                    </span>
                  </div>

                  <div className={`p-2.5 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}>
                    <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>{isAr ? 'الرتبة القومية:' : 'National Rank:'}</span>
                    <span className={`font-bold text-xs ${isLight ? 'text-indigo-800' : 'text-indigo-300'}`}>
                      {cert.cohortReport ? `أعلى ${cert.cohortReport.percentileRank}%` : `${cert.scorePct}%`}
                    </span>
                  </div>
                </div>

                {/* Distinction Badge */}
                <div className={`p-2 rounded-xl border text-xs font-bold text-center ${
                  isLight
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                }`}>
                  {isAr ? cert.distinctionTier.labelAr : cert.distinctionTier.labelEn}
                </div>

                {/* Action Buttons */}
                <div className={`flex items-center gap-2 pt-1 border-t ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <button
                    onClick={() => setActiveCertificateToView(cert)}
                    className="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-slate-950" />
                    <span>{isAr ? 'عرض وطباعة (A4)' : 'View & Print (A4)'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setVerificationTargetSerial(cert.certificateSerial);
                      setIsVerificationModalOpen(true);
                    }}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      isLight
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                    title={isAr ? 'فحص كود التحقق الرسمي' : 'Inspect Accreditation Serial'}
                  >
                    <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-8 rounded-2xl p-6 space-y-3 border ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
          }`}>
            <Award className={`w-12 h-12 mx-auto ${isLight ? 'text-slate-400' : 'text-slate-600'}`} />
            <div className={`text-sm font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
              {isAr ? 'لم تصدر لك أي شهادات معتمدة بعد' : 'No Official Certificates Earned Yet'}
            </div>
            <p className={`text-xs max-w-md mx-auto ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
              {isAr
                ? 'أكمل أي امتحان وزاري رسمي (٢٠٢١ - ٢٠٢٥) أو امتحان محاكاة شامل للحصول على شهادة تفوق وبيان درجات رسمي معتمد برقم مسلسل موثق.'
                : 'Complete any official past exam paper or mock exam to earn an accredited performance certificate & transcript.'}
            </p>
          </div>
        )}
      </div>

      {/* Achievement Badges Showcase ("شارات الإنجاز والتميز الأكاديمي") */}
      <div className={`border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 ${
        isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
      }`}>
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="space-y-1">
            <h3 className={`text-lg font-black flex items-center gap-2 ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              <Award className={`w-5 h-5 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
              <span>{isAr ? 'شارات الإنجاز والتفوق الأكاديمي 🏆' : 'Academic Achievement Badges 🏆'}</span>
            </h3>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'منظومة الأوسمة التحفيزية لمكافأة الإتقان في مهارات التفكير العليا، تدارك الأخطاء، وسرعة ودقة الحل'
                : 'Motivational badges recognizing mastery in HOTS questions, mistake recovery, accuracy, and speed'}
            </p>
          </div>

          {/* Badges Progress Pill */}
          <div className={`flex items-center gap-3 px-4 py-2 rounded-2xl border ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'
          }`}>
            <Trophy className={`w-5 h-5 shrink-0 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
            <div className="space-y-1">
              <div className={`flex justify-between text-xs font-bold gap-4 ${
                isLight ? 'text-slate-700' : 'text-slate-200'
              }`}>
                <span>{isAr ? 'الشارات المكتملة' : 'Unlocked Badges'}</span>
                <span className={isLight ? 'text-amber-800 font-extrabold' : 'text-amber-400'}>
                  {isAr
                    ? `${toHindiDigits(badgeResult.unlockedCount)} / ${toHindiDigits(badgeResult.totalCount)}`
                    : `${badgeResult.unlockedCount} / ${badgeResult.totalCount}`}
                </span>
              </div>
              <div className={`w-32 sm:w-40 h-2 rounded-full overflow-hidden border ${
                isLight ? 'bg-slate-200 border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}>
                <div
                  className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${Math.round((badgeResult.unlockedCount / badgeResult.totalCount) * 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'all', ar: 'جميع الشارات (١٢)', en: 'All Badges (12)' },
            { id: 'hots', ar: '🧠 التفكير العليا HOTS', en: '🧠 HOTS Mastery' },
            { id: 'accuracy', ar: '🎯 الدقة والسرعة', en: '🎯 Accuracy & Speed' },
            { id: 'remediation', ar: '🛡️ تدارك الأخطاء', en: '🛡️ Mistake Recovery' },
            { id: 'readiness', ar: '🌟 الجاهزية والرادار', en: '🌟 Readiness & Radar' },
            { id: 'milestone', ar: '📚 المحطات التدريبية', en: '📚 Practice Milestones' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setBadgeFilter(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                badgeFilter === cat.id
                  ? isLight
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-950/60 border border-slate-800'
              }`}
            >
              {isAr ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredBadges.map((b) => {
            const isUnlocked = b.unlocked;

            // Tier styling
            let borderClass = isLight ? 'border-slate-200 bg-white text-slate-800' : 'border-slate-800 bg-slate-950/50 text-slate-300';
            let tierTagAr = 'برونزية';
            let tierTagEn = 'Bronze';
            let tierColor = isLight ? 'text-amber-800 bg-amber-100 border-amber-300' : 'text-orange-400 bg-orange-950/60 border-orange-800/60';

            if (b.tier === 'diamond') {
              borderClass = isUnlocked
                ? isLight
                  ? 'border-cyan-300 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 text-cyan-900 shadow-xs'
                  : 'border-cyan-400/50 bg-gradient-to-br from-cyan-950/50 via-slate-950 to-purple-950/50 text-cyan-200 shadow-lg shadow-cyan-950/40'
                : isLight
                ? 'border-slate-200 bg-slate-50 text-slate-500'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'ماسية 💎';
              tierTagEn = 'Diamond 💎';
              tierColor = isLight ? 'text-cyan-800 bg-cyan-100 border-cyan-300' : 'text-cyan-300 bg-cyan-950/80 border-cyan-800/80';
            } else if (b.tier === 'gold') {
              borderClass = isUnlocked
                ? isLight
                  ? 'border-amber-300 bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-amber-900 shadow-xs'
                  : 'border-amber-500/50 bg-gradient-to-br from-amber-950/40 via-slate-950 to-yellow-950/40 text-amber-200 shadow-lg shadow-amber-950/40'
                : isLight
                ? 'border-slate-200 bg-slate-50 text-slate-500'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'ذهبية 🥇';
              tierTagEn = 'Gold 🥇';
              tierColor = isLight ? 'text-amber-800 bg-amber-100 border-amber-300' : 'text-amber-300 bg-amber-950/80 border-amber-800/80';
            } else if (b.tier === 'silver') {
              borderClass = isUnlocked
                ? isLight
                  ? 'border-slate-300 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 shadow-xs'
                  : 'border-slate-400/50 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-200 shadow-md'
                : isLight
                ? 'border-slate-200 bg-slate-50 text-slate-500'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'فضية 🥈';
              tierTagEn = 'Silver 🥈';
              tierColor = isLight ? 'text-slate-700 bg-slate-200 border-slate-300' : 'text-slate-300 bg-slate-800/80 border-slate-700';
            } else {
              borderClass = isUnlocked
                ? isLight
                  ? 'border-orange-300 bg-gradient-to-br from-orange-50 via-white to-amber-50 text-orange-900 shadow-xs'
                  : 'border-orange-600/50 bg-gradient-to-br from-orange-950/30 via-slate-950 to-slate-950 text-orange-200 shadow-md'
                : isLight
                ? 'border-slate-200 bg-slate-50 text-slate-500'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'برونزية 🥉';
              tierTagEn = 'Bronze 🥉';
              tierColor = isLight ? 'text-orange-800 bg-orange-100 border-orange-300' : 'text-orange-300 bg-orange-950/80 border-orange-800';
            }

            return (
              <div
                key={b.id}
                className={`p-4 rounded-2xl border transition-all space-y-3 flex flex-col justify-between ${borderClass}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-2xl p-2 rounded-xl border ${
                      isLight ? 'bg-slate-100 border-slate-200 shadow-2xs' : 'bg-slate-900/80 border-slate-800 shadow-inner'
                    }`}>
                      {b.icon}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${tierColor}`}>
                        {isAr ? tierTagAr : tierTagEn}
                      </span>
                      {isUnlocked ? (
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${
                          isLight
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        }`}>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isAr ? 'مكتملة' : 'Earned'}</span>
                        </span>
                      ) : (
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${
                          isLight
                            ? 'bg-slate-100 text-slate-500 border-slate-200'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}>
                          <Lock className="w-2.5 h-2.5" />
                          <span>{isAr ? 'مقفلة' : 'Locked'}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>{isAr ? b.titleAr : b.titleEn}</h4>
                    <p className={`text-[11px] leading-relaxed mt-0.5 line-clamp-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? b.descAr : b.descEn}
                    </p>
                  </div>
                </div>

                <div className={`space-y-1 pt-1 border-t ${isLight ? 'border-slate-200' : 'border-slate-800/60'}`}>
                  <div className={`flex justify-between text-[10px] font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    <span>{isUnlocked ? (isAr ? 'مستوى الإتقان' : 'Mastery') : (isAr ? 'التقدم نحو الشارة' : 'Progress')}</span>
                    <span className={isUnlocked ? (isLight ? 'text-emerald-700 font-bold' : 'text-emerald-400 font-bold') : (isLight ? 'text-slate-700' : 'text-slate-300')}>
                      {isAr
                        ? `${toHindiDigits(b.currentProgress)} / ${toHindiDigits(b.target)} (${toHindiDigits(b.progressPct)}%)`
                        : `${b.currentProgress} / ${b.target} (${b.progressPct}%)`}
                    </span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden border ${
                    isLight ? 'bg-slate-200 border-slate-200' : 'bg-slate-900 border-slate-800'
                  }`}>
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isUnlocked
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          : 'bg-gradient-to-r from-amber-500 to-indigo-500'
                      }`}
                      style={{ width: `${b.progressPct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chapter-by-Chapter Comprehensive Proficiency Heatmap */}
      <div className={`border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 ${
        isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
      }`}>
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div>
            <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              <BookOpen className={`w-6 h-6 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{isAr ? 'سجل إتقان فصول المنهاج الدراسي بالتفصيل' : 'Comprehensive Chapter Proficiency Heatmap'}</span>
            </h3>
            <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'متابعة حية لكل فصل ومستوى تقدمك فيه من أصل ١١,٤٠٠ مسألة'
                : 'Detailed tracking of your practice volume and accuracy across all 57 curriculum chapters'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={`flex items-center gap-1.5 p-1 rounded-xl border overflow-x-auto ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            {[
              { id: 'all', ar: 'الكل', en: 'All' },
              { id: 'pure_math', ar: 'بحتة', en: 'Pure Math' },
              { id: 'applied_math', ar: 'تطبيقية', en: 'Applied Math' },
              { id: 'physics', ar: 'فيزياء', en: 'Physics' },
              { id: 'chemistry', ar: 'كيمياء', en: 'Chemistry' },
              { id: 'biology', ar: 'أحياء', en: 'Biology' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedSubjectFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedSubjectFilter === f.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isAr ? f.ar : f.en}
              </button>
            ))}
          </div>
        </div>

        {allChapterRecords.length === 0 ? (
          <div className="text-center py-10 space-y-3">
            <Sparkles className={`w-8 h-8 mx-auto ${isLight ? 'text-slate-400' : 'text-slate-500'}`} />
            <p className={`text-sm font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'لم يتم تسجيل تدريبات في هذا القسم بعد. ابدأ باختبارات بنك الأسئلة ليتم بناء رادارك التحليلي!'
                : 'No practice sessions recorded in this category yet. Start practicing to generate your analytics heatmap!'}
            </p>
            <button
              onClick={() => onNavigateTab('testGenerator')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isAr ? 'الانتقال لبنك الامتحانات' : 'Go to Test Generator'}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allChapterRecords.map((ch) => {
              const acc = Math.round((ch.correct / ch.attempted) * 100);
              const title = isAr ? ch.chapterTitleAr : ch.chapterTitleEn;
              const branch = isAr ? ch.branchTitleAr : ch.branchTitleEn;

              let tierColor = isLight
                ? 'text-emerald-800 bg-emerald-100 border-emerald-300'
                : 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40';
              let barColor = 'bg-emerald-500';
              if (acc < 60) {
                tierColor = isLight
                  ? 'text-rose-800 bg-rose-100 border-rose-300'
                  : 'text-rose-400 bg-rose-500/20 border-rose-500/40';
                barColor = 'bg-rose-500';
              } else if (acc < 80) {
                tierColor = isLight
                  ? 'text-amber-800 bg-amber-100 border-amber-300'
                  : 'text-amber-400 bg-amber-500/20 border-amber-500/40';
                barColor = 'bg-amber-500';
              }

              return (
                <div
                  key={ch.chapterId}
                  className={`p-4 rounded-2xl border transition-all space-y-3 ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-indigo-300 shadow-2xs'
                      : 'bg-slate-950/60 border-slate-800 hover:border-indigo-700/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className={`text-sm font-bold line-clamp-1 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>{title}</h4>
                      <span className={`text-[11px] font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{branch}</span>
                    </div>

                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${tierColor}`}>
                      {isAr ? `${toHindiDigits(acc)}%` : `${acc}%`}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className={`flex justify-between text-[10px] font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span>{isAr ? 'الأسئلة الصحيحة' : 'Score'}</span>
                      <span>
                        {isAr
                          ? `${toHindiDigits(ch.correct)} من أصل ${toHindiDigits(ch.attempted)}`
                          : `${ch.correct} / ${ch.attempted}`}
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden border ${isLight ? 'bg-slate-200 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                      <div className={`h-full rounded-full transition-all duration-700 ${barColor}`} style={{ width: `${acc}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Official Certificate Full View & Print Modal */}
      {activeCertificateToView && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 flex items-center justify-center">
          <div className="relative w-full max-w-5xl my-auto">
            <OfficialPerformanceCertificate
              studentName={activeCertificateToView.studentName}
              seatingNumber={activeCertificateToView.seatingNumber}
              schoolName={activeCertificateToView.schoolName}
              directorateName={activeCertificateToView.directorateName}
              subjectId={activeCertificateToView.subjectId}
              subjectNameAr={activeCertificateToView.subjectNameAr}
              subjectNameEn={activeCertificateToView.subjectNameEn}
              branchNameAr={activeCertificateToView.branchNameAr}
              branchNameEn={activeCertificateToView.branchNameEn}
              academicYear={activeCertificateToView.academicYear}
              sessionTitleAr={activeCertificateToView.sessionTitleAr}
              sessionTitleEn={activeCertificateToView.sessionTitleEn}
              formCodeAr={activeCertificateToView.formCodeAr}
              formCodeEn={activeCertificateToView.formCodeEn}
              scoreReport={activeCertificateToView.scoreReport}
              cohortReport={activeCertificateToView.cohortReport}
              score={activeCertificateToView.score}
              totalQuestions={activeCertificateToView.totalQuestions}
              scorePct={activeCertificateToView.scorePct}
              gradeLabelAr={activeCertificateToView.gradeLabelAr}
              gradeLabelEn={activeCertificateToView.gradeLabelEn}
              timeTakenSeconds={activeCertificateToView.timeTakenSeconds}
              testDate={new Date(activeCertificateToView.testDateIso)}
              onClose={() => setActiveCertificateToView(null)}
              lang={lang}
              theme={theme}
            />
          </div>
        </div>
      )}

      {/* Digital Accreditation Verification Modal */}
      {isVerificationModalOpen && (
        <CertificateVerificationModal
          isOpen={isVerificationModalOpen}
          initialSerial={verificationTargetSerial}
          onClose={() => {
            setIsVerificationModalOpen(false);
            setVerificationTargetSerial('');
          }}
          lang={lang}
          onViewCertificate={(cert) => {
            setActiveCertificateToView(cert);
          }}
        />
      )}

      {/* Parent Weekly Digest Modal */}
      {isParentReportModalOpen && (
        <ParentProgressReportModal
          isOpen={isParentReportModalOpen}
          onClose={() => setIsParentReportModalOpen(false)}
          lang={lang}
          theme={theme}
        />
      )}

      {/* Official Ministry Results & Calibration Modal */}
      {isMinistryModalOpen && (
        <MinistryResultsModal
          isOpen={isMinistryModalOpen}
          onClose={() => setIsMinistryModalOpen(false)}
          predictedPercentage={predictiveScore.predictedPercentage}
          onResultsSaved={refreshAnalytics}
        />
      )}
    </div>
  );
};
