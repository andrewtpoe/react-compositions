import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# What does an element resize listener mean?

- We can use this listener on an HTML Element rendered by a React component.
- We can use React's lifecycle methods to manage the element resize detector.
- We can define specific size breakpoints for the visual component we want to be responsive.
- We can use React's \`context\` to pass the size down to all of a React component's children.
- Introducing [\`reactive-container\`](https://github.decisiv.net/Development/reactive-container).
`;

function Part2() {
  return <ReactMarkdown source={content} />;
}

export default Part2;
