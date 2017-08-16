import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Where can we go from here?
(refresh the page to start over)
`;

function TheEnd() {
  return <ReactMarkdown source={content} />;
}

export default TheEnd;
