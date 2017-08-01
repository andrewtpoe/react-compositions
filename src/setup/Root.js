import React from 'react';

import Home from 'pages/Home';

import AppThemeProvider from './AppThemeProvider';

function Root() {
  return (
    <AppThemeProvider>
      <Home />
    </AppThemeProvider>
  );
}

export default Root;
