import React from 'react';
import Page from 'compositions/Page';
import Projector from 'compositions/Projector';

function Home() {
  return (
    <Page>
      <h1>React Compositions</h1>
      
      <Projector
        slides={[]}
      />
    </Page>
  );
}

export default Home;
