import { FC } from 'react';

import { RandomSakeIcon } from '../RandomSakeIcon';

import { loader } from './loader.css';

export const Loader: FC = () => {
  return (
    <div className={loader}>
      <RandomSakeIcon width={128} height={128} alt='Loading...' />
    </div>
  );
};
