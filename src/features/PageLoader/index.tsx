import { Loader } from '@/components/Loader';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export const PageLoader: FC = () => {
  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      bottom={0}
      width='100vw'
      height='100vh'
      overflow='hidden'
      backgroundColor='yellow.300'
      borderTop='3rem solid #FFF'
      zIndex={1000}
    >
      <Box
        display='flex'
        width='100%'
        height='90%'
        alignItems='center'
        justifyContent='center'
      >
        <Loader />
      </Box>
    </Box>
  );
};
