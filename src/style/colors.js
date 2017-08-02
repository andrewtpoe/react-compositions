import { darken, lighten, rgba } from 'polished';

const primary = '#304ffe';
// const secondary = '#444444';
const text = '#444444';

export default {
  chrome000: lighten(1.0, text),
  chrome100: lighten(0.7, text),
  chrome200: lighten(0.6, text),
  // chrome300: lighten(0.5, text),
  // chrome400: lighten(0.4, text),
  // chrome500: lighten(0.3, text),
  // chrome600: lighten(0.2, text),
  // chrome700: lighten(0.1, text),
  // chrome800: text,
  // chrome900: darken(0.1, text),

  primary,
  primaryDark: darken(0.2, primary),
  primaryLight: lighten(0.2, primary),

  // secondary,
  // secondaryDark: darken(0.2, secondary),
  // secondaryLight: lighten(0.2, secondary),

  // shadow: rgba(text, 0.4),
  shadowLight: rgba(lighten(0.6, text), 0.4),

  text,
  // textLight: lighten(0.2, text),
};
