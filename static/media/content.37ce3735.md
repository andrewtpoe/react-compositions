# Building BEM based styled components

```js

// src/blocks/Card/index.js

import styled from 'styled-components';

import Item from './Item';

const Card = styled.div`
  border: 1px solid #999999;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(50, 50, 50, 0.4);
`;

Card.Item = Item;

export default Card;

```

```js

// src/blocks/Card/Item.js

import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG = {
  brand: ({ theme }) => ({
    styles: `
      color: ${theme.colors.primary};
    `,
  }),
};

const Item = styled.div`
  padding: 8px;
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

export default Item;

```

A simple use of these styled components:

```js

import React from 'react';

import Card from 'blocks/Card';

function YourBEMCard() {
  return (
    <Card>
      <Card.Item modifiers={['brand']}>
        <h2>A simple Card, built with BEM</h2>
      </Card.Item>
    </Card>
  )
}

export default YourBEMCard;

```

Will render this:
