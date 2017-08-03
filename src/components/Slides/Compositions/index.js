import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Compositions

- A logically associated group of visual components that should always be displayed together.

  - A \`ProfileCard\` is an example of a composition. 

    - Built with Blocks, Elements, and other visual components (like \`InformationTable\`).

- A composition can also display a group of other compositions.

  - A \`ProfileCardGrid\` renders a group of \`ProfileCard\`s.

`;

function Compositions() {
  return <ReactMarkdown source={content} />;
}

export default Compositions;
