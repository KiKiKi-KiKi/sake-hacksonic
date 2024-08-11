'use client';

import Image from 'next/image';
import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { useDrank } from '@/hooks/useDrank';
import { getDrinkImage } from '@/utilities/getDrinkImage';

export const DrinkScore: FC = () => {
  const { drinks } = useDrank();

  return (
    <Box display='flex' flexWrap='wrap' pt='6'>
      {drinks.map(({ id, timestamp, name }) => (
        <Box key={`${id}_${timestamp}`} as='span' style={{ rotate: '15deg' }}>
          <Image src={getDrinkImage(id)} width='15' height='15' alt={name} />
        </Box>
      ))}
    </Box>
  );
};
