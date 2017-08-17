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
  - Block and Element components typically map directly to HTML elements.
  - Blocks and Elements can both have Modifiers.
`;

function Part2() {
  return <ReactMarkdown source={content} />;
}

export default Part2;
