import React from 'react';

import Bar, { BarImage } from 'components/Bar';
import PageContent from 'components/PageContent';

function LandingPage({ Logo, children }) {
  return (
    <section>
      <Bar>
        {Logo &&
          <BarImage>
            <Logo />
          </BarImage>}
      </Bar>
      <PageContent>
        {children}
      </PageContent>
    </section>
  );
}

export default LandingPage;
