import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import type { OfficialBook } from '../data/officialBooksData';
import {
  officialBooksList,
  getFullTextbookDownloadUrl,
  getFullTextbookPreviewUrl,
  getCompendiumDownloadUrl,
} from '../data/officialBooksData';
import { toHindiDigits } from '../utils/arabicNumerals';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);
import {
  X,
  Search,
  BookOpen,
  Download,
  Layers,
  FileText,
  Award,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  Globe,
  ExternalLink,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  initialBookId?: string;
}

export const OfficialBooksModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  initialBookId,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const t = translations[lang];

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterCurriculum, setFilterCurriculum] = useState<'all' | 'thanaweya' | 'egbac' | 'compendium'>('all');
  const [expandedChaptersBookId, setExpandedChaptersBookId] = useState<string | null>(initialBookId || null);
  const [showWafModal, setShowWafModal] = useState<OfficialBook | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
      if (initialBookId) {
        setExpandedChaptersBookId(initialBookId);
        setFilterSubject('all');
        setFilterCurriculum('all');
      }
    } else {
      setSearchQuery('');
    }
  }, [isOpen, initialBookId]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered books
  const filteredBooks = useMemo(() => {
    return officialBooksList.filter((book) => {
      // Subject filter
      if (filterSubject !== 'all' && book.subjectId !== filterSubject) {
        return false;
      }

      // Curriculum filter
      if (filterCurriculum === 'thanaweya' && book.curriculum !== 'thanaweya' && book.curriculum !== 'both') {
        return false;
      }
      if (filterCurriculum === 'egbac' && book.curriculum !== 'egbac' && book.curriculum !== 'both') {
        return false;
      }
      if (filterCurriculum === 'compendium' && book.category !== 'compendium') {
        return false;
      }

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inTitleEn = book.titleEn.toLowerCase().includes(q);
      const inTitleAr = book.titleAr.includes(q);
      const inCode = book.code.toLowerCase().includes(q);
      const inDescEn = book.descriptionEn.toLowerCase().includes(q);
      const inDescAr = book.descriptionAr.includes(q);
      const inChapters = book.chapters.some(
        (c) => c.titleEn.toLowerCase().includes(q) || c.titleAr.includes(q)
      );
      return inTitleEn || inTitleAr || inCode || inDescEn || inDescAr || inChapters;
    });
  }, [filterSubject, filterCurriculum, searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md transition-all duration-200 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : isContrast
            ? 'bg-black border-yellow-400 text-yellow-300'
            : 'bg-slate-900 border-slate-700/80 text-white'
        }`}
      >
        {/* Top Gradient Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600" />

        {/* Modal Header */}
        <div
          className={`flex items-start justify-between p-4 sm:p-6 border-b ${
            isLight
              ? 'bg-white border-slate-200'
              : isContrast
              ? 'bg-black border-yellow-400'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`p-3 rounded-xl flex items-center justify-center shadow-md ${
                isLight
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-emerald-950/80 text-emerald-400 border border-emerald-700/50'
              }`}
            >
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-2xl font-bold tracking-tight">
                  {t.officialBooksTitle}
                </h2>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    isLight
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-emerald-900/40 text-emerald-300 border border-emerald-600/40'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {isArabic ? 'معتمدة ٢٠٢٦' : 'MOE 2025/2026'}
                </span>
              </div>
              <p
                className={`text-xs sm:text-sm mt-1 ${
                  isLight ? 'text-slate-600' : isContrast ? 'text-yellow-200' : 'text-slate-400'
                }`}
              >
                {t.officialBooksSubtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`hidden sm:inline-flex items-center text-xs px-2 py-1 rounded border font-mono ${
                isLight ? 'bg-slate-100 text-slate-500' : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              ESC
            </span>
            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors ${
                isLight
                  ? 'hover:bg-slate-200 text-slate-600'
                  : 'hover:bg-slate-800 text-slate-400 hover:text-white'
              }`}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div
          className={`p-4 sm:px-6 border-b flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between ${
            isLight
              ? 'bg-slate-100 border-slate-200'
              : isContrast
              ? 'bg-zinc-950 border-yellow-400'
              : 'bg-slate-800/60 border-slate-800'
          }`}
        >
          {/* Filters: Subject Track & Curriculum */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {/* Subject Filter Dropdown */}
            <div className="w-full sm:w-44 shrink-0">
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value as any)}
                className={`w-full p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer outline-none ${
                  isLight ? 'bg-white border-slate-300 text-slate-800' : 'bg-slate-900 border-slate-700 text-slate-200'
                }`}
              >
                <option value="all">{isArabic ? '🌟 جميع المواد' : '🌟 All Subjects'} ({officialBooksList.length})</option>
                <option value="mathematics">{isArabic ? '📐 الرياضيات' : '📐 Mathematics'} ({officialBooksList.filter(b => b.subjectId === 'mathematics').length})</option>
                <option value="physics">{isArabic ? '⚡ الفيزياء' : '⚡ Physics'} ({officialBooksList.filter(b => b.subjectId === 'physics').length})</option>
                <option value="chemistry">{isArabic ? '🧪 الكيمياء' : '🧪 Chemistry'} ({officialBooksList.filter(b => b.subjectId === 'chemistry').length})</option>
                <option value="biology">{isArabic ? '🧬 الأحياء' : '🧬 Biology'} ({officialBooksList.filter(b => b.subjectId === 'biology').length})</option>
                <option value="geology">{isArabic ? '⛰️ الجيولوجيا' : '⛰️ Geology'} ({officialBooksList.filter(b => b.subjectId === 'geology').length})</option>
                <option value="arabic">{isArabic ? '📜 اللغة العربية' : '📜 Arabic'} ({officialBooksList.filter(b => b.subjectId === 'arabic').length})</option>
                <option value="english">{isArabic ? '🌍 اللغة الإنجليزية' : '🌍 English'} ({officialBooksList.filter(b => b.subjectId === 'english').length})</option>
                <option value="french">{isArabic ? '🇫🇷 اللغة الفرنسية' : '🇫🇷 French'} ({officialBooksList.filter(b => b.subjectId === 'french').length})</option>
                <option value="german">{isArabic ? '🇩🇪 اللغة الألمانية' : '🇩🇪 German'} ({officialBooksList.filter(b => b.subjectId === 'german').length})</option>
                <option value="italian">{isArabic ? '🇮🇹 اللغة الإيطالية' : '🇮🇹 Italian'} ({officialBooksList.filter(b => b.subjectId === 'italian').length})</option>
                <option value="spanish">{isArabic ? '🇪🇸 اللغة الإسبانية' : '🇪🇸 Spanish'} ({officialBooksList.filter(b => b.subjectId === 'spanish').length})</option>
                <option value="chinese">{isArabic ? '🇨🇳 اللغة الصينية' : '🇨🇳 Chinese'} ({officialBooksList.filter(b => b.subjectId === 'chinese').length})</option>
                <option value="history">{isArabic ? '🏛️ تاريخ مصر' : '🏛️ Egyptian History'} ({officialBooksList.filter(b => b.subjectId === 'history').length})</option>
                <option value="geography">{isArabic ? '🌍 الجغرافيا السياسية' : '🌍 Political Geography'} ({officialBooksList.filter(b => b.subjectId === 'geography').length})</option>
                <option value="philosophy">{isArabic ? '🧠 الفلسفة والمنطق' : '🧠 Philosophy & Logic'} ({officialBooksList.filter(b => b.subjectId === 'philosophy').length})</option>
                <option value="psychology">{isArabic ? '👥 علم النفس والاجتماع' : '👥 Psychology & Sociology'} ({officialBooksList.filter(b => b.subjectId === 'psychology').length})</option>
                <option value="economics_stat">{isArabic ? '📈 الاقتصاد والإحصاء التطبيقي' : '📈 Economics & Applied Statistics'} ({officialBooksList.filter(b => b.subjectId === 'economics_stat').length})</option>
                <option value="cs_informatics">{isArabic ? '💻 الحاسب والذكاء الاصطناعي' : '💻 Computer Science & AI'} ({officialBooksList.filter(b => b.subjectId === 'cs_informatics').length})</option>
                <option value="earth_space">{isArabic ? '🪐 علوم الأرض والفضاء' : '🪐 Earth & Space Sciences'} ({officialBooksList.filter(b => b.subjectId === 'earth_space').length})</option>
                <option value="civics">{isArabic ? '⚖️ التربية الوطنية والمواطنة' : '⚖️ Civics & Citizenship'} ({officialBooksList.filter(b => b.subjectId === 'civics').length})</option>
                <option value="islamic_studies">{isArabic ? '🕌 التربية الإسلامية' : '🕌 Islamic Studies'} ({officialBooksList.filter(b => b.subjectId === 'islamic_studies').length})</option>
                <option value="christian_studies">{isArabic ? '⛪ التربية المسيحية' : '⛪ Christian Studies'} ({officialBooksList.filter(b => b.subjectId === 'christian_studies').length})</option>
                <option value="business_entrepreneurship">{isArabic ? '💼 إدارة وريادة الأعمال' : '💼 Business & Entrepreneurship'} ({officialBooksList.filter(b => b.subjectId === 'business_entrepreneurship').length})</option>
                <option value="fine_arts_architecture">{isArabic ? '🎨 الفنون الجميلة والعمارة' : '🎨 Fine Arts & Architecture'} ({officialBooksList.filter(b => b.subjectId === 'fine_arts_architecture').length})</option>
                <option value="music_theory">{isArabic ? '🎵 التربية الموسيقية' : '🎵 Music Theory'} ({officialBooksList.filter(b => b.subjectId === 'music_theory').length})</option>
                <option value="agriculture">{isArabic ? '🌾 العلوم الزراعية' : '🌾 Agricultural Sciences'} ({officialBooksList.filter(b => b.subjectId === 'agriculture').length})</option>
                <option value="industrial">{isArabic ? '⚙️ العلوم الصناعية والهندسية' : '⚙️ Industrial Engineering'} ({officialBooksList.filter(b => b.subjectId === 'industrial').length})</option>
                <option value="commercial">{isArabic ? '📊 العلوم التجارية والمصرفية' : '📊 Commercial & Financial'} ({officialBooksList.filter(b => b.subjectId === 'commercial').length})</option>
                <option value="tourism">{isArabic ? '🏨 السياحة والضيافة' : '🏨 Tourism & Hospitality'} ({officialBooksList.filter(b => b.subjectId === 'tourism').length})</option>
                <option value="renewable">{isArabic ? '🌱 الطاقة المتجددة والاستدامة' : '🌱 Renewable Energy & Sustainability'} ({officialBooksList.filter(b => b.subjectId === 'renewable').length})</option>
              </select>
            </div>

            {/* Curriculum Track Filter Dropdown */}
            <div className="w-full sm:w-44 shrink-0">
              <select
                value={filterCurriculum}
                onChange={(e) => setFilterCurriculum(e.target.value as any)}
                className={`w-full p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer outline-none ${
                  isLight ? 'bg-white border-slate-300 text-slate-800' : 'bg-slate-900 border-slate-700 text-slate-200'
                }`}
              >
                <option value="all">{t.filterAllBooks}</option>
                <option value="thanaweya">{t.filterThanaweyaBooks}</option>
                <option value="egbac">{t.filterEgBacBooks}</option>
                <option value="compendium">{t.filterCompendiums}</option>
              </select>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search
              className={`absolute top-2.5 ${
                isArabic ? 'right-3' : 'left-3'
              } w-4 h-4 text-slate-400 pointer-events-none`}
            />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchBooksPlaceholder}
              className={`w-full text-xs sm:text-sm py-2 ${
                isArabic ? 'pr-9 pl-8' : 'pl-9 pr-8'
              } rounded-xl outline-none transition-all ${
                isLight
                  ? 'bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-slate-900'
                  : isContrast
                  ? 'bg-black border border-yellow-400 text-yellow-300 placeholder-yellow-600 focus:ring-2 focus:ring-yellow-400'
                  : 'bg-slate-900/90 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute top-2.5 ${isArabic ? 'left-3' : 'right-3'} text-slate-400 hover:text-white`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Dual-Access Ministry Advisory Banner */}
          <div
            className={`p-4 rounded-xl border text-xs flex items-start gap-3.5 shadow-xs ${
              isLight
                ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                : isContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : 'bg-emerald-950/30 border-emerald-700/40 text-emerald-200'
            }`}
          >
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm">
                <span>{isArabic ? 'بوابة الكتب والمناهج الرسمية المعتمدة لوزارة التربية والتعليم' : 'Official Ministry of Education Textbooks & Curricular Gateways'}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 font-mono">2025/2026</span>
              </div>
              <p className={`leading-relaxed text-xs ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {t.moePortalNotice}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1.5 text-[11px] font-medium">
                <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono uppercase">
                    WAF 403 Notice
                  </span>
                  <span>{t.moeWafNotice}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700 text-[10px] font-mono shadow-xs">
                  <GithubIcon className="w-3 h-3 text-emerald-400" />
                  <span>{t.githubMirrorActiveBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 mx-auto text-slate-400 mb-3 opacity-50" />
              <p className="text-base font-semibold text-slate-400">{t.noBooksFound}</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterCurriculum('all');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
              >
                {isArabic ? 'إعادة ضبط عوامل التصفية' : 'Reset Filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredBooks.map((book) => {
                const isExpanded = expandedChaptersBookId === book.id;

                return (
                  <div
                    key={book.id}
                    className={`rounded-2xl border flex flex-col overflow-hidden transition-all duration-200 hover:shadow-xl ${
                      isLight
                        ? 'bg-white border-slate-200 shadow-sm'
                        : isContrast
                        ? 'bg-zinc-950 border-yellow-400 shadow-yellow-900/10'
                        : 'bg-slate-800/80 border-slate-700/80 shadow-slate-950/40 hover:border-slate-600'
                    }`}
                  >
                    {/* Top Colored Band & Curriculum Ribbon */}
                    <div
                      className="p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden"
                      style={{
                        background: isLight
                          ? `linear-gradient(135deg, ${book.accentColor}18, ${book.accentColor}08)`
                          : `linear-gradient(135deg, ${book.accentColor}30, ${book.accentColor}10)`,
                        borderBottom: `2px solid ${book.accentColor}50`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        {/* Title & Subtitle */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono tracking-wide"
                              style={{
                                backgroundColor: `${book.accentColor}25`,
                                color: isLight ? '#065f46' : '#6ee7b7',
                                border: `1px solid ${book.accentColor}50`,
                              }}
                            >
                              {book.code}
                            </span>
                            <span
                              className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                                book.curriculum === 'thanaweya'
                                  ? isLight
                                    ? 'bg-teal-100 text-teal-800'
                                    : 'bg-teal-900/60 text-teal-300'
                                  : book.curriculum === 'egbac'
                                  ? isLight
                                    ? 'bg-indigo-100 text-indigo-800'
                                    : 'bg-indigo-900/60 text-indigo-300'
                                  : isLight
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-amber-900/60 text-amber-300'
                              }`}
                            >
                              {book.curriculum === 'thanaweya'
                                ? isArabic
                                  ? 'ثانوية عامة'
                                  : 'Thanaweya Amma'
                                : book.curriculum === 'egbac'
                                ? isArabic
                                  ? 'بكالوريا مصرية'
                                  : 'EG-Baccalaureate'
                                : isArabic
                                ? 'كتيب معتمد عام'
                                : 'National Compendium'}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                            {isArabic ? book.titleAr : book.titleEn}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {isArabic ? book.titleEn : book.titleAr}
                          </p>
                        </div>

                        {/* Dual Spec Pill: Full Book vs In-App Compendium */}
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                              isLight
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                            }`}
                            title={isArabic ? 'حجم وصفحات الكتاب المدرسي ببوابة الوزارة' : 'Full textbook pages & size on Ministry portal'}
                          >
                            {isArabic
                              ? `${toHindiDigits(book.fullTextbookPages)} صفحة • ${book.fullTextbookSize}`
                              : `${book.fullTextbookPages} Pages • ${book.fullTextbookSize}`}
                          </span>
                          <span
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                            title={isArabic ? 'كتيب المفاهيم المعتمد' : 'In-App Concept Compendium'}
                          >
                            {isArabic
                              ? `الكتيب: ${toHindiDigits(book.pagesCount)} ص (${book.fileSize})`
                              : `Compendium: ${book.pagesCount}p (${book.fileSize})`}
                          </span>
                        </div>
                      </div>

                      {/* Grade & Academic Year Info */}
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-200/40 dark:border-slate-700/40 text-xs text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 opacity-70" />
                          {book.academicYear}
                        </span>
                        <span>•</span>
                        <span className="truncate">
                          {isArabic ? book.gradeAr : book.gradeEn}
                        </span>
                      </div>
                    </div>

                    {/* Book Body: Description & Highlights */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {isArabic ? book.descriptionAr : book.descriptionEn}
                        </p>

                        {/* Highlights List */}
                        <div className="mt-3 space-y-1.5">
                          {(isArabic ? book.highlightsAr : book.highlightsEn).slice(0, 3).map((hl, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                              <CheckCircle2
                                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                                style={{ color: book.accentColor }}
                              />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chapters Collapsible Accordion */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                        <button
                          onClick={() => setExpandedChaptersBookId(isExpanded ? null : book.id)}
                          className="w-full flex items-center justify-between text-xs font-semibold py-1 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" />
                            {isArabic
                              ? `${toHindiDigits(book.chapters.length)} ${t.bookChaptersCount}`
                              : `${book.chapters.length} ${t.bookChaptersCount}`}
                          </span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        {isExpanded && (
                          <div className="mt-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2 animate-in fade-in duration-150">
                            {book.chapters.map((ch, cidx) => (
                              <div
                                key={ch.id}
                                className="flex items-center justify-between text-xs pb-1.5 border-b last:border-0 border-slate-200/50 dark:border-slate-800"
                              >
                                <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[70%]">
                                  {cidx + 1}. {isArabic ? ch.titleAr : ch.titleEn}
                                </span>
                                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                                  {ch.pageRange}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Download & Preview Buttons */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-col gap-2">
                        {/* 1. PRIMARY: Full Ministry Official Textbook (~20MB, 200+ pages) Direct Download */}
                        <a
                          href={getFullTextbookDownloadUrl(book)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-[0.99] group"
                          style={{
                            background: `linear-gradient(135deg, ${book.accentColor}, ${book.accentColor}dd)`,
                          }}
                          title={t.downloadFullTextbookDirect}
                        >
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4 animate-bounce" />
                            <div className="flex flex-col text-left rtl:text-right">
                              <span className="font-extrabold">{t.downloadFullTextbookDirect}</span>
                              <span className="text-[10px] font-normal opacity-90">
                                {isArabic ? 'النسخة الوزارية الكاملة والأصلية' : 'Genuine Complete Official Copy'}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end text-[11px] font-mono opacity-95">
                            <span className="font-bold">
                              {isArabic
                                ? `${toHindiDigits(book.fullTextbookPages)} صفحة • ${book.fullTextbookSize}`
                                : `${book.fullTextbookPages}p • ${book.fullTextbookSize}`}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 bg-white/20 rounded font-sans uppercase font-bold tracking-wider">
                              Anti-403
                            </span>
                          </div>
                        </a>

                        {/* 2. SECONDARY: Quick Concept Compendium & Formula Guide (20KB, 8 pages) */}
                        <a
                          href={getCompendiumDownloadUrl(book)}
                          download={book.filename}
                          className={`w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                            isLight
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-2xs'
                              : 'bg-slate-800/90 hover:bg-slate-700 text-slate-100 border-slate-700 hover:border-slate-500 shadow-2xs'
                          }`}
                          title={t.downloadConceptCompendium}
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{t.downloadConceptCompendium}</span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400">
                            {isArabic
                              ? `${toHindiDigits(book.pagesCount)} صفحات • ${book.fileSize}`
                              : `${book.pagesCount}p • ${book.fileSize}`}
                          </span>
                        </a>

                        {/* 3. TERTIARY ROW: Full Textbook Online Reader, Compendium Preview, and WAF Info */}
                        <div className="flex items-center gap-2">
                          <a
                            href={getFullTextbookPreviewUrl(book)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                              isLight
                                ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                                : 'bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-300 border-indigo-800/60'
                            }`}
                            title={t.previewFullTextbook}
                          >
                            <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                            <span>{t.previewFullTextbook}</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => setShowWafModal(book)}
                            className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all shrink-0 inline-flex items-center gap-1.5 cursor-pointer ${
                              isLight
                                ? 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-300'
                                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border-slate-700'
                            }`}
                            title={`${t.moePortalLink} - ${t.moeWafNotice}`}
                          >
                            <Globe className="w-3.5 h-3.5 text-amber-500 opacity-80" />
                            <span className="hidden sm:inline">{t.moePortalLink}</span>
                            <ExternalLink className="w-3 h-3 opacity-60" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer / Legal Attribution */}
        <div
          className={`p-3.5 sm:px-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] ${
            isLight
              ? 'bg-white border-slate-200 text-slate-500'
              : isContrast
              ? 'bg-black border-yellow-400 text-yellow-300'
              : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>
              {isArabic
                ? 'جميع الكتب والأدلة مطابقة للمقررات الرسمية الصادرة من وزارة التربية والتعليم والتعليم الفني للعام الدراسي ٢٠٢٥ / ٢٠٢٦.'
                : 'All textbooks and compendiums are official publications of the Egyptian Ministry of Education & Technical Education (2025/2026).'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-slate-500">
              PDF-LIB STANDARDIZED
            </span>
          </div>
        </div>
      </div>

      {/* WAF 403 Educational Advisory Dialog */}
      {showWafModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div
            className={`w-full max-w-md p-6 rounded-2xl shadow-2xl border text-sm space-y-4 relative ${
              isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'
            }`}
          >
            <button
              onClick={() => setShowWafModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="pr-6">
                <h4 className="font-bold text-base text-amber-500">
                  {isArabic ? 'تنبيه جدار حماية الوزارة (Error 403)' : 'Ministry Server WAF Notice (Error 403)'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                  moe.gov.eg • Azure App Gateway
                </p>
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl border text-xs leading-relaxed space-y-2.5 ${
                isLight ? 'bg-amber-50/70 border-amber-200 text-amber-950' : 'bg-amber-950/20 border-amber-800/40 text-amber-200'
              }`}
            >
              <p>
                {isArabic
                  ? 'بوابة التعليم الإلكتروني الرسمية لوزارة التربية والتعليم (moe.gov.eg) تطبق جدار حماية سحابي (Microsoft Azure WAF) يقوم بحجب الاتصالات المباشرة من خارج مصر وشبكات المحمول الدولية ويُظهر خطأ 403 Forbidden.'
                  : 'The external Ministry of Education portal (moe.gov.eg) is protected by a Microsoft Azure Cloud Firewall that frequently rejects connections with HTTP 403 Forbidden for international networks, VPNs, and mobile devices.'}
              </p>
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-semibold flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? 'التحميل المباشر متاح فوراً! نحتفظ بنسخة رسمية رقمية محدثة من كافة الكتب على سيرفرات GitHub، إلى جانب النسخة المدمجة في المنصة للتحميل الفوري بدون أي حجب.'
                    : 'Direct Download Available! An up-to-date official copy of all books is mirrored and maintained directly in the GitHub repository with 100% uptime and zero 403 blocks.'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              {/* Primary Action: Direct Full Textbook Download (~20MB) */}
              <a
                href={getFullTextbookDownloadUrl(showWafModal)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWafModal(null)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-white animate-bounce" />
                  <span>{isArabic ? 'تحميل كتاب الوزارة الكامل (~20MB)' : 'Download Full Official Textbook (~20MB)'}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-700 text-indigo-100 font-bold">
                  {showWafModal.fullTextbookSize} • Anti-403
                </span>
              </a>

              {/* Online Full Textbook Reader */}
              <a
                href={getFullTextbookPreviewUrl(showWafModal)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWafModal(null)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{isArabic ? 'معاينة وقراءة الكتاب الكامل أونلاين (PDF)' : 'Read Full Textbook Online (PDF)'}</span>
              </a>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <a
                  href={getCompendiumDownloadUrl(showWafModal)}
                  download={showWafModal.filename}
                  onClick={() => setShowWafModal(null)}
                  className="w-full sm:flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-center text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isArabic ? `كتيب المفاهيم (${showWafModal.fileSize})` : `Concept Guide (${showWafModal.fileSize})`}</span>
                </a>

                <a
                  href={showWafModal.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowWafModal(null)}
                  className="w-full sm:w-auto py-2 px-3 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>{isArabic ? 'فتح moe.gov.eg رغم ذلك' : 'Open moe.gov.eg anyway'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
