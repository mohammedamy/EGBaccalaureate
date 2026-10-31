/**
 * Automated Verification Suite for Supabase Auth (Google OAuth),
 * Full-App Protected Routes, Secret-Key Guards, and Postgres RLS / Index Best Practices.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { JwtPayload } from '@supabase/supabase-js';
import {
  isForbiddenClientSecretKey,
  resolveSupabaseAuthConfig,
  type ProfileRow,
} from '../src/services/supabaseClient';
import {
  buildOAuthRedirectUrl,
  evaluateProtectedRouteAccess,
  extractOAuthUrlError,
  extractVerifiedAppRole,
} from '../src/services/supabaseAuthContext';
import {
  PROFILE_SELECT_COLUMNS,
  getDefaultUserProfile,
  mapProfileRowToUserProfile,
  mapUserProfileToProfileInsert,
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

function buildMockJwt(payload: Record<string, unknown>): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${header}.${body}.signature_stub`;
}

console.log('========================================================================');
console.log('🔐 VERIFYING SUPABASE AUTH, PROTECTED ROUTES & POSTGRES RLS BEST PRACTICES');
console.log('========================================================================\n');

// 1. Client Config & Secret Key Guard
console.log('🔹 1. Supabase Client Configuration & Secret-Key Leak Guard:');
const unconfiguredPlaceholder = resolveSupabaseAuthConfig({
  VITE_SUPABASE_URL: 'https://your-project-ref.supabase.co',
  VITE_SUPABASE_PUBLISHABLE_KEY: 'your-supabase-publishable-key',
});
assert(
  unconfiguredPlaceholder.isConfigured === false,
  'Rejects .env.example placeholder URL and key cleanly'
);

const validPublishable = resolveSupabaseAuthConfig({
  VITE_SUPABASE_URL: 'https://xyzcompany.supabase.co/',
  VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test_123456',
});
assert(validPublishable.isConfigured === true, 'Accepts valid Supabase URL + sb_publishable_* key');
assert(
  validPublishable.url === 'https://xyzcompany.supabase.co',
  'Normalizes trailing slashes on VITE_SUPABASE_URL'
);
assert(
  validPublishable.oauthCallbackUrl === 'https://xyzcompany.supabase.co/auth/v1/callback',
  'Computes exact Google OAuth callback URL'
);

const fallbackAnon = resolveSupabaseAuthConfig({
  VITE_SUPABASE_URL: 'https://xyzcompany.supabase.co',
  VITE_SUPABASE_ANON_KEY: buildMockJwt({ role: 'anon', iss: 'supabase' }),
});
assert(fallbackAnon.isConfigured === true, 'Falls back cleanly to legacy VITE_SUPABASE_ANON_KEY JWT');

const leakedSbSecret = resolveSupabaseAuthConfig({
  VITE_SUPABASE_URL: 'https://xyzcompany.supabase.co',
  VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_secret_live_super_privileged',
});
assert(
  leakedSbSecret.hasForbiddenSecretKey === true && leakedSbSecret.isConfigured === false,
  'Blocks sb_secret_* key from initializing in browser bundle'
);

const leakedServiceRoleJwt = buildMockJwt({ role: 'service_role', iss: 'supabase' });
assert(
  isForbiddenClientSecretKey(leakedServiceRoleJwt) === true,
  'Detects and blocks service_role JWT in client environment variables'
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
  'Returns loading state while JWT claims verification is in progress'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: false,
    hasVerifiedClaims: false,
  }) === 'require_auth',
  'Gates unauthenticated users behind Google OAuth sign-in screen'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: true,
    hasVerifiedClaims: false,
  }) === 'require_auth',
  'Refuses route access if session lacks verified getClaims() payload'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: true,
    hasVerifiedClaims: true,
  }) === 'allow',
  'Grants route access when authenticated with verified JWT claims'
);

// Verify `user_metadata` cannot escalate role!
const spoofedUserMetaClaims = {
  sub: '11111111-1111-4111-8111-111111111111',
  user_metadata: { role: 'teacher' },
  app_metadata: { provider: 'google' },
} as unknown as JwtPayload;
assert(
  extractVerifiedAppRole(spoofedUserMetaClaims) === null,
  'Ignores user-editable user_metadata.role for authorization decisions'
);

const verifiedTeacherClaims = {
  sub: '11111111-1111-4111-8111-111111111111',
  app_metadata: { role: 'teacher' },
} as unknown as JwtPayload;
assert(
  extractVerifiedAppRole(verifiedTeacherClaims) === 'teacher',
  'Extracts verified educator role exclusively from app_metadata.role'
);

assert(
  evaluateProtectedRouteAccess({
    isLoading: false,
    isConfigured: true,
    isAuthenticated: true,
    hasVerifiedClaims: true,
    requiredRole: 'teacher',
    verifiedRole: extractVerifiedAppRole(spoofedUserMetaClaims),
  }) === 'forbidden_role',
  'Blocks requiredRole="teacher" route when user only spoofed user_metadata.role'
);

// 3. OAuth Deep-Link Redirect & Error Parsing
console.log('\n🔹 3. OAuth Deep-Link Preservation & Error Extraction:');
const cleanedRedirect = buildOAuthRedirectUrl(
  'https://egbac.example.com/?subject=physics&tab=analytics&code=pkce_123&error_description=old#access_token=secret'
);
assert(
  cleanedRedirect === 'https://egbac.example.com/?subject=physics&tab=analytics',
  'Preserves ?subject & ?tab deep-link query params while stripping code, error & hash tokens'
);

const extractedErr = extractOAuthUrlError(
  'https://egbac.example.com/?tab=overview#error=server_error&error_description=Unsupported+provider%3A+provider+is+not+enabled'
);
assert(
  extractedErr === 'Unsupported provider: provider is not enabled',
  'Extracts and URL-decodes OAuth callback error descriptions'
);

// 4. CamelCase <-> Snake_Case Profile Mapping
console.log('\n🔹 4. UserProfile <-> Postgres public.profiles Mapping:');
const sampleUid = '22222222-2222-4222-8222-222222222222';
const baseProfile = {
  ...getDefaultUserProfile(),
  email: 'student@example.edu.eg',
  displayName: 'مريم طارق الشاذلي',
  academicTrack: 'stem' as const,
  targetPercentage: 99.2,
  governorate: 'giza',
};
const insertPayload = mapUserProfileToProfileInsert(baseProfile, sampleUid);
assert(insertPayload.id === sampleUid, 'Maps UID to primary key id');
assert(insertPayload.display_name === 'مريم طارق الشاذلي', 'Maps displayName to snake_case display_name');
assert(insertPayload.academic_track === 'stem', 'Maps academicTrack to academic_track');

const simulatedRow: ProfileRow = {
  id: sampleUid,
  email: insertPayload.email ?? null,
  display_name: insertPayload.display_name ?? '',
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
  last_sync_at: new Date().toISOString(),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};
const mappedBack = mapProfileRowToUserProfile(simulatedRow);
assert(mappedBack.role === 'teacher', 'Maps profile_role back to UserProfile.role');
assert(mappedBack.teacherSchool === 'STEM October', 'Maps teacher_school back to teacherSchool');
assert(mappedBack.secondLanguage === 'german', 'Maps second_language back to secondLanguage');

// 5. SQL Migration & Supply-Chain Audit
console.log('\n🔹 5. Auditing SQL Migration, RLS Policies, Indexes & Pinned SDK:');
const rootDir = path.resolve(import.meta.dirname, '..');
const migrationsDir = path.join(rootDir, 'supabase', 'migrations');
const migrationFiles = fs.readdirSync(migrationsDir).filter((f) => f.endsWith('_auth_profiles_and_rls.sql'));
assert(migrationFiles.length === 1, 'Found Supabase CLI-generated auth_profiles_and_rls migration file');

const sql = fs.readFileSync(path.join(migrationsDir, migrationFiles[0]), 'utf-8');
const sqlExecutableOnly = sql.replace(/--.*$/gm, '');
assert(
  /alter\s+table\s+public\.profiles\s+enable\s+row\s+level\s+security/i.test(sqlExecutableOnly),
  'RLS is enabled on public.profiles'
);
assert(!/auth\.role\s*\(/i.test(sqlExecutableOnly), 'Migration does NOT use deprecated auth.role()');
assert(
  /\(\s*select\s+auth\.uid\s*\(\s*\)\s*\)\s*=\s*id/i.test(sql),
  'RLS policies wrap (select auth.uid()) = id for initPlan single-evaluation caching'
);
assert(
  /for\s+update[\s\S]*?to\s+authenticated[\s\S]*?using\s*\(\s*\(\s*select\s+auth\.uid\(\)\s*\)\s*=\s*id\s*\)[\s\S]*?with\s+check\s*\(\s*\(\s*select\s+auth\.uid\(\)\s*\)\s*=\s*id\s*\)/i.test(
    sql
  ),
  'UPDATE policy specifies TO authenticated + BOTH USING and WITH CHECK predicates'
);
assert(
  /create\s+or\s+replace\s+function\s+private\.handle_new_user\(\)[\s\S]*?security\s+definer[\s\S]*?set\s+search_path\s*=\s*''/i.test(
    sql
  ),
  'SECURITY DEFINER trigger function is isolated in private schema with empty search_path'
);
assert(
  /revoke\s+execute\s+on\s+function\s+private\.handle_new_user\(\)\s+from\s+public,\s*anon,\s*authenticated/i.test(
    sql
  ),
  'Direct execution of private.handle_new_user() is revoked from public, anon, and authenticated'
);
assert(
  /create\s+index\s+if\s+not\s+exists\s+profiles_teachers_subject_idx[\s\S]*?include\s*\(\s*display_name,\s*teacher_school\s*\)[\s\S]*?where\s+profile_role\s*=\s*'teacher'\s+and\s+teacher_subject\s+is\s+not\s+null/i.test(
    sqlExecutableOnly
  ),
  'Includes partial + covering (INCLUDE) B-tree index for non-null teacher lookup queries'
);
assert(
  /create\s+index\s+if\s+not\s+exists\s+profiles_governorate_track_idx[\s\S]*?include\s*\(\s*target_percentage,\s*daily_practice_goal,\s*study_minutes_goal\s*\)/i.test(
    sqlExecutableOnly
  ),
  'Includes composite + covering (INCLUDE) B-tree index for regional cohort Index-Only Scans'
);
assert(
  /fillfactor\s*=\s*90[\s\S]*?autovacuum_vacuum_scale_factor\s*=\s*0\.05[\s\S]*?autovacuum_analyze_scale_factor\s*=\s*0\.02/i.test(
    sqlExecutableOnly
  ),
  'Configures HOT-update fillfactor (90) and aggressive autovacuum/autoanalyze scale factors'
);
assert(
  /is\s+distinct\s+from/i.test(sqlExecutableOnly),
  'ON CONFLICT DO UPDATE guards against no-op MVCC dead tuples via IS DISTINCT FROM'
);
assert(
  !PROFILE_SELECT_COLUMNS.includes('created_at') && !PROFILE_SELECT_COLUMNS.includes('updated_at'),
  'PostgREST SELECT projection trims unused timestamp columns'
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
  'Skips redundant UPSERT round-trip when hydrated cloud profile is unchanged'
);
assert(
  shouldWriteHydratedProfileToCloud(null, baseProfile) === true,
  'Writes profile to cloud when no existing public.profiles row is found'
);

const pkgJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8')) as {
  dependencies?: Record<string, string>;
};
const pinnedVersion = pkgJson.dependencies?.['@supabase/supabase-js'] ?? '';
assert(
  /^\d+\.\d+\.\d+$/.test(pinnedVersion),
  `@supabase/supabase-js is pinned to exact version (${pinnedVersion}) per supply-chain checklist`
);

const mainTsx = fs.readFileSync(path.join(rootDir, 'src', 'main.tsx'), 'utf-8');
const appTsx = fs.readFileSync(path.join(rootDir, 'src', 'App.tsx'), 'utf-8');
assert(mainTsx.includes('<SupabaseAuthProvider>'), 'src/main.tsx wraps application in <SupabaseAuthProvider>');
assert(appTsx.includes('<ProtectedRoute'), 'src/App.tsx gates full application inside <ProtectedRoute>');

console.log('\n========================================================================');
console.log(`📊 FINAL SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('========================================================================\n');

if (failed > 0) {
  process.exit(1);
}
console.log('🎉 ALL SUPABASE AUTH, PROTECTED ROUTES & RLS CHECKS PASSED!\n');
