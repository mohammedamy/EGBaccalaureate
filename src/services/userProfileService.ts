import {
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider, isFirebaseAuthConfigured } from './firebase';
import {
  PROFILES_COLLECTION,
  isValidFirebaseUid,
  timestampLikeToMillis,
  type ProfileDocument,
  type ProfileWrite,
} from './firestoreProfiles';
import {
  BENIGN_FIREBASE_AUTH_ERROR_CODES,
  REDIRECT_FALLBACK_FIREBASE_AUTH_ERROR_CODES,
  describeFirebaseAuthError,
  getFirebaseAuthErrorCode,
} from './firebaseAuthContext';
import type {
  UserProfile,
  LocalDeviceDataSummary,
  LocalDataExportPackage,
} from '../types/userProfile';
import {
  getUserGovernorate,
  setUserGovernorate,
} from './governorateAnalyticsService';
import { STUDENT_ANALYTICS_STORAGE_KEY } from './studentAnalyticsService';
import { MISTAKE_NOTEBOOK_STORAGE_KEY } from './mistakeNotebookService';
import { BADGES_STORAGE_KEY } from './achievementBadgeService';
import { OFFLINE_PACKS_STORAGE_KEY } from './downloadManagerService';

export const USER_PROFILE_STORAGE_KEY = 'egbac_user_profile_v1';
export const USER_PROFILE_EVENT = 'egbac_user_profile_changed';

let pendingCloudSyncTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleDebouncedCloudSync(profile: UserProfile): void {
  if (pendingCloudSyncTimer !== null) {
    clearTimeout(pendingCloudSyncTimer);
  }
  pendingCloudSyncTimer = setTimeout(() => {
    pendingCloudSyncTimer = null;
    syncProfileToCloud(profile).catch(() => {
      // Silently ignore cloud sync failures in offline or restricted environments
    });
  }, 300);
}

/**
 * Determines whether hydrating an authenticated session actually requires a
 * write back to Firestore `profiles/{uid}`, avoiding a redundant billed
 * document write on every page load when nothing changed.
 */
export function shouldWriteHydratedProfileToCloud(
  cloudData: Partial<UserProfile> | null,
  merged: UserProfile
): boolean {
  if (!cloudData) return true;
  return (
    (cloudData.email ?? undefined) !== (merged.email ?? undefined) ||
    (cloudData.photoURL ?? undefined) !== (merged.photoURL ?? undefined) ||
    cloudData.displayName !== merged.displayName
  );
}

export function mapProfileDocumentToUserProfile(row: ProfileDocument): Partial<UserProfile> {
  return {
    uid: row.id,
    email: row.email ?? undefined,
    displayName: row.display_name,
    photoURL: row.photo_url ?? undefined,
    avatarIcon: row.avatar_icon,
    role: row.profile_role,
    teacherSubject: row.teacher_subject ?? undefined,
    teacherSchool: row.teacher_school ?? undefined,
    teacherBio: row.teacher_bio ?? undefined,
    academicTrack: row.academic_track,
    dreamCollege: row.dream_college,
    targetPercentage: Number(row.target_percentage),
    secondLanguage: row.second_language,
    governorate: row.governorate,
    dailyPracticeGoal: row.daily_practice_goal,
    studyMinutesGoal: row.study_minutes_goal,
    soundEffectsEnabled: row.sound_effects_enabled,
    lastSyncTimestamp: timestampLikeToMillis(row.last_sync_at) ?? Date.now(),
  };
}

export function mapUserProfileToProfileDocument(
  profile: UserProfile,
  uid: string
): ProfileWrite {
  return {
    id: uid,
    email: profile.email ?? null,
    display_name: profile.displayName || 'طالب الثانوية العامة',
    photo_url: profile.photoURL ?? null,
    avatar_icon: profile.avatarIcon || '🎓',
    profile_role: profile.role === 'teacher' ? 'teacher' : 'student',
    teacher_subject: profile.teacherSubject ?? null,
    teacher_school: profile.teacherSchool ?? null,
    teacher_bio: profile.teacherBio ?? null,
    academic_track: profile.academicTrack || 'scientific_science',
    dream_college: profile.dreamCollege || 'كلية الطب البشري',
    target_percentage: Math.min(100, Math.max(0, Number(profile.targetPercentage ?? 95))),
    second_language: profile.secondLanguage || 'french',
    governorate: profile.governorate || 'cairo',
    daily_practice_goal: Math.min(500, Math.max(1, Math.round(profile.dailyPracticeGoal || 15))),
    study_minutes_goal: Math.min(1440, Math.max(1, Math.round(profile.studyMinutesGoal || 30))),
    sound_effects_enabled: profile.soundEffectsEnabled ?? true,
    last_sync_at: new Date().toISOString(),
  };
}

