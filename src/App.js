import React, { Component } from 'react';
import MultiSelect from './MultiSelect/MultiSelect';
import MultiSelectUncontrolled from './MultiSelect/MultiSelectUncontrolled';
import debounce from 'lodash.debounce';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      value: []
    };
  }

  handleSearch (searchString) {
    debugger;
  }

  handleOpen () {
    //here will be request
    this.setState({
      data: [{
          id: 1,
          name: 'First'
        },
        {
          id: 2,
          name: 'Second'
        }
      ]
    });
  }

  onChange (newValue) {
    this.setState({
      value: newValue
    })
  }

  render() {
    return (
      <MultiSelectUncontrolled
          onChange={(newValue) => this.onChange(newValue)}
          data={this.state.data} 
          value={this.state.value} 
          handleOpen={() => this.handleOpen()}
          search={true}
          handleSearch={debounce((searchString) => this.handleSearch(searchString), 5000)}/>
    );
  }
}

export default App;
