import React, { useEffect } from 'react';
import type { Language } from '../i18n/translations';
import { FrenchAudioStudio } from './labs/FrenchAudioStudio';
import { X, Headphones } from 'lucide-react';
import { acquireScrollLock } from '../core/labs/useNativeLabFullscreen';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const FrenchListeningStationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang = 'ar',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

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

  // Lock body scroll when modal is open using atomic reference-counted lock
  useEffect(() => {
    if (!isOpen) return;
    const releaseLock = acquireScrollLock();
    return () => {
      releaseLock();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden z-10 ${
          isLight
            ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-slate-300/50'
            : 'bg-slate-900 border-slate-800 text-slate-100 shadow-black/80'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/50 bg-slate-850/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black tracking-tight flex items-center gap-2">
                <span>Station d'Écoute & Phonétique Française</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono">
                  3è Secondaire • Club @dos Plus 3
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">Esc pour fermer</span>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Fermer (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with FrenchAudioStudio */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5">
          <FrenchAudioStudio lang={lang} theme={theme} isFullscreen={false} />
        </div>
      </div>
    </div>
  );
};