/**
 * Returns the default profile for a new guest student.
 */
export function getDefaultUserProfile(): UserProfile {
  const currentGov = typeof window !== 'undefined' ? getUserGovernorate() : 'cairo';
  return {
    displayName: 'طالب الثانوية العامة',
    isGoogleUser: false,
    role: 'student',
    academicTrack: 'scientific_science',
    dreamCollege: 'كلية الطب البشري',
    targetPercentage: 95.0,
    secondLanguage: 'french',
    governorate: currentGov,
    dailyPracticeGoal: 15,
    studyMinutesGoal: 30,
    soundEffectsEnabled: true,
    avatarIcon: '🎓',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

/**
 * Loads the active user profile from device localStorage.
 * If none exists, creates and persists a default guest profile.
 */
export function loadLocalUserProfile(): UserProfile {
  if (typeof window === 'undefined' || !window.localStorage) {
    return getDefaultUserProfile();
  }

  try {
    const raw = localStorage.getItem(USER_PROFILE_STORAGE_KEY);
    if (!raw) {
      const defaultProfile = getDefaultUserProfile();
      localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(defaultProfile));
      return defaultProfile;
    }

    const parsed = JSON.parse(raw) as Partial<UserProfile>;
    // Merge with defaults to guarantee all schema properties exist
    const defaultProfile = getDefaultUserProfile();
    const merged: UserProfile = {
      ...defaultProfile,
      ...parsed,
      role: parsed.role || 'student',
      updatedAt: parsed.updatedAt || Date.now(),
    };
    return merged;
  } catch (err) {
    console.error('Failed to load user profile from localStorage:', err);
    return getDefaultUserProfile();
  }
}

export interface SaveProfileOptions {
  skipCloudSync?: boolean;
}

/**
 * Saves user profile updates to local device storage immediately (offline-first),
 * syncs linked services (such as governorate), and notifies active UI listeners.
 */
export function saveLocalUserProfile(
  updates: Partial<UserProfile>,
  options?: SaveProfileOptions
): UserProfile {
  if (typeof window === 'undefined' || !window.localStorage) {
    const current = getDefaultUserProfile();
    return { ...current, ...updates, updatedAt: Date.now() };
  }

  const current = loadLocalUserProfile();
  const updated: UserProfile = {
    ...current,
    ...updates,
    updatedAt: Date.now(),
  };

  try {
    localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(updated));

    // If governorate was customized, keep governorateAnalyticsService in sync
    if (updates.governorate && updates.governorate !== current.governorate) {
      setUserGovernorate(updates.governorate);
    }

    // Broadcast change event to reactive UI components
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent(USER_PROFILE_EVENT, { detail: updated }));
    }

    // If authenticated with Firebase Auth and online, coalesce rapid UI edits into a single write
    const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
    if (
      !options?.skipCloudSync &&
      isValidFirebaseUid(updated.uid) &&
      updated.isGoogleUser &&
      isOnline
    ) {
      scheduleDebouncedCloudSync(updated);
    }
  } catch (err) {
    console.error('Failed to save user profile to localStorage:', err);
  }

  return updated;
}

export interface SyncProfileOptions {
  /** Set when no `profiles/{uid}` document exists yet so `created_at` is stamped once. */
  isNewDocument?: boolean;
}

/**
 * Synchronizes the user profile to Cloud Firestore (`profiles/{uid}`) using a
 * merge write. `firestore.rules` restricts writes to the owning user.
 */
