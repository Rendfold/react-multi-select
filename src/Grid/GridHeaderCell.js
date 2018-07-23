import React, { Component } from 'react';
import './GridHeaderCell.scss';
import * as Fa from 'react-icons/lib/fa';
import classname from 'classnames';

class GridHeaderCell extends Component {
    render () {
        console.log(this.props.headerCell)
        return (
            <th className="grid__header-cell">
                <div className="filter-button" onClick={() => this.props.handleFilterToggle()}><Fa.FaFilter /></div>
                <div className="grid-caption">{ this.props.headerCell.caption }</div>
                <input type="text" className={classname('grid-filters', { 'grid-filters--toggled': this.props.filterToggled, 'form-control': this.props.filterToggled })} />
            </th>
        );
    }
}

export default GridHeaderCell;