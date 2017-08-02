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
  ghost: ({ theme }) => ({
    styles: `
      background-color: ${theme.colors.chrome100};
      &:hover {
        background-color: ${theme.colors.chrome000};
        color: ${theme.colors.textLight};
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
    primary: PropTypes.string.isRequired
  }).isRequired,
})

const Button = styled.button`
  ${validateTheme(COMPONENT_NAME, THEME_PROPTYPES)}
  border: 1px solid ${props => props.theme.colors.chrome200};
  border-radius: 2px;
  outline: none;
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

Button.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
};

Button.displayName = COMPONENT_NAME;

export default Button;
