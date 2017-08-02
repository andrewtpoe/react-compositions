import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers';
import {
  buildThemePropTypes,
  validateTheme,
} from 'styled-components-theme-validator';

const COMPONENT_NAME = 'Button';

const MODIFIER_CONFIG = {
  disabled: ({ theme }) => ({
    styles: `
      &:hover {
        box-shadow: none !important;
        color: ${theme.colors.chrome100} !important;
      }
    `,
  }),
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

const THEME_PROPTYPES = buildThemePropTypes({
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
})

const Button = styled.button`
  ${validateTheme(COMPONENT_NAME, THEME_PROPTYPES)}
  border-radius: 2px;
  outline: none;
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

Button.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
};

Button.displayName = COMPONENT_NAME;

export default Button;
