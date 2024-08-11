'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useReducer } from 'react';

import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase/client';
import { useAuthMutators } from '@/hooks/useAuth';

type AuthProviderProps = {
  children: ReactNode;
};

const isSignUpPage = (): boolean => {
  return /^\/signup/.test(location.pathname);
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { setUser, resetUser, signOut } = useAuthMutators();
  const [isLoading, loadComplete] = useReducer(() => false, true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        const isSignUp = isSignUpPage();
        resetUser();

        if (!isSignUp) {
          await router.replace('/signup');
          loadComplete();

          return;
        }
        loadComplete();

        return;
      }

      // set user
      try {
        await setUser(user);
      } catch (error) {
        signOut();
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
