import React, { useState, useEffect } from 'react';
import type { CurriculumType, Branch, Lesson, ThemeMode, FontSizeMode } from './types/curriculum';
import type { Language, UserRole } from './i18n/translations';
import { translations } from './i18n/translations';
import { thanaweyaCurriculum } from './data/thanaweyaData';
import { egBacCurriculum } from './data/egBacData';
import { getBranchesForSubject, getSubjectForBranch } from './data/subjects';
import { Navbar } from './components/Navbar';
import { CurriculumOverview } from './components/CurriculumOverview';
import { LessonView } from './components/LessonView';
import { TestGenerator } from './components/TestGenerator';
import { SearchModal } from './components/SearchModal';
import { CurriculumEquivalency } from './components/CurriculumEquivalency';
import { FormulaHandbook } from './components/FormulaHandbook';
import { DesmosSuite, type DesmosMode, type DesmosLayout } from './components/DesmosSuite';
import { OfficialBooksModal } from './components/OfficialBooksModal';
import { VisitorCounter } from './components/VisitorCounter';
import { Search, ShieldCheck, Command, Mail } from 'lucide-react';
import clipsatLogo from './assets/clipsat-logo.png';
import { EgyptFlag } from './components/EgyptFlag';
import { VirtualLabsHub } from './components/VirtualLabsHub';

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
  const [selectedSubject, setSelectedSubject] = useState<string>(() => {
    const saved = localStorage.getItem('egbac_selected_subject');
    return saved || 'all';
  });
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isFormulaHandbookOpen, setIsFormulaHandbookOpen] = useState<boolean>(false);
  const [isDesmosOpen, setIsDesmosOpen] = useState<boolean>(false);
  const [isOfficialBooksOpen, setIsOfficialBooksOpen] = useState<boolean>(false);
  const [targetOfficialBookId, setTargetOfficialBookId] = useState<string | undefined>(undefined);
  const [desmosMode, setDesmosMode] = useState<DesmosMode>('2d');
  const [desmosLayout, setDesmosLayout] = useState<DesmosLayout>('floating');
  const [desmosPresetId, setDesmosPresetId] = useState<string | undefined>(undefined);

  const handleOpenOfficialBooks = (bookId?: string) => {
    setTargetOfficialBookId(bookId);
    setIsOfficialBooksOpen(true);
  };

  const activeCurriculumData = curriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;

  // Selected Branch & Lesson state (default to Chapter 1 Lesson 1 or first branch of selected subject)
  const [selectedBranch, setSelectedBranch] = useState<Branch>(() => {
    const initialSub = localStorage.getItem('egbac_selected_subject') || 'all';
    if (initialSub !== 'all') {
      const branches = getBranchesForSubject(activeCurriculumData, initialSub);
      if (branches.length > 0) return branches[0];
    }
    return activeCurriculumData.branches[0];
  });
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(() => {
    const initialSub = localStorage.getItem('egbac_selected_subject') || 'all';
    if (initialSub !== 'all') {
      const branches = getBranchesForSubject(activeCurriculumData, initialSub);
      if (branches.length > 0 && branches[0].chapters[0]?.lessons[0]) {
        return branches[0].chapters[0].lessons[0];
      }
    }
    return activeCurriculumData.branches[0].chapters[0].lessons[0];
  });

  const handleSubjectChange = (subjectId: string) => {
    setSelectedSubject(subjectId);
    localStorage.setItem('egbac_selected_subject', subjectId);
    if (subjectId !== 'all') {
      const branches = getBranchesForSubject(activeCurriculumData, subjectId);
      if (branches.length > 0) {
        setSelectedBranch(branches[0]);
        if (branches[0].chapters.length > 0 && branches[0].chapters[0].lessons.length > 0) {
          setSelectedLesson(branches[0].chapters[0].lessons[0]);
        }
      }
    }
  };

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
    if (selectedSubject !== 'all') {
      const branches = getBranchesForSubject(data, selectedSubject);
      if (branches.length > 0) {
        setSelectedBranch(branches[0]);
        if (branches[0].chapters.length > 0 && branches[0].chapters[0].lessons.length > 0) {
          setSelectedLesson(branches[0].chapters[0].lessons[0]);
        }
        return;
      }
    }
    setSelectedBranch(data.branches[0]);
    setSelectedLesson(data.branches[0].chapters[0].lessons[0]);
  }, [curriculum, selectedSubject]);

  // Global keyboard shortcuts: Cmd+K (Search), Cmd+J (Formula Handbook), Cmd+D (Desmos Suite)
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
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setIsDesmosOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsOfficialBooksOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Event listener for opening Desmos with mode/preset from anywhere in the app
  useEffect(() => {
    const handleOpenDesmos = (e: Event) => {
      const customEvent = e as CustomEvent<{ mode?: DesmosMode; presetId?: string; layout?: DesmosLayout }>;
      if (customEvent.detail?.mode) setDesmosMode(customEvent.detail.mode);
      if (customEvent.detail?.presetId) setDesmosPresetId(customEvent.detail.presetId);
      if (customEvent.detail?.layout) setDesmosLayout(customEvent.detail.layout);
      setIsDesmosOpen(true);
    };
    window.addEventListener('open-desmos', handleOpenDesmos);
    return () => window.removeEventListener('open-desmos', handleOpenDesmos);
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
    const sub = getSubjectForBranch(b.id, curriculum);
    if (sub && selectedSubject !== 'all' && selectedSubject !== sub.id) {
      setSelectedSubject(sub.id);
      localStorage.setItem('egbac_selected_subject', sub.id);
    }
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
        onOpenDesmos={() => setIsDesmosOpen((prev) => !prev)}
        onOpenOfficialBooks={() => handleOpenOfficialBooks()}
        selectedSubject={selectedSubject}
        onSubjectChange={handleSubjectChange}
        curriculumData={activeCurriculumData}
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
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <Search className={`w-4 h-4 shrink-0 transition-colors ${
                theme === 'high-contrast' ? 'text-yellow-400' : 'text-indigo-500'
              }`} />
              <span className="font-medium text-xs sm:text-sm truncate">
                <span className="inline sm:hidden">
                  {lang === 'ar'
                    ? 'البحث الشامل في ٦,٤٦٦ مسألة...'
                    : 'Universal Search across 6,466 problems...'}
                </span>
                <span className="hidden sm:inline">
                  {lang === 'ar'
                    ? 'البحث الشامل في ٦,٤٦٦ مسألة وقانون وفصل... (اضغط للبحث)'
                    : 'Universal Search across 6,466 problems, theorems & lessons... (Click to search)'}
                </span>
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

        {/* Global Desmos Math Suite Widget / Modal */}
        <DesmosSuite
          isOpen={isDesmosOpen}
          onClose={() => setIsDesmosOpen(false)}
          lang={lang}
          theme={theme}
          initialMode={desmosMode}
          initialPresetId={desmosPresetId}
          layout={desmosLayout}
          onLayoutChange={setDesmosLayout}
        />

        {/* Global Official Ministry PDF Books Modal */}
        <OfficialBooksModal
          isOpen={isOfficialBooksOpen}
          onClose={() => {
            setIsOfficialBooksOpen(false);
            setTargetOfficialBookId(undefined);
          }}
          lang={lang}
          theme={theme}
          initialBookId={targetOfficialBookId}
        />

        {/* Tab View Router */}
        {activeTab === 'overview' && (
          <CurriculumOverview
            lang={lang}
            theme={theme}
            curriculum={activeCurriculumData}
            onSelectLesson={handleSelectLesson}
            onNavigateTab={setActiveTab}
            onOpenOfficialBooks={() => handleOpenOfficialBooks()}
            selectedSubject={selectedSubject}
            onSelectSubject={handleSubjectChange}
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
          activeTab === 'worksheet') && (
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
            onOpenDesmos={(targetMode = '2d') => {
              setDesmosMode(targetMode);
              setIsDesmosOpen(true);
            }}
            onOpenOfficialBooks={handleOpenOfficialBooks}
          />
        )}

        {activeTab === 'interactive' && (
          <VirtualLabsHub
            lang={lang}
            theme={theme}
            currentCurriculum={activeCurriculumData}
            selectedSubject={selectedSubject}
            onOpenDesmos={(targetMode = '2d') => {
              setDesmosMode(targetMode);
              setIsDesmosOpen(true);
            }}
          />
        )}

        {activeTab === 'testGenerator' && (
          <TestGenerator
            lang={lang}
            currentCurriculum={curriculum}
            onOpenFormulaHandbook={() => setIsFormulaHandbookOpen(true)}
            onOpenDesmos={(targetMode = '2d') => {
              setDesmosMode(targetMode);
              setIsDesmosOpen(true);
            }}
            initialSubject={selectedSubject}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Visitor Counter - strictly displayed at the footer of the Home Page only */}
          {activeTab === 'overview' && (
            <div className="animate-in fade-in duration-300">
              <VisitorCounter lang={lang} theme={theme} />
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
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

            <div className={`flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 text-xs font-bold ${
              theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'
            }`}>
              <span>ClipSAT for Egypt</span>
              <span className="opacity-40">•</span>
              <span>moe.gov.eg</span>
              <span className="opacity-40">•</span>
              <span>Thanaweya Amma 2026</span>
              <span className="opacity-40">•</span>
              <span>EG-Bac STEM</span>
            </div>
          </div>

          {/* Contact for Error Reports and Suggestions */}
          <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
            theme === 'high-contrast'
              ? 'border-cyan-500/30 text-white'
              : theme === 'light'
              ? 'border-slate-200 text-slate-600'
              : 'border-slate-800/80 text-slate-400'
          }`}>
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className={`inline-flex items-center gap-1.5 font-medium ${
                theme === 'high-contrast' ? 'text-cyan-300' : theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                <Mail className={`w-3.5 h-3.5 shrink-0 ${
                  theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-indigo-600' : 'text-emerald-400'
                }`} />
                <span>{t.footerContactPrompt}</span>
              </span>
              <a
                href="mailto:admin@clipsat.org?subject=ClipSAT%20Egypt%20-%20Error%20Report%20%2F%20Suggestion"
                className={`inline-flex items-center gap-1.5 font-mono font-bold px-2.5 py-1 rounded-md border transition-all hover:scale-[1.02] shadow-xs ${
                  theme === 'high-contrast'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 underline'
                    : theme === 'light'
                    ? 'border-indigo-200 text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100 hover:border-indigo-300'
                    : 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 hover:border-emerald-400/50'
                }`}
                title="admin@clipsat.org"
              >
                <span>admin@clipsat.org</span>
                <span className="text-[10px] opacity-75">↗</span>
              </a>
            </div>

            <div className="text-[11px] opacity-75">
              {lang === 'ar' ? 'الاستجابة السريعة للملاحظات والتدقيق الأكاديمي المستمر' : 'Fast academic review & continuous quality updates'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