export async function syncProfileToCloud(
  profile: UserProfile,
  options?: SyncProfileOptions
): Promise<void> {
  if (!isValidFirebaseUid(profile.uid) || !isFirebaseAuthConfigured) {
    return;
  }
  // Only write when the signed-in Firebase user owns this profile
  if (auth.currentUser?.uid !== profile.uid) {
    return;
  }

  try {
    const payload = mapUserProfileToProfileDocument(profile, profile.uid);
    await setDoc(
      doc(db, PROFILES_COLLECTION, profile.uid),
      {
        ...payload,
        updated_at: serverTimestamp(),
        ...(options?.isNewDocument ? { created_at: serverTimestamp() } : {}),
      },
      { merge: true }
    );
  } catch (err) {
    console.warn('Optional Firestore profile sync failed (offline or restricted permissions):', err);
  }
}

/**
 * Fetches the authenticated user's profile from Firestore `profiles/{uid}`.
 */
export async function fetchProfileFromCloud(uid: string): Promise<Partial<UserProfile> | null> {
  if (!isValidFirebaseUid(uid) || !isFirebaseAuthConfigured) {
    return null;
  }

  try {
    const snap = await getDoc(doc(db, PROFILES_COLLECTION, uid));
    if (snap.exists()) {
      return mapProfileDocumentToUserProfile({ ...(snap.data() as ProfileDocument), id: uid });
    }
  } catch (err) {
    console.warn('Could not fetch Firestore cloud profile:', err);
  }
  return null;
}

/**
 * Hydrates and merges a signed-in Firebase Google `User` with both Firestore
 * `profiles/{uid}` and the local device profile cache.
 *
 * Concurrent calls for the same UID (e.g. popup sign-in result and the
 * `onAuthStateChanged` listener firing together) share one in-flight request.
 */
let inflightHydration: { uid: string; promise: Promise<UserProfile> } | null = null;

export function hydrateProfileFromFirebaseUser(user: User): Promise<UserProfile> {
  if (inflightHydration && inflightHydration.uid === user.uid) {
    return inflightHydration.promise;
  }
  const promise = performProfileHydration(user).finally(() => {
    if (inflightHydration?.promise === promise) {
      inflightHydration = null;
    }
  });
  inflightHydration = { uid: user.uid, promise };
  return promise;
}

async function performProfileHydration(user: User): Promise<UserProfile> {
  const local = loadLocalUserProfile();
  const googleInfo = user.providerData.find((p) => p.providerId === 'google.com');
  const oauthName = (user.displayName || googleInfo?.displayName || '').trim() || undefined;
  const oauthAvatar = (user.photoURL || googleInfo?.photoURL || '').trim() || undefined;

  const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
  const cloudData = isOnline ? await fetchProfileFromCloud(user.uid) : null;

  const resolvedDisplayName =
    (cloudData?.displayName && cloudData.displayName !== 'طالب الثانوية العامة'
      ? cloudData.displayName
      : undefined) ||
    (local.displayName && local.displayName !== 'طالب الثانوية العامة'
      ? local.displayName
      : undefined) ||
    oauthName ||
    cloudData?.displayName ||
    local.displayName;

  const merged = saveLocalUserProfile(
    {
      ...(cloudData ?? {}),
      uid: user.uid,
      email: user.email || googleInfo?.email || cloudData?.email || local.email,
      displayName: resolvedDisplayName,
      photoURL: oauthAvatar || cloudData?.photoURL || local.photoURL,
      isGoogleUser: true,
      lastSyncTimestamp: Date.now(),
    },
    { skipCloudSync: true }
  );

  if (isOnline && shouldWriteHydratedProfileToCloud(cloudData, merged)) {
    await syncProfileToCloud(merged, { isNewDocument: !cloudData });
  }

  return merged;
}

/**
 * Initiates Google Sign-In via Firebase Authentication.
 *
 * Uses `signInWithPopup` (keeps the user on their current route/deep link) and
 * falls back to `signInWithRedirect` when popups are blocked or unsupported.
 */
