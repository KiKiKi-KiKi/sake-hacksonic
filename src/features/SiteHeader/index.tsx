'use client';

import NextLink from 'next/link';
import { FC } from 'react';

import { Box, Heading } from '@chakra-ui/react';

import { Logo } from '@/components/Logo';
import { SignOutButton } from '@/components/SignOutButton';
import { APP_NAME } from '@/config';

type SiteHeaderProps = {
  title?: string;
};

export const SiteHeader: FC<SiteHeaderProps> = ({ title }) => {
  return (
    <Box
      position='fixed'
      top='0'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      px='16px'
      py='2'
      backgroundColor='white'
      borderBottomWidth='1px'
      borderColor='gray.300'
      boxShadow='0px 4px 4px 0px rgb(255 255 255 / 4%)'
      width='100vw'
      zIndex='100'
    >
      <Box display='flex' gap='1' alignItems='center'>
        <NextLink href='/'>
          <Logo fontSize='32px' />
        </NextLink>
        {!title && (
          <Heading as='h1' size='sm' fontStyle='italic' letterSpacing='-0.08em'>
            {APP_NAME}
          </Heading>
        )}
      </Box>
      {title && (
        <Heading as='h1' size='md' fontStyle='italic'>
          {title}
        </Heading>
      )}
      <Box>
        <SignOutButton variant='outline' size='sm' />
      </Box>
    </Box>
  );
};
