import React, { Component } from 'react';
import './GridOptions.scss';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

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
        this.props.columns.map((item, index) => {
            return (
                <li key={index}>{item.name}</li>
            )
        });
    }

    render() {
        return (
            <div className="grid__options">
                <Button id="Popover1" onClick={() => this.toggle()}>
                    Launch Popover
                </Button>
        
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={() => this.toggle()}>
                    <PopoverBody>
                        <ul>
                            {this.generateColumnsList()}
                        </ul>
                    </PopoverBody>
                </Popover>

            </div>
        );
    }
}

export default GridOptions;