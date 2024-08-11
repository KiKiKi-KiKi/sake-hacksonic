import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import { DRINK_KEYS } from '@/config';
import { getDrinkImage } from '@/utilities/getDrinkImage';

type RandomSakeIconProps = { alt?: string } & Omit<ImageProps, 'src' | 'alt'>;

export const RandomSakeIcon: FC<RandomSakeIconProps> = ({
  width,
  height,
  alt,
  ...props
}) => {
  const randKey = DRINK_KEYS[Math.floor(Math.random() * DRINK_KEYS.length)];

  return (
    <Image
      src={getDrinkImage(randKey)}
      width={width ?? 32}
      height={height ?? 32}
      alt={alt ?? 'Enjoy Beer!'}
      {...props}
    />
  );
};
