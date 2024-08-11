import Image from 'next/image';
import { FC } from 'react';

import { loader } from './loader.css';

export const Loader: FC = () => {
  return (
    <div className={loader}>
      <Image
        src='/icons/beer500.png'
        width='128'
        height='128'
        alt='loading...'
      />
    </div>
  );
};
