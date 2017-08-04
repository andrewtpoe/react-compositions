import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# How useful is this really?

- We can break the "pages" mindset (we are already pretty good about this).
- Design and build Responsive Compositions instead.
  - Compositions can now be designed and built independently of the page.
  - Compositions can now be designed with their own responsive breakpoints.
  - A well crafted Composition can be placed anywhere within the app, and it "just works". No styling issues, no state issues.
- Styled Component libraries can now be developed that allow for container (visual component) based responsiveness.
  - Introducing [\`styled-components-reactive-grid\`](https://github.decisiv.net/Development/styled-components-reactive-grid).
`;

function Part3() {
  return <ReactMarkdown source={content} />;
}

export default Part3;
