'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useReducer } from 'react';

import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase/client';

type AuthProviderProps = {
  children: ReactNode;
};

const isSignUpPage = (): boolean => {
  return /^\/signup/.test(location.pathname);
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, loadComplete] = useReducer(() => false, true);
  const router = useRouter();

  useEffect(() => {
    console.log({ isLoading });
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log({ user });
      if (!user) {
        const isSignUp = isSignUpPage();
        console.log({ user, isSignUp });
        if (!isSignUp) {
          router.replace('/signup');
          loadComplete();

          return;
        }
        loadComplete();

        return;
      }

      loadComplete();
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return 'loading';
  }

  return children;
};
