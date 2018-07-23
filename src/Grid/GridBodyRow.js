import React, { Component } from 'react';
import GridBodyRowCell from './GridBodyRowCell';
import './GridBodyRow.scss';

class GridBodyRow extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    generateCells () {
        // return this.props.row.map((cell, index) => {
        //     return (
        //         <GridBodyRowCell cell={cell} key={index} />
        //     );
        // });
    }

    render() {
        return (
            <tr className="grid__body-row">
                {this.generateCells()}
            </tr>
        );
    }
}

export default GridBodyRow;