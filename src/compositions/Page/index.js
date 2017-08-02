import React from 'react';
import { sizes } from 'reactive-container';
import {
  Column,
  ReactiveContainer,
  Row,
} from 'styled-components-reactive-grid';

import { pageBreakpoints } from './constants';

function Page({ children }) {
  const { XS, SM, MD } = sizes;

  return (
    <section>
      <ReactiveContainer breakpoints={pageBreakpoints}>
        <Row>
          <Column
            responsiveModifiers={{
              [XS]: ['col_1'],
              [SM]: ['col_2'],
              [MD]: ['col_3'],
            }}
          >

          </Column>
          <Column
            responsiveModifiers={{
              [XS]: ['col_10'],
              [SM]: ['col_8'],
              [MD]: ['col_6'],
            }}
          >
            {children}
          </Column>
          <Column
            responsiveModifiers={{
              [XS]: ['col_1'],
              [SM]: ['col_2'],
              [MD]: ['col_3'],
            }}
          >

          </Column>
        </Row>
      </ReactiveContainer>
    </section>
  );
}

export default Page;
