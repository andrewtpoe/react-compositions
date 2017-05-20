import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import content from './content.md';
import messages from './messages';

import LandingPage from 'compositions/LandingPage';
import Logo from 'components/Logo';

function Home() {
  return (
    <LandingPage Logo={Logo}>
      <h1><FormattedMessage {...messages.title} /></h1>
      <ReactMarkdown escapeHtml source={content} />
    </LandingPage>
  );
}

export default Home;
