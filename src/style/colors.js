import { darken, lighten } from 'polished';

const primary = '#304ffe';
const secondary = '#444444';
const text = '#444444';

export default {
  chrome000: '#ffffff',
  chrome100: '#f5f5f6',
  chrome200: '#e1e2e1',

  primary,
  primaryDark: darken(0.2, primary),
  primaryLight: lighten(0.2, primary),

  secondary,
  secondaryDark: darken(0.2, secondary),
  secondaryLight: lighten(0.2, secondary),

  text,
};
