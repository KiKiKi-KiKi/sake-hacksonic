import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { DrinkCounter } from './DrinkCounter';

export const Nomuzo: FC = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      height='100%'
      pb='45px'
    >
      <DrinkCounter />
    </Box>
  );
};
