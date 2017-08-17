import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Discussion

- Thoughts on BEM, components, compositions, and containers?
- Thoughts on our new libraries?
- What else can we build?

(When you're ready, refresh the page to start over)
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