export async function signInWithGoogle(): Promise<{
  success: boolean;
  profile?: UserProfile;
  error?: string;
}> {
  if (!isFirebaseAuthConfigured) {
    return {
      success: false,
      error:
        'firebase/not-configured: إعدادات Firebase غير مكتملة في src/services/firebase.ts / Firebase web config is incomplete in src/services/firebase.ts.',
    };
  }

  try {
    const credential = await signInWithPopup(auth, googleProvider);
    const profile = await hydrateProfileFromFirebaseUser(credential.user);
    return { success: true, profile };
  } catch (err: unknown) {
    const code = getFirebaseAuthErrorCode(err);

    if (code && BENIGN_FIREBASE_AUTH_ERROR_CODES.has(code)) {
      // User closed the popup — not an error worth surfacing
      return { success: false };
    }

    if (code && REDIRECT_FALLBACK_FIREBASE_AUTH_ERROR_CODES.has(code)) {
      try {
        await signInWithRedirect(auth, googleProvider);
        return { success: true, profile: loadLocalUserProfile() };
      } catch (redirectErr) {
        const message = describeFirebaseAuthError(redirectErr);
        console.warn('Firebase Google redirect sign-in failed:', message);
        return { success: false, error: message };
      }
    }

    const message = describeFirebaseAuthError(err);
    console.warn('Firebase Google sign-in encountered an error:', message);
    return { success: false, error: message };
  }
}

/**
 * Completes a pending `signInWithRedirect` flow (if any) after the page reloads.
 * Returns a user-facing error message when the redirect sign-in failed.
 */
export async function completeRedirectSignIn(): Promise<string | null> {
  if (!isFirebaseAuthConfigured) return null;
  try {
    await getRedirectResult(auth);
    return null;
  } catch (err) {
    const code = getFirebaseAuthErrorCode(err);
    if (code && BENIGN_FIREBASE_AUTH_ERROR_CODES.has(code)) return null;
    return describeFirebaseAuthError(err);
  }
}

/**
 * Signs out from Firebase Auth while preserving local device study progress.
 */
export async function signOutGoogleUser(): Promise<void> {
  if (isFirebaseAuthConfigured) {
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      console.warn('Error during Firebase signOut:', err);
    }
  }

  saveLocalUserProfile(
    {
      uid: undefined,
      isGoogleUser: false,
    },
    { skipCloudSync: true }
  );
}

/**
 * Subscribes to real-time changes of the local user profile and Firebase Auth state.
 */
export function subscribeToUserProfile(
  callback: (profile: UserProfile, authUser: User | null) => void
): () => void {
  let currentUser: User | null = null;

  const handleProfileChange = () => {
    callback(loadLocalUserProfile(), currentUser);
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener(USER_PROFILE_EVENT, handleProfileChange);
    window.addEventListener('storage', handleProfileChange);
  }

  let unsubscribeAuth: (() => void) | null = null;
  if (isFirebaseAuthConfigured && typeof window !== 'undefined') {
    // `onAuthStateChanged` fires once on startup (restored session or null),
    // then on every sign-in / sign-out — but NOT on hourly token refreshes.
    unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      currentUser = user;
      if (user) {
        hydrateProfileFromFirebaseUser(user).catch(() => {});
      } else {
        const local = loadLocalUserProfile();
        if (local.isGoogleUser) {
          saveLocalUserProfile({ uid: undefined, isGoogleUser: false }, { skipCloudSync: true });
        } else {
          handleProfileChange();
        }
      }
    });
  }

  return () => {
    if (typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
      window.removeEventListener(USER_PROFILE_EVENT, handleProfileChange);
      window.removeEventListener('storage', handleProfileChange);
    }
    unsubscribeAuth?.();
  };
}

/**
 * Computes a summary of all user data stored locally on this device.
 */
