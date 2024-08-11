'use client';
import { FC } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

import { Logo } from '@/components/Logo';
import { useDrank } from '@/hooks/useDrank';
import { classnames } from '@/utilities/classnames';

import { Countdown } from './Countdown';
import { getDangerLevelByExpiredAt } from './useCounter';

import { kanzo } from './kanzo.css';

export const KanzoCountdown: FC<BoxProps> = ({ ...boxProps }) => {
  const { expiredAt } = useDrank();
  const dangerLevel = getDangerLevelByExpiredAt(expiredAt ?? 0);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='flex-start'
      alignItems='center'
      {...boxProps}
    >
      <Box className={classnames(kanzo, dangerLevel > 3 && 'spin')}>
        <Logo isGood={dangerLevel < 3} fontSize='100px' />
      </Box>
      <Countdown />
    </Box>
  );
};
