import React, { Component } from 'react';
import GridBody from './GridBody'
import GridHeader from './GridHeader';
import GridFooter from './GridFooter';
import GridOptions from './GridOptions';
import './Grid.scss';

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)

class Grid extends Component {

    render() {
        return (
            <div className="container-tester">
                <GridOptions 
                    columns={this.props.data.columns} 
                    handleColumnConfigClick={(item) => this.props.handleColumnConfigClick(item)} 
                    removeSorting={() => this.props.removeSorting()}
                    saveGridState={() => this.props.saveGridState()}
                    makeGridStateDefault={() => this.props.makeGridStateDefault()}
                    gridOptionsList={this.props.data.list_options}
                    onGridOptionChange={(value) => this.props.onGridOptionChange(value)}/>
                <table className="grid">
                    <GridHeader 
                        columns={this.props.data.columns} 
                        order={this.props.data.order}
                        handleFilterToggle={(e) => this.props.handleFilterToggle(e)}
                        handleSorting={(headerCell) => this.props.handleSorting(headerCell)}
                        moveColumn={(dragIndex, hoverIndex) => this.props.moveColumn(dragIndex, hoverIndex)}
                        filterToggled={this.props.filterToggled}
                        />
                    <GridBody rows={this.props.data.records} columns={this.props.data.columns} buttons={this.props.buttons} />
                </table>
                <GridFooter 
                    total={this.props.data.total} 
                    page={this.props.data.page} 
                    items={this.props.data.items} 
                    onItemsAmountChange={(value) => this.props.onItemsAmountChange(value)}
                    handlePageClick={(value) => this.props.handlePageClick(value)} />
            </div>
        );
    }
}

export default Grid;