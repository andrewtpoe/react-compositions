import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Core Terminology

- Blocks, Elements, & Modifiers (BEM)

- Components

- Compositions

- Containers

Chances are if you know React you've heard most of these words before.
`;

function CoreTerminology() {
  return <ReactMarkdown source={content} />;
}

export default CoreTerminology;
