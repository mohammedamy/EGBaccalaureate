import React from 'react';
import { Timer, Zap, CheckCircle2, RotateCcw, BookOpen, X } from 'lucide-react';
import { type DiagnosticDrillResult } from '../services/aiStudyHintService';
import { toHindiDigits } from '../utils/arabicNumerals';

interface DiagnosticDrillModalProps {
  result: DiagnosticDrillResult;
  lang: 'en' | 'ar';
  onClose: () => void;
  onRetake: () => void;
  onReviewSolutions: () => void;
}

export const DiagnosticDrillModal: React.FC<DiagnosticDrillModalProps> = ({
  result,
  lang,
  onClose,
  onRetake,
  onReviewSolutions,
}) => {
  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-lg rounded-2xl border border-cyan-500/40 bg-slate-950 shadow-2xl p-6 space-y-5 text-slate-100 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-slate-400 hover:text-white p-1 rounded-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">
              {isAr ? 'تقرير تمرين التشخيص السريع (Sprint Report)' : 'Quick Diagnostic Drill Report'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr ? 'تقييم السرعة والدقة ومحاكاة الضغط الزمني للامتحان' : 'Pace, accuracy & time-pressure diagnostic assessment'}
            </p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {/* Score Card */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              {isAr ? 'الدرجة' : 'Score'}
            </span>
            <div className="text-xl font-black text-cyan-400 font-mono">
              {isAr ? `${toHindiDigits(result.correctCount)} / ${toHindiDigits(result.totalQuestions)}` : `${result.correctCount} / ${result.totalQuestions}`}
            </div>
            <span className="text-[10px] text-slate-400 font-mono">({result.scorePct}%)</span>
          </div>

          {/* Time Card */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              {isAr ? 'إجمالي الوقت' : 'Time'}
            </span>
            <div className="text-xl font-black text-amber-400 font-mono">
              {Math.floor(result.totalTimeSec / 60)}:{(result.totalTimeSec % 60).toString().padStart(2, '0')}
            </div>
            <span className="text-[10px] text-slate-400">{isAr ? 'دقيقة : ثانية' : 'mm : ss'}</span>
          </div>

          {/* Pace Card */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              {isAr ? 'معدل السرعة' : 'Pace'}
            </span>
            <div className="text-xl font-black text-emerald-400 font-mono">
              {isAr ? `${toHindiDigits(result.paceSecPerQ)}ث` : `${result.paceSecPerQ}s`}
            </div>
            <span className="text-[10px] text-slate-400">{isAr ? 'لكل سؤال' : 'per question'}</span>
          </div>
        </div>

        {/* Speed Assessment Rating */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-slate-300">
                {isAr ? 'تقييم كفاءة إدارة الوقت:' : 'Pacing Assessment:'}
              </span>
            </div>
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              {isAr ? result.speedRatingAr : result.speedRatingEn}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isAr ? result.speedAssessmentAr : result.speedAssessmentEn}
          </p>
        </div>

        {/* Recommendations */}
        {result.recommendationsAr.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 block">
              {isAr ? 'توصيات التحسين الميداني للمذاكرة:' : 'Study Recommendations:'}
            </span>
            <div className="space-y-1.5">
              {(isAr ? result.recommendationsAr : result.recommendationsEn).map((rec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/40 p-2 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onReviewSolutions}
            className="w-full sm:flex-1 py-2.5 px-4 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isAr ? 'مراجعة خطوات الحل والشرح' : 'Review Step-by-Step'}</span>
          </button>

          <button
            type="button"
            onClick={onRetake}
            className="w-full sm:flex-1 py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isAr ? 'إعادة تمرين جديد' : 'New Sprint Drill'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
