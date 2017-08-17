import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# React thinks in components, browsers think in pages.

- Most of the time this isn't a huge deal:
  - We define a "page" component that handles rendering the nav/ content/ form/ table/ etc... components we want on that page.
  - We use something like [\`react-router\`](https://reacttraining.com/react-router/) to match urls to the correct React components.
- This primarily becomes an issue with responsiveness.
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
