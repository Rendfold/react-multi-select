import React, { Component } from 'react';
import GridUncontrolled from './GridUncontrolled';

class Test extends Component {
    constructor (props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <GridUncontrolled name="company-list"/>
        );
    }
}

export default Test;
