import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import { RealisticVocalTractSchematic, type ArticulatoryPlace } from './RealisticVocalTractSchematic';
import {
  SPANISH_PHONETICS_DATA,
  SPANISH_VERB_TENSES_DATA,
  SPANISH_PRONOUNS_DATA,
  SPANISH_CONTRASTS_DATA,
  SPANISH_SITUATIONS_DATA,
  type SpanishPhoneticRule,
  type SpanishVerbTenseRule,
  type SpanishPronounRule,
  type SpanishContrastRule,
} from '../../data/audioLab/spanishAudioLabData';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  Compass,
  Activity,
  RotateCcw,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { aiVoiceEngine } from '../../services/aiVoiceEngine';
import { StudioVoiceSelector } from './StudioVoiceSelector';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: StudioTab;
}

export type StudioTab = 'fonetica' | 'tempi_verbali' | 'pronomi' | 'contrastes' | 'situaciones';

export const SpanishLanguageStudio: React.FC<Props> = ({
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'fonetica',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active Tab
  const [activeTab, setActiveTab] = useState<StudioTab>(initialTab);

  // Audio Engine Settings
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string | null>(null);
  const [currentlyPlayingText, setCurrentlyPlayingText] = useState<string | null>(null);

  // Tab 1: Phonetics
  const [selectedPhonetic, setSelectedPhonetic] = useState<SpanishPhoneticRule>(SPANISH_PHONETICS_DATA[0]);

  const spanishPlace = useMemo<ArticulatoryPlace>(() => {
    const sym = selectedPhonetic.symbol.toLowerCase();
    if (sym.includes('ñ')) return 'palatal';
    if (sym.includes('ll') || sym.includes('y')) return 'palatal';
    if (sym.includes('ch')) return 'post_alveolar';
    if (sym.includes('j') || sym.includes('g')) return 'velar';
    if (sym.includes('z') || sym.includes('c')) return 'dental';
    if (sym.includes('b') || sym.includes('v')) return 'bilabial';
    if (sym.includes('rr') || sym.includes('r')) return 'alveolar';
    return 'alveolar';
  }, [selectedPhonetic.symbol]);

  // Tab 2: Verb Tenses
  const [selectedTense, setSelectedTense] = useState<SpanishVerbTenseRule>(SPANISH_VERB_TENSES_DATA[0]);
  const [verbConjugationType, setVerbConjugationType] = useState<'ar' | 'er' | 'ir'>('ar');

  // Tab 3: Pronouns
  const [selectedPronounCategory, setSelectedPronounCategory] = useState<SpanishPronounRule>(SPANISH_PRONOUNS_DATA[0]);

  // Tab 4: Contrasts (Ser vs Estar & Por vs Para)
  const [selectedContrast, setSelectedContrast] = useState<SpanishContrastRule>(SPANISH_CONTRASTS_DATA[0]);

  // Tab 5: Situations Trainer
  const [currentSitIndex, setCurrentSitIndex] = useState<number>(0);
  const [chosenSitChoice, setChosenSitChoice] = useState<'correct' | 'trap' | null>(null);
  const [situationScore, setSituationScore] = useState<number>(0);

  // AI Vocal Engine Spanish pronunciation
  const speakSpanish = (text: string, customRate?: number) => {
    aiVoiceEngine.speak(text, {
      lang: 'es-ES',
      voiceName: selectedVoiceName || undefined,
      rate: customRate || speechRate,
      onStart: () => setCurrentlyPlayingText(text),
      onEnd: () => setCurrentlyPlayingText(null),
      onError: () => setCurrentlyPlayingText(null),
    });
  };

  const stopAudio = () => {
    aiVoiceEngine.stopAll();
    setCurrentlyPlayingText(null);
  };

  // Color theme helpers
  const bgClass = isLight
    ? 'bg-amber-50/70 text-stone-900'
    : isContrast
    ? 'bg-black text-white border-2 border-amber-400'
    : 'bg-stone-950 text-stone-100';

  const cardBgClass = isLight
    ? 'bg-white border-stone-200 shadow-sm'
    : isContrast
    ? 'bg-zinc-950 border-amber-400'
    : 'bg-stone-900/80 border-stone-800 shadow-lg';

  const tabActiveBg = isLight
    ? 'bg-amber-600 text-white shadow-md'
    : 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-amber-900/40';

  const tabInactiveBg = isLight
    ? 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
    : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200';

  return (
    <div
      className={`border transition-all ${bgClass} ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0 p-4 sm:p-6' : 'rounded-2xl p-4 sm:p-6 my-6'
      }`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Studio Header */}
      <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b ${
        isLight ? 'border-stone-200' : 'border-stone-800/60'
      }`}>
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-950/50">
            <span className="text-2xl">🇪🇸</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                isLight ? 'text-amber-950 font-extrabold' : 'bg-gradient-to-r from-amber-400 via-yellow-200 to-red-400 bg-clip-text text-transparent'
              }`}>
                Estudio de Lengua Española y Fonética
              </h2>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                isLight
                  ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}>
                Thanaweya & EG-Bac B1/B2
              </span>
            </div>
            <p className={`text-xs sm:text-sm mt-0.5 ${isLight ? 'text-stone-700 font-medium' : 'text-stone-400'}`}>
              استوديو محاكاة الصوتيات والقواعد والمواقف التواصلية للغة الإسبانية (نظام النطق الذكي es-ES)
            </p>
          </div>
        </div>

        {/* Speed Controls & AI Vocal Engine */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <StudioVoiceSelector
            lang="es-ES"
            speechRate={speechRate}
            onRateChange={setSpeechRate}
            selectedVoiceName={selectedVoiceName}
            onVoiceChange={setSelectedVoiceName}
            themeColor="amber"
            isLight={isLight}
            isContrast={isContrast}
            sampleText="¡Hola! Bienvenido al laboratorio interactivo de lengua española."
          />
          {currentlyPlayingText && (
            <button
              onClick={stopAudio}
              className="ml-2 text-red-600 hover:text-red-700 flex items-center gap-1 font-bold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              إيقاف
            </button>
          )}
        </div>

      <button
          type="button"
          onClick={toggleFullscreen}
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            isLight
              ? 'bg-white border border-stone-300 text-stone-700 hover:text-stone-950 hover:bg-stone-100 shadow-2xs'
              : 'bg-stone-900/90 border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800'
          }`}
          title={isFullscreen ? 'خروج من ملء الشاشة' : 'ملء الشاشة'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-500" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-5 mb-6">
        <button
          onClick={() => setActiveTab('fonetica')}
          className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all border ${
            isLight ? 'border-stone-300' : 'border-stone-800'
          } ${
            activeTab === 'fonetica' ? tabActiveBg : tabInactiveBg
          }`}
        >
          <Volume2 className="w-4 h-4 text-amber-300" />
          <span>الصوتيات (Fonética)</span>
        </button>

        <button
          onClick={() => setActiveTab('tempi_verbali')}
          className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all border cursor-pointer ${
            isLight ? 'border-stone-300' : 'border-stone-800'
          } ${
            activeTab === 'tempi_verbali' ? tabActiveBg : tabInactiveBg
          }`}
        >
          <Zap className="w-4 h-4 text-yellow-300" />
          <span>الأزمنة (Verbos)</span>
        </button>

        <button
          onClick={() => setActiveTab('pronomi')}
          className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all border cursor-pointer ${
            isLight ? 'border-stone-300' : 'border-stone-800'
          } ${
            activeTab === 'pronomi' ? tabActiveBg : tabInactiveBg
          }`}
        >
          <Layers className="w-4 h-4 text-red-300" />
          <span>الضمائر (Pronombres)</span>
        </button>

        <button
          onClick={() => setActiveTab('contrastes')}
          className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all border cursor-pointer ${
            isLight ? 'border-stone-300' : 'border-stone-800'
          } ${
            activeTab === 'contrastes' ? tabActiveBg : tabInactiveBg
          }`}
        >
          <Compass className="w-4 h-4 text-orange-300" />
          <span>المقارنات (Ser/Estar & Por/Para)</span>
        </button>

        <button
          onClick={() => setActiveTab('situaciones')}
          className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all border cursor-pointer ${
            isLight ? 'border-stone-300' : 'border-stone-800'
          } ${
            activeTab === 'situaciones' ? tabActiveBg : tabInactiveBg
          }`}
        >
          <Activity className="w-4 h-4 text-emerald-300" />
          <span>المواقف اليومية (Situaciones)</span>
        </button>
      </div>

      {/* TAB 1: PHONETICS & PRONUNCIATION */}
      {activeTab === 'fonetica' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Rule Selector Panel */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <h3 className={`text-xs uppercase font-bold tracking-wider mb-1 px-1 ${
              isLight ? 'text-amber-900 font-extrabold' : 'text-amber-400/80'
            }`}>
              اختر قاعدة النطق والحروف المميزة:
            </h3>
            {SPANISH_PHONETICS_DATA.map((rule) => {
              const isSel = selectedPhonetic.symbol === rule.symbol;
              return (
                <button
                  key={rule.symbol}
                  onClick={() => setSelectedPhonetic(rule)}
                  className={`p-3 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                    isSel
                      ? isLight
                        ? 'bg-amber-50 border-amber-500 shadow-sm ring-1 ring-amber-400'
                        : 'bg-amber-950/40 border-amber-500/60 shadow-md shadow-amber-950/30'
                      : isLight
                      ? 'bg-white border-stone-300 hover:bg-stone-100 shadow-2xs'
                      : 'bg-stone-900/50 border-stone-800 hover:bg-stone-850'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`text-lg font-mono font-extrabold px-2.5 py-1 rounded-lg border ${
                      isLight
                        ? 'bg-amber-100 text-amber-950 border-amber-300'
                        : 'bg-stone-950 text-amber-300 border-stone-800'
                    }`}>
                      {rule.symbol}
                    </span>
                    <span className={`text-xs font-mono ${isLight ? 'text-stone-600 font-semibold' : 'text-stone-400'}`}>{rule.ipa}</span>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs ${isLight ? 'font-bold text-stone-900' : 'font-semibold text-stone-200'}`}>{rule.nameAr}</div>
                    <div className={`text-[11px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>{rule.nameEn}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Rule Detail & Interactive Acoustics */}
          <div className={`lg:col-span-8 p-5 rounded-xl border ${cardBgClass} flex flex-col justify-between`}>
            <div>
              <div className={`flex items-center justify-between pb-3 border-b mb-4 ${
                isLight ? 'border-stone-200' : 'border-stone-800'
              }`}>
                <div>
                  <h4 className={`text-lg font-bold flex items-center gap-2 ${
                    isLight ? 'text-amber-950 font-extrabold' : 'text-amber-300'
                  }`}>
                    <span>{selectedPhonetic.symbol}</span>
                    <span className={`text-sm font-mono font-normal ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                      [{selectedPhonetic.ipa}]
                    </span>
                  </h4>
                  <p className={`text-xs font-medium ${isLight ? 'text-stone-700 font-bold' : 'text-stone-300'}`}>{selectedPhonetic.nameAr}</p>
                </div>
                <button
                  onClick={() => speakSpanish(selectedPhonetic.exemplarWords.map((w) => w.word).join(', '))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isLight
                      ? 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300'
                      : 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 border border-amber-500/40'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>استماع للكل</span>
                </button>
              </div>

              {/* Explanations */}
              <div className={`p-3.5 rounded-xl border mb-4 space-y-2 ${
                isLight
                  ? 'bg-amber-50/80 border-amber-200 text-stone-900'
                  : 'bg-stone-950/60 border-stone-800/80'
              }`}>
                <p className={`text-xs sm:text-sm leading-relaxed font-arabic ${
                  isLight ? 'text-stone-900 font-medium' : 'text-stone-200'
                }`}>
                  {selectedPhonetic.ruleExplanationAr}
                </p>
                <p className={`text-xs italic leading-relaxed ${
                  isLight ? 'text-amber-900 font-bold font-serif' : 'text-amber-300/90 font-serif'
                }`}>
                  {selectedPhonetic.ruleExplanationEs}
                </p>
              </div>

              {/* Interactive Word Drills */}
              <h5 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                isLight ? 'text-stone-700' : 'text-stone-400'
              }`}>
                نماذج تطبيقية حية مع النطق اللحظي:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedPhonetic.exemplarWords.map((item) => {
                  const isPlaying = currentlyPlayingText === item.word;
                  return (
                    <div
                      key={item.word}
                      onClick={() => speakSpanish(item.word)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isPlaying
                          ? isLight
                            ? 'bg-amber-100 border-amber-500 shadow-sm'
                            : 'bg-amber-600/20 border-amber-400 shadow-md'
                          : isLight
                          ? 'bg-white border-stone-200 hover:border-amber-400 hover:bg-stone-50 shadow-2xs'
                          : 'bg-stone-950/40 border-stone-800 hover:border-amber-500/40 hover:bg-stone-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isPlaying
                              ? 'bg-amber-500 text-stone-950'
                              : isLight
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-stone-800 text-amber-400'
                          }`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className={`font-bold text-sm font-sans ${
                            isLight ? 'text-stone-950 font-black' : 'text-amber-200'
                          }`}>{item.word}</span>
                          <span className={`text-[11px] font-mono block ${
                            isLight ? 'text-stone-600 font-semibold' : 'text-stone-400'
                          }`}>{item.phonetic}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-stone-300">{item.translationAr}</div>
                        <div className="text-[10px] text-stone-500">{item.translationEn}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trap Warning Alert */}
            <div className={`mt-5 p-3 rounded-xl border flex items-start gap-2.5 ${
              isLight ? 'bg-amber-50 border-amber-300 text-stone-900 shadow-2xs' : 'bg-amber-950/30 border-amber-600/40'
            }`}>
              <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-amber-800' : 'text-amber-400'}`} />
              <div className="text-xs space-y-0.5">
                <p className={`font-bold ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>تحذير وزاري وتنبيه للاختبار:</p>
                <p className={`leading-normal ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>{selectedPhonetic.trapWarningAr}</p>
                <p className={`italic text-[11px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>{selectedPhonetic.trapWarningEn}</p>
              </div>
            </div>

            {/* Realistic Sagittal Vocal Tract Articulatory Anatomy for Spanish */}
            <div className="mt-5 pt-4 border-t border-stone-800/40">
              <RealisticVocalTractSchematic
                symbol={selectedPhonetic.symbol}
                name={`Fonética Española: ${selectedPhonetic.nameEn}`}
                manner={selectedPhonetic.ruleExplanationAr}
                place={spanishPlace}
                isVoiced={!['c', 'z', 'j'].includes(selectedPhonetic.symbol.toLowerCase())}
                isNasal={selectedPhonetic.symbol.toLowerCase().includes('ñ')}
                audioExampleWord={selectedPhonetic.exemplarWords[0]?.word}
                language="es"
                isLight={isLight}
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VERB CONJUGATION ENGINE */}
      {activeTab === 'tempi_verbali' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Tense Selector Panel */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <h3 className={`text-xs uppercase font-bold tracking-wider mb-1 px-1 ${
              isLight ? 'text-amber-900 font-extrabold' : 'text-amber-400/80'
            }`}>
              اختر الزمن اللغوي:
            </h3>
            {SPANISH_VERB_TENSES_DATA.map((t) => {
              const isSel = selectedTense.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTense(t)}
                  className={`p-3 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                    isSel
                      ? isLight
                        ? 'bg-amber-50 border-amber-500 shadow-sm ring-1 ring-amber-400'
                        : 'bg-amber-950/40 border-amber-500/60 shadow-md shadow-amber-950/30'
                      : isLight
                      ? 'bg-white border-stone-300 hover:bg-stone-100 shadow-2xs'
                      : 'bg-stone-900/50 border-stone-800 hover:bg-stone-850'
                  }`}
                >
                  <Sparkles className={`w-4 h-4 ${isSel ? (isLight ? 'text-amber-600' : 'text-amber-400') : 'text-stone-500'}`} />
                  <div className="text-right">
                    <div className={`text-xs ${isLight ? 'font-bold text-stone-900' : 'font-semibold text-stone-200'}`}>{t.titleAr}</div>
                    <div className={`text-[11px] font-sans ${isLight ? 'text-amber-800 font-bold' : 'text-amber-300/80'}`}>{t.titleEs}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Conjugation Details */}
          <div className={`lg:col-span-8 p-5 rounded-xl border ${cardBgClass}`}>
            <div className={`pb-3 border-b mb-4 flex items-center justify-between ${
              isLight ? 'border-stone-200' : 'border-stone-800'
            }`}>
              <div>
                <h4 className={`text-lg font-bold font-sans ${isLight ? 'text-amber-950 font-extrabold' : 'text-amber-300'}`}>{selectedTense.titleEs}</h4>
                <p className={`text-xs font-medium ${isLight ? 'text-stone-700 font-bold' : 'text-stone-300'}`}>{selectedTense.titleAr}</p>
              </div>
              {/* Regular verb group selector */}
              <div className={`flex items-center gap-1 p-1 rounded-lg border text-xs ${
                isLight ? 'bg-white border-stone-300 shadow-2xs' : 'bg-stone-950 border-stone-800'
              }`}>
                {(['ar', 'er', 'ir'] as const).map((grp) => (
                  <button
                    key={grp}
                    onClick={() => setVerbConjugationType(grp)}
                    className={`px-2.5 py-1 rounded font-bold uppercase transition-all cursor-pointer ${
                      verbConjugationType === grp
                        ? 'bg-amber-500 text-stone-950'
                        : isLight
                        ? 'text-stone-700 hover:text-stone-950 font-bold'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    -{grp}
                  </button>
                ))}
              </div>
            </div>

            {/* Function description */}
            <div className={`p-3 rounded-xl border mb-4 text-xs space-y-1 ${
              isLight ? 'bg-amber-50/80 border-amber-200' : 'bg-stone-950/60 border-stone-800'
            }`}>
              <p className={`font-medium ${isLight ? 'text-stone-800 font-bold' : 'text-stone-200'}`}>{selectedTense.functionAr}</p>
              <p className={`italic text-[11px] ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>{selectedTense.functionEn}</p>
            </div>

            {/* Regular Endings Grid */}
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
              isLight ? 'text-amber-900' : 'text-amber-400'
            }`}>
              نهايات الأفعال المنتظمة (المجموعة -{verbConjugationType}):
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-5">
              {[
                { pr: 'yo', val: selectedTense.regularEndings[verbConjugationType].yo },
                { pr: 'tú', val: selectedTense.regularEndings[verbConjugationType].tu },
                { pr: 'él/ella', val: selectedTense.regularEndings[verbConjugationType].elElla },
                { pr: 'nosotros', val: selectedTense.regularEndings[verbConjugationType].nosotros },
                { pr: 'vosotros', val: selectedTense.regularEndings[verbConjugationType].vosotros },
                { pr: 'ellos/as', val: selectedTense.regularEndings[verbConjugationType].ellos },
              ].map((item) => (
                <div
                  key={item.pr}
                  className={`p-2.5 rounded-xl border text-center ${
                    isLight ? 'bg-stone-50 border-stone-200 shadow-2xs' : 'bg-stone-950/80 border-stone-800'
                  }`}
                >
                  <span className={`text-[10px] block font-mono ${isLight ? 'text-stone-600 font-bold' : 'text-stone-400'}`}>{item.pr}</span>
                  <span className={`text-sm font-bold font-sans ${isLight ? 'text-amber-900 font-black text-base' : 'text-amber-300'}`}>{item.val}</span>
                </div>
              ))}
            </div>

            {/* Irregular Verbs Section */}
            {selectedTense.irregularVerbs.length > 0 && (
              <>
                <h5 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-red-800 font-extrabold' : 'text-red-400'
                }`}>
                  أهم الأفعال الشاذة والتصريفات الوزارية المتكررة:
                </h5>
                <div className="space-y-2 mb-5">
                  {selectedTense.irregularVerbs.map((irr) => (
                    <div
                      key={irr.verb}
                      className={`p-3 rounded-xl border text-xs flex flex-col md:flex-row md:items-center justify-between gap-2 ${
                        isLight ? 'bg-white border-stone-200 shadow-2xs' : 'bg-stone-950/70 border-stone-800/80'
                      }`}
                    >
                      <div className={`font-bold font-sans text-sm flex items-center gap-2 ${
                        isLight ? 'text-amber-900 font-black' : 'text-amber-200'
                      }`}>
                        <span>{irr.verb}</span>
                        <button
                          onClick={() =>
                            speakSpanish(
                              `${irr.conjugations.yo}, ${irr.conjugations.tu}, ${irr.conjugations.elElla}`
                            )
                          }
                          className={`cursor-pointer ${isLight ? 'text-stone-600 hover:text-amber-700' : 'text-stone-400 hover:text-amber-300'}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className={`grid grid-cols-3 sm:grid-cols-6 gap-2 text-center font-mono text-[11px] ${
                        isLight ? 'text-stone-900 font-bold' : 'text-stone-300'
                      }`}>
                        <div>
                          <span className={`text-[9px] block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-500'}`}>yo</span>
                          {irr.conjugations.yo}
                        </div>
                        <div>
                          <span className={`text-[9px] block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-500'}`}>tú</span>
                          {irr.conjugations.tu}
                        </div>
                        <div>
                          <span className={`text-[9px] block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-500'}`}>él/ella</span>
                          {irr.conjugations.elElla}
                        </div>
                        <div>
                          <span className={`text-[9px] block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-500'}`}>nos.</span>
                          {irr.conjugations.nosotros}
                        </div>
                        <div>
                          <span className={`text-[9px] block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-500'}`}>vos.</span>
                          {irr.conjugations.vosotros}
                        </div>
                        <div>
                          <span className={`text-[9px] block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-500'}`}>ellos</span>
                          {irr.conjugations.ellos}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Contextual Examples */}
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
              isLight ? 'text-stone-700' : 'text-stone-400'
            }`}>
              أمثلة سياقية ناطقة:
            </h5>
            <div className="space-y-2">
              {selectedTense.examples.map((ex, idx) => (
                <div
                  key={idx}
                  onClick={() => speakSpanish(ex.sentenceEs)}
                  className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    isLight
                      ? 'bg-white border-stone-200 hover:border-amber-400 hover:bg-stone-50 shadow-2xs'
                      : 'bg-stone-950/40 border-stone-800 hover:border-amber-500/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Volume2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                    <div>
                      <p className={`text-xs sm:text-sm font-sans font-semibold ${
                        isLight ? 'text-stone-950 font-bold' : 'text-amber-200'
                      }`}>
                        {ex.sentenceEs}
                      </p>
                      <p className={`text-[11px] ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>{ex.translationEn}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium ${isLight ? 'text-stone-800 font-bold' : 'text-stone-300'}`}>{ex.translationAr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRONOUN MATRIX */}
      {activeTab === 'pronomi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Category Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <h3 className={`text-xs uppercase font-bold tracking-wider mb-1 px-1 ${
              isLight ? 'text-amber-900 font-extrabold' : 'text-amber-400/80'
            }`}>
              اختر فئة الضمائر:
            </h3>
            {SPANISH_PRONOUNS_DATA.map((p) => {
              const isSel = selectedPronounCategory.category === p.category;
              return (
                <button
                  key={p.category}
                  onClick={() => setSelectedPronounCategory(p)}
                  className={`p-3 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                    isSel
                      ? isLight
                        ? 'bg-amber-50 border-amber-500 shadow-sm ring-1 ring-amber-400'
                        : 'bg-amber-950/40 border-amber-500/60 shadow-md shadow-amber-950/30'
                      : isLight
                      ? 'bg-white border-stone-300 hover:bg-stone-100 shadow-2xs'
                      : 'bg-stone-900/50 border-stone-800 hover:bg-stone-850'
                  }`}
                >
                  <Layers className={`w-4 h-4 ${isSel ? (isLight ? 'text-amber-600' : 'text-amber-400') : 'text-stone-500'}`} />
                  <div className="text-right">
                    <div className={`text-xs ${isLight ? 'font-bold text-stone-900' : 'font-semibold text-stone-200'}`}>{p.titleAr}</div>
                    <div className={`text-[11px] font-sans ${isLight ? 'text-amber-800 font-bold' : 'text-amber-300/80'}`}>{p.titleEs}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pronoun Table & Examples */}
          <div className={`lg:col-span-8 p-5 rounded-xl border ${cardBgClass}`}>
            <div className={`pb-3 border-b mb-4 ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
              <h4 className={`text-lg font-bold font-sans ${isLight ? 'text-amber-950 font-extrabold' : 'text-amber-300'}`}>
                {selectedPronounCategory.titleEs}
              </h4>
              <p className={`text-xs font-medium ${isLight ? 'text-stone-700 font-bold' : 'text-stone-300'}`}>{selectedPronounCategory.titleAr}</p>
            </div>

            {/* Explanation */}
            <div className={`p-3.5 rounded-xl border mb-4 space-y-1 text-xs ${
              isLight ? 'bg-amber-50/80 border-amber-200 text-stone-900' : 'bg-stone-950/60 border-stone-800'
            }`}>
              <p className={`font-medium ${isLight ? 'text-stone-800 font-bold' : 'text-stone-200'}`}>{selectedPronounCategory.ruleExplanationAr}</p>
              <p className={`italic font-serif text-[11px] ${isLight ? 'text-amber-900 font-bold' : 'text-amber-300/80'}`}>
                {selectedPronounCategory.ruleExplanationEs}
              </p>
            </div>

            {/* Pronoun Table */}
            <div className={`overflow-x-auto mb-5 rounded-xl border ${isLight ? 'border-stone-200 bg-white' : 'border-stone-800'}`}>
              <table className="w-full text-xs text-center">
                <thead className={`font-mono text-[11px] ${
                  isLight ? 'bg-stone-100 text-stone-800 font-bold border-b border-stone-200' : 'bg-stone-950 text-stone-400 border-b border-stone-800'
                }`}>
                  <tr>
                    <th className={`p-2.5 border-b text-right pr-4 ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>الضمير الشخصي</th>
                    <th className={`p-2.5 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>المباشر (OD)</th>
                    <th className={`p-2.5 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>غير المباشر (OI)</th>
                    <th className={`p-2.5 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>صيغة التوكيد / الجر</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isLight ? 'divide-stone-200' : 'divide-stone-800/60'}`}>
                  {selectedPronounCategory.pronounTable.map((row) => (
                    <tr key={row.person} className={isLight ? 'hover:bg-stone-50' : 'hover:bg-stone-950/40'}>
                      <td className={`p-2.5 font-bold text-right pr-4 font-mono ${isLight ? 'text-stone-900' : 'text-stone-300'}`}>
                        {row.person}
                      </td>
                      <td className={`p-2.5 font-bold font-mono ${isLight ? 'text-amber-800 font-black' : 'text-amber-400'}`}>{row.direct}</td>
                      <td className={`p-2.5 font-bold font-mono ${isLight ? 'text-rose-700 font-black' : 'text-red-400'}`}>{row.indirect}</td>
                      <td className={`p-2.5 font-mono ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{row.tonic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Examples */}
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
              نماذج توضيحية من امتحانات الثانوية العامة:
            </h5>
            <div className="space-y-2">
              {selectedPronounCategory.examples.map((ex, idx) => (
                <div
                  key={idx}
                  onClick={() => speakSpanish(ex.es)}
                  className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    isLight
                      ? 'bg-white border-stone-200 hover:border-amber-400 hover:bg-stone-50 shadow-2xs'
                      : 'bg-stone-950/40 border-stone-800 hover:border-amber-500/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Volume2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                    <div>
                      <p className={`text-xs sm:text-sm font-sans font-semibold ${isLight ? 'text-stone-950 font-bold' : 'text-amber-200'}`}>{ex.es}</p>
                      <p className={`text-[11px] ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>{ex.en}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium ${isLight ? 'text-stone-800 font-bold' : 'text-stone-300'}`}>{ex.ar}</span>
                    <span className={`text-[10px] block ${isLight ? 'text-amber-800 font-bold' : 'text-amber-400'}`}>{ex.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CONTRASTS (SER vs. ESTAR & POR vs. PARA) */}
      {activeTab === 'contrastes' && (
        <div className="space-y-5">
          {/* Toggle between Ser/Estar and Por/Para */}
          <div className="flex items-center gap-3">
            {SPANISH_CONTRASTS_DATA.map((c) => {
              const isSel = selectedContrast.contrastId === c.contrastId;
              return (
                <button
                  key={c.contrastId}
                  onClick={() => setSelectedContrast(c)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    isSel
                      ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/40'
                      : isLight
                      ? 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100 hover:text-stone-950 shadow-2xs'
                      : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
                  }`}
                >
                  {c.titleAr}
                </button>
              );
            })}
          </div>

          {/* Comparison Cards Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Item A Card */}
            <div className={`p-5 rounded-xl border ${cardBgClass}`}>
              <div className={`pb-3 border-b mb-3 flex items-center gap-2 ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <h4 className={`font-bold font-sans text-base ${isLight ? 'text-amber-950 font-extrabold' : 'text-amber-300'}`}>
                  {selectedContrast.itemA.name}
                </h4>
              </div>
              <div className="space-y-2.5 text-xs">
                {selectedContrast.itemA.rules.map((rule, idx) => (
                  <div
                    key={idx}
                    onClick={() => speakSpanish(rule.exampleEs)}
                    className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                      isLight
                        ? 'bg-white border-stone-200 hover:border-amber-400 hover:bg-amber-50/40 shadow-2xs'
                        : 'bg-stone-950/50 border-stone-800 hover:border-amber-500/40'
                    }`}
                  >
                    <div className={`font-bold mb-1 ${isLight ? 'text-stone-900' : 'text-stone-200 font-semibold'}`}>{rule.useAr}</div>
                    <div className={`flex items-center justify-between text-[11px] font-sans ${isLight ? 'text-amber-900 font-bold' : 'text-amber-200/90'}`}>
                      <span>{rule.exampleEs}</span>
                      <Volume2 className={`w-3.5 h-3.5 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                    </div>
                    <div className={`text-[10px] mt-0.5 ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>{rule.translationAr}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Item B Card */}
            <div className={`p-5 rounded-xl border ${cardBgClass}`}>
              <div className={`pb-3 border-b mb-3 flex items-center gap-2 ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <h4 className={`font-bold font-sans text-base ${isLight ? 'text-rose-950 font-extrabold' : 'text-red-300'}`}>
                  {selectedContrast.itemB.name}
                </h4>
              </div>
              <div className="space-y-2.5 text-xs">
                {selectedContrast.itemB.rules.map((rule, idx) => (
                  <div
                    key={idx}
                    onClick={() => speakSpanish(rule.exampleEs)}
                    className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                      isLight
                        ? 'bg-white border-stone-200 hover:border-rose-400 hover:bg-rose-50/40 shadow-2xs'
                        : 'bg-stone-950/50 border-stone-800 hover:border-red-500/40'
                    }`}
                  >
                    <div className={`font-bold mb-1 ${isLight ? 'text-stone-900' : 'text-stone-200 font-semibold'}`}>{rule.useAr}</div>
                    <div className={`flex items-center justify-between text-[11px] font-sans ${isLight ? 'text-rose-900 font-bold' : 'text-red-200/90'}`}>
                      <span>{rule.exampleEs}</span>
                      <Volume2 className={`w-3.5 h-3.5 ${isLight ? 'text-rose-700' : 'text-red-400'}`} />
                    </div>
                    <div className={`text-[10px] mt-0.5 ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>{rule.translationAr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Trap Pairs (If available) */}
          {selectedContrast.specialTrapPairs && (
            <div className={`p-4 rounded-xl border ${cardBgClass}`}>
              <h5 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${isLight ? 'text-amber-900 font-extrabold' : 'text-amber-400'}`}>
                <AlertTriangle className={`w-4 h-4 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                <span>فخاخ وزارية شائعة: تغير المعنى بين SER و ESTAR مع نفس الصفة:</span>
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {selectedContrast.specialTrapPairs.map((tp, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border space-y-1.5 ${
                    isLight ? 'bg-white border-stone-200 shadow-2xs' : 'bg-stone-950 border-stone-800/80'
                  }`}>
                    <div className={`font-bold font-sans text-sm pb-1 border-b ${
                      isLight ? 'text-amber-950 border-stone-200 font-extrabold' : 'text-amber-300 border-stone-800'
                    }`}>
                      {tp.expressionEs}
                    </div>
                    <div className={`text-[11px] ${isLight ? 'text-stone-800 font-semibold' : 'text-stone-300'}`}>{tp.meaningWithA}</div>
                    <div className={`text-[11px] ${isLight ? 'text-stone-800 font-semibold' : 'text-stone-300'}`}>{tp.meaningWithB}</div>
                    <div className={`text-[10px] italic pt-1 ${isLight ? 'text-amber-800 font-bold' : 'text-amber-400/90'}`}>{tp.explanationAr}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: SITUATIONS TRAINER */}
      {activeTab === 'situaciones' && (
        <div className={`p-5 rounded-xl border ${cardBgClass} max-w-3xl mx-auto`}>
          {/* Situation Progress & Score */}
          <div className={`flex items-center justify-between pb-4 border-b mb-5 text-xs ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${isLight ? 'text-stone-800' : 'text-stone-300 font-semibold'}`}>
                الموقف {currentSitIndex + 1} من {SPANISH_SITUATIONS_DATA.length}
              </span>
              <span className={isLight ? 'text-stone-400' : 'text-stone-500'}>|</span>
              <span className={`font-bold ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>
                {SPANISH_SITUATIONS_DATA[currentSitIndex].unidadTitle}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}>النقاط:</span>
              <span className={`px-2.5 py-0.5 rounded-full font-bold border ${
                isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}>
                {situationScore} / {SPANISH_SITUATIONS_DATA.length}
              </span>
            </div>
          </div>

          {/* Current Question */}
          {(() => {
            const sit = SPANISH_SITUATIONS_DATA[currentSitIndex];
            return (
              <div>
                <div className={`p-4 rounded-xl border mb-5 space-y-2 ${
                  isLight ? 'bg-amber-50/80 border-amber-200 text-stone-900' : 'bg-stone-950/70 border-stone-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-wide ${isLight ? 'text-amber-900 font-black' : 'text-amber-400'}`}>
                      سؤال الموقف الوزاري:
                    </span>
                    <button
                      onClick={() => speakSpanish(sit.situationPromptEs)}
                      className={`flex items-center gap-1 text-xs cursor-pointer ${
                        isLight ? 'text-stone-700 hover:text-amber-900 font-bold' : 'text-stone-400 hover:text-amber-300'
                      }`}
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>استماع</span>
                    </button>
                  </div>
                  <p className={`text-base font-bold leading-snug ${isLight ? 'text-stone-950 font-extrabold' : 'text-stone-100'}`}>{sit.situationPromptAr}</p>
                  <p className={`text-xs font-sans italic ${isLight ? 'text-amber-900 font-bold' : 'text-amber-200/90'}`}>{sit.situationPromptEs}</p>
                </div>

                {/* Choices (Correct vs Trap) */}
                <div className="space-y-3 mb-5">
                  <div
                    onClick={() => {
                      if (chosenSitChoice !== null) return;
                      setChosenSitChoice('correct');
                      setSituationScore((prev) => prev + 1);
                      speakSpanish(sit.correctResponseEs);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      chosenSitChoice === 'correct'
                        ? isLight
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold shadow-xs'
                          : 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                        : chosenSitChoice === 'trap'
                        ? isLight
                          ? 'bg-stone-100 border-stone-200 opacity-50'
                          : 'bg-stone-950/40 border-stone-800 opacity-60'
                        : isLight
                        ? 'bg-white border-stone-300 hover:border-amber-500 hover:bg-amber-50/40 shadow-2xs'
                        : 'bg-stone-950/50 border-stone-800 hover:border-amber-500/50 hover:bg-stone-900/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isLight ? 'bg-amber-100 text-amber-950 border border-amber-300' : 'bg-stone-800 text-amber-300'
                      }`}>
                        A
                      </div>
                      <div>
                        <p className={`text-sm font-bold font-sans ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>{sit.correctResponseEs}</p>
                        <p className={`text-xs ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>{sit.correctResponseAr}</p>
                      </div>
                    </div>
                    {chosenSitChoice === 'correct' && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </div>

                  <div
                    onClick={() => {
                      if (chosenSitChoice !== null) return;
                      setChosenSitChoice('trap');
                      speakSpanish(sit.trapDistractorEs);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      chosenSitChoice === 'trap'
                        ? isLight
                          ? 'bg-rose-100 border-rose-500 text-rose-950 font-bold shadow-xs'
                          : 'bg-red-950/40 border-red-500 text-red-200'
                        : chosenSitChoice === 'correct'
                        ? isLight
                          ? 'bg-stone-100 border-stone-200 opacity-50'
                          : 'bg-stone-950/40 border-stone-800 opacity-60'
                        : isLight
                        ? 'bg-white border-stone-300 hover:border-amber-500 hover:bg-amber-50/40 shadow-2xs'
                        : 'bg-stone-950/50 border-stone-800 hover:border-amber-500/50 hover:bg-stone-900/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isLight ? 'bg-stone-200 text-stone-800 border border-stone-300' : 'bg-stone-800 text-stone-400'
                      }`}>
                        B
                      </div>
                      <div>
                        <p className={`text-sm font-bold font-sans ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>{sit.trapDistractorEs}</p>
                        <p className={`text-xs ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>خيار مشتت (غير متوافق مع الموقف)</p>
                      </div>
                    </div>
                    {chosenSitChoice === 'trap' && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </div>
                </div>

                {/* Explanation feedback */}
                {chosenSitChoice !== null && (
                  <div
                    className={`p-4 rounded-xl border mb-5 ${
                      chosenSitChoice === 'correct'
                        ? isLight
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-2xs'
                          : 'bg-emerald-950/30 border-emerald-600/40 text-emerald-200'
                        : isLight
                        ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-2xs'
                        : 'bg-red-950/30 border-red-600/40 text-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs mb-1">
                      {chosenSitChoice === 'correct' ? (
                        <>
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                          <span className={isLight ? 'text-emerald-950 font-bold' : ''}>إجابة صحيحة ومطابقة للمواصفات الوزارية!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className={`w-4 h-4 shrink-0 ${isLight ? 'text-rose-700' : 'text-red-400'}`} />
                          <span className={isLight ? 'text-rose-950 font-bold' : ''}>إجابة غير صحيحة - وقعت في الفخ!</span>
                        </>
                      )}
                    </div>
                    <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>{sit.trapExplanationAr}</p>
                  </div>
                )}

                {/* Navigation Button */}
                <div className="flex justify-end">
                  <button
                    disabled={chosenSitChoice === null}
                    onClick={() => {
                      setChosenSitChoice(null);
                      if (currentSitIndex < SPANISH_SITUATIONS_DATA.length - 1) {
                        setCurrentSitIndex((prev) => prev + 1);
                      } else {
                        setCurrentSitIndex(0);
                      }
                    }}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs flex items-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-amber-950/40 cursor-pointer"
                  >
                    <span>
                      {currentSitIndex < SPANISH_SITUATIONS_DATA.length - 1
                        ? 'الموقف التالي'
                        : 'إعادة التدريب من البداية'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
