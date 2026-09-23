import React, { useState } from 'react';
import type { ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { Globe, Atom, Landmark, Sparkles, ChevronDown, ChevronUp, Info, HelpCircle } from 'lucide-react';
import { SUBJECT_TRACK_REGISTRY, isCommonSubject } from '../data/trackScopeData';

interface Props {
  subjectId: string;
  lang?: Language;
  theme?: ThemeMode;
  className?: string;
}

export const TrackGuidanceCard: React.FC<Props> = ({
  subjectId,
  lang = 'ar',
  theme = 'dark',
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const classification = SUBJECT_TRACK_REGISTRY[subjectId];
  if (!classification || !isCommonSubject(subjectId)) {
    return null;
  }

  // Card background styling based on theme
  let cardClass = '';
  let subCardCommon = '';
  let subCardSci = '';
  let subCardLit = '';

  if (isContrast) {
    cardClass = 'bg-black border-2 border-yellow-400 text-yellow-300';
    subCardCommon = 'bg-black border-2 border-emerald-400 text-emerald-300';
    subCardSci = 'bg-black border-2 border-cyan-400 text-cyan-300';
    subCardLit = 'bg-black border-2 border-amber-400 text-amber-300';
  } else if (isLight) {
    cardClass = 'bg-white border-slate-200 shadow-md text-slate-900';
    subCardCommon = 'bg-emerald-50/70 border-emerald-200 text-slate-800';
    subCardSci = 'bg-sky-50/70 border-sky-200 text-slate-800';
    subCardLit = 'bg-amber-50/70 border-amber-200 text-slate-800';
  } else {
    cardClass = 'bg-slate-900/95 border-slate-800 shadow-xl text-slate-100';
    subCardCommon = 'bg-emerald-950/40 border-emerald-800/60 text-slate-200';
    subCardSci = 'bg-sky-950/40 border-sky-800/60 text-slate-200';
    subCardLit = 'bg-amber-950/40 border-amber-800/60 text-slate-200';
  }

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 transition-all mb-6 ${cardClass} ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Info className="w-5 h-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isArabic
                  ? 'دليل التمييز الأكاديمي: المشترك، العلمي، والأدبي'
                  : 'Track Scope Breakdown: Common, Scientific & Literary'}
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {isArabic ? 'مادة مشتركة' : 'Common Core Subject'}
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? `توضيح دقيق للمقرر المشترك والتوجيه التخصصي لطلاب الشعبة العلمية والأدبية في ${classification.titleAr}`
                : `Official curriculum distribution between Common Core, STEM Scientific Track, and Literary Track in ${classification.titleEn}`}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all ${
            isLight
              ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
              : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
          }`}
          title={isExpanded ? (isArabic ? 'تصغير' : 'Collapse') : (isArabic ? 'توسيع' : 'Expand')}
        >
          {isExpanded ? (
            <>
              <span className="hidden sm:inline">{isArabic ? 'إخفاء التفاصيل' : 'Hide'}</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span className="hidden sm:inline">{isArabic ? 'عرض التفاصيل' : 'Show'}</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Expanded 3-Column Grid */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Column 1: Common Core (الجزء المشترك) */}
            <div className={`p-4 rounded-xl border space-y-2.5 flex flex-col justify-between ${subCardCommon}`}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Globe className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-emerald-500 dark:text-emerald-300">
                      {isArabic ? '١. الجزء المشترك (إلزامي للجميع)' : '1. Common Core (Mandatory All)'}
                    </h4>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      {isArabic ? 'مقرر على الشعبتين بنسبة ١٠٠٪' : '100% Shared Across All Tracks'}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed">
                  {isArabic ? classification.commonDescriptionAr : classification.commonDescriptionEn}
                </p>
              </div>
              <div className="pt-2 border-t border-emerald-500/20 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{isArabic ? 'موحد في كراسة الامتحان' : 'Standardized on official paper'}</span>
              </div>
            </div>

            {/* Column 2: Scientific Focus (خاص بالعلمي) */}
            <div className={`p-4 rounded-xl border space-y-2.5 flex flex-col justify-between ${subCardSci}`}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    <Atom className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-sky-600 dark:text-sky-300">
                      {isArabic ? '٢. خاص بالشعبة العلمية (علوم ورياضة)' : '2. Scientific Track Emphasis'}
                    </h4>
                    <span className="text-[10px] text-sky-600 dark:text-sky-400 font-medium">
                      {isArabic ? 'تطبيقات علمية واستدلال كمي' : 'STEM Applications & Quantitative Contexts'}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed">
                  {isArabic
                    ? classification.scientificFocusAr || 'تطبيقات وظيفية وسياقات علمية متوافقة مع الشعبة العلمية.'
                    : classification.scientificFocusEn || 'Functional contexts aligned with STEM sciences.'}
                </p>
              </div>
              <div className="pt-2 border-t border-sky-500/20 text-[11px] font-semibold text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{isArabic ? 'تركيز علمي وتكنولوجي' : 'STEM scientific contexts'}</span>
              </div>
            </div>

            {/* Column 3: Literary Focus (خاص بالأدبي) */}
            <div className={`p-4 rounded-xl border space-y-2.5 flex flex-col justify-between ${subCardLit}`}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Landmark className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-amber-600 dark:text-amber-300">
                      {isArabic ? '٣. خاص بالشعبة الأدبية' : '3. Literary Track Emphasis'}
                    </h4>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                      {isArabic ? 'نقد أدبي معمق وتذوق فكري' : 'In-depth Literary Critique & Rhetoric'}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed">
                  {isArabic
                    ? classification.literaryFocusAr || 'تحليل نقدي وأدبي وتاريخي موسع موجه لطلاب الشعبة الأدبية.'
                    : classification.literaryFocusEn || 'In-depth literary and critical analysis for Humanities students.'}
                </p>
              </div>
              <div className="pt-2 border-t border-amber-500/20 text-[11px] font-semibold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{isArabic ? 'تحليل مقالي ونقدي موسع' : 'Critical essay & literary depth'}</span>
              </div>
            </div>
          </div>

          {/* Pedagogical footnote */}
          {classification.recommendedTrackNoteAr && (
            <div className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950/70 border-slate-800 text-slate-300'
            }`}>
              <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{isArabic ? classification.recommendedTrackNoteAr : classification.recommendedTrackNoteEn}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackGuidanceCard;
