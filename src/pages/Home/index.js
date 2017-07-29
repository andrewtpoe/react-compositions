import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';
import { withTheme } from 'styled-components';
import { Container, Row } from 'styled-components-reactive-grid';

import DisplaySize from 'compositions/DisplaySize';
import LandingPage from 'compositions/LandingPage';

import content from './content.md';
import GridDemoA from './GridDemoA';
import messages from './messages';

function Home({ theme }) {
  return (
    <LandingPage>
      <Container>
        <Row>
          <h1>
            <FormattedMessage {...messages.title} />
          </h1>
        </Row>
      </Container>
      <Container>
        <Row
          style={{
            marginBottom: theme.dimensions.gap,
            minHeight: '100px',
          }}
        >
          <SplitPane
            split="vertical"
            minSize={75}
            maxSize={-75}
            defaultSize={250}
            style={{
              border: '1px solid grey',
            }}
          >
            <DisplaySize />
            <DisplaySize />
          </SplitPane>
        </Row>
        <Row>
          <ReactMarkdown escapeHtml source={content} />{' '}
        </Row>
      </Container>
      <Container>
        <Row
          style={{
            marginBottom: theme.dimensions.gap,
            minHeight: '250px',
          }}
        >
          <SplitPane
            split="vertical"
            minSize={75}
            maxSize={-75}
            defaultSize={250}
            style={{
              border: '1px solid grey',
            }}
          >
            <GridDemoA />
            <GridDemoA />
          </SplitPane>
        </Row>
        <Row>
          <ReactMarkdown escapeHtml source={content} />{' '}
        </Row>
      </Container>
      <GridDemoA />
    </LandingPage>
  );
}

export default withTheme(Home);
