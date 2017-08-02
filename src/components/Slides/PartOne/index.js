import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Building a complex React application with Styled Components

(use the <- or -> arrow keys to navigate, or click the buttons)
`;

function PartOne() {
  return <ReactMarkdown source={content} />;
}

export default PartOne;
