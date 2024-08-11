import { Box, Container } from '@chakra-ui/react';

import { IconKanzoBad } from '@/components/icons/IconKanzoBad';
import { IconKanzoGood } from '@/components/icons/IconKanzoGood';
import { SignOutButton } from '@/components/SignOutButton';

export default function Home() {
  return (
    <Box as='main'>
      <Container>
        <SignOutButton variant='ghost' />
        <IconKanzoBad />
        <IconKanzoGood />
      </Container>
    </Box>
  );
}
