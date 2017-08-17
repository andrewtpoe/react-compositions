import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Who Am I?

- Andrew T. Poe ([GitHub](https://github.com/andrewtpoe))
- Front End Developer at Decisiv ([yes, we're hiring](https://www.decisiv.com/careers))
- I <3 React
`;

function Part2() {
  return <ReactMarkdown source={content} />;
}

export default Part2;
