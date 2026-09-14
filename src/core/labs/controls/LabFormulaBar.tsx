import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { MathRenderer } from '../../../components/MathRenderer';
import type { LabFormula } from '../types';

interface LabFormulaBarProps {
  formulas?: LabFormula[];
  lang: 'en' | 'ar';
}

export const LabFormulaBar: React.FC<LabFormulaBarProps> = ({ formulas, lang }) => {
  const isAr = lang === 'ar';
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (!formulas || formulas.length === 0) return null;

  const primaryFormula = formulas[0];

  return (
    <div
      className="rounded-xl border border-indigo-500/30 bg-slate-950/80 backdrop-blur-md shadow-md overflow-hidden transition-all"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Header / Primary Equation Bar */}
      <div className="px-3.5 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shrink-0">
            <BookOpen className="w-3.5 h-3.5" />
          </div>

          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <span className="text-xs font-bold text-slate-300 shrink-0">
              {isAr ? primaryFormula.labelAr : primaryFormula.labelEn}:
            </span>
            <div className="text-sm font-mono text-cyan-300 overflow-x-auto">
              <MathRenderer math={primaryFormula.tex} inline />
            </div>
          </div>
        </div>

        {formulas.length > 1 && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-semibold text-indigo-300 hover:text-indigo-200 bg-indigo-500/10 hover:bg-indigo-500/20 px-2 py-1 rounded-lg border border-indigo-500/30 transition-all shrink-0"
          >
            <span>{formulas.length} {isAr ? 'قوانين' : 'Formulas'}</span>
            {isExpanded ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
        )}
      </div>

      {/* Expanded Formulas List */}
      {isExpanded && formulas.length > 1 && (
        <div className="px-4 py-3 border-t border-slate-800/80 bg-slate-900/60 space-y-2.5">
          {formulas.slice(1).map((formula) => (
            <div
              key={formula.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800"
            >
              <div>
                <span className="text-xs font-bold text-slate-200">
                  {isAr ? formula.labelAr : formula.labelEn}
                </span>
                {(formula.descriptionEn || formula.descriptionAr) && (
                  <p className="text-[11px] text-slate-400">
                    {isAr ? formula.descriptionAr : formula.descriptionEn}
                  </p>
                )}
              </div>
              <div className="text-sm font-mono text-cyan-300">
                <MathRenderer math={formula.tex} inline />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
