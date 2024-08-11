import { Box, Container } from '@chakra-ui/react';

import { IconKanzoBad } from '@/components/icons/IconKanzoBad';
import { IconKanzoGood } from '@/components/icons/IconKanzoGood';
import { SiteHeader } from '@/features/SiteHeader';

export default function Home() {
  return (
    <Box as='main'>
      <SiteHeader />
      <Container>
        <IconKanzoBad />
        <IconKanzoGood />
      </Container>
    </Box>
  );
}
