import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationComponent extends Component {
    // generatePagination () {
    //     let numberOfPages = this.props.total / this.props.items;

    //     if(numberOfPages > 7) {
    //         return (
    //             <React.Fragment>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">
    //                         1
    //                     </PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">
    //                         2
    //                     </PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">
    //                         3
    //                     </PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem disabled>
    //                     <PaginationLink href="#">
    //                         ...
    //                     </PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">
    //                         {numberOfPages - 2}
    //                     </PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">
    //                         {numberOfPages - 1}
    //                     </PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">
    //                         {numberOfPages}
    //                     </PaginationLink>
    //                 </PaginationItem>
    //             </React.Fragment>
    //         );
    //     }
    //     else if 
    // }

    render () {
        return (
            <Pagination aria-label="Page navigation example">
                <PaginationItem disabled={ this.props.page === 1 ? true : false }>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                { this.generatePagination() }
                <PaginationItem disabled={ this.props.page === this.props.total / this.props.items ? true : false }>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        )
    }
}

export default PaginationComponent;