/**
 * Automated Verification Suite for Google Login, User Profile Customization,
 * and Local Device Data Persistence / Backup Engine.
 */

// Mock browser localStorage and navigator if running in Node.js environment
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

const eventListeners: Record<string, Function[]> = {};
if (typeof globalThis.window === 'undefined') {
  (globalThis as unknown as { window: typeof globalThis }).window = globalThis;
}

(globalThis.window as unknown as {
  addEventListener: (type: string, listener: Function) => void;
  removeEventListener: (type: string, listener: Function) => void;
  dispatchEvent: (event: { type: string; detail?: unknown }) => boolean;
}).addEventListener = (type: string, listener: Function) => {
  if (!eventListeners[type]) eventListeners[type] = [];
  eventListeners[type].push(listener);
};

(globalThis.window as unknown as {
  removeEventListener: (type: string, listener: Function) => void;
}).removeEventListener = (type: string, listener: Function) => {
  if (!eventListeners[type]) return;
  eventListeners[type] = eventListeners[type].filter(l => l !== listener);
};

(globalThis.window as unknown as {
  dispatchEvent: (event: { type: string; detail?: unknown }) => boolean;
}).dispatchEvent = (event: { type: string; detail?: unknown }) => {
  const listeners = eventListeners[event.type] || [];
  listeners.forEach(l => l(event));
  return true;
};

if (typeof globalThis.CustomEvent === 'undefined') {
  (globalThis as unknown as { CustomEvent: unknown }).CustomEvent = class CustomEvent {
    type: string;
    detail: unknown;
    constructor(type: string, params?: { detail?: unknown }) {
      this.type = type;
      this.detail = params?.detail;
    }
  };
}

import { 
  getDefaultUserProfile, 
  loadLocalUserProfile, 
  saveLocalUserProfile, 
  getLocalDeviceDataSummary, 
  importLocalDataBackup, 
  USER_PROFILE_STORAGE_KEY,
  subscribeToUserProfile
} from '../src/services/userProfileService';
import { getUserGovernorate, setUserGovernorate, USER_GOVERNORATE_STORAGE_KEY } from '../src/services/governorateAnalyticsService';
import { STUDENT_ANALYTICS_STORAGE_KEY } from '../src/services/studentAnalyticsService';
import { MISTAKE_NOTEBOOK_STORAGE_KEY } from '../src/services/mistakeNotebookService';
import { BADGES_STORAGE_KEY } from '../src/services/achievementBadgeService';
import { auth, googleProvider } from '../src/services/firebase';

let passedChecks = 0;
let failedChecks = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passedChecks++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failedChecks++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

console.log('========================================================================');
console.log('🧪 VERIFYING GOOGLE LOGIN & LOCAL USER DATA CUSTOMIZATION SYSTEM');
console.log('========================================================================\n');

// 1. Default User Profile Verification
console.log('🔹 1. Verifying Default Profile Schema & Factory:');
const defaultProfile = getDefaultUserProfile();
assert(typeof defaultProfile.displayName === 'string' && defaultProfile.displayName.length > 0, 'Default profile has a valid displayName');
assert(defaultProfile.isGoogleUser === false, 'Default profile starts as local guest (isGoogleUser = false)');
assert(defaultProfile.role === 'student', 'Default profile role is initialized to student');
assert(defaultProfile.academicTrack === 'scientific_science', 'Default academic track is scientific_science');
assert(defaultProfile.targetPercentage >= 75 && defaultProfile.targetPercentage <= 100, 'Target percentage is in realistic 75%-100% range');
assert(typeof defaultProfile.governorate === 'string', 'Default profile has assigned governorate');
assert(defaultProfile.dailyPracticeGoal > 0, 'Daily practice goal is a positive integer');
assert(typeof defaultProfile.avatarIcon === 'string', 'Default profile includes mascot avatar icon');

