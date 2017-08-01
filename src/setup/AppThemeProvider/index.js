import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'style/theme';

import configureGlobalStyles from './configureGlobalStyles';

function AppThemeProvider({ appTheme, children }) {
  configureGlobalStyles(appTheme);

  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  );
}

AppThemeProvider.propTypes = {
  appTheme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

AppThemeProvider.defaultProps = {
  appTheme: theme,
};

export default AppThemeProvider;
