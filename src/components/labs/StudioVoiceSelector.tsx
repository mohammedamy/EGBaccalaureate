/**
 * StudioVoiceSelector (محدد وبدّال الأصوات الذكية فائق الدقة للمختبرات اللغوية)
 * 
 * Provides an elegant, accessible, and intuitive voice selection & auditioning interface
 * across all language and simulation studios:
 * - English Audio & Phonetics Studio (UK RP & US General American)
 * - French Audio Studio (Parisian & Standard)
 * - German Language Studio (Hochdeutsch)
 * - Italian Language Studio (Standard Italiano)
 * - Spanish Language Studio (Castellano)
 * - Chinese Language Studio (Mandarin Putonghua)
 * - Arabic Grammar & Syntactic Studio (Egyptian & Classical Fusha)
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Sparkles,
  Sliders,
  Check,
  ChevronDown,
  Play,
  Square,
  Headphones,
  Globe,
  X,
} from 'lucide-react';
import {
  aiVoiceEngine,
  getAvailableVoicesForLanguage,
  getVoiceQualityInfo,
  ensureVoicesLoaded,
  setStoredVoicePreference,
  getStoredVoicePreference,
  normalizeLanguageCode,
  type VoiceLanguageCode,
} from '../../services/aiVoiceEngine';

export interface StudioVoiceSelectorProps {
  lang: VoiceLanguageCode | string;
  speechRate: number;
  onRateChange: (rate: number) => void;
  selectedVoiceName?: string | null;
  onVoiceChange?: (voiceName: string) => void;
  accent?: 'en-GB' | 'en-US';
  onAccentChange?: (accent: 'en-GB' | 'en-US') => void;
  isLight?: boolean;
  isContrast?: boolean;
  sampleText?: string;
  compact?: boolean;
  themeColor?: 'blue' | 'emerald' | 'amber' | 'indigo' | 'purple' | 'red';
}

const DEFAULT_SAMPLES: Record<string, string> = {
  'en-GB': 'The quick brown fox jumps over the lazy dog. Welcome to the English Audio and Phonetics Studio.',
  'en-US': 'Welcome to the American English listening and pronunciation laboratory.',
  'fr-FR': 'Bonjour et bienvenue au studio de phonétique française pour le baccalauréat.',
  'de-DE': 'Guten Tag! Willkommen im deutschen Sprachlabor für das Abitur.',
  'it-IT': 'Ciao e benvenuto nello studio della lingua italiana per la maturità.',
  'es-ES': '¡Hola! Bienvenido al laboratorio interactivo de lengua española.',
  'zh-CN': '你好！欢迎来到高中普通话语音与听力实验室。',
  'ar-EG': 'أهلاً ومرحباً بكم في المختبر التفاعلي لقواعد اللغة العربية ونطقها الفصيح.',
  'ar-SA': 'أهلاً ومرحباً بكم في المختبر التفاعلي لقواعد اللغة العربية ونطقها الفصيح.',
};

export const StudioVoiceSelector: React.FC<StudioVoiceSelectorProps> = ({
  lang,
  speechRate,
  onRateChange,
  selectedVoiceName: controlledVoiceName,
  onVoiceChange,
  accent,
  onAccentChange,
  isLight = false,
  isContrast = false,
  sampleText,
  compact = false,
  themeColor = 'blue',
}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [internalVoiceName, setInternalVoiceName] = useState<string | null>(null);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [previewingVoiceName, setPreviewingVoiceName] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const activeLang = accent || lang;
  const { bcp47, langPrefix } = useMemo(() => normalizeLanguageCode(activeLang), [activeLang]);

  // Load and refresh available voices for this language
  const refreshList = () => {
    const list = getAvailableVoicesForLanguage(activeLang);
    setVoices(list);

    // Initial voice selection resolution
    const saved = getStoredVoicePreference(bcp47) || getStoredVoicePreference(langPrefix);
    if (controlledVoiceName) {
      setInternalVoiceName(controlledVoiceName);
    } else if (saved && list.some((v) => v.name === saved)) {
      setInternalVoiceName(saved);
      onVoiceChange?.(saved);
    } else if (list.length > 0) {
      setInternalVoiceName(list[0].name);
      onVoiceChange?.(list[0].name);
    }
  };

  useEffect(() => {
    ensureVoicesLoaded().then(refreshList);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const handler = () => refreshList();
      window.speechSynthesis.addEventListener('voiceschanged', handler);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', handler);
      };
    }
  }, [activeLang]);

  // Keep internal state synchronized with controlled prop
  useEffect(() => {
    if (controlledVoiceName !== undefined) {
      setInternalVoiceName(controlledVoiceName);
    }
  }, [controlledVoiceName]);

  const activeVoiceObj = useMemo(() => {
    const targetName = internalVoiceName;
    return voices.find((v) => v.name === targetName) || voices[0] || null;
  }, [voices, internalVoiceName]);

  const activeQuality = useMemo(() => {
    if (!activeVoiceObj) return null;
    return getVoiceQualityInfo(activeVoiceObj);
  }, [activeVoiceObj]);

  const handleSelectVoice = (v: SpeechSynthesisVoice) => {
    setInternalVoiceName(v.name);
    setStoredVoicePreference(bcp47, v.name);
    setStoredVoicePreference(langPrefix, v.name);
    onVoiceChange?.(v.name);
    setIsModalOpen(false);
  };

  // Audition voice with clean sample
  const auditionVoice = (v: SpeechSynthesisVoice, textToSpeak?: string) => {
    const phrase = textToSpeak || sampleText || DEFAULT_SAMPLES[activeLang] || DEFAULT_SAMPLES[bcp47] || 'Testing natural voice.';
    setIsPlayingPreview(true);
    setPreviewingVoiceName(v.name);

    aiVoiceEngine.speak(phrase, {
      lang: activeLang,
      voiceName: v.name,
      rate: speechRate,
      onStart: () => {
        setIsPlayingPreview(true);
        setPreviewingVoiceName(v.name);
      },
      onEnd: () => {
        setIsPlayingPreview(false);
        setPreviewingVoiceName(null);
      },
      onError: () => {
        setIsPlayingPreview(false);
        setPreviewingVoiceName(null);
      },
    });
  };

  const stopPreview = () => {
    aiVoiceEngine.stopAll();
    setIsPlayingPreview(false);
    setPreviewingVoiceName(null);
  };

  // Close modal on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
        stopPreview();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Color theme mapper
  const colorStyles = useMemo(() => {
    switch (themeColor) {
      case 'emerald':
        return {
          pillBorder: 'border-emerald-500/40 hover:border-emerald-400',
          pillBg: isLight ? 'bg-emerald-50 text-emerald-950' : 'bg-emerald-950/50 text-emerald-200',
          pillIcon: 'text-emerald-400',
          activeChip: 'bg-emerald-600 text-white shadow-emerald-500/20',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        };
      case 'amber':
        return {
          pillBorder: 'border-amber-500/40 hover:border-amber-400',
          pillBg: isLight ? 'bg-amber-50 text-amber-950' : 'bg-amber-950/50 text-amber-200',
          pillIcon: 'text-amber-400',
          activeChip: 'bg-amber-600 text-white shadow-amber-500/20',
          badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        };
      case 'purple':
        return {
          pillBorder: 'border-purple-500/40 hover:border-purple-400',
          pillBg: isLight ? 'bg-purple-50 text-purple-950' : 'bg-purple-950/50 text-purple-200',
          pillIcon: 'text-purple-400',
          activeChip: 'bg-purple-600 text-white shadow-purple-500/20',
          badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
        };
      case 'red':
        return {
          pillBorder: 'border-red-500/40 hover:border-red-400',
          pillBg: isLight ? 'bg-red-50 text-red-950' : 'bg-red-950/50 text-red-200',
          pillIcon: 'text-red-400',
          activeChip: 'bg-red-600 text-white shadow-red-500/20',
          badge: 'bg-red-500/20 text-red-300 border-red-500/40',
        };
      case 'indigo':
        return {
          pillBorder: 'border-indigo-500/40 hover:border-indigo-400',
          pillBg: isLight ? 'bg-indigo-50 text-indigo-950' : 'bg-indigo-950/50 text-indigo-200',
          pillIcon: 'text-indigo-400',
          activeChip: 'bg-indigo-600 text-white shadow-indigo-500/20',
          badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
        };
      case 'blue':
      default:
        return {
          pillBorder: 'border-blue-500/40 hover:border-blue-400',
          pillBg: isLight ? 'bg-blue-50 text-blue-950' : 'bg-blue-950/50 text-blue-200',
          pillIcon: 'text-blue-400',
          activeChip: 'bg-blue-600 text-white shadow-blue-500/20',
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
        };
    }
  }, [themeColor, isLight]);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* Accent Toggle if available (e.g. UK vs US for English) */}
      {accent && onAccentChange && (
        <div className={`flex items-center p-0.5 rounded-xl border text-xs font-bold ${
          isLight ? 'bg-white border-slate-300 shadow-2xs' : 'bg-slate-900 border-slate-800'
        }`}>
          <button
            type="button"
            onClick={() => onAccentChange('en-GB')}
            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
              accent === 'en-GB'
                ? colorStyles.activeChip
                : isLight
                ? 'text-slate-600 hover:text-slate-900'
                : 'text-slate-400 hover:text-white'
            }`}
            title="اللهجة البريطانية الرسمية (Received Pronunciation - Oxford)"
          >
            <span>🇬🇧</span>
            <span>UK</span>
          </button>
          <button
            type="button"
            onClick={() => onAccentChange('en-US')}
            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
              accent === 'en-US'
                ? colorStyles.activeChip
                : isLight
                ? 'text-slate-600 hover:text-slate-900'
                : 'text-slate-400 hover:text-white'
            }`}
            title="اللهجة الأمريكية القياسية (General American)"
          >
            <span>🇺🇸</span>
            <span>US</span>
          </button>
        </div>
      )}

      {/* Voice Selection Pill & Audition Launcher */}
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-xs min-h-[38px] ${
          colorStyles.pillBorder
        } ${colorStyles.pillBg}`}
        title="تغيير الصوت الذكي ومطابقة الأداء النطقي"
      >
        <Sparkles className={`w-3.5 h-3.5 animate-pulse ${colorStyles.pillIcon}`} />
        <div className="flex flex-col items-start leading-tight text-right">
          <div className="flex items-center gap-1.5">
            <span className="font-bold truncate max-w-[140px] sm:max-w-[180px]">
              {activeQuality?.displayName || activeVoiceObj?.name || 'صوت الذكاء الاصطناعي'}
            </span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full border ${activeQuality?.badgeClass || colorStyles.badge}`}>
              {activeQuality?.tier === 'natural_ai' ? '✨ Natural AI' : activeQuality?.tier === 'enhanced_hd' ? '💎 HD' : '🎙️ Voice'}
            </span>
          </div>
        </div>
        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
      </button>

      {/* Quick Play Sample Test Button */}
      <button
        type="button"
        onClick={() => {
          if (isPlayingPreview) {
            stopPreview();
          } else if (activeVoiceObj) {
            auditionVoice(activeVoiceObj);
          }
        }}
        className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer min-h-[38px] ${
          isPlayingPreview
            ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
            : isLight
            ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-2xs'
            : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title={isPlayingPreview ? 'إيقاف المعاينة الصوتية' : 'استمع لتجربة نطق هذا الصوت'}
      >
        {isPlayingPreview ? (
          <>
            <Square className="w-3 h-3 fill-current" />
            <span className="hidden sm:inline">إيقاف</span>
          </>
        ) : (
          <>
            <Headphones className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">معاينة الصوت</span>
          </>
        )}
      </button>

      {/* Speech Rate Control Selector */}
      {!compact && (
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-xl border text-xs font-semibold min-h-[38px] ${
          isLight ? 'bg-white border-slate-300 text-slate-700 shadow-2xs' : 'bg-slate-900 border-slate-800 text-slate-300'
        }`}>
          <Sliders className="w-3 h-3 text-slate-400 mr-0.5" />
          <span className="text-[11px] hidden sm:inline text-slate-400">السرعة:</span>
          {[0.75, 0.85, 1.0].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => onRateChange(rate)}
              className={`px-1.5 py-0.5 rounded-md font-mono text-[11px] font-bold transition-all cursor-pointer ${
                speechRate === rate
                  ? colorStyles.activeChip
                  : isLight
                  ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>
      )}

      {/* Modal: Voice Picker & Audition Catalog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div
            ref={modalRef}
            className={`w-full max-w-xl rounded-3xl border shadow-2xl p-5 sm:p-6 overflow-hidden flex flex-col max-h-[88vh] ${
              isLight
                ? 'bg-white border-slate-200 text-slate-900 shadow-slate-900/10'
                : isContrast
                ? 'bg-black border-amber-400 text-white'
                : 'bg-slate-950 border-slate-800 text-slate-100'
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-2xl ${colorStyles.pillBg} border ${colorStyles.pillBorder}`}>
                  <Headphones className={`w-5 h-5 ${colorStyles.pillIcon}`} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                    <span>اختيار صوت المحاكاة الذكي</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      HD Voices
                    </span>
                  </h3>
                  <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    اختر الصوت الأكثر وضوحاً وواقعية على جهازك، مصنف حسب خوارزمية الذكاء الاصطناعي (AI Ranking)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  stopPreview();
                }}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  isLight
                    ? 'border-slate-200 hover:bg-slate-100 text-slate-600'
                    : 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Accent Tabs if English or Multi-Dialect */}
            {accent && onAccentChange && (
              <div className="flex items-center gap-2 pt-4 pb-2">
                <span className="text-xs font-bold text-slate-400">اللهجة:</span>
                <div className={`inline-flex p-1 rounded-xl border ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                  <button
                    type="button"
                    onClick={() => onAccentChange('en-GB')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      accent === 'en-GB'
                        ? colorStyles.activeChip
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>British English (RP)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onAccentChange('en-US')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      accent === 'en-US'
                        ? colorStyles.activeChip
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🇺🇸</span>
                    <span>American English</span>
                  </button>
                </div>
              </div>
            )}

            {/* Voices List */}
            <div className="flex-1 overflow-y-auto py-3 space-y-2.5 pr-1 no-scrollbar">
              {voices.length === 0 ? (
                <div className="p-8 text-center text-slate-400 flex flex-col items-center">
                  <Globe className="w-8 h-8 mb-2 opacity-50 animate-spin" />
                  <p className="text-sm font-semibold">جاري استكشاف وفحص أصوات المتصفح عالية الدقة...</p>
                  <p className="text-xs text-slate-500 mt-1">تأكد من تفعيل أصوات النظام أو تحديث محرك الصوت</p>
                </div>
              ) : (
                voices.map((v) => {
                  const info = getVoiceQualityInfo(v);
                  const isSelected = activeVoiceObj?.name === v.name;
                  const isAuditioning = isPlayingPreview && previewingVoiceName === v.name;

                  return (
                    <div
                      key={v.name}
                      className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? isLight
                            ? 'bg-blue-50/80 border-blue-500 shadow-sm'
                            : 'bg-blue-950/40 border-blue-500/80 shadow-inner'
                          : isLight
                          ? 'bg-white hover:bg-slate-50 border-slate-200'
                          : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <button
                          type="button"
                          onClick={() => {
                            if (isAuditioning) {
                              stopPreview();
                            } else {
                              auditionVoice(v);
                            }
                          }}
                          className={`p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 ${
                            isAuditioning
                              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md animate-pulse'
                              : isLight
                              ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                              : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                          }`}
                          title="استمع لتجربة هذا الصوت"
                        >
                          {isAuditioning ? (
                            <Square className="w-4 h-4 fill-current" />
                          ) : (
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          )}
                        </button>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm truncate">{info.displayName}</span>
                            {info.gender && (
                              <span className="text-xs text-slate-400">
                                {info.gender === 'female' ? '♀ أنثوي' : '♂ ذكوري'}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${info.badgeClass}`}>
                              {info.tierLabelAr}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {v.lang}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isSelected ? (
                          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-sm">
                            <Check className="w-3.5 h-3.5" />
                            <span>مُفعّل</span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSelectVoice(v)}
                            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              isLight
                                ? 'bg-white hover:bg-blue-600 hover:text-white border-slate-300 text-slate-700'
                                : 'bg-slate-800 hover:bg-blue-600 hover:text-white border-slate-700 text-slate-300'
                            }`}
                          >
                            اختيار
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer Note */}
            <div className={`pt-3 mt-2 border-t text-[11px] flex items-center justify-between gap-2 ${
              isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'
            }`}>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>يتم حفظ اختيارك المفضل تلقائياً في المتصفح</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  stopPreview();
                }}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
