import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { rotate: '0deg' },
  '50%': { scale: 0.5 },
  '100%': { rotate: '360deg' },
});

export const kanzo = style({
  width: '100px',
  height: '100px',
  overflow: 'hidden',
  transformOrigin: 'center',
  selectors: {
    '&.spin': {
      animation: `${spin} 2.5s linear infinite`,
    },
  },
});
