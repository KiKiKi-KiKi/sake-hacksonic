export const DRINKS = [
  'beer350',
  'beer500',
  'ale350',
  'sake180',
  'wine100',
  'whisky30',
  'shochu100',
  'highball500',
  'sour500',
  'cocktail200',
  'strongzero500',
] as const;

export type DrinksType = (typeof DRINKS)[number];

export interface IDrinkData {
  id: DrinksType;
  icon: string; // URL
  name: string;
  amount: number;
  notice?: string;
  // 純アルコール単位
  // cf.
  // - https://www.ask.or.jp/article/8502
  // - https://www.ask.or.jp/article/8502
  alcohol: number;
}
