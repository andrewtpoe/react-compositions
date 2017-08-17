import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# We can adapt BEM conventions to work within the context of React and Styled Components.
  - Styled Components does not have any concept of Blocks, Elements, or Modifiers.
  - We can use folder structure to add the concept of Blocks and Elements.
    - Blocks are the default export of a folder: \`Card\`
    - Elements are properties of a Block component: \`Card.Item\`
    - **VERY IMPORTANT:** Blocks and Elements are *ALWAYS* stateless, functional, and display only.
  - Introducing [Styled Components Modifiers](https://github.decisiv.net/Development/styled-components-modifiers).
    - Adds an implementation of BEM flavored modifiers to Styled Components.
`;

function Part3() {
  return <ReactMarkdown source={content} />;
}

export default Part3;
