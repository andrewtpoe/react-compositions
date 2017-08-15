import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
# What can be done?

- It is possible to create an HTML Element resize listener with JavaScript.
  - [This article](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/) began a journey
  - That has been [refined](https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js) by numerous developers.
  - And turned into an excellent [npm package](https://www.npmjs.com/package/element-resize-detector).
`;

function Part1() {
  return <ReactMarkdown source={content} />;
}

export default Part1;
