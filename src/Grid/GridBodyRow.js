import React, { Component } from 'react';
import * as Fa from 'react-icons/lib/fa';
import GridBodyRowCell from './GridBodyRowCell';

class GridBodyRow extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    generateCells () {
        return this.props.row.map((cell, index) => {
            return (
                <GridBodyRowCell cell={cell} key={index} />
            );
        });
    }

    render() {
        return (
            <div className="grid__body-row">
                <div className="filter-button"><Fa.FaFilter /></div>
                {this.generateCells()}
            </div>
        );
    }
}

export default GridBodyRow;