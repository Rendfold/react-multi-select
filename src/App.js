import React, { Component } from 'react';
import Select from './Select';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      value: []
    };
  }

  handleOpen () {
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

  handleItemClick (item) {
    let newValue = this.state.value.concat(Object.assign(item));

    this.setState({
      value: newValue
    });
  }

  handleRemoveItem (item) {
    let itemIndex = this.state.value.indexOf(item);
    
    this.setState({
      value: this.state.value.slice(0, itemIndex).concat(this.state.value.slice(itemIndex+1))
    })
  }

  render() {
    return (
      <Select 
          data={this.state.data} 
          value={this.state.value} 
          handleOpen={() => this.handleOpen()} 
          handleItemClick={(item) => this.handleItemClick(item)} 
          handleRemoveItem={(item) => this.handleRemoveItem(item)}/>
    );
  }
}

export default App;
