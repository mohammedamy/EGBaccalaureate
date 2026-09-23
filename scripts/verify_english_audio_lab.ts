/**
 * Verification Suite for Secondary 3 English Audio & Phonetic Pronunciation Lab
 * Verifies:
 * 1. Exactly 44 IPA phonemes categorized across 5 standard phonetic classes.
 * 2. Phonological contrast warnings for Arabic/Egyptian learners.
 * 3. High-confusion Minimal Pairs data integrity.
 * 4. Heteronym Noun vs Verb syllable stress shifts.
 * 5. Suffix-driven accent placement rules.
 * 6. Connected speech phenomena (Schwa, Elision, Assimilation, Linking).
 * 7. Authentic Secondary 3 listening comprehension tracks and exam questions.
 * 8. Curriculum branch interactiveWidget assignment.
 */

import {
  IPA_PHONEMES,
  MINIMAL_PAIRS,
  STRESS_SHIFT_WORDS,
  SUFFIX_STRESS_RULES,
  CONNECTED_SPEECH_DATA,
  LISTENING_TRACKS,
} from '../src/data/audioLab/englishAudioLabData';
import { thanaweyaEnglishBranch } from '../src/data/thanaweyaEnglish';
import { egBacEnglishBranch } from '../src/data/egBacEnglish';

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ [PASS] ${message}`);
    passed++;
  } else {
    console.error(`❌ [FAIL] ${message}`);
    failed++;
  }
}

console.log('🎧 Starting Secondary 3 English Audio & Phonetic Pronunciation Lab Verification Suite...\n');

// 1. 44 IPA Phonemes Verification
console.log('--- 1. Testing 44 IPA Phonemes & Categories ---');
assert(IPA_PHONEMES.length === 44, `Expected exactly 44 IPA phonemes, found ${IPA_PHONEMES.length}`);

const shortVowels = IPA_PHONEMES.filter((p) => p.category === 'short_vowel');
assert(shortVowels.length === 7, `Expected 7 short vowels (including schwa), found ${shortVowels.length}`);

const longVowels = IPA_PHONEMES.filter((p) => p.category === 'long_vowel');
assert(longVowels.length === 5, `Expected 5 long vowels, found ${longVowels.length}`);

const diphthongs = IPA_PHONEMES.filter((p) => p.category === 'diphthong');
assert(diphthongs.length === 8, `Expected 8 diphthongs, found ${diphthongs.length}`);

const voicelessCons = IPA_PHONEMES.filter((p) => p.category === 'voiceless_consonant');
assert(voicelessCons.length === 9, `Expected 9 voiceless consonants, found ${voicelessCons.length}`);

const voicedCons = IPA_PHONEMES.filter((p) => p.category === 'voiced_consonant');
assert(voicedCons.length === 15, `Expected 15 voiced consonants, found ${voicedCons.length}`);

// Test schema fields for every phoneme
IPA_PHONEMES.forEach((p) => {
  assert(p.symbol.startsWith('/') && p.symbol.endsWith('/'), `Phoneme ${p.symbol} has valid IPA slashes`);
  assert(p.examples.length >= 2, `Phoneme ${p.symbol} provides at least 2 exemplar words`);
  assert(p.articulationGuide.length > 10, `Phoneme ${p.symbol} has detailed articulation instructions`);
  assert(p.audioTriggerWord.length > 0, `Phoneme ${p.symbol} has a valid audio trigger word`);
  assert(
    p.audioTriggerWord === p.examples[0],
    `Phoneme ${p.symbol} audioTriggerWord "${p.audioTriggerWord}" strictly matches card exemplar label "${p.examples[0]}"`
  );
});

// Test Arabic/Egyptian contrast warnings
const contrastWarnings = IPA_PHONEMES.filter((p) => p.arabicContrastWarning !== undefined);
assert(contrastWarnings.length >= 7, `Found ${contrastWarnings.length} targeted Egyptian ESL contrast warnings`);

// 2. Minimal Pairs Verification
console.log('\n--- 2. Testing High-Yield Minimal Pairs ---');
assert(MINIMAL_PAIRS.length >= 10, `Expected at least 10 minimal pair sets, found ${MINIMAL_PAIRS.length}`);

MINIMAL_PAIRS.forEach((pair) => {
  assert(pair.word1 !== pair.word2, `Pair ${pair.id} words are distinct: "${pair.word1}" vs "${pair.word2}"`);
  assert(pair.phoneme1 !== pair.phoneme2, `Pair ${pair.id} phonemes are distinct: ${pair.phoneme1} vs ${pair.phoneme2}`);
  assert(pair.sentence1.includes(pair.word1), `Sentence 1 contextualizes word "${pair.word1}"`);
  assert(pair.sentence2.includes(pair.word2), `Sentence 2 contextualizes word "${pair.word2}"`);
  assert(pair.examTrapNote.length > 15, `Pair ${pair.id} contains actionable exam trap advice`);
});

// 3. Heteronym Syllable Stress Shifts
console.log('\n--- 3. Testing Heteronym Syllable Stress Shifts ---');
assert(STRESS_SHIFT_WORDS.length >= 10, `Expected at least 10 stress shift pairs, found ${STRESS_SHIFT_WORDS.length}`);

STRESS_SHIFT_WORDS.forEach((item) => {
  assert(item.nounSyllables.length === 2, `Word "${item.word}" noun form has 2 syllables`);
  assert(item.verbSyllables.length === 2, `Word "${item.word}" verb form has 2 syllables`);
  assert(item.nounSyllables[0].stressed === true && item.nounSyllables[1].stressed === false, `"${item.word}" noun stresses syllable 1`);
  assert(item.verbSyllables[0].stressed === false && item.verbSyllables[1].stressed === true, `"${item.word}" verb stresses syllable 2`);
  assert(item.nounDefinition.length > 0 && item.verbDefinition.length > 0, `"${item.word}" has both noun and verb definitions`);
});

// 4. Suffix Stress Rules
console.log('\n--- 4. Testing Suffix Accent Placement Rules ---');
assert(SUFFIX_STRESS_RULES.length === 3, `Expected 3 main suffix stress rule categories, found ${SUFFIX_STRESS_RULES.length}`);
SUFFIX_STRESS_RULES.forEach((rule) => {
  assert(rule.examples.length >= 4, `Rule "${rule.ruleName}" provides at least 4 exemplar words`);
});

// 5. Connected Speech Phenomena
console.log('\n--- 5. Testing Connected Speech Phenomena ---');
assert(CONNECTED_SPEECH_DATA.length >= 4, `Expected at least 4 connected speech phenomena, found ${CONNECTED_SPEECH_DATA.length}`);
const types = CONNECTED_SPEECH_DATA.map((c) => c.type);
assert(types.includes('schwa'), 'Connected speech covers Schwa vowel reduction');
assert(types.includes('elision'), 'Connected speech covers alveolar elision');
assert(types.includes('linking'), 'Connected speech covers intrusive linking');
assert(types.includes('assimilation'), 'Connected speech covers regressive assimilation');

// 6. Listening Comprehension Tracks & Exam Items
console.log('\n--- 6. Testing Listening Comprehension Tracks ---');
assert(LISTENING_TRACKS.length === 4, `Expected 4 academic listening tracks, found ${LISTENING_TRACKS.length}`);

let totalListeningQuestions = 0;
LISTENING_TRACKS.forEach((track) => {
  assert(track.audioScript.length >= 3, `Track "${track.titleEn}" has full conversational turns`);
  assert(track.fullText.length > 100, `Track "${track.titleEn}" has complete transcript text`);
  assert(track.comprehensionQuestions.length >= 1, `Track "${track.titleEn}" has comprehension exam items`);

  track.comprehensionQuestions.forEach((q) => {
    totalListeningQuestions++;
    assert(q.options.length === 4, `Question "${q.id}" has exactly 4 multiple-choice options`);
    assert(q.correctIndex >= 0 && q.correctIndex < 4, `Question "${q.id}" has valid correctIndex`);
    assert(q.rationale.length > 10, `Question "${q.id}" includes detailed explanatory rationale`);
  });
});
assert(totalListeningQuestions >= 8, `Expected at least 8 total listening exam items, found ${totalListeningQuestions}`);

// 7. Curriculum Branch Widget Wiring
console.log('\n--- 7. Testing Curriculum Branch Widget Wiring ---');
const thWidgets = thanaweyaEnglishBranch.chapters.flatMap((c) => c.lessons.map((l) => l.interactiveWidget?.type));
assert(thWidgets.includes('english_audio_lab'), 'thanaweyaEnglishBranch equips english_audio_lab widget');

const egWidgets = egBacEnglishBranch.chapters.flatMap((c) => c.lessons.map((l) => l.interactiveWidget?.type));
assert(egWidgets.includes('english_audio_lab'), 'egBacEnglishBranch equips english_audio_lab widget');

console.log('\n=============================================================');
console.log(`🎉 Results: ${passed} Passed | ${failed} Failed`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('✨ Secondary 3 English Audio & Phonetics Lab fully validated!');
}
