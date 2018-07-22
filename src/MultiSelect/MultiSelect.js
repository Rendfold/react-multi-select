import React, { Component } from 'react';
import ExactClick from '../helperComponents/ExactClick';
import * as MD from 'react-icons/lib/md';
import classname from 'classnames';
import './select.scss';

class MultiSelect extends Component {
  constructor (props) {
    super(props);
  }

  dataItems () {
    if (this.props.data.length) {
      return this.props.data.map((item) => {
        return (
          <div className="item" key={item.id} onClick={() => this.handleItemAdd(item)}>{item.name}</div>
        );
      });
    }
    else if (this.props.data === []) {
      return (
        <div className="item">Data not found</div>
      );
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
    return this.props.value.map((item, index) => {
      return (
        <div className="select__value-item" key={`${item.id}${index}`}>
          <span className="select__value-item-text">{item.name}</span> 
          <span className="select__value-item-clear" onClick={() => this.removeItem(item)}><MD.MdClose /></span>
        </div>
      );
    });
  }

  removeItem (item) {
    let itemIndex = this.props.value.indexOf(item);
    
    this.props.onChange(this.props.value.slice(0, itemIndex).concat(this.props.value.slice(itemIndex+1)));
  }

  handleItemAdd (item) {
    this.props.handleToggleOnItemAdd();

    let newValue = this.props.value.concat(Object.assign(item));

    this.props.onChange(newValue);
  }

  render() {
    return (
      <div className="select">
        <div className={classname('select__value', { 'select__value--toggled': this.props.toggled })}>
          <ExactClick className="select__value-container"  onClick={() => this.props.handleOpen()}>
              { this.generateSelectedItems() }
          </ExactClick>
          <div className="select__clear-button" onClick={() => this.props.onChange([])}><MD.MdClose /></div>
          <div className="select__toggle-button" onClick={() => this.props.handleOpen()}><MD.MdArrowDropDown /></div>
        </div>
        <div className={classname('test', { 'test2': this.props.toggled })}>
          { this.props.search ? 
            (<div>
              <input type="text" onChange={(e) => {this.props.handleSearch(e.target.value)}}/>
            </div>)
            :
            null
          }
          {this.dataItems()}
        </div>
      </div>
    );
  }
}

export default MultiSelect;
