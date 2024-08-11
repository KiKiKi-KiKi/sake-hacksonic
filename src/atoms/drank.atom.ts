import { atom } from 'jotai';

import { IDrinkData } from '@/@types/drinks';

export type DrinkData = {
  timestamp: number;
} & Pick<IDrinkData, 'id' | 'name' | 'amount' | 'alcohol'>;

type DrankAtomType = {
  startAt?: number;
  startDate?: string;
  drinks: DrinkData[];
};

export const InitialDrankData: DrankAtomType = {
  startAt: undefined,
  startDate: undefined,
  drinks: [],
};

export const drankAtom = atom<DrankAtomType>({
  ...InitialDrankData,
});

export const alcoholAmount = atom((get) => {
  const { startAt, drinks } = get(drankAtom);

  const { amount: total, alcohol: alcoholTotal } = drinks.reduce(
    (total, { amount, alcohol }) => {
      return {
        amount: (total.amount += amount),
        alcohol: (total.alcohol += alcohol),
      };
    },
    {
      amount: 0,
      alcohol: 0,
    },
  );
  // 10 ... 5h
  const expiredTime = (alcoholTotal / 5) * 60 * 60 * 1000;

  const expiredAt = startAt ? startAt + expiredTime : undefined;

  return {
    total,
    alcoholTotal,
    expiredAt,
  };
});
