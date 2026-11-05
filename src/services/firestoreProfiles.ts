import type { AcademicTrack, ProfileRole, SecondLanguage } from '../types/userProfile';

/**
 * Cloud Firestore collection holding one document per authenticated user,
 * keyed by the Firebase Auth UID: `profiles/{uid}`.
 *
 * Access is restricted to the owning user by `firestore.rules`
 * (`request.auth.uid == uid`).
 */
export const PROFILES_COLLECTION = 'profiles';

/**
 * Timestamp-like value accepted when reading `last_sync_at` back from Firestore.
 * Older documents may store an ISO string; server-written values arrive as a
 * Firestore `Timestamp` (which exposes `toMillis()`).
 */
export type FirestoreTimestampLike = string | { toMillis: () => number } | null | undefined;

/** Shape of a `profiles/{uid}` document as stored in Cloud Firestore. */
export type ProfileDocument = {
  id: string;
  email: string | null;
  display_name: string;
  photo_url: string | null;
  avatar_icon: string;
  profile_role: ProfileRole;
  teacher_subject: string | null;
  teacher_school: string | null;
  teacher_bio: string | null;
  academic_track: AcademicTrack;
  dream_college: string;
  target_percentage: number;
  second_language: SecondLanguage;
  governorate: string;
  daily_practice_goal: number;
  study_minutes_goal: number;
  sound_effects_enabled: boolean;
  last_sync_at: FirestoreTimestampLike;
  created_at?: unknown;
  updated_at?: unknown;
};

/** Payload written by the client with `setDoc(..., { merge: true })`. */
export type ProfileWrite = Omit<ProfileDocument, 'last_sync_at' | 'created_at' | 'updated_at'> & {
  last_sync_at: string;
};

/**
 * Firebase Auth UIDs are opaque strings (1–128 chars). They are NOT UUIDs, so
 * we only guard against empty values and characters that would break a
 * Firestore document path.
 */
export function isValidFirebaseUid(uid: string | undefined | null): uid is string {
  return typeof uid === 'string' && uid.length > 0 && uid.length <= 128 && !uid.includes('/');
}

/** Converts a Firestore timestamp / ISO string into epoch milliseconds. */
export function timestampLikeToMillis(value: FirestoreTimestampLike): number | undefined {
  if (!value) return undefined;
  if (typeof value === 'string') {
    const parsed = Date.parse(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  if (typeof value === 'object' && typeof value.toMillis === 'function') {
    return value.toMillis();
  }
  return undefined;
}
