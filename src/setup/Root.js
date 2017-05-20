import React from 'react';

import AppThemeProvider from './AppThemeProvider';
import I18n from './I18n';
import Router from './Router';

function Root() {
  return (
    <AppThemeProvider>
      <I18n>
        <Router />
      </I18n>
    </AppThemeProvider>
  );
}

export default Root;
