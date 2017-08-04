import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Responsiveness does not have such a simple solution.

- CSS
  - Has media queries, but they are based on window size.
  - Container queries [have been discussed](https://css-tricks.com/container-query-discussion/), but are not currently implemented.
  - Current best solution is CSS Grid, which [is not fully supported at this time](http://caniuse.com/#feat=css-grid) and doesn't provide actual size queries.
- JavaScript
  - Has resize event listeners for the window.
  - Does not have resize event listeners for HTML elements.
`;

function Part2() {
  return <ReactMarkdown source={content} />;
}

export default Part2;
