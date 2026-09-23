import React, { useState, useEffect } from 'react';
import { Download, Smartphone, WifiOff, X, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface PwaInstallPromptProps {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isOpen?: boolean;
  onClose?: () => void;
  onInstalled?: () => void;
}

const DISMISS_KEY = 'egbac_pwa_prompt_dismissed_until';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export const PwaInstallPrompt: React.FC<PwaInstallPromptProps> = ({
  lang,
  theme = 'dark',
  isOpen: forceOpen,
  onClose,
  onInstalled,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isInstalling, setIsInstalling] = useState<boolean>(false);

  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  useEffect(() => {
    // Check if already in standalone mode (installed)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Capture install prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Check if user dismissed prompt recently
      const dismissedUntil = localStorage.getItem(DISMISS_KEY);
      if (!dismissedUntil || Date.now() > parseInt(dismissedUntil, 10)) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsVisible(false);
      setDeferredPrompt(null);
      if (onInstalled) onInstalled();
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, [onInstalled]);

  // When forceOpen is controlled from parent (e.g. after finishing an exam drill)
  useEffect(() => {
    if (forceOpen !== undefined) {
      setIsVisible(forceOpen && !isInstalled);
    }
  }, [forceOpen, isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Manual fallback instructions for browsers like iOS Safari
      alert(
        isAr
          ? 'لتثبيت التطبيق على جهازك: اضغط على أيقونة المشاركة (Share) في المتصفح ثم اختر "إضافة إلى الشاشة الرئيسية" (Add to Home Screen).'
          : 'To install on iOS: Tap the Share button in Safari, then select "Add to Home Screen".'
      );
      return;
    }

    try {
      setIsInstalling(true);
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
        setIsVisible(false);
        if (onInstalled) onInstalled();
      }
    } catch (err) {
      console.error('[PWA] Install error:', err);
    } finally {
      setIsInstalling(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    // Don't show again for 7 days unless explicitly requested
    localStorage.setItem(DISMISS_KEY, (Date.now() + SEVEN_DAYS_MS).toString());
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible || isInstalled) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-install-title"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-50 animate-slideUp"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl transition-all duration-300
          ${
            isLight
              ? 'bg-white/95 border-emerald-200 shadow-emerald-500/10'
              : 'bg-slate-900/95 border-emerald-500/30 shadow-emerald-500/20'
          }
        `}
      >
        {/* Decorative Top Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className={`absolute top-3 ${isAr ? 'left-3' : 'right-3'} p-1.5 rounded-lg transition-colors ${
            isLight
              ? 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
          }`}
          aria-label={isAr ? 'إغلاق' : 'Close'}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 mt-1">
          {/* App Icon with Badge */}
          <div className="relative shrink-0">
            <img
              src="./clipsat-logo.png"
              alt="ClipSAT Logo"
              className="w-12 h-12 rounded-xl shadow-md border border-emerald-500/30 object-cover"
              onError={(e) => {
                // Fallback icon container if image fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 pr-2">
            <h3
              id="pwa-install-title"
              className={`text-sm font-bold leading-tight ${isLight ? 'text-slate-900' : 'text-white'}`}
            >
              {isAr ? 'تثبيت تطبيق كليبسات على جهازك' : 'Install ClipSAT on your device'}
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              {isAr
                ? 'استمتع بالدراسة بدون إنترنت وتجربة أسرع كبرنامج كامل على هاتفك أو حاسوبك.'
                : 'Study completely offline with faster performance directly on your phone or PC.'}
            </p>

            {/* Micro Benefits Pills */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium ${
                  isLight ? 'bg-emerald-50 text-emerald-700' : 'bg-emerald-500/15 text-emerald-300'
                }`}
              >
                <WifiOff className="w-3 h-3" />
                {isAr ? 'يعمل بدون نت' : 'Offline ready'}
              </span>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium ${
                  isLight ? 'bg-cyan-50 text-cyan-700' : 'bg-cyan-500/15 text-cyan-300'
                }`}
              >
                <Smartphone className="w-3 h-3" />
                {isAr ? 'خفيف وسريع' : 'Ultra fast'}
              </span>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium ${
                  isLight ? 'bg-amber-50 text-amber-700' : 'bg-amber-500/15 text-amber-300'
                }`}
              >
                <CheckCircle2 className="w-3 h-3" />
                {isAr ? 'مجاني ١٠٠٪' : '100% Free'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-3.5">
              <button
                type="button"
                onClick={handleInstallClick}
                disabled={isInstalling}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 shadow-md shadow-emerald-500/20 transition-all duration-150 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {isInstalling
                    ? isAr
                      ? 'جارِ التثبيت...'
                      : 'Installing...'
                    : isAr
                    ? 'تثبيت الآن مجاناً'
                    : 'Install Now Free'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleDismiss}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  isLight
                    ? 'text-slate-600 hover:bg-slate-100'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {isAr ? 'لاحقاً' : 'Later'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
