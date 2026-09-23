import React from 'react';
import type { Language } from '../i18n/translations';
import type { QuickErrorReport } from '../types/adaptivePractice';
import { QUICK_ERROR_REPORT_OPTIONS } from '../types/adaptivePractice';

interface ErrorSelfReportProps {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  onReport: (errorType: QuickErrorReport) => void;
  onSkip: () => void;
}

/**
 * A compact 3-button widget shown after a student answers incorrectly.
 * Designed for <2 seconds of interaction — the student taps one icon
 * and the report is recorded. No text input, no modals.
 *
 * Options:
 *   🧠 "لم أفهم الفكرة"    — Concept Gap
 *   🔢 "خطأ حسابي"         — Calculation Error
 *   👁️ "لم أقرأ السؤال جيدًا" — Comprehension Misread
 */
export const ErrorSelfReport: React.FC<ErrorSelfReportProps> = ({
  lang,
  theme = 'dark',
  onReport,
  onSkip,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  return (
    <div
      className={`
        flex flex-col items-center gap-2 py-3 px-4 rounded-xl border
        ${isLight
          ? 'bg-amber-50 border-amber-200'
          : 'bg-amber-500/5 border-amber-500/20'
        }
        animate-fadeIn
      `}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <span className={`text-[11px] font-bold ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>
        {isAr ? 'ما سبب الخطأ؟ (اختياري)' : 'Why did you get it wrong? (optional)'}
      </span>

      {/* Buttons */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {QUICK_ERROR_REPORT_OPTIONS.map((option) => (
          <button
            key={option.type}
            type="button"
            onClick={() => onReport(option.type)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
              transition-all duration-150 active:scale-95
              ${isLight
                ? 'bg-white border border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-300'
                : 'bg-slate-800/80 border border-slate-700 text-slate-200 hover:bg-amber-500/10 hover:border-amber-500/40'
              }
            `}
            title={isAr ? option.labelAr : option.labelEn}
          >
            <span className="text-base" aria-hidden="true">{option.icon}</span>
            <span>{isAr ? option.labelAr : option.labelEn}</span>
          </button>
        ))}
      </div>

      {/* Skip link */}
      <button
        type="button"
        onClick={onSkip}
        className={`text-[10px] ${isLight ? 'text-slate-400' : 'text-slate-500'} hover:underline`}
      >
        {isAr ? 'تخطي' : 'Skip'}
      </button>
    </div>
  );
};
