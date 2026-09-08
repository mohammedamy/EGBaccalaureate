import React from 'react';
import type { CurriculumType } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { Globe, UserCheck, Award, BookOpen, Sun, Moon } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 dark:bg-slate-950/95 border-b border-slate-800 backdrop-blur-md shadow-xl no-print">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Announcement Bar */}
        <div className="py-1.5 border-b border-slate-800/60 flex items-center justify-between gap-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
            <span className="font-semibold text-emerald-400 shrink-0">{t.moeBadge}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300 truncate">{t.officialMoeRef}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Day / Night Theme Toggle */}
            <button
              onClick={onThemeToggle}
              title={theme === 'dark' ? t.themeDay : t.themeNight}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold text-[11px] transition-all border shadow-sm ${
                theme === 'dark'
                  ? 'bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border-amber-500/40'
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border-indigo-300'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span className="hidden sm:inline">{theme === 'dark' ? t.themeDay : t.themeNight}</span>
            </button>

            {/* Role Toggle: Teacher / Student */}
            <button
              onClick={onRoleToggle}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold transition-all border border-slate-700 shadow-sm"
            >
              <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>{role === 'student' ? t.roleStudent : t.roleTeacher}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 font-extrabold transition-all border border-indigo-700 shadow-sm"
            >
              <Globe className="w-3 h-3 text-indigo-400" />
              <span>{t.languageToggle}</span>
            </button>
          </div>
        </div>

        {/* Main Nav Header */}
        <div className="py-2.5 flex items-center justify-between gap-3 sm:gap-6 flex-wrap md:flex-nowrap">
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <img
              src="./clipsat-logo.png"
              alt="ClipSAT"
              className="h-8 sm:h-9 w-auto object-contain shrink-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-base sm:text-lg font-black tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm whitespace-nowrap">
                ClipSAT for Egypt
              </span>
              <span className="bg-amber-500/20 text-amber-300 text-[10px] font-black px-1.5 py-0.5 rounded-md border border-amber-500/40 shrink-0">
                MoE 2026
              </span>
            </div>
          </div>

          {/* Curriculum Switcher Pills */}
          <div className="flex items-center bg-slate-900 dark:bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner shrink-0 ms-auto md:ms-0">
            <button
              onClick={() => onCurriculumChange('thanaweya')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
                curriculum === 'thanaweya'
                  ? 'bg-indigo-600 text-white shadow-md'
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
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'ar' ? 'البكالوريا المصرية' : 'EG-Bac'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1.5 border-t border-slate-800/60 no-scrollbar text-xs font-semibold">
          <button
            onClick={() => onTabChange('overview')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
              activeTab === 'overview'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🗺️ {t.overviewTab}
          </button>
          <button
            onClick={() => onTabChange('theory')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
              activeTab === 'theory'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📖 {t.theoryTab}
          </button>
          <button
            onClick={() => onTabChange('lessonPlan')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
              activeTab === 'lessonPlan'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📋 {t.lessonPlanTab}
          </button>
          <button
            onClick={() => onTabChange('worksheet')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
              activeTab === 'worksheet'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ✏️ {t.worksheetTab}
          </button>
          <button
            onClick={() => onTabChange('interactive')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
              activeTab === 'interactive'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🎮 {t.interactiveTab}
          </button>
          <button
            onClick={() => onTabChange('testGenerator')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
              activeTab === 'testGenerator'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📝 {t.testGeneratorTab}
          </button>
        </nav>
      </div>
    </header>
  );
};
