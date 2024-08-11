'use client';

import { FC } from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

import { useAuthMutators } from '@/hooks/useAuth';

type SignOutButtonProps = ButtonProps;

export const SignOutButton: FC<SignOutButtonProps> = ({ ...buttonProps }) => {
  const { signOut } = useAuthMutators();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Button {...buttonProps} type='button' onClick={handleSignOut}>
      Sign out
    </Button>
  );
};
