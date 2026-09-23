/**
 * Automated Verification Suite for Teacher Custom Question Bank & Grading Dashboard
 */

// Mock browser localStorage if running in Node.js environment
const mockStorage: Record<string, string> = {};
if (typeof globalThis.localStorage === 'undefined') {
  (globalThis as unknown as { localStorage: Storage }).localStorage = {
    getItem: (key: string) => mockStorage[key] || null,
    setItem: (key: string, value: string) => { mockStorage[key] = String(value); },
    removeItem: (key: string) => { delete mockStorage[key]; },
    clear: () => { for (const k in mockStorage) delete mockStorage[k]; },
    length: Object.keys(mockStorage).length,
    key: (index: number) => Object.keys(mockStorage)[index] || null,
  };
}

import {
  getLocalCustomQuestions,
  saveCustomQuestion,
  deleteCustomQuestion,
  filterCustomQuestions,
  exportCustomQuestionsJSON,
  importCustomQuestionsJSON,
  TEACHER_QUESTIONS_STORAGE_KEY,
} from '../src/services/teacherQuestionBankService';

import {
  saveSubmissionGrade,
  generateWhatsAppStudentReport,
  exportClassSubmissionsCSV,
} from '../src/services/teacherGradingService';

import {
  createAssignment,
  saveSubmissionLocally,
  getLocalSubmissions,
  SUBMISSIONS_STORAGE_KEY,
} from '../src/services/teacherAssignmentService';

import type { AssignmentSubmission } from '../src/types/teacherAssignment';

let passed = 0;
let failed = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    passed++;
    console.log(`  ✅ PASS: ${msg}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${msg}`);
  }
}

console.log('========================================================================');
console.log('🧪 VERIFYING TEACHER QUESTION BANK & GRADING DASHBOARD SYSTEM');
console.log('========================================================================\n');

// 1. Initial Question Bank Loading
console.log('🔹 1. Verifying Question Bank Initialization & Seeds:');
localStorage.clear();
const initialQuestions = getLocalCustomQuestions();
assert(initialQuestions.length >= 3, `Loads initial seed questions (expected >= 3, got ${initialQuestions.length})`);
assert(initialQuestions.some(q => q.subjectId === 'physics'), 'Contains physics questions');
assert(initialQuestions.some(q => q.subjectId === 'math'), 'Contains math questions');
assert(initialQuestions.some(q => q.subjectId === 'chemistry'), 'Contains chemistry questions');
assert(!!localStorage.getItem(TEACHER_QUESTIONS_STORAGE_KEY), 'Questions committed to device localStorage');

// 2. Custom Question Authoring
console.log('\n🔹 2. Verifying Custom Question Authoring & Persistence:');
const newQ = saveCustomQuestion({
  teacherName: 'د. مجدي يعقوب التعليمي',
  subjectId: 'biology',
  chapterTitleAr: 'المناعة في الإنسان',
  difficulty: 'hots',
  questionAr: 'أي من الخلايا التالية تلعب دوراً مشتركاً في كل من المناعة الفطرية والمناعة المكتسبة؟',
  optionsAr: [
    'الخلايا البلعمية الكبيرة',
    'الخلايا البائية البلازمية',
    'الخلايا التائية المساعدة فقط',
    'خلايا الدم الحمراء'
  ],
  correctOptionIndex: 0,
  explanationAr: 'الخلايا البلعمية تبتلع الميكروب كخط دفاع ثانٍ (فطرية) وتقدم الأنتيجين للخلايا التائية (مكتسبة).',
  teacherTipAr: 'ركز على دور البلعمية كوسيط رابط ومحفز لكلا خطي الدفاع.',
  tags: ['مناعة', 'فصل 4 أحياء', 'ربط مفاهيم'],
});

assert(typeof newQ.id === 'string' && newQ.id.startsWith('tq_'), 'Generated unique ID with tq_ prefix');
assert(newQ.subjectId === 'biology', 'Saved correct subject');
assert(newQ.correctOptionIndex === 0, 'Saved correct choice index (0)');

const allAfterAdd = getLocalCustomQuestions();
assert(allAfterAdd.length === initialQuestions.length + 1, 'Question bank size incremented by 1');

// 3. Question Filtering & Searching
console.log('\n🔹 3. Verifying Filtering and Search Engine:');
const bioQuestions = filterCustomQuestions({ subjectId: 'biology' });
assert(bioQuestions.length === 1 && bioQuestions[0].id === newQ.id, 'Filter by subjectId (biology) returns authored question');

const hotsQuestions = filterCustomQuestions({ difficulty: 'hots' });
assert(hotsQuestions.length >= 2, 'Filter by difficulty (hots) works');

const searchResults = filterCustomQuestions({ searchQuery: 'البلعمية' });
assert(searchResults.length === 1, 'Search query by Arabic keyword returns matching question');

// 4. Updating a Question
console.log('\n🔹 4. Verifying Question Edit / Update:');
const updatedQ = saveCustomQuestion({
  ...newQ,
  difficulty: 'medium',
  chapterTitleAr: 'المناعة المتقدمة 2026',
});
assert(updatedQ.difficulty === 'medium', 'Updated difficulty from hots to medium');
assert(updatedQ.chapterTitleAr === 'المناعة المتقدمة 2026', 'Updated chapter title');
assert(getLocalCustomQuestions().find(q => q.id === newQ.id)?.difficulty === 'medium', 'Persistence reflects update');

