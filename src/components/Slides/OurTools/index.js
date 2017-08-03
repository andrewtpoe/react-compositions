import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# Our Main Tools

- [Modern JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  - It's beautiful

- [React](https://facebook.github.io/react/)
  - Front End JavaScript Framework created by Facebook.

  - Can be used to create web, mobile, and desktop applications.

  - Pretty much the best thing ever.


- [Styled Components](https://github.com/styled-components/styled-components)
  - Allows you to define simple React Components and dynamically generate a stylesheet.

  - Powerful & extremely flexible.

    - With great power comes great responsibility
    
    - Lacks guidelines or documentation on how to wield it's power manageably.
`;

function OurTools() {
  return <ReactMarkdown source={content} />;
}

export default OurTools;
