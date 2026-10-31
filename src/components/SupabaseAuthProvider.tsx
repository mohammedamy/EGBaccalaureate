import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { AuthSession, AuthUser, JwtPayload } from '@supabase/supabase-js';
import {
  supabase,
  supabaseAuthConfig,
} from '../services/supabaseClient';
import {
  SupabaseAuthContext,
  buildOAuthRedirectUrl,
  extractOAuthUrlError,
} from '../services/supabaseAuthContext';
import {
  signInWithGoogle as triggerGoogleOAuth,
  signOutGoogleUser,
} from '../services/userProfileService';

interface Props {
  children: React.ReactNode;
}

export const SupabaseAuthProvider: React.FC<Props> = ({ children }) => {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [claims, setClaims] = useState<JwtPayload | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(
    () => supabaseAuthConfig.isConfigured && Boolean(supabase)
  );
  const [authError, setAuthError] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return extractOAuthUrlError(window.location.href);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialErr = extractOAuthUrlError(window.location.href);
      if (initialErr) {
        const cleaned = buildOAuthRedirectUrl(window.location.href);
        window.history.replaceState(null, '', cleaned);
      }
    }

    if (!supabaseAuthConfig.isConfigured || !supabase) {
      return;
    }

    let isMounted = true;
    const client = supabase;

    const verifyAndHydrate = async () => {
      try {
        const [{ data: claimsData, error: claimsErr }, { data: sessionData }] =
          await Promise.all([client.auth.getClaims(), client.auth.getSession()]);

        if (!isMounted) return;

        if (claimsErr || !claimsData?.claims || !sessionData.session) {
          setClaims(null);
          setSession(null);
          setUser(null);
        } else {
          setClaims(claimsData.claims);
          setSession(sessionData.session);
          setUser(sessionData.session.user);

          if (
            typeof window !== 'undefined' &&
            (window.location.hash.includes('access_token=') ||
              window.location.search.includes('code='))
          ) {
            const cleaned = buildOAuthRedirectUrl(window.location.href);
            window.history.replaceState(null, '', cleaned);
          }
        }
      } catch (err) {
        if (!isMounted) return;
        setAuthError(err instanceof Error ? err.message : String(err));
        setClaims(null);
        setSession(null);
        setUser(null);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    verifyAndHydrate();

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((event, nextSession) => {
      if (!isMounted) return;

      if (!nextSession || event === 'SIGNED_OUT') {
        setSession(null);
        setUser(null);
        setClaims(null);
        setIsLoading(false);
        return;
      }

      setSession(nextSession);
      setUser(nextSession.user);

      // Defer `getClaims()` outside synchronous `onAuthStateChange` callback
      // to avoid re-entering Supabase Auth's internal navigator lock.
      const accessToken = nextSession.access_token;
      setTimeout(() => {
        client.auth
          .getClaims(accessToken)
          .then(({ data, error }) => {
            if (!isMounted) return;
            if (error || !data?.claims) {
              setClaims(null);
              setSession(null);
              setUser(null);
            } else {
              setClaims(data.claims);
              if (
                typeof window !== 'undefined' &&
                (window.location.hash.includes('access_token=') ||
                  window.location.search.includes('code='))
              ) {
                const cleaned = buildOAuthRedirectUrl(window.location.href);
                window.history.replaceState(null, '', cleaned);
              }
            }
            setIsLoading(false);
          })
          .catch(() => {
            if (!isMounted) return;
            setClaims(null);
            setIsLoading(false);
          });
      }, 0);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = useCallback(async (redirectToUrl?: string) => {
    setAuthError(null);
    const res = await triggerGoogleOAuth(redirectToUrl);
    if (!res.success && res.error) {
      setAuthError(res.error);
    }
    return {
      success: res.success,
      error: res.error,
    };
  }, []);

  const signOut = useCallback(async () => {
    await signOutGoogleUser();
    setSession(null);
    setUser(null);
    setClaims(null);
  }, []);

  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  const isAuthenticated = Boolean(
    session?.user && claims?.sub && claims.sub === session.user.id
  );

  const contextValue = useMemo(
    () => ({
      user,
      session,
      claims,
      isAuthenticated,
      isLoading,
      isConfigured: supabaseAuthConfig.isConfigured,
      hasForbiddenSecretKey: supabaseAuthConfig.hasForbiddenSecretKey,
      oauthCallbackUrl: supabaseAuthConfig.oauthCallbackUrl,
      authError,
      signInWithGoogle,
      signOut,
      clearAuthError,
    }),
    [
      user,
      session,
      claims,
      isAuthenticated,
      isLoading,
      authError,
      signInWithGoogle,
      signOut,
      clearAuthError,
    ]
  );

  return (
    <SupabaseAuthContext.Provider value={contextValue}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};
