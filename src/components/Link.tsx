import NextLink from 'next/link';
import { FC } from 'react';

import {
  Button,
  ButtonProps,
  Link as ChakraLink,
  LinkProps,
} from '@chakra-ui/react';

export const Link: FC<LinkProps> = ({ children, ...linkProps }) => {
  return (
    <ChakraLink as={NextLink} {...linkProps}>
      {children}
    </ChakraLink>
  );
};

type LinkButton = Pick<LinkProps, 'href'> & ButtonProps;

export const LinkButton: FC<LinkButton> = ({ ...props }) => {
  const { isDisabled } = props;

  if (isDisabled) {
    return <Button as='a' {...props} />;
  }

  return <Button as={NextLink} {...props} />;
};
