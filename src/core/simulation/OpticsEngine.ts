/**
 * OpticsEngine.ts
 * Ray-tracing, Snell's law refraction, chromatic dispersion prism,
 * thin lens imaging, and Fraunhofer diffraction wave profile solvers.
 */

export interface OpticalRay {
  originX: number;
  originY: number;
  dirX: number;
  dirY: number;
  wavelengthNm: number; // e.g. 700 (red) to 400 (violet)
  intensity: number;    // 0.0 to 1.0
  color: string;
}

export interface RaySegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  intensity: number;
}

export interface OpticalElement {
  id: string;
  type: 'lens_convex' | 'lens_concave' | 'prism' | 'mirror_flat' | 'mirror_concave' | 'slit_double';
  x: number;
  y: number;
  focalLength?: number;
  refractiveIndex?: number;
  prismAngleDeg?: number;
  slitWidthUm?: number;
  slitSepUm?: number;
}

/**
 * Maps light wavelength in nanometers to RGB string for visual dispersion.
 */
export function wavelengthToRGB(wavelength: number, alpha: number = 1.0): string {
  let r = 0, g = 0, b = 0;
  if (wavelength >= 380 && wavelength < 440) {
    r = -(wavelength - 440) / (440 - 380);
    b = 1.0;
  } else if (wavelength >= 440 && wavelength < 490) {
    g = (wavelength - 440) / (490 - 440);
    b = 1.0;
  } else if (wavelength >= 490 && wavelength < 510) {
    g = 1.0;
    b = -(wavelength - 510) / (510 - 490);
  } else if (wavelength >= 510 && wavelength < 580) {
    r = (wavelength - 510) / (580 - 510);
    g = 1.0;
  } else if (wavelength >= 580 && wavelength < 645) {
    r = 1.0;
    g = -(wavelength - 645) / (645 - 580);
  } else if (wavelength >= 645 && wavelength <= 780) {
    r = 1.0;
  } else {
    return `rgba(255, 255, 255, ${alpha})`;
  }

  // Intensity falloff near vision limits
  let factor = 1.0;
  if (wavelength < 420) factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
  else if (wavelength > 700) factor = 0.3 + 0.7 * (780 - wavelength) / (780 - 700);

  const red = Math.round(255 * Math.pow(r * factor, 0.8));
  const green = Math.round(255 * Math.pow(g * factor, 0.8));
  const blue = Math.round(255 * Math.pow(b * factor, 0.8));
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/**
 * Snell's Law Refraction Calculator:
 * n1 * sin(theta1) = n2 * sin(theta2)
 * Returns { refractedAngleRad, isTIR }
 */
export function calculateSnellsLaw(
  theta1Rad: number,
  n1: number,
  n2: number
): { theta2Rad: number; isTIR: boolean } {
  const sinTheta1 = Math.sin(theta1Rad);
  const sinTheta2 = (n1 / n2) * sinTheta1;

  if (Math.abs(sinTheta2) > 1.0) {
    // Total Internal Reflection (TIR)
    return { theta2Rad: theta1Rad, isTIR: true };
  }

  return { theta2Rad: Math.asin(sinTheta2), isTIR: false };
}

/**
 * Cauchy's chromatic dispersion equation:
 * n(lambda) = A + B / (lambda_um^2)
 */
export function getCauchyRefractiveIndex(wavelengthNm: number, baseN: number = 1.52): number {
  const lambdaUm = wavelengthNm / 1000;
  const B = 0.005; // Typical crown glass dispersion constant
  return baseN + B / (lambdaUm * lambdaUm);
}

/**
 * Thin Lens Equation Calculator:
 * 1/f = 1/do + 1/di  ==>  di = (f * do) / (do - f)
 * Magnification m = -di / do
 */
export function calculateThinLens(
  focalLength: number,
  objectDistance: number,
  objectHeight: number
): {
  imageDistance: number;
  imageHeight: number;
  magnification: number;
  isReal: boolean;
  isUpright: boolean;
} {
  if (Math.abs(objectDistance - focalLength) < 1e-4) {
    // Object placed exactly at focal point -> rays are parallel, image at infinity
    return {
      imageDistance: Infinity,
      imageHeight: Infinity,
      magnification: Infinity,
      isReal: true,
      isUpright: false,
    };
  }

  const di = (focalLength * objectDistance) / (objectDistance - focalLength);
  const m = -di / objectDistance;
  const hi = m * objectHeight;

  return {
    imageDistance: di,
    imageHeight: hi,
    magnification: m,
    isReal: di > 0,
    isUpright: hi > 0,
  };
}

/**
 * Fraunhofer Double-Slit Diffraction Intensity:
 * I(theta) = I0 * [sin(beta)/beta]^2 * cos^2(alpha)
 * beta = (pi * a / lambda) * sin(theta)
 * alpha = (pi * d / lambda) * sin(theta)
 */
export function calculateDoubleSlitIntensity(
  thetaRad: number,
  wavelengthNm: number,
  slitWidthUm: number,
  slitSepUm: number
): number {
  const lambdaUm = wavelengthNm / 1000;
  const sinTheta = Math.sin(thetaRad);

  const beta = (Math.PI * slitWidthUm / lambdaUm) * sinTheta;
  const alpha = (Math.PI * slitSepUm / lambdaUm) * sinTheta;

  // Single slit diffraction factor (sinc^2)
  const diffFactor = Math.abs(beta) < 1e-6 ? 1.0 : Math.pow(Math.sin(beta) / beta, 2);

  // Double slit interference factor (cos^2)
  const interfFactor = Math.pow(Math.cos(alpha), 2);

  return diffFactor * interfFactor;
}
