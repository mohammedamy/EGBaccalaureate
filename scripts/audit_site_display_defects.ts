import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';

// Suppress KaTeX standard font metrics warnings for non-Latin characters (e.g. Arabic script in math mode)
const originalWarn = console.warn;
console.warn = (...args: any[]) => {
  if (typeof args[0] === 'string' && (args[0].includes('No character metrics') || args[0].includes('KaTeX font'))) return;
  originalWarn(...args);
};

interface Issue {
  category: string;
  source: string;
  details: string;
  snippet?: string;
}

const issues: Issue[] = [];

// ----------------------------------------------------
// 1. Audit Data for Unrendered LaTeX & KaTeX Errors
// ----------------------------------------------------
console.log('--- Step 1: Auditing all Curricula Data for Unrendered LaTeX & KaTeX Errors ---');

const commonLatexCommands = [
  '\\\\frac', '\\\\sqrt', '\\\\vec', '\\\\theta', '\\\\alpha', '\\\\beta', '\\\\gamma',
  '\\\\Delta', '\\\\lambda', '\\\\pi', '\\\\mu', '\\\\Omega', '\\\\times', '\\\\cdot',
  '\\\\approx', '\\\\leq', '\\\\geq', '\\\\pm', '\\\\sum', '\\\\int', '\\\\partial',
  '\\\\infty', '\\\\text', '\\\\mathbf', '\\\\hat', '\\\\bar', '\\\\begin', '\\\\end'
];
const rawLatexRegex = new RegExp(`(?<!\\$)(?:${commonLatexCommands.join('|')})`, 'g');

function checkString(source: string, fieldName: string, val: any) {
  if (typeof val !== 'string' || !val.trim()) return;

  // Check 1: Odd number of dollar signs (unclosed math delimiter)
  const dollarMatches = val.match(/(^|[^\\])\$/g);
  if (dollarMatches && dollarMatches.length % 2 !== 0) {
    issues.push({
      category: 'Unclosed Math Delimiter ($)',
      source,
      details: `Field "${fieldName}" has ${dollarMatches.length} dollar signs (unmatched $)`,
      snippet: val.slice(0, 100),
    });
  }

  // Check 2: Raw LaTeX commands OUTSIDE of $...$ or $$...$$
  // Remove matched $$...$$ and $...$
  const withoutDelimitedMath = val
    .replace(/\$\$[\s\S]+?\$\$/g, ' ')
    .replace(/\$[^\$]+?\$/g, ' ');

  // If there are raw LaTeX commands remaining:
  const rawMatches = withoutDelimitedMath.match(rawLatexRegex);
  if (rawMatches) {
    // Check if string is a pure math formula or formula.latex which MathRenderer renders directly
    const hasEnglishWords = /[a-zA-Z]{3,}/.test(withoutDelimitedMath.replace(/\\(frac|sqrt|vec|theta|alpha|beta|gamma|Delta|lambda|pi|mu|Omega|times|cdot|approx|leq|geq|pm|sum|int|partial|infty|text|mathbf|hat|bar|begin|end|sin|cos|tan|log|ln|lim|min|max)/g, ' '));
    const hasArabicWords = /[\u0621-\u064A]{2,}/.test(withoutDelimitedMath.replace(/\\text\{[^}]*\}/g, ''));
    const isProseWithRawLatex = (hasEnglishWords || hasArabicWords) && !fieldName.endsWith('.latex');

    if (isProseWithRawLatex) {
      issues.push({
        category: 'Unrendered Raw LaTeX in Prose (Missing $ Delimiters)',
        source,
        details: `Field "${fieldName}" contains raw LaTeX commands in prose outside math delimiters: ${Array.from(new Set(rawMatches)).join(', ')}`,
        snippet: val.slice(0, 120),
      });
    }
  }

  // Check 3: Extract and validate all math with KaTeX
  const blockRegex = /\$\$([\s\S]+?)\$\$/g;
  let match;
  while ((match = blockRegex.exec(val)) !== null) {
    const math = match[1].trim();
    try {
      katex.renderToString(math, { displayMode: true, throwOnError: true, strict: 'ignore' });
    } catch (err: any) {
      issues.push({
        category: 'KaTeX Parse Error ($$ Block)',
        source,
        details: `KaTeX failed on block math in "${fieldName}": ${err.message}`,
        snippet: math,
      });
    }
  }

  const inlineRegex = /\$([^\$]+?)\$/g;
  const stripped = val.replace(/\$\$[\s\S]+?\$\$/g, ' ');
  while ((match = inlineRegex.exec(stripped)) !== null) {
    const math = match[1].trim();
    try {
      katex.renderToString(math, { displayMode: false, throwOnError: true, strict: 'ignore' });
    } catch (err: any) {
      issues.push({
        category: 'KaTeX Parse Error ($ Inline)',
        source,
        details: `KaTeX failed on inline math in "${fieldName}": ${err.message}`,
        snippet: math,
      });
    }
  }
}

