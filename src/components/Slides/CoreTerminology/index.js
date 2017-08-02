import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Core Terminology

- Blocks, Elements, & Modifiers (BEM)
- Components
- Compositions
- Containers

Chances are if you build with React you've heard most of these words before. Let's make sure we are on the same page with their definitions before we continue.
`;

function CoreTerminology() {
  return <ReactMarkdown source={content} />;
}

export default CoreTerminology;
