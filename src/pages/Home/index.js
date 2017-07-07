import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';

import ContentColumn from 'components/ContentColumn';

import DisplaySize from 'compositions/DisplaySize';
import LandingPage from 'compositions/LandingPage';

import content from './content.md';
import messages from './messages';

function Home() {
  return (
    <LandingPage>
      <h1>
        <FormattedMessage {...messages.title} />
      </h1>
      <ContentColumn>
        <SplitPane
          split="vertical"
          minSize={75}
          maxSize={-75}
          defaultSize={250}
          style={{
            border: '1px solid grey',
            minHeight: '100px',
          }}
        >
          <DisplaySize />
          <DisplaySize />
        </SplitPane>
        <ReactMarkdown escapeHtml source={content} />{' '}
      </ContentColumn>
    </LandingPage>
  );
}

export default Home;
