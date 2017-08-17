import React from 'react';

import AsyncReactMarkdown from 'components/AsyncReactMarkdown';

import content from './content.md';

function Part3() {
  return <AsyncReactMarkdown source={content} />;
}

export default Part3;
