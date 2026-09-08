import React, { useState, useEffect } from 'react';
import type { CurriculumType, Branch, Lesson } from './types/curriculum';
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

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>('student');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [curriculum, setCurriculum] = useState<CurriculumType>('thanaweya');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCurriculumData = curriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;

  // Selected Branch & Lesson state (default to Chapter 1 Lesson 1)
  const [selectedBranch, setSelectedBranch] = useState<Branch>(activeCurriculumData.branches[0]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(activeCurriculumData.branches[0].chapters[0].lessons[0]);

  // Sync html dir attribute (RTL / LTR) and theme class
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

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

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectLesson = (b: Branch, l: Lesson) => {
    setSelectedBranch(b);
    setSelectedLesson(l);
    setActiveTab('theory');
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white' : 'bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white'}`}>
      {/* Header Navigation */}
      <Navbar
        lang={lang}
        onLanguageToggle={handleLanguageToggle}
        role={role}
        onRoleToggle={handleRoleToggle}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        curriculum={curriculum}
        onCurriculumChange={setCurriculum}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8">
        {/* Quick Search Bar */}
        <div className="relative no-print">
          <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl py-3 pl-10 rtl:pl-4 rtl:pr-10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 shadow-xl transition-all"
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

        {(activeTab === 'theory' || activeTab === 'lessonPlan' || activeTab === 'worksheet' || activeTab === 'interactive') && (
          <LessonView
            lang={lang}
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
      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-xs text-slate-400 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
          <div className="flex items-center gap-4">
            <img src={clipsatLogo} alt="ClipSAT Logo" className="h-11 w-auto object-contain drop-shadow-md" />
            <div className="space-y-1">
              <p className="font-bold text-slate-200 text-sm flex items-center justify-center md:justify-start gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
                <span>{t.copyright}</span>
              </p>
              <p className="text-xs text-slate-400 max-w-2xl">{t.moeReferenceNote}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-cyan-400">
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
