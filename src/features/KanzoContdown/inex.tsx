'use client';
import { FC } from 'react';

import { Box, Code, Text } from '@chakra-ui/react';

import { useDrank } from '@/hooks/useDrank';

import { useCounter } from './useCounter';

import { container, count, label, timer } from './counter.css';

export const KanzoContdown: FC = () => {
  const { expiredAt } = useDrank();
  const { days, hours, minutes, seconds, dangerLevel } = useCounter(expiredAt);
  const units = ['日', '時', '分', '秒'] as const;
  const counter: [string, (typeof units)[number]][] = [
    days,
    hours,
    minutes,
    seconds,
  ].map((v, i) => [v.toString().padStart(2, '0'), units[i]]);

  return (
    <Box as='ul' className={container}>
      {counter.map(([v, unit], i) => (
        <Box key={i} className={timer}>
          <Code color={getDangerColor(dangerLevel)} className={count}>
            {v}
          </Code>
          <Text as='span' className={label}>
            {unit}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

const getDangerColor = (lv: number): string => {
  switch (lv) {
    case 0: {
      return 'green.400';
    }
    case 1: {
      return 'yellow.500';
    }
    case 2: {
      return 'orange.500';
    }
    case 3: {
      return 'pink.500';
    }
    case 4: {
      return 'red.500';
    }
    case 5: {
      return 'purple.600';
    }
    default: {
      return 'purple.800';
    }
  }
};
