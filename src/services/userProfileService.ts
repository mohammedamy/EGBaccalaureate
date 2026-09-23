import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  type User 
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, db } from './firebase';
import type { 
  UserProfile, 
  LocalDeviceDataSummary, 
  LocalDataExportPackage 
} from '../types/userProfile';
import { 
  getUserGovernorate, 
  setUserGovernorate 
} from './governorateAnalyticsService';
import { STUDENT_ANALYTICS_STORAGE_KEY } from './studentAnalyticsService';
import { MISTAKE_NOTEBOOK_STORAGE_KEY } from './mistakeNotebookService';
import { BADGES_STORAGE_KEY } from './achievementBadgeService';
import { OFFLINE_PACKS_STORAGE_KEY } from './downloadManagerService';

export const USER_PROFILE_STORAGE_KEY = 'egbac_user_profile_v1';
export const USER_PROFILE_EVENT = 'egbac_user_profile_changed';

/**
 * Returns the default profile for a new guest student.
 */
export function getDefaultUserProfile(): UserProfile {
  const currentGov = typeof window !== 'undefined' ? getUserGovernorate() : 'cairo';
  return {
    displayName: 'طالب الثانوية العامة',
    isGoogleUser: false,
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
      updatedAt: parsed.updatedAt || Date.now(),
    };
    return merged;
  } catch (err) {
    console.error('Failed to load user profile from localStorage:', err);
    return getDefaultUserProfile();
  }
}

/**
 * Saves user profile updates to local device storage immediately (offline-first),
 * syncs linked services (such as governorate), and notifies active UI listeners.
 */
export function saveLocalUserProfile(updates: Partial<UserProfile>): UserProfile {
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

    // If the user has a Google UID and is online, attempt optional cloud backup
    if (updated.uid && updated.isGoogleUser && navigator.onLine) {
      syncProfileToCloud(updated).catch(() => {
        // Silently ignore cloud sync failures in offline or restricted environments
      });
    }
  } catch (err) {
    console.error('Failed to save user profile to localStorage:', err);
  }

  return updated;
}

/**
 * Synchronizes the user profile document to Cloud Firestore (`users/{uid}`)
 * for cloud backup when logged in.
 */
export async function syncProfileToCloud(profile: UserProfile): Promise<void> {
  if (!profile.uid || !db) return;

  try {
    const userDocRef = doc(db, 'users', profile.uid);
    await setDoc(userDocRef, {
      ...profile,
      cloudSyncedAt: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.warn('Optional Firestore profile sync failed (offline or restricted permissions):', err);
  }
}

/**
 * Attempts to fetch user profile from Cloud Firestore and merge into local device.
 */
export async function fetchProfileFromCloud(uid: string): Promise<Partial<UserProfile> | null> {
  if (!uid || !db) return null;

  try {
    const userDocRef = doc(db, 'users', uid);
    const snap = await getDoc(userDocRef);
    if (snap.exists()) {
      return snap.data() as Partial<UserProfile>;
    }
  } catch (err) {
    console.warn('Could not fetch cloud profile:', err);
  }
  return null;
}

/**
 * Initiates Google Sign-In using Firebase Authentication popup.
 * Merges Google credentials into the device profile and saves locally.
 */
export async function signInWithGoogle(): Promise<{ success: boolean; profile?: UserProfile; error?: string }> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user: User = result.user;

    const currentProfile = loadLocalUserProfile();
    
    // Check if cloud profile already exists for this Google UID
    let cloudData: Partial<UserProfile> | null = null;
    if (navigator.onLine) {
      cloudData = await fetchProfileFromCloud(user.uid);
    }

    const updatedProfile = saveLocalUserProfile({
      uid: user.uid,
      email: user.email || currentProfile.email,
      displayName: user.displayName || currentProfile.displayName,
      photoURL: user.photoURL || currentProfile.photoURL,
      isGoogleUser: true,
      ...(cloudData || {}),
      lastSyncTimestamp: Date.now(),
    });

    return { success: true, profile: updatedProfile };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.warn('Google sign-in encountered an error:', errorMsg);
    return { success: false, error: errorMsg };
  }
}

/**
 * Signs out from Firebase Authentication, but retains the student's study data
 * safely stored locally on their device.
 */
export async function signOutGoogleUser(): Promise<void> {
  try {
    await signOut(auth);
  } catch (err) {
    console.warn('Error during Firebase signOut:', err);
  }

  // Update profile status locally while keeping all study progress intact
  saveLocalUserProfile({
    isGoogleUser: false,
  });
}

/**
 * Subscribes to real-time changes of the user profile and auth state.
 */
export function subscribeToUserProfile(
  callback: (profile: UserProfile, firebaseUser: User | null) => void
): () => void {
  let currentUser: User | null = null;

  const handleProfileChange = () => {
    callback(loadLocalUserProfile(), currentUser);
  };

  // Listen to custom profile update events
  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener(USER_PROFILE_EVENT, handleProfileChange);
    window.addEventListener('storage', handleProfileChange);
  }

  // Listen to Firebase Auth state
  const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    if (user) {
      const local = loadLocalUserProfile();
      if (!local.isGoogleUser || local.uid !== user.uid) {
        saveLocalUserProfile({
          uid: user.uid,
          email: user.email || local.email,
          displayName: user.displayName || local.displayName,
          photoURL: user.photoURL || local.photoURL,
          isGoogleUser: true,
        });
      }
    }
    handleProfileChange();
  });

  return () => {
    if (typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
      window.removeEventListener(USER_PROFILE_EVENT, handleProfileChange);
      window.removeEventListener('storage', handleProfileChange);
    }
    unsubscribeAuth();
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

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupPackage, null, 2));
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
      message: 'تم استعادة بياناتك بنجاح محلياً على هذا الجهاز! / Successfully restored data on this device.' 
    };
  } catch (err) {
    return { 
      success: false, 
      message: err instanceof Error ? err.message : 'خطأ في قراءة ملف النسخة الاحتياطية' 
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
  saveLocalUserProfile(defaultProfile);
}
