import React, { Component } from 'react';
import * as MD from 'react-icons/lib/md';
import classname from 'classnames';
import './select.scss';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      toggled: false,
      loading: false,
      data: [{
          id: 1,
          name: 'First'
        },
        {
          id: 2,
          name: 'Second'
        }
      ],
      value: [

      ]
    };
  }

  handleToggle () {
    if (this.state.toggled) {
      this.setState({
        toggled: false,
      });
    }
    else {
      this.setState({
        toggled: true
      });
    }
  }

  handleItemClick (item) {
    let newValue = this.state.value.concat(Object.assign(item));

    this.setState({
      value: newValue,
      toggled: false
    });
  }

  dataItems () {
    if (this.state.data.length) {
      return this.state.data.map((item) => {
        return (
          <div className="item" key={item.id} onClick={() => this.handleItemClick(item)}>{item.name}</div>
        );
      });
    }
    else {
      return (
        <div>
          <div className="loading-icon"><MD.MdSync /></div><span>Loading...</span>
        </div>
      )
    }
  }

  generateSelectedItems () {
    return this.state.value.map((item, index) => {
      return (
        <div className="select__value-item" key={`${item.id}${index}`}>
          <span className="select__value-item-text">{item.name}</span> 
          <span className="select__value-item-clear" onClick={(e) => this.removeItem(e, item)}><MD.MdClose /></span>
        </div>
      );
    });
  }

  removeItem (e, item) {
    e.stopPropagation();
    let itemIndex = this.state.value.indexOf(item);

    this.setState({
      value: this.state.value.slice(0, itemIndex).concat(this.state.value.slice(itemIndex+1))
    })
  }

  clearAll (e) {
    e.stopPropagation();

    this.setState({
      value: []
    });
  }

  render() {
    return (
      <div className="select">
        <div className={classname('select__value', { 'select__value--toggled': this.state.toggled })} onClick={() => this.handleToggle()}>
          <div className="select__value-container">
            { this.generateSelectedItems() }
            {/* <div className="select__value-item">
              <span className="select__value-item-text">test item</span> 
              <span className="select__value-item-clear"><MD.MdClose /></span>
            </div>
            <div className="select__value-item">
              <span className="select__value-item-text">test item 2</span> 
              <span className="select__value-item-clear"><MD.MdClose /></span>
            </div> */}
          </div>
          <div className="select__clear-button" onClick={(e) => this.clearAll(e)}><MD.MdClose /></div>
          <div className="select__toggle-button" onClick={() => this.handleToggle()}><MD.MdArrowDropDown /></div>
        </div>
        <div className={classname('test', { 'test2': this.state.toggled })}>
          {this.dataItems()}
        </div>
      </div>
    );
  }
}

export default App;
