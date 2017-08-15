import { omit } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

import buildStyledComponent from 'utils/buildStyledComponent';

function IconWithoutStyleProps(props) {
  return <FontAwesome {...omit(props, ['theme', 'modifiers'])} />;
}

const styles = () => '';

const modifierConfig = {
  xlFontSize: ({ theme }) => ({
    styles: `
      font-size: ${theme.dimensions.xlFontPx};
    `
  }),
};

const themePropTypes = {
  dimensions: PropTypes.shape({
    xlFontPx: PropTypes.string.isRequired,
  }).isRequired,
};

export default buildStyledComponent(
  'Icon',
  styled(IconWithoutStyleProps),
  styles,
  { modifierConfig, themePropTypes }
)
