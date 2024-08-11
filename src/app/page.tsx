import Image from 'next/image';

import { Box, VStack } from '@chakra-ui/react';

import { PageContainer } from '@/components/layouts/PageContainer';
import { LinkButton } from '@/components/Link';
import { KanzoCountdown } from '@/features/KanzoCountdown/inex';
import { DrinksCount } from '@/features/pages/NomuzoPage/DrinksCount';

export default function Home() {
  return (
    <PageContainer isHome={true}>
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
        <DrinksCount />
      </Box>
    </PageContainer>
  );
}
