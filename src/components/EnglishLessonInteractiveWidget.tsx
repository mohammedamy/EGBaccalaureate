import React, { useState, useMemo } from 'react';
import type { Language } from '../i18n/translations';
import {
  searchEnglishDictionary,
} from '../data/dictionary/englishDictionary';
import {
  Search,
  Volume2,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Copy,
  Check,
  Languages,
  Sliders,
} from 'lucide-react';

import { EnglishAudioPhoneticsStudio } from './labs/EnglishAudioPhoneticsStudio';

interface Props {
  type: 'english_dictionary' | 'english_translation' | 'english_grammar_lab' | 'english_audio_lab';
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export const EnglishLessonInteractiveWidget: React.FC<Props> = ({
  type,
  lang: _lang = 'en',
  theme = 'dark',
  isFullscreen = false,
}) => {
  if (type === 'english_audio_lab') {
    return <EnglishAudioPhoneticsStudio lang={_lang} theme={theme} isFullscreen={isFullscreen} />;
  }

  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // State for Dictionary
  const [dictQuery, setDictQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [copiedWordId, setCopiedWordId] = useState<string | null>(null);

  // State for Translation Workbench
  const [selectedTranslationId, setSelectedTranslationId] = useState<number>(0);
  const [studentInput, setStudentInput] = useState('');
  const [feedbackRevealed, setFeedbackRevealed] = useState(false);

  // State for Grammar Lab
  const [grammarMode, setGrammarMode] = useState<'inversion' | 'passive' | 'reported'>('inversion');
  const [selectedGrammarId, setSelectedGrammarId] = useState<number>(0);
  const [isTransformed, setIsTransformed] = useState(false);

  // Audio Pronunciation
  const playAudio = (word: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedWordId(id);
    setTimeout(() => setCopiedWordId(null), 2000);
  };

  // Filtered dictionary words
  const filteredWords = useMemo(() => {
    let list = searchEnglishDictionary(dictQuery);
    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.category === selectedCategory);
    }
    if (selectedPos !== 'all') {
      list = list.filter((item) => item.partOfSpeech.toLowerCase().includes(selectedPos));
    }
    return list;
  }, [dictQuery, selectedCategory, selectedPos]);

  // Translation Workbench Data
  const translationScenarios = [
    {
      id: 0,
      domain: 'Geopolitics & Economy',
      sourceEn: 'Economic stability cannot be achieved unless comprehensive reforms are implemented to curb corruption and foster entrepreneurship.',
      modelArabic: 'لا يمكن تحقيق الاستقرار الاقتصادي إلا إذا طُبقت إصلاحات شاملة للحد من الفساد وتشجيع ريادة الأعمال.',
      machineError: 'الاستقرار الاقتصادي لا يمكن تحقيقه إذا لم تكن هناك إصلاحات شاملة تطبق لمنع الفساد وتغذية المشاريع.',
      syntacticRules: [
        { label: 'Negative Restriction', rule: "Translating 'cannot... unless' with Arabic exceptional restriction 'لا يمكن... إلا إذا' produces natural high-register flow." },
        { label: 'Causative Vocabulary', rule: "'curb corruption' = كبح / الحد من الفساد (avoid literal 'لجم' or 'منع')." },
        { label: 'Standard Lexicon', rule: "'foster entrepreneurship' = تشجيع / رعاية ريادة الأعمال." }
      ]
    },
    {
      id: 1,
      domain: 'Science & Sustainable Energy',
      sourceEn: 'Technological innovation plays a pivotal role in accelerating the transition toward clean, renewable energy sources.',
      modelArabic: 'يلعب الابتكار التكنولوجي دوراً محورياً في تسريع وتيرة التحول نحو مصادر الطاقة النظيفة والمتجددة.',
      machineError: 'التكنولوجيا المبتكرة تلعب دور مفصل في سرعة الانتقال للطاقة النظيفة.',
      syntacticRules: [
        { label: 'Verbal Clause Priority', rule: "Beginning the Arabic sentence with the verb 'يلعب الابتكار...' creates fluent journalistic prose." },
        { label: 'Metaphorical Precision', rule: "'pivotal role' translates idiomatically to 'دوراً محورياً'." },
        { label: 'Pacing Phrase', rule: "'accelerating the transition' = تسريع وتيرة التحول." }
      ]
    },
    {
      id: 2,
      domain: 'Education & Society',
      sourceEn: 'Developing critical thinking skills empowers young scholars to navigate information challenges effectively.',
      modelArabic: 'إن تنمية مهارات التفكير النقدي تمكن الباحثين الشباب من التعامل بفاعلية مع تحديات عصر المعلومات.',
      machineError: 'تطوير تفكير حرج يقوي الطلاب الصغار للإبحار في تحديات المعلومات.',
      syntacticRules: [
        { label: 'False Cognates', rule: "'critical' here means 'نقدي' (pertaining to critique), not 'حرج / خطير'." },
        { label: 'Action Verb', rule: "'empowers' translates accurately to 'تمكن' rather than literal physical 'تقوي'." },
        { label: 'Collocation', rule: "'navigate challenges' translates as 'التعامل مع التحديات' rather than nautical 'الإبحار'." }
      ]
    }
  ];

