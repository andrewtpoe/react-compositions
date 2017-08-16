import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class AsyncReactMarkdown extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired
  }

  state = {
    content: '',
  }

  componentWillMount() {
    this.loadContent();
  }

  loadContent = async () => {
    const content = await fetch(this.props.source)
      .then(response => response.text());
    this.setState({ content });
  }

  render() {
    return (
      <ReactMarkdown source={this.state.content} />
    )
  }
}

export default AsyncReactMarkdown;
