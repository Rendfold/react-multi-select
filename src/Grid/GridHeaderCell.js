import React, { Component } from 'react';
import './GridHeaderCell.scss';
import TextInput from '../TextInput/TextInput';
import MultiSelectUncontrolled from '../MultiSelect/MultiSelectUncontrolled';

import classname from 'classnames';
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd';
import debounce from 'lodash.debounce';
import * as Fa from 'react-icons/lib/fa';
import * as Md from 'react-icons/lib/md';

const boxSource = {
    beginDrag (props) {
		return {
			id: props.id,
			index: props.index,
		}
    },
    isDragging(props, monitor) {
        if(monitor.getItem().id === props.id) {
            return {
                id: props.id,
                index: props.index
            }
        }
    }
}

const boxDrop = {
    hover (props, monitor, component) {
		if (!component) {
			return null
		}

		if (!props.canDrag) {
			return;
		}

		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;

		if (dragIndex === hoverIndex) {
			return;
		}

		const hoverBoundingRect = (findDOMNode(component)).getBoundingClientRect();
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
		const clientOffset = monitor.getClientOffset();
		const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

		// Only perform the move when the mouse has crossed half of the items width
		if ((dragIndex < hoverIndex && hoverClientY < hoverMiddleY) || (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)) {
			return;
		}

		props.moveColumn(dragIndex, hoverIndex);

		monitor.getItem().index = hoverIndex;
	},
}

@DragSource('HEADER', boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
@DropTarget('HEADER', boxDrop, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
}))

class GridHeaderCell extends Component {
	handleOpen (e) {
		//e.nativeEvent.stopImmediatePropagation();
	}

	getFilters () {
		let headerCell = this.props.headerCell;

		if (headerCell.type === 'text') {
			return (
				<TextInput
					className= {
						classname('grid-filters', 
						{ 'grid-filters-input--toggled': this.props.filterToggled, 'form-control': this.props.filterToggled })
					} 
				/>
			)
		}
		else if (headerCell.type === 'dictionary' && headerCell.options.context === 'enum') {
			return (
				<MultiSelectUncontrolled
					className= {classname('grid-filters', { 'grid-filters-multiselect--toggled': this.props.filterToggled})}
					onChange={(newValue) => this.onChange(newValue)}
					data={[]} 
					value={[]} 
					handleOpen={(e) => console.log(e)}
					search={true}
					handleSearch={debounce((searchString) => this.handleSearch(searchString), 5000)}/>
			)
		}
	}

    render () {
        const opacity = this.props.isDragging ? 0 : 1;

        return ( this.props.connectDragSource &&
			this.props.connectDropTarget &&
			this.props.connectDragSource(
				this.props.connectDropTarget(
					<th style={{ opacity }} className="grid__header-cell"  id="HEADER">
						<div className="filter-button" onClick={(e) => this.props.handleFilterToggle(e)}><Fa.FaFilter /></div>
						<div className="grid-caption" onClick={() => this.props.handleSorting()}>{ this.props.headerCell.caption }</div>
						<div className="sort-button">
							{ this.props.sorted === 'ASC' ? <Md.MdArrowDropUp /> : this.props.sorted === 'DESC' ? <Md.MdArrowDropDown /> : null}
						</div>
						{ this.getFilters() }
					</th>
				)
			)
		);
    }
}

export default GridHeaderCell;