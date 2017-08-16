import React from 'react';
import { sizes } from 'reactive-container';
import { ReactiveContainer } from 'styled-components-reactive-grid';

import Bar from 'blocks/Bar';

const { SM, MD, LG, XL } = sizes;

const BREAKPOINTS = [
  { name: SM, minWidth: 150 },
  { name: MD, minWidth: 225 },
  { name: LG, minWidth: 300 },
  { name: XL, minWidth: 375 },
];

function DisplaySize() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS}>
      <Bar
        modifiers={['fullHeight', 'tall']}
        responsiveModifiers={{
          [SM]: ['level_1'],
          [MD]: ['level_2'],
          [XL]: ['level_1']
        }}
      />
    </ReactiveContainer>
  );
}

export default DisplaySize;
