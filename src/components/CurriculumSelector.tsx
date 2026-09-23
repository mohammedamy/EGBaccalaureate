import React, { useState, useRef, useEffect } from 'react';
import type { CurriculumType, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import type { AcademicTrack } from '../types/userProfile';
import { Award, BookOpen, ChevronDown, Sparkles } from 'lucide-react';

interface CurriculumSelectorProps {
  curriculum: CurriculumType;
  onCurriculumChange: (curr: CurriculumType) => void;
  academicTrack?: AcademicTrack;
  onTrackChange?: (track: AcademicTrack) => void;
  lang: Language;
  theme?: ThemeMode;
  className?: string;
  compact?: boolean;
}

export const CurriculumSelector: React.FC<CurriculumSelectorProps> = ({
  curriculum,
  onCurriculumChange,
  academicTrack = 'scientific_science',
  onTrackChange,
  lang,
  theme = 'dark',
  className = '',
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

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

  const tracks: Array<{
    id: CurriculumType;
    titleAr: string;
    titleEn: string;
    subtitleAr: string;
    subtitleEn: string;
    badgeAr: string;
    badgeEn: string;
    icon: typeof Award;
    iconColor: string;
  }> = [
    {
      id: 'thanaweya',
      titleAr: 'الثانوية العامة',
      titleEn: 'Thanaweya Amma',
      subtitleAr: 'المنهج الوزاري الرسمي المعتمد 2026',
      subtitleEn: 'Official Ministerial Curriculum 2026',
      badgeAr: 'المنهج العام',
      badgeEn: 'National Track',
      icon: Award,
      iconColor: 'text-amber-400',
    },
    {
      id: 'egbac',
      titleAr: 'البكالوريا المصرية',
      titleEn: 'EG-Baccalaureate',
      subtitleAr: 'المعايير المتقدمة لمدارس المتفوقين STEM',
      subtitleEn: 'Advanced STEM Curriculum Standards',
      badgeAr: 'مدارس STEM',
      badgeEn: 'STEM Track',
      icon: BookOpen,
      iconColor: 'text-cyan-400',
    },
  ];

  const activeTrack = tracks.find((t) => t.id === curriculum) || tracks[0];
  const ActiveIcon = activeTrack.icon;

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`w-full sm:w-auto max-w-full sm:max-w-[260px] md:max-w-[320px] flex items-center justify-between sm:justify-start gap-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 border min-w-0 ${
          compact ? 'px-2.5 py-1.5' : 'px-3 sm:px-3.5 py-2'
        } ${
          isContrast
            ? 'bg-black border-2 border-cyan-400 text-cyan-300 hover:bg-zinc-950'
            : isLight
            ? 'bg-white border-slate-300 text-slate-800 hover:border-indigo-400 hover:bg-slate-50 shadow-xs'
            : 'bg-slate-900 border-slate-700/80 text-slate-100 hover:border-indigo-500/70 hover:bg-slate-800/90'
        }`}
      >
        <div className="flex items-center gap-2 truncate min-w-0 flex-1">
          {/* Leading Little Tick Mark */}
          <span className="text-emerald-400 font-black text-xs shrink-0" title={isArabic ? 'المسار المختار' : 'Selected Track'}>
            ✓
          </span>
          <ActiveIcon className={`w-3.5 h-3.5 shrink-0 ${activeTrack.iconColor}`} />
          <span className="truncate font-extrabold min-w-0">
            {isArabic ? activeTrack.titleAr : activeTrack.titleEn}
          </span>
          <span
            className={`hidden md:inline-flex text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md shrink-0 ${
              isContrast
                ? 'bg-cyan-400 text-black font-black'
                : isLight
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/60'
            }`}
          >
            {isArabic ? activeTrack.badgeAr : activeTrack.badgeEn}
          </span>
        </div>

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
          } mt-2 w-72 sm:w-84 max-w-[calc(100vw-1.5rem)] max-h-[min(82vh,560px)] flex flex-col rounded-2xl p-2.5 shadow-2xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isContrast
              ? 'bg-black border-2 border-cyan-400 text-white shadow-cyan-950/40'
              : isLight
              ? 'bg-white/98 border-slate-200 text-slate-900 shadow-xl shadow-slate-200/60'
              : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-2xl shadow-black/80'
          }`}
        >
          {/* Menu Header (Fixed at top) */}
          <div className="px-3 py-2 border-b flex items-center justify-between border-slate-200 dark:border-slate-800/80 shrink-0">
            <div>
              <p className="text-xs font-black tracking-tight flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isArabic ? 'المسار التعليمي والمنهج' : 'Curriculum Track'}</span>
              </p>
              <p className="text-[10px] text-slate-400">
                {isArabic ? 'اختر النظام الدراسي والشعبة المطلوبة' : 'Select curriculum track & required stream'}
              </p>
            </div>
          </div>

          {/* Options List (Scrollable) */}
          <div className="flex-1 overflow-y-auto overscroll-contain pr-1 pl-1 py-1 space-y-2" style={{ WebkitOverflowScrolling: 'touch' }}>
            {tracks.map((track) => {
              const isSelected = track.id === curriculum;
              const TrackIcon = track.icon;

              return (
                <div
                  key={track.id}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isSelected
                      ? isContrast
                        ? 'bg-cyan-950 text-white border-cyan-400'
                        : isLight
                        ? 'bg-indigo-50/90 text-indigo-950 border-indigo-200 shadow-xs'
                        : 'bg-indigo-950/60 text-white border-indigo-800/60 shadow-xs'
                      : isContrast
                      ? 'border-zinc-800 hover:bg-zinc-900 text-slate-200'
                      : isLight
                      ? 'border-slate-200 hover:bg-slate-100/80 text-slate-700'
                      : 'border-slate-800/80 hover:bg-slate-900/80 text-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      onCurriculumChange(track.id);
                      if (track.id === 'egbac' && onTrackChange) {
                        onTrackChange('stem');
                      } else if (track.id === 'thanaweya' && academicTrack === 'stem' && onTrackChange) {
                        onTrackChange('scientific_science');
                      }
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between text-left rtl:text-right cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Leading Little Tick Mark in front of track */}
                      <div className="shrink-0">
                        {isSelected ? (
                          <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                            ✓
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-slate-400/40 dark:border-slate-600/40 block opacity-40" />
                        )}
                      </div>

                      <div
                        className={`p-2 rounded-lg shrink-0 transition-transform group-hover:scale-110 ${
                          isSelected
                            ? isContrast
                              ? 'bg-cyan-400 text-black'
                              : 'bg-indigo-600 text-white shadow-sm'
                            : isContrast
                            ? 'bg-zinc-800 text-slate-300'
                            : isLight
                            ? 'bg-slate-100 text-slate-600'
                            : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        <TrackIcon className="w-4 h-4" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold truncate">
                            {isArabic ? track.titleAr : track.titleEn}
                          </p>
                          <span
                            className={`text-[9px] font-mono px-1 py-0.2 rounded ${
                              isSelected
                                ? 'bg-indigo-600/30 text-indigo-300 font-black'
                                : 'bg-slate-800/60 text-slate-400'
                            }`}
                          >
                            {isArabic ? track.badgeAr : track.badgeEn}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">
                          {isArabic ? track.subtitleAr : track.subtitleEn}
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Sub-Track Selector inside Menu: Little tick mark in front of required track */}
                  {isSelected && track.id === 'thanaweya' && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
                      <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                        <span>{isArabic ? 'الشعبة المطلوبة:' : 'Required Academic Track:'}</span>
                      </p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'scientific_science', labelAr: 'علمي علوم', labelEn: 'Science', icon: '🔬' },
                          { id: 'scientific_math', labelAr: 'علمي رياضة', labelEn: 'Math', icon: '📐' },
                          { id: 'literary', labelAr: 'أدبي', labelEn: 'Literary', icon: '🏛️' },
                        ].map((subTrack) => {
                          const isTrackSelected = academicTrack === subTrack.id;
                          return (
                            <button
                              key={subTrack.id}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onTrackChange?.(subTrack.id as AcademicTrack);
                                setIsOpen(false);
                              }}
                              className={`text-[10px] font-bold px-2 py-1 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer min-w-0 ${
                                isTrackSelected
                                  ? isLight
                                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-black shadow-2xs'
                                    : 'bg-emerald-950/70 text-emerald-300 border-emerald-700 font-black shadow-2xs'
                                  : isLight
                                  ? 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                              }`}
                            >
                              {/* Little tick mark in front */}
                              {isTrackSelected ? (
                                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-black shrink-0">
                                  ✓
                                </span>
                              ) : (
                                <span className="w-3.5 h-3.5 rounded-full border border-slate-400/40 dark:border-slate-600/40 block shrink-0 opacity-40" />
                              )}
                              <span className="shrink-0">{subTrack.icon}</span>
                              <span className="truncate">{isArabic ? subTrack.labelAr : subTrack.labelEn}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {isSelected && track.id === 'egbac' && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                      <div className="text-[10px] font-bold px-2 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-800/50 flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-black shrink-0">
                          ✓
                        </span>
                        <span>🧪</span>
                        <span>{isArabic ? 'مسار العلوم والتكنولوجيا المتقدم STEM' : 'Advanced STEM Engineering & Science Track'}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
