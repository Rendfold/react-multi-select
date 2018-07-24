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
        return this.props.columns.map((column, index) => {
            if (column.visible) {
                return (
                    <GridBodyRowCell value={this.props.row[column.name]} valueType={column.type} key={index} />
                );
            }

            return null;
        });
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