import React from 'react';
import { sizes } from 'reactive-container';
import {
  Column,
  ReactiveContainer,
  Row,
} from 'styled-components-reactive-grid';

import Bar from 'components/Bar';

import { pageBreakpoints } from './constants';

function LandingPage({ children }) {
  const { XS, SM, MD } = sizes;

  return (
    <section>
      <Bar />
      <ReactiveContainer breakpoints={pageBreakpoints}>
        <Row>
          <Column
            responsiveModifiers={{
              [XS]: ['col_10', 'col_offset_1'],
              [SM]: ['col_8', 'col_offset_2'],
              [MD]: ['col_6', 'col_offset_3'],
            }}
          >
            {children}
          </Column>
        </Row>
      </ReactiveContainer>
    </section>
  );
}

export default LandingPage;
