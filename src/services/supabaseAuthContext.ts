import { createContext, useContext } from 'react';
import type { AuthSession, AuthUser, JwtPayload } from '@supabase/supabase-js';
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

export interface SupabaseAuthContextValue {
  user: AuthUser | null;
  session: AuthSession | null;
  claims: JwtPayload | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isConfigured: boolean;
  hasForbiddenSecretKey: boolean;
  oauthCallbackUrl: string;
  authError: string | null;
  signInWithGoogle: (redirectToUrl?: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  clearAuthError: () => void;
}

const TRANSIENT_AUTH_PARAMS = [
  'code',
  'error',
  'error_code',
  'error_description',
  'token_hash',
  'type',
  'provider_token',
  'provider_refresh_token',
];

/**
 * Builds a clean, same-origin OAuth redirect URL that preserves the user's
 * requested deep-link route (`?subject=...&tab=...&blueprint=...&verify=...`)
 * while stripping transient OAuth callback parameters and hash tokens.
 */
export function buildOAuthRedirectUrl(currentHref: string): string {
  try {
    const parsed = new URL(currentHref);
    for (const key of TRANSIENT_AUTH_PARAMS) {
      parsed.searchParams.delete(key);
    }
    parsed.hash = '';
    return parsed.toString();
  } catch {
    return currentHref;
  }
}

/**
 * Extracts any OAuth callback error returned in URL query params or hash fragment.
 */
export function extractOAuthUrlError(currentHref: string): string | null {
  try {
    const parsed = new URL(currentHref);
    const queryDesc = parsed.searchParams.get('error_description') || parsed.searchParams.get('error');
    if (queryDesc) {
      return decodeURIComponent(queryDesc.replace(/\+/g, ' '));
    }

    if (parsed.hash && parsed.hash.length > 1) {
      const hashParams = new URLSearchParams(parsed.hash.slice(1));
      const hashDesc = hashParams.get('error_description') || hashParams.get('error');
      if (hashDesc) {
        return decodeURIComponent(hashDesc.replace(/\+/g, ' '));
      }
    }
  } catch {
    // Ignore invalid URLs
  }
  return null;
}

/**
 * Extracts a server-assigned role ONLY from verified `app_metadata` claims.
 *
 * SECURITY RULE: Never read `user_metadata` (`raw_user_meta_data`) for
 * authorization decisions because end users can mutate `user_metadata`.
 */
export function extractVerifiedAppRole(claims: JwtPayload | null): ProfileRole | null {
  if (!claims || typeof claims !== 'object') return null;
  const appMeta = (claims as Record<string, unknown>).app_metadata;
  if (!appMeta || typeof appMeta !== 'object') return null;

  const rawRole = (appMeta as Record<string, unknown>).role;
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

export const SupabaseAuthContext = createContext<SupabaseAuthContextValue>({
  user: null,
  session: null,
  claims: null,
  isAuthenticated: false,
  isLoading: false,
  isConfigured: false,
  hasForbiddenSecretKey: false,
  oauthCallbackUrl: 'https://<your-project-ref>.supabase.co/auth/v1/callback',
  authError: null,
  signInWithGoogle: async () => ({
    success: false,
    error: 'Supabase AuthProvider is not mounted.',
  }),
  signOut: async () => {},
  clearAuthError: () => {},
});

export function useSupabaseAuth(): SupabaseAuthContextValue {
  return useContext(SupabaseAuthContext);
}

