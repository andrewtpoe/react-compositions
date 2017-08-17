import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Containers

- A "Smart Container" is a React component that connects to application state.
  - Connects to Redux.
  - Retrieves the data from the store.
  - Passes the data and action dispatch functions down.
  - Renders a composition, or wraps it if built as a Higher Order Container.
- \`Container\` can also refer to a Block that "contains" other visual components.
`;

function Part6() {
  return <ReactMarkdown source={content} />;
}

export default Part6;
