import type { AuthUser } from '@supabase/supabase-js';
import {
  supabase,
  isSupabaseConfigured,
  type ProfileInsert,
  type ProfileRow,
} from './supabaseClient';
import { buildOAuthRedirectUrl } from './supabaseAuthContext';
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

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const PROFILE_SELECT_COLUMNS = [
  'id',
  'email',
  'display_name',
  'photo_url',
  'avatar_icon',
  'profile_role',
  'teacher_subject',
  'teacher_school',
  'teacher_bio',
  'academic_track',
  'dream_college',
  'target_percentage',
  'second_language',
  'governorate',
  'daily_practice_goal',
  'study_minutes_goal',
  'sound_effects_enabled',
  'last_sync_at',
].join(',');

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
 * Determines whether hydrating an OAuth session actually requires a write back
 * to `public.profiles`, eliminating redundant `UPSERT` dead-tuple churn on
 * unchanged sessions (`monitor-vacuum-analyze.md` & `data-upsert.md`).
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

export function mapProfileRowToUserProfile(row: ProfileRow): Partial<UserProfile> {
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
    lastSyncTimestamp: row.last_sync_at ? Date.parse(row.last_sync_at) : Date.now(),
  };
}

export function mapUserProfileToProfileInsert(
  profile: UserProfile,
  uid: string
): ProfileInsert {
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

    // If authenticated with Supabase Auth and online, coalesce rapid UI edits into a single UPSERT
    const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
    if (
      !options?.skipCloudSync &&
      updated.uid &&
      UUID_REGEX.test(updated.uid) &&
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

/**
 * Synchronizes the user profile document to Supabase Postgres (`public.profiles`)
 * using RLS-protected `upsert` (`(select auth.uid()) = id`).
 */
export async function syncProfileToCloud(profile: UserProfile): Promise<void> {
  if (!profile.uid || !UUID_REGEX.test(profile.uid) || !isSupabaseConfigured || !supabase) {
    return;
  }

  try {
    const payload = mapUserProfileToProfileInsert(profile, profile.uid);
    const { error } = await supabase
      .from('profiles')
      .upsert(payload, { onConflict: 'id' });

    if (error) {
      console.warn('Optional Supabase profile sync warning:', error.message);
    }
  } catch (err) {
    console.warn('Optional Supabase profile sync failed (offline or restricted permissions):', err);
  }
}

/**
 * Fetches the authenticated user's profile from Supabase `public.profiles`.
 */
export async function fetchProfileFromCloud(uid: string): Promise<Partial<UserProfile> | null> {
  if (!uid || !UUID_REGEX.test(uid) || !isSupabaseConfigured || !supabase) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select(PROFILE_SELECT_COLUMNS)
      .eq('id', uid)
      .maybeSingle();

    if (error) {
      console.warn('Could not fetch Supabase cloud profile:', error.message);
      return null;
    }

    if (data) {
      return mapProfileRowToUserProfile(data as unknown as ProfileRow);
    }
  } catch (err) {
    console.warn('Could not fetch cloud profile:', err);
  }
  return null;
}

/**
 * Hydrates and merges a verified Supabase Google OAuth `AuthUser` with both
 * `public.profiles` and the local device profile cache.
 */
export async function hydrateProfileFromSupabaseUser(user: AuthUser): Promise<UserProfile> {
  const local = loadLocalUserProfile();
  const meta = (user.user_metadata ?? {}) as Record<string, unknown>;
  const oauthName =
    (typeof meta.full_name === 'string' && meta.full_name.trim()) ||
    (typeof meta.name === 'string' && meta.name.trim()) ||
    undefined;
  const oauthAvatar =
    (typeof meta.avatar_url === 'string' && meta.avatar_url.trim()) ||
    (typeof meta.picture === 'string' && meta.picture.trim()) ||
    undefined;

  const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
  const cloudData = isOnline ? await fetchProfileFromCloud(user.id) : null;

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
      uid: user.id,
      email: user.email || cloudData?.email || local.email,
      displayName: resolvedDisplayName,
      photoURL: oauthAvatar || cloudData?.photoURL || local.photoURL,
      isGoogleUser: true,
      lastSyncTimestamp: Date.now(),
    },
    { skipCloudSync: true }
  );

  if (isOnline && shouldWriteHydratedProfileToCloud(cloudData, merged)) {
    await syncProfileToCloud(merged);
  }

  return merged;
}

/**
 * Initiates Google OAuth Sign-In via Supabase Auth (`supabase.auth.signInWithOAuth`).
 * Preserves the current route URL so the user returns directly to their requested tab.
 */
export async function signInWithGoogle(
  redirectToUrl?: string
): Promise<{ success: boolean; profile?: UserProfile; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      error:
        'supabase/not-configured: يرجى إعداد متغيرات البيئة VITE_SUPABASE_URL و VITE_SUPABASE_PUBLISHABLE_KEY في ملف .env.local وتفعيل موفر Google في لوحة تحكم Supabase Authentication.',
    };
  }

  try {
    const redirectTo =
      redirectToUrl ||
      (typeof window !== 'undefined' && window.location?.href
        ? buildOAuthRedirectUrl(window.location.href)
        : undefined);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account',
        },
      },
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      profile: loadLocalUserProfile(),
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.warn('Supabase Google OAuth sign-in encountered an error:', errorMsg);
    return { success: false, error: errorMsg };
  }
}

/**
 * Signs out from Supabase Auth while preserving local device study progress.
 */
export async function signOutGoogleUser(): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.warn('Error during Supabase signOut:', err);
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
 * Subscribes to real-time changes of the local user profile and Supabase Auth state.
 */
export function subscribeToUserProfile(
  callback: (profile: UserProfile, authUser: AuthUser | null) => void
): () => void {
  let currentUser: AuthUser | null = null;

  const handleProfileChange = () => {
    callback(loadLocalUserProfile(), currentUser);
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener(USER_PROFILE_EVENT, handleProfileChange);
    window.addEventListener('storage', handleProfileChange);
  }

  let unsubscribeSupabase: (() => void) | null = null;
  if (isSupabaseConfigured && supabase) {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      currentUser = session?.user ?? null;
      if (session?.user && (event === 'INITIAL_SESSION' || event === 'SIGNED_IN')) {
        const userSnapshot = session.user;
        // Defer async Supabase DB calls outside the synchronous auth lock callback
        setTimeout(() => {
          hydrateProfileFromSupabaseUser(userSnapshot).catch(() => {});
        }, 0);
      } else if (session?.user && event === 'TOKEN_REFRESHED') {
        // Skip redundant DB SELECT/UPSERT on background hourly JWT refreshes
        // when the local profile is already bound to the same authenticated user.
        const local = loadLocalUserProfile();
        if (!local.isGoogleUser || local.uid !== session.user.id) {
          const userSnapshot = session.user;
          setTimeout(() => {
            hydrateProfileFromSupabaseUser(userSnapshot).catch(() => {});
          }, 0);
        } else {
          handleProfileChange();
        }
      } else if (event === 'SIGNED_OUT') {
        const local = loadLocalUserProfile();
        if (local.isGoogleUser) {
          saveLocalUserProfile({ uid: undefined, isGoogleUser: false }, { skipCloudSync: true });
        } else {
          handleProfileChange();
        }
      } else {
        handleProfileChange();
      }
    });
    unsubscribeSupabase = () => subscription.unsubscribe();
  }

  return () => {
    if (typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
      window.removeEventListener(USER_PROFILE_EVENT, handleProfileChange);
      window.removeEventListener('storage', handleProfileChange);
    }
    unsubscribeSupabase?.();
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
