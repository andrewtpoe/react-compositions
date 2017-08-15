import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Core Terminology

- Blocks, Elements, & Modifiers (BEM)
- Components
- Compositions
- Containers
`;

function CoreTerminology() {
  return <ReactMarkdown source={content} />;
}

export default CoreTerminology;
