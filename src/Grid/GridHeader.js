import React, { Component } from 'react';
import GridHeaderCell from './GridHeaderCell';
import './GridHeader.scss';

class GridHeader extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    generateHeaderCells () {
        return this.props.columns.map((headerCell, index) => {
            if(headerCell.visible) {
                let sortedColumn = this.props.order.find((sortedItem) => {
                    return headerCell.name in sortedItem;
                });

                return (
                    <GridHeaderCell 
                        filterToggled={this.props.filterToggled} 
                        handleFilterToggle={(e) => this.props.handleFilterToggle(e)} 
                        handleSorting={() => this.props.handleSorting(headerCell)}
                        sorted={sortedColumn ? sortedColumn[headerCell.name] : undefined}
                        headerCell={headerCell} 
                        key={index} />
                );
            }
            else {
                return null;
            }
        });
    }

    render() {
        return (
            <thead className="grid__header">
                <tr>
                    { this.generateHeaderCells() }
                </tr>
            </thead>
        );
    }
}

export default GridHeader;