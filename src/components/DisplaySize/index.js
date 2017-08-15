import React from 'react';
import { ReactiveContainer } from 'styled-components-reactive-grid';

import { BREAKPOINTS } from './constants';
import Component from './Component';

function DisplaySize() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS}>
      <Component />
    </ReactiveContainer>
  );
}

export default DisplaySize;
