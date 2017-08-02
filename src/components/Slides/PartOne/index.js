import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Lets talk about building a complex React application with Styled Components
`;

function PartOne() {
  return <ReactMarkdown source={content} />;
}

export default PartOne;
