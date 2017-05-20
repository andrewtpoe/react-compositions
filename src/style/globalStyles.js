import colors from './colors';
import dimensions from './dimensions';

export default `
  html,
  body {
    color: ${colors.darkText};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: ${dimensions.baseSize}px;
  }
`;
