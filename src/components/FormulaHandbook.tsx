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
            l.formulas.forEach((f, idx) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md animate-fadeIn no-print">
      <div
        className={`w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-colors ${
          isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-950 border-slate-800 text-slate-100'
        }`}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800/80 flex items-center justify-between gap-4 bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-100 flex items-center gap-2">
                <span>{isArabic ? 'دستور القوانين والمعادلات الرسمية' : 'Official Mathematical Formula Handbook'}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                  {isArabic ? `${toHindiDigits(allFormulas.length)} قانوناً` : `${allFormulas.length} Formulas`}
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isArabic
                  ? 'المرجع الشامل لجميع قوانين الثانوية العامة والبكالوريا مع إمكانية البحث والنسخ والانتقال للدرس'
                  : 'Comprehensive quick-reference formula sheet with live search, LaTeX copy, and direct lesson navigation'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900/40 space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isArabic
                    ? 'ابحث باسم القانون، المعادلة، الفرع، أو الرمز الرياضي...'
                    : 'Search formula by name, branch, theorem, or math symbol...'
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 rtl:pl-4 rtl:pr-10 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Curriculum Track Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 shrink-0 w-full sm:w-auto justify-center">
              <button
                onClick={() => {
                  setSelectedCurriculum('all');
                  setSelectedBranchId('all');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCurriculum === 'all'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'جميع المناهج' : 'All Tracks'}
              </button>
              <button
                onClick={() => {
                  setSelectedCurriculum('thanaweya');
                  setSelectedBranchId('all');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCurriculum === 'thanaweya'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'الثانوية العامة' : 'Thanaweya'}
              </button>
              <button
                onClick={() => {
                  setSelectedCurriculum('egbac');
                  setSelectedBranchId('all');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCurriculum === 'egbac'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'البكالوريا' : 'EG-Bac'}
              </button>
            </div>

            {/* Branch Filter Dropdown */}
            <div className="w-full sm:w-56 shrink-0">
              <select
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500 outline-none cursor-pointer"
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
              <Layers className="w-12 h-12 text-slate-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-300">
                {isArabic ? 'لم يتم العثور على قوانين مطابقة' : 'No matching formulas found'}
              </h4>
              <p className="text-xs text-slate-500">
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
                    className={`rounded-2xl p-4 sm:p-5 border transition-all flex flex-col justify-between space-y-3 shadow-md group hover:border-indigo-500/50 ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'
                    }`}
                  >
                    <div className="space-y-2.5">
                      {/* Card Header: Tag & Track */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${
                            isEgBac
                              ? 'bg-teal-950/60 text-teal-400 border-teal-800/60'
                              : 'bg-indigo-950/60 text-indigo-400 border-indigo-800/60'
                          }`}
                        >
                          {isEgBac ? 'EG-Bac STEM' : isArabic ? 'ثانوية عامة' : 'Thanaweya'}
                        </span>

                        <span className="text-[11px] font-semibold text-slate-400 truncate">
                          {isArabic ? `${f.branch.titleAr} • ${f.chapterTitleAr}` : `${f.branch.titleEn} • ${f.chapterTitleEn}`}
                        </span>
                      </div>

                      {/* Formula Title */}
                      <h5 className="text-xs font-bold text-slate-200">
                        {isArabic ? f.labelAr : f.labelEn}
                      </h5>

                      {/* Formula KaTeX Equation */}
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-center overflow-x-auto my-1">
                        <MathRenderer math={f.latex} lang={lang} />
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                      {onNavigateToLesson && (
                        <button
                          onClick={() => {
                            onNavigateToLesson(f.curriculumType, f.branch, f.lesson);
                            onClose();
                          }}
                          className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>{isArabic ? 'فتح الدرس' : 'View in Lesson'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}

                      <button
                        onClick={() => handleCopyLatex(f.id, f.latex)}
                        className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                            : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                        title="Copy LaTeX Formula"
                      >
                        {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
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
        <div className="p-3.5 sm:p-4 border-t border-slate-800/80 bg-slate-900/60 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="font-semibold">
            {isArabic
              ? `عرض ${toHindiDigits(filteredFormulas.length)} من ${toHindiDigits(allFormulas.length)} قانوناً رياضياً`
              : `Showing ${filteredFormulas.length} of ${allFormulas.length} mathematical formulas`}
          </span>
          <span className="hidden sm:inline text-slate-500">
            {isArabic ? 'اضغط Esc للإغلاق' : 'Press Esc to close'}
          </span>
        </div>
      </div>
    </div>
  );
};
