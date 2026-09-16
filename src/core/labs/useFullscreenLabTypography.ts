import { useEffect } from 'react';

/**
 * Automatically adjusts typography when entering full-screen workstation mode
 * so that all sliders, switchers, options, and telemetry fit on a single screen
 * with zero scrolling and no overlapping.
 *
 * When exiting full-screen mode, restores the exact font size preference
 * that the user selected in the application (e.g. normal, large, or xlarge).
 */
export function useFullscreenLabTypography(
  isFullscreen: boolean,
  onExitFullscreen?: () => void
) {
  useEffect(() => {
    if (!isFullscreen) return;

    // 1. Capture the user's current selected font size setting
    const previousFontSize =
      document.documentElement.getAttribute('data-font-size') ||
      localStorage.getItem('egbac_font_size') ||
      'normal';

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 2. Mark the html element with data-fullscreen-lab="true" for calibrated scaling
    document.documentElement.setAttribute('data-fullscreen-lab', 'true');

    // 3. Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen?.().catch(() => {});
        }
        onExitFullscreen?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 4. Cleanup on exit or unmount: restore user's setting and overflow
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      document.documentElement.removeAttribute('data-fullscreen-lab');
      const restoredSize = localStorage.getItem('egbac_font_size') || previousFontSize;
      document.documentElement.setAttribute('data-font-size', restoredSize);
    };
  }, [isFullscreen, onExitFullscreen]);
}
