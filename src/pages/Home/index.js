import React from 'react';
import { ReactiveContainer } from 'styled-components-reactive-grid';

import slides from 'components/Slides';

import Projector from 'compositions/Projector';

import { breakpoints } from './constants';

function Home() {
  return (
    <ReactiveContainer breakpoints={breakpoints} >
      <Projector slides={slides} />
    </ReactiveContainer>
  );
}

export default Home;
