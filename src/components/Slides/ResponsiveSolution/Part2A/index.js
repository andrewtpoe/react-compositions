import React from 'react';
import ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';
import { withTheme } from 'styled-components';
import { Container, Row } from 'styled-components-reactive-grid';

import AsyncReactMarkdown from 'components/AsyncReactMarkdown';

import code from './code.md';
import DisplaySize from './DisplaySize';

const content = `
# Reactive Container Demo

- Drag the divider in the split pane below to change the size of each side.
- Both sides of the split pane render exactly the same React component.
`;

function Part2A({ theme }) {
  return (
    <Container>
      <Row>
        <ReactMarkdown source={content} />
      </Row>
      <Row
        style={{
          marginBottom: theme.dimensions.gapPx,
          minHeight: '112px',
        }}
      >
        <SplitPane
          split="vertical"
          minSize={75}
          maxSize={-75}
          defaultSize={250}
          style={{
            border: `1px solid ${theme.colors.text}`,
          }}
        >
          <DisplaySize />
          <DisplaySize />
        </SplitPane>
      </Row>
      <Row>
        <AsyncReactMarkdown source={code} />
      </Row>
    </Container>
  );
}

export default withTheme(Part2A);
