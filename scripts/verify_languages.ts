import { thanaweyaEnglishBranch } from '../src/data/thanaweyaEnglish';
import { egBacEnglishBranch } from '../src/data/egBacEnglish';
import { thanaweyaFrenchBranch } from '../src/data/thanaweyaFrench';
import { egBacFrenchBranch } from '../src/data/egBacFrench';

console.log('--- English Thanaweya ---');
for (const ch of thanaweyaEnglishBranch.chapters) {
  console.log(ch.id, 'solved:', ch.solvedExamples?.length, 'ex:', ch.exerciseProblems?.length);
}

console.log('--- English EG-Bac ---');
for (const ch of egBacEnglishBranch.chapters) {
  console.log(ch.id, 'solved:', ch.solvedExamples?.length, 'ex:', ch.exerciseProblems?.length);
}

console.log('--- French Thanaweya ---');
for (const ch of thanaweyaFrenchBranch.chapters) {
  console.log(ch.id, 'solved:', ch.solvedExamples?.length, 'ex:', ch.exerciseProblems?.length);
}

console.log('--- French EG-Bac ---');
for (const ch of egBacFrenchBranch.chapters) {
  console.log(ch.id, 'solved:', ch.solvedExamples?.length, 'ex:', ch.exerciseProblems?.length);
}
