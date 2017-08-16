import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import styledComponentCode from './Part4-styled-component-code.md'

class Part4 extends Component {
  state = {
    content: '',
  }

  componentWillMount() {
    this.loadContent();
  }

  loadContent = async () => {
    const content = await fetch(styledComponentCode)
      .then(response => response.text());
    this.setState({ content });
  }

  render() {
    return (
      <ReactMarkdown source={this.state.content} />
    )
  }
}

export default Part4;
