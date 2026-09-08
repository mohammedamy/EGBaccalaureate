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
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 shadow-2xl no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement / Ministry Reference Bar */}
        <div className="py-1.5 border-b border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-emerald-400">{t.moeBadge}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">{t.officialMoeRef}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Day / Night Theme Toggle */}
            <button
              onClick={onThemeToggle}
              title={theme === 'dark' ? t.themeDay : t.themeNight}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full font-bold text-[11px] transition-all border shadow-sm ${
                theme === 'dark'
                  ? 'bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border-amber-500/40'
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border-indigo-300'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span className="hidden xs:inline sm:inline">{theme === 'dark' ? t.themeDay : t.themeNight}</span>
            </button>

            {/* Role Toggle */}
            <button
              onClick={onRoleToggle}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-indigo-900 dark:text-indigo-300 font-bold transition-all border border-slate-300 dark:border-slate-700 shadow-sm"
            >
              <UserCheck className="w-3 h-3 text-indigo-700 dark:text-indigo-400" />
              <span>{role === 'student' ? t.roleStudent : t.roleTeacher}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 hover:bg-indigo-200 dark:hover:bg-indigo-900 text-indigo-950 dark:text-indigo-200 font-extrabold transition-all border border-indigo-300 dark:border-indigo-700 shadow-sm"
            >
              <Globe className="w-3 h-3 text-indigo-700 dark:text-indigo-400" />
              <span>{t.languageToggle}</span>
            </button>
          </div>
        </div>

        {/* Main Nav Header */}
        <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative group shrink-0">
              <img
                src="/clipsat-logo.png"
                alt="ClipSAT Logo"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-slate-100 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-sm font-black">
                  {t.siteTitle}
                </span>
                <span className="bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-500/40 font-black tracking-wide shrink-0">
                  MoE 2026
                </span>
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate sm:whitespace-normal">{t.siteSubtitle}</p>
            </div>
          </div>

          {/* Curriculum Switcher Pills */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-300 dark:border-slate-800 shadow-inner w-full sm:w-auto justify-center shrink-0">
            <button
              onClick={() => onCurriculumChange('thanaweya')}
              className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                curriculum === 'thanaweya'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{t.thanaweyaTitle}</span>
            </button>

            <button
              onClick={() => onCurriculumChange('egbac')}
              className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                curriculum === 'egbac'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.egbacTitle}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2 border-t border-slate-200 dark:border-slate-800/60 no-scrollbar text-xs font-semibold -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => onTabChange('overview')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'overview' ? 'bg-indigo-100 dark:bg-indigo-600/30 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 font-extrabold' : 'text-slate-700 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-slate-200'
            }`}
          >
            🗺️ {t.overviewTab}
          </button>
          <button
            onClick={() => onTabChange('theory')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'theory' ? 'bg-indigo-100 dark:bg-indigo-600/30 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 font-extrabold' : 'text-slate-700 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-slate-200'
            }`}
          >
            📖 {t.theoryTab}
          </button>
          <button
            onClick={() => onTabChange('lessonPlan')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'lessonPlan' ? 'bg-indigo-100 dark:bg-indigo-600/30 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 font-extrabold' : 'text-slate-700 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-slate-200'
            }`}
          >
            📋 {t.lessonPlanTab}
          </button>
          <button
            onClick={() => onTabChange('worksheet')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'worksheet' ? 'bg-indigo-100 dark:bg-indigo-600/30 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 font-extrabold' : 'text-slate-700 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-slate-200'
            }`}
          >
            ✏️ {t.worksheetTab}
          </button>
          <button
            onClick={() => onTabChange('interactive')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'interactive' ? 'bg-indigo-100 dark:bg-indigo-600/30 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 font-extrabold' : 'text-slate-700 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-slate-200'
            }`}
          >
            🎮 {t.interactiveTab}
          </button>
          <button
            onClick={() => onTabChange('testGenerator')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'testGenerator' ? 'bg-indigo-100 dark:bg-indigo-600/30 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 font-extrabold' : 'text-slate-700 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-slate-200'
            }`}
          >
            📝 {t.testGeneratorTab}
          </button>
        </nav>
      </div>
    </header>
  );
};
