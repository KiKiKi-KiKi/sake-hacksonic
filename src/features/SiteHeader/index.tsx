import { FC } from 'react';

import { Box, Heading } from '@chakra-ui/react';

import { Logo } from '@/components/Logo';
import { SignOutButton } from '@/components/SignOutButton';
import { APP_NAME } from '@/config';

export const SiteHeader: FC = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      px='16px'
      py='2'
      borderBottomWidth='1px'
      borderColor='gray.300'
      boxShadow='0px 4px 4px 0px rgb(255 255 255 / 4%)'
      zIndex='1'
    >
      <Box display='flex' gap='1' alignItems='center'>
        <Logo fontSize='32px' />
        <Heading
          as='h1'
          size='sm'
          color=''
          fontStyle='italic'
          letterSpacing='-0.08em'
        >
          {APP_NAME}
        </Heading>
      </Box>
      <Box>
        <SignOutButton variant='outline' size='sm' />
      </Box>
    </Box>
  );
};
