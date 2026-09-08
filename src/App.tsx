import React, { useState, useEffect } from 'react';
import type { CurriculumType, Branch, Lesson, ThemeMode, FontSizeMode } from './types/curriculum';
import type { Language, UserRole } from './i18n/translations';
import { translations } from './i18n/translations';
import { thanaweyaCurriculum } from './data/thanaweyaData';
import { egBacCurriculum } from './data/egBacData';
import { Navbar } from './components/Navbar';
import { CurriculumOverview } from './components/CurriculumOverview';
import { LessonView } from './components/LessonView';
import { TestGenerator } from './components/TestGenerator';
import { Search, ShieldCheck } from 'lucide-react';
import clipsatLogo from './assets/clipsat-logo.png';
import { EgyptFlag } from './components/EgyptFlag';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>('student');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('egbac_theme');
    if (saved === 'dark' || saved === 'light' || saved === 'high-contrast') {
      return saved;
    }
    return 'dark';
  });
  const [fontSize, setFontSize] = useState<FontSizeMode>(() => {
    const saved = localStorage.getItem('egbac_font_size');
    if (saved === 'normal' || saved === 'large' || saved === 'xlarge') {
      return saved;
    }
    return 'normal';
  });
  const [curriculum, setCurriculum] = useState<CurriculumType>('thanaweya');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCurriculumData = curriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;

  // Selected Branch & Lesson state (default to Chapter 1 Lesson 1)
  const [selectedBranch, setSelectedBranch] = useState<Branch>(activeCurriculumData.branches[0]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(activeCurriculumData.branches[0].chapters[0].lessons[0]);

  // Sync html dir attribute (RTL / LTR)
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync html theme classes and localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'high-contrast');
    if (theme === 'light') {
      root.classList.add('light');
    } else if (theme === 'high-contrast') {
      root.classList.add('dark', 'high-contrast');
    } else {
      root.classList.add('dark');
    }
    localStorage.setItem('egbac_theme', theme);
  }, [theme]);

  // Sync html data-font-size attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('egbac_font_size', fontSize);
  }, [fontSize]);

  // Sync selected branch when curriculum switches
  useEffect(() => {
    const data = curriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
    setSelectedBranch(data.branches[0]);
    setSelectedLesson(data.branches[0].chapters[0].lessons[0]);
  }, [curriculum]);

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleRoleToggle = () => {
    setRole((prev) => (prev === 'student' ? 'teacher' : 'student'));
  };

  const handleSelectLesson = (b: Branch, l: Lesson) => {
    setSelectedBranch(b);
    setSelectedLesson(l);
    setActiveTab('theory');
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-300 ${
      theme === 'high-contrast'
        ? 'bg-black text-white selection:bg-yellow-400 selection:text-black'
        : theme === 'light'
        ? 'bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white'
        : 'bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white'
    }`}>
      {/* Header Navigation */}
      <Navbar
        lang={lang}
        onLanguageToggle={handleLanguageToggle}
        role={role}
        onRoleToggle={handleRoleToggle}
        theme={theme}
        onThemeChange={setTheme}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        curriculum={curriculum}
        onCurriculumChange={setCurriculum}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8">
        {/* Quick Search Bar */}
        <div className="relative no-print">
          <div className={`absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none ${
            theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full rounded-2xl py-3 pl-10 rtl:pl-4 rtl:pr-10 text-xs shadow-md transition-all focus:outline-none focus:ring-2 ${
              theme === 'high-contrast'
                ? 'bg-black border-2 border-cyan-400 text-white placeholder-slate-400 focus:border-yellow-400 focus:ring-yellow-400/30'
                : theme === 'light'
                ? 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:ring-indigo-500/40'
                : 'bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/40'
            }`}
          />
        </div>

        {/* Tab View Router */}
        {activeTab === 'overview' && (
          <CurriculumOverview
            lang={lang}
            curriculum={activeCurriculumData}
            onSelectLesson={handleSelectLesson}
            onNavigateTab={setActiveTab}
          />
        )}

        {(activeTab === 'theory' ||
          activeTab === 'solvedExamples' ||
          activeTab === 'exerciseProblems' ||
          activeTab === 'databank' ||
          activeTab === 'lessonPlan' ||
          activeTab === 'worksheet' ||
          activeTab === 'interactive') && (
          <LessonView
            lang={lang}
            theme={theme}
            role={role}
            lesson={selectedLesson}
            branch={selectedBranch}
            activeSubTab={activeTab}
            onSubTabChange={setActiveTab}
          />
        )}

        {activeTab === 'testGenerator' && (
          <TestGenerator lang={lang} currentCurriculum={curriculum} />
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t py-10 text-xs no-print transition-colors ${
        theme === 'high-contrast'
          ? 'border-cyan-500/50 bg-black text-white'
          : theme === 'light'
          ? 'border-slate-200 bg-white text-slate-600'
          : 'border-slate-800 bg-slate-950 text-slate-400'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <img src={clipsatLogo} alt="ClipSAT Logo" className="h-10 sm:h-11 w-auto object-contain drop-shadow-sm" />
              <EgyptFlag className="h-5 sm:h-6 w-auto rounded-[3px] shadow-xs ring-1 ring-black/15 dark:ring-white/20" />
            </div>
            <div className="space-y-1">
              <p className={`font-bold text-sm flex items-center justify-center md:justify-start gap-1.5 ${
                theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-slate-900' : 'text-slate-200'
              }`}>
                <ShieldCheck className={`w-4.5 h-4.5 ${
                  theme === 'high-contrast' ? 'text-cyan-400' : theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'
                }`} />
                <span>{t.copyright}</span>
              </p>
              <p className={`text-xs max-w-2xl ${
                theme === 'high-contrast' ? 'text-slate-200' : theme === 'light' ? 'text-slate-500' : 'text-slate-400'
              }`}>{t.moeReferenceNote}</p>
            </div>
          </div>

          <div className={`flex items-center gap-4 text-xs font-bold ${
            theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'
          }`}>
            <span>ClipSAT for Egypt</span>
            <span>•</span>
            <span>moe.gov.eg</span>
            <span>•</span>
            <span>Thanaweya Amma 2026</span>
            <span>•</span>
            <span>EG-Bac STEM</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
