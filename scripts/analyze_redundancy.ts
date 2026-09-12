import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';

interface QuestionRef {
  curriculum: string;
  branch: string;
  chapterId: string;
  source: string; // 'solvedExample' | 'exercise' | 'easy' | 'medium' | 'hots'
  id: string;
  questionEn: string;
  questionAr: string;
}

const allQuestions: QuestionRef[] = [];

function collectQuestions() {
  const curricula = [
    { name: 'thanaweya', data: thanaweyaCurriculum },
    { name: 'egbac', data: egBacCurriculum },
  ];

  for (const cur of curricula) {
    for (const branch of cur.data.branches) {
      for (const ch of branch.chapters) {
        if (ch.solvedExamples) {
          ch.solvedExamples.forEach((q, idx) => {
            allQuestions.push({
              curriculum: cur.name,
              branch: branch.id,
              chapterId: ch.id,
              source: `solvedExample[${idx}]`,
              id: q.id,
              questionEn: q.questionEn,
              questionAr: q.questionAr,
            });
          });
        }
        if (ch.exerciseProblems) {
          ch.exerciseProblems.forEach((q, idx) => {
            allQuestions.push({
              curriculum: cur.name,
              branch: branch.id,
              chapterId: ch.id,
              source: `exercise[${idx}]`,
              id: q.id,
              questionEn: q.questionEn,
              questionAr: q.questionAr,
            });
          });
        }
        if (ch.databank) {
          (['easy', 'medium', 'hots'] as const).forEach((tier) => {
            ch.databank![tier].forEach((q, idx) => {
              allQuestions.push({
                curriculum: cur.name,
                branch: branch.id,
                chapterId: ch.id,
                source: `databank.${tier}[${idx}]`,
                id: q.id,
                questionEn: q.questionEn,
                questionAr: q.questionAr,
              });
            });
          });
        }
      }
    }
  }
}

collectQuestions();
console.log(`Total collected questions: ${allQuestions.length}`);

// 1. Check exact questionEn collisions
const exactEnMap = new Map<string, QuestionRef[]>();
const exactArMap = new Map<string, QuestionRef[]>();

// 2. Check normalized question stems (remove numbers, math formulas, punctuation)
function normalizeStem(str: string): string {
  return str
    .replace(/\$[^$]*\$/g, 'MATH')
    .replace(/[0-9]+/g, 'NUM')
    .replace(/[^\w\s\u0600-\u06FF]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

const stemEnMap = new Map<string, QuestionRef[]>();
const stemArMap = new Map<string, QuestionRef[]>();

for (const q of allQuestions) {
  // exact EN
  const enKey = q.questionEn.trim().toLowerCase();
  if (!exactEnMap.has(enKey)) exactEnMap.set(enKey, []);
  exactEnMap.get(enKey)!.push(q);

  // exact AR
  const arKey = q.questionAr.trim();
  if (!exactArMap.has(arKey)) exactArMap.set(arKey, []);
  exactArMap.get(arKey)!.push(q);

  // stem EN
  const stemEn = normalizeStem(q.questionEn);
  if (!stemEnMap.has(stemEn)) stemEnMap.set(stemEn, []);
  stemEnMap.get(stemEn)!.push(q);

  // stem AR
  const stemAr = normalizeStem(q.questionAr);
  if (!stemArMap.has(stemAr)) stemArMap.set(stemAr, []);
  stemArMap.get(stemAr)!.push(q);
}

// Exact duplicates
const exactEnDupes = Array.from(exactEnMap.entries()).filter(([_, list]) => list.length > 1);
const exactArDupes = Array.from(exactArMap.entries()).filter(([_, list]) => list.length > 1);

console.log(`\n=== EXACT DUPLICATES ===`);
console.log(`Exact QuestionEn duplicates: ${exactEnDupes.length} unique texts affecting ${exactEnDupes.reduce((acc, [_, l]) => acc + l.length, 0)} questions.`);
console.log(`Exact QuestionAr duplicates: ${exactArDupes.length} unique texts affecting ${exactArDupes.reduce((acc, [_, l]) => acc + l.length, 0)} questions.`);

if (exactEnDupes.length > 0) {
  console.log(`\nSample exact EN duplicates:`);
  exactEnDupes.slice(0, 10).forEach(([key, list], i) => {
    console.log(`\n[${i+1}] "${key.slice(0, 80)}..." appears ${list.length} times:`);
    list.slice(0, 5).forEach(item => console.log(`    - ${item.chapterId} (${item.source}) id: ${item.id}`));
  });
}

if (exactArDupes.length > 0) {
  console.log(`\nSample exact AR duplicates:`);
  exactArDupes.slice(0, 10).forEach(([key, list], i) => {
    console.log(`\n[${i+1}] "${key.slice(0, 80)}..." appears ${list.length} times:`);
    list.slice(0, 5).forEach(item => console.log(`    - ${item.chapterId} (${item.source}) id: ${item.id}`));
  });
}

// Heavily repeated templates (e.g. > 5 questions sharing identical normalized stem in the same chapter)
console.log(`\n=== REPETITIVE TEMPLATES (Within Chapters) ===`);
const chapterStemCounts = new Map<string, Map<string, QuestionRef[]>>();
for (const q of allQuestions) {
  if (!chapterStemCounts.has(q.chapterId)) chapterStemCounts.set(q.chapterId, new Map());
  const stem = normalizeStem(q.questionEn);
  const chMap = chapterStemCounts.get(q.chapterId)!;
  if (!chMap.has(stem)) chMap.set(stem, []);
  chMap.get(stem)!.push(q);
}

let heavyTemplateCount = 0;
for (const [chId, stems] of chapterStemCounts.entries()) {
  const repeated = Array.from(stems.entries()).filter(([s, list]) => list.length >= 4);
  if (repeated.length > 0) {
    console.log(`\nChapter [${chId}] has ${repeated.length} heavily repeated stems (>= 4 instances):`);
    repeated.slice(0, 5).forEach(([stem, list]) => {
      heavyTemplateCount += list.length;
      console.log(`  * (${list.length}x) Stem: "${stem.slice(0, 60)}..."`);
      console.log(`      e.g. "${list[0].questionEn.slice(0, 70)}..."`);
    });
  }
}
console.log(`\nTotal questions in repetitive stems (>=4 per chapter): ${heavyTemplateCount}`);
