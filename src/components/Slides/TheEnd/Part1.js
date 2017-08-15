import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Where can we go from here?
`;

function TheEnd() {
  return <ReactMarkdown source={content} />;
}

export default TheEnd;
