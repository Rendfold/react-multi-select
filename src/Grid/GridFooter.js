import React, { Component } from 'react';
import PaginationComponent from '../PaginationComponent/PaginationComponent'
import ReactPaginate from 'react-paginate';
import './GridFooter.scss';

class GridFooter extends Component {
    constructor (props) {
        super(props);

        this.state = {
            offset: 0
        };
    }

    render() {
        return (
            <div className="grid__footer">
                <div className="grid__footer-table-cell clearfix">
                    <div className="grid__footer-left-part">
                        <select className="form-control" value={this.props.items} onChange={(event) => this.props.onItemsAmountChange(event.target.value)}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="grid__footer-right-part">
                        {/* <PaginationComponent total={this.props.total} page={this.props.page} items={this.props.items} /> */}
                        <nav >
                            <ReactPaginate previousLabel={"<<"}
                                nextLabel={">>"}
                                breakLabel={<a style={{cursor: 'auto'}}>...</a>}
                                breakClassName={"break-me"}
                                pageCount={this.props.total / this.props.items}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={2}
                                onPageChange={(value) => this.props.handlePageClick(value)}
                                containerClassName={"grid__footer-pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}/>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridFooter;