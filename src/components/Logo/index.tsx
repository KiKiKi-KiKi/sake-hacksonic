import { FC } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

import { IconKanzoBad } from '../icons/IconKanzoBad';
import { IconKanzoGood } from '../icons/IconKanzoGood';

type LogoProps = {
  isGood?: boolean;
} & BoxProps;

export const Logo: FC<LogoProps> = ({ isGood = true, ...boxProps }) => {
  return (
    <Box
      color={isGood ? 'pink.200' : 'purple.400'}
      fontSize='60px'
      {...boxProps}
    >
      {isGood ? <IconKanzoGood /> : <IconKanzoBad />}
    </Box>
  );
};
