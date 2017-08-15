import PropTypes from 'prop-types';
import styled from 'styled-components';

import buildStyledComponent from 'utils/buildStyledComponent';

const styles = () => `
  border-radius: 2px;
  outline: none;
`;

const modifierConfig = {
  ghost: ({ theme }) => ({
    styles: `
      background-color: ${theme.colors.chrome000};
      border: 1px solid ${theme.colors.chrome100};
      color: ${theme.colors.chrome100};
      transition: box-shadow 0.3s ease,
                  color 0.3s ease;
      &:hover {
        box-shadow: 0 2px 2px 2px ${theme.colors.shadowLight};
        color: ${theme.colors.chrome200};
      }
    `,
  }),
  xl: ({ theme }) => ({
    styles: `
      padding: ${theme.dimensions.gapPx} ${theme.dimensions.baseSizePx};
    `
  })
};

const themePropTypes = {
  colors: PropTypes.shape({
    chrome000: PropTypes.string.isRequired,
    chrome100: PropTypes.string.isRequired,
    chrome200: PropTypes.string.isRequired,
    shadowLight: PropTypes.string.isRequired,
  }).isRequired,
  dimensions: PropTypes.shape({
    baseSizePx: PropTypes.string.isRequired,
    gapPx: PropTypes.string.isRequired
  }).isRequired,
};

export default buildStyledComponent(
  'Button',
  styled.button,
  styles,
  { modifierConfig, themePropTypes }
)
