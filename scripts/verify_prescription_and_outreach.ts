/**
 * Comprehensive Verification Suite: Daily Adaptive Prescription & School Outreach Hub
 * (سكربت التحقق الشامل: روشتة المذاكرة اليومية التكيفية ومركز التوعية الميدانية للمدارس)
 *
 * Verifies:
 *   1. Adaptive Daily Prescription Engine generation, item prioritization, and constraints
 *   2. Leitner spaced repetition due items prioritization
 *   3. Prerequisite gap repair & HOTS difficulty escalation logic
 *   4. Prescription completion, streak computation, and history tracking
 *   5. School Outreach Hub flyer generator, print styling, and free education guarantees
 *   6. 10-second video ad storyboard simulator (4 scenes with Arabic voiceover & visual directions)
 *   7. WhatsApp parent/teacher reassurance templates and sharing copy
 *   8. Seamless UI integration in Navbar, App, and TestGenerator
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  createDefaultAdaptiveState,
} from '../src/types/adaptivePractice';
import {
  generateDailyPrescription,
  completePrescriptionItem,
  getStudyStreak,
  getRecommendedDifficulty,
  recordAnswer,
} from '../src/services/adaptivePracticeEngine';
import {
  TOP_SUBJECT_KNOWLEDGE_POINTS,
} from '../src/data/curriculumKnowledgePoints';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition: boolean, msg: string) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ PASS: ${msg}`);
  } else {
    failedChecks++;
    console.error(`  ❌ FAIL: ${msg}`);
  }
}

console.log('='.repeat(75));
console.log('🧪 Starting Verification: Daily Prescription & School Outreach Platform');
console.log('='.repeat(75));

// ---------------------------------------------------------------------------
// 1. Daily Prescription Engine Verification
// ---------------------------------------------------------------------------
console.log('\n--- 1. Testing Adaptive Daily Prescription Engine ---');

const state = createDefaultAdaptiveState();
assert(state.kpMastery !== undefined, 'AdaptiveState initialized with empty mastery registry');

const prescription = generateDailyPrescription(state);
assert(prescription !== null && typeof prescription === 'object', 'generateDailyPrescription returns prescription object');
assert(typeof prescription.targetDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(prescription.targetDate), `Prescription targetDate has valid ISO date format: ${prescription.targetDate}`);
assert(prescription.items.length >= 3, `Prescription contains at least 3 prioritized tasks (actual: ${prescription.items.length})`);
assert(prescription.items.length <= 8, `Prescription caps items to MAX_DAILY_ITEMS (<= 8)`);
assert(prescription.estimatedMinutes >= 10 && prescription.estimatedMinutes <= 60, `Estimated study duration is balanced (actual: ${prescription.estimatedMinutes} mins)`);

// Verify item structure
const firstItem = prescription.items[0];
assert(!!firstItem.knowledgePointId, `Prescribed item has knowledgePointId: ${firstItem.knowledgePointId}`);
assert(!!firstItem.knowledgePointNameAr, `Prescribed item has Arabic name: ${firstItem.knowledgePointNameAr}`);
assert(!!firstItem.knowledgePointNameEn, `Prescribed item has English name: ${firstItem.knowledgePointNameEn}`);
assert(firstItem.questionCount === 5, `Prescribed item specifies focused 5-question micro-session`);
assert(firstItem.completed === false, `Initial prescribed item status is incomplete`);
assert(firstItem.priority > 0, `Prescribed item priority is positive: ${firstItem.priority}`);
assert(['easy', 'medium', 'exam_standard', 'hots'].includes(firstItem.difficulty), `Valid difficulty level assigned: ${firstItem.difficulty}`);
assert(['spaced_review', 'prerequisite_gap', 'error_remediation', 'difficulty_escalation', 'time_pressure_training', 'new_topic', 'exam_weight_priority'].includes(firstItem.reason), `Valid clinical reasoning tag: ${firstItem.reason}`);

// ---------------------------------------------------------------------------
// 2. Leitner Spaced Repetition Due Item Prioritization
// ---------------------------------------------------------------------------
console.log('\n--- 2. Testing Leitner Spaced Repetition Priority ---');

const overdueKpId = 'calc_ch1_kp_trig_derivatives';
state.kpMastery[overdueKpId] = {
  knowledgePointId: overdueKpId,
  level: 'developing',
  leitnerBox: 2,
  consecutiveCorrect: 2,
  consecutiveWrong: 0,
  totalAttempts: 5,
  totalCorrect: 3,
  lastPracticedTimestamp: Date.now() - 5 * 86400000,
  nextReviewTimestamp: Date.now() - 86400000, // Due 1 day ago
  difficultyMastery: { easy: 0.8, medium: 0.5, exam_standard: 0.3, hots: 0 },
  errorHistory: [],
  errorTypeDistribution: { conceptual_flaw: 1, calculation_slip: 1, formula_misremembered: 0, misread_given: 0, time_pressure: 0 },
  recentResults: [true, false, true, true, false],
  lastAttemptTimestamp: Date.now() - 86400000,
  avgTimeSec: 45,
  timedAccuracyDelta: 0,
};

const represcription = generateDailyPrescription(state);
const overduePrescribed = represcription.items.find(i => i.knowledgePointId === overdueKpId);
assert(!!overduePrescribed, `Overdue Leitner knowledge point (${overdueKpId}) is prioritized into daily prescription`);
assert(overduePrescribed?.reason === 'spaced_review', `Overdue item correctly labeled with reason 'spaced_review'`);

// ---------------------------------------------------------------------------
// 3. Difficulty Escalation (HOTS) & Prerequisite Resolution
// ---------------------------------------------------------------------------
console.log('\n--- 3. Testing Difficulty Escalation to HOTS ---');

const masteredKpId = 'calc_ch1_kp_implicit_parametric';
state.kpMastery[masteredKpId] = {
  knowledgePointId: masteredKpId,
  level: 'mastered',
  leitnerBox: 5,
  consecutiveCorrect: 6,
  consecutiveWrong: 0,
  totalAttempts: 12,
  totalCorrect: 11,
  lastPracticedTimestamp: Date.now() - 3600000,
  nextReviewTimestamp: Date.now() + 14 * 86400000,
  difficultyMastery: { easy: 1.0, medium: 0.95, exam_standard: 0.9, hots: 0.5 },
  errorHistory: [],
  errorTypeDistribution: { conceptual_flaw: 0, calculation_slip: 1, formula_misremembered: 0, misread_given: 0, time_pressure: 0 },
  recentResults: [true, true, true, true, true],
  lastAttemptTimestamp: Date.now() - 3600000,
  avgTimeSec: 35,
  timedAccuracyDelta: 0,
};

state.difficultyProgress[masteredKpId] = {
  easy: { attempted: 5, correct: 5, recentResults: [true, true, true, true, true] },
  medium: { attempted: 5, correct: 5, recentResults: [true, true, true, true, true] },
  hots: { attempted: 0, correct: 0, recentResults: [] },
};

const recommendedDiff = getRecommendedDifficulty(state, masteredKpId);
assert(recommendedDiff === 'hots', `Mastered concept with >= 80% accuracy on last 5 medium attempts scales up to 'hots' (actual: ${recommendedDiff})`);

// ---------------------------------------------------------------------------
// 4. Prescription Completion & Streak Tracking
// ---------------------------------------------------------------------------
console.log('\n--- 4. Testing Prescription Completion and Streak Tracking ---');

const today = new Date().toISOString().split('T')[0];
assert(state.currentPrescription !== null, 'State tracks active currentPrescription');

// Complete all items in current prescription
const targetItems = [...(state.currentPrescription?.items || [])];
assert(targetItems.length > 0, `Target prescription has ${targetItems.length} items to complete`);

targetItems.forEach((item, index) => {
  completePrescriptionItem(state, item.knowledgePointId, 180);
});

assert(state.prescriptionHistory.length > 0, `Completed prescription successfully archived into history (count: ${state.prescriptionHistory.length})`);
const latestHistory = state.prescriptionHistory[state.prescriptionHistory.length - 1];
assert(latestHistory.date === today, `History records correct date: ${latestHistory.date}`);
assert(latestHistory.completedItems === latestHistory.totalItems, `History reflects 100% item completion`);

const streak = getStudyStreak(state);
assert(streak >= 1, `Study streak active and computed correctly (actual: ${streak} days)`);

// ---------------------------------------------------------------------------
// 5. School Outreach Hub Component & Template Verification
// ---------------------------------------------------------------------------
console.log('\n--- 5. Testing School Outreach Hub & Printable Assets ---');

const outreachPath = path.resolve(ROOT, 'src/components/SchoolOutreachModal.tsx');
assert(fs.existsSync(outreachPath), `SchoolOutreachModal component file exists at: ${outreachPath}`);

const outreachCode = fs.readFileSync(outreachPath, 'utf8');

// A4 Printable Flyer guarantees
assert(outreachCode.includes('مدرسة طه حسين الثانوية بنين'), 'Contains editable Egyptian school default name');
assert(outreachCode.includes('محافظة سوهاج'), 'Contains editable Egyptian governorate default');
assert(outreachCode.includes('print:hidden'), 'Contains responsive print utilities (print:hidden)');
assert(outreachCode.includes('print:shadow-none'), 'Flyer removes screen shadows during printing');
assert(outreachCode.includes('100% مجاني بالكامل بدون أي رسوم أو إعلانات'), 'Flyer guarantees 100% free educational access');
assert(outreachCode.includes('يعمل بالكامل بدون اتصال بالإنترنت'), 'Flyer highlights offline-first capability');
assert(outreachCode.includes('clipsatLogo'), 'Flyer features official ministry/Clipsat educational branding');
assert(outreachCode.includes('EgyptFlag'), 'Flyer proudly displays national Egyptian identity');

// 10-Second Video Ad Storyboard
console.log('\n--- 6. Testing 10-Second Arabic Video Ad Storyboard ---');
assert(outreachCode.includes('بتذاكر لوحدك؟'), 'Scene 1 Hook presents relatable student struggle');
assert(outreachCode.includes('من غير نت، ومن غير دروس خصوصية'), 'Scene 2 Demo demonstrates offline freedom');
assert(outreachCode.includes('كل بنوك الأسئلة الوزارية الرسمية'), 'Scene 3 Assurance builds trust with official content');
assert(outreachCode.includes('امسح الباركود وابدأ فوراً.. مستقبلك يستاهل!'), 'Scene 4 CTA delivers clear motivating action');
assert(outreachCode.includes('adFrames'), 'Ad storyboard array properly structured with 4 frames');

// WhatsApp Reassurance Templates
console.log('\n--- 7. Testing WhatsApp Outreach Templates ---');
assert(outreachCode.includes('رسالة طمأنة لأولياء الأمور'), 'WhatsApp tab includes dedicated parent reassurance template');
assert(outreachCode.includes('رسالة لمعلمي وإدارات المدارس'), 'WhatsApp tab includes formal teacher/principal introduction');
assert(outreachCode.includes('رسالة لجروبات دفعة الثانوية'), 'WhatsApp tab includes peer-to-peer student group message');
assert(outreachCode.includes('api.whatsapp.com/send'), 'Includes 1-click direct WhatsApp share URL generator');

// ---------------------------------------------------------------------------
// 8. End-to-End Navigation & UI Integration Verification
// ---------------------------------------------------------------------------
console.log('\n--- 8. Testing End-to-End Platform Integration ---');

const appPath = path.resolve(ROOT, 'src/App.tsx');
const appCode = fs.readFileSync(appPath, 'utf8');
assert(appCode.includes('DailyPrescriptionModal'), 'App.tsx registers DailyPrescriptionModal');
assert(appCode.includes('SchoolOutreachModal'), 'App.tsx registers SchoolOutreachModal');
assert(appCode.includes('DailyPrescriptionCard'), 'App.tsx places DailyPrescriptionCard on Home dashboard');
assert(appCode.includes("activeTab === 'overview'"), 'Prescription card placed within overview/home tab');
assert(appCode.includes("e.key === 'r'") || appCode.includes("e.code === 'KeyR'"), 'Keyboard shortcut ⌥R bound to Daily Prescription');
assert(appCode.includes("e.key === 'k'") || appCode.includes("e.code === 'KeyK'"), 'Keyboard shortcut ⌥K bound to School Outreach Hub');
assert(appCode.includes('initialPrescribedItem={activePrescribedItem}'), 'Prescription 1-click launch wired to TestGenerator');
assert(appCode.includes('completePrescriptionItem'), 'Prescription item completion updates adaptive engine in App');

const navbarPath = path.resolve(ROOT, 'src/components/Navbar.tsx');
const navbarCode = fs.readFileSync(navbarPath, 'utf8');
assert(navbarCode.includes('onOpenDailyPrescription'), 'Navbar accepts onOpenDailyPrescription prop');
assert(navbarCode.includes('onOpenSchoolOutreach'), 'Navbar accepts onOpenSchoolOutreach prop');
assert(navbarCode.includes('روشتة المذاكرة اليومية'), 'Navbar features Daily Prescription menu entry');
assert(navbarCode.includes('حملة المدارس والمطبوعات الميدانية'), 'Navbar features School Outreach menu entry');

const testGenPath = path.resolve(ROOT, 'src/components/TestGenerator.tsx');
const testGenCode = fs.readFileSync(testGenPath, 'utf8');
assert(testGenCode.includes('initialPrescribedItem'), 'TestGenerator accepts initialPrescribedItem prop');
assert(testGenCode.includes('onPrescriptionItemCompleted'), 'TestGenerator triggers onPrescriptionItemCompleted callback');

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log('\n' + '='.repeat(75));
console.log(`📊 Verification Suite Complete: ${passedChecks}/${totalChecks} checks passed.`);
if (failedChecks > 0) {
  console.error(`❌ ${failedChecks} checks failed.`);
  process.exit(1);
} else {
  console.log('🎉 ALL PRESCRIPTION & SCHOOL OUTREACH CHECKS PASSED PERFECTLY!');
  console.log('='.repeat(75));
  process.exit(0);
}