function traverseObject(source: string, obj: any, path = '') {
  if (!obj) return;
  if (typeof obj === 'string') {
    checkString(source, path, obj);
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => traverseObject(source, item, `${path}[${idx}]`));
  } else if (typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      traverseObject(source, obj[key], path ? `${path}.${key}` : key);
    }
  }
}

// Traverse both curricula
traverseObject('thanaweyaCurriculum', thanaweyaCurriculum);
traverseObject('egBacCurriculum', egBacCurriculum);

// Also traverse all files in src/data/textbook and src/data/databanks
const dataDirs = [
  path.resolve(process.cwd(), 'src/data/textbook'),
  path.resolve(process.cwd(), 'src/data/databanks'),
];

for (const dir of dataDirs) {
  if (fs.existsSync(dir)) {
    const subdirs = fs.readdirSync(dir);
    for (const sub of subdirs) {
      const fullSub = path.join(dir, sub);
      if (fs.statSync(fullSub).isDirectory()) {
        const files = fs.readdirSync(fullSub).filter(f => f.endsWith('.ts'));
        for (const file of files) {
          const filePath = path.join(fullSub, file);
          try {
            const mod = require(filePath);
            traverseObject(file, mod);
          } catch (e: any) {
            // module might need imports
          }
        }
      }
    }
  }
}

console.log(`Step 1 complete. Found ${issues.length} data-level issues so far.\n`);

// ----------------------------------------------------
// 2. Audit TextbookDiagram.tsx for Text Overlaps & Boundaries
// ----------------------------------------------------
console.log('--- Step 2: Auditing TextbookDiagram.tsx SVG Text Coordinates & Overlaps ---');

const textbookDiagramPath = path.resolve(process.cwd(), 'src/components/TextbookDiagram.tsx');
const textbookSource = fs.readFileSync(textbookDiagramPath, 'utf8');

// Parse each diagram case in TextbookDiagram.tsx
const diagramBlocks = textbookSource.split(/\{type === '([a-zA-Z0-9_]+)' && \(/);
for (let i = 1; i < diagramBlocks.length; i += 2) {
  const diagramType = diagramBlocks[i];
  const diagramSvgContent = diagramBlocks[i + 1] ? diagramBlocks[i + 1].split('</svg>')[0] : '';
  
  // Split by <g transform="translate(tx, ty)"> to calculate accurate absolute coordinates
  const gRegex = /<g\s+transform="translate\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)\)">([\s\S]*?)<\/g>/g;
  const texts: Array<{ x: number; y: number; content: string; textAnchor: string; attrs: string }> = [];
  let gMatch;

  // Texts inside translated groups
  while ((gMatch = gRegex.exec(diagramSvgContent)) !== null) {
    const tx = parseFloat(gMatch[1]);
    const ty = parseFloat(gMatch[2]);
    const gContent = gMatch[3];
    const textRegex = /<text\s+([^>]*?)>([\s\S]*?)<\/text>/g;
    let tm;
    while ((tm = textRegex.exec(gContent)) !== null) {
      const attrs = tm[1];
      const xm = attrs.match(/x="([^"]+)"/);
      const ym = attrs.match(/y="([^"]+)"/);
      const anchorMatch = attrs.match(/textAnchor="([^"]+)"/);
      if (xm && ym) {
        texts.push({
          x: parseFloat(xm[1]) + tx,
          y: parseFloat(ym[1]) + ty,
          content: tm[2].replace(/\{.*?\}/g, '').trim(),
          textAnchor: anchorMatch ? anchorMatch[1] : 'start',
          attrs,
        });
      }
    }
  }

  // Standalone texts outside translated groups
  const withoutG = diagramSvgContent.replace(gRegex, ' ');
  const standaloneTextRegex = /<text\s+([^>]*?)>([\s\S]*?)<\/text>/g;
  let stm;
  while ((stm = standaloneTextRegex.exec(withoutG)) !== null) {
    const attrs = stm[1];
    const xm = attrs.match(/x="([^"]+)"/);
    const ym = attrs.match(/y="([^"]+)"/);
    const anchorMatch = attrs.match(/textAnchor="([^"]+)"/);
    if (xm && ym) {
      texts.push({
        x: parseFloat(xm[1]),
        y: parseFloat(ym[1]),
        content: stm[2].replace(/\{.*?\}/g, '').trim(),
        textAnchor: anchorMatch ? anchorMatch[1] : 'start',
        attrs,
      });
    }
  }

  // Check for potential collisions between texts in this diagram
  for (let j = 0; j < texts.length; j++) {
    for (let k = j + 1; k < texts.length; k++) {
      const t1 = texts[j];
      const t2 = texts[k];
      const dx = Math.abs(t1.x - t2.x);
      const dy = Math.abs(t1.y - t2.y);

      // If dy is very small (same baseline) and dx is small, or both are identical
      if (dy < 8 && dx < 20) {
        issues.push({
          category: 'SVG Diagram Text Overlap Collision',
          source: `TextbookDiagram: ${diagramType}`,
          details: `Text "${t1.content || '(expr)'}" at (${t1.x}, ${t1.y}) overlaps with "${t2.content || '(expr)'}" at (${t2.x}, ${t2.y}) (dx=${dx.toFixed(1)}, dy=${dy.toFixed(1)})`,
        });
      }
    }
  }
}

