import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# The End
(refresh the page to start over)
`;

function TheEnd() {
  return <ReactMarkdown source={content} />;
}

export default TheEnd;
