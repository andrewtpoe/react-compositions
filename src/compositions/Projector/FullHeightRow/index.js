import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from 'styled-components-reactive-grid';

import buildStyledComponent from 'utils/buildStyledComponent';

const styles = props => `
  min-height: calc(100vh - ${props.theme.dimensions.gapPx});
`;

const themePropTypes = {
  dimensions: PropTypes.shape({
    gapPx: PropTypes.string.isRequired,
  }).isRequired,
};

export default buildStyledComponent(
  'FullHeightRow',
  styled(Row),
  styles,
  { themePropTypes }
);
