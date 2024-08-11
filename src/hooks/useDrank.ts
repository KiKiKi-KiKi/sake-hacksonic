import { useCallback } from 'react';

import { useAtomValue, useSetAtom } from 'jotai';

import {
  alcoholAmount,
  drankAtom,
  DrinkData,
  InitialDrankData,
} from '@/atoms/drank.atom';

export const useDrank = () => {
  const { startAt, startDate, drinks } = useAtomValue(drankAtom);
  const { total, expiredAt } = useAtomValue(alcoholAmount);
  const isDrink = !!startAt;

  return {
    isDrink,
    startAt,
    startDate,
    drinks,
    totalAlcohol: total,
    expiredAt,
  };
};

const getDateString = (timeStamp: number) => {
  const d = new Date(timeStamp);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const H = d.getHours();
  const M = d.getMinutes();
  const S = d.getSeconds();

  const dateStr = [year, month, date]
    .map((item) => item.toString().padStart(2, '0'))
    .join('-');
  const timeStr = [H, M, S]
    .map((item) => item.toString().padStart(2, '0'))
    .join(':');

  return `${dateStr}T${timeStr}`;
};

export const useDrankMutators = () => {
  const setter = useSetAtom(drankAtom);

  const addDrink = useCallback(
    (drinkData: Omit<DrinkData, 'timestamp'>) => {
      setter(({ startAt, startDate, drinks }) => {
        const timestamp = Date.now();
        const newStartAt = startAt ?? timestamp;
        const newStartDate = startDate ?? getDateString(newStartAt);

        return {
          startAt: newStartAt,
          startDate: newStartDate,
          drinks: [
            ...drinks,
            {
              ...drinkData,
              timestamp,
            },
          ],
        };
      });
    },
    [setter],
  );

  const reset = () => {
    setter({ ...InitialDrankData });
  };

  return {
    addDrink,
    reset,
  };
};
