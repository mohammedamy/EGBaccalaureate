import React, { useEffect, useId, useState } from 'react';
import { Volume2, Square, Loader2 } from 'lucide-react';
import {
  aiVoiceEngine,
  OPENROUTER_FISH_AUDIO_MODEL,
  type SpeechContextType,
  type SpeechProviderSource,
} from '../services/aiVoiceEngine';

export interface SpeechNarrationButtonProps {
  text: string | string[] | undefined | null;
  lang: 'ar' | 'en' | string;
  context?: SpeechContextType;
  labelAr?: string;
  labelEn?: string;
  compact?: boolean;
  className?: string;
  rate?: number;
}

export const SpeechNarrationButton: React.FC<SpeechNarrationButtonProps> = ({
  text,
  lang,
  context = 'explanation',
  labelAr,
  labelEn,
  compact = false,
  className = '',
  rate,
}) => {
  const buttonId = useId();
  const isAr = (lang || '').toLowerCase().startsWith('ar');

  const [isActivePlaying, setIsActivePlaying] = useState(false);
  const [isActiveLoading, setIsActiveLoading] = useState(false);
  const [resolvedSource, setResolvedSource] = useState<SpeechProviderSource | null>(null);

  useEffect(() => {
    const unsubscribe = aiVoiceEngine.subscribe((playing, _txt, _voice, loading, activeId, source) => {
      const isMine = activeId === buttonId;
      setIsActivePlaying(isMine && playing);
      setIsActiveLoading(isMine && loading);
      if (isMine) {
        setResolvedSource(source);
      } else {
        setResolvedSource(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [buttonId]);

  const normalizedContent = Array.isArray(text)
    ? text.filter((item) => typeof item === 'string' && item.trim().length > 0)
    : typeof text === 'string' && text.trim().length > 0
    ? [text.trim()]
    : [];

  if (normalizedContent.length === 0) {
    return null;
  }

  const defaultLabelAr = context === 'hint' ? 'استمع للتلميح' : 'استمع للشرح';
  const defaultLabelEn = context === 'hint' ? 'Listen to Hint' : 'Listen';

  const handleToggleSpeech = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isActivePlaying || isActiveLoading) {
      aiVoiceEngine.stopAll();
      return;
    }

    aiVoiceEngine.speakHintOrExplanation(normalizedContent, {
      id: buttonId,
      lang: isAr ? 'ar-EG' : lang,
      context,
      rate,
    });
  };

  const tooltipTitle = isActivePlaying
    ? resolvedSource === 'openrouter_fish_audio'
      ? isAr
        ? `إيقاف القراءة الصوتية (${OPENROUTER_FISH_AUDIO_MODEL})`
        : `Stop narration (${OPENROUTER_FISH_AUDIO_MODEL})`
      : isAr
      ? 'إيقاف القراءة الصوتية (الصوت الاحتياطي الذكي)'
      : 'Stop narration (Fallback Neural Voice)'
    : isAr
    ? `${labelAr || defaultLabelAr} (${OPENROUTER_FISH_AUDIO_MODEL})`
    : `${labelEn || defaultLabelEn} (${OPENROUTER_FISH_AUDIO_MODEL})`;

  return (
    <button
      type="button"
      onClick={handleToggleSpeech}
      title={tooltipTitle}
      aria-label={tooltipTitle}
      className={`no-print inline-flex items-center gap-1.5 rounded-lg border font-bold transition-all cursor-pointer shrink-0 select-none ${
        compact ? 'px-2 py-1 text-[10px]' : 'px-2.5 py-1 text-[11px]'
      } ${
        isActivePlaying
          ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border-rose-500/40 shadow-xs'
          : isActiveLoading
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-600 dark:text-cyan-300 border-cyan-500/35'
      } ${className}`}
    >
      {isActiveLoading ? (
        <>
          <Loader2 className="w-3 h-3 animate-spin shrink-0" />
          {!compact && <span>{isAr ? 'جاري التوليد...' : 'Loading...'}</span>}
        </>
      ) : isActivePlaying ? (
        <>
          <Square className="w-3 h-3 fill-current shrink-0" />
          {!compact && <span>{isAr ? 'إيقاف' : 'Stop'}</span>}
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 shrink-0" />
          {!compact && <span>{isAr ? labelAr || defaultLabelAr : labelEn || defaultLabelEn}</span>}
        </>
      )}
    </button>
  );
};

