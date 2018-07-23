import React, { Component } from 'react';
import './GridBodyRowCell.scss';

class GridBodyRowCell extends Component {
    render() {
        return (
            <td className="grid__body-row-cell">
                
                {this.props.cell.name}
            </td>
        );
    }
}

export default GridBodyRowCell;