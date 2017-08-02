import { lighten } from 'polished';
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

const COMPONENT_NAME = 'Bar';

const MODIFIER_CONFIG = {
  level_1: ({ theme }) => ({
    styles: `
      background-color: ${lighten(0.2, theme.colors.primary)};
    `,
  }),
  level_2: ({ theme }) => ({
    styles: `
      background-color: ${lighten(0.1, theme.colors.primary)};
    `,
  }),
  fullHeight: () => ({
    styles: `
      height: 100%;
    `,
  }),
  tall: () => ({
    styles: `
      height: 8rem;
    `,
  }),
};

const THEME_PROPTYPES = buildThemePropTypes({
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired
  }).isRequired,
})

const Bar = styled.div`
  ${validateTheme(COMPONENT_NAME, THEME_PROPTYPES)}
  padding: 0.25rem;
  min-height: 2rem;
  background-color: ${props => props.theme.colors.primary};
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

Bar.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
};

Bar.displayName = COMPONENT_NAME;

export default Bar;
