import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS } from '../src/data/subjects';
import {
  ARABIC_IRAB_SENTENCES,
  ARABIC_DERIVATIVE_RULES,
  ARABIC_RHETORICAL_FIGURES,
  ARABIC_ORTHOGRAPHY_TRAPS,
  ARABIC_MINISTERIAL_EXAM_TRAPS,
} from '../src/data/arabicLab/arabicGrammarLabData';

console.log('--- VERIFYING ARABIC LANGUAGE & LITERATURE (7TH CORE SUBJECT) IMPLEMENTATION ---');

let errors = 0;

// 1. Subject Definition Verification
const arabicSubject = SUBJECTS.find(s => s.id === 'arabic');
if (!arabicSubject) {
  console.error('FAIL: Subject definition for "arabic" not found in SUBJECTS!');
  errors++;
} else {
  if (!arabicSubject.branchIds.thanaweya.includes('thanaweya_arabic')) {
    console.error('FAIL: thanaweya_arabic not registered in arabicSubject.branchIds.thanaweya!');
    errors++;
  }
  if (!arabicSubject.branchIds.egbac.includes('egbac_arabic')) {
    console.error('FAIL: egbac_arabic not registered in arabicSubject.branchIds.egbac!');
    errors++;
  }
  console.log('PASS: Subject definition for "arabic" registered with emoji:', arabicSubject.emoji);
}

// 2. Thanaweya Arabic Branch Verification
const thArabic = thanaweyaCurriculum.branches.find(b => b.id === 'thanaweya_arabic');
if (!thArabic) {
  console.error('FAIL: thanaweya_arabic not found in thanaweyaCurriculum.branches!');
  errors++;
} else {
  if (thArabic.chapters.length !== 4) {
    console.error(`FAIL: thanaweya_arabic has ${thArabic.chapters.length} chapters instead of 4!`);
    errors++;
  } else {
    console.log(`PASS: thanaweya_arabic branch verified with ${thArabic.chapters.length} chapters.`);
  }
}

// 3. EG-Bac Arabic Branch Verification
const egBacArabic = egBacCurriculum.branches.find(b => b.id === 'egbac_arabic');
if (!egBacArabic) {
  console.error('FAIL: egbac_arabic not found in egBacCurriculum.branches!');
  errors++;
} else {
  if (egBacArabic.chapters.length !== 4) {
    console.error(`FAIL: egbac_arabic has ${egBacArabic.chapters.length} chapters instead of 4!`);
    errors++;
  } else {
    console.log(`PASS: egbac_arabic branch verified with ${egBacArabic.chapters.length} chapters.`);
  }
}

// 4. Arabic Grammar & Parsing Studio Data Verification
if (ARABIC_IRAB_SENTENCES.length !== 10) {
  console.error(`FAIL: Expected 10 I'rab sentences, got ${ARABIC_IRAB_SENTENCES.length}`);
  errors++;
} else {
  const totalTokens = ARABIC_IRAB_SENTENCES.reduce((sum, s) => sum + s.tokens.length, 0);
  console.log(`PASS: 10 Comprehensive I'rab Sentences verified with ${totalTokens} parsed syntactic tokens.`);
}

if (ARABIC_DERIVATIVE_RULES.length < 4) {
  console.error(`FAIL: Expected at least 4 derivative rules, got ${ARABIC_DERIVATIVE_RULES.length}`);
  errors++;
} else {
  console.log(`PASS: ${ARABIC_DERIVATIVE_RULES.length} Morphological Derivative Rules & Agentivity balances verified.`);
}

if (ARABIC_RHETORICAL_FIGURES.length < 4) {
  console.error(`FAIL: Expected at least 4 rhetorical figure categories, got ${ARABIC_RHETORICAL_FIGURES.length}`);
  errors++;
} else {
  console.log(`PASS: ${ARABIC_RHETORICAL_FIGURES.length} Rhetorical Figures & Esthetic Secret models verified.`);
}

if (ARABIC_ORTHOGRAPHY_TRAPS.length < 3) {
  console.error(`FAIL: Expected at least 3 orthography trap matrices, got ${ARABIC_ORTHOGRAPHY_TRAPS.length}`);
  errors++;
} else {
  console.log(`PASS: ${ARABIC_ORTHOGRAPHY_TRAPS.length} Orthography & Hamza Syntactic Case Matrices verified.`);
}

