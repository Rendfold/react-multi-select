import React, { Component } from 'react';
import GridBodyRow from './GridBodyRow';

class GridBody extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    generateRows () {
        return this.props.data.map((row) => {
            return (
                <GridBodyRow row={row} />
            );
        })
    }

    render() {
        return (
            <div className="grid__body">
                {this.generateRows()}
            </div>
        );
    }
}

export default GridBody;