// 5. JSON Export & Import
console.log('\n🔹 5. Verifying JSON Question Bank Export & Import:');
const exportedJSON = exportCustomQuestionsJSON('أ. حسام الشرقاوي');
assert(typeof exportedJSON === 'string' && exportedJSON.includes('ClipSAT EGBaccalaureate'), 'Export contains valid package metadata');

// Clear storage and test import
localStorage.clear();
const importRes = importCustomQuestionsJSON(exportedJSON);
assert(importRes.success === true, 'Import parsed and loaded successfully');
assert(importRes.count > 0, `Imported ${importRes.count} questions`);
assert(getLocalCustomQuestions().some(q => q.id === newQ.id), 'Authored question restored from backup');

// 6. Assignment Generation with Custom Questions
console.log('\n🔹 6. Verifying Assignment Creation with Custom Questions:');
const testAssignment = await createAssignment({
  title: 'واجب المناعة الأسبوعي',
  titleAr: 'واجب المناعة الأسبوعي',
  subjectId: 'biology',
  chapterIds: ['المناعة في الإنسان'],
  questionIds: [newQ.id],
  customQuestions: [newQ],
  totalPoints: 20,
  timeLimitMinutes: 15,
  teacherName: 'د. مجدي يعقوب',
  teacherTip: 'حل جميع الأسئلة بدقة.',
});
assert(testAssignment.assignmentCode.length === 6, 'Generated 6-character assignment code');
assert(testAssignment.customQuestions?.[0].id === newQ.id, 'Embedded custom question into assignment');

// 7. Student Submissions & Teacher Grading
console.log('\n🔹 7. Verifying Student Submissions & Teacher Grading Engine:');
const testSubmission: AssignmentSubmission = {
  submissionId: 'sub_test_101',
  assignmentCode: testAssignment.assignmentCode,
  studentName: 'محمود عبد الرحمن خليل',
  studentId: 'st_8841',
  score: 16,
  totalPoints: 20,
  percentage: 80,
  timeSpentSeconds: 480,
  errorTypeBreakdown: { 'misconception': 1 },
  answers: [
    {
      questionId: newQ.id,
      selectedOptionIndex: 0,
      isCorrect: true,
      timeSpentSec: 45,
    }
  ],
  submittedAt: Date.now() - 3600000,
};

saveSubmissionLocally(testSubmission);
const storedSubs = getLocalSubmissions();
assert(storedSubs.some(s => s.submissionId === 'sub_test_101'), 'Student submission persisted to local storage');

// Teacher grading & feedback
const gradeSuccess = saveSubmissionGrade('sub_test_101', {
  teacherNotes: 'أحسنت يا محمود، إجابة واعية ودقيقة جداً في سؤال الخلايا البلعمية.',
  teacherScoreAdjustment: 2, // Bonus points
  status: 'reviewed',
  teacherName: 'أ. حسام الشرقاوي',
});
assert(gradeSuccess === true, 'Teacher feedback and grade saved');

const updatedSubs = getLocalSubmissions();
const gradedTarget = updatedSubs.find(s => s.submissionId === 'sub_test_101');
assert(gradedTarget?.score === 18, `Adjusted score with bonus (+2) to 18 (got ${gradedTarget?.score})`);
assert(gradedTarget?.percentage === 90, `Updated percentage to 90% (got ${gradedTarget?.percentage}%)`);
assert(gradedTarget?.teacherFeedback?.status === 'reviewed', 'Status updated to reviewed');

// 8. WhatsApp & CSV Report Generators
console.log('\n🔹 8. Verifying WhatsApp & CSV Report Generators:');
const whatsappMsg = generateWhatsAppStudentReport(gradedTarget!, 'واجب المناعة الأسبوعي');
const decodedWA = decodeURIComponent(whatsappMsg);
assert(decodedWA.includes('محمود عبد الرحمن خليل'), 'WhatsApp report contains student name');
assert(decodedWA.includes('18 من 20'), 'WhatsApp report contains updated graded score');
assert(decodedWA.includes('أحسنت يا محمود'), 'WhatsApp report includes teacher notes');

const csvContent = exportClassSubmissionsCSV([gradedTarget!], 'واجب المناعة');
assert(csvContent.startsWith('\uFEFF'), 'CSV includes UTF-8 BOM for Arabic Excel compatibility');
assert(csvContent.includes('محمود عبد الرحمن خليل'), 'CSV contains student name');
assert(csvContent.includes('تمت المراجعة'), 'CSV contains reviewed status');

// 9. Deleting Question
console.log('\n🔹 9. Verifying Question Deletion:');
const deleteRes = deleteCustomQuestion(newQ.id);
assert(deleteRes === true, 'Successfully deleted custom question');
assert(!getLocalCustomQuestions().some(q => q.id === newQ.id), 'Question no longer in storage');

console.log('\n========================================================================');
console.log(`📊 FINAL SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('========================================================================\n');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL TEACHER TOOLS TESTS PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
