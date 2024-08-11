import { DrinksType } from '@/@types/drinks';
import { DEFAULT_SAKE_IMAGE, DRINK_DATA_ARRAY } from '@/config';

export const getDrinkImage = (key: DrinksType) => {
  const item = DRINK_DATA_ARRAY.find(({ id }) => id === key);

  if (!item) {
    // default Icon
    return DEFAULT_SAKE_IMAGE;
  }

  return item.icon;
};
