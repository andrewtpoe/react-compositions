```js

function DisplaySize() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS}>
      <Component />
    </ReactiveContainer>
  );
}

export default DisplaySize;

```
```js

import { withSize } from 'reactive-container';

function Component({ size }) {
  return (
    <Container>
      <Text modifiers={['bold', 'light', 'xlFont']}>
        {size}
      </Text>
    </Container>
  );
}

export default withSize(Component);

```
