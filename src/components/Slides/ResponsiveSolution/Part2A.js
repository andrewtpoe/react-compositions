import React from 'react';
import ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';
import { withTheme } from 'styled-components';
import { Container, Row } from 'styled-components-reactive-grid';

import DisplaySize from 'components/DisplaySize';

const content = `
# Reactive Container Demo

- Drag the divider in the split pane above to change the size of each side.
- Both sides render exactly the same React component.
`;

function Part2A({ theme }) {
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
          <DisplaySize />
          <DisplaySize />
        </SplitPane>
      </Row>
      <Row>
        <ReactMarkdown escapeHtml source={content} />
      </Row>
    </Container>
  );
}

export default withTheme(Part2A);
