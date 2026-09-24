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
  X,
} from 'lucide-react';
import {
  getAdaptiveState,
  generateDailyPrescription,
  getStudyStreak,
} from '../services/adaptivePracticeEngine';
import type { PrescribedItem, DailyPrescription } from '../types/adaptivePractice';
import type { Language } from '../i18n/translations';
import { getSubjectForBranch } from '../data/subjects';

interface Props {
  onStartPrescribedPractice: (item: PrescribedItem) => void;
  onClose?: () => void;
  lang?: Language;
  className?: string;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const DailyPrescriptionCard: React.FC<Props> = ({
  onStartPrescribedPractice,
  onClose,
  lang = 'ar',
  className = '',
  theme = 'dark',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

  const [prescription, setPrescription] = useState<DailyPrescription | null>(null);
  const [streak, setStreak] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('egbac_prescription_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setIsDismissed(true);
      try {
        sessionStorage.setItem('egbac_prescription_dismissed', 'true');
      } catch {
        // ignore
      }
    }
  };

  const handleRestore = () => {
    setIsDismissed(false);
    try {
      sessionStorage.removeItem('egbac_prescription_dismissed');
    } catch {
      // ignore
    }
  };

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
          labelEn: 'Memory Retention (Spaced Review)',
          color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
          icon: <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />,
        };
      case 'prerequisite_gap':
        return {
          labelAr: 'سد فجوة متطلب سابق',
          labelEn: 'Prerequisite Gap Repair',
          color: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
          icon: <Layers className="w-3.5 h-3.5 text-amber-400" />,
        };
      case 'error_remediation':
        return {
          labelAr: 'علاج أخطاء المفاهيم',
          labelEn: 'Concept Error Remediation',
          color: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
          icon: <Zap className="w-3.5 h-3.5 text-rose-400" />,
        };
      case 'difficulty_escalation':
        return {
          labelAr: 'تصعيد للمسائل العليا (HOTS)',
          labelEn: 'HOTS Difficulty Escalation',
          color: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
          icon: <Sparkles className="w-3.5 h-3.5 text-violet-400" />,
        };
      case 'time_pressure_training':
        return {
          labelAr: 'تدريب السرعة تحت ضغط زمني',
          labelEn: 'Time-Pressure Speed Drill',
          color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
          icon: <Clock className="w-3.5 h-3.5 text-cyan-400" />,
        };
      case 'exam_weight_priority':
        return {
          labelAr: 'بؤرة تركيز امتحانية عالية',
          labelEn: 'High-Yield Exam Focus',
          color: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
          icon: <Award className="w-3.5 h-3.5 text-blue-400" />,
        };
      case 'new_topic':
      default:
        return {
          labelAr: 'موضوع تأسيسي عالي الأهمية',
          labelEn: 'Core Curriculum Topic',
          color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
          icon: <BookOpen className="w-3.5 h-3.5 text-indigo-400" />,
        };
    }
  };

  const getDifficultyBadge = (difficulty: PrescribedItem['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return {
          labelAr: 'مستوى تأسيسي (سهل)',
          labelEn: 'Foundational (Easy)',
          color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
        };
      case 'medium':
        return {
          labelAr: 'مستوى تطبيقي (متوسط)',
          labelEn: 'Application (Medium)',
          color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/40',
        };
      case 'exam_standard':
        return {
          labelAr: 'مستوى امتحاني قياسي',
          labelEn: 'Exam Standard',
          color: 'text-blue-400 bg-blue-950/40 border-blue-800/40',
        };
      case 'hots':
      default:
        return {
          labelAr: 'مستويات تفكير عليا (HOTS)',
          labelEn: 'Higher-Order Thinking (HOTS)',
          color: 'text-amber-400 bg-amber-950/40 border-amber-800/40',
        };
    }
  };

  if (!prescription || totalCount === 0) {
    return null;
  }

  if (isDismissed && !onClose) {
    return (
      <div
        className={`relative p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 shadow-md transition-all ${
          isHighContrast
            ? 'bg-black border-yellow-400 text-yellow-300'
            : isLight
            ? 'bg-gradient-to-r from-indigo-50/80 via-white to-violet-50/80 border-indigo-200 text-slate-800'
            : 'bg-gradient-to-r from-slate-900/90 via-indigo-950/30 to-slate-900/90 border-indigo-500/30 text-slate-200'
        } ${className}`}
        dir={isArabic ? 'rtl' : 'ltr'}
        aria-label={isArabic ? 'شريط الروشتة اليومية المصغر' : 'Daily Prescription Mini Bar'}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold">
                {isArabic ? 'روشتة المذاكرة اليومية التكيفية' : 'Daily Adaptive Study Prescription'}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-mono font-bold border border-indigo-500/30">
                {isArabic
                  ? `${completedCount} من ${totalCount} مهام منجزة (${progressPct}%)`
                  : `${completedCount} of ${totalCount} completed (${progressPct}%)`}
              </span>
              {streak > 0 && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{isArabic ? `${streak} ${streak === 1 ? 'يوم' : 'أيام'}` : `${streak}d`}</span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 hidden sm:block mt-0.5">
              {isArabic
                ? 'تم إغلاق العرض التفصيلي. يمكنك إظهار الروشتة اليومية في أي وقت لمتابعة المهام.'
                : 'Detailed view collapsed. You can reopen your daily study tasks anytime.'}
            </p>
          </div>
        </div>

        <button
          onClick={handleRestore}
          className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shrink-0 cursor-pointer"
          title={isArabic ? 'إظهار الروشتة اليومية' : 'Show Daily Prescription'}
          aria-label={isArabic ? 'إظهار الروشتة اليومية' : 'Show Daily Prescription'}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isArabic ? 'إظهار الروشتة' : 'Show Prescription'}</span>
        </button>
      </div>
    );
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
      dir={isArabic ? 'rtl' : 'ltr'}
      aria-label={isArabic ? 'روشتة المذاكرة اليومية التكيفية' : 'Daily Adaptive Study Prescription'}
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
                  {isArabic ? 'روشتتك اليومية المقترحة' : 'Your Daily Study Prescription'}
                </h2>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  <span>{isArabic ? 'توليد ذكي أوفلاين' : 'Offline Smart AI'}</span>
                </span>
                {streak > 0 && (
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{isArabic ? `${streak} ${streak === 1 ? 'يوم متتالي' : 'أيام متتالية'}` : `${streak} Day Streak`}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isArabic
                  ? 'مهام مذاكرة مخصصة لترسيخ المفاهيم وعلاج الفجوات تلقائياً وفق منحنى النسيان والتكرار المتباعد'
                  : 'Personalized practice tasks to consolidate concepts and repair gaps based on spaced repetition'}
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
              title={isArabic ? 'إعادة فحص السجل وتحديث الروشتة اليومية' : 'Re-evaluate mastery and refresh daily prescription'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isArabic ? 'تحديث المهام' : 'Refresh Tasks'}</span>
            </button>

            <button
              onClick={handleClose}
              className={`p-2 sm:px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isHighContrast
                  ? 'border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                  : isLight
                  ? 'border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300'
                  : 'border-slate-700 text-slate-300 hover:bg-rose-950/40 hover:text-rose-400 hover:border-rose-800'
              }`}
              title={isArabic ? 'إغلاق الروشتة اليومية' : 'Close daily prescription'}
              aria-label={isArabic ? 'إغلاق الروشتة اليومية' : 'Close daily prescription'}
            >
              <X className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isArabic ? 'إغلاق الروشتة' : 'Close'}</span>
            </button>
          </div>
        </div>

        {/* Progress Bar & Summary Indicator */}
        <div className="p-3.5 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <span>{isArabic ? 'نسبة إنجاز مهام اليوم:' : "Today's Task Progress:"}</span>
              <span className="font-bold font-mono text-indigo-400">
                {isArabic
                  ? `${completedCount} من ${totalCount} مهام (${progressPct}%)`
                  : `${completedCount} of ${totalCount} tasks (${progressPct}%)`}
              </span>
            </span>
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>
                {isArabic
                  ? `الوقت المقدر: ~${prescription.estimatedMinutes} دقيقة`
                  : `Est. Time: ~${prescription.estimatedMinutes} mins`}
              </span>
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
              <span>
                {isArabic
                  ? 'أحسنت صنعاً! أتممت جميع مهام الروشتة المقررة لليوم وتم تثبيت المفاهيم في ذاكرتك بنجاح.'
                  : 'Outstanding! You have completed all today\'s prescribed tasks and consolidated core concepts.'}
              </span>
            </div>
          )}
        </div>

        {/* Prescription Items Grid / List */}
        <div className="space-y-3">
          {prescription.items.map((item, index) => {
            const reasonBadge = getReasonBadge(item.reason);
            const difficultyBadge = getDifficultyBadge(item.difficulty);
            const branchSubject = getSubjectForBranch(item.branchId);
            const subjectTitle = (isArabic ? branchSubject?.titleAr : branchSubject?.titleEn) || item.branchId;
            const reasonLabel = isArabic ? reasonBadge.labelAr : reasonBadge.labelEn;
            const difficultyLabel = isArabic ? difficultyBadge.labelAr : difficultyBadge.labelEn;

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
                        <span>{reasonLabel}</span>
                      </span>

                      {/* Subject Name */}
                      <span className="text-[11px] text-slate-400 font-medium">
                        {subjectTitle}
                      </span>

                      {/* Difficulty Pill */}
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${difficultyBadge.color}`}
                      >
                        {difficultyLabel}
                      </span>
                    </div>

                    {/* Knowledge Point Title */}
                    <div className="flex items-baseline gap-2">
                      <h4 className={`text-sm font-bold transition-colors ${
                        isLight ? 'text-slate-900 group-hover:text-indigo-600' : 'text-slate-100 group-hover:text-indigo-300'
                      }`}>
                        {isArabic ? item.knowledgePointNameAr : item.knowledgePointNameEn}
                      </h4>
                      <span className="text-xs text-slate-400 hidden md:inline font-mono">
                        ({isArabic ? item.knowledgePointNameEn : item.knowledgePointNameAr})
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span>
                        {isArabic
                          ? `عدد الأسئلة: ${item.questionCount} مسائل تكيُّفية`
                          : `Questions: ${item.questionCount} adaptive problems`}
                      </span>
                      {item.timeLimitSec && (
                        <span>
                          {isArabic
                            ? `الحد الزمني: ${Math.round(item.timeLimitSec / 60)} دقيقة`
                            : `Time limit: ${Math.round(item.timeLimitSec / 60)} mins`}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="shrink-0 flex items-center justify-end sm:justify-center">
                    {item.completed ? (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{isArabic ? 'تم الإنجاز ✓' : 'Completed ✓'}</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => onStartPrescribedPractice(item)}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>
                          {isArabic
                            ? `ابدأ التدريب الآن (${item.questionCount} أسئلة)`
                            : `Start Practice Now (${item.questionCount} Qs)`}
                        </span>
                        <ArrowLeft className={`w-4 h-4 transition-transform ${isArabic ? 'rotate-0' : 'rotate-180'}`} />
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
            <span>
              {isArabic
                ? 'يعمل محلياً على جهازك ١٠٠٪ بدون استهلاك لباقة الإنترنت'
                : 'Runs 100% on-device offline with zero mobile data usage'}
            </span>
          </span>

          <span className="text-slate-400">
            {isArabic ? 'تحديث يومي تلقائي عند حل المسائل' : 'Automatically adapts daily as you practice'}
          </span>
        </div>
      </div>
    </section>
  );
};
