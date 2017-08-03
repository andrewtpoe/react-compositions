// This must be the first import of the application.
import 'react-hot-loader/patch';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import registerMemoryDB from 'setup/registerMemoryDB';
import registerServiceWorker from 'setup/registerServiceWorker';
import Root from 'setup/Root';

registerMemoryDB();

const root = document.getElementById('root');

function renderRoot(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
}

renderRoot(Root);

if (module.hot) {
  module.hot.accept('setup/Root', () => {
    /* eslint-disable global-require */
    const NewRoot = require('setup/Root').default;
    /* eslint-enable */
    renderRoot(NewRoot);
  });
}

registerServiceWorker();
