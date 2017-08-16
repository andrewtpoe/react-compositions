import React from 'react';

import Card from 'blocks/Card';

import AsyncReactMarkdown from 'components/AsyncReactMarkdown';

import content from './content.md';

function Part3A() {
  return (
    <div>
      <AsyncReactMarkdown source={content} />
      <Card>
        <Card.Item modifiers={['brand']}>
          <h2>A simple Card, built with BEM</h2>
        </Card.Item>
      </Card>
    </div>
  )
}

export default Part3A;
