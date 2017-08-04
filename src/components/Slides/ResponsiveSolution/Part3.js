import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Reactive Container

- Two simple-to-use Higher Order Components.
- Makes the container's (visual component) size a prop accessible by any child component (React component).
- With styled components modifiers, we can easily change which modifiers are applied based on prop values.
  - This enables container based responsive design.
- Helpers for handling responsive modifiers are baked in to \`styled-components-modifiers\`.
`;

function Part3() {
  return <ReactMarkdown source={content} />;
}

export default Part3;