export function getLocalDeviceDataSummary(): LocalDeviceDataSummary {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {
      solvedQuestionsCount: 0,
      mistakesCount: 0,
      earnedBadgesCount: 0,
      downloadedPacksCount: 0,
      hasCustomProfile: false,
    };
  }

  let solvedQuestionsCount = 0;
  try {
    const raw = localStorage.getItem(STUDENT_ANALYTICS_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && typeof data.totalAttempts === 'number') {
        solvedQuestionsCount = data.totalAttempts;
      }
    }
  } catch {}

  let mistakesCount = 0;
  try {
    const raw = localStorage.getItem(MISTAKE_NOTEBOOK_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data)) mistakesCount = data.length;
    }
  } catch {}

  let earnedBadgesCount = 0;
  try {
    const raw = localStorage.getItem(BADGES_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (typeof data === 'object' && data !== null) {
        earnedBadgesCount = Object.keys(data).length;
      }
    }
  } catch {}

  let downloadedPacksCount = 0;
  try {
    const raw = localStorage.getItem(OFFLINE_PACKS_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data)) downloadedPacksCount = data.length;
    }
  } catch {}

  const rawProfile = localStorage.getItem(USER_PROFILE_STORAGE_KEY);
  const hasCustomProfile = !!rawProfile;

  return {
    solvedQuestionsCount,
    mistakesCount,
    earnedBadgesCount,
    downloadedPacksCount,
    hasCustomProfile,
  };
}

/**
 * Packages all local device study data into a downloadable JSON file.
 */
export function exportLocalDataBackup(): void {
  if (typeof window === 'undefined' || !window.localStorage) return;

  const profile = loadLocalUserProfile();

  const getParsedItem = (key: string) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : undefined;
    } catch {
      return undefined;
    }
  };

  const backupPackage: LocalDataExportPackage = {
    version: '1.0.0',
    exportDate: new Date().toISOString(),
    exportTimestamp: Date.now(),
    app: 'ClipSAT EGBaccalaureate',
    profile,
    analytics: getParsedItem(STUDENT_ANALYTICS_STORAGE_KEY),
    mistakes: getParsedItem(MISTAKE_NOTEBOOK_STORAGE_KEY),
    badges: getParsedItem(BADGES_STORAGE_KEY),
    adaptiveState: getParsedItem('egbac_adaptive_state'),
    governorate: getUserGovernorate(),
  };

  const dataStr =
    'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupPackage, null, 2));
  const dateFormatted = new Date().toISOString().slice(0, 10);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `egbac_study_backup_${dateFormatted}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Imports a previously exported JSON backup file and restores it locally on the device.
 */
export function importLocalDataBackup(jsonString: string): { success: boolean; message: string } {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { success: false, message: 'LocalStorage unavailable in this environment' };
  }

  try {
    const data = JSON.parse(jsonString) as Partial<LocalDataExportPackage>;
    if (!data || typeof data !== 'object') {
      return { success: false, message: 'ملف غير صالح / Invalid backup format' };
    }

    if (data.profile) {
      localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(data.profile));
    }
    if (data.analytics) {
      localStorage.setItem(STUDENT_ANALYTICS_STORAGE_KEY, JSON.stringify(data.analytics));
    }
    if (data.mistakes) {
      localStorage.setItem(MISTAKE_NOTEBOOK_STORAGE_KEY, JSON.stringify(data.mistakes));
    }
    if (data.badges) {
      localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify(data.badges));
    }
    if (data.adaptiveState) {
      localStorage.setItem('egbac_adaptive_state', JSON.stringify(data.adaptiveState));
    }
    if (data.governorate) {
      setUserGovernorate(data.governorate);
    }

    // Trigger update notifications
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent(USER_PROFILE_EVENT, { detail: loadLocalUserProfile() }));
    }

    return {
      success: true,
      message:
        'تم استعادة بياناتك بنجاح محلياً على هذا الجهاز! / Successfully restored data on this device.',
    };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : 'خطأ في قراءة ملف النسخة الاحتياطية',
    };
  }
}

/**
 * Clears local study data on this device, restoring the default profile.
 */
export function resetLocalDeviceData(): void {
  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    localStorage.removeItem(USER_PROFILE_STORAGE_KEY);
    localStorage.removeItem(STUDENT_ANALYTICS_STORAGE_KEY);
    localStorage.removeItem(MISTAKE_NOTEBOOK_STORAGE_KEY);
    localStorage.removeItem(BADGES_STORAGE_KEY);
    localStorage.removeItem('egbac_adaptive_state');
  } catch {}

  const defaultProfile = getDefaultUserProfile();
  saveLocalUserProfile(defaultProfile, { skipCloudSync: true });
}
