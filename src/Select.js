import React, { Component } from 'react';
import ExactClick from './ExactClick';
import * as MD from 'react-icons/lib/md';
import classname from 'classnames';
import './select.scss';

class Select extends Component {
  constructor (props) {
    super(props);

    this.state = {
      toggled: false
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
      this.props.handleOpen();
    }
  }

  handleItemClick (item) {
    this.setState({
      toggled: false
    });

    this.props.handleItemClick(item);
  }

  dataItems () {
    if (this.props.data.length) {
      return this.props.data.map((item) => {
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
    return this.props.value.map((item, index) => {
      return (
        <div className="select__value-item" key={`${item.id}${index}`}>
          <span className="select__value-item-text">{item.name}</span> 
          <span className="select__value-item-clear" onClick={(e) => this.removeItem(e, item)}><MD.MdClose /></span>
        </div>
      );
    });
  }

  removeItem (e, item) {
    this.props.handleRemoveItem(item);
  }

  clearAll (e) {
    this.setState({
      value: []
    });
  }

  render() {
    return (
      <div className="select">
        <ExactClick className={classname('select__value', { 'select__value--toggled': this.state.toggled })} onClick={() => this.handleToggle()}>
                <div className="select__value-container">
                    { this.generateSelectedItems() }
                </div>
                <div className="select__clear-button" onClick={(e) => this.clearAll(e)}><MD.MdClose /></div>
                <div className="select__toggle-button" onClick={() => this.handleToggle()}><MD.MdArrowDropDown /></div>
        </ExactClick>
        <div className={classname('test', { 'test2': this.state.toggled })}>
          {this.dataItems()}
        </div>
      </div>
    );
  }
}

export default Select;
