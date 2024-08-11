import { atom } from 'jotai';

type AuthUser = {
  uid: string;
  name: string;
  photoURL?: string;
};

export const NOT_LOGIN = undefined;
export const SIGN_OUT = null;

type AuthAtomType = AuthUser | typeof NOT_LOGIN | typeof SIGN_OUT;

export const authAtom = atom<AuthAtomType>(NOT_LOGIN);
