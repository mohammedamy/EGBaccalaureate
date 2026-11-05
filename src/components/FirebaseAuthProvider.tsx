import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { onIdTokenChanged, type User } from 'firebase/auth';
import { auth, firebaseConfig, isFirebaseAuthConfigured } from '../services/firebase';
import {
  FirebaseAuthContext,
  type FirebaseIdTokenClaims,
} from '../services/firebaseAuthContext';
import {
  completeRedirectSignIn,
  signInWithGoogle as triggerGoogleSignIn,
  signOutGoogleUser,
} from '../services/userProfileService';

/** localStorage key left behind by the previous Supabase Auth integration. */
const LEGACY_SUPABASE_SESSION_KEY = 'egbac_supabase_auth_v1';

interface Props {
  children: React.ReactNode;
}

export const FirebaseAuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [claims, setClaims] = useState<FirebaseIdTokenClaims | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(() => isFirebaseAuthConfigured);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    // One-time cleanup of the stale Supabase session token from older builds
    try {
      localStorage.removeItem(LEGACY_SUPABASE_SESSION_KEY);
    } catch {
      // localStorage unavailable
    }

    if (!isFirebaseAuthConfigured) {
      return;
    }

    let isMounted = true;

    // Surface errors from a `signInWithRedirect` fallback flow, if one just completed
    completeRedirectSignIn().then((redirectErr) => {
      if (isMounted && redirectErr) {
        setAuthError(redirectErr);
      }
    });

    // `onIdTokenChanged` fires on sign-in, sign-out AND token refresh, so
    // updated custom claims (e.g. a newly granted `role`) are picked up.
    const unsubscribe = onIdTokenChanged(auth, async (nextUser) => {
      if (!isMounted) return;

      if (!nextUser) {
        setUser(null);
        setClaims(null);
        setIsLoading(false);
        return;
      }

      try {
        const tokenResult = await nextUser.getIdTokenResult();
        if (!isMounted) return;
        setUser(nextUser);
        setClaims(tokenResult.claims);
      } catch (err) {
        if (!isMounted) return;
        setAuthError(err instanceof Error ? err.message : String(err));
        setUser(null);
        setClaims(null);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setAuthError(null);
    const res = await triggerGoogleSignIn();
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
    setUser(null);
    setClaims(null);
  }, []);

  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  const isAuthenticated = Boolean(user && claims?.sub && claims.sub === user.uid);

  const contextValue = useMemo(
    () => ({
      user,
      claims,
      isAuthenticated,
      isLoading,
      isConfigured: isFirebaseAuthConfigured,
      authDomain: firebaseConfig.authDomain,
      authError,
      signInWithGoogle,
      signOut,
      clearAuthError,
    }),
    [user, claims, isAuthenticated, isLoading, authError, signInWithGoogle, signOut, clearAuthError]
  );

  return (
    <FirebaseAuthContext.Provider value={contextValue}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
