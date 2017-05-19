import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// import appTheme from 'identity/theme';

function AppThemeProvider({ appTheme, children }) {
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
  appTheme: {},
};

export default AppThemeProvider;
