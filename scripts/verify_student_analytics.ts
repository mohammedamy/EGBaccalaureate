import fs from 'fs';
import path from 'path';

console.log('📊 Starting Student Mastery Radar & Analytics Verification...\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
    passCount++;
  } else {
    console.error(`❌ FAILED: ${message}`);
    failCount++;
  }
}

// 1. Mock localStorage
const storageMap = new Map<string, string>();
const mockLocalStorage = {
  getItem: (key: string) => storageMap.get(key) || null,
  setItem: (key: string, val: string) => storageMap.set(key, val),
  removeItem: (key: string) => storageMap.delete(key),
  clear: () => storageMap.clear(),
};

(global as any).window = { localStorage: mockLocalStorage };
(global as any).localStorage = mockLocalStorage;

import {
  getStudentAnalytics,
  recordQuizAttempt,
  getReadinessScore,
  getMasteryRadarData,
  getWeakestChapters,
  classifySubjectCategory,
  resetStudentAnalytics,
} from '../src/services/studentAnalyticsService';
import type { GeneratedQuestion } from '../src/services/mistakeNotebookService';

// Test 1: Subject Category Classification
assert(classifySubjectCategory('الفيزياء الكهربية', 'Physics', 'التيار الكهربي') === 'physics', 'Correctly classifies Physics');
assert(classifySubjectCategory('الكيمياء العضوية', 'Chemistry', 'الهيدروكربونات') === 'chemistry', 'Correctly classifies Chemistry');
assert(classifySubjectCategory('الأحياء', 'Biology', 'المناعة في الإنسان') === 'biology', 'Correctly classifies Biology');
assert(classifySubjectCategory('الاستاتيكا', 'Applied Math', 'الاحتكاك') === 'applied_math', 'Correctly classifies Applied Math');
assert(classifySubjectCategory('التفاضل والتكامل', 'Calculus', 'المشتقات العليا') === 'pure_math', 'Correctly classifies Pure Math');
assert(classifySubjectCategory('التكنولوجيا الحيوية والهندسة الوراثية', 'Biotechnology & Genetic Engineering', 'استنساخ الجينات') === 'biotechnology', 'Correctly classifies Biotechnology');

// Test 2: Initial Analytics State
const initial = getStudentAnalytics();
assert(initial.totalAttempted === 0, 'Initial attempted count is 0');
assert(initial.totalCorrect === 0, 'Initial correct count is 0');
assert(getReadinessScore(initial) === 0, 'Initial readiness score is 0%');

// Test 3: Record a simulated 5-question quiz
const sampleQuestions: GeneratedQuestion[] = [
  {
    id: 'q_phys_1',
    questionEn: 'Ohm law question',
    questionAr: 'سؤال قانون أوم',
    difficulty: 'easy',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsAr: ['أ', 'ب', 'ج', 'د'],
    correctIndex: 0,
    explanationEn: ['Exp'],
    explanationAr: ['شرح'],
    chapterId: 'phys_ch1',
    chapterTitleEn: 'Electric Current',
    chapterTitleAr: 'التيار الكهربي وقانون أوم',
    branchTitleEn: 'Physics',
    branchTitleAr: 'الفيزياء الكهربية',
  },
  {
    id: 'q_chem_1',
    questionEn: 'Esterification question',
    questionAr: 'سؤال تفاعل القسطرة',
    difficulty: 'medium',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsAr: ['أ', 'ب', 'ج', 'د'],
    correctIndex: 1,
    explanationEn: ['Exp'],
    explanationAr: ['شرح'],
    chapterId: 'chem_ch5',
    chapterTitleEn: 'Organic Chemistry',
    chapterTitleAr: 'الكيمياء العضوية',
    branchTitleEn: 'Chemistry',
    branchTitleAr: 'الكيمياء',
  },
  {
    id: 'q_bio_1',
    questionEn: 'Immunity question',
    questionAr: 'سؤال الأجسام المضادة',
    difficulty: 'hots',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsAr: ['أ', 'ب', 'ج', 'د'],
    correctIndex: 2,
    explanationEn: ['Exp'],
    explanationAr: ['شرح'],
    chapterId: 'bio_ch4',
    chapterTitleEn: 'Immunity',
    chapterTitleAr: 'المناعة',
    branchTitleEn: 'Biology',
    branchTitleAr: 'الأحياء',
  },
  {
    id: 'q_math_1',
    questionEn: 'Tangent derivative question',
    questionAr: 'معادلة المماس والعمودي',
    difficulty: 'hots',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsAr: ['أ', 'ب', 'ج', 'د'],
    correctIndex: 3,
    explanationEn: ['Exp'],
    explanationAr: ['شرح'],
    chapterId: 'calc_ch1',
    chapterTitleEn: 'Derivatives',
    chapterTitleAr: 'الاشتقاق وتطبيقاته',
    branchTitleEn: 'Calculus',
    branchTitleAr: 'التفاضل والتكامل',
  },
  {
    id: 'q_stat_1',
    questionEn: 'Friction coefficient question',
    questionAr: 'معامل الاحتكاك السكوني',
    difficulty: 'medium',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsAr: ['أ', 'ب', 'ج', 'د'],
    correctIndex: 0,
    explanationEn: ['Exp'],
    explanationAr: ['شرح'],
    chapterId: 'stat_ch1',
    chapterTitleEn: 'Friction',
    chapterTitleAr: 'الاحتكاك',
    branchTitleEn: 'Statics',
    branchTitleAr: 'الاستاتيكا',
  },
];

