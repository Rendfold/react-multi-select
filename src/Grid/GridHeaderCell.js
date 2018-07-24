import React, { Component } from 'react';
import './GridHeaderCell.scss';
import * as Fa from 'react-icons/lib/fa';
import * as Md from 'react-icons/lib/md'

import classname from 'classnames';
import { findDOMNode } from 'react-dom'
import { 	
    DragSource,
	DropTarget,
	ConnectDropTarget,
	ConnectDragSource,
	DropTargetMonitor,
	DropTargetConnector,
	DragSourceConnector,
    DragSourceMonitor 
} from 'react-dnd';
import { XYCoord } from 'dnd-core'

const boxSource = {
    beginDrag(props) {
		return {
			id: props.id,
			index: props.index,
		}
	},
}

const boxDrop = {
    hover(props, monitor, component) {
		if (!component) {
			return null
		}
		const dragIndex = monitor.getItem().index
		const hoverIndex = props.index

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}

		// Determine rectangle on screen
		const hoverBoundingRect = (findDOMNode(component)).getBoundingClientRect()

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

		// Determine mouse position
		const clientOffset = monitor.getClientOffset()

		// Get pixels to the top
		const hoverClientY = (clientOffset).y - hoverBoundingRect.top

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%
		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
		}

		// Time to actually perform the action
		props.moveCard(dragIndex, hoverIndex)

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// to avoid expensive index searches.
		monitor.getItem().index = hoverIndex
	},
}

@DragSource('APPOINTMENT', boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))

@DropTarget('APPOINTMENT', boxDrop, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
}))

class GridHeaderCell extends Component {


    render () {
        return ( this.props.connectDropTarget &&
            this.props.connectDragSource(
                <th className="grid__header-cell" onClick={() => this.props.handleSorting()} id="APPOINTMENT">
                    <div className="filter-button" onClick={(e) => this.props.handleFilterToggle(e)}><Fa.FaFilter /></div>
                    <div className="grid-caption">{ this.props.headerCell.caption }</div>
                    <div className="sort-button">
                        { this.props.sorted === 'ASC' ? <Md.MdArrowDropUp /> : this.props.sorted === 'DESC' ? <Md.MdArrowDropDown /> : null}
                    </div>
                    <input 
                        type="text" 
                        className= {
                            classname('grid-filters', 
                            { 'grid-filters--toggled': this.props.filterToggled, 'form-control': this.props.filterToggled })
                        } 
                    />
                </th>
            )
        );
    }
}

export default GridHeaderCell;