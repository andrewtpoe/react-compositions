import React from 'react';
import { sizes } from 'reactive-container';
import {
  Column,
  ReactiveContainer,
  Row,
} from 'styled-components-reactive-grid';

import Box from 'components/Box';

const BREAKPOINTS = [
  { name: sizes.SM, minWidth: 250 },
  { name: sizes.MD, minWidth: 350 },
  { name: sizes.LG, minWidth: 450 },
];

function GridDemoA() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS} modifiers={['fluid']}>
      <Row>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_12'],
            [sizes.SM]: ['col_3'],
            [sizes.MD]: ['col_2'],
            [sizes.LG]: ['col_1'],
          }}
        >
          <Box />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_6'],
            [sizes.SM]: ['col_6'],
            [sizes.MD]: ['col_8'],
            [sizes.LG]: ['col_10'],
          }}
        >
          <Box />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_6'],
            [sizes.SM]: ['col_3'],
            [sizes.MD]: ['col_2'],
            [sizes.LG]: ['col_1'],
          }}
        >
          <Box />
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
          <Box />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_12'],
            [sizes.SM]: ['col_9'],
            [sizes.MD]: ['col_10'],
            [sizes.LG]: ['col_11'],
          }}
        >
          <Box />
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
          <Box />
        </Column>
        <Column
          responsiveModifiers={{
            [sizes.XS]: ['col_2'],
            [sizes.SM]: ['col_6'],
            [sizes.MD]: ['col_4'],
            [sizes.LG]: ['col_2'],
          }}
        >
          <Box />
        </Column>
      </Row>
    </ReactiveContainer>
  );
}

export default GridDemoA;
