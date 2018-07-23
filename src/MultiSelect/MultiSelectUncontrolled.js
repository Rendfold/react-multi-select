import React, { Component } from 'react';
import MultiSelect from './MultiSelect';
import './select.scss';

class MultiSelectUncontrolled extends Component {
  constructor (props) {
    super(props);

    this.state = {
      toggled: false
    };
  }

  handleOpen () {
    if (this.state.toggled) {
        this.setState({
            toggled: false,
        });
    }
    else {
        this.setState({
            toggled: true
        });

        this.props.handleOpen();
    }
  }
  
  handleToggleOnItemAdd () {
    this.setState({
      toggled: false
    });
  }

  render() {
    return (
      <MultiSelect 
        toggled={this.state.toggled}
        data={this.props.data} 
        value={this.props.value}
        onChange={(newValue) => this.props.onChange(newValue)}
        handleOpen={() => this.handleOpen()} 
        handleToggleOnItemAdd={() => {this.handleToggleOnItemAdd()}} 
        search={this.props.search}
        handleSearch={(searchString) => this.props.handleSearch(searchString)} />
    );
  }
}

export default MultiSelectUncontrolled;
