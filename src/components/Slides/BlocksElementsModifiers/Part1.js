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
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
