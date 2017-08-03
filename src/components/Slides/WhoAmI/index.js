import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Who Am I?

- Andrew T. Poe ([GitHub](https://github.com/andrewtpoe))

- Front End Developer at Decisiv ([yes, we're hiring](https://www.decisiv.com/careers))

- I <3 React

`;

function WhoAmI() {
  return <ReactMarkdown escapeHtml source={content} />;
}

export default WhoAmI;
