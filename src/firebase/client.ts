'use client';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey ?? '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain ?? '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId ?? '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket ?? '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId ?? '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId ?? '',
} as const;

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

console.log({ firebaseConfig, auth, firebaseApp });

export { firebaseApp, auth };
