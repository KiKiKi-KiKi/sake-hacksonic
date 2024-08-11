'use client';

import { useCallback, useState } from 'react';

import { FirebaseError } from 'firebase/app';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as authSignOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { useAtomValue, useSetAtom } from 'jotai';

import { authAtom, NOT_LOGIN, SIGN_OUT } from '@/atoms/auth.atom';
import { auth } from '@/firebase/client';

const provider = new GoogleAuthProvider();
// force to select google account
provider.setCustomParameters({
  prompt: 'select_account',
});

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const useAuth = () => {
  const user = useAtomValue(authAtom);

  return {
    user,
  };
};

type ErrorType = {
  errorCode?: string;
  message: string;
};

export const useAuthMutators = () => {
  const setAuthUser = useSetAtom(authAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType | null>(null);

  const resetUser = useCallback(
    (isSignOut: boolean = true) => {
      setAuthUser(isSignOut ? SIGN_OUT : NOT_LOGIN);
    },
    [setAuthUser],
  );

  const setUser = useCallback(
    async (user: FirebaseUser) => {
      setIsLoading(true);
      const { displayName, photoURL, uid } = user;

      setAuthUser({
        uid,
        name: displayName ?? 'User',
        photoURL: photoURL ?? undefined,
      });

      setIsLoading(false);
    },
    [setAuthUser],
  );

  const signIn = useCallback(async () => {
    setIsLoading(true);
    try {
      setError(null);
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log({ error });
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        setError({
          errorCode,
          message: error.message,
        });
      } else if (error instanceof Error) {
        setError({
          message: error.message,
        });
      } else {
        setError({
          message: 'SignIn Error (useAuth)',
        });
      }
      // reset auth
      setAuthUser(SIGN_OUT);
    }
    setIsLoading(false);
  }, [setAuthUser]);

  const signOut = useCallback(async () => {
    await authSignOut(auth);
  }, []);

  return {
    isLoading,
    error,
    resetUser,
    setUser,
    signIn,
    signOut,
  };
};