  // Grammar Lab Data
  const grammarScenarios = {
    inversion: [
      {
        id: 0,
        type: 'Third Conditional Inversion (Had)',
        original: 'If the emergency generator had functioned properly, the hospital equipment would not have shut down.',
        transformed: 'Had the emergency generator functioned properly, the hospital equipment would not have shut down.',
        rule: 'Third Conditional Inversion: Omit "If" and invert "Had" with the Subject. Structure: Had + Subject + Past Participle.'
      },
      {
        id: 1,
        type: 'Second Conditional Inversion (Were to)',
        original: 'If the board of directors offered him the executive position, he would accept it immediately.',
        transformed: 'Were the board of directors to offer him the executive position, he would accept it immediately.',
        rule: 'Second Conditional Inversion: Omit "If", begin with "Were", and use "to-infinitive" for the action verb. Structure: Were + Subject + to-Infinitive.'
      },
      {
        id: 2,
        type: 'First Conditional Inversion (Should)',
        original: 'If you require any technical assistance during the online exam, contact the invigilator.',
        transformed: 'Should you require any technical assistance during the online exam, contact the invigilator.',
        rule: 'First Conditional Inversion: Omit "If" and use "Should" followed by the Subject and the base verb (bare infinitive).'
      }
    ],
    passive: [
      {
        id: 0,
        type: 'Reporting Passive (Personal Structure)',
        original: 'People believe that the legendary Pharaoh hidden tomb contains undiscovered treasures.',
        transformed: 'The legendary Pharaoh hidden tomb is believed to contain undiscovered treasures.',
        rule: 'Personal Passive: Subject of the that-clause + passive reporting verb (is/are believed) + to-infinitive.'
      },
      {
        id: 1,
        type: 'Reporting Passive (Past Action with Perfect Infinitive)',
        original: 'Detectives report that the international cybercriminals fled the country three days ago.',
        transformed: 'The international cybercriminals are reported to have fled the country three days ago.',
        rule: 'When the reported event occurred prior to the present reporting verb, use the Perfect Infinitive: to have + Past Participle.'
      },
      {
        id: 2,
        type: 'Causative Passive (Have something done)',
        original: 'The company hired professional technicians to install the solar panels.',
        transformed: 'The company had the solar panels installed by professional technicians.',
        rule: 'Causative Passive: Subject + have/get + Object + Past Participle.'
      }
    ],
    reported: [
      {
        id: 0,
        type: 'Indirect Wh-Question Word Order',
        original: '"Why did the management cancel the scheduled conference?" asked the journalist.',
        transformed: 'The journalist inquired why the management had cancelled the scheduled conference.',
        rule: 'Indirect Questions: Affirmative word order (Wh-word + Subject + Verb). Invert no auxiliaries and backshift past simple to past perfect.'
      },
      {
        id: 1,
        type: 'Reported Advice & Infinitive',
        original: '"You had better not leave your revision until the night before," the teacher advised us.',
        transformed: 'The teacher advised us not to leave our revision until the night before.',
        rule: 'Pattern: advise + Object + (not) to + Infinitive.'
      }
    ]
  };

