import React, { Component } from 'react';
import './GridBodyRowCell.scss';

class GridBodyRowCell extends Component {
    generateValue () {
        if (this.props.valueType === 'boolean') {
            return this.props.value ? <div>✔</div> : <div>✘</div>;
        }
        else if (this.props.valueType === 'text' || this.props.valueType === 'integer') {
            return this.props.value;
        }
        else if (this.props.valueType === 'dictionary') {
            return this.props.value.name;
        }
        else if (this.props.valueType === 'date_period') {
            return this.props.value;
        }
    }

    render() {
        return (
            <td className="grid__body-row-cell">
                { this.generateValue() }
            </td>
        );
    }
}

export default GridBodyRowCell;