import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  BrainCircuit,
  Sparkles,
  Flame,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowLeft,
  WifiOff,
  Award,
  Zap,
  BookOpen,
  Layers,
} from 'lucide-react';
import {
  getAdaptiveState,
  generateDailyPrescription,
  getStudyStreak,
} from '../services/adaptivePracticeEngine';
import type { PrescribedItem, DailyPrescription } from '../types/adaptivePractice';
import { getSubjectForBranch } from '../data/subjects';

interface Props {
  onStartPrescribedPractice: (item: PrescribedItem) => void;
  className?: string;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const DailyPrescriptionCard: React.FC<Props> = ({
  onStartPrescribedPractice,
  className = '',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

  const [prescription, setPrescription] = useState<DailyPrescription | null>(null);
  const [streak, setStreak] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Load or generate prescription on mount
  const loadPrescription = useCallback(() => {
    const state = getAdaptiveState();
    const currentStreak = getStudyStreak(state);
    setStreak(currentStreak);

    const today = new Date().toISOString().slice(0, 10);

    // If current prescription matches today, use it; otherwise generate fresh
    if (state.currentPrescription && state.currentPrescription.targetDate === today) {
      setPrescription(state.currentPrescription);
    } else {
      const generated = generateDailyPrescription(state);
      setPrescription(generated);
    }
  }, []);

  useEffect(() => {
    loadPrescription();
  }, [loadPrescription]);

  // Handle manual regenerate
  const handleRegenerate = () => {
    setIsRefreshing(true);
    try {
      const state = getAdaptiveState();
      // Force regeneration for today
      const generated = generateDailyPrescription(state);
      setPrescription(generated);
      setStreak(getStudyStreak(state));
    } finally {
      setTimeout(() => setIsRefreshing(false), 400);
    }
  };

  const completedCount = useMemo(() => {
    return prescription?.items.filter((i) => i.completed).length ?? 0;
  }, [prescription]);

  const totalCount = useMemo(() => {
    return prescription?.items.length ?? 0;
  }, [prescription]);

  const progressPct = useMemo(() => {
    return totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  }, [completedCount, totalCount]);

  const allCompleted = totalCount > 0 && completedCount === totalCount;

  // Reason metadata helper
  const getReasonBadge = (reason: PrescribedItem['reason']) => {
    switch (reason) {
      case 'spaced_review':
        return {
          labelAr: 'تثبيت الذاكرة (تكرار متباعد)',
          color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
          icon: <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />,
        };
      case 'prerequisite_gap':
        return {
          labelAr: 'سد فجوة متطلب سابق',
          color: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
          icon: <Layers className="w-3.5 h-3.5 text-amber-400" />,
        };
      case 'error_remediation':
        return {
          labelAr: 'علاج أخطاء المفاهيم',
          color: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
          icon: <Zap className="w-3.5 h-3.5 text-rose-400" />,
        };
      case 'difficulty_escalation':
        return {
          labelAr: 'تصعيد للمسائل العليا (HOTS)',
          color: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
          icon: <Sparkles className="w-3.5 h-3.5 text-violet-400" />,
        };
      case 'time_pressure_training':
        return {
          labelAr: 'تدريب السرعة تحت ضغط زمني',
          color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
          icon: <Clock className="w-3.5 h-3.5 text-cyan-400" />,
        };
      case 'new_topic':
      default:
        return {
          labelAr: 'موضوع تأسيسي عالي الأهمية',
          color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
          icon: <BookOpen className="w-3.5 h-3.5 text-indigo-400" />,
        };
    }
  };

  const getDifficultyBadge = (difficulty: PrescribedItem['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return { label: 'مستوى تأسيسي (سهل)', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40' };
      case 'medium':
        return { label: 'مستوى تطبيقي (متوسط)', color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/40' };
      case 'exam_standard':
        return { label: 'مستوى امتحاني قياسي', color: 'text-blue-400 bg-blue-950/40 border-blue-800/40' };
      case 'hots':
      default:
        return { label: 'مستويات تفكير عليا (HOTS)', color: 'text-amber-400 bg-amber-950/40 border-amber-800/40' };
    }
  };

  if (!prescription || totalCount === 0) {
    return null;
  }

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border transition-all shadow-xl ${
        isHighContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-white/95 border-indigo-200 text-slate-800 shadow-indigo-100/50'
          : 'bg-gradient-to-br from-slate-900/95 via-indigo-950/40 to-slate-900/95 border-indigo-500/30 text-slate-100 shadow-indigo-950/30'
      } ${className}`}
      dir="rtl"
      aria-label="روشتة المذاكرة اليومية التكيفية"
    >
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

      <div className="relative p-5 sm:p-6 space-y-5">
        {/* Header Block */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
              <BrainCircuit className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-bold tracking-wide">
                  روشتتك اليومية المقترحة
                </h2>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  <span>توليد ذكي أوفلاين</span>
                </span>
                {streak > 0 && (
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{streak} {streak === 1 ? 'يوم متتالي' : 'أيام متتالية'}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                مهام مذاكرة مخصصة لترسيخ المفاهيم وعلاج الفجوات تلقائياً وفق منحنى النسيان والتكرار المتباعد
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRegenerate}
              disabled={isRefreshing}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isLight
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-100'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              } ${isRefreshing ? 'opacity-50 animate-spin' : ''}`}
              title="إعادة فحص السجل وتحديث الروشتة اليومية"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">تحديث المهام</span>
            </button>
          </div>
        </div>

        {/* Progress Bar & Summary Indicator */}
        <div className="p-3.5 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <span>نسبة إنجاز مهام اليوم:</span>
              <span className="font-bold font-mono text-indigo-400">
                {completedCount} من {totalCount} مهام ({progressPct}%)
              </span>
            </span>
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>الوقت المقدر: ~{prescription.estimatedMinutes} دقيقة</span>
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className={`h-full transition-all duration-700 rounded-full ${
                allCompleted
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                  : 'bg-gradient-to-r from-indigo-500 to-violet-500'
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {allCompleted && (
            <div className="pt-1 flex items-center gap-2 text-xs font-bold text-emerald-400">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>أحسنت صنعاً! أتممت جميع مهام الروشتة المقررة لليوم وتم تثبيت المفاهيم في ذاكرتك بنجاح.</span>
            </div>
          )}
        </div>

        {/* Prescription Items Grid / List */}
        <div className="space-y-3">
          {prescription.items.map((item, index) => {
            const reasonBadge = getReasonBadge(item.reason);
            const difficultyBadge = getDifficultyBadge(item.difficulty);
            const branchSubject = getSubjectForBranch(item.branchId);
            const subjectTitleAr = branchSubject?.titleAr || item.branchId;

            return (
              <div
                key={`${item.knowledgePointId}_${index}`}
                className={`group relative p-4 rounded-2xl border transition-all ${
                  item.completed
                    ? isLight
                      ? 'bg-emerald-50/70 border-emerald-300 text-slate-700'
                      : 'bg-emerald-950/20 border-emerald-500/30 text-slate-200'
                    : isLight
                    ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 shadow-sm'
                    : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Task Details */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Reason Badge */}
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${reasonBadge.color}`}
                      >
                        {reasonBadge.icon}
                        <span>{reasonBadge.labelAr}</span>
                      </span>

                      {/* Subject Name */}
                      <span className="text-[11px] text-slate-400 font-medium">
                        {subjectTitleAr}
                      </span>

                      {/* Difficulty Pill */}
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${difficultyBadge.color}`}
                      >
                        {difficultyBadge.label}
                      </span>
                    </div>

                    {/* Knowledge Point Title */}
                    <div className="flex items-baseline gap-2">
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {item.knowledgePointNameAr}
                      </h4>
                      <span className="text-xs text-slate-400 hidden md:inline font-mono">
                        ({item.knowledgePointNameEn})
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span>عدد الأسئلة: {item.questionCount} مسائل تكيُّفية</span>
                      {item.timeLimitSec && (
                        <span>الحد الزمني: {Math.round(item.timeLimitSec / 60)} دقيقة</span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="shrink-0 flex items-center justify-end sm:justify-center">
                    {item.completed ? (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>تم الإنجاز ✓</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => onStartPrescribedPractice(item)}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>ابدأ التدريب الآن ({item.questionCount} أسئلة)</span>
                        <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Offline & Privacy Reassurance Footer */}
        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5">
            <WifiOff className="w-3.5 h-3.5 text-indigo-400" />
            <span>يعمل محلياً على جهازك ١٠٠٪ بدون استهلاك لباقة الإنترنت</span>
          </span>

          <span className="text-slate-400">
            تحديث يومي تلقائي عند حل المسائل
          </span>
        </div>
      </div>
    </section>
  );
};
