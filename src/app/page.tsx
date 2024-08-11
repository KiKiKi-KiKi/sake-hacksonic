import { Box, Container } from '@chakra-ui/react';

import { SignOutButton } from '@/components/SignOutButton';

export default function Home() {
  return (
    <Box as='main'>
      <Container>
        <SignOutButton variant='ghost' />
      </Container>
    </Box>
  );
}
