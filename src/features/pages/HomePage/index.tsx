import Image from 'next/image';
import { FC } from 'react';

import { Box, VStack } from '@chakra-ui/react';

import { LinkButton } from '@/components/Link';
import { DrinkScore } from '@/features/DrinkScore';
import { KanzoCountdown } from '@/features/KanzoCountdown/inex';

export const HomePageContent: FC = () => {
  return (
    <>
      <KanzoCountdown py='6' />
      <VStack gap='4'>
        <LinkButton
          href='/nomuzo'
          colorScheme='yellow'
          size='lg'
          gap='1'
          width='100%'
        >
          <Box width='32px'>
            <Image src='/icons/beer500.png' width={128} height={128} alt='' />
          </Box>
          飲むぞ！
        </LinkButton>
      </VStack>
      <Box color='gray.400' mt='6'>
        WIP: 飲んで分解されてないアルコールの画像を背景に表示する
        <DrinkScore />
      </Box>
    </>
  );
};