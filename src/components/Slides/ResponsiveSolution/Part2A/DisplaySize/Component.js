import React from 'react';
import { withSize } from 'reactive-container';
import { Container } from 'styled-components-reactive-grid';

import Text from 'blocks/Text';

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
