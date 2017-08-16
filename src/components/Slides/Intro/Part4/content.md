## Creating a styled component

Styled components has it's own API for defining components.

```js

import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #999999;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(50, 50, 50, 0.4);
`;

```

The CSS inside the template literal is extracted and turned into an CSS class, which is then applied to the `div` created when this component is rendered.

## Using a styled component

The styled component defined above generates a normal React component that can be imported/ used anywhere.

```js

import Card from 'blocks/Card';

function ProfileCard(props) {
  return (
    <Card>
      // ...rest of components...
    </Card>
  )
}

```
