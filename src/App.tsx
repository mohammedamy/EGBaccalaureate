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
import { SearchModal } from './components/SearchModal';
import { CurriculumEquivalency } from './components/CurriculumEquivalency';
import { FormulaHandbook } from './components/FormulaHandbook';
import { Search, ShieldCheck, Command } from 'lucide-react';
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
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isFormulaHandbookOpen, setIsFormulaHandbookOpen] = useState<boolean>(false);

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

  // Global keyboard shortcuts: Cmd+K (Search) & Cmd+J (Formula Handbook)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setIsFormulaHandbookOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleRoleToggle = () => {
    setRole((prev) => (prev === 'student' ? 'teacher' : 'student'));
  };

  const handleSelectLesson = (b: Branch, l: Lesson, tab?: string) => {
    setSelectedBranch(b);
    setSelectedLesson(l);
    if (tab) {
      setActiveTab(tab);
    }
  };

  const handleSearchNavigate = (
    curType: CurriculumType,
    b: Branch,
    l: Lesson,
    tab: string
  ) => {
    if (curriculum !== curType) {
      setCurriculum(curType);
    }
    setSelectedBranch(b);
    setSelectedLesson(l);
    setActiveTab(tab);
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
        onOpenFormulaHandbook={() => setIsFormulaHandbookOpen(true)}
      />

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8">
        {/* Quick Search Bar (Opens Universal Search Modal) */}
        <div className="relative no-print">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className={`w-full rounded-2xl py-3 px-4 flex items-center justify-between text-xs shadow-md transition-all text-left rtl:text-right cursor-pointer group border ${
              theme === 'high-contrast'
                ? 'bg-black border-2 border-cyan-400 text-white hover:border-yellow-400'
                : theme === 'light'
                ? 'bg-white border-slate-300 text-slate-500 hover:border-indigo-400 hover:shadow-lg'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <Search className={`w-4 h-4 transition-colors ${
                theme === 'high-contrast' ? 'text-yellow-400' : 'text-indigo-500'
              }`} />
              <span className="font-medium text-xs sm:text-sm">
                {lang === 'ar'
                  ? 'البحث الشامل في ٤,٧٢٥ مسألة وقانون وفصل... (اضغط للبحث)'
                  : 'Universal Search across 4,725 problems, theorems & lessons... (Click to search)'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <kbd className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono rounded-md border font-semibold ${
                theme === 'high-contrast'
                  ? 'bg-yellow-400 text-black border-yellow-300'
                  : theme === 'light'
                  ? 'bg-slate-100 text-slate-600 border-slate-300'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                <Command className="w-3 h-3" />
                <span>K</span>
              </kbd>
            </div>
          </button>
        </div>

        {/* Global Instant Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          lang={lang}
          theme={theme}
          onNavigate={handleSearchNavigate}
        />

        {/* Global Formula Sheet Handbook Modal */}
        <FormulaHandbook
          isOpen={isFormulaHandbookOpen}
          onClose={() => setIsFormulaHandbookOpen(false)}
          lang={lang}
          theme={theme}
          currentCurriculum={curriculum}
          onNavigateToLesson={(curType, b, l) => {
            if (curriculum !== curType) {
              setCurriculum(curType);
            }
            setSelectedBranch(b);
            setSelectedLesson(l);
            setActiveTab('theory');
          }}
        />

        {/* Tab View Router */}
        {activeTab === 'overview' && (
          <CurriculumOverview
            lang={lang}
            curriculum={activeCurriculumData}
            onSelectLesson={handleSelectLesson}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'equivalency' && (
          <CurriculumEquivalency
            lang={lang}
            theme={theme}
            onNavigateTrack={(track, branchId) => {
              if (curriculum !== track) {
                setCurriculum(track);
              }
              const data = track === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
              let targetBranch = data.branches[0];
              if (branchId) {
                const found = data.branches.find((b) => b.id === branchId);
                if (found) targetBranch = found;
              }
              setSelectedBranch(targetBranch);
              setSelectedLesson(targetBranch.chapters[0].lessons[0]);
              setActiveTab('overview');
            }}
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
            curriculum={activeCurriculumData}
            activeSubTab={activeTab}
            onSubTabChange={setActiveTab}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {activeTab === 'testGenerator' && (
          <TestGenerator
            lang={lang}
            currentCurriculum={curriculum}
            onOpenFormulaHandbook={() => setIsFormulaHandbookOpen(true)}
          />
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
