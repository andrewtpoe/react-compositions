import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Components

- In the context of a React app, the word Component has two definitions.
- React components are the basic building blocks of the front end framework.
  - All Elements, Blocks, visual components, compositions, and even containers are React components.
  - All React components do not necessarily translate directly to HTML elements.
- Visual components are built from Blocks and Elements, but are more specific to the app and typically render data.
  - A \`Table\` is a Block. It defines what styles are applied to a table you want to display.
  - An \`InformationTable\` is a visual component. It is a Block (\`Table\`), may have other Elements (\`Table.Tr\`, \`Table.Th\`, \`Table.Td\`), and renders data.
`;

function Components() {
  return <ReactMarkdown source={content} />;
}

export default Components;
