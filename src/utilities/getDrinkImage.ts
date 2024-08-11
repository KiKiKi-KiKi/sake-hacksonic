import { DrinksType } from '@/@types/drinks';
import { DEFAULT_SAKE_IMAGE, DRINKS_DATA } from '@/config';

const DRINK = Object.values(DRINKS_DATA);

export const getDrinkImage = (key: DrinksType) => {
  const item = DRINK.find(({ id }) => id === key);

  if (!item) {
    // default Icon
    return DEFAULT_SAKE_IMAGE;
  }

  return item.icon;
};
