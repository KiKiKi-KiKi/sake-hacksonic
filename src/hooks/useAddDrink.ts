import { useAtomValue, useSetAtom } from 'jotai';

import { addDrinkAtom } from '@/atoms/drank.atom';

export const useAddDrink = () => {
  return useAtomValue(addDrinkAtom);
};

export const useAddDrinkMutators = () => {
  const setter = useSetAtom(addDrinkAtom);

  const reset = () => setter(undefined);

  return {
    resetAddDrink: reset,
  };
};
