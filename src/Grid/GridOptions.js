import React, { Component } from 'react';
import './GridOptions.scss';
import { Button, Popover, PopoverBody, ListGroup, ListGroupItem } from 'reactstrap';

class GridOptions extends Component {
    constructor (props) {
        super(props);

        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }

    generateColumnsList () {
        return this.props.columns.map((item, index) => {
            return (
                <ListGroupItem key={index} active={item.visible} onClick={() => this.props.handleColumnConfigClick(item)}>{item.name}</ListGroupItem>
            )
        });
    }

    generateOptionList () {
        return this.props.gridOptionsList.map((option, index) => {
            return (
                <option value={index} key={index} >{option.name}</option>
            )
        });
    }

    render() {
        return (
            <div className="grid__options">
                <select className="form-control" onClick={(e) => { this.props.onGridOptionChange(this.props.gridOptionsList[e.target.value])}}>
                    { this.generateOptionList() }
                </select>

                <Button onClick={() => this.props.makeGridStateDefault()} color="primary">
                    Make default
                </Button>

                <Button onClick={() => this.props.saveGridState()} color="primary">
                    სიის შენახვა
                </Button>

                <Button onClick={() => this.props.removeSorting()} color="primary">
                    სორტირების წაშლა
                </Button>

                <Button id="Popover1" onClick={() => this.toggle()} color="primary">
                    სვეტები
                </Button>
        
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={() => this.toggle()}>
                    <PopoverBody>
                        <ListGroup>
                            {this.generateColumnsList()}
                        </ListGroup>
                    </PopoverBody>
                </Popover>

            </div>
        );
    }
}

export default GridOptions;