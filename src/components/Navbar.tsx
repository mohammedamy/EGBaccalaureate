import React from 'react';
import type { CurriculumType, ThemeMode, FontSizeMode } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { Globe, UserCheck, Award, BookOpen, Sun, Moon, Zap, Type, Calculator, Download, ExternalLink } from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';
import { EgyptFlag } from './EgyptFlag';

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
}) => {
  const t = translations[lang];
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

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
            <span className={`hidden sm:inline truncate ${
              isHighContrast ? 'text-slate-100' : isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>{t.officialMoeRef}</span>
            <span className={`hidden md:inline ${
              isHighContrast ? 'text-cyan-600' : isLight ? 'text-slate-300' : 'text-slate-600'
            }`}>|</span>
            <a
              href="https://clipsat.org"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-1 font-bold text-[10px] transition-all hover:underline ${
                isHighContrast ? 'text-cyan-300' : isLight ? 'text-blue-700 hover:text-blue-900' : 'text-cyan-400 hover:text-cyan-300'
              }`}
              title={t.sisterSite}
            >
              <span>{t.sisterSiteBadge}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 flex-wrap sm:flex-nowrap justify-end">
            {/* Overall Font Size Switcher */}
            <div
              className={`flex items-center p-0.5 rounded-full border shadow-xs transition-all ${
                isHighContrast
                  ? 'bg-black border-cyan-400'
                  : isLight
                  ? 'bg-slate-100 border-slate-300'
                  : 'bg-slate-900 border-slate-700'
              }`}
              role="group"
              aria-label={t.fontSize}
            >
              <span
                className={`px-1.5 flex items-center gap-0.5 text-[10px] font-bold ${
                  isHighContrast ? 'text-cyan-400' : isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
                title={t.fontSize}
              >
                <Type className="w-3 h-3" />
                <span className="hidden lg:inline">{t.fontSize}</span>
              </span>
              <div className="flex items-center gap-0.5">
                <button
                  onClick={() => onFontSizeChange('normal')}
                  title={t.fontSizeNormal}
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                    fontSize === 'normal'
                      ? isHighContrast
                        ? 'bg-cyan-400 text-black font-black shadow-xs'
                        : 'bg-indigo-600 text-white shadow-xs'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  A
                </button>
                <button
                  onClick={() => onFontSizeChange('large')}
                  title={t.fontSizeLarge}
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                    fontSize === 'large'
                      ? isHighContrast
                        ? 'bg-cyan-400 text-black font-black shadow-xs'
                        : 'bg-indigo-600 text-white shadow-xs'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  A+
                </button>
                <button
                  onClick={() => onFontSizeChange('xlarge')}
                  title={t.fontSizeXLarge}
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                    fontSize === 'xlarge'
                      ? isHighContrast
                        ? 'bg-cyan-400 text-black font-black shadow-xs'
                        : 'bg-indigo-600 text-white shadow-xs'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  A++
                </button>
              </div>
            </div>

            {/* Contrast / Color Theme Switcher */}
            <div
              className={`flex items-center p-0.5 rounded-full border shadow-xs transition-all ${
                isHighContrast
                  ? 'bg-black border-yellow-400'
                  : isLight
                  ? 'bg-amber-50/80 border-amber-200'
                  : 'bg-slate-900 border-slate-700'
              }`}
              role="group"
              aria-label="Color Theme and Contrast"
            >
              <button
                onClick={() => onThemeChange('light')}
                title={t.themeDay}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  theme === 'light'
                    ? 'bg-amber-400/40 text-amber-950 font-black shadow-xs border border-amber-300'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sun className="w-3 h-3 text-amber-500 shrink-0" />
                <span className="hidden sm:inline">{lang === 'ar' ? 'نهار' : 'Day'}</span>
              </button>
              <button
                onClick={() => onThemeChange('dark')}
                title={t.themeNight}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  theme === 'dark'
                    ? 'bg-indigo-600 text-white font-black shadow-xs'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Moon className="w-3 h-3 text-indigo-300 shrink-0" />
                <span className="hidden sm:inline">{lang === 'ar' ? 'ليل' : 'Night'}</span>
              </button>
              <button
                onClick={() => onThemeChange('high-contrast')}
                title={t.themeHighContrast}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  theme === 'high-contrast'
                    ? 'bg-yellow-400 text-black font-black shadow-xs border border-yellow-300'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Zap className="w-3 h-3 text-yellow-400 shrink-0" />
                <span className="hidden sm:inline">{lang === 'ar' ? 'تباين' : 'Contrast'}</span>
              </button>
            </div>

            {/* Formula Handbook Trigger */}
            {onOpenFormulaHandbook && (
              <button
                onClick={onOpenFormulaHandbook}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                  isHighContrast
                    ? 'bg-black text-yellow-300 border-yellow-400 hover:bg-yellow-950/40'
                    : isLight
                    ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border-emerald-700/60'
                }`}
                title={lang === 'ar' ? 'دستور القوانين والمعادلات الرسمية (Ctrl+J / ⌘J)' : 'Formula Sheet Handbook (Ctrl+J / ⌘J)'}
              >
                <BookOpen className="w-3 h-3 text-emerald-400" />
                <span>{lang === 'ar' ? 'دستور القوانين' : 'Formula Sheet'}</span>
                <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘J</kbd>
              </button>
            )}

            {/* Official Ministry Books Trigger */}
            {onOpenOfficialBooks && (
              <button
                onClick={onOpenOfficialBooks}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                  isHighContrast
                    ? 'bg-black text-amber-300 border-amber-400 hover:bg-amber-950/40'
                    : isLight
                    ? 'bg-teal-50 hover:bg-teal-100 text-teal-800 border-teal-300'
                    : 'bg-teal-950/70 hover:bg-teal-900 text-teal-300 border-teal-700/60'
                }`}
                title={lang === 'ar' ? 'كتب الوزارة والأدلة الرسمية PDF (Ctrl+B / ⌘B)' : 'Official Ministry PDF Books (Ctrl+B / ⌘B)'}
              >
                <Download className="w-3 h-3 text-teal-400" />
                <span>{t.officialBooksNavBtn}</span>
                <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘B</kbd>
              </button>
            )}

            {/* Desmos 2D/3D Calculator Trigger */}
            {onOpenDesmos && (
              <button
                onClick={onOpenDesmos}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                  isHighContrast
                    ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                    : isLight
                    ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border-indigo-300'
                    : 'bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 border-cyan-700/60'
                }`}
                title={lang === 'ar' ? 'حاسبة ديسموس البيانية 2D/3D (Ctrl+D / ⌘D)' : 'Desmos 2D/3D Calculator (Ctrl+D / ⌘D)'}
              >
                <Calculator className="w-3 h-3 text-cyan-400" />
                <span>{lang === 'ar' ? 'حاسبة ديسموس' : 'Desmos 2D/3D'}</span>
                <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘D</kbd>
              </button>
            )}

            {/* Role Toggle: Teacher / Student */}
            <button
              onClick={onRoleToggle}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs ${
                isHighContrast
                  ? 'bg-black text-white border-white/60 hover:border-white'
                  : isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <UserCheck className={`w-3.5 h-3.5 ${isHighContrast ? 'text-yellow-400' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{role === 'student' ? t.roleStudent : t.roleTeacher}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-extrabold text-[11px] transition-all border shadow-xs ${
                isHighContrast
                  ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                  : isLight
                  ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border-indigo-700'
              }`}
            >
              <Globe className={`w-3 h-3 ${isHighContrast ? 'text-cyan-400' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{t.languageToggle}</span>
            </button>
          </div>
        </div>

        {/* Main Nav Header */}
        <div className="py-2.5 flex items-center justify-between gap-3 sm:gap-6 flex-wrap md:flex-nowrap">
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://clipsat.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 shrink-0 group transition-transform hover:scale-105 active:scale-95"
              title={t.sisterSite}
            >
              <img
                src={clipsatLogo}
                alt="ClipSAT"
                className="h-8 sm:h-9 w-auto object-contain shrink-0 drop-shadow-sm"
              />
              <EgyptFlag
                className="h-5 sm:h-5.5 w-auto rounded-[3px] shadow-xs shrink-0 ring-1 ring-black/15 dark:ring-white/20 transition-transform group-hover:rotate-3"
                title={lang === 'ar' ? 'علم جمهورية مصر العربية' : 'Flag of the Arab Republic of Egypt'}
              />
            </a>
            <div className="flex items-center gap-2 shrink-0 flex-wrap sm:flex-nowrap">
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
              <a
                href="https://clipsat.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border transition-all hover:scale-105 active:scale-95 shadow-xs shrink-0 ${
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
          </div>

          {/* Curriculum Switcher Pills */}
          <div className={`flex items-center p-1 rounded-xl border shadow-inner shrink-0 ms-auto md:ms-0 ${
            isHighContrast
              ? 'bg-black border-2 border-cyan-400'
              : isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-900 dark:bg-slate-950 border-slate-800'
          }`}>
            <button
              onClick={() => onCurriculumChange('thanaweya')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
                curriculum === 'thanaweya'
                  ? isHighContrast
                    ? 'bg-cyan-400 text-black font-black shadow-sm'
                    : 'bg-indigo-600 text-white shadow-sm'
                  : isHighContrast
                    ? 'text-white hover:text-cyan-300'
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
                  ? isHighContrast
                    ? 'bg-cyan-400 text-black font-black shadow-sm'
                    : 'bg-indigo-600 text-white shadow-sm'
                  : isHighContrast
                    ? 'text-white hover:text-cyan-300'
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
          isHighContrast
            ? 'border-cyan-500/40 bg-black/80'
            : isLight
            ? 'border-slate-200'
            : 'border-slate-800/60'
        }`}>
          {[
            { id: 'overview', label: t.overviewTab, icon: '🗺️' },
            { id: 'equivalency', label: t.equivalencyTab, icon: '⚖️' },
            { id: 'theory', label: t.theoryTab, icon: '📖' },
            { id: 'solvedExamples', label: t.solvedExamplesTab, icon: '💡' },
            { id: 'exerciseProblems', label: t.exerciseProblemsTab, icon: '📚' },
            { id: 'databank', label: t.databankTab, icon: '🗄️' },
            { id: 'worksheet', label: t.worksheetTab, icon: '✏️' },
            { id: 'interactive', label: t.interactiveTab, icon: '🎮' },
            { id: 'lessonPlan', label: t.lessonPlanTab, icon: '📋' },
            { id: 'testGenerator', label: t.testGeneratorTab, icon: '📝' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 ${
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
    </header>
  );
};