if (ARABIC_MINISTERIAL_EXAM_TRAPS.length !== 4) {
  console.error(`FAIL: Expected 4 ministerial exam traps, got ${ARABIC_MINISTERIAL_EXAM_TRAPS.length}`);
  errors++;
} else {
  console.log(`PASS: 4 Authentic Ministerial Exam Traps with distractor dissections verified.`);
}

// 5. Databank Verification for Arabic (Thanaweya)
if (thArabic) {
  for (let i = 0; i < thArabic.chapters.length; i++) {
    const ch = thArabic.chapters[i];
    if (!ch.databank) {
      console.error(`FAIL: Chapter ${ch.id} is missing databank!`);
      errors++;
      continue;
    }
    const { easy, medium, hots } = ch.databank;
    const totalQ = easy.length + medium.length + hots.length;
    if (totalQ !== 175 || easy.length !== 58 || medium.length !== 59 || hots.length !== 58) {
      console.error(`FAIL: Chapter ${ch.id} distribution error: Easy=${easy.length}, Med=${medium.length}, HOTS=${hots.length}`);
      errors++;
    } else {
      console.log(`PASS: Chapter ${ch.id} databank verified: 175 questions (58 Easy, 59 Med, 58 HOTS).`);
    }

    const allQ = [...easy, ...medium, ...hots];
    for (const q of allQ) {
      if (new Set(q.optionsEn).size !== 4) {
        console.error(`FAIL: Question ${q.id} in ${ch.id} does not have 4 unique English options:`, q.optionsEn);
        errors++;
      }
      if (new Set(q.optionsAr).size !== 4) {
        console.error(`FAIL: Question ${q.id} in ${ch.id} does not have 4 unique Arabic options:`, q.optionsAr);
        errors++;
      }
      if (q.optionsEn[q.correctIndex] !== q.correctAnswer) {
        console.error(`FAIL: Question ${q.id} in ${ch.id} correctAnswer mismatch: index=${q.correctIndex}, ans=${q.correctAnswer}`);
        errors++;
      }
      if (!q.stepByStepSolutionEn?.length || !q.stepByStepSolutionAr?.length) {
        console.error(`FAIL: Question ${q.id} in ${ch.id} missing step-by-step solution!`);
        errors++;
      }
    }
  }
}

// 6. Databank Verification for Arabic (EG-Bac)
if (egBacArabic) {
  for (let i = 0; i < egBacArabic.chapters.length; i++) {
    const ch = egBacArabic.chapters[i];
    if (!ch.databank) {
      console.error(`FAIL: EG-Bac Chapter ${ch.id} is missing databank!`);
      errors++;
      continue;
    }
    const { easy, medium, hots } = ch.databank;
    const totalQ = easy.length + medium.length + hots.length;
    if (totalQ !== 175 || easy.length !== 58 || medium.length !== 59 || hots.length !== 58) {
      console.error(`FAIL: EG-Bac Chapter ${ch.id} distribution error: Easy=${easy.length}, Med=${medium.length}, HOTS=${hots.length}`);
      errors++;
    } else {
      console.log(`PASS: EG-Bac Chapter ${ch.id} databank verified: 175 questions (58 Easy, 59 Med, 58 HOTS).`);
    }

    const allQ = [...easy, ...medium, ...hots];
    for (const q of allQ) {
      if (new Set(q.optionsEn).size !== 4) {
        console.error(`FAIL: EG-Bac Question ${q.id} in ${ch.id} does not have 4 unique English options:`, q.optionsEn);
        errors++;
      }
      if (new Set(q.optionsAr).size !== 4) {
        console.error(`FAIL: EG-Bac Question ${q.id} in ${ch.id} does not have 4 unique Arabic options:`, q.optionsAr);
        errors++;
      }
      if (q.optionsEn[q.correctIndex] !== q.correctAnswer) {
        console.error(`FAIL: EG-Bac Question ${q.id} in ${ch.id} correctAnswer mismatch: index=${q.correctIndex}, ans=${q.correctAnswer}`);
        errors++;
      }
    }
  }
}

if (errors === 0) {
  console.log('\n======================================================');
  console.log('ARABIC (7TH CORE SUBJECT) FULLY VALIDATED & 100% OPERATIONAL!');
  console.log('======================================================\n');
  process.exit(0);
} else {
  console.error(`\nFAILED with ${errors} errors!`);
  process.exit(1);
}
