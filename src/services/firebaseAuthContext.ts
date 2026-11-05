import { createContext, useContext } from 'react';
import type { ParsedToken, User } from 'firebase/auth';
import type { ProfileRole } from '../types/userProfile';

export type ProtectedRouteDecision =
  | 'loading'
  | 'allow'
  | 'require_auth'
  | 'forbidden_role';

export interface EvaluateProtectedRouteParams {
  isLoading: boolean;
  isConfigured: boolean;
  isAuthenticated: boolean;
  hasVerifiedClaims: boolean;
  requiredRole?: ProfileRole;
  verifiedRole?: ProfileRole | null;
}

/**
 * Verified Firebase ID token claims (`User.getIdTokenResult().claims`).
 * Includes standard claims (`sub`, `email`, `firebase.sign_in_provider`, ...)
 * plus any custom claims set server-side via the Firebase Admin SDK.
 */
export type FirebaseIdTokenClaims = ParsedToken;

export interface FirebaseAuthContextValue {
  user: User | null;
  claims: FirebaseIdTokenClaims | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isConfigured: boolean;
  /** Firebase Auth domain (`<project>.firebaseapp.com`) used for the Google OAuth handler. */
  authDomain: string;
  authError: string | null;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  clearAuthError: () => void;
}

/**
 * Firebase Auth error codes that simply mean the user dismissed the sign-in
 * popup. These should not be surfaced as errors in the UI.
 */
export const BENIGN_FIREBASE_AUTH_ERROR_CODES = new Set([
  'auth/popup-closed-by-user',
  'auth/cancelled-popup-request',
  'auth/user-cancelled',
]);

/**
 * Error codes that indicate the popup flow cannot run in this browser and we
 * should fall back to a full-page `signInWithRedirect`.
 */
export const REDIRECT_FALLBACK_FIREBASE_AUTH_ERROR_CODES = new Set([
  'auth/popup-blocked',
  'auth/operation-not-supported-in-environment',
]);

export function getFirebaseAuthErrorCode(err: unknown): string | null {
  if (err && typeof err === 'object' && 'code' in err) {
    const code = (err as { code?: unknown }).code;
    return typeof code === 'string' ? code : null;
  }
  return null;
}

/**
 * Maps Firebase Auth errors to a bilingual, actionable message. The original
 * error code is kept as a prefix so the UI can show targeted setup hints.
 */
export function describeFirebaseAuthError(err: unknown): string {
  const code = getFirebaseAuthErrorCode(err);
  const fallback = err instanceof Error ? err.message : String(err);

  switch (code) {
    case 'auth/unauthorized-domain':
      return `${code}: هذا النطاق غير مصرح به في Firebase Authentication / This domain is not authorized for OAuth in Firebase Authentication.`;
    case 'auth/operation-not-allowed':
      return `${code}: موفر Google غير مفعّل في Firebase / The Google sign-in provider is not enabled in Firebase Authentication.`;
    case 'auth/network-request-failed':
      return `${code}: تعذر الاتصال بالشبكة / Network error while contacting Firebase. Check your connection and try again.`;
    case 'auth/too-many-requests':
      return `${code}: محاولات كثيرة، حاول لاحقاً / Too many attempts. Please wait a moment and try again.`;
    case 'auth/user-disabled':
      return `${code}: تم تعطيل هذا الحساب / This account has been disabled.`;
    default:
      return code ? `${code}: ${fallback}` : fallback;
  }
}

/**
 * Extracts a server-assigned role ONLY from verified Firebase custom claims.
 *
 * SECURITY RULE: Custom claims can only be set with the Firebase Admin SDK
 * (`admin.auth().setCustomUserClaims(uid, { role: 'teacher' })`), so end users
 * cannot escalate their own role. Never authorize based on the user-editable
 * Firestore `profiles/{uid}.profile_role` field.
 */
export function extractVerifiedAppRole(claims: FirebaseIdTokenClaims | null): ProfileRole | null {
  if (!claims || typeof claims !== 'object') return null;
  const rawRole = (claims as Record<string, unknown>).role;
  if (rawRole === 'teacher' || rawRole === 'student') {
    return rawRole;
  }
  return null;
}

/**
 * Pure route-protection evaluator used by `<ProtectedRoute>` to gate routes
 * across the entire application.
 */
export function evaluateProtectedRouteAccess(
  params: EvaluateProtectedRouteParams
): ProtectedRouteDecision {
  if (params.isLoading) {
    return 'loading';
  }

  if (!params.isConfigured || !params.isAuthenticated || !params.hasVerifiedClaims) {
    return 'require_auth';
  }

  if (params.requiredRole && params.verifiedRole !== params.requiredRole) {
    return 'forbidden_role';
  }

  return 'allow';
}

export const FirebaseAuthContext = createContext<FirebaseAuthContextValue>({
  user: null,
  claims: null,
  isAuthenticated: false,
  isLoading: false,
  isConfigured: false,
  authDomain: '',
  authError: null,
  signInWithGoogle: async () => ({
    success: false,
    error: 'FirebaseAuthProvider is not mounted.',
  }),
  signOut: async () => {},
  clearAuthError: () => {},
});

export function useFirebaseAuth(): FirebaseAuthContextValue {
  return useContext(FirebaseAuthContext);
}
