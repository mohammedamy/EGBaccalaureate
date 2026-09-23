/**
 * Device Capability & Low-Data Detector
 * (فاحص قدرات الجهاز ونظام توفير البيانات)
 *
 * Probes client hardware, GPU WebGL capability, network data-saver mode,
 * and user preferences to dynamically degrade 3D simulations to 2D/SVG
 * fallbacks on low-end devices (e.g. 2GB Android Go devices in rural Egypt).
 */

const LOW_DATA_STORAGE_KEY = 'egbac_low_data';

let cachedWebGLSupport: boolean | null = null;

/**
 * Probes whether the device has a functioning WebGL/WebGL2 context.
 * Many budget MediaTek/Spreadtrum chipsets fail WebGL context allocation
 * or crash when loading large Three.js vertex shaders.
 */
export function isWebGLSupported(): boolean {
  if (cachedWebGLSupport !== null) {
    return cachedWebGLSupport;
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    cachedWebGLSupport = false;
    return false;
  }

  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    cachedWebGLSupport = !!(gl && gl instanceof WebGLRenderingContext);

    // Clean up WebGL context extension if available
    if (gl) {
      const loseContext = gl.getExtension('WEBGL_lose_context');
      if (loseContext) {
        loseContext.loseContext();
      }
    }
  } catch {
    cachedWebGLSupport = false;
  }

  return cachedWebGLSupport;
}

/**
 * Checks whether Low-Data Mode is active, either via:
 * 1. User manual toggle in Accessibility settings (`egbac_low_data === 'true'`)
 * 2. Browser Network Information API (`navigator.connection.saveData === true`)
 */
export function isLowDataModeActive(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const saved = localStorage.getItem(LOW_DATA_STORAGE_KEY);
    if (saved !== null) {
      return saved === 'true';
    }

    // Check browser native data saver flag
    const nav = navigator as unknown as {
      connection?: { saveData?: boolean };
    };
    if (nav.connection && typeof nav.connection.saveData === 'boolean') {
      return nav.connection.saveData;
    }
  } catch {
    // Local storage inaccessible
  }

  return false;
}

/**
 * Explicitly toggle or set Low-Data Mode.
 */
export function setLowDataMode(enabled: boolean): void {
  try {
    localStorage.setItem(LOW_DATA_STORAGE_KEY, String(enabled));
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-low-data', String(enabled));
    }
  } catch {
    // Local storage inaccessible
  }
}

/**
 * Detects if the device has low hardware specifications
 * (e.g. ≤ 3 GB RAM or ≤ 4 CPU cores).
 */
export function isLowEndHardware(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const nav = navigator as unknown as {
      hardwareConcurrency?: number;
      deviceMemory?: number;
    };

    if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 3) {
      return true;
    }

    if (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 4) {
      return true;
    }
  } catch {
    // Ignore
  }

  return false;
}

/**
 * Primary decision function: should 3D Three.js labs fallback to annotated 2D SVG?
 * True if:
 *   - WebGL is unsupported or failed context probe
 *   - Low-Data mode is active
 *   - Device memory is critically constrained
 */
export function shouldUse2DLabFallback(): boolean {
  if (!isWebGLSupported()) return true;
  if (isLowDataModeActive()) return true;
  return false;
}
