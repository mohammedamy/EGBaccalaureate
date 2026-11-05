/**
 * Automated Verification Suite for Firebase Authentication (Google Sign-In),
 * Full-App Protected Routes, Custom-Claim Role Guards, and Firestore Security Rules.
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  describeFirebaseAuthError,
  evaluateProtectedRouteAccess,
  extractVerifiedAppRole,
  BENIGN_FIREBASE_AUTH_ERROR_CODES,
  REDIRECT_FALLBACK_FIREBASE_AUTH_ERROR_CODES,
  type FirebaseIdTokenClaims,
} from '../src/services/firebaseAuthContext';
import {
  isValidFirebaseUid,
  timestampLikeToMillis,
  type ProfileDocument,
} from '../src/services/firestoreProfiles';
import {
  getDefaultUserProfile,
  mapProfileDocumentToUserProfile,
  mapUserProfileToProfileDocument,
  shouldWriteHydratedProfileToCloud,
} from '../src/services/userProfileService';

let passed = 0;
let failed = 0;

function assert(condition: boolean, label: string): void {
  if (condition) {
    passed++;
    console.log(`  ✅ PASS: ${label}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${label}`);
  }
}

console.log('========================================================================');
console.log('🔐 VERIFYING FIREBASE AUTH, PROTECTED ROUTES & FIRESTORE SECURITY RULES');
console.log('========================================================================\n');

// 1. Firebase UID validation & error mapping
console.log('🔹 1. Firebase UID Validation & Auth Error Handling:');
assert(isValidFirebaseUid('kX9fP2qLmN3sT7vW1yZ0aB4cD6e8'), 'Accepts opaque 28-char Firebase Auth UID (non-UUID)');
assert(!isValidFirebaseUid(''), 'Rejects empty UID');
assert(!isValidFirebaseUid(undefined), 'Rejects undefined UID');
assert(!isValidFirebaseUid('abc/def'), 'Rejects UID containing "/" (would break Firestore doc path)');
assert(!isValidFirebaseUid('x'.repeat(129)), 'Rejects UID longer than 128 chars');

assert(
  BENIGN_FIREBASE_AUTH_ERROR_CODES.has('auth/popup-closed-by-user'),
  'Treats auth/popup-closed-by-user as a benign (silent) cancellation'
);
assert(
  REDIRECT_FALLBACK_FIREBASE_AUTH_ERROR_CODES.has('auth/popup-blocked'),
  'Falls back to signInWithRedirect when the popup is blocked'
);
assert(
  describeFirebaseAuthError({ code: 'auth/unauthorized-domain', message: 'x' }).startsWith('auth/unauthorized-domain'),
  'Preserves auth/unauthorized-domain code prefix for targeted setup hints'
);
assert(
  describeFirebaseAuthError({ code: 'auth/operation-not-allowed', message: 'x' }).includes('Google sign-in provider is not enabled'),
  'Explains auth/operation-not-allowed as a disabled Google provider'
);

// 2. Protected Route Access Evaluator & Claims Security
console.log('\n🔹 2. Full-App Protected Route Access & Claims Verification:');
assert(
  evaluateProtectedRouteAccess({
    isLoading: true,
    isConfigured: true,
    isAuthenticated: false,
    hasVerifiedClaims: false,
  }) === 'loading',
  'Returns loading state while ID token verification is in progress'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: false,
    hasVerifiedClaims: false,
  }) === 'require_auth',
  'Gates unauthenticated users behind Google sign-in screen'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: true,
    hasVerifiedClaims: false,
  }) === 'require_auth',
  'Refuses route access if user lacks verified ID token claims'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: true,
    hasVerifiedClaims: true,
  }) === 'allow',
  'Grants route access when authenticated with verified ID token claims'
);

// Role must come from a custom claim, never from a user-editable profile field
const plainStudentClaims = {
  sub: 'kX9fP2qLmN3sT7vW1yZ0aB4cD6e8',
  firebase: { sign_in_provider: 'google.com' },
} as unknown as FirebaseIdTokenClaims;
assert(
  extractVerifiedAppRole(plainStudentClaims) === null,
  'Returns no verified role when the ID token has no custom role claim'
);

const spoofedNestedClaims = {
  sub: 'kX9fP2qLmN3sT7vW1yZ0aB4cD6e8',
  profile_role: 'teacher',
  user_metadata: { role: 'teacher' },
} as unknown as FirebaseIdTokenClaims;
assert(
  extractVerifiedAppRole(spoofedNestedClaims) === null,
  'Ignores non-custom-claim role hints (profile_role / user_metadata.role)'
);

const verifiedTeacherClaims = {
  sub: 'kX9fP2qLmN3sT7vW1yZ0aB4cD6e8',
  role: 'teacher',
} as unknown as FirebaseIdTokenClaims;
assert(
  extractVerifiedAppRole(verifiedTeacherClaims) === 'teacher',
  'Extracts verified educator role from Firebase custom claim `role`'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: true,
    hasVerifiedClaims: true,
    requiredRole: 'teacher',
    verifiedRole: extractVerifiedAppRole(spoofedNestedClaims),
  }) === 'forbidden_role',
  'Blocks requiredRole="teacher" route without a server-set custom claim'
);

// 3. CamelCase <-> Snake_Case Profile Mapping
console.log('\n🔹 3. UserProfile <-> Firestore profiles/{uid} Mapping:');
const sampleUid = 'kX9fP2qLmN3sT7vW1yZ0aB4cD6e8';
const baseProfile = {
  ...getDefaultUserProfile(),
  email: 'student@example.edu.eg',
  displayName: 'مريم طارق الشاذلي',
  academicTrack: 'stem' as const,
  targetPercentage: 99.2,
  governorate: 'giza',
};
const writePayload = mapUserProfileToProfileDocument(baseProfile, sampleUid);
assert(writePayload.id === sampleUid, 'Maps UID to document id field');
assert(writePayload.display_name === 'مريم طارق الشاذلي', 'Maps displayName to snake_case display_name');
assert(writePayload.academic_track === 'stem', 'Maps academicTrack to academic_track');
assert(Number.isInteger(writePayload.daily_practice_goal), 'daily_practice_goal is written as an integer (matches rules `is int`)');
assert(
  !Object.values(writePayload).some((v) => v === undefined),
  'Write payload contains no `undefined` values (Firestore rejects them)'
);

const syncIso = new Date('2026-10-31T12:00:00Z').toISOString();
const simulatedDoc: ProfileDocument = {
  id: sampleUid,
  email: writePayload.email ?? null,
  display_name: writePayload.display_name,
  photo_url: 'https://lh3.googleusercontent.com/a/avatar',
  avatar_icon: '🚀',
  profile_role: 'teacher',
  teacher_subject: 'الفيزياء',
  teacher_school: 'STEM October',
  teacher_bio: 'Senior Physics Educator',
  academic_track: 'stem',
  dream_college: 'كلية الهندسة',
  target_percentage: 99.2,
  second_language: 'german',
  governorate: 'giza',
  daily_practice_goal: 30,
  study_minutes_goal: 60,
  sound_effects_enabled: true,
  last_sync_at: syncIso,
};
const mappedBack = mapProfileDocumentToUserProfile(simulatedDoc);
assert(mappedBack.role === 'teacher', 'Maps profile_role back to UserProfile.role');
assert(mappedBack.teacherSchool === 'STEM October', 'Maps teacher_school back to teacherSchool');
assert(mappedBack.secondLanguage === 'german', 'Maps second_language back to secondLanguage');
assert(mappedBack.lastSyncTimestamp === Date.parse(syncIso), 'Parses ISO last_sync_at back to epoch ms');
assert(
  timestampLikeToMillis({ toMillis: () => 1234 }) === 1234,
  'Accepts Firestore Timestamp objects for last_sync_at'
);

assert(
  shouldWriteHydratedProfileToCloud(
    {
      email: baseProfile.email,
      photoURL: 'https://lh3.googleusercontent.com/a/avatar',
      displayName: baseProfile.displayName,
    },
    {
      ...baseProfile,
      photoURL: 'https://lh3.googleusercontent.com/a/avatar',
    }
  ) === false,
  'Skips redundant Firestore write when hydrated cloud profile is unchanged'
);
assert(
  shouldWriteHydratedProfileToCloud(null, baseProfile) === true,
  'Writes profile to Firestore when no profiles/{uid} document exists'
);

// 4. Firestore Rules, Firebase Config & Supabase Removal Audit
console.log('\n🔹 4. Auditing Firestore Rules, Firebase Config & Supabase Removal:');
const rootDir = path.resolve(import.meta.dirname, '..');

const rulesPath = path.join(rootDir, 'firestore.rules');
assert(fs.existsSync(rulesPath), 'firestore.rules exists');
const rules = fs.readFileSync(rulesPath, 'utf-8');
assert(/rules_version\s*=\s*'2'/.test(rules), "Rules use rules_version = '2'");
assert(
  /match\s+\/profiles\/\{uid\}[\s\S]*?allow\s+read:\s*if\s+isOwner\(uid\)/.test(rules),
  'profiles/{uid} reads are restricted to the owning user'
);
assert(
  /allow\s+create,\s*update:\s*if\s+isOwner\(uid\)\s*&&\s*isValidProfile\(uid\)/.test(rules),
  'profiles/{uid} writes require ownership AND schema validation'
);
for (const collection of ['platform_stats', 'assignments', 'assignment_submissions', 'question_issue_reports']) {
  assert(
    new RegExp(`match\\s+/${collection}/`).test(rules),
    `Rules cover existing "${collection}" collection (deploy won't lock it out)`
  );
}

const firebaseJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'firebase.json'), 'utf-8')) as {
  firestore?: { rules?: string };
  functions?: Array<{ source?: string }>;
};
assert(firebaseJson.firestore?.rules === 'firestore.rules', 'firebase.json points at firestore.rules');
assert(firebaseJson.functions?.[0]?.source === 'functions', 'firebase.json registers the functions/ codebase');

const pkgJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8')) as {
  dependencies?: Record<string, string>;
};
assert(!pkgJson.dependencies?.['@supabase/supabase-js'], '@supabase/supabase-js dependency removed');
assert(Boolean(pkgJson.dependencies?.firebase), 'firebase SDK dependency present');
assert(!fs.existsSync(path.join(rootDir, 'supabase')), 'supabase/ directory removed');

const mainTsx = fs.readFileSync(path.join(rootDir, 'src', 'main.tsx'), 'utf-8');
const appTsx = fs.readFileSync(path.join(rootDir, 'src', 'App.tsx'), 'utf-8');
assert(mainTsx.includes('<FirebaseAuthProvider>'), 'src/main.tsx wraps application in <FirebaseAuthProvider>');
assert(appTsx.includes('<ProtectedRoute'), 'src/App.tsx gates full application inside <ProtectedRoute>');

console.log('\n========================================================================');
console.log(`📊 FINAL SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('========================================================================\n');

if (failed > 0) {
  process.exit(1);
}
console.log('🎉 ALL FIREBASE AUTH, PROTECTED ROUTES & FIRESTORE RULES CHECKS PASSED!\n');
