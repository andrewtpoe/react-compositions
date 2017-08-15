import PropTypes from 'prop-types';
import styled from 'styled-components';

import buildStyledComponent from 'utils/buildStyledComponent';

const styles = props => `
  background-color: ${props.theme.colors.primary};
  min-height: 2rem;
  padding: 0.25rem;
`;

const modifierConfig = {
  level_1: ({ theme }) => ({
    styles: `
      background-color: ${theme.colors.primaryLight};
    `,
  }),
  level_2: ({ theme }) => ({
    styles: `
      background-color: ${theme.colors.primaryDark};
    `,
  }),
  fullHeight: () => ({
    styles: `
      height: 100%;
    `,
  }),
  tall: () => ({
    styles: `
      height: 6rem;
    `,
  }),
  xTall: () => ({
    styles: `
      height: 8rem;
    `,
  }),
};

const themePropTypes = {
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    primaryDark: PropTypes.string.isRequired,
    primaryLight: PropTypes.string.isRequired,
  }).isRequired,
};

export default buildStyledComponent(
  'Bar',
  styled.div,
  styles,
  { modifierConfig, themePropTypes, responsive: true }
)
