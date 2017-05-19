import React from 'react';

import AppThemeProvider from './AppThemeProvider';
import I18n from './I18n';
import Router from './Router';

function Root() {
  return (
    <AppThemeProvider>
      <I18n>
        <section id="root-component">
          <Router />
        </section>
      </I18n>
    </AppThemeProvider>
  );
}

export default Root;
