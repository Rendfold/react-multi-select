import React, { Component } from 'react';
import Test from './Grid/Test';
import './index.scss';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      value: []
    };
  }

  render() {
    return (
      <Test />
    );
  }
}

export default App;
