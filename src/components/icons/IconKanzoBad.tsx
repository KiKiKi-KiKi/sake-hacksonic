import { FC } from 'react';

import { IconContainer } from './IconContainer';
import SVGIcon from './svg/kanzo_bad.svg';

type IconProps = {
  className?: string;
};

export const IconKanzoBad: FC<IconProps> = ({ className }) => {
  return (
    <IconContainer className={className}>
      <SVGIcon className='svgIcon' />
    </IconContainer>
  );
};
