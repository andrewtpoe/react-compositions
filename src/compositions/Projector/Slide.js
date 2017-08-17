import styled from 'styled-components';

import buildStyledComponent from 'utils/buildStyledComponent';

const styles = props => `
  width: 100%;
`;

const modifierConfig = {
  left: () => ({
    styles: `
      display: none;
    `,
  }),
  right: () => ({
    styles: `
      display: none;
    `,
  }),
  center: () => ({}),
};

export default buildStyledComponent(
  'Slide',
  styled.div,
  styles,
  { modifierConfig },
)
