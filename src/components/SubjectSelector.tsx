import React, { useState, useRef, useEffect } from 'react';
import type { Curriculum, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import {
  SUBJECTS,
  getSubjectById,
  getSubjectStats,
  type SubjectDefinition,
} from '../data/subjects';
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Languages,
  Layers,
  ChevronDown,
  Check,
  Sparkles,
  BookOpen,
  Landmark,
  Globe,
  Mountain,
  Brain,
  Users,
  TrendingUp,
  Binary,
  Orbit,
  Scale,
  Briefcase,
  Palette,
} from 'lucide-react';
import { toHindiDigits } from '../utils/arabicNumerals';

interface SubjectSelectorProps {
  selectedSubject: string;
  onSelectSubject: (subjectId: string) => void;
  curriculum: Curriculum;
  lang: Language;
  theme?: ThemeMode;
  className?: string;
  compact?: boolean;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  selectedSubject,
  onSelectSubject,
  curriculum,
  lang,
  theme = 'dark',
  className = '',
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Scroll active subject into view when opened
  useEffect(() => {
    if (isOpen && activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const activeSubject = getSubjectById(selectedSubject);
  const allStats = getSubjectStats(curriculum, 'all');

  const renderSubjectIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className={className} />;
      case 'Atom':
        return <Atom className={className} />;
      case 'FlaskConical':
        return <FlaskConical className={className} />;
      case 'Dna':
        return <Dna className={className} />;
      case 'Languages':
      case 'BookA':
        return <Languages className={className} />;
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'Landmark':
        return <Landmark className={className} />;
      case 'Globe':
        return <Globe className={className} />;
      case 'Mountain':
        return <Mountain className={className} />;
      case 'Brain':
        return <Brain className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Binary':
        return <Binary className={className} />;
      case 'Orbit':
        return <Orbit className={className} />;
      case 'Scale':
        return <Scale className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Palette':
        return <Palette className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  const formatCount = (count: number) => {
    return isArabic ? toHindiDigits(count) : count.toString();
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`w-full sm:w-auto max-w-full sm:max-w-[280px] md:max-w-[340px] flex items-center justify-between sm:justify-start gap-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 border min-w-0 ${
          compact ? 'px-2.5 py-1.5' : 'px-3 sm:px-3.5 py-2'
        } ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-yellow-300 hover:bg-zinc-950'
            : isLight
            ? 'bg-white border-slate-300 text-slate-800 hover:border-indigo-400 hover:bg-slate-50 shadow-xs'
            : 'bg-slate-900 border-slate-700/80 text-slate-100 hover:border-indigo-500/70 hover:bg-slate-800/90'
        }`}
      >
        {activeSubject ? (
          <div className="flex items-center gap-2 truncate min-w-0 flex-1">
            <span className="text-sm shrink-0 leading-none">{activeSubject.emoji}</span>
            <span className="truncate font-extrabold min-w-0">
              {isArabic ? activeSubject.titleAr : activeSubject.titleEn}
            </span>
            <span
              className={`hidden md:inline-flex text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md shrink-0 ${
                isContrast
                  ? 'bg-yellow-400 text-black font-black'
                  : isLight
                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/60'
              }`}
            >
              {(() => {
                const stats = getSubjectStats(curriculum, activeSubject.id);
                return `${formatCount(stats.totalChapters)} ${isArabic ? 'فصل' : 'Ch'}`;
              })()}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2 truncate min-w-0 flex-1">
            <Layers className={`w-4 h-4 shrink-0 ${isContrast ? 'text-yellow-400' : 'text-indigo-400'}`} />
            <span className="truncate font-extrabold min-w-0">
              {isArabic ? 'جميع المواد' : 'All Subjects'}
            </span>
            <span
              className={`hidden md:inline-flex text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md shrink-0 ${
                isContrast
                  ? 'bg-cyan-400 text-black font-black'
                  : isLight
                  ? 'bg-slate-100 text-slate-600 border border-slate-200'
                  : 'bg-slate-800 text-slate-300 border border-slate-700'
              }`}
            >
              {formatCount(SUBJECTS.length)} {isArabic ? 'مواد' : 'Subjects'}
            </span>
          </div>
        )}

        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 opacity-70 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Container */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className={`absolute ${
            isArabic ? 'right-0 sm:left-0 sm:right-auto' : 'left-0 sm:right-0 sm:left-auto'
          } mt-2 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)] max-h-[min(78vh,520px)] flex flex-col rounded-2xl p-2 shadow-2xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isContrast
              ? 'bg-black border-2 border-yellow-400 text-white shadow-cyan-950/40'
              : isLight
              ? 'bg-white/98 border-slate-200 text-slate-900 shadow-xl shadow-slate-200/60'
              : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-2xl shadow-black/80'
          }`}
        >
          {/* Menu Header (Fixed at top) */}
          <div className="px-3 py-2 border-b flex items-center justify-between border-slate-200 dark:border-slate-800/80 shrink-0">
            <div>
              <p className="text-xs font-black tracking-tight">
                {isArabic ? 'المادة الدراسية' : 'Select Subject Track'}
              </p>
              <p className={`text-[10px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isArabic ? `${toHindiDigits(SUBJECTS.length)} مواد معتمدة حالياً` : `${SUBJECTS.length} Accredited Subjects`}
              </p>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                isContrast
                  ? 'bg-yellow-400 text-black font-black border-yellow-300'
                  : isLight
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60'
              }`}
            >
              {curriculum.id === 'thanaweya' ? (isArabic ? 'الثانوية العامة' : 'Thanaweya') : (isArabic ? 'البكالوريا' : 'EG-Bac')}
            </span>
          </div>

          {/* Scrollable Container for All Subjects + Divider + Subject List */}
          <div className="flex-1 overflow-y-auto overscroll-contain pr-1 pl-1 py-1 space-y-1" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* Option: All Subjects */}
            <button
              ref={selectedSubject === 'all' ? activeItemRef : null}
              type="button"
              onClick={() => {
                onSelectSubject('all');
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left rtl:text-right transition-all cursor-pointer ${
                selectedSubject === 'all'
                  ? isContrast
                    ? 'bg-yellow-400 text-black font-black'
                    : isLight
                    ? 'bg-indigo-50 text-indigo-950 font-bold ring-1 ring-indigo-200'
                    : 'bg-indigo-950/60 text-indigo-200 font-bold ring-1 ring-indigo-500/40'
                  : isContrast
                  ? 'hover:bg-zinc-900 text-white'
                  : isLight
                  ? 'hover:bg-slate-100 text-slate-700'
                  : 'hover:bg-slate-900/80 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                    isContrast
                      ? 'bg-black border-cyan-400 text-cyan-300'
                      : isLight
                      ? 'bg-slate-100 border-slate-200 text-slate-700'
                      : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black truncate">
                      {isArabic ? 'جميع المواد (شامل)' : 'All Subjects (Complete)'}
                    </span>
                  </div>
                  <p className={`text-[10px] truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {isArabic
                      ? `تصفح جميع الـ ${toHindiDigits(allStats.totalChapters)} فصلاً في المنصة`
                      : `Browse all ${allStats.totalChapters} chapters across platform`}
                  </p>
                </div>
              </div>

              {selectedSubject === 'all' && (
                <Check className={`w-4 h-4 shrink-0 ${isContrast ? 'text-black' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              )}
            </button>

            <div className="my-1 border-t border-slate-200 dark:border-slate-800/80" />

            {/* Core Subjects List */}
            {SUBJECTS.map((subject: SubjectDefinition) => {
              const isSelected = selectedSubject === subject.id;
              const stats = getSubjectStats(curriculum, subject.id);
              const branchCount = subject.branchIds[curriculum.id]?.length || 0;

              return (
                <button
                  key={subject.id}
                  ref={isSelected ? activeItemRef : null}
                  type="button"
                  onClick={() => {
                    onSelectSubject(subject.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left rtl:text-right transition-all cursor-pointer ${
                    isSelected
                      ? isContrast
                        ? 'bg-yellow-400 text-black font-black'
                        : isLight
                        ? 'bg-indigo-50 text-indigo-950 font-bold ring-1 ring-indigo-300'
                        : 'bg-indigo-950/60 text-indigo-200 font-bold ring-1 ring-indigo-500/40'
                      : isContrast
                      ? 'hover:bg-zinc-900 text-white'
                      : isLight
                      ? 'hover:bg-slate-100 text-slate-700'
                      : 'hover:bg-slate-900/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                        isSelected && isContrast
                          ? 'bg-black text-yellow-400 border-black'
                          : isContrast
                          ? 'bg-black border-yellow-400 text-yellow-400'
                          : isLight
                          ? `${subject.lightBg}`
                          : `${subject.darkBg}`
                      }`}
                    >
                      {renderSubjectIcon(subject.iconName, 'w-4 h-4')}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black truncate">
                          {isArabic ? subject.titleAr : subject.titleEn}
                        </span>
                        <span className="text-xs shrink-0">{subject.emoji}</span>
                      </div>
                      <p className={`text-[10px] truncate ${
                        isSelected
                          ? isLight ? 'text-indigo-700' : 'text-indigo-300'
                          : isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {isArabic
                          ? `${toHindiDigits(branchCount)} ${branchCount > 1 ? 'فروع' : 'فرع'} • ${toHindiDigits(stats.totalChapters)} ${stats.totalChapters > 1 ? 'فصول' : 'فصل'}`
                          : `${branchCount} ${branchCount > 1 ? 'Branches' : 'Branch'} • ${stats.totalChapters} ${stats.totalChapters > 1 ? 'Chapters' : 'Chapter'}`}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className={`w-4 h-4 shrink-0 ${isContrast ? 'text-black' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Menu Footer: Future Subjects Indicator (Fixed at bottom) */}
          <div className="shrink-0 mt-2 pt-2 border-t border-slate-200 dark:border-slate-800/80 px-2 py-1 flex items-center justify-between text-[10px]">
            <span className={`flex items-center gap-1 font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{isArabic ? 'مهيأ لإضافة مواد جديدة مستقبلاً' : 'Future subjects ready'}</span>
            </span>
            <span className="font-mono text-[9px] opacity-60">{SUBJECTS.length} {isArabic ? 'مسارات' : 'Tracks'}</span>
          </div>
        </div>
      )}
    </div>
  );
};
