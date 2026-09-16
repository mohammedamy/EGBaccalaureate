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
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  curriculum?: CurriculumType;
  onNavigateTab: (tab: string) => void;
  onStartTargetedQuiz?: (subjectId: string, chapterId?: string) => void;
}

export const StudentAnalyticsDashboard: React.FC<Props> = ({
  lang,
  curriculum: _curriculum,
  onNavigateTab,
  onStartTargetedQuiz,
}) => {
  const isAr = lang === 'ar';

  const [analyticsState, setAnalyticsState] = useState<StudentAnalyticsState>(() =>
    getStudentAnalytics()
  );

  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');

  const refreshAnalytics = () => {
    setAnalyticsState(getStudentAnalytics());
  };

  const readinessScore = useMemo(() => getReadinessScore(analyticsState), [analyticsState]);
  const radarPoints = useMemo(() => getMasteryRadarData(analyticsState), [analyticsState]);
  const weakestChapters = useMemo(() => getWeakestChapters(analyticsState, 3), [analyticsState]);

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
          ? 'هل أنت متأكد من رغبتك في إعادة تعيين كافة إحصائيات الأداء واختبارات الجاهزية؟'
          : 'Are you sure you want to reset all analytics and practice history?'
      )
    ) {
      resetStudentAnalytics();
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
