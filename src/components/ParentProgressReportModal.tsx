import React, { useState, useMemo } from 'react';
import {
  X,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  Heart,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  generateParentReport,
  formatParentWeeklyDigest,
  generateWhatsAppShareUrl,
  generateSmsShareUrl,
  type ParentReportData,
} from '../services/parentReportService';
import { getStudentAnalytics } from '../services/studentAnalyticsService';

export interface ParentProgressReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'ar' | 'en';
  theme?: 'dark' | 'light' | 'high-contrast';
  defaultStudentName?: string;
}

export const ParentProgressReportModal: React.FC<ParentProgressReportModalProps> = ({
  isOpen,
  onClose,
  lang = 'ar',
  theme = 'dark',
  defaultStudentName = '',
}) => {
  const isLight = theme === 'light';
  const [reportLang, setReportLang] = useState<'ar' | 'en'>(lang);
  const isAr = reportLang === 'ar';

  const [studentName, setStudentName] = useState<string>(
    defaultStudentName || (lang === 'ar' ? 'طالب الثانوية العامة' : 'Student')
  );
  const [parentPhone, setParentPhone] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Generate data memoized
  const reportData: ParentReportData = useMemo(() => {
    const analytics = getStudentAnalytics();
    return generateParentReport(analytics, studentName);
  }, [studentName]);

  const formattedText = useMemo(() => {
    return formatParentWeeklyDigest(reportData, reportLang);
  }, [reportData, reportLang]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleOpenWhatsApp = () => {
    const url = generateWhatsAppShareUrl(formattedText, parentPhone);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenSms = () => {
    const url = generateSmsShareUrl(formattedText, parentPhone);
    window.open(url, '_blank');
  };

  const formatNum = (val: string | number) => (isAr ? toHindiDigits(val) : String(val));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 my-auto ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : 'bg-slate-900 border-slate-700 text-white shadow-emerald-950/40'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div
          className={`px-5 py-4 flex items-center justify-between border-b ${
            isLight ? 'bg-emerald-50/80 border-slate-200' : 'bg-slate-800/90 border-slate-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">
                  {isAr ? 'موجز ولي الأمر الأسبوعي (واتساب)' : 'Parent Weekly Digest (WhatsApp)'}
                </h2>
                <span className="hidden sm:inline-block">
                  <EgyptFlag className="w-5 h-3.5" />
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isAr
                  ? 'مشاركة تقرير مطمئن وداعم لولي الأمر بنقرة زر واحدة'
                  : 'Empathetic, stress-reducing progress summary for parents via 1-click WhatsApp'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setReportLang((prev) => (prev === 'ar' ? 'en' : 'ar'))}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            >
              {reportLang === 'ar' ? 'English' : 'عربي'}
            </button>
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

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">{isAr ? 'مؤشر الجاهزية' : 'Readiness'}</span>
              <span className="text-lg font-bold text-emerald-400">{formatNum(reportData.readinessPercentage)}%</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">{isAr ? 'وقت المذاكرة' : 'Study Time'}</span>
              <span className="text-lg font-bold text-sky-400">{formatNum(reportData.totalStudyMinutes)} {isAr ? 'د' : 'm'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">{isAr ? 'أسئلة تم حلها' : 'Questions'}</span>
              <span className="text-lg font-bold text-amber-400">{formatNum(reportData.totalQuestionsSolved)}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">{isAr ? 'متبقي للامتحان' : 'Days to Exam'}</span>
              <span className="text-lg font-bold text-rose-400">{formatNum(reportData.daysUntilThanawyaExams)} {isAr ? 'يوم' : 'd'}</span>
            </div>
          </div>

          {/* Student & Phone Customization Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-slate-400 font-medium mb-1">
                {isAr ? 'اسم الطالب / الطالبة في التقرير:' : 'Student Name:'}
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder={isAr ? 'مثال: أحمد محمد' : 'e.g. Ahmed'}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-medium mb-1">
                {isAr ? 'رقم هاتف ولي الأمر (اختياري للفتح المباشر):' : 'Parent Phone (optional for direct chat):'}
              </label>
              <input
                type="tel"
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                placeholder={isAr ? 'مثال: 01012345678 أو 201012345678+' : 'e.g. +201012345678'}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          {/* Simulated WhatsApp Bubble View */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isAr ? 'معاينة رسالة الواتساب الجاهزة للإرسال:' : 'WhatsApp Message Preview:'}</span>
            </span>

            <div className="p-4 rounded-2xl bg-[#0b141a] border border-[#202c33] text-slate-200 text-xs shadow-inner space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#202c33] text-[11px] text-[#8696a0]">
                <span>💬 WhatsApp • Clipsat Bot</span>
                <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-xs sm:text-[13px] leading-relaxed select-all text-[#e9edef]">
                {formattedText}
              </pre>
              <div className="pt-2 flex justify-end text-[11px] text-[#8696a0]">
                <span>✓✓ {isAr ? 'تم الإنشاء بنجاح' : 'Ready'}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleOpenWhatsApp}
              className="flex-1 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/40"
            >
              <Send className="w-4 h-4" />
              <span>{isAr ? 'إرسال لولي الأمر عبر واتساب مباشرة' : 'Open in WhatsApp Directly'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? (isAr ? 'تم نسخ التقرير!' : 'Copied!') : (isAr ? 'نسخ النص' : 'Copy Text')}</span>
            </button>

            <button
              onClick={handleOpenSms}
              className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700"
              title={isAr ? 'إرسال كرسالة نصية قصيرة SMS' : 'Send via SMS'}
            >
              <MessageSquare className="w-4 h-4" />
              <span>SMS</span>
            </button>
          </div>

          {/* Egyptian Family Sensitivity Note */}
          <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-300 text-[11px] flex items-start gap-2">
            <Heart className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {isAr
                ? 'تمت صياغة هذا التقرير بأسلوب داعم ومطمئن للأسرة المصرية لتجنب إثارة القلق أو المقارنات السلبية، والتركيز على مواصلة الجهد والمذاكرة بثقة وهدوء.'
                : 'This summary is deliberately crafted with compassionate phrasing to reassure families, celebrate effort, and prevent undue exam anxiety.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
