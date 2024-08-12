import Image from 'next/image';
import { FC } from 'react';

import { RandomSakeIcon } from '@/components/RandomSakeIcon';
import { DRINKS_DATA } from '@/config';

import { loader } from './loader.css';

type LoaderProps = {
  isBeerIcon?: boolean;
};

export const Loader: FC<LoaderProps> = ({ isBeerIcon = false }) => {
  return (
    <div className={loader}>
      {isBeerIcon ? (
        <Image
          src={DRINKS_DATA['beer500'].icon}
          width={128}
          height={128}
          alt='Loading...'
        />
      ) : (
        <RandomSakeIcon width={128} height={128} alt='Loading...' />
      )}
    </div>
  );
};
