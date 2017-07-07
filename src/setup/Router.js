import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './Routes';

function Router() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default Router;
