import { FC, ReactNode } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

import { classnames } from '@/utilities/classnames';

import { container } from './backgroundContainer.css';

type BackgroundContainerProps = {
  children: ReactNode;
  isFooter?: boolean;
} & BoxProps;

export const BackgroundContainer: FC<BackgroundContainerProps> = ({
  children,
  isFooter = true,
  ...boxProps
}) => {
  return (
    <Box
      className={classnames(container, !isFooter && 'withoutFooter')}
      {...boxProps}
    >
      {children}
    </Box>
  );
};
