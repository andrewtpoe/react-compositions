import React from 'react';
import { withSize } from 'reactive-container';

import TextDiv from './TextDiv';

function Component({ size }) {
  return (
    <TextDiv>
      {size}
    </TextDiv>
  );
}

export default withSize(Component);
