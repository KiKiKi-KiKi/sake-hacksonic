import { style } from '@vanilla-extract/css';

export const container = style({
  fontSize: '10px',
  fontWeight: '700',
  lineHeight: 1,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
});

export const timer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  gap: '0',
});

export const count = style({
  display: 'inline-block',
  fontSize: '200%',
  background: '#FFF',
  padding: '0.4em',
  minWidth: '1.4em',
});

export const label = style({
  marginLeft: '0.2em',
});
