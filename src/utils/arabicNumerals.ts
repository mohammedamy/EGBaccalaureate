/**
 * Converts Western ASCII digits (0-9) into Eastern Arabic / Hindi digits (٠-٩)
 * as required by the official Egyptian Ministry of Education Mathematics Standard.
 */
export const toHindiDigits = (val: string | number | undefined | null): string => {
  if (val === null || val === undefined) return '';
  const str = String(val);
  const hindiDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, (d) => hindiDigits[parseInt(d, 10)]);
};

/**
 * Converts numbers inside LaTeX equations to Hindi digits for Arabic Mode
 */
export const convertLatexToHindi = (latexStr: string): string => {
  if (!latexStr) return '';
  const hindiDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  // Convert standalone digits in LaTeX
  return latexStr.replace(/[0-9]/g, (d) => hindiDigits[parseInt(d, 10)]);
};
