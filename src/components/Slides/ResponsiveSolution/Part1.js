import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# What can be done to improve responsiveness?

- We can create an HTML element resize listener with JavaScript.
  - [This article](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/) began a journey
  - That has been [refined](https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js) by [numerous developers](https://github.com/sdecima/javascript-detect-element-resize).
  - And turned into an excellent npm package, [\`element-resize-detector\`](https://www.npmjs.com/package/element-resize-detector).
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