// 2. Local Storage Persistence & Retrieval
console.log('\n🔹 2. Verifying Local Device Storage Persistence:');
localStorage.clear();
const loaded1 = loadLocalUserProfile();
assert(loaded1.displayName === defaultProfile.displayName, 'Initial load without storage initializes defaults');
assert(loaded1.role === 'student', 'Initial load preserves student role');
assert(!!localStorage.getItem(USER_PROFILE_STORAGE_KEY), 'Profile is automatically committed to device localStorage');

// Customization: Scientific Math, Medicine, Cairo, 98.5%
const customized = saveLocalUserProfile({
  displayName: 'أحمد محمود النجار',
  role: 'student',
  academicTrack: 'scientific_math',
  dreamCollege: 'كلية الهندسة جامعة القاهرة',
  targetPercentage: 98.5,
  secondLanguage: 'german',
  governorate: 'alexandria',
  dailyPracticeGoal: 25,
  avatarIcon: '📐',
});

assert(customized.displayName === 'أحمد محمود النجار', 'DisplayName updated successfully');
assert(customized.role === 'student', 'Role preserved as student');
assert(customized.academicTrack === 'scientific_math', 'Track customized to scientific_math');
assert(customized.dreamCollege === 'كلية الهندسة جامعة القاهرة', 'Dream college customized');
assert(customized.targetPercentage === 98.5, 'Target percentage set to 98.5%');
assert(customized.secondLanguage === 'german', 'Second foreign language set to German');
assert(customized.governorate === 'alexandria', 'Governorate customized to Alexandria');
assert(customized.avatarIcon === '📐', 'Avatar customized to engineering mascot');

// Verify Teacher Persona Customization & Persistence
console.log('\n🔹 2b. Verifying Teacher Persona Customization & Persistence:');
const teacherProfile = saveLocalUserProfile({
  displayName: 'أ. د/ محمد رمضان',
  role: 'teacher',
  teacherSubject: 'math',
  teacherSchool: 'مدرسة المتفوقين للعلوم والتكنولوجيا STEM',
  teacherBio: 'خبير إعداد وتدريب أوائل الجمهورية في مادة الرياضيات التطبيقية',
  avatarIcon: '👨‍🏫',
});

assert(teacherProfile.role === 'teacher', 'Profile role successfully switched and saved as teacher');
assert(teacherProfile.teacherSubject === 'math', 'Teacher subject saved as math');
assert(teacherProfile.teacherSchool === 'مدرسة المتفوقين للعلوم والتكنولوجيا STEM', 'Teacher school saved');
assert(teacherProfile.avatarIcon === '👨‍🏫', 'Teacher avatar saved');

const reloadedTeacher = loadLocalUserProfile();
assert(reloadedTeacher.role === 'teacher', 'Reload from localStorage preserves teacher role');
assert(reloadedTeacher.teacherSubject === 'math', 'Reload from localStorage preserves teacher subject');
assert(reloadedTeacher.displayName === 'أ. د/ محمد رمضان', 'Reload from localStorage preserves teacher name');

// Switch back to student
const switchedBack = saveLocalUserProfile({
  displayName: 'أحمد محمود النجار',
  role: 'student',
  academicTrack: 'scientific_math',
  governorate: 'alexandria',
});
assert(switchedBack.role === 'student', 'Profile role successfully switched back to student');

// Verify re-reading from localStorage directly
const reloaded = loadLocalUserProfile();
assert(reloaded.displayName === 'أحمد محمود النجار', 'Reload from localStorage preserves customized name');
assert(reloaded.academicTrack === 'scientific_math', 'Reload from localStorage preserves customized track');
assert(reloaded.governorate === 'alexandria', 'Reload from localStorage preserves customized governorate');

// 3. Governorate Analytics Cross-Service Synchronization
console.log('\n🔹 3. Verifying Cross-Service Governorate Synchronization:');
const syncedGov = getUserGovernorate();
assert(syncedGov === 'alexandria', `governorateAnalyticsService updated to match profile (expected alexandria, got ${syncedGov})`);

