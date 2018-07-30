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

    generateButtons () {
        return this.props.buttons.map((button, index) => {
            return (
                React.cloneElement(button, { key: index })
            )
        })
    }

    render() {
        let {
            buttons: Buttons = () => null
        } = this.props;

        return (
            <tr className="grid__body-row">
                {this.generateCells()}
                <td className="grid__body-row-cell">
                    <Buttons/>
                </td>
            </tr>
        );
    }
}

export default GridBodyRow;