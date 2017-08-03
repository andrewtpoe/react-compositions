import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Containers

- A "Smart Container" is a React component that accesses application state (redux)

  - Gathers data to be rendered by a composition.

  - May hold and manipulate UI state.

  - Renders a composition.

- \`Container\` can also refer to a Block that "contains" other visual components.

`;

function Containers() {
  return <ReactMarkdown source={content} />;
}

export default Containers;
