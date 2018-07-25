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

  handleOpen (e) {
    if (this.state.toggled) {
        this.setState({
            toggled: false,
        });
    }
    else {
        this.setState({
            toggled: true
        });

        debugger;
        this.props.handleOpen(e);
    }
  }
  
  handleToggleOnItemAdd () {
    this.setState({
      toggled: false
    });
  }

  handleSearch (searchString) {
    debugger;
  }

  render() {
    return (
      <MultiSelect
        className={this.props.className}
        toggled={this.state.toggled}
        data={this.props.data} 
        value={this.props.value}
        onChange={(newValue) => this.props.onChange(newValue)}
        handleOpen={(e) => this.handleOpen(e)} 
        handleToggleOnItemAdd={() => this.handleToggleOnItemAdd()} 
        search={this.props.search}
        handleSearch={(searchString) => this.props.handleSearch(searchString)} />
    );
  }
}

export default MultiSelectUncontrolled;
