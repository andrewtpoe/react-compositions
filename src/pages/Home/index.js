import React from 'react';

import slides from 'components/Slides';

import Projector from 'compositions/Projector';

function Home() {
  return (
    <Projector
      slides={slides}
    />
  );
}

export default Home;
