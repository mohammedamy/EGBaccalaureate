import katex from 'katex';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';

function extractMath(text: string): { math: string; display: boolean }[] {
  const results: { math: string; display: boolean }[] = [];
  if (!text) return results;

  // Block math: $$ ... $$
  const blockRegex = /\$\$([\s\S]+?)\$\$/g;
  let match;
  while ((match = blockRegex.exec(text)) !== null) {
    results.push({ math: match[1].trim(), display: true });
  }

  // Remove blocks before checking inline
  const stripped = text.replace(blockRegex, ' ');

  // Inline math: $ ... $
  const inlineRegex = /\$([^\$]+?)\$/g;
  while ((match = inlineRegex.exec(stripped)) !== null) {
    results.push({ math: match[1].trim(), display: false });
  }

  return results;
}

let totalFormulasTested = 0;
let errorsFound = 0;

console.log('Testing KaTeX rendering across all curricula, branches, chapters, and question databanks...');

const curricula = [
  { name: 'thanaweya', data: thanaweyaCurriculum },
  { name: 'egbac', data: egBacCurriculum },
];

const errorList: string[] = [];

for (const cur of curricula) {
  for (const branch of cur.data.branches) {
    for (const ch of branch.chapters) {
      // 1. Lessons: Theory, summaries, and formulas
      for (const lesson of ch.lessons || []) {
        // Pure LaTeX formulas
        for (const f of lesson.formulas || []) {
          if (!f.latex) continue;
          totalFormulasTested++;
          try {
            katex.renderToString(f.latex, { displayMode: true, throwOnError: true, strict: 'ignore' });
          } catch (err: any) {
            errorsFound++;
            errorList.push(`[${ch.id}] [${lesson.id}] Formula KaTeX Error on "${f.latex}": ${err.message}`);
          }
        }

        // Prose markdown texts
        const proseTexts = [
          lesson.summaryEn,
          lesson.summaryAr,
          lesson.theoryContentEn,
          lesson.theoryContentAr,
        ];
        for (const text of proseTexts) {
          if (!text) continue;
          const formulas = extractMath(text);
          for (const item of formulas) {
            if (!item.math) continue;
            totalFormulasTested++;
            try {
              katex.renderToString(item.math, { displayMode: item.display, throwOnError: true, strict: 'ignore' });
            } catch (err: any) {
              errorsFound++;
              errorList.push(`[${ch.id}] [${lesson.id}] Prose KaTeX Error on "$${item.math}$": ${err.message}`);
            }
          }
        }
      }


      // 2. All questions (solvedExamples, exerciseProblems, unitExercises, databank)
      const allChapterQuestions: any[] = [
        ...(ch.solvedExamples || []),
        ...(ch.exerciseProblems || []),
        ...((ch as any).unitExercises || []),
        ...(ch.databank?.easy || []),
        ...(ch.databank?.medium || []),
        ...(ch.databank?.hots || []),
      ];

      for (const p of allChapterQuestions) {
        const fieldsToTest = [
          p.titleEn,
          p.titleAr,
          p.questionEn,
          p.questionAr,
          ...(p.optionsEn || []),
          ...(p.optionsAr || []),
          p.hintEn,
          p.hintAr,
          ...(p.stepByStepSolutionEn || []),
          ...(p.stepByStepSolutionAr || []),
          p.teacherTipEn,
          p.teacherTipAr,
        ];

        for (const field of fieldsToTest) {
          if (!field) continue;
          const formulas = extractMath(field);
          for (const item of formulas) {
            if (!item.math) continue;
            totalFormulasTested++;
            try {
              katex.renderToString(item.math, {
                displayMode: item.display,
                throwOnError: true,
                strict: 'ignore',
              });
            } catch (err: any) {
              errorsFound++;
              errorList.push(`[${ch.id}] [${p.id}] Question KaTeX Error on "$${item.math}$": ${err.message}`);
            }
          }
        }
      }
    }
  }
}

console.log(`\n======================================================`);
console.log(`Total math/science expressions tested: ${totalFormulasTested}`);
console.log(`KaTeX errors found:                   ${errorsFound}`);
console.log(`======================================================\n`);

if (errorsFound > 0) {
  console.error(`❌ KaTeX rendering test failed with ${errorsFound} errors:`);
  for (const msg of errorList) {
    console.error(msg);
  }
  process.exit(1);
} else {
  console.log(`🎉 100% SUCCESS: All ${totalFormulasTested} mathematical and scientific expressions render flawlessly with KaTeX!`);
}