// 4. Local Device Data Summary
console.log('\n🔹 4. Verifying Local Device Data Summary Engine:');
// Populate test telemetry
localStorage.setItem(STUDENT_ANALYTICS_STORAGE_KEY, JSON.stringify({ totalAttempts: 142 }));
localStorage.setItem(MISTAKE_NOTEBOOK_STORAGE_KEY, JSON.stringify([{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }]));
localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify({ badge_first_quiz: 1700000000, badge_streak_3: 1700001000 }));

const summary = getLocalDeviceDataSummary();
assert(summary.solvedQuestionsCount === 142, `Correctly counts 142 solved questions on device (got ${summary.solvedQuestionsCount})`);
assert(summary.mistakesCount === 3, `Correctly counts 3 mistake notebook items on device (got ${summary.mistakesCount})`);
assert(summary.earnedBadgesCount === 2, `Correctly counts 2 unlocked badges on device (got ${summary.earnedBadgesCount})`);
assert(summary.hasCustomProfile === true, 'Flags that custom profile exists on device');

// 5. JSON Backup Export & Import Verification
console.log('\n🔹 5. Verifying JSON Backup & Restore Engine:');
const testBackupPackage = {
  version: '1.0.0',
  exportDate: new Date().toISOString(),
  exportTimestamp: Date.now(),
  app: 'ClipSAT EGBaccalaureate',
  profile: {
    ...customized,
    displayName: 'سارة خالد المنياوي',
    academicTrack: 'literary',
    dreamCollege: 'كلية الألسن',
    governorate: 'minya',
  },
  analytics: { totalAttempts: 250 },
  mistakes: [{ id: 'm1' }, { id: 'm2' }],
  badges: { badge_top_student: 1700002000 },
  governorate: 'minya',
};

const importResult = importLocalDataBackup(JSON.stringify(testBackupPackage));
assert(importResult.success === true, 'Backup JSON parsed and imported successfully');

const postImportProfile = loadLocalUserProfile();
assert(postImportProfile.displayName === 'سارة خالد المنياوي', 'Restored student name from backup file');
assert(postImportProfile.academicTrack === 'literary', 'Restored literary track from backup file');
assert(postImportProfile.dreamCollege === 'كلية الألسن', 'Restored dream college from backup file');
assert(getUserGovernorate() === 'minya', 'Restored governorate from backup file');

const postImportSummary = getLocalDeviceDataSummary();
assert(postImportSummary.solvedQuestionsCount === 250, 'Restored solved questions count from backup (250)');
assert(postImportSummary.mistakesCount === 2, 'Restored mistake entries from backup (2)');
assert(postImportSummary.earnedBadgesCount === 1, 'Restored earned badges from backup (1)');

// Negative test for malformed JSON
const badImportResult = importLocalDataBackup('invalid-json{{{');
assert(badImportResult.success === false, 'Gracefully rejects corrupt JSON backup file');

// 6. Firebase Authentication & Google Provider Initialization
console.log('\n🔹 6. Verifying Firebase Authentication & Google Provider Setup:');
assert(auth !== undefined && auth !== null, 'Firebase auth instance initialized');
assert(googleProvider !== undefined && googleProvider !== null, 'GoogleAuthProvider initialized');

// 7. Reactive Profile Event Listener
console.log('\n🔹 7. Verifying Reactive Event Subscriptions:');
let notified = false;
let receivedName = '';
const unsub = subscribeToUserProfile((p) => {
  notified = true;
  receivedName = p.displayName;
});

saveLocalUserProfile({ displayName: 'عمر ياسين' });
assert(notified === true, 'Listener triggered upon profile save');
assert(receivedName === 'عمر ياسين', `Listener received updated profile name (expected عمر ياسين, got ${receivedName})`);
unsub();

console.log('\n========================================================================');
console.log(`📊 FINAL SUMMARY: ${passedChecks} PASSED, ${failedChecks} FAILED`);
console.log('========================================================================\n');

if (failedChecks > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL GOOGLE LOGIN & LOCAL USER DATA TESTS PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
