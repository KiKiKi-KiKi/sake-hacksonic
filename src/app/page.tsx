import Image from 'next/image';

import { Box, VStack } from '@chakra-ui/react';

import { PageContainer } from '@/components/layouts/PageContainer';
import { LinkButton } from '@/components/Link';

export default function Home() {
  return (
    <PageContainer isHome={true}>
      <Box height='250px'>WIP Status</Box>
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
    </PageContainer>
  );
}
