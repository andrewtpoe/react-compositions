import React from 'react';
import { sizes } from 'reactive-container';
import {
  Column,
  ReactiveContainer,
  Row,
} from 'styled-components-reactive-grid';

import Bar from 'blocks/Bar';

const BREAKPOINTS = [
  { name: sizes.SM, minWidth: 250 },
  { name: sizes.MD, minWidth: 350 },
  { name: sizes.LG, minWidth: 450 },
];

function ReactiveGrid() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS}>
      <Row>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_12'],
            [sizes.SM]: ['col_3'],
            [sizes.MD]: ['col_2'],
            [sizes.LG]: ['col_1'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_6'],
            [sizes.SM]: ['col_6'],
            [sizes.MD]: ['col_8'],
            [sizes.LG]: ['col_10'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_6'],
            [sizes.SM]: ['col_3'],
            [sizes.MD]: ['col_2'],
            [sizes.LG]: ['col_1'],
          }}
        >
          <Bar />
        </Column>
      </Row>
      <Row>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_12'],
            [sizes.SM]: ['col_3'],
            [sizes.MD]: ['col_2'],
            [sizes.LG]: ['col_1'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_12'],
            [sizes.SM]: ['col_9'],
            [sizes.MD]: ['col_10'],
            [sizes.LG]: ['col_11'],
          }}
        >
          <Bar />
        </Column>
      </Row>
      <Row>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_10'],
            [sizes.SM]: ['col_6'],
            [sizes.MD]: ['col_8'],
            [sizes.LG]: ['col_10'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_2'],
            [sizes.SM]: ['col_6'],
            [sizes.MD]: ['col_4'],
            [sizes.LG]: ['col_2'],
          }}
        >
          <Bar />
        </Column>
      </Row>
    </ReactiveContainer>
  );
}

export default ReactiveGrid;
