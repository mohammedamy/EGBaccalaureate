import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Language } from '../i18n/translations';
import {
  searchEnglishDictionary,
  type DictionaryEntry,
} from '../data/dictionary/englishDictionary';
import { aiVoiceEngine } from '../services/aiVoiceEngine';
import {
  X,
  Search,
  Volume2,
  BookOpen,
  AlertTriangle,
  Layers,
  Copy,
  Check,
  Languages,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  initialQuery?: string;
}

export const EnglishDictionaryModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang = 'en',
  theme = 'dark',
  initialQuery = '',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [showArabicReference, setShowArabicReference] = useState(false);
  const [selectedWord, setSelectedWord] = useState<DictionaryEntry | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialQuery) {
        setQuery(initialQuery);
      }
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedWord(null);
    }
  }, [isOpen, initialQuery]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    return searchEnglishDictionary(query, selectedCategory, selectedPos);
  }, [query, selectedCategory, selectedPos]);

  // Default selected word
  useEffect(() => {
    if (results.length > 0 && !selectedWord) {
      setSelectedWord(results[0]);
    } else if (results.length > 0 && selectedWord && !results.some((r) => r.id === selectedWord.id)) {
      setSelectedWord(results[0]);
    }
  }, [results, selectedWord]);

  const handleSpeak = (text: string) => {
    aiVoiceEngine.speak(text, { lang: 'en-GB', rate: 0.95 });
  };

  const handleCopy = (entry: DictionaryEntry) => {
    const text = `${entry.word} (${entry.partOfSpeech}) ${entry.phonetic}: ${entry.definition}\nExample: "${entry.exampleSentence}"`;
    navigator.clipboard.writeText(text);
    setCopiedId(entry.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full max-w-5xl h-[88vh] max-h-[820px] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition-all ${
          isContrast
            ? 'bg-black border-2 border-violet-400 text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-violet-500/10'
            : 'bg-slate-900/95 border-slate-800 text-slate-100 shadow-violet-950/30'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`px-5 py-4 border-b flex items-center justify-between gap-4 shrink-0 ${
            isLight
              ? 'bg-slate-50/80 border-slate-200'
              : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white shadow-md shadow-violet-600/25">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight">
                  {isArabic ? 'القاموس الأكاديمي للغة الإنجليزية' : 'English Academic Lexicon & Dictionary'}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-400/30 uppercase">
                  MoE Grade 12
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isArabic
                  ? 'تعريفات إنجليزية دقيقة، متلازمات لفظية، تحذيرات للأخطاء الشائعة، ونطق صوتي مباشر'
                  : 'Precise English definitions, IPA phonetics, collocations, exam pitfalls & audio synthesis'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowArabicReference(!showArabicReference)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                showArabicReference
                  ? 'bg-violet-600 text-white border-violet-500'
                  : isLight
                  ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
              title={isArabic ? 'إظهار الترجمة العربية كمرجع' : 'Toggle Arabic translation reference'}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{isArabic ? 'الترجمة المرجعية' : 'AR Translation'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Filters Bar */}
        <div
          className={`px-5 py-3 border-b flex flex-wrap items-center gap-3 shrink-0 ${
            isLight ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-900/60 border-slate-800'
          }`}
        >
          {/* Search Input */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                isArabic
                  ? 'ابحث عن كلمة، متلازمة، أو مصطلح أكاديمي (مثل: piracy, resilience, sensible...)'
                  : 'Search word, collocation, or idiom (e.g., piracy, resilience, sensible)...'
              }
              className={`w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all focus:outline-hidden focus:ring-2 focus:ring-violet-500 ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                  : 'bg-slate-950 border-slate-800 text-white placeholder:text-slate-500'
              }`}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Part of Speech Filter */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs py-1">
            {[
              { id: 'all', label: 'All POS' },
              { id: 'noun', label: 'Noun' },
              { id: 'verb', label: 'Verb' },
              { id: 'adjective', label: 'Adj' },
              { id: 'idiom', label: 'Idiom' },
              { id: 'phrasal_verb', label: 'Phrasal' },
            ].map((pos) => (
              <button
                key={pos.id}
                type="button"
                onClick={() => setSelectedPos(pos.id)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedPos === pos.id
                    ? 'bg-violet-600 text-white shadow-sm'
                    : isLight
                    ? 'text-slate-600 hover:bg-slate-200'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                {pos.label}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-violet-500 ${
              isLight
                ? 'bg-white border-slate-300 text-slate-800'
                : 'bg-slate-950 border-slate-800 text-slate-200'
            }`}
          >
            <option value="all">📚 All MoE Units & Themes</option>
            <option value="media_literature">📰 Media, Piracy & Literature</option>
            <option value="society_wellbeing">🧠 Wellbeing, Health & Pioneers</option>
            <option value="science_tech">🚀 Space, Science & Technology</option>
            <option value="business_work">💼 Work, AI & Productivity</option>
            <option value="environment_energy">🌍 Environment & Sustainability</option>
            <option value="academic_rhetoric">✍️ Academic Writing & Rhetoric</option>
          </select>
        </div>

        {/* Modal Main Content: Split Pane */}
        <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden">
          {/* Word List Pane (Left / Desktop Sidebar) */}
          <div
            className={`w-full md:w-80 md:shrink-0 border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l flex flex-col overflow-hidden ${
              isLight ? 'bg-slate-50/50 border-slate-200' : 'bg-slate-950/40 border-slate-800'
            }`}
          >
            <div className="px-3.5 py-2 text-[11px] font-bold text-slate-400 flex items-center justify-between border-b border-slate-800/60">
              <span>{results.length} Headwords Found</span>
              <span className="text-violet-400 font-mono">A-Z Index</span>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-slate-800/40 p-2 space-y-1">
              {results.length === 0 ? (
                <div className="p-6 text-center text-slate-500 text-xs">
                  No vocabulary entries matching your query.
                </div>
              ) : (
                results.map((item) => {
                  const isSelected = selectedWord?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedWord(item)}
                      className={`w-full text-left rtl:text-right p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                          : isLight
                          ? 'hover:bg-slate-200/80 text-slate-800'
                          : 'hover:bg-slate-800/60 text-slate-200'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm truncate">
                            {item.word}
                          </span>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                              isSelected
                                ? 'bg-violet-800/60 text-violet-200'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {item.partOfSpeech}
                          </span>
                        </div>
                        <p
                          className={`text-[11px] truncate mt-0.5 ${
                            isSelected ? 'text-violet-200' : 'text-slate-400'
                          }`}
                        >
                          {item.definition}
                        </p>
                      </div>

                      {item.confusingWordsWarning && (
                        <span title="Contains Exam Pitfall Warning">
                          <AlertTriangle
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isSelected ? 'text-amber-300' : 'text-amber-400'
                            }`}
                          />
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Word Detail View (Right Main Pane) */}
          <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-7 space-y-6">
            {selectedWord ? (
              <div className="space-y-6">
                {/* Header Card */}
                <div
                  className={`p-5 rounded-2xl border relative overflow-hidden ${
                    isLight
                      ? 'bg-gradient-to-br from-violet-50 via-purple-50 to-white border-violet-200 shadow-sm'
                      : 'bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/40 border-slate-800 shadow-lg'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-violet-400">
                          {selectedWord.word}
                        </h1>
                        <span className="text-xs px-2.5 py-1 rounded-lg font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-400/30">
                          {selectedWord.partOfSpeech}
                        </span>
                        <span className="text-sm font-mono text-slate-400">
                          {selectedWord.phonetic}
                        </span>
                      </div>

                      {showArabicReference && (
                        <p className="text-sm font-bold text-amber-400 mt-2 font-arabic">
                          {selectedWord.arabicTranslation}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSpeak(selectedWord.word)}
                        className="p-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/30 transition-all cursor-pointer"
                        title="Listen to British English Pronunciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopy(selectedWord)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                          copiedId === selectedWord.id
                            ? 'bg-emerald-600 border-emerald-500 text-white'
                            : isLight
                            ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                            : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                        }`}
                        title="Copy Definition"
                      >
                        {copiedId === selectedWord.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Primary English Definition */}
                  <div className="mt-4 pt-4 border-t border-slate-800/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      English Definition:
                    </span>
                    <p className="text-sm sm:text-base font-medium leading-relaxed">
                      {selectedWord.definition}
                    </p>
                  </div>
                </div>

                {/* Confusing Words / Exam Pitfall Warning Alert */}
                {selectedWord.confusingWordsWarning && (
                  <div className="p-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 text-amber-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span>MoE Exam Pitfall & Trap Warning</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-amber-100">
                      {selectedWord.confusingWordsWarning}
                    </p>
                  </div>
                )}

                {/* Collocations & Prepositions */}
                {selectedWord.collocations.length > 0 && (
                  <div
                    className={`p-4 rounded-2xl border ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-400 block mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>High-Frequency Collocations & Prepositions:</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedWord.collocations.map((col, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Example Sentence */}
                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-400 block mb-1.5">
                    Authentic Contextual Example:
                  </span>
                  <blockquote className="text-xs sm:text-sm italic text-slate-200 border-l-2 rtl:border-r-2 border-violet-500 pl-3 rtl:pl-0 rtl:pr-3 py-0.5">
                    "{selectedWord.exampleSentence}"
                  </blockquote>
                </div>

                {/* Synonyms and Antonyms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedWord.synonyms.length > 0 && (
                    <div
                      className={`p-4 rounded-2xl border ${
                        isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-900/60 border-slate-800'
                      }`}
                    >
                      <span className="text-xs font-bold text-emerald-400 block mb-2">
                        Synonyms:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedWord.synonyms.map((syn, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setQuery(syn)}
                            className="px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all cursor-pointer"
                          >
                            {syn}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedWord.antonyms.length > 0 && (
                    <div
                      className={`p-4 rounded-2xl border ${
                        isLight ? 'bg-rose-50/50 border-rose-200' : 'bg-slate-900/60 border-slate-800'
                      }`}
                    >
                      <span className="text-xs font-bold text-rose-400 block mb-2">
                        Antonyms:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedWord.antonyms.map((ant, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setQuery(ant)}
                            className="px-2 py-0.5 rounded-md text-xs font-medium bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/20 transition-all cursor-pointer"
                          >
                            {ant}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-500">
                <BookOpen className="w-12 h-12 text-slate-600 mb-3" />
                <h3 className="text-sm font-bold text-slate-400">Select a Word to View Full Entry</h3>
                <p className="text-xs max-w-sm mt-1">
                  Click on any word on the left or type a search term to inspect phonetics, collocations, and exam traps.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
