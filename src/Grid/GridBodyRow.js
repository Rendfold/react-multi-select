import React, { Component } from 'react';
import GridBodyRowCell from './GridBodyRowCell';

class GridBodyRow extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    generateCells () {
        return this.props.row.map((cell) => {
            return (
                <GridBodyRowCell cell={cell} />
            );
        });
    }

    render() {
        return (
            <div className="grid__body-row">
                {this.generateCells()}
            </div>
        );
    }
}

export default GridBodyRow;