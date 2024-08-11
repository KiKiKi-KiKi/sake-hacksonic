import { FC, ReactNode } from 'react';

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
    <i className='icon' area-hidden={ariaHidden}>
      {children}
    </i>
  );
};
