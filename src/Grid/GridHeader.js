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

        return this.props.columns.concat({name: 'buttons', visible: true}).map((headerCell, index) => {
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
                        moveColumn={(dragIndex, hoverIndex) => this.props.moveColumn(dragIndex, hoverIndex)}
                        hasButtons={this.props.hasButtons && this.props.columns.length === index}
                        headerCell={headerCell} 
                        id={headerCell.name}
                        key={index}
                        index={index}
                        canDrag={headerCell.name !== 'buttons'} />
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