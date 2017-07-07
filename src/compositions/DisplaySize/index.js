import React from 'react';

import { BREAKPOINTS } from './constants';
import Component from './Component';
import ReactiveContainer from './ReactiveContainer';

function DisplaySize() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS}>
      <Component />
    </ReactiveContainer>
  );
}

export default DisplaySize;
