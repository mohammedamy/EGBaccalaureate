import React from 'react';
import katex from 'katex';
import { toHindiDigits } from '../utils/arabicNumerals';

interface MathRendererProps {
  math?: string;
  text?: string;
  block?: boolean;
  className?: string;
  lang?: 'en' | 'ar';
}

/**
 * Normalizes TeX strings before KaTeX rendering:
 * 1. Converts any Eastern Arabic digits (٠-٩) to standard ASCII (0-9)
 *    so KaTeX renders math with correct glyphs and metric calculations.
 * 2. Replaces unicode minus and other typographic artifacts.
 */
const normalizeTex = (tex: string): string => {
  if (!tex) return '';
  const hindiMap = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  let s = tex
    .replace(/[٠-٩]/g, (d) => hindiMap.indexOf(d).toString())
    .replace(/−/g, '-');

  // Strip any accidental artifact like \f\frac, \b\binom, \t\text:
  s = s
    .replace(/\\f\\frac/g, '\\frac')
    .replace(/\\b\\binom/g, '\\binom')
    .replace(/\\b\\bar/g, '\\bar')
    .replace(/\\b\\beta/g, '\\beta')
    .replace(/\\t\\text/g, '\\text')
    .replace(/\x0crac/g, '\\frac')
    .replace(/\x08inom/g, '\\binom')
    .replace(/\x08ar/g, '\\bar')
    .replace(/\x08eta/g, '\\beta')
    .replace(/\x09ext/g, '\\text')
    .replace(/\x09imes/g, '\\times')
    .replace(/\x09heta/g, '\\theta')
    .replace(/\x0bec/g, '\\vec')
    .replace(/\x0dight/g, '\\right')
    .replace(/\\n/g, ' ');

  return s;
};

/**
 * Accurately determines if a string is a Pure Math expression rather than Markdown or prose text.
 */
const isPureMathExpression = (str: string, isBlock: boolean): boolean => {
  const s = str.trim();
  if (!s) return false;

  // 1. Markdown structures (headings, lists, multi-line prose) are never pure math expressions
  if (
    /^#{1,6}\s/m.test(s) ||
    /^[\*\-•]\s/m.test(s) ||
    /^(\d+|[٠-٩]+)\.\s/m.test(s) ||
    s.includes('\n\n')
  ) {
    return false;
  }

  // 2. If it contains math delimiters, it is ONLY a pure math expression if wrapped from beginning to end
  if (s.includes('$') || s.includes('\\(') || s.includes('\\[')) {
    const isFullyWrapped =
      (s.startsWith('$$') && s.endsWith('$$') && s.length >= 4) ||
      (s.startsWith('$') && s.endsWith('$') && s.length >= 2) ||
      (s.startsWith('\\[') && s.endsWith('\\]') && s.length >= 4) ||
      (s.startsWith('\\(') && s.endsWith('\\)') && s.length >= 4);
    if (!isFullyWrapped) {
      return false;
    }
    return true;
  }

  // 3. If it contains any LaTeX commands (e.g. \circ, \frac, \sqrt, \vec, \binom, \pm, \theta, etc.)
  if (/\\[a-zA-Z]+/.test(s)) {
    // Check if it is a full prose sentence with an accidental backslash
    const arabicWords = s.replace(/\\text\{[^}]*\}/g, '').match(/[\u0621-\u064A\u0671-\u06D3]{3,}/g);
    if (!arabicWords || arabicWords.length <= 1) {
      return true;
    }
  }

  // 4. If it contains Arabic letters (excluding numerals ٠-٩), it's Arabic prose/text with possible embedded math
  if (/[\u0621-\u064A\u0671-\u06D3]/.test(s)) {
    return false;
  }

  // 5. Count regular English prose words (words of 3+ letters not in LaTeX commands or standard math functions)
  const cleaned = s
    .replace(/\\text\{[^}]*\}/g, '')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/\b(sin|cos|tan|cot|sec|csc|log|ln|lim|det|min|max|exp|deg|mod)\b/gi, '');

  const proseWords = cleaned.match(/[a-zA-Z]{3,}/g);
  if (proseWords && proseWords.length >= 1) {
    return false;
  }

  // 6. Mathematical equations, operations, coordinates, or numbers (including Arabic-Indic numerals)
  if (/[=+\-*/^_{}()|]/.test(s) || /^[\d٠-٩]+$/.test(s)) {
    return true;
  }

  if (isBlock && (!proseWords || proseWords.length === 0)) {
    return true;
  }

  return false;
};