  return (
    <div className={`w-full rounded-2xl border transition-all ${
      isContrast
        ? 'bg-black border-yellow-400 text-yellow-300'
        : isLight
        ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
        : 'bg-slate-900/90 border-slate-700/80 text-slate-100 shadow-lg'
    } ${isFullscreen ? 'p-8' : 'p-4 sm:p-6'}`}>

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-700/40">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-400">
            {type === 'english_dictionary' && <BookOpen className="w-6 h-6" />}
            {type === 'english_translation' && <Languages className="w-6 h-6" />}
            {type === 'english_grammar_lab' && <Sliders className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <span>
                {type === 'english_dictionary' && 'Academic English Dictionary & Collocation Lexicon'}
                {type === 'english_translation' && 'Contrastive Translation & Syntax Workbench'}
                {type === 'english_grammar_lab' && 'Interactive Syntactic Transformer & Grammar Lab'}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30 font-mono">
                Secondary 3
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              {type === 'english_dictionary' && 'Explore high-yield Ministry vocabulary, IPA phonetics, and confusing word traps.'}
              {type === 'english_translation' && 'Analyze contrastive syntax, word order, and false cognates in English-Arabic translation.'}
              {type === 'english_grammar_lab' && 'Transform active/passive voices, conditional inversions, and reported speech.'}
            </p>
          </div>
        </div>

        {/* Action button to open full dictionary modal */}
        {type !== 'english_dictionary' && (
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-english-dictionary'));
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-violet-600/20 text-violet-300 hover:bg-violet-600/30 border border-violet-500/40 transition-all cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Full Dictionary</span>
          </button>
        )}
      </div>

      {/* 1. DICTIONARY WIDGET */}
      {type === 'english_dictionary' && (
        <div className="space-y-5">
          {/* Search bar & filters */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={dictQuery}
                onChange={(e) => setDictQuery(e.target.value)}
                placeholder="Search vocabulary (e.g. piracy, economic, pioneer, astronaut, burnout)..."
                className={`w-full pl-9 pr-4 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-violet-500'
                    : 'bg-slate-800/80 border-slate-700 text-white focus:ring-violet-400'
                }`}
              />
            </div>

            {/* POS Filter */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {['all', 'noun', 'verb', 'adjective'].map((pos) => (
                <button
                  key={pos}
                  onClick={() => setSelectedPos(pos)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize border transition-all cursor-pointer ${
                    selectedPos === pos
                      ? 'bg-violet-600 text-white border-violet-500'
                      : isLight
                      ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-semibold shrink-0">Units:</span>
            {[
              { id: 'all', label: 'All Units' },
              { id: 'media', label: 'Media & Piracy (Unit 1)' },
              { id: 'women_pioneers', label: 'Women Pioneers (Unit 2)' },
              { id: 'space_science', label: 'Space Science (Unit 3)' },
              { id: 'wellbeing', label: 'Wellbeing (Unit 4)' },
              { id: 'confusing_words', label: '⚠️ Confusing Words' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-full whitespace-nowrap text-xs font-medium border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-violet-500/20 text-violet-300 border-violet-500/50'
                    : isLight
                    ? 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Word List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-1">
            {filteredWords.length === 0 ? (
              <div className="col-span-2 text-center py-12 text-slate-400">
                <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p>No headwords found matching &quot;{dictQuery}&quot;.</p>
              </div>
            ) : (
              filteredWords.map((entry) => (
                <div
                  key={entry.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isLight
                      ? 'bg-slate-50/70 border-slate-200 hover:border-violet-300'
                      : 'bg-slate-800/50 border-slate-700/70 hover:border-violet-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-violet-400">{entry.word}</span>
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-700/40 text-slate-300">
                          {entry.phonetic}
                        </span>
                        <button
                          onClick={() => playAudio(entry.word)}
                          className="p-1 rounded hover:bg-violet-500/20 text-violet-400 cursor-pointer"
                          title="Listen to pronunciation"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 capitalize">
                        {entry.partOfSpeech}
                      </span>
                    </div>

                    <button
                      onClick={() => copyToClipboard(entry.id, `${entry.word} (${entry.partOfSpeech}): ${entry.definition}`)}
                      className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-700/50 cursor-pointer"
                      title="Copy entry"
                    >
                      {copiedWordId === entry.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                    {entry.definition}
                  </p>

                  <div className="p-2 rounded bg-slate-900/40 border border-slate-700/40 text-xs italic text-slate-300 mb-2">
                    &quot;{entry.exampleSentence}&quot;
                  </div>

                  {entry.confusingWordsWarning && (
                    <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
                      <div className="flex items-center gap-1 font-bold text-[11px] mb-1">
                        <AlertTriangle className="w-3 h-3 text-amber-400" />
                        <span>Exam Trap:</span>
                      </div>
                      <p className="text-[11px] leading-tight text-amber-200">
                        {entry.confusingWordsWarning}
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* 2. TRANSLATION WORKBENCH */}
      {type === 'english_translation' && (
        <div className="space-y-6">
          {/* Scenario Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {translationScenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => {
                  setSelectedTranslationId(scen.id);
                  setFeedbackRevealed(false);
                  setStudentInput('');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all whitespace-nowrap cursor-pointer ${
                  selectedTranslationId === scen.id
                    ? 'bg-violet-600 text-white border-violet-500 shadow-sm'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                Case {scen.id + 1}: {scen.domain}
              </button>
            ))}
          </div>

          {/* Active Translation Case */}
          {(() => {
            const currentCase = translationScenarios[selectedTranslationId];
            return (
              <div className="space-y-4">
                {/* Source English Sentence Card */}
                <div className="p-4 rounded-xl border border-violet-500/30 bg-violet-950/20">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                      Source Sentence (English)
                    </span>
                    <button
                      onClick={() => playAudio(currentCase.sourceEn)}
                      className="flex items-center gap-1 text-xs text-violet-300 hover:text-white cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Audio</span>
                    </button>
                  </div>
                  <p className="text-base font-semibold text-white leading-relaxed">
                    &quot;{currentCase.sourceEn}&quot;
                  </p>
                </div>

                {/* Student Practice Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span>Draft your Arabic translation below:</span>
                    <span className="text-[11px] text-slate-400">Press &quot;Compare with Model Translation&quot;</span>
                  </label>
                  <textarea
                    rows={3}
                    dir="rtl"
                    value={studentInput}
                    onChange={(e) => setStudentInput(e.target.value)}
                    placeholder="اكتب ترجمتك المقترحة هنا باللغة العربية الفصحى..."
                    className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-violet-500'
                        : 'bg-slate-800/80 border-slate-700 text-white focus:ring-violet-400'
                    }`}
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={() => setFeedbackRevealed(true)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-violet-600 text-white hover:bg-violet-500 transition-all shadow-md cursor-pointer"
                    >
                      Compare with Model Translation
                    </button>
                  </div>
                </div>

                {/* Model Translation & Contrastive Analysis */}
                {feedbackRevealed && (
                  <div className="space-y-4 pt-4 border-t border-slate-700/50 animate-fadeIn">
                    {/* Model vs Machine */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Model Arabic */}
                      <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                          <Check className="w-4 h-4" />
                          <span>Official Model Translation (الترجمة النموذجية المعتمدة)</span>
                        </div>
                        <p dir="rtl" className="text-sm font-bold text-emerald-200 leading-relaxed">
                          {currentCase.modelArabic}
                        </p>
                      </div>

                      {/* Machine Translation Trap */}
                      <div className="p-4 rounded-xl border border-rose-500/40 bg-rose-950/20">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 mb-2">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Common Machine / Literal Error (فخ الترجمة الحرفية)</span>
                        </div>
                        <p dir="rtl" className="text-sm line-through text-rose-300/80 leading-relaxed">
                          {currentCase.machineError}
                        </p>
                      </div>
                    </div>

                    {/* Linguistic Contrastive Rules */}
                    <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 space-y-2">
                      <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Contrastive Linguistic Rationales (القواعد التقابلية)</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {currentCase.syntacticRules.map((r, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/50 text-xs">
                            <div className="font-bold text-white mb-1">{r.label}</div>
                            <div className="text-slate-300 text-[11px] leading-relaxed">{r.rule}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* 3. GRAMMAR LAB WIDGET */}
      {type === 'english_grammar_lab' && (
        <div className="space-y-6">
          {/* Mode Selector */}
          <div className="flex items-center gap-2 border-b border-slate-700 pb-3">
            {[
              { id: 'inversion', label: 'Conditional Inversion (Should / Were / Had)' },
              { id: 'passive', label: 'Advanced Reporting Passive & Causatives' },
              { id: 'reported', label: 'Indirect Questions & Discourse' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setGrammarMode(m.id as any);
                  setSelectedGrammarId(0);
                  setIsTransformed(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  grammarMode === m.id
                    ? 'bg-violet-600 text-white shadow-sm'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Current Grammar Scenario */}
          {(() => {
            const list = grammarScenarios[grammarMode];
            const active = list[selectedGrammarId];

            return (
              <div className="space-y-5">
                {/* Case Selector Buttons */}
                <div className="flex items-center gap-2">
                  {list.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedGrammarId(idx);
                        setIsTransformed(false);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selectedGrammarId === idx
                          ? 'bg-violet-500/20 text-violet-300 border-violet-500/60'
                          : 'bg-slate-800/40 text-slate-400 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      {item.type}
                    </button>
                  ))}
                </div>

                {/* Transformation Stage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                  {/* Original Sentence */}
                  <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Standard Sentence Structure
                      </span>
                      <p className="text-sm sm:text-base font-semibold text-slate-200 leading-relaxed">
                        &quot;{active.original}&quot;
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/50 text-xs text-slate-400">
                      Click the button below to transform syntactically.
                    </div>
                  </div>

                  {/* Transformed Sentence */}
                  <div className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isTransformed
                      ? 'border-violet-500 bg-violet-950/20 shadow-md'
                      : 'border-dashed border-slate-700 bg-slate-900/30'
                  }`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2 block">
                        Transformed Syntactic Structure
                      </span>
                      {isTransformed ? (
                        <p className="text-sm sm:text-base font-bold text-violet-200 leading-relaxed animate-fadeIn">
                          &quot;{active.transformed}&quot;
                        </p>
                      ) : (
                        <p className="text-sm text-slate-500 italic">
                          Click &quot;Transform Sentence&quot; to execute structural inversion / passive rewrite.
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-end">
                      <button
                        onClick={() => setIsTransformed((prev) => !prev)}
                        className="px-4 py-1.5 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white transition-all shadow cursor-pointer"
                      >
                        {isTransformed ? 'Reset' : 'Transform Sentence'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Explanation Card */}
                {isTransformed && (
                  <div className="p-4 rounded-xl border border-violet-500/30 bg-violet-950/10 text-xs animate-fadeIn">
                    <div className="font-bold text-violet-300 flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span>Syntactic Rule & Exam Tip:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{active.rule}</p>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
