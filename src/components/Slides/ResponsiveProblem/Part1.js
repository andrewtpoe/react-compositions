import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# The Responsive Problem
## React thinks in components, browsers think in pages.

- Most of the time this isn't a problem:
  - We define a "page" component that handles rendering the nav/ content/ form/ table/ etc... components we want on that page.
  - We use something like [\`react-router\`](https://reacttraining.com/react-router/) to match up urls to the correct React components.
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
