import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  buildThemePropTypes,
  validateTheme,
} from 'styled-components-theme-validator';

const COMPONENT_NAME = 'Bar';

const THEME_PROPTYPES = buildThemePropTypes({
  colors: PropTypes.shape({
    textLight: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
  }).isRequired,
});

const Bar = styled.div`
  ${validateTheme(COMPONENT_NAME, THEME_PROPTYPES)}
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  min-height: 100px;
  position: relative;
  width: 100%;
`;

Bar.displayName = COMPONENT_NAME;

export default Bar;
