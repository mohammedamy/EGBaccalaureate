import { useState, useEffect, useCallback } from 'react';

/**
 * Checks if the browser is currently in true OS/hardware fullscreen mode.
 */
export function isNativeFullscreen(): boolean {
  if (typeof document === 'undefined') return false;
  const doc = document as any;
  return Boolean(
    doc.fullscreenElement ||
    doc.webkitFullscreenElement ||
    doc.mozFullScreenElement ||
    doc.msFullscreenElement
  );
}

/**
 * Requests native hardware/browser fullscreen on the given element (default: document.documentElement).
 * Hides all browser UI (tabs, address bar, bookmarks) and OS window chrome.
 */
export async function requestNativeFullscreen(
  element: HTMLElement = document.documentElement
): Promise<boolean> {
  if (typeof document === 'undefined') return false;
  try {
    const el = element as any;
    if (el.requestFullscreen) {
      await el.requestFullscreen();
      return true;
    } else if (el.webkitRequestFullscreen) {
      await el.webkitRequestFullscreen();
      return true;
    } else if (el.mozRequestFullScreen) {
      await el.mozRequestFullScreen();
      return true;
    } else if (el.msRequestFullscreen) {
      await el.msRequestFullscreen();
      return true;
    }
  } catch (err) {
    console.warn('Native requestFullscreen failed or was rejected:', err);
  }
  return false;
}

/**
 * Exits native hardware/browser fullscreen.
 */
export async function exitNativeFullscreen(): Promise<boolean> {
  if (typeof document === 'undefined') return false;
  try {
    const doc = document as any;
    if (isNativeFullscreen()) {
      if (doc.exitFullscreen) {
        await doc.exitFullscreen();
        return true;
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
        return true;
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
        return true;
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
        return true;
      }
    }
  } catch (err) {
    console.warn('Native exitFullscreen failed:', err);
  }
  return false;
}

export interface UseNativeLabFullscreenOptions {
  /**
   * Whether to default to fullscreen mode if already in native fullscreen or explicitly requested.
   * Default is false so labs start in their curriculum embedded view.
   */
  defaultFullscreen?: boolean;
  /** Optional callback fired when fullscreen exits */
  onExitFullscreen?: () => void;
  /** Optional callback fired when fullscreen enters */
  onEnterFullscreen?: () => void;
}

/**
 * Custom React Hook for True Native Fullscreen Laboratory Workstations.
 *
 * 1. Controls true hardware/browser fullscreen via HTML5 Fullscreen API (requestFullscreen / exitFullscreen),
 *    taking over the entire physical display and hiding all browser tabs, URL bar, and OS chrome.
 * 2. Synchronizes bidirectional state with browser native events (`fullscreenchange`), handling Esc, F11,
 *    and OS-level gestures automatically.
 * 3. Auto-adjusts typography scale while in fullscreen via `data-fullscreen-lab="true"` and CSS clamp so
 *    that all options, sliders, and live telemetry fit on a single screen without internal scrolling or overlap.
 * 4. Automatically restores the user's previously selected font preference (`data-font-size`) upon exit.
 */
export function useNativeLabFullscreen(options?: UseNativeLabFullscreenOptions) {
  const { defaultFullscreen = false, onExitFullscreen, onEnterFullscreen } = options || {};

  const [isFullscreen, setIsFullscreen] = useState<boolean>(() => {
    return isNativeFullscreen() || defaultFullscreen;
  });

  const enterFullscreen = useCallback(async () => {
    await requestNativeFullscreen(document.documentElement);
    setIsFullscreen(true);
    onEnterFullscreen?.();
  }, [onEnterFullscreen]);

  const exitFullscreen = useCallback(async () => {
    await exitNativeFullscreen();
    setIsFullscreen(false);
    onExitFullscreen?.();
  }, [onExitFullscreen]);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen || isNativeFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  // Synchronize state with native browser fullscreenchange events
  useEffect(() => {
    const handleNativeChange = () => {
      const active = isNativeFullscreen();
      setIsFullscreen(active);
      if (active) {
        onEnterFullscreen?.();
      } else {
        onExitFullscreen?.();
      }
    };

    document.addEventListener('fullscreenchange', handleNativeChange);
    document.addEventListener('webkitfullscreenchange', handleNativeChange);
    document.addEventListener('mozfullscreenchange', handleNativeChange);
    document.addEventListener('MSFullscreenChange', handleNativeChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleNativeChange);
      document.removeEventListener('webkitfullscreenchange', handleNativeChange);
      document.removeEventListener('mozfullscreenchange', handleNativeChange);
      document.removeEventListener('MSFullscreenChange', handleNativeChange);
    };
  }, [onEnterFullscreen, onExitFullscreen]);

  // Typography scale management and body overflow locking
  useEffect(() => {
    if (!isFullscreen) return;

    // 1. Capture user's selected font preference from data-font-size or localStorage
    const previousFontSize =
      document.documentElement.getAttribute('data-font-size') ||
      localStorage.getItem('egbac_font_size') ||
      'normal';

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 2. Mark html element with data-fullscreen-lab="true" for calibrated scaling
    document.documentElement.setAttribute('data-fullscreen-lab', 'true');

    // 3. Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        exitFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 4. Cleanup on exit or unmount: restore user font setting and body overflow
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      document.documentElement.removeAttribute('data-fullscreen-lab');
      const restoredSize = localStorage.getItem('egbac_font_size') || previousFontSize;
      document.documentElement.setAttribute('data-font-size', restoredSize);
    };
  }, [isFullscreen, exitFullscreen]);

  return {
    isFullscreen,
    setIsFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
}
