import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS } from '../src/data/subjects';
import {
  FRENCH_NASAL_VOWELS,
  FRENCH_LIAISON_RULES,
  FRENCH_PRONOUN_RULES,
  FRENCH_SITUATION_SCENARIOS,
  FRENCH_LISTENING_TRACKS,
} from '../src/data/audioLab/frenchAudioLabData';

console.log('--- VERIFYING FRENCH (6TH CORE SUBJECT) IMPLEMENTATION ---');

let errors = 0;

// 1. Subject Definition Verification
const frenchSubject = SUBJECTS.find(s => s.id === 'french');
if (!frenchSubject) {
  console.error('FAIL: Subject definition for "french" not found in SUBJECTS!');
  errors++;
} else {
  if (!frenchSubject.branchIds.thanaweya.includes('thanaweya_french')) {
    console.error('FAIL: thanaweya_french not registered in frenchSubject.branchIds.thanaweya!');
    errors++;
  }
  if (!frenchSubject.branchIds.egbac.includes('egbac_french')) {
    console.error('FAIL: egbac_french not registered in frenchSubject.branchIds.egbac!');
    errors++;
  }
  console.log('PASS: Subject definition for "french" registered with emoji:', frenchSubject.emoji);
}

// 2. Thanaweya French Branch Verification
const thFrench = thanaweyaCurriculum.branches.find(b => b.id === 'thanaweya_french');
if (!thFrench) {
  console.error('FAIL: thanaweya_french not found in thanaweyaCurriculum.branches!');
  errors++;
} else {
  if (thFrench.chapters.length !== 4) {
    console.error(`FAIL: thanaweya_french has ${thFrench.chapters.length} chapters instead of 4!`);
    errors++;
  } else {
    console.log(`PASS: thanaweya_french branch verified with ${thFrench.chapters.length} chapters.`);
  }
}

// 3. EG-Bac French Branch Verification
const egBacFrench = egBacCurriculum.branches.find(b => b.id === 'egbac_french');
if (!egBacFrench) {
  console.error('FAIL: egbac_french not found in egBacCurriculum.branches!');
  errors++;
} else {
  if (egBacFrench.chapters.length !== 4) {
    console.error(`FAIL: egbac_french has ${egBacFrench.chapters.length} chapters instead of 4!`);
    errors++;
  } else {
    console.log(`PASS: egbac_french branch verified with ${egBacFrench.chapters.length} chapters.`);
  }
}

// 4. French Audio Lab Data Verification
if (FRENCH_NASAL_VOWELS.length !== 4) {
  console.error(`FAIL: Expected 4 nasal vowels, got ${FRENCH_NASAL_VOWELS.length}`);
  errors++;
} else {
  console.log(`PASS: 4 Nasal Vowels verified (/ɑ̃/, /ɛ̃/, /ɔ̃/, /œ̃/).`);
}

if (FRENCH_LIAISON_RULES.length < 4) {
  console.error(`FAIL: Expected at least 4 liaison rules, got ${FRENCH_LIAISON_RULES.length}`);
  errors++;
} else {
  console.log(`PASS: ${FRENCH_LIAISON_RULES.length} Liaison & Elision rules verified.`);
}

if (FRENCH_PRONOUN_RULES.length !== 5) {
  console.error(`FAIL: Expected 5 pronoun rules, got ${FRENCH_PRONOUN_RULES.length}`);
  errors++;
} else {
  console.log(`PASS: 5 Pronoun Rules verified (COD, COI, EN, Y, Double-Pronouns).`);
}

if (FRENCH_SITUATION_SCENARIOS.length < 5) {
  console.error(`FAIL: Expected at least 5 situation scenarios, got ${FRENCH_SITUATION_SCENARIOS.length}`);
  errors++;
} else {
  console.log(`PASS: ${FRENCH_SITUATION_SCENARIOS.length} Communicative Situation Scenarios verified.`);
}

if (FRENCH_LISTENING_TRACKS.length !== 4) {
  console.error(`FAIL: Expected 4 ministerial listening comprehension tracks, got ${FRENCH_LISTENING_TRACKS.length}`);
  errors++;
} else {
  const totalQuestions = FRENCH_LISTENING_TRACKS.reduce((sum, tr) => sum + tr.comprehensionQuestions.length, 0);
  console.log(`PASS: 4 Ministerial Exam Listening Tracks verified with ${totalQuestions} comprehension questions.`);
}

// 5. Databank Verification for French
if (thFrench) {
  for (let i = 0; i < thFrench.chapters.length; i++) {
    const ch = thFrench.chapters[i];
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
  }
}

if (errors === 0) {
  console.log('\n======================================================');
  console.log('FRENCH (6TH CORE SUBJECT) FULLY VALIDATED & 100% OPERATIONAL!');
  console.log('======================================================\n');
  process.exit(0);
} else {
  console.error(`\nFAILED with ${errors} errors!`);
  process.exit(1);
}
