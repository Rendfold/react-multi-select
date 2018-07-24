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

    render() {
        return (
            <div className="grid__options">
                <Button onClick={() => this.props.removeSorting()}>
                    სორტირების წაშლა
                </Button>

                <Button id="Popover1" onClick={() => this.toggle()}>
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