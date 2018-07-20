import React, { Component } from 'react';
import GridBody from './GridBody'
import GridHeader from './GridHeader';
import GridFooter from './GridFooter'

class Grid extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="grid">
                <GridHeader />
                <GridBody />
                <GridFooter />
            </div>
        );
    }
}