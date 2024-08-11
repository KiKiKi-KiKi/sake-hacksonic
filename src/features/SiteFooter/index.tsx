'use client';

import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { LinkButton } from '@/components/Link';

export const SiteFooter: FC = () => {
  return (
    <Box
      px='16px'
      py='2'
      width='100vw'
      backgroundColor='yellow.400'
      position='fixed'
      bottom='0'
      zIndex='100'
    >
      <LinkButton
        href='/'
        size='xs'
        variant='ghost'
        backgroundColor='white'
        color='pink.300'
        gap='1'
      >
        HOME
      </LinkButton>
    </Box>
  );
};
