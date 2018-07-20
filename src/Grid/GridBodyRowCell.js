import React, { Component } from 'react';

class GridBodyRowCell extends Component {
    render() {
        return (
            <div className="grid__body-row-cell">
                {this.props.cell.name}
            </div>
        );
    }
}

export default GridBodyRowCell;