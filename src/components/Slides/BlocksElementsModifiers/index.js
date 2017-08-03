import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Blocks, Elements, & Modifiers

- [BEM](http://getbem.com) is a set of conventions for how to design CSS frameworks.

  - One example of a CSS framework built with BEM is Blaze CSS.

  - Look at [the Blaze CSS Card Component](http://blazecss.com/components/cards/#colors).

    - Observe the \`card\` Block

    - Which has a \`card__item\` Element

    - Which has a \`card__item--brand\` Modifier.

  - Blocks and Elements can both have Modifiers.



- We can adapt BEM conventions to work within the context of React and Styled Components.

  - Styled Components does not have any concept of Blocks, Elements, or Modifiers.

  - We can use folder structure to add the concept of Blocks and Elements.

    - Blocks are the default export of a folder: \`Card\`

    - Elements are properties of a Block component: \`Card.Item\`

    - **VERY IMPORTANT:** Blocks and Elements are *ALWAYS* stateless, functional, and display only.

  - An implementation of the Modifiers concept can be added with the [Styled Components Modifiers package](https://github.decisiv.net/Development/styled-components-modifiers).
`;

function BlocksElementsModifiers() {
  return <ReactMarkdown source={content} />;
}

export default BlocksElementsModifiers;
