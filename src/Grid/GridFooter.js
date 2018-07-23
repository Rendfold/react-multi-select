import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './GridFooter.scss';

class GridFooter extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    generatePagination () {
        let numberOfPages = 480 / 10 //this.props.totalData / this.props.dataPerPage; 
        
        if(numberOfPages > 10) {
            return (
                <React.Fragment>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled>
                        <PaginationLink href="#">
                            ...
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            {numberOfPages - 2}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            {numberOfPages - 1}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            {numberOfPages}
                        </PaginationLink>
                    </PaginationItem>
                </React.Fragment>
            );
        }
    }

    render() {
        return (
            <div className="grid__footer clearfix">
                <div className="grid__footer-table-cell">
                    <div className="grid__footer-left-part">
                        <select>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="grid__footer-right-part">
                        
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        {this.generatePagination()}
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                    </Pagination>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridFooter;