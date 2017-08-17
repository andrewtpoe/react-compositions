import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Compositions

- A logically associated group of visual components that should always be displayed together.
  - A \`ProfileCard\` is an example of a composition.
    - Built with Blocks (\`Card\`), Elements (\`Card.Item\`), and other visual components (\`ProfileInformationTable\`).
- A composition can also display a group of other compositions.
  - A \`ProfileCardGrid\` renders a group of \`ProfileCard\`s.
`;

function Part5() {
  return <ReactMarkdown source={content} />;
}

export default Part5;
