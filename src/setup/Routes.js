import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/Home';

export default function routes() {
  return (
    <section>
      <Route exact path="/" component={Home} />
    </section>
  );
}
