import React from 'react';
import type { CurriculumType } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { Globe, UserCheck, Award, BookOpen, Sun, Moon } from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  onLanguageToggle: () => void;
  role: UserRole;
  onRoleToggle: () => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  curriculum: CurriculumType;
  onCurriculumChange: (curr: CurriculumType) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<Props> = ({
  lang,
  onLanguageToggle,
  role,
  onRoleToggle,
  theme,
  onThemeToggle,
  curriculum,
  onCurriculumChange,
  activeTab,
  onTabChange,
}) => {
  const t = translations[lang];
  const isLight = theme === 'light';

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 border-b backdrop-blur-md no-print ${
      isLight
        ? 'bg-white/95 text-slate-800 border-slate-200 shadow-sm'
        : 'bg-slate-950/95 text-slate-100 border-slate-800 shadow-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Announcement Bar */}
        <div className={`py-1.5 border-b flex items-center justify-between gap-2 text-[11px] transition-colors ${
          isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800/60 text-slate-400'
        }`}>
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
            <span className={`font-semibold shrink-0 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>{t.moeBadge}</span>
            <span className={`hidden sm:inline ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>|</span>
            <span className={`hidden sm:inline truncate ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{t.officialMoeRef}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Day / Night Theme Toggle */}
            <button
              onClick={onThemeToggle}
              title={isLight ? (lang === 'ar' ? 'التبديل إلى الوضع الليلي' : 'Switch to Night View') : (lang === 'ar' ? 'التبديل إلى الوضع النهاري' : 'Switch to Day View')}
              className={`flex items-center p-0.5 rounded-full font-bold text-[11px] transition-all border shadow-xs ${
                isLight
                  ? 'bg-amber-50 hover:bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
              }`}
            >
              <span
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] transition-all ${
                  isLight
                    ? 'bg-amber-400/30 text-amber-900 font-black shadow-xs'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <Sun className="w-3 h-3 text-amber-500" />
                <span>{lang === 'ar' ? 'نهار' : 'Day'}</span>
              </span>
              <span
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] transition-all ${
                  !isLight
                    ? 'bg-indigo-600 text-white font-black shadow-xs'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Moon className="w-3 h-3 text-indigo-300" />
                <span>{lang === 'ar' ? 'ليل' : 'Night'}</span>
              </span>
            </button>

            {/* Role Toggle: Teacher / Student */}
            <button
              onClick={onRoleToggle}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <UserCheck className={`w-3.5 h-3.5 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{role === 'student' ? t.roleStudent : t.roleTeacher}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-extrabold text-[11px] transition-all border shadow-xs ${
                isLight
                  ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border-indigo-700'
              }`}
            >
              <Globe className={`w-3 h-3 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{t.languageToggle}</span>
            </button>
          </div>
        </div>

        {/* Main Nav Header */}
        <div className="py-2.5 flex items-center justify-between gap-3 sm:gap-6 flex-wrap md:flex-nowrap">
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <img
              src={clipsatLogo}
              alt="ClipSAT"
              className="h-8 sm:h-9 w-auto object-contain shrink-0 drop-shadow-sm"
            />
            <div className="flex items-center gap-2 shrink-0">
              <span className={`text-base sm:text-lg font-black tracking-tight whitespace-nowrap ${
                isLight
                  ? 'bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-700 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm'
              }`}>
                ClipSAT for Egypt
              </span>
              <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md border shrink-0 ${
                isLight
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}>
                MoE 2026
              </span>
            </div>
          </div>

          {/* Curriculum Switcher Pills */}
          <div className={`flex items-center p-1 rounded-xl border shadow-inner shrink-0 ms-auto md:ms-0 ${
            isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-900 dark:bg-slate-950 border-slate-800'
          }`}>
            <button
              onClick={() => onCurriculumChange('thanaweya')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
                curriculum === 'thanaweya'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'ar' ? 'الثانوية العامة' : 'Thanaweya Amma'}</span>
            </button>
            <button
              onClick={() => onCurriculumChange('egbac')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
                curriculum === 'egbac'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'ar' ? 'البكالوريا المصرية' : 'EG-Bac'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav className={`flex items-center gap-1 sm:gap-2 overflow-x-auto py-1.5 border-t no-scrollbar text-xs font-semibold ${
          isLight ? 'border-slate-200' : 'border-slate-800/60'
        }`}>
          {[
            { id: 'overview', label: t.overviewTab, icon: '🗺️' },
            { id: 'theory', label: t.theoryTab, icon: '📖' },
            { id: 'lessonPlan', label: t.lessonPlanTab, icon: '📋' },
            { id: 'worksheet', label: t.worksheetTab, icon: '✏️' },
            { id: 'interactive', label: t.interactiveTab, icon: '🎮' },
            { id: 'testGenerator', label: t.testGeneratorTab, icon: '📝' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? isLight
                      ? 'bg-indigo-600 text-white font-extrabold shadow-sm'
                      : 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                    : isLight
                      ? 'text-slate-600 hover:text-indigo-700 hover:bg-slate-100'
                      : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
