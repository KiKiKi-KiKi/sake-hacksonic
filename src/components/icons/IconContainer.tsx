import { FC, ReactNode } from 'react';

import { classnames } from '@/utilities/classnames';

type IconContainerProps = {
  children: ReactNode;
  className?: string;
  ariaHidden?: boolean;
};

export const IconContainer: FC<IconContainerProps> = ({
  children,
  className,
  ariaHidden = false,
}) => {
  return (
    <i className={classnames('icon', className)} area-hidden={ariaHidden}>
      {children}
    </i>
  );
};
