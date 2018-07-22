import React, { Component } from 'react';
import ExactClick from '../helperComponents/ExactClick';
import * as MD from 'react-icons/lib/md';
import classname from 'classnames';
import './select.scss';

class MultiSelect extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <input onChange={(e) => this.props.onChange(e.target.value)} />
    );
  }
}

export default MultiSelect;
