import React from 'react';
import ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';
import { withTheme } from 'styled-components';
import { Container, Row } from 'styled-components-reactive-grid';

import ColorBySize from 'components/ColorBySize';

const content = `
# Reactive Container + Responsive Modifiers Demo

- Drag the divider in the split pane above to change the size of each side.
- Both sides render exactly the same React component.
`;

function Part3A({ theme }) {
  return (
    <Container>
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
          <ColorBySize />
          <ColorBySize />
        </SplitPane>
      </Row>
      <Row>
        <ReactMarkdown escapeHtml source={content} />
      </Row>
    </Container>
  );
}

export default withTheme(Part3A);