export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  text: textProp,
  block = false,
  className = '',
  lang = 'en',
}) => {
  const rawContent = (math || textProp || '').trim();
  if (!rawContent) return null;

  const stripMathDelimiters = (tex: string): string => {
    let s = tex.trim();
    while (true) {
      if (s.startsWith('$$') && s.endsWith('$$') && s.length >= 4) {
        s = s.slice(2, -2).trim();
      } else if (s.startsWith('\\[') && s.endsWith('\\]') && s.length >= 4) {
        s = s.slice(2, -2).trim();
      } else if (s.startsWith('\\(') && s.endsWith('\\)') && s.length >= 4) {
        s = s.slice(2, -2).trim();
      } else if (s.startsWith('$') && s.endsWith('$') && s.length >= 2) {
        s = s.slice(1, -1).trim();
      } else {
        break;
      }
    }
    return s;
  };

  const renderKaTeX = (tex: string, displayMode: boolean): string => {
    const cleanTex = normalizeTex(stripMathDelimiters(tex));
    try {
      return katex.renderToString(cleanTex, {
        displayMode,
        throwOnError: false,
        errorColor: '#38bdf8', // High-contrast sky-blue badge instead of dark red
        output: 'htmlAndMathml',
        strict: false,
      });
    } catch (e) {
      return `<span class="text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/40 font-mono">${cleanTex}</span>`;
    }
  };

  // Convert ASCII digits to Eastern Arabic (Hindi) digits in plain prose segments if lang === 'ar'
  const processPlainText = (str: string): string => {
    return lang === 'ar' ? toHindiDigits(str) : str;
  };

  // SCENARIO 1: The entire input is a Pure Math Expression (e.g. formula, equation, coordinate, pure TeX)
  if (isPureMathExpression(rawContent, block)) {
    const isDisplayMode = block || rawContent.startsWith('$$') || rawContent.startsWith('\\[');
    const html = renderKaTeX(rawContent, isDisplayMode);

    if (isDisplayMode) {
      const isPlain =
        className.includes('no-box') ||
        className.includes('bg-transparent') ||
        className.includes('border-0');

      const defaultBoxClasses = isPlain
        ? 'my-0.5 py-0.5 px-1'
        : 'my-2 py-2 px-3 rounded-xl bg-slate-900/80 border border-slate-700/60 shadow-inner';

      return (
        <div
          dir="ltr"
          style={{ unicodeBidi: 'isolate' }}
          className={`math-block-display text-center overflow-x-auto ${defaultBoxClasses} ${className}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    return (
      <span
        dir="ltr"
        style={{ unicodeBidi: 'isolate', display: 'inline' }}
        className={`math-inline-display px-1 font-medium ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // SCENARIO 2: Mixed Prose / Markdown Content (Headings, bullet points, text with embedded math)
  const renderMathAndText = (str: string): React.ReactNode => {
    // Split by all standard math delimiters: $$...$$, $...$, \[...\], \(...\)
    const parts = str.split(/(\$\$.*?\$\$|\$.*?\$|\\\[.*?\\\]|\\\(.*?\\\))/g);

    return parts.map((part, pIdx) => {
      const isBlockMath =
        (part.startsWith('$$') && part.endsWith('$$') && part.length >= 4) ||
        (part.startsWith('\\[') && part.endsWith('\\]') && part.length >= 4);

      if (isBlockMath) {
        const html = renderKaTeX(part, true);
        return (
          <span
            key={`block_inline_${pIdx}`}
            dir="ltr"
            style={{ unicodeBidi: 'isolate', display: 'block' }}
            className="my-2 py-1.5 text-center overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }

      const isInlineMath =
        (part.startsWith('$') && part.endsWith('$') && part.length >= 2) ||
        (part.startsWith('\\(') && part.endsWith('\\)') && part.length >= 4);

      if (isInlineMath) {
        const html = renderKaTeX(part, false);
        return (
          <span
            key={`math_${pIdx}`}
            dir="ltr"
            style={{ unicodeBidi: 'isolate', display: 'inline' }}
            className="px-1 font-medium"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }

      // Check for inline code `...`
      const codeParts = part.split(/(`.*?`)/g);
      return (
        <React.Fragment key={`text_wrap_${pIdx}`}>
          {codeParts.map((cp, cpIdx) => {
            if (cp.startsWith('`') && cp.endsWith('`') && cp.length >= 2) {
              return (
                <code
                  key={`code_${pIdx}_${cpIdx}`}
                  className="bg-slate-800 text-amber-300 px-1.5 py-0.5 rounded font-mono text-xs mx-0.5 border border-slate-700/60"
                >
                  {processPlainText(cp.slice(1, -1))}
                </code>
              );
            }
            return processPlainText(cp);
          })}
        </React.Fragment>
      );
    });
  };

  const renderInlineSegment = (segment: string): React.ReactNode => {
    // Split by **bold** first so bold phrases containing math formulas like **Formula ($T_{r+1}$):** are preserved
    const boldParts = segment.split(/(\*\*.*?\*\*)/g);

    return boldParts.map((bp, bpIdx) => {
      if (bp.startsWith('**') && bp.endsWith('**') && bp.length >= 4) {
        const inner = bp.slice(2, -2);
        return (
          <strong
            key={`b_${bpIdx}`}
            className="font-extrabold px-0.5"
          >
            {renderMathAndText(inner)}
          </strong>
        );
      }
      return <React.Fragment key={`t_${bpIdx}`}>{renderMathAndText(bp)}</React.Fragment>;
    });
  };

  // Parse lines for markdown structures
  const lines = rawContent.split(/\r?\n/);
  const elements: React.ReactNode[] = [];

  lines.forEach((line, idx) => {
    const trimmedLine = line.trim();
    if (!trimmedLine) {
      elements.push(<div key={`empty_${idx}`} className="h-2" />);
      return;
    }

    // Check for H3 heading ###
    if (trimmedLine.startsWith('### ')) {
      const headingText = trimmedLine.slice(4).trim();
      elements.push(
        <h3
          key={`h3_${idx}`}
          className="text-xl font-black text-amber-600 dark:text-amber-400 mt-5 mb-2.5 flex items-center gap-2 border-b border-slate-300 dark:border-slate-800 pb-1.5"
        >
          {renderInlineSegment(headingText)}
        </h3>
      );
      return;
    }

    // Check for H2 heading ##
    if (trimmedLine.startsWith('## ')) {
      const headingText = trimmedLine.slice(3).trim();
      elements.push(
        <h2
          key={`h2_${idx}`}
          className="text-2xl font-black text-indigo-700 dark:text-indigo-300 mt-6 mb-3 flex items-center gap-2 border-b border-indigo-200 dark:border-indigo-900/50 pb-2"
        >
          {renderInlineSegment(headingText)}
        </h2>
      );
      return;
    }

    // Check for H1 heading #
    if (trimmedLine.startsWith('# ')) {
      const headingText = trimmedLine.slice(2).trim();
      elements.push(
        <h1
          key={`h1_${idx}`}
          className="text-3xl font-extrabold text-slate-950 dark:text-white mt-6 mb-4"
        >
          {renderInlineSegment(headingText)}
        </h1>
      );
      return;
    }

    // Check for numbered list item (e.g. "1. ", "2. ", "١. ", "٢. ")
    const numMatch = trimmedLine.match(/^(\d+|[٠-٩]+)\.\s+(.*)$/);
    if (numMatch) {
      const numPrefix = numMatch[1];
      const listContent = numMatch[2];
      elements.push(
        <div
          key={`num_${idx}`}
          className="my-2 flex items-start gap-2"
        >
          <span className="font-extrabold text-amber-600 dark:text-amber-400 shrink-0 select-none">
            {lang === 'ar' ? toHindiDigits(numPrefix) : numPrefix}.
          </span>
          <div className="leading-relaxed flex-1">
            {renderInlineSegment(listContent)}
          </div>
        </div>
      );
      return;
    }

    // Check for bullet list item - or * or •
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ') || trimmedLine.startsWith('• ')) {
      const listText = trimmedLine.replace(/^[\*\-•]\s+/, '');
      elements.push(
        <li
          key={`li_${idx}`}
          className="ml-4 rtl:mr-4 rtl:ml-0 list-disc my-1 leading-relaxed"
        >
          {renderInlineSegment(listText)}
        </li>
      );
      return;
    }

    // Check for explicit block math $$ ... $$ or \[ ... \]
    if (
      (trimmedLine.startsWith('$$') && trimmedLine.endsWith('$$') && trimmedLine.length >= 4) ||
      (trimmedLine.startsWith('\\[') && trimmedLine.endsWith('\\]') && trimmedLine.length >= 4)
    ) {
      const html = renderKaTeX(trimmedLine, true);
      elements.push(
        <div
          key={`block_math_${idx}`}
          dir="ltr"
          style={{ unicodeBidi: 'isolate' }}
          className="my-3 py-2 text-center overflow-x-auto bg-slate-900/80 rounded-xl border border-slate-700/60 shadow-inner"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
      return;
    }

    // Check if the entire line is a standalone pure math formula (e.g. \vec{AB} = B - A = ...)
    if (isPureMathExpression(trimmedLine, true)) {
      const html = renderKaTeX(trimmedLine, true);
      elements.push(
        <div
          key={`pure_line_${idx}`}
          dir="ltr"
          style={{ unicodeBidi: 'isolate' }}
          className="my-3 py-2 text-center overflow-x-auto bg-slate-900/80 rounded-xl border border-slate-700/60 shadow-inner"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
      return;
    }

    // Default line paragraph
    elements.push(
      <p
        key={`p_${idx}`}
        className="my-1.5 leading-relaxed"
      >
        {renderInlineSegment(trimmedLine)}
      </p>
    );
  });

  return <div className={`math-rendered-container ${className}`}>{elements}</div>;
};
