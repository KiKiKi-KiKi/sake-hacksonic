import { FC } from 'react';

import { Box, VStack } from '@chakra-ui/react';

import { BackgroundContainer } from '@/components/BackgroundContainer';
import { LinkButton } from '@/components/Link';
import { RandomSakeIcon } from '@/components/RandomSakeIcon';
import { DrinkScore } from '@/features/DrinkScore';
import { DrunkerMeter } from '@/features/DrunkerMeter';
import { KanzoCountdown } from '@/features/KanzoCountdown/inex';

export const HomePageContent: FC = () => {
  return (
    <Box width='100%' height='100%'>
      <KanzoCountdown />
      <Box py='6'>
        <DrinkScore />
      </Box>
      <VStack gap='4'>
        <LinkButton
          href='/nomuzo'
          colorScheme='yellow'
          size='lg'
          gap='1'
          width='100%'
        >
          <Box width='32px'>
            <RandomSakeIcon
              width={128}
              height={128}
              alt=''
              aria-hidden='true'
            />
          </Box>
          飲むぞ！
        </LinkButton>
      </VStack>
      <BackgroundContainer isFooter={false}>
        <DrunkerMeter />
      </BackgroundContainer>
    </Box>
  );
};
