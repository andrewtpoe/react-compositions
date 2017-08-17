import React from 'react';
import ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';
import { withTheme } from 'styled-components';
import { Container, Row } from 'styled-components-reactive-grid';

import AsyncReactMarkdown from 'components/AsyncReactMarkdown';
import ReactiveGrid from 'components/ReactiveGrid';

import code from './code.md';

const content = `
# Reactive Grid Demo

- Drag the divider in the split pane below to change the size of each side.
- Both sides of the split pane render exactly the same React component.
`;

function Part4A({ theme }) {
  return (
    <Container>
      <Row>
        <ReactMarkdown source={content} />
      </Row>
      <Row
        style={{
          marginBottom: theme.dimensions.gapPx,
          minHeight: '248px',
        }}
      >
        <SplitPane
          split="vertical"
          minSize={125}
          maxSize={-125}
          defaultSize={250}
          style={{ border: `1px solid ${theme.colors.text}` }}
        >
          <ReactiveGrid />
          <ReactiveGrid />
        </SplitPane>
      </Row>
      <Row>
        <AsyncReactMarkdown source={code} />
      </Row>
    </Container>
  );
}

export default withTheme(Part4A);