console.log(`Step 2 complete. Total issues so far: ${issues.length}\n`);

// ----------------------------------------------------
// 3. Audit Canvas fillText calls for Overlapping Labels
// ----------------------------------------------------
console.log('--- Step 3: Auditing Canvas components for fillText label overlaps ---');

function scanDirForCanvas(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirForCanvas(full);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('ctx.fillText(')) {
        // Look for multiple fillText within close lines with hardcoded coordinates
        const lines = content.split('\n');
        const fillTextLines: Array<{ lineNum: number; line: string; x: number; y: number }> = [];

        lines.forEach((line, idx) => {
          const m = line.match(/ctx\.fillText\s*\([^,]+,\s*([0-9.\-+]+)\s*,\s*([0-9.\-+]+)\s*\)/);
          if (m) {
            const x = parseFloat(m[1]);
            const y = parseFloat(m[2]);
            if (!isNaN(x) && !isNaN(y)) {
              fillTextLines.push({ lineNum: idx + 1, line: line.trim(), x, y });
            }
          }
        });

        // Compare adjacent fillText calls
        for (let a = 0; a < fillTextLines.length; a++) {
          for (let b = a + 1; b < fillTextLines.length; b++) {
            const f1 = fillTextLines[a];
            const f2 = fillTextLines[b];
            if (Math.abs(f1.lineNum - f2.lineNum) <= 5) {
              const dx = Math.abs(f1.x - f2.x);
              const dy = Math.abs(f1.y - f2.y);
              if (dx < 5 && dy < 10) {
                issues.push({
                  category: 'Canvas fillText Overlap Collision',
                  source: `${entry.name}:L${f1.lineNum}-${f2.lineNum}`,
                  details: `Canvas fillText coordinates collision: (${f1.x}, ${f1.y}) vs (${f2.x}, ${f2.y}) (dx=${dx}, dy=${dy})`,
                  snippet: `${f1.line} || ${f2.line}`,
                });
              }
            }
          }
        }
      }
    }
  }
}

scanDirForCanvas(path.resolve(process.cwd(), 'src/components'));

console.log(`Step 3 complete. Total issues found: ${issues.length}\n`);

// ----------------------------------------------------
// Summary Output
// ----------------------------------------------------
console.log('====================================================');
console.log(`TOTAL DISPLAY & MATH DEFECTS FOUND: ${issues.length}`);
console.log('====================================================\n');

const categoryCounts: Record<string, number> = {};
for (const iss of issues) {
  categoryCounts[iss.category] = (categoryCounts[iss.category] || 0) + 1;
}

for (const [cat, count] of Object.entries(categoryCounts)) {
  console.log(`- ${cat}: ${count}`);
}

console.log('\n--- Sample of Issues Detected: ---');
issues.slice(0, 30).forEach((iss, i) => {
  console.log(`\n#${i + 1} [${iss.category}] in ${iss.source}`);
  console.log(`  Details: ${iss.details}`);
  if (iss.snippet) console.log(`  Snippet: ${iss.snippet}`);
});

if (issues.length > 30) {
  console.log(`\n... and ${issues.length - 30} more issues.`);
}

// Write full issues log to scratch
fs.writeFileSync(
  path.resolve(process.cwd(), 'scratch_audit_results.json'),
  JSON.stringify(issues, null, 2)
);
console.log('\nWrote full findings to scratch_audit_results.json');
