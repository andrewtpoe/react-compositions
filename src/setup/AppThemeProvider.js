import PropTypes from 'prop-types';
import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from 'style/theme';

function AppThemeProvider({ appTheme, children }) {
  function injectGlobalStyles(theme) {
    return injectGlobal`${theme.globalStyles}`;
  }

  injectGlobalStyles(appTheme);

  console.log(appTheme);
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
