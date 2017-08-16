import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Core Terminology

- Blocks, Elements, & Modifiers (BEM)
- Components
- Compositions
- Containers
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
