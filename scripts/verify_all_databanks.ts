import { thanaweyaCurriculum } from '../src/data/thanaweyaData.ts';
import { egBacCurriculum } from '../src/data/egBacData.ts';

const chapters = [
  ...thanaweyaCurriculum.branches.flatMap(b => b.chapters.map(c => ({ cur: 'thanaweya', b: b.id, c }))),
  ...egBacCurriculum.branches.flatMap(b => b.chapters.map(c => ({ cur: 'egbac', b: b.id, c }))),
];

let totalQ = 0;
let errors = 0;

for (const { cur, b, c } of chapters) {
  if (!c.databank) {
    console.error(`Chapter ${c.id} in ${cur} has no databank!`);
    errors++;
    continue;
  }
  const easy = c.databank.easy;
  const med = c.databank.medium;
  const hots = c.databank.hots;
  const qList = [...easy, ...med, ...hots];
  totalQ += qList.length;

  const isScience = b.includes('physics') || b.includes('chemistry') || b.includes('biology');

  if (!isScience) {
    if (qList.length !== 175) {
      console.error(`Chapter ${c.id} has ${qList.length} questions instead of 175!`);
      errors++;
    }
    if (easy.length !== 58 || med.length !== 59 || hots.length !== 58) {
      console.error(`Chapter ${c.id} distribution error: Easy=${easy.length}, Med=${med.length}, HOTS=${hots.length}`);
      errors++;
    }
  } else {
    if (easy.length < 1 || med.length < 1 || hots.length < 1) {
      console.error(`Science review chapter ${c.id} missing tier questions! Easy=${easy.length}, Med=${med.length}, HOTS=${hots.length}`);
      errors++;
    }
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
    if (q.optionsEn[q.correctIndex] !== q.correctAnswer) {
      console.error(`Question ${q.id} in ${c.id} has correctAnswer mismatch: correctIndex=${q.correctIndex}, opts=${q.optionsEn}, ans=${q.correctAnswer}`);
      errors++;
    }
    if (!q.stepByStepSolutionEn?.length || !q.stepByStepSolutionAr?.length) {
      console.error(`Question ${q.id} in ${c.id} missing step-by-step solution!`);
      errors++;
    }
    if (!q.teacherTipEn || !q.teacherTipAr) {
      console.error(`Question ${q.id} in ${c.id} missing teacher tip!`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log(`\n======================================================`);
  console.log(`ALL ${chapters.length} CHAPTERS (${totalQ} TOTAL QUESTIONS) FULLY VALIDATED!`);
  console.log(`ZERO ERRORS: 100% compliant with 4 unique options, correct answer alignment, and detailed bilingual solutions.`);
  console.log(`======================================================\n`);
} else {
  console.error(`\nFound ${errors} integrity errors!`);
  process.exit(1);
}
