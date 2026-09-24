import React, { useState, useMemo, useEffect } from 'react';
import type { CurriculumType, Branch, Lesson } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import { thanaweyaCurriculum } from '../data/thanaweyaData';
import { egBacCurriculum } from '../data/egBacData';
import {
  X,
  Search,
  BookOpen,
  Copy,
  Check,
  Layers,
  ExternalLink,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  currentCurriculum: CurriculumType;
  onNavigateToLesson?: (curType: CurriculumType, branch: Branch, lesson: Lesson) => void;
}

interface FlattenedFormula {
  id: string;
  labelEn: string;
  labelAr: string;
  latex: string;
  curriculumType: CurriculumType;
  branch: Branch;
  lesson: Lesson;
  chapterTitleEn: string;
  chapterTitleAr: string;
}

export const FormulaHandbook: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  currentCurriculum,
  onNavigateToLesson,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumType | 'all'>(currentCurriculum);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync selected track when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedCurriculum(currentCurriculum);
    }
  }, [isOpen, currentCurriculum]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Extract all 168 formulas across both curriculum trees
  const allFormulas: FlattenedFormula[] = useMemo(() => {
    const list: FlattenedFormula[] = [];

    const processCurriculum = (curType: CurriculumType, curData: typeof thanaweyaCurriculum) => {
      curData.branches.forEach((branch) => {
        branch.chapters.forEach((ch) => {
          ch.lessons.forEach((l) => {
            l.formulas?.forEach((f, idx) => {
              list.push({
                id: `${l.id}_f_${idx}`,
                labelEn: f.labelEn,
                labelAr: f.labelAr,
                latex: f.latex,
                curriculumType: curType,
                branch,
                lesson: l,
                chapterTitleEn: ch.titleEn,
                chapterTitleAr: ch.titleAr,
              });
            });
          });
        });
      });
    };

    processCurriculum('thanaweya', thanaweyaCurriculum);
    processCurriculum('egbac', egBacCurriculum);

    return list;
  }, []);

  // Filter formulas based on user queries
  const filteredFormulas = useMemo(() => {
    return allFormulas.filter((f) => {
      if (selectedCurriculum !== 'all' && f.curriculumType !== selectedCurriculum) {
        return false;
      }
      if (selectedBranchId !== 'all' && f.branch.id !== selectedBranchId) {
        return false;
      }

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        f.labelEn.toLowerCase().includes(q) ||
        f.labelAr.toLowerCase().includes(q) ||
        f.latex.toLowerCase().includes(q) ||
        f.chapterTitleEn.toLowerCase().includes(q) ||
        f.chapterTitleAr.toLowerCase().includes(q) ||
        f.branch.titleEn.toLowerCase().includes(q) ||
        f.branch.titleAr.toLowerCase().includes(q)
      );
    });
  }, [allFormulas, selectedCurriculum, selectedBranchId, searchQuery]);

  // Copy LaTeX code to clipboard
  const handleCopyLatex = (id: string, latex: string) => {
    navigator.clipboard.writeText(latex);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  // Branch list for dropdown filter
  const branchOptions = useMemo(() => {
    const bList: Array<{ id: string; titleEn: string; titleAr: string }> = [];
    const seen = new Set<string>();

    const addBranches = (curData: typeof thanaweyaCurriculum) => {
      curData.branches.forEach((b) => {
        if (!seen.has(b.id)) {
          seen.add(b.id);
          bList.push({ id: b.id, titleEn: b.titleEn, titleAr: b.titleAr });
        }
      });
    };

    if (selectedCurriculum === 'all' || selectedCurriculum === 'thanaweya') {
      addBranches(thanaweyaCurriculum);
    }
    if (selectedCurriculum === 'all' || selectedCurriculum === 'egbac') {
      addBranches(egBacCurriculum);
    }

    return bList;
  }, [selectedCurriculum]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md animate-fadeIn no-print"
      role="dialog"
      aria-modal="true"
      aria-label={isArabic ? 'دستور القوانين والمعادلات الرياضية' : 'Official Mathematical Formula Handbook'}
      dir={isArabic ? 'rtl' : 'ltr'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-colors ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-yellow-300'
            : isLight
            ? 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            : 'bg-slate-950 border-slate-800 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`p-5 sm:p-6 border-b flex items-center justify-between gap-4 shrink-0 transition-colors ${
            isContrast
              ? 'bg-zinc-950 border-yellow-400/80'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-900/60 border-slate-800/80'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-2xl border transition-colors ${
                isContrast
                  ? 'bg-black text-yellow-300 border-yellow-400'
                  : isLight
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-xs'
                  : 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30'
              }`}
            >
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3
                className={`text-lg sm:text-xl font-black flex items-center gap-2 ${
                  isContrast ? 'text-white' : isLight ? 'text-slate-950 font-black' : 'text-slate-100'
                }`}
              >
                <span>{isArabic ? 'دستور القوانين والمعادلات الرسمية' : 'Official Mathematical Formula Handbook'}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    isContrast
                      ? 'bg-zinc-900 text-yellow-300 border-yellow-400'
                      : isLight
                      ? 'bg-indigo-100 text-indigo-800 border-indigo-200 font-black'
                      : 'bg-indigo-600/20 text-indigo-300 border-indigo-500/30'
                  }`}
                >
                  {isArabic ? `${toHindiDigits(allFormulas.length)} قانوناً` : `${allFormulas.length} Formulas`}
                </span>
              </h3>
              <p
                className={`text-xs mt-0.5 ${
                  isContrast ? 'text-yellow-200' : isLight ? 'text-slate-600 font-medium' : 'text-slate-400'
                }`}
              >
                {isArabic
                  ? 'المرجع الشامل لجميع قوانين الثانوية العامة والبكالوريا مع إمكانية البحث والنسخ والانتقال للدرس'
                  : 'Comprehensive quick-reference formula sheet with live search, LaTeX copy, and direct lesson navigation'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isContrast
                ? 'border-yellow-400 bg-black hover:bg-yellow-400 hover:text-black text-yellow-300'
                : isLight
                ? 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 shadow-xs'
                : 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
            }`}
            title={isArabic ? 'إغلاق (Esc)' : 'Close (Esc)'}
            aria-label={isArabic ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div
          className={`p-4 sm:p-5 border-b space-y-3 shrink-0 transition-colors ${
            isContrast
              ? 'bg-black border-yellow-400/60'
              : isLight
              ? 'bg-slate-100/60 border-slate-200'
              : 'bg-slate-900/40 border-slate-800/80'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search
                className={`w-4 h-4 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                  isContrast ? 'text-yellow-400' : isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isArabic
                    ? 'ابحث باسم القانون، المعادلة، الفرع، أو الرمز الرياضي...'
                    : 'Search formula by name, branch, theorem, or math symbol...'
                }
                className={`w-full border rounded-xl py-2.5 pl-10 pr-4 rtl:pl-4 rtl:pr-10 text-xs outline-none transition-all font-medium ${
                  isContrast
                    ? 'bg-black border-yellow-400 text-yellow-300 placeholder-yellow-500 focus:ring-1 focus:ring-yellow-400'
                    : isLight
                    ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-xs'
                    : 'bg-slate-950 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-indigo-500 shadow-inner'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-xs transition-colors ${
                    isContrast
                      ? 'text-yellow-400 hover:text-white'
                      : isLight
                      ? 'text-slate-400 hover:text-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title={isArabic ? 'مسح البحث' : 'Clear search'}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Curriculum Track Filter Dropdown */}
            <div className="w-full sm:w-48 shrink-0">
              <select
                value={selectedCurriculum}
                onChange={(e) => {
                  setSelectedCurriculum(e.target.value as any);
                  setSelectedBranchId('all');
                }}
                className={`w-full border rounded-xl p-2.5 text-xs outline-none cursor-pointer font-bold transition-colors ${
                  isContrast
                    ? 'bg-black border-yellow-400 text-yellow-300'
                    : isLight
                    ? 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600 shadow-xs'
                    : 'bg-slate-950 border-slate-800 text-slate-200 focus:border-indigo-500'
                }`}
              >
                <option value="all">{isArabic ? '⚖️ جميع المناهج' : '⚖️ All Tracks'}</option>
                <option value="thanaweya">{isArabic ? '🏅 الثانوية العامة (وزاري)' : '🏅 Thanaweya Amma'}</option>
                <option value="egbac">{isArabic ? '📘 البكالوريا المصرية (STEM)' : '📘 EG-Baccalaureate'}</option>
              </select>
            </div>

            {/* Branch Filter Dropdown */}
            <div className="w-full sm:w-56 shrink-0">
              <select
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                className={`w-full border rounded-xl p-2.5 text-xs outline-none cursor-pointer transition-colors ${
                  isContrast
                    ? 'bg-black border-yellow-400 text-yellow-300'
                    : isLight
                    ? 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600 shadow-xs'
                    : 'bg-slate-950 border-slate-800 text-slate-200 focus:border-indigo-500'
                }`}
              >
                <option value="all">{isArabic ? 'جميع الفروع التخصصية' : 'All Branches'}</option>
                {branchOptions.map((b) => (
                  <option key={b.id} value={b.id}>
                    {isArabic ? b.titleAr : b.titleEn}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Formulas Grid View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredFormulas.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Layers className={`w-12 h-12 mx-auto ${isContrast ? 'text-yellow-400' : isLight ? 'text-slate-400' : 'text-slate-600'}`} />
              <h4 className={`text-base font-bold ${isContrast ? 'text-yellow-200' : isLight ? 'text-slate-900 font-bold' : 'text-slate-300'}`}>
                {isArabic ? 'لم يتم العثور على قوانين مطابقة' : 'No matching formulas found'}
              </h4>
              <p className={`text-xs ${isContrast ? 'text-yellow-400' : isLight ? 'text-slate-600' : 'text-slate-500'}`}>
                {isArabic
                  ? 'جرب البحث بكلمات أخرى أو اختر جميع الفروع لعرض كل القوانين'
                  : 'Try searching with different terms or selecting all branches'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFormulas.map((f) => {
                const isCopied = copiedId === f.id;
                const isEgBac = f.curriculumType === 'egbac';

                return (
                  <div
                    key={f.id}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all flex flex-col justify-between space-y-3 shadow-md group ${
                      isContrast
                        ? 'bg-black border-yellow-500/70 hover:border-yellow-400 shadow-yellow-950/20'
                        : isLight
                        ? 'bg-white border-slate-200/90 hover:border-indigo-400 hover:shadow-lg'
                        : 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50'
                    }`}
                  >
                    <div className="space-y-2.5">
                      {/* Card Header: Tag & Track */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${
                            isEgBac
                              ? isContrast
                                ? 'bg-black text-cyan-300 border-cyan-400'
                                : isLight
                                ? 'bg-teal-50 text-teal-800 border-teal-200'
                                : 'bg-teal-950/60 text-teal-400 border-teal-800/60'
                              : isContrast
                              ? 'bg-black text-yellow-300 border-yellow-400'
                              : isLight
                              ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                              : 'bg-indigo-950/60 text-indigo-400 border-indigo-800/60'
                          }`}
                        >
                          {isEgBac ? 'EG-Bac STEM' : isArabic ? 'ثانوية عامة' : 'Thanaweya'}
                        </span>

                        <span
                          className={`text-[11px] font-semibold truncate ${
                            isContrast ? 'text-yellow-200' : isLight ? 'text-slate-600' : 'text-slate-400'
                          }`}
                        >
                          {isArabic ? `${f.branch.titleAr} • ${f.chapterTitleAr}` : `${f.branch.titleEn} • ${f.chapterTitleEn}`}
                        </span>
                      </div>

                      {/* Formula Title */}
                      <h5
                        className={`text-xs font-bold ${
                          isContrast ? 'text-white' : isLight ? 'text-slate-950 font-black' : 'text-slate-200'
                        }`}
                      >
                        <MathRenderer math={isArabic ? f.labelAr : f.labelEn} lang={lang} />
                      </h5>

                      {/* Formula KaTeX Equation */}
                      <div
                        className={`p-3 rounded-xl border text-center overflow-x-auto my-1 ${
                          isContrast
                            ? 'bg-black border-yellow-400/80 text-yellow-300'
                            : isLight
                            ? 'bg-slate-50/80 border-slate-200/90 shadow-inner'
                            : 'bg-slate-950 border-slate-800/80'
                        }`}
                      >
                        <MathRenderer math={f.latex} lang={lang} />
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div
                      className={`flex items-center justify-between pt-2 border-t text-xs ${
                        isContrast
                          ? 'border-yellow-500/40'
                          : isLight
                          ? 'border-slate-200'
                          : 'border-slate-800/60'
                      }`}
                    >
                      {onNavigateToLesson && (
                        <button
                          onClick={() => {
                            onNavigateToLesson(f.curriculumType, f.branch, f.lesson);
                            onClose();
                          }}
                          className={`font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                            isContrast
                              ? 'text-cyan-300 hover:text-cyan-200'
                              : isLight
                              ? 'text-indigo-600 hover:text-indigo-800'
                              : 'text-indigo-400 hover:text-indigo-300'
                          }`}
                        >
                          <span>{isArabic ? 'فتح الدرس' : 'View in Lesson'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}

                      <button
                        onClick={() => handleCopyLatex(f.id, f.latex)}
                        className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isCopied
                            ? isContrast
                              ? 'bg-emerald-900 border-emerald-400 text-emerald-200'
                              : isLight
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                              : 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                            : isContrast
                            ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                            : isLight
                            ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-950 shadow-xs'
                            : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                        title="Copy LaTeX Formula"
                      >
                        {isCopied ? (
                          <Check className={`w-3 h-3 ${isContrast ? 'text-emerald-300' : isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                        ) : (
                          <Copy className={`w-3 h-3 ${isContrast ? 'text-yellow-300' : isLight ? 'text-slate-600' : 'text-slate-400'}`} />
                        )}
                        <span>{isCopied ? (isArabic ? 'تم النسخ!' : 'Copied!') : isArabic ? 'نسخ LaTeX' : 'Copy LaTeX'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          className={`p-3.5 sm:p-4 border-t flex items-center justify-between text-xs shrink-0 ${
            isContrast
              ? 'border-yellow-400/80 bg-zinc-950 text-yellow-300'
              : isLight
              ? 'border-slate-200 bg-slate-50 text-slate-700 font-medium'
              : 'border-slate-800/80 bg-slate-900/60 text-slate-400'
          }`}
        >
          <span className="font-semibold">
            {isArabic
              ? `عرض ${toHindiDigits(filteredFormulas.length)} من ${toHindiDigits(allFormulas.length)} قانوناً رياضياً`
              : `Showing ${filteredFormulas.length} of ${allFormulas.length} mathematical formulas`}
          </span>
          <span className={isContrast ? 'text-yellow-400 font-mono' : isLight ? 'text-slate-500 font-mono' : 'text-slate-500 font-mono'}>
            {isArabic ? 'اضغط Esc للإغلاق' : 'Press Esc to close'}
          </span>
        </div>
      </div>
    </div>
  );
};
