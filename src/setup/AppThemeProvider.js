import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from 'style/theme';

function injectGlobalStyles(theme) {
  return injectGlobal`${theme.globalStyles}`;
}

function AppThemeProvider({ appTheme, children }) {
  injectGlobalStyles(appTheme);
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
