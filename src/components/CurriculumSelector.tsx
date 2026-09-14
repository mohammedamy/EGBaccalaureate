import React, { useState, useRef, useEffect } from 'react';
import type { CurriculumType, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { Award, BookOpen, ChevronDown, Check, Sparkles } from 'lucide-react';

interface CurriculumSelectorProps {
  curriculum: CurriculumType;
  onCurriculumChange: (curr: CurriculumType) => void;
  lang: Language;
  theme?: ThemeMode;
  className?: string;
  compact?: boolean;
}

export const CurriculumSelector: React.FC<CurriculumSelectorProps> = ({
  curriculum,
  onCurriculumChange,
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
        className={`w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 border ${
          compact ? 'px-2.5 py-1.5' : 'px-3 sm:px-3.5 py-2'
        } ${
          isContrast
            ? 'bg-black border-2 border-cyan-400 text-cyan-300 hover:bg-zinc-950'
            : isLight
            ? 'bg-white border-slate-300 text-slate-800 hover:border-indigo-400 hover:bg-slate-50 shadow-xs'
            : 'bg-slate-900 border-slate-700/80 text-slate-100 hover:border-indigo-500/70 hover:bg-slate-800/90'
        }`}
      >
        <div className="flex items-center gap-2 truncate">
          <ActiveIcon className={`w-3.5 h-3.5 shrink-0 ${activeTrack.iconColor}`} />
          <span className="truncate font-extrabold">
            {isArabic ? activeTrack.titleAr : activeTrack.titleEn}
          </span>
          <span
            className={`hidden md:inline-flex text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md ${
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
            isArabic ? 'right-0' : 'left-0'
          } mt-2 w-72 sm:w-80 rounded-2xl p-2 shadow-2xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isContrast
              ? 'bg-black border-2 border-cyan-400 text-white shadow-cyan-950/40'
              : isLight
              ? 'bg-white/98 border-slate-200 text-slate-900 shadow-xl shadow-slate-200/60'
              : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-2xl shadow-black/80'
          }`}
        >
          {/* Menu Header */}
          <div className="px-3 py-2 border-b flex items-center justify-between border-slate-200 dark:border-slate-800/80">
            <div>
              <p className="text-xs font-black tracking-tight flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isArabic ? 'المسار التعليمي والمنهج' : 'Curriculum Track'}</span>
              </p>
              <p className="text-[10px] text-slate-400">
                {isArabic ? 'اختر النظام الدراسي لعرض المواد والمحتوى' : 'Select curriculum track'}
              </p>
            </div>
          </div>

          {/* Options List */}
          <div className="py-1.5 space-y-1">
            {tracks.map((track) => {
              const isSelected = track.id === curriculum;
              const TrackIcon = track.icon;

              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => {
                    onCurriculumChange(track.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-left rtl:text-right cursor-pointer group ${
                    isSelected
                      ? isContrast
                        ? 'bg-cyan-950 text-white border border-cyan-400'
                        : isLight
                        ? 'bg-indigo-50/90 text-indigo-950 border border-indigo-200 font-extrabold'
                        : 'bg-indigo-950/60 text-white border border-indigo-800/60 font-extrabold'
                      : isContrast
                      ? 'hover:bg-zinc-900 text-slate-200'
                      : isLight
                      ? 'hover:bg-slate-100/80 text-slate-700'
                      : 'hover:bg-slate-900/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
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

                  {isSelected && (
                    <div className="shrink-0 ml-2 rtl:ml-0 rtl:mr-2">
                      <Check
                        className={`w-4 h-4 ${
                          isContrast ? 'text-cyan-400' : 'text-indigo-500'
                        }`}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
