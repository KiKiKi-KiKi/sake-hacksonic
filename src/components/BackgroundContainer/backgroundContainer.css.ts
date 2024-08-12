import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  // header 60px, footer 45px
  padding: '50px 0 40px',
  pointerEvents: 'none',
  zIndex: -1,
  selectors: {
    '&.withoutFooter': {
      paddingBottom: 0,
    },
  },
});
