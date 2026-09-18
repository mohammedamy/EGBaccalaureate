import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Lock, ShieldAlert, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { MathRenderer } from './MathRenderer';
import { type ProgressiveHint } from '../services/aiStudyHintService';

interface ProgressiveHintDrawerProps {
  hints: ProgressiveHint[];
  lang: 'en' | 'ar';
  isHots?: boolean;
}

export const ProgressiveHintDrawer: React.FC<ProgressiveHintDrawerProps> = ({
  hints,
  lang,
  isHots = false,
}) => {
  const isAr = lang === 'ar';
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [unlockedTier, setUnlockedTier] = useState<number>(0);

  const handleUnlockNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (unlockedTier < hints.length) {
      setUnlockedTier((prev) => prev + 1);
      if (!isOpen) setIsOpen(true);
    }
  };

  const getTierIcon = (tier: number) => {
    if (tier === 1) return <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    if (tier === 2) return <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />;
    return <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
  };

  return (
    <div className="my-2.5 rounded-xl border border-slate-800 bg-slate-950/70 overflow-hidden backdrop-blur-sm transition-all">
      {/* Header Bar */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2 flex items-center justify-between cursor-pointer hover:bg-slate-900/60 transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className={`p-1 rounded-md ${unlockedTier > 0 ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-400'}`}>
            <Lightbulb className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-300">
            {isAr ? 'مساعد الذكاء الاصطناعي للتلميحات المتدرجة' : 'Progressive AI Study Hints (KaTeX)'}
          </span>
          {isHots && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold">
              {isAr ? 'فكرة عليا' : 'HOTS'}
            </span>
          )}
          {unlockedTier > 0 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {isAr ? `مفعل: المستوى ${unlockedTier} من ٣` : `Tier ${unlockedTier}/3 Unlocked`}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {unlockedTier < hints.length && (
            <button
              type="button"
              onClick={handleUnlockNext}
              className="px-2.5 py-1 rounded-lg text-[11px] font-extrabold bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 border border-amber-500/40 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Lightbulb className="w-3 h-3" />
              <span>
                {unlockedTier === 0
                  ? (isAr ? 'إظهار التلميح الأول' : 'Reveal Hint 1')
                  : (isAr ? `كشف تلميح المستوى (${unlockedTier + 1})` : `Unlock Tier ${unlockedTier + 1}`)}
              </span>
            </button>
          )}

          <button
            type="button"
            className="text-slate-400 hover:text-slate-200 p-0.5"
            aria-label={isOpen ? 'Collapse hints' : 'Expand hints'}
          >
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Unlocked Hints Body */}
      {isOpen && (
        <div className="px-3.5 pb-3.5 pt-1 space-y-2.5 border-t border-slate-800/80 bg-slate-900/30">
          {unlockedTier === 0 && (
            <div className="py-3 text-center text-xs text-slate-400 space-y-2">
              <p>
                {isAr
                  ? 'لم تقم بفتح أي تلميح بعد. تساعدك التلميحات المتدرجة على تذكر القانون وخارطة الحل دون حرق الإجابة النهائية.'
                  : 'No hints unlocked yet. Progressive hints help jog your memory and guide your derivation without giving away the answer.'}
              </p>
              <button
                type="button"
                onClick={handleUnlockNext}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAr ? 'افتح التلميح المفاهيمي الأول' : 'Unlock Tier 1: Governing Law'}</span>
              </button>
            </div>
          )}

          {hints.slice(0, unlockedTier).map((hint) => (
            <div
              key={hint.tier}
              className={`p-3 rounded-xl border text-xs space-y-1.5 transition-all ${
                hint.tier === 1
                  ? 'bg-cyan-950/20 border-cyan-500/30'
                  : hint.tier === 2
                  ? 'bg-indigo-950/20 border-indigo-500/30'
                  : 'bg-amber-950/20 border-amber-500/30'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {getTierIcon(hint.tier)}
                <span
                  className={
                    hint.tier === 1
                      ? 'text-cyan-300'
                      : hint.tier === 2
                      ? 'text-indigo-300'
                      : 'text-amber-300'
                  }
                >
                  {isAr ? hint.titleAr : hint.titleEn}
                </span>
              </div>
              <div className="text-slate-200 pl-5 rtl:pr-5 rtl:pl-0">
                <MathRenderer math={isAr ? hint.contentAr : hint.contentEn} lang={lang} />
              </div>
            </div>
          ))}

          {/* Locked Next Tier Teaser */}
          {unlockedTier > 0 && unlockedTier < hints.length && (
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-dashed border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-slate-500" />
                <span>
                  {isAr
                    ? `المستوى التالي مغلق: ${hints[unlockedTier].titleAr}`
                    : `Next tier locked: ${hints[unlockedTier].titleEn}`}
                </span>
              </div>
              <button
                type="button"
                onClick={handleUnlockNext}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
              >
                <span>{isAr ? 'فتح' : 'Unlock'}</span>
                <ArrowRight className="w-3 h-3 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
