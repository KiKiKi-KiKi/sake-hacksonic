import { FC } from 'react';

import { IconContainer } from './IconContainer';
import SVGIcon from './svg/kanzo_good.svg';

type IconProps = {
  className?: string;
};

export const IconKanzoGood: FC<IconProps> = ({ className }) => {
  return (
    <IconContainer className={className}>
      <SVGIcon className='svgIcon' />
    </IconContainer>
  );
};
