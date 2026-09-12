import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { officialBooksList } from '../data/officialBooksData';
import { toHindiDigits } from '../utils/arabicNumerals';
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
  Globe,
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
  const [filterCurriculum, setFilterCurriculum] = useState<'all' | 'thanaweya' | 'egbac' | 'compendium'>('all');
  const [expandedChaptersBookId, setExpandedChaptersBookId] = useState<string | null>(initialBookId || null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
      if (initialBookId) {
        setExpandedChaptersBookId(initialBookId);
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
  }, [filterCurriculum, searchQuery]);

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
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setFilterCurriculum('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filterCurriculum === 'all'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : isLight
                  ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t.filterAllBooks} ({officialBooksList.length})
            </button>

            <button
              onClick={() => setFilterCurriculum('thanaweya')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filterCurriculum === 'thanaweya'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : isLight
                  ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t.filterThanaweyaBooks}
            </button>

            <button
              onClick={() => setFilterCurriculum('egbac')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filterCurriculum === 'egbac'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isLight
                  ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t.filterEgBacBooks}
            </button>

            <button
              onClick={() => setFilterCurriculum('compendium')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filterCurriculum === 'compendium'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : isLight
                  ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t.filterCompendiums}
            </button>
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
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
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
                const pageCountDisplay = isArabic
                  ? `${toHindiDigits(book.pagesCount)} ${t.bookPagesCount}`
                  : `${book.pagesCount} ${t.bookPagesCount}`;

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

                        {/* File Size & Page Pill */}
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span className="text-xs font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            {pageCountDisplay}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                            {book.fileSize}
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
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-2 flex-wrap">
                        {/* Direct Download PDF Button */}
                        <a
                          href={book.downloadUrl}
                          download={book.filename}
                          className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-[0.98]"
                          style={{
                            background: `linear-gradient(135deg, ${book.accentColor}, ${book.accentColor}dd)`,
                          }}
                        >
                          <Download className="w-4 h-4" />
                          <span>{t.downloadBookPdf}</span>
                        </a>

                        {/* Preview / Open in Tab */}
                        <button
                          onClick={() => window.open(book.downloadUrl, '_blank')}
                          className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                            isLight
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                              : 'bg-slate-700/60 hover:bg-slate-700 text-slate-200 border-slate-600'
                          }`}
                          title={t.previewBookPdf}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{t.previewBookPdf}</span>
                        </button>

                        {/* Ministry E-Learning Portal Link */}
                        <a
                          href={book.officialPortalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2.5 rounded-xl text-xs font-medium border transition-colors ${
                            isLight
                              ? 'bg-slate-50 hover:bg-slate-100 text-slate-500 border-slate-300'
                              : 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 border-slate-700 hover:text-white'
                          }`}
                          title={t.moePortalLink}
                        >
                          <Globe className="w-4 h-4" />
                        </a>
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
    </div>
  );
};
