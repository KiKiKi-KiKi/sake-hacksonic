import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { rotate: '0deg' },
  '100%': { rotate: '360deg' },
});

export const loader = style({
  width: '5rem',
  height: '5rem',
  transformOrigin: 'center',
  animation: `${spin} 1s linear infinite`,
});
