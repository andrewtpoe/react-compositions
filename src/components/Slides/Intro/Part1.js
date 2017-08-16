import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Building a complex React application with Styled Components
(use the <- or -> keys to navigate, or click the buttons)
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
