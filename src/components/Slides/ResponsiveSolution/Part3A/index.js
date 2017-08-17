import React from 'react';
import ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';
import { withTheme } from 'styled-components';
import { Container, Row } from 'styled-components-reactive-grid';

import AsyncReactMarkdown from 'components/AsyncReactMarkdown';
import ColorBySize from 'components/ColorBySize';

import code from './code.md';

const content = `
# Reactive Container + Responsive Modifiers Demo

- Drag the divider in the split pane below to change the size of each side.
- Both sides of the split pane render exactly the same React component.
`;

function Part3A({ theme }) {
  return (
    <Container>
      <Row>
        <ReactMarkdown source={content} />
      </Row>
      <Row
        style={{
          marginBottom: theme.dimensions.gapPx,
          minHeight: '104px',
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
          <ColorBySize />
          <ColorBySize />
        </SplitPane>
      </Row>
      <Row>
        <AsyncReactMarkdown source={code} />
      </Row>
    </Container>
  );
}

export default withTheme(Part3A);
