import { DrinksType, IDrinkData } from './@types/drinks';
import { objectKeys } from './utilities/objectKeys';

export const APP_NAME = '君とカンゾウ' as const;

export const DEFAULT_SAKE_IMAGE = '/icons/_default_icon.png' as const;

export const DRINKS_DATA: {
  [key in DrinksType]: IDrinkData;
} = {
  beer350: {
    id: 'beer350',
    name: 'ビール',
    amount: 350,
    alcohol: (350 / 500) * 10,
    icon: '/icons/beer350.png',
  },
  beer500: {
    id: 'beer500',
    name: 'ビール',
    amount: 500,
    alcohol: 10,
    icon: '/icons/beer500.png',
  },
  ale350: {
    id: 'ale350',
    name: 'エール',
    amount: 350,
    alcohol: (350 / 500) * 10,
    icon: '/icons/ale350.png',
  },
  sake180: {
    id: 'sake180',
    name: '日本酒',
    amount: 180,
    alcohol: 10,
    notice: '1合',
    icon: '/icons/sake180.png',
  },
  wine100: {
    id: 'wine100',
    name: 'ワイン',
    amount: 100,
    alcohol: 0.5 * 10,
    notice: 'グラス1杯',
    icon: '/icons/wine100.png',
  },
  whisky30: {
    id: 'whisky30',
    name: 'ウィスキー',
    amount: 30,
    alcohol: 0.5 * 10,
    notice: 'シングル1杯',
    icon: '/icons/whisky30.png',
  },
  shochu100: {
    id: 'shochu100',
    name: '焼酎',
    amount: 100,
    alcohol: 10,
    notice: '',
    icon: '/icons/shochu100.png',
  },
  highball500: {
    id: 'highball500',
    name: 'ハイボール',
    amount: 500,
    alcohol: 1.5 * 10, // アルコール7% の時 (350/500)
    notice: '中ジョッキ',
    icon: '/icons/highball500.png',
  },
  sour500: {
    id: 'sour500',
    name: 'サワー',
    amount: 500,
    alcohol: 1.5 * 10, // アルコール7% の時 (350/500)
    notice: '中ジョッキ',
    icon: '/icons/sour500.png',
  },
  cocktail200: {
    id: 'cocktail200',
    name: 'カクテル',
    amount: 200,
    alcohol: 10, // 暫定
    notice: '1杯',
    icon: '/icons/cocktail200.png',
  },
  strongzero500: {
    id: 'strongzero500',
    name: 'ストゼロ',
    amount: 500,
    alcohol: 50, // 暫定
    notice: 'ロング缶',
    icon: '/icons/strongzero500.png',
  },
} as const;

export const DRINK_KEYS = objectKeys(DRINKS_DATA);

export const DRINK_DATA_ARRAY = Object.values(DRINKS_DATA);
