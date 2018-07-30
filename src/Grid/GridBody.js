import React, { Component } from 'react';
import GridBodyRow from './GridBodyRow';

class GridBody extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    generateRows () {
        return this.props.rows.map((row, index) => {
            return (
                <GridBodyRow row={row} columns={this.props.columns} key={index} buttons={this.props.buttons} />
            );
        })
    }

    render() {
        return (
            <tbody className="grid__body">
                {this.generateRows()}
            </tbody>
        );
    }
}

export default GridBody;