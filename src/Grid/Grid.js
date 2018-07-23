import React, { Component } from 'react';
import GridBody from './GridBody'
import GridHeader from './GridHeader';
import GridFooter from './GridFooter';
import GridOptions from './GridOptions';
import './Grid.scss';

class Grid extends Component {
    constructor (props) {
        super(props);
    
        this.state = {

        }
    }

    render() {
        return (
            <div className="container-tester">
                <GridOptions columns={this.props.data.columns} />
                <table className="grid">
                    <GridHeader columns={this.props.data.columns} handleFilterToggle={() => this.props.handleFilterToggle()} filterToggled={this.props.filterToggled} />
                    <GridBody rows={this.props.data.records} />
                </table>
                <GridFooter />
            </div>
        );
    }
}

export default Grid;