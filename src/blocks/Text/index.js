import PropTypes from 'prop-types';
import styled from 'styled-components';

import buildStyledComponent from 'utils/buildStyledComponent';

const styles = () => '';

const modifierConfig = {
  bold: () => ({
    styles: `
      font-weight: 600;
    `,
  }),
  light: ({ theme }) => ({
    styles: `
      color: ${theme.colors.textLight};
    `,
  }),
  xlFont: ({ theme }) => ({
    styles: `
      font-size: ${theme.dimensions.xlFontPx};
    `,
  }),
};

const themePropTypes = {
  colors: PropTypes.shape({
    textLight: PropTypes.string.isRequired,
  }).isRequired,
  dimensions: PropTypes.shape({
    xlFontPx: PropTypes.string.isRequired,
  }).isRequired,
};

export default buildStyledComponent(
  'Text',
  styled.p,
  styles,
  { modifierConfig, themePropTypes }
);
