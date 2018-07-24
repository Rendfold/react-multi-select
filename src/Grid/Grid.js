import React, { Component } from 'react';
import GridBody from './GridBody'
import GridHeader from './GridHeader';
import GridFooter from './GridFooter';
import GridOptions from './GridOptions';
import './Grid.scss';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Grid extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div className="container-tester">
                    <GridOptions 
                        columns={this.props.data.columns} 
                        handleColumnConfigClick={(item) => this.props.handleColumnConfigClick(item)} 
                        removeSorting={() => this.props.removeSorting()}/>
                    <table className="grid">
                        <GridHeader 
                            columns={this.props.data.columns} 
                            order={this.props.data.order}
                            handleFilterToggle={(e) => this.props.handleFilterToggle(e)}
                            handleSorting={(headerCell) => this.props.handleSorting(headerCell)}
                            filterToggled={this.props.filterToggled}
                            />
                        <GridBody rows={this.props.data.records} columns={this.props.data.columns} />
                    </table>
                    <GridFooter />
                </div>
            </DragDropContextProvider>
        );
    }
}

export default Grid;