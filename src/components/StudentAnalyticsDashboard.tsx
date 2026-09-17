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
  type StudentAnalyticsState,
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
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  curriculum?: CurriculumType;
  onNavigateTab: (tab: string) => void;
  onStartTargetedQuiz?: (subjectId: string, chapterId?: string) => void;
  onStartDiagnosticExam?: () => void;
  onStartPastPapers?: () => void;
}

export const StudentAnalyticsDashboard: React.FC<Props> = ({
  lang,
  curriculum: _curriculum,
  onNavigateTab,
  onStartTargetedQuiz,
  onStartDiagnosticExam,
  onStartPastPapers,
}) => {
  const isAr = lang === 'ar';

  const [analyticsState, setAnalyticsState] = useState<StudentAnalyticsState>(() =>
    getStudentAnalytics()
  );

  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [badgeFilter, setBadgeFilter] = useState<string>('all');

  const refreshAnalytics = () => {
    setAnalyticsState(getStudentAnalytics());
  };

  const readinessScore = useMemo(() => getReadinessScore(analyticsState), [analyticsState]);
  const radarPoints = useMemo(() => getMasteryRadarData(analyticsState), [analyticsState]);
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

  // SVG Radar Chart Math (Pentagon with 5 vertices)
  const radarSvg = useMemo(() => {
    const size = 360;
    const center = size / 2;
    const radius = 120;
    const numPoints = 5;

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
      const labelRadius = radius + 34;
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
        color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      };
    } else if (readinessScore >= 70) {
      return {
        label: isAr ? 'مستوى واعد وقريب من الإتقان التام 🎯' : 'Promising Near-Mastery Level 🎯',
        color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      };
    } else if (readinessScore >= 50) {
      return {
        label: isAr ? 'مستوى متوسط يحتاج لتعزيز بعض الفصول 📈' : 'Moderate - Targeted Practice Recommended 📈',
        color: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      };
    } else {
      return {
        label: isAr ? 'مرحلة البناء الأولي - ابدأ الاختبارات التجريبية 🚀' : 'Baseline - Start Practice Quizzes 🚀',
        color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      };
    }
  }, [readinessScore, isAr]);

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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 border-2 border-indigo-800/40 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left / Info & Title */}
          <div className="space-y-4 max-w-2xl text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <BrainCircuit className="w-4 h-4 text-indigo-400" />
              <span>{isAr ? 'رادار الإتقان والتحليلات الأكاديمية' : 'Student Mastery Radar & Analytics'}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-100 tracking-tight leading-tight">
              {isAr ? 'مؤشر الجاهزية للامتحانات الرسمية 🎯' : 'Curriculum Examination Readiness Index 🎯'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
                  onClick={onStartPastPapers}
                  className="no-print px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <EgyptFlag className="h-3 w-auto rounded-[2px]" />
                  <Award className="w-3.5 h-3.5 text-amber-200" />
                  <span>{isAr ? 'امتحانات الوزارة الرسمية (٢٠٢١ - ٢٠٢٥)' : 'Official Past Papers (2021-2025)'}</span>
                </button>
              )}

              <button
                onClick={handlePrint}
                className="no-print px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isAr ? 'طباعة تقرير الجاهزية' : 'Print Readiness Card'}</span>
              </button>

              {analyticsState.totalAttempted > 0 && (
                <button
                  onClick={handleReset}
                  className="no-print px-2.5 py-1.5 rounded-xl bg-slate-800/40 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 text-xs font-semibold transition-all cursor-pointer"
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
                  className="stroke-slate-800"
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
                <span className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
                  {isAr ? `${toHindiDigits(readinessScore)}%` : `${readinessScore}%`}
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mt-1">
                  {isAr ? 'مؤشر الجاهزية' : 'Readiness'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Quantitative KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-800/80">
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[11px] font-bold text-slate-400 block mb-1">
              {isAr ? 'الأسئلة المنجزة' : 'Practiced Questions'}
            </span>
            <span className="text-xl sm:text-2xl font-black text-slate-100">
              {isAr ? toHindiDigits(analyticsState.totalAttempted) : analyticsState.totalAttempted}
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[11px] font-bold text-slate-400 block mb-1">
              {isAr ? 'دقة الإجابات' : 'Overall Accuracy'}
            </span>
            <span className="text-xl sm:text-2xl font-black text-emerald-400">
              {isAr ? `${toHindiDigits(overallAccuracy)}%` : `${overallAccuracy}%`}
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[11px] font-bold text-slate-400 block mb-1">
              {isAr ? 'متوسط سرعة السؤال' : 'Avg Pace / Question'}
            </span>
            <span className="text-xl sm:text-2xl font-black text-cyan-400">
              {isAr ? `${toHindiDigits(avgPaceSeconds)}ث` : `${avgPaceSeconds}s`}
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[11px] font-bold text-slate-400 block mb-1">
              {isAr ? 'الاختبارات المكتملة' : 'Quizzes Completed'}
            </span>
            <span className="text-xl sm:text-2xl font-black text-indigo-400">
              {isAr ? toHindiDigits(analyticsState.quizzesCompleted) : analyticsState.quizzesCompleted}
            </span>
          </div>
        </div>
      </div>

      {/* First-Time Diagnostic Calibration Hero Card (When 0 Attempted) */}
      {analyticsState.totalAttempted === 0 && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border-2 border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-extrabold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isAr ? 'معايرة رادار الإتقان لأول مرة' : 'First-Time Mastery Radar Calibration'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isAr
                  ? 'خض اختبار تحديد المستوى والتشخيص الشامل (٢٠ سؤالاً) 🎯'
                  : 'Take the 20-Q Comprehensive Diagnostic Benchmark Exam 🎯'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? 'لم تقم بعد بأداء اختبارات تدريبية. تم تصميم هذا الاختبار المتوازن خصيصاً لتفعيل رادار الإتقان الخماسي وحساب مؤشر جاهزيتك بدقة، بواقع ٤ أسئلة لكل فرع من فروع الثانوية العامة موزعة بالتساوي على مستويات بلوم المعرفية (تأسيسي، قياسي، تفكير عليا).'
                  : 'You have not taken any practice quizzes yet. This balanced diagnostic exam was specifically engineered to calibrate all 5 radar vertices and compute your genuine readiness index with 4 questions per domain across Bloom cognitive tiers.'}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-lg bg-blue-950/80 border border-blue-800 text-blue-300 text-[11px] font-bold">
                  📐 {isAr ? 'الرياضيات البحتة (٤)' : 'Pure Math (4)'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300 text-[11px] font-bold">
                  ⚙️ {isAr ? 'الرياضيات التطبيقية (٤)' : 'Applied Math (4)'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-[11px] font-bold">
                  ⚡ {isAr ? 'الفيزياء (٤)' : 'Physics (4)'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-[11px] font-bold">
                  🧪 {isAr ? 'الكيمياء (٤)' : 'Chemistry (4)'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-800 text-purple-300 text-[11px] font-bold">
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
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl hover:shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Target className="w-5 h-5" />
                <span>{isAr ? 'بدء اختبار التشخيص الشامل (٣٠ دقيقة) 🚀' : 'Start Diagnostic Exam (30 Min) 🚀'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid Layout: Mastery Radar Pentagon + Cognitive Level Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Pentagon Mastery Radar (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-base sm:text-lg">
              <Target className="w-5 h-5 text-indigo-400" />
              <span>{isAr ? 'رادار الإتقان الخماسي للمواد' : '5-Point Subject Mastery Radar'}</span>
            </div>
            <span className="text-xs text-slate-400">
              {isAr ? 'تغطية الفروع العلمية والرياضية' : 'Curriculum Domain Distribution'}
            </span>
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
                  stroke="#334155"
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
                  stroke="#334155"
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
                  className="fill-cyan-400 stroke-slate-900"
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
                    className="text-[10px] sm:text-[11px] font-black fill-slate-200"
                  >
                    {isAr ? lbl.labelAr : lbl.labelEn}
                  </text>
                  <text
                    y="14"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[10px] font-bold fill-cyan-400"
                  >
                    {isAr ? `${toHindiDigits(lbl.scorePct)}%` : `${lbl.scorePct}%`}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-3 border-t border-slate-800 text-center">
            {radarPoints.map((pt) => (
              <div key={pt.dimensionKey} className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 block truncate">
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
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                <span>{isAr ? 'مستويات التفكير المعرفي (بلوم)' : 'Cognitive Thinking Tiers'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
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
                      <span className="text-emerald-400">{isAr ? 'المستوى التأسيسي (سهل)' : 'Foundational (Easy)'}</span>
                      <span className="text-slate-300">
                        {isAr ? `${toHindiDigits(pct)}% (${toHindiDigits(cog.correct)}/${toHindiDigits(cog.attempted)})` : `${pct}% (${cog.correct}/${cog.attempted})`}
                      </span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
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
                      <span className="text-sky-400">{isAr ? 'المستوى المعياري (متوسط)' : 'Standard (Medium)'}</span>
                      <span className="text-slate-300">
                        {isAr ? `${toHindiDigits(pct)}% (${toHindiDigits(cog.correct)}/${toHindiDigits(cog.attempted)})` : `${pct}% (${cog.correct}/${cog.attempted})`}
                      </span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
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
                      <span className="text-amber-400">{isAr ? 'المستويات العليا (HOTS للتفوق)' : 'High Order Skills (HOTS)'}</span>
                      <span className="text-slate-300">
                        {isAr ? `${toHindiDigits(pct)}% (${toHindiDigits(cog.correct)}/${toHindiDigits(cog.attempted)})` : `${pct}% (${cog.correct}/${cog.attempted})`}
                      </span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div className="bg-amber-500 h-full rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Strategic Remediation Queue (Top 3 Weakest Chapters) */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span>{isAr ? 'خطة التدريب الموصى بها اليوم' : 'Targeted Practice Queue'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isAr ? 'أهم الفصول المرشحة للمراجعة لرفع مؤشر الجاهزية' : 'Chapters with lowest accuracy needing immediate reinforcement'}
              </p>
            </div>

            {weakestChapters.length === 0 ? (
              <div className="text-center p-6 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-xs text-slate-300 font-semibold">
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
                      className="p-3.5 rounded-2xl bg-slate-950/70 border border-rose-900/40 flex items-center justify-between gap-3"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-200">{title}</div>
                        <div className="text-[11px] text-slate-400">{branch}</div>
                        <div className="text-[10px] font-bold text-rose-400">
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
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border-2 border-amber-600/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <EgyptFlag className="h-3.5 w-auto rounded-[2px]" />
              <Award className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'محاكاة امتحانات إتمام الثانوية العامة (٢٠٢١ - ٢٠٢٥)' : 'Official Thanawya Amma Past Papers (2021-2025)'}</span>
            </div>
            <h3 className="text-lg font-black text-slate-100 mt-2">
              {isAr ? 'بنك الاختبارات الرسمية ونماذج الإجابة الوزارية المعتمدة' : 'Authentic MoE Examination Papers & Ministerial Rubrics'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr
                ? 'امتحانات الدور الأول والدور الثاني والنماذج الاسترشادية التجريبية مطابقة تماماً للمواصفة الوزارية مع تصنيف الرتبة المئوية على مستوى الجمهورية'
                : 'First & Second session papers and official experimental models with national percentile rankings and Republic Top 10 benchmarking.'}
            </p>
          </div>

          {onStartPastPapers && (
            <button
              onClick={onStartPastPapers}
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
            { id: 'algebra_solid', titleAr: 'الجبر والهندسة', titleEn: 'Algebra & Solid', qCount: isAr ? '٢٠ س / ٣٠ د' : '20 Qs / 30 M', badge: '2024-2025' },
            { id: 'statics', titleAr: 'الاستاتيكا', titleEn: 'Statics', qCount: isAr ? '٢٠ س / ٣٠ د' : '20 Qs / 30 M', badge: '2024-2025' },
            { id: 'dynamics', titleAr: 'الديناميكا', titleEn: 'Dynamics', qCount: isAr ? '٢٠ س / ٣٠ د' : '20 Qs / 30 M', badge: '2024-2025' },
          ].map((sub) => (
            <button
              key={sub.id}
              onClick={() => {
                if (onStartPastPapers) onStartPastPapers();
                else onNavigateTab('testGenerator');
              }}
              className="p-3 rounded-2xl bg-slate-950/80 hover:bg-amber-950/40 border border-slate-800 hover:border-amber-500/50 text-start space-y-1.5 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {sub.badge}
                </span>
              </div>
              <div className="text-xs font-black text-slate-200 group-hover:text-amber-300 transition-colors">
                {isAr ? sub.titleAr : sub.titleEn}
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                {sub.qCount}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Achievement Badges Showcase ("شارات الإنجاز والتميز الأكاديمي") */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>{isAr ? 'شارات الإنجاز والتفوق الأكاديمي 🏆' : 'Academic Achievement Badges 🏆'}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {isAr
                ? 'منظومة الأوسمة التحفيزية لمكافأة الإتقان في مهارات التفكير العليا، تدارك الأخطاء، وسرعة ودقة الحل'
                : 'Motivational badges recognizing mastery in HOTS questions, mistake recovery, accuracy, and speed'}
            </p>
          </div>

          {/* Badges Progress Pill */}
          <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800">
            <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-200 gap-4">
                <span>{isAr ? 'الشارات المكتملة' : 'Unlocked Badges'}</span>
                <span className="text-amber-400">
                  {isAr
                    ? `${toHindiDigits(badgeResult.unlockedCount)} / ${toHindiDigits(badgeResult.totalCount)}`
                    : `${badgeResult.unlockedCount} / ${badgeResult.totalCount}`}
                </span>
              </div>
              <div className="w-32 sm:w-40 bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
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
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
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
            let borderClass = 'border-slate-800 bg-slate-950/50 text-slate-300';
            let tierTagAr = 'برونزية';
            let tierTagEn = 'Bronze';
            let tierColor = 'text-orange-400 bg-orange-950/60 border-orange-800/60';

            if (b.tier === 'diamond') {
              borderClass = isUnlocked
                ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-950/50 via-slate-950 to-purple-950/50 text-cyan-200 shadow-lg shadow-cyan-950/40'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'ماسية 💎';
              tierTagEn = 'Diamond 💎';
              tierColor = 'text-cyan-300 bg-cyan-950/80 border-cyan-800/80';
            } else if (b.tier === 'gold') {
              borderClass = isUnlocked
                ? 'border-amber-500/50 bg-gradient-to-br from-amber-950/40 via-slate-950 to-yellow-950/40 text-amber-200 shadow-lg shadow-amber-950/40'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'ذهبية 🥇';
              tierTagEn = 'Gold 🥇';
              tierColor = 'text-amber-300 bg-amber-950/80 border-amber-800/80';
            } else if (b.tier === 'silver') {
              borderClass = isUnlocked
                ? 'border-slate-400/50 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-200 shadow-md'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'فضية 🥈';
              tierTagEn = 'Silver 🥈';
              tierColor = 'text-slate-300 bg-slate-800/80 border-slate-700';
            } else {
              borderClass = isUnlocked
                ? 'border-orange-600/50 bg-gradient-to-br from-orange-950/30 via-slate-950 to-slate-950 text-orange-200 shadow-md'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-400';
              tierTagAr = 'برونزية 🥉';
              tierTagEn = 'Bronze 🥉';
              tierColor = 'text-orange-300 bg-orange-950/80 border-orange-800';
            }

            return (
              <div
                key={b.id}
                className={`p-4 rounded-2xl border transition-all space-y-3 flex flex-col justify-between ${borderClass}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl p-2 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner">
                      {b.icon}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${tierColor}`}>
                        {isAr ? tierTagAr : tierTagEn}
                      </span>
                      {isUnlocked ? (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isAr ? 'مكتملة' : 'Earned'}</span>
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900 text-slate-400 border border-slate-800 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          <span>{isAr ? 'مقفلة' : 'Locked'}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-100">{isAr ? b.titleAr : b.titleEn}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5 line-clamp-2">
                      {isAr ? b.descAr : b.descEn}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 pt-1 border-t border-slate-800/60">
                  <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                    <span>{isUnlocked ? (isAr ? 'مستوى الإتقان' : 'Mastery') : (isAr ? 'التقدم نحو الشارة' : 'Progress')}</span>
                    <span className={isUnlocked ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                      {isAr
                        ? `${toHindiDigits(b.currentProgress)} / ${toHindiDigits(b.target)} (${toHindiDigits(b.progressPct)}%)`
                        : `${b.currentProgress} / ${b.target} (${b.progressPct}%)`}
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
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
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <span>{isAr ? 'سجل إتقان فصول المنهاج الدراسي بالتفصيل' : 'Comprehensive Chapter Proficiency Heatmap'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isAr
                ? 'متابعة حية لكل فصل ومستوى تقدمك فيه من أصل ١١,٤٠٠ مسألة'
                : 'Detailed tracking of your practice volume and accuracy across all 57 curriculum chapters'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 overflow-x-auto">
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
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isAr ? f.ar : f.en}
              </button>
            ))}
          </div>
        </div>

        {allChapterRecords.length === 0 ? (
          <div className="text-center py-10 space-y-3">
            <Sparkles className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-sm text-slate-400 font-semibold">
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

              let tierColor = 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40';
              let barColor = 'bg-emerald-500';
              if (acc < 60) {
                tierColor = 'text-rose-400 bg-rose-500/20 border-rose-500/40';
                barColor = 'bg-rose-500';
              } else if (acc < 80) {
                tierColor = 'text-amber-400 bg-amber-500/20 border-amber-500/40';
                barColor = 'bg-amber-500';
              }

              return (
                <div
                  key={ch.chapterId}
                  className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-700/60 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 line-clamp-1">{title}</h4>
                      <span className="text-[11px] font-semibold text-slate-400">{branch}</span>
                    </div>

                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${tierColor}`}>
                      {isAr ? `${toHindiDigits(acc)}%` : `${acc}%`}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                      <span>{isAr ? 'الأسئلة الصحيحة' : 'Score'}</span>
                      <span>
                        {isAr
                          ? `${toHindiDigits(ch.correct)} من أصل ${toHindiDigits(ch.attempted)}`
                          : `${ch.correct} / ${ch.attempted}`}
                      </span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                      <div className={`h-full rounded-full transition-all duration-700 ${barColor}`} style={{ width: `${acc}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
