import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Home() {
  return (
    <section>
      <h1>
        <FormattedMessage {...messages.title} />
      </h1>
    </section>
  );
}

export default Home;
