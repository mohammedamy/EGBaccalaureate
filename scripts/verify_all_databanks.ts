import { thanaweyaCurriculum } from '../src/data/thanaweyaData.ts';
import { egBacCurriculum } from '../src/data/egBacData.ts';

const chapters = [
  ...thanaweyaCurriculum.branches.flatMap(b => b.chapters.map(c => ({ cur: 'thanaweya', b: b.id, c }))),
  ...egBacCurriculum.branches.flatMap(b => b.chapters.map(c => ({ cur: 'egbac', b: b.id, c }))),
];

let totalQ = 0;
let errors = 0;
let databankChaptersCount = 0;

for (const { cur, b, c } of chapters) {
  if (!c.databank) {
    continue;
  }
  databankChaptersCount++;
  const easy = c.databank.easy;
  const med = c.databank.medium;
  const hots = c.databank.hots;
  const qList = [...easy, ...med, ...hots];
  totalQ += qList.length;

  if (qList.length !== 175) {
    console.error(`Chapter ${c.id} has ${qList.length} questions instead of 175!`);
    errors++;
  }
  if (easy.length !== 58 || med.length !== 59 || hots.length !== 58) {
    console.error(`Chapter ${c.id} distribution error: Easy=${easy.length}, Med=${med.length}, HOTS=${hots.length}`);
    errors++;
  }


  for (const q of qList) {
    if (new Set(q.optionsEn).size !== 4) {
      console.error(`Question ${q.id} in ${c.id} does not have 4 unique English options:`, q.optionsEn);
      errors++;
    }
    if (new Set(q.optionsAr).size !== 4) {
      console.error(`Question ${q.id} in ${c.id} does not have 4 unique Arabic options:`, q.optionsAr);
      errors++;
    }
    const hasCorrectMatch = 
      (q.correctIndex !== undefined && (q.optionsEn[q.correctIndex] === q.correctAnswer || q.optionsEn[q.correctIndex] === q.correctAnswerEn)) ||
      (q.optionsAr && (q.optionsAr.includes(q.correctAnswer) || q.optionsAr.includes(q.correctAnswerAr))) ||
      (q.optionsEn && (q.optionsEn.includes(q.correctAnswer) || q.optionsEn.includes(q.correctAnswerEn)));
    if (!hasCorrectMatch) {
      console.error(`Question ${q.id} in ${c.id} has correctAnswer mismatch: ans=${q.correctAnswer || q.correctAnswerEn}`);
      errors++;
    }
    const hasSolution = 
      (q.stepByStepSolutionEn?.length && q.stepByStepSolutionAr?.length) || 
      (q.explanationAr && q.explanationEn);
    if (!hasSolution) {
      console.error(`Question ${q.id} in ${c.id} missing solution or explanation!`);
      errors++;
    }
  }
}

if (databankChaptersCount !== 385) {
  console.error(`Expected 385 databank chapters, but found ${databankChaptersCount}!`);
  errors++;
}
if (totalQ !== 67375) {
  console.error(`Expected 67,375 total questions, but found ${totalQ}!`);
  errors++;
}

if (errors === 0) {
  console.log(`\n======================================================`);
  console.log(`ALL ${databankChaptersCount} DATABANK CHAPTERS (${totalQ} TOTAL QUESTIONS) FULLY VALIDATED!`);
  console.log(`ZERO ERRORS: 100% compliant with 4 unique options, correct answer alignment, and detailed bilingual solutions.`);
  console.log(`======================================================\n`);
} else {
  console.error(`\nFound ${errors} integrity errors!`);
  process.exit(1);
}
