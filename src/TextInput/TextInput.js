import React, { Component } from 'react';

class TextInput extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <input type="text" className={this.props.className} onChange={(e) => this.props.onChange(e.target.value)} />
    );
  }
}

export default TextInput;
