import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { DailyPrescriptionCard } from './DailyPrescriptionCard';
import type { PrescribedItem } from '../types/adaptivePractice';
import type { Language } from '../i18n/translations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartPrescribedPractice: (item: PrescribedItem) => void;
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const DailyPrescriptionModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onStartPrescribedPractice,
  lang = 'ar',
  theme = 'dark',
}) => {
  if (!isOpen) return null;

  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      dir={isArabic ? 'rtl' : 'ltr'}
      role="dialog"
      aria-modal="true"
      aria-label={isArabic ? 'روشتة المذاكرة اليومية التكيفية' : 'Adaptive Daily Study Prescription'}
    >
      <div
        className={`relative w-full max-w-4xl border rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] ${
          isHighContrast
            ? 'bg-black border-yellow-400 text-yellow-300'
            : isLight
            ? 'bg-white border-indigo-200 text-slate-900 shadow-indigo-100/50'
            : 'bg-slate-900 border-slate-700/80 text-slate-100'
        }`}
      >
        {/* Header bar */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between shrink-0 ${
            isHighContrast
              ? 'border-yellow-400 bg-black text-yellow-300'
              : isLight
              ? 'border-indigo-100 bg-gradient-to-r from-indigo-50/90 via-white to-violet-50/90 text-slate-900'
              : 'border-slate-800 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-violet-950/30 text-white'
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-base">
              {isArabic
                ? 'روشتة المذاكرة اليومية التكيفية (Adaptive Daily Prescription)'
                : 'Adaptive Daily Study Prescription'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-colors cursor-pointer text-xs font-semibold ${
              isLight
                ? 'border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200'
                : isHighContrast
                ? 'border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                : 'border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600'
            }`}
            aria-label={isArabic ? 'إغلاق الروشتة اليومية' : 'Close Daily Prescription'}
            title={isArabic ? 'إغلاق الروشتة اليومية' : 'Close Daily Prescription'}
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">{isArabic ? 'إغلاق الروشتة' : 'Close'}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <DailyPrescriptionCard
            lang={lang}
            theme={theme}
            onClose={onClose}
            onStartPrescribedPractice={(item) => {
              onClose();
              onStartPrescribedPractice(item);
            }}
          />
        </div>

        {/* Modal Footer */}
        <div
          className={`px-6 py-3.5 border-t flex items-center justify-between gap-3 shrink-0 ${
            isHighContrast
              ? 'border-yellow-400 bg-black text-yellow-300'
              : isLight
              ? 'border-indigo-100 bg-slate-50 text-slate-700'
              : 'border-slate-800 bg-slate-950/80 text-slate-300'
          }`}
        >
          <p className="text-xs text-slate-400 hidden sm:block">
            {isArabic
              ? 'يمكنك إعادة فتح الروشتة اليومية في أي وقت من القائمة الرئيسية أو بالضغط على ⌥R.'
              : 'You can reopen your daily prescription anytime from the tools menu or by pressing ⌥R.'}
          </p>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ms-auto ${
              isLight
                ? 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
                : isHighContrast
                ? 'border-yellow-400 bg-black text-yellow-300 hover:bg-yellow-400 hover:text-black'
                : 'border-slate-700 bg-slate-850 text-slate-200 hover:bg-slate-800 hover:text-white'
            }`}
            title={isArabic ? 'إغلاق نافذة الروشتة' : 'Close Prescription Window'}
            aria-label={isArabic ? 'إغلاق نافذة الروشتة' : 'Close Prescription Window'}
          >
            <X className="w-4 h-4" />
            <span>{isArabic ? 'إغلاق الروشتة' : 'Close Prescription'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
