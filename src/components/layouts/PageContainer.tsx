import { FC, ReactNode } from 'react';

import { Box, Container } from '@chakra-ui/react';

import { SiteFooter } from '@/features/SiteFooter';
import { SiteHeader } from '@/features/SiteHeader';

type PageContainerProps = {
  title?: string;
  children: ReactNode;
  isHome?: boolean;
};

export const PageContainer: FC<PageContainerProps> = ({
  title,
  children,
  isHome = false,
}) => {
  return (
    <Box as='main'>
      <SiteHeader title={title} />
      <Container pt='60px' height='100vh'>
        {children}
      </Container>
      {!isHome && <SiteFooter />}
    </Box>
  );
};
