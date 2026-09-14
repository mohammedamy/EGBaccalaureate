import React, { useState, useRef, useEffect } from 'react';
import type { Curriculum, CurriculumType, ThemeMode, FontSizeMode } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { Globe, UserCheck, BookOpen, Sun, Moon, Zap, Type, Calculator, Download, ExternalLink, Edit3, Compass, ChevronDown, Check } from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';
import { EgyptFlag } from './EgyptFlag';
import { SubjectSelector } from './SubjectSelector';
import { CurriculumSelector } from './CurriculumSelector';

interface Props {
  lang: Language;
  onLanguageToggle: () => void;
  role: UserRole;
  onRoleToggle: () => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  fontSize: FontSizeMode;
  onFontSizeChange: (size: FontSizeMode) => void;
  curriculum: CurriculumType;
  onCurriculumChange: (curr: CurriculumType) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenFormulaHandbook?: () => void;
  onOpenDesmos?: () => void;
  onOpenOfficialBooks?: () => void;
  onOpenMathScratchpad?: () => void;
  onOpenTutorial?: () => void;
  selectedSubject?: string;
  onSubjectChange?: (subjectId: string) => void;
  curriculumData?: Curriculum;
}

export const Navbar: React.FC<Props> = ({
  lang,
  onLanguageToggle,
  role,
  onRoleToggle,
  theme,
  onThemeChange,
  fontSize,
  onFontSizeChange,
  curriculum,
  onCurriculumChange,
  activeTab,
  onTabChange,
  onOpenFormulaHandbook,
  onOpenDesmos,
  onOpenOfficialBooks,
  onOpenMathScratchpad,
  onOpenTutorial,
  selectedSubject,
  onSubjectChange,
  curriculumData,
}) => {
  const t = translations[lang];
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

  // Dropdown menus state
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isFontOpen, setIsFontOpen] = useState(false);
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const fontRef = useRef<HTMLDivElement>(null);
  const tabMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (themeRef.current && !themeRef.current.contains(target)) {
        setIsThemeOpen(false);
      }
      if (fontRef.current && !fontRef.current.contains(target)) {
        setIsFontOpen(false);
      }
      if (tabMenuRef.current && !tabMenuRef.current.contains(target)) {
        setIsTabMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsThemeOpen(false);
        setIsFontOpen(false);
        setIsTabMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navTabs = [
    { id: 'overview', label: t.overviewTab, icon: '🗺️', descAr: 'خريطة المنهاج والوحدات', descEn: 'Curriculum map & units' },
    { id: 'equivalency', label: t.equivalencyTab, icon: '⚖️', descAr: 'المعادلة بين الثانوية والبكالوريا', descEn: 'Track equivalency & alignment' },
    { id: 'theory', label: t.theoryTab, icon: '📖', descAr: 'الشرح والملخصات والقوانين', descEn: 'Theory, notes & formulas' },
    { id: 'solvedExamples', label: t.solvedExamplesTab, icon: '💡', descAr: 'المسائل المحلولة نموذجياً', descEn: 'Step-by-step solved models' },
    { id: 'exerciseProblems', label: t.exerciseProblemsTab, icon: '📚', descAr: 'تمارين وتطبيقات تدريبية', descEn: 'Exercise practice sets' },
    { id: 'databank', label: t.databankTab, icon: '🗄️', descAr: 'بنك ١٠,٩١٠ مسألة مصنفة', descEn: '10,910 Classified question bank' },
    { id: 'worksheet', label: t.worksheetTab, icon: '✏️', descAr: 'أوراق عمل قابلة للطباعة', descEn: 'Printable student worksheets' },
    { id: 'interactive', label: t.interactiveTab, icon: '🔬', descAr: 'مختبرات محاكاة 2D/3D', descEn: 'Interactive simulations & labs' },
    { id: 'lessonPlan', label: t.lessonPlanTab, icon: '📋', descAr: 'دليل المعلم والتحضير الصفي', descEn: 'Teacher lesson plans & guides' },
    { id: 'testGenerator', label: t.testGeneratorTab, icon: '📝', descAr: 'توليد امتحانات إلكترونية وPDF', descEn: 'Custom mock exam generator' },
  ];

  const activeTabObj = navTabs.find((tab) => tab.id === activeTab) || navTabs[0];

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 border-b backdrop-blur-md no-print ${
      isHighContrast
        ? 'bg-black text-white border-cyan-400/80 shadow-2xl'
        : isLight
        ? 'bg-white/95 text-slate-800 border-slate-200 shadow-sm'
        : 'bg-slate-950/95 text-slate-100 border-slate-800 shadow-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Announcement Bar */}
        <div className={`py-1.5 border-b flex items-center justify-between gap-2 text-[11px] transition-colors ${
          isHighContrast
            ? 'border-cyan-500/40 text-slate-200'
            : isLight
            ? 'border-slate-200 text-slate-500'
            : 'border-slate-800/60 text-slate-400'
        }`}>
          <div className="flex items-center gap-2 truncate">
            <span className={`inline-block w-2 h-2 rounded-full shrink-0 animate-pulse ${
              isHighContrast ? 'bg-cyan-400' : 'bg-emerald-500'
            }`}></span>
            <span className={`font-semibold shrink-0 ${
              isHighContrast ? 'text-cyan-300 font-black' : isLight ? 'text-emerald-700' : 'text-emerald-400'
            }`}>{t.moeBadge}</span>
            <span className={`hidden sm:inline ${
              isHighContrast ? 'text-cyan-600' : isLight ? 'text-slate-300' : 'text-slate-600'
            }`}>|</span>
            <span className={`hidden sm:inline truncate max-w-[140px] md:max-w-[200px] lg:max-w-none ${
              isHighContrast ? 'text-slate-100' : isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>{t.officialMoeRef}</span>
            <span className={`hidden 2xl:inline ${
              isHighContrast ? 'text-cyan-600' : isLight ? 'text-slate-300' : 'text-slate-600'
            }`}>|</span>
            <a
              href="https://clipsat.org"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden 2xl:inline-flex items-center gap-1 font-bold text-[10px] transition-all hover:underline ${
                isHighContrast ? 'text-cyan-300' : isLight ? 'text-blue-700 hover:text-blue-900' : 'text-cyan-400 hover:text-cyan-300'
              }`}
              title={t.sisterSite}
            >
              <span>{t.sisterSiteBadge}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Mobile-Friendly Utility Row: Dropdown Menus for Font Size & Theme */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 justify-end">
            {/* Font Size Dropdown Menu */}
            <div ref={fontRef} className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => {
                  setIsFontOpen((prev) => !prev);
                  setIsThemeOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isFontOpen}
                className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
                  isHighContrast
                    ? 'bg-black border-cyan-400 text-cyan-300 hover:bg-zinc-950'
                    : isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200/70'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
                title={t.fontSize}
              >
                <Type className="w-3 h-3 text-indigo-400 shrink-0" />
                <span className="font-extrabold">{fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}</span>
                <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${isFontOpen ? 'rotate-180' : ''}`} />
              </button>

              {isFontOpen && (
                <div
                  role="menu"
                  className={`absolute ${isArabic ? 'left-0' : 'right-0'} mt-1.5 w-44 rounded-xl p-1.5 shadow-xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100 ${
                    isHighContrast
                      ? 'bg-black border-2 border-cyan-400 text-white'
                      : isLight
                      ? 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-200/60'
                      : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-black/80'
                  }`}
                >
                  <p className="px-2 py-1 text-[10px] font-bold text-slate-400 border-b border-slate-200 dark:border-slate-800 mb-1">
                    {t.fontSize}
                  </p>
                  {[
                    { id: 'normal', label: t.fontSizeNormal, symbol: 'A', sub: isArabic ? '١٠٠٪' : '100%' },
                    { id: 'large', label: t.fontSizeLarge, symbol: 'A+', sub: isArabic ? '١١٥٪' : '115%' },
                    { id: 'xlarge', label: t.fontSizeXLarge, symbol: 'A++', sub: isArabic ? '١٣٠٪' : '130%' },
                  ].map((opt) => {
                    const isSelected = fontSize === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          onFontSizeChange(opt.id as FontSizeMode);
                          setIsFontOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? isHighContrast
                              ? 'bg-cyan-950 text-cyan-300 font-black'
                              : isLight
                              ? 'bg-indigo-50 text-indigo-900 font-bold'
                              : 'bg-indigo-950/70 text-indigo-300 font-bold'
                            : isLight
                            ? 'hover:bg-slate-100 text-slate-700'
                            : 'hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-black text-xs text-indigo-400 w-5">{opt.symbol}</span>
                          <span>{opt.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-slate-400">{opt.sub}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-500" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Color Theme & Contrast Dropdown Menu */}
            <div ref={themeRef} className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => {
                  setIsThemeOpen((prev) => !prev);
                  setIsFontOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isThemeOpen}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-full border text-[11px] font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
                  isHighContrast
                    ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-zinc-950'
                    : isLight
                    ? 'bg-amber-50/80 border-amber-200 text-amber-950 hover:bg-amber-100/70'
                    : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                }`}
                title={t.themeDay}
              >
                {theme === 'light' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                ) : theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                ) : (
                  <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                )}
                <span className="hidden sm:inline">
                  {theme === 'light'
                    ? isArabic ? 'نهار' : 'Day'
                    : theme === 'dark'
                    ? isArabic ? 'ليل' : 'Night'
                    : isArabic ? 'تباين' : 'Contrast'}
                </span>
                <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`} />
              </button>

              {isThemeOpen && (
                <div
                  role="menu"
                  className={`absolute ${isArabic ? 'left-0' : 'right-0'} mt-1.5 w-44 rounded-xl p-1.5 shadow-xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100 ${
                    isHighContrast
                      ? 'bg-black border-2 border-yellow-400 text-white'
                      : isLight
                      ? 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-200/60'
                      : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-black/80'
                  }`}
                >
                  <p className="px-2 py-1 text-[10px] font-bold text-slate-400 border-b border-slate-200 dark:border-slate-800 mb-1">
                    {isArabic ? 'مظهر الشاشة والتباين' : 'Theme & Contrast'}
                  </p>
                  {[
                    { id: 'light', label: t.themeDay, icon: Sun, color: 'text-amber-500' },
                    { id: 'dark', label: t.themeNight, icon: Moon, color: 'text-indigo-400' },
                    { id: 'high-contrast', label: t.themeHighContrast, icon: Zap, color: 'text-yellow-400' },
                  ].map((opt) => {
                    const isSelected = theme === opt.id;
                    const OptIcon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          onThemeChange(opt.id as ThemeMode);
                          setIsThemeOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? isHighContrast
                              ? 'bg-yellow-950 text-yellow-300 font-black'
                              : isLight
                              ? 'bg-amber-50 text-amber-950 font-bold'
                              : 'bg-indigo-950/70 text-indigo-300 font-bold'
                            : isLight
                            ? 'hover:bg-slate-100 text-slate-700'
                            : 'hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <OptIcon className={`w-3.5 h-3.5 ${opt.color}`} />
                          <span>{opt.label}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-indigo-500" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Desktop Quick Tools */}
            <div className="hidden md:flex items-center gap-1 xl:gap-1.5">
              {/* Formula Handbook Trigger */}
              {onOpenFormulaHandbook && (
                <button
                  onClick={onOpenFormulaHandbook}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-yellow-300 border-yellow-400 hover:bg-yellow-950/40'
                      : isLight
                      ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border-emerald-700/60'
                  }`}
                  title={isArabic ? 'دستور القوانين والمعادلات الرسمية (Ctrl+J / ⌘J)' : 'Formula Sheet Handbook (Ctrl+J / ⌘J)'}
                >
                  <BookOpen className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'دستور القوانين' : 'Formula Sheet'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘J</kbd>
                </button>
              )}

              {/* Math Scratchpad Trigger */}
              {onOpenMathScratchpad && (
                <button
                  onClick={onOpenMathScratchpad}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-purple-300 border-purple-400 hover:bg-purple-950/40'
                      : isLight
                      ? 'bg-purple-50 hover:bg-purple-100 text-purple-800 border-purple-300'
                      : 'bg-purple-950/70 hover:bg-purple-900 text-purple-300 border-purple-700/60'
                  }`}
                  title={isArabic ? 'المسودة الرياضية التفاعلية (KaTeX)' : 'Interactive Math Scratchpad'}
                >
                  <Edit3 className="w-3 h-3 text-purple-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'المسودة الرياضية' : 'Scratchpad'}</span>
                </button>
              )}

              {/* Official Ministry Books Trigger */}
              {onOpenOfficialBooks && (
                <button
                  onClick={onOpenOfficialBooks}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-amber-300 border-amber-400 hover:bg-amber-950/40'
                      : isLight
                      ? 'bg-teal-50 hover:bg-teal-100 text-teal-800 border-teal-300'
                      : 'bg-teal-950/70 hover:bg-teal-900 text-teal-300 border-teal-700/60'
                  }`}
                  title={isArabic ? 'كتب الوزارة والأدلة الرسمية PDF (Ctrl+B / ⌘B)' : 'Official Ministry PDF Books (Ctrl+B / ⌘B)'}
                >
                  <Download className="w-3 h-3 text-teal-400 shrink-0" />
                  <span className="hidden xl:inline">{t.officialBooksNavBtn}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘B</kbd>
                </button>
              )}

              {/* Desmos 2D/3D Calculator Trigger */}
              {onOpenDesmos && (
                <button
                  onClick={onOpenDesmos}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                      : isLight
                      ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border-indigo-300'
                      : 'bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 border-cyan-700/60'
                  }`}
                  title={isArabic ? 'حاسبة ديسموس البيانية 2D/3D (Ctrl+D / ⌘D)' : 'Desmos 2D/3D Calculator (Ctrl+D / ⌘D)'}
                >
                  <Calculator className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'حاسبة ديسموس' : 'Desmos 2D/3D'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘D</kbd>
                </button>
              )}

              {/* Site Tutorial / How To Trigger */}
              {onOpenTutorial && (
                <button
                  onClick={onOpenTutorial}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-black text-[11px] transition-all border shadow-xs cursor-pointer active:scale-95 ${
                    isHighContrast
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-400 hover:bg-cyan-900'
                      : isLight
                      ? 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40'
                  }`}
                  title={isArabic ? 'دليل استخدام المنصة وجولة تعريفية سريعة' : 'How to navigate the platform (Quick Tour)'}
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="hidden lg:inline">{t.howToShort}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
                </button>
              )}

              {/* Role Toggle: Teacher / Student */}
              <button
                onClick={onRoleToggle}
                className={`flex items-center gap-1 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs ${
                  isHighContrast
                    ? 'bg-black text-white border-white/60 hover:border-white'
                    : isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                }`}
                title={role === 'student' ? t.roleStudent : t.roleTeacher}
              >
                <UserCheck className={`w-3.5 h-3.5 shrink-0 ${isHighContrast ? 'text-yellow-400' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
                <span className="hidden lg:inline">{role === 'student' ? t.roleStudent : t.roleTeacher}</span>
              </button>
            </div>

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full font-extrabold text-[11px] transition-all border shadow-xs active:scale-95 shrink-0 ${
                isHighContrast
                  ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                  : isLight
                  ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border-indigo-700'
              }`}
            >
              <Globe className={`w-3 h-3 shrink-0 ${isHighContrast ? 'text-cyan-400' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{t.languageToggle}</span>
            </button>
          </div>
        </div>

        {/* Mobile-Only Horizontal Action Toolbar: Quick Tools Carousel */}
        <div className={`md:hidden flex items-center gap-1.5 overflow-x-auto py-1.5 border-b no-scrollbar text-[10px] font-bold overscroll-x-contain ${
          isHighContrast
            ? 'border-cyan-500/30 bg-black/60'
            : isLight
            ? 'border-slate-200/80 bg-slate-50/50'
            : 'border-slate-800/60 bg-slate-950/50'
        }`}>
          {/* Mobile How To Tour */}
          {onOpenTutorial && (
            <button
              onClick={onOpenTutorial}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border shrink-0 transition-all active:scale-95 ${
                isHighContrast
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-400'
                  : isLight
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-amber-500/15 text-amber-300 border-amber-500/40'
              }`}
            >
              <Compass className="w-3 h-3 text-amber-400" />
              <span>{t.howToShort}</span>
            </button>
          )}

          {onOpenFormulaHandbook && (
            <button
              onClick={onOpenFormulaHandbook}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border shrink-0 transition-all active:scale-95 ${
                isHighContrast
                  ? 'bg-black text-yellow-300 border-yellow-400'
                  : isLight
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-emerald-950/70 text-emerald-300 border-emerald-700/60'
              }`}
            >
              <BookOpen className="w-3 h-3 text-emerald-400" />
              <span>{isArabic ? 'دستور القوانين' : 'Formula Sheet'}</span>
            </button>
          )}

          {onOpenMathScratchpad && (
            <button
              onClick={onOpenMathScratchpad}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border shrink-0 transition-all active:scale-95 ${
                isHighContrast
                  ? 'bg-black text-purple-300 border-purple-400'
                  : isLight
                  ? 'bg-purple-50 text-purple-800 border-purple-300'
                  : 'bg-purple-950/70 text-purple-300 border-purple-700/60'
              }`}
            >
              <Edit3 className="w-3 h-3 text-purple-400" />
              <span>{isArabic ? 'المسودة' : 'Scratchpad'}</span>
            </button>
          )}

          {onOpenOfficialBooks && (
            <button
              onClick={onOpenOfficialBooks}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border shrink-0 transition-all active:scale-95 ${
                isHighContrast
                  ? 'bg-black text-amber-300 border-amber-400'
                  : isLight
                  ? 'bg-teal-50 text-teal-800 border-teal-300'
                  : 'bg-teal-950/70 text-teal-300 border-teal-700/60'
              }`}
            >
              <Download className="w-3 h-3 text-teal-400" />
              <span>{t.officialBooksNavBtn}</span>
            </button>
          )}

          {onOpenDesmos && (
            <button
              onClick={onOpenDesmos}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border shrink-0 transition-all active:scale-95 ${
                isHighContrast
                  ? 'bg-black text-cyan-300 border-cyan-400'
                  : isLight
                  ? 'bg-indigo-50 text-indigo-800 border-indigo-300'
                  : 'bg-cyan-950/70 text-cyan-300 border-cyan-700/60'
              }`}
            >
              <Calculator className="w-3 h-3 text-cyan-400" />
              <span>{isArabic ? 'ديسموس 2D/3D' : 'Desmos'}</span>
            </button>
          )}

          <button
            onClick={onRoleToggle}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border shrink-0 transition-all active:scale-95 ${
              isHighContrast
                ? 'bg-black text-white border-white/60'
                : isLight
                ? 'bg-slate-100 text-slate-700 border-slate-300'
                : 'bg-slate-900 text-slate-200 border-slate-700'
            }`}
          >
            <UserCheck className="w-3 h-3 text-indigo-400" />
            <span>{role === 'student' ? t.roleStudent : t.roleTeacher}</span>
          </button>

          <a
            href="https://clipsat.org"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border shrink-0 transition-all active:scale-95 ${
              isHighContrast
                ? 'bg-black text-cyan-300 border-cyan-400'
                : isLight
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'bg-blue-950/70 text-blue-300 border-blue-700/60'
            }`}
          >
            <span>clipsat.org</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Main Nav Header */}
        <div className="py-2.5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5 sm:gap-4 w-full">
          {/* Logo & Brand Title */}
          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href="https://clipsat.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 shrink-0 group transition-transform hover:scale-105 active:scale-95"
                title={t.sisterSite}
              >
                <img
                  src={clipsatLogo}
                  alt="ClipSAT"
                  className="h-8 sm:h-9 w-auto object-contain shrink-0 drop-shadow-sm"
                />
                <EgyptFlag
                  className="h-5 sm:h-5.5 w-auto rounded-[3px] shadow-xs shrink-0 ring-1 ring-black/15 dark:ring-white/20 transition-transform group-hover:rotate-3"
                  title={isArabic ? 'علم جمهورية مصر العربية' : 'Flag of the Arab Republic of Egypt'}
                />
              </a>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`text-sm sm:text-lg font-black tracking-tight whitespace-nowrap ${
                  isLight
                    ? 'bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-700 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm'
                }`}>
                  ClipSAT for Egypt
                </span>
                <span className={`text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-md border shrink-0 ${
                  isLight
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                }`}>
                  2026
                </span>
              </div>
            </div>

            <a
              href="https://clipsat.org"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex lg:hidden xl:inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold px-2 sm:px-2.5 py-0.5 rounded-full border transition-all hover:scale-105 active:scale-95 shadow-xs shrink-0 ${
                isHighContrast
                  ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                  : isLight
                  ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-900'
                  : 'bg-blue-950/70 text-blue-300 border-blue-700/60 hover:bg-blue-900 hover:text-white'
              }`}
              title={t.sisterSite}
            >
              <span>clipsat.org</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80" />
            </a>
          </div>

          {/* Controls: Subject Selector & Curriculum Switcher - Both as Dropdown Menus */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 shrink-0 w-full lg:w-auto">
            {curriculumData && onSubjectChange && (
              <SubjectSelector
                selectedSubject={selectedSubject || 'all'}
                onSelectSubject={onSubjectChange}
                curriculum={curriculumData}
                lang={lang}
                theme={theme}
                className="w-full sm:w-auto"
              />
            )}

            {/* Curriculum Switcher Dropdown Menu */}
            <CurriculumSelector
              curriculum={curriculum}
              onCurriculumChange={onCurriculumChange}
              lang={lang}
              theme={theme}
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Tab Navigation Section: Responsive Dropdown Menu on Mobile/Tablet, Clean Row on Desktop */}
        <div className="py-2 border-t border-slate-200/50 dark:border-slate-800/80">
          {/* Mobile & Tablet Tab Dropdown Menu (lg:hidden) */}
          <div ref={tabMenuRef} className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setIsTabMenuOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={isTabMenuOpen}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-black transition-all cursor-pointer shadow-xs active:scale-95 border ${
                isHighContrast
                  ? 'bg-black border-2 border-yellow-400 text-yellow-300 hover:bg-zinc-950'
                  : isLight
                  ? 'bg-white border-slate-300 text-slate-900 hover:border-indigo-400 hover:bg-slate-50'
                  : 'bg-slate-900 border-slate-800 text-white hover:border-indigo-500'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-base shrink-0">{activeTabObj.icon}</span>
                <div className="text-left rtl:text-right min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold truncate">{activeTabObj.label}</span>
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                      isHighContrast
                        ? 'bg-yellow-400 text-black font-black'
                        : isLight
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-indigo-900/60 text-indigo-300'
                    }`}>
                      {isArabic ? 'القسم النشط' : 'Active'}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">
                    {isArabic ? activeTabObj.descAr : activeTabObj.descEn}
                  </p>
                </div>
              </div>

              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 opacity-70 ${
                isTabMenuOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {isTabMenuOpen && (
              <div
                role="menu"
                className={`absolute left-0 right-0 mt-2 rounded-2xl p-2 shadow-2xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 max-h-[70vh] overflow-y-auto ${
                  isHighContrast
                    ? 'bg-black border-2 border-yellow-400 text-white'
                    : isLight
                    ? 'bg-white/98 border-slate-200 text-slate-900 shadow-xl shadow-slate-200/60'
                    : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-2xl shadow-black/80'
                }`}
              >
                <div className="px-3 py-1.5 border-b border-slate-200 dark:border-slate-800 mb-1">
                  <p className="text-xs font-black text-slate-400">
                    {isArabic ? 'أقسام المنصة التعليمية' : 'Platform Modules'}
                  </p>
                </div>
                <div className="space-y-1">
                  {navTabs.map((tab) => {
                    const isSelected = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          onTabChange(tab.id);
                          setIsTabMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-left rtl:text-right cursor-pointer ${
                          isSelected
                            ? isHighContrast
                              ? 'bg-yellow-950 text-white border border-yellow-400 font-black'
                              : isLight
                              ? 'bg-indigo-50 text-indigo-950 border border-indigo-200 font-extrabold'
                              : 'bg-indigo-950/60 text-white border border-indigo-800/60 font-extrabold'
                            : isLight
                            ? 'hover:bg-slate-100 text-slate-700'
                            : 'hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-lg shrink-0">{tab.icon}</span>
                          <div className="min-w-0">
                            <p className="text-xs font-bold truncate">{tab.label}</p>
                            <p className="text-[10px] text-slate-400 truncate">
                              {isArabic ? tab.descAr : tab.descEn}
                            </p>
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-indigo-500 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Tab Navigation (hidden on mobile/tablet, clean row on desktop) */}
          <nav
            className="hidden lg:flex items-center gap-1.5 xl:gap-2 overflow-x-auto no-scrollbar text-xs font-semibold scroll-smooth"
          >
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 active:scale-95 text-[11px] xl:text-xs ${
                    isActive
                      ? isHighContrast
                        ? 'bg-yellow-400 text-black font-black shadow-sm border border-yellow-300'
                        : isLight
                        ? 'bg-indigo-600 text-white font-extrabold shadow-sm'
                        : 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-extrabold'
                      : isHighContrast
                        ? 'text-white hover:text-yellow-300 hover:bg-zinc-900'
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
      </div>
    </header>
  );
};