// 4 correct, 1 wrong (chem_1 is wrong)
const answers = {
  q_phys_1: 0, // correct
  q_chem_1: 0, // wrong (correct was 1)
  q_bio_1: 2,  // correct
  q_math_1: 3, // correct
  q_stat_1: 0, // correct
};

const updatedState = recordQuizAttempt(sampleQuestions, answers, 150);
assert(updatedState.totalAttempted === 5, 'Total attempted is 5');
assert(updatedState.totalCorrect === 4, 'Total correct is 4 (80% accuracy)');
assert(updatedState.quizzesCompleted === 1, 'Quizzes completed incremented to 1');
assert(updatedState.totalTimeSpentSec === 150, 'Recorded 150s total study time');

// Check Cognitive distribution
assert(updatedState.cognitive.easy.attempted === 1 && updatedState.cognitive.easy.correct === 1, 'Easy cognitive tier logged');
assert(updatedState.cognitive.medium.attempted === 2 && updatedState.cognitive.medium.correct === 1, 'Medium cognitive tier logged');
assert(updatedState.cognitive.hots.attempted === 2 && updatedState.cognitive.hots.correct === 2, 'HOTS cognitive tier logged 100%');

// Test 4: Readiness score calculation
const readiness = getReadinessScore(updatedState);
assert(readiness > 0 && readiness <= 100, `Calculated realistic readiness score: ${readiness}%`);

// Test 5: Mastery Radar Pentagon 5 Dimensions
const radarData = getMasteryRadarData(updatedState);
assert(radarData.length === 5, 'Radar has strictly 5 dimensions');

const physPoint = radarData.find((p) => p.dimensionKey === 'physics');
const chemPoint = radarData.find((p) => p.dimensionKey === 'chemistry');
assert(physPoint?.scorePct === 100, 'Physics radar score is 100%');
assert(chemPoint?.scorePct === 0, 'Chemistry radar score is 0% (due to error)');

const radarAll29 = getMasteryRadarData(updatedState, 'all29');
assert(radarAll29.length === 29, 'Radar all29 has strictly 29 dimensions');
const biotechPoint = radarAll29.find((p) => p.dimensionKey === 'biotechnology');
assert(!!biotechPoint, 'Biotechnology dimension exists in all29 radar');

// Test 6: Weakest chapter detection
// Add 2nd attempt in chemistry with another error to test threshold
recordQuizAttempt([sampleQuestions[1]], { q_chem_1: 2 }, 30);
const weakest = getWeakestChapters();
assert(weakest.length > 0, 'Weakest chapters detected');
assert(weakest[0].chapterId === 'chem_ch5', 'Chemistry Ch5 correctly identified as weakest chapter');

// Test 7: Reset
resetStudentAnalytics();
const resetState = getStudentAnalytics();
assert(resetState.totalAttempted === 0, 'Analytics successfully reset');

console.log(`\n================================`);
console.log(`Total Passed: ${passCount} | Failed: ${failCount}`);
console.log(`================================`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 Student Mastery Radar & Analytics Service 100% verified!\n');
}
