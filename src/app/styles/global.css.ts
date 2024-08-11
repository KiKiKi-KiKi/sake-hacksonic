import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
});

globalStyle('.svg', {
  fill: 'currentColor',
});

globalStyle('.svgIcon', {
  fontSize: '1em',
  fill: 'currentColor',
  height: '1em',
  verticalAlign: 'text-bottom',
  userSelect: 'none',
});

globalStyle('.icon', {
  direction: 'ltr',
  WebkitFontSmoothing: 'antialiased',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: 'normal',
  lineHeight: 1,
  textRendering: 'optimizeLegibility',
  textTransform: 'none',
  whiteSpace: 'nowrap',
});
