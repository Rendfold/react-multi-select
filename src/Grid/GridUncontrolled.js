import React, { Component } from 'react';
import Grid from './Grid';

class GridUncontrolled extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: {
                list_options: [
                    {
                        id: 8,
                        account_id: 128,
                        name: "some list222",
                        file_name: "company_users",
                        options: {
                            columns: [
                                {
                                        name: "email",
                                        caption: "Email",
                                        type: "text",
                                        visible: true,
                                        select: {
                                            table: "umg_accounts",
                                            as: "email"
                                        }
                                },
                                {
                                    name: "mark_for_deletion",
                                    caption: "Mark for deletion",
                                    type: "boolean",
                                    visible: true,
                                    select: {
                                        table: "umg_accounts",
                                        as: "mark_for_deletion"
                                    }
                                },
                                {
                                    caption: "First name",
                                    type: "text",
                                    visible: true,
                                    select: {
                                        table: "umg_profiles",
                                        as: "first_name"
                                    }
                                },
                                {
                                    caption: "Status",
                                    type: "dictionary",
                                    options: {
                                        model_name: "Umg::Status",
                                        context: "enum"
                                    },
                                    select: {
                                        table: "umg_statuses",
                                        fields: [
                                            "id",
                                            "name"
                                        ]
                                    },
                                    visible: true,
                                    filter: null
                                },
                                {
                                        caption: "permission",
                                        type: "dictionary",
                                        options: {
                                            "model_name": "Umg::Permission",
                                            "context": "enum"
                                        },
                                        select: {
                                            table: "umg_permissions",
                                            fields: [
                                                "id",
                                                "name"
                                            ]
                                        },
                                        filter: null,
                                        visible: true
                                },
                                {
                                        name: "created_at",
                                        caption: "created_at",
                                        type: "date_period",
                                        select: {
                                            "field": "umg_accounts.created_at",
                                            "as": "created_at"
                                        },
                                        filter: {
                                            "value": {
                                                "start_date": "2018-07-18T10:54:47T00:00:00.000Z",
                                                "end_date": "2018-07-23T10:54:47T00:00:00.000Z"
                                            }
                                        },
                                        visible: true
                                }
                            ]
                        },
                        is_default: false
                    },
                    {
                        id: 7,
                        account_id: 128,
                        name: "some list",
                        file_name: "company_users",
                        options: {
                            columns: [
                                {
                                        name: "id",
                                        caption: "Id",
                                        type: "integer",
                                        visible: true,
                                        select: {
                                            table: "umg_accounts",
                                            as: "id"
                                        }
                                },
                                {
                                        name: "email",
                                        caption: "Email",
                                        type: "text",
                                        visible: true,
                                        select: {
                                            table: "umg_accounts",
                                            as: "email"
                                        }
                                },
                                {
                                        name: "mark_for_deletion",
                                        caption: "Mark for deletion",
                                        type: "boolean",
                                        visible: true,
                                        select: {
                                            table: "umg_accounts",
                                            as: "mark_for_deletion"
                                        }
                                },
                                {
                                        name: "first_name",
                                        caption: "First name",
                                        type: "text",
                                        visible: true,
                                        select: {
                                            table: "umg_profiles",
                                            as: "first_name"
                                        }
                                },
                                {
                                        name: "status",
                                        caption: "Status",
                                        type: "dictionary",
                                        options: {
                                            model_name: "Umg::Status",
                                            context: "enum"
                                        },
                                        select: {
                                            table: "umg_statuses",
                                            fields: [
                                                "id",
                                                "name"
                                            ]
                                        },
                                        visible: true,
                                        filter: null
                                },
                                {
                                        name: "permission",
                                        caption: "permission",
                                        type: "dictionary",
                                        options: {
                                            model_name: "Umg::Permission",
                                            context: "enum"
                                        },
                                        select: {
                                            table: "umg_permissions",
                                            fields: [
                                                "id",
                                                "name"
                                            ]
                                        },
                                        filter: null,
                                        visible: true
                                },
                                {
                                        name: "created_at",
                                        caption: "created_at",
                                        type: "date_period",
                                        select: {
                                            field: "umg_accounts.created_at",
                                            as: "created_at"
                                        },
                                        filter: {
                                            value: {
                                                start_date: "2018-07-18T10:54:47T00:00:00.000Z",
                                                end_date: "2018-07-23T10:54:47T00:00:00.000Z"
                                            }
                                        },
                                        visible: true
                                }
                            ]
                        },
                        is_default: true
                    }
                ],
                columns: [
                    {
                        name: 'id',
                        caption: "Id",
                        type: "integer",
                        visible: false,
                        filter: {
                            value: 123
                        }
                    },
                    {
                        name: 'email',
                        caption: "Email",
                        type: "text",
                        visible: true,
                        filter: {
                        value: "some_email@example.com"
                        }
                    },
                    {
                        name: 'mark_for_deletion',
                        caption: "Mark for deletion",
                        type: "boolean",
                        visible: true,
                        filter: {
                        value: false
                        }
                    },
                    {
                        name: 'first_name',
                        caption: "First name",
                        type: "text",
                        visible: true
                    },
                    {
                        name: 'status',
                        caption: "Status",
                        type: "dictionary",
                        options: {
                        model_name: "Umg::Status",
                        context: "enum"
                        },
                        visible: true,
                        filter: {
                            value: {
                                id: [12,2]
                            }
                        }
                    },
                    {
                        name: 'permission',
                        caption: "permission",
                        type: "dictionary",
                        options: {
                            model_name: "Umg::Permission",
                            context: "enum"
                        },
                        filter: {
                        value: {
                            id_name: ["active"]
                        }
                        },
                        visible: true
                    },
                    {
                        name: 'created_at',
                        caption: "created_at",
                        type: "date_period",
                        filter: {
                            value: {
                                start_date: "2018-07-18T10:54:47T00:00:00.000Z",
                                end_date: "2018-07-23T10:54:47T00:00:00.000Z"
                            }
                        },
                        visible: true
                    }
                ],
                records: [
                    {
                        created_at: "2018-07-19T10:31:06.071Z",
                        email: "a.zutikov@vaba.co",
                        first_name: "Alexander",
                        id: 125,
                        mark_for_deletion: false,
                        permission: {
                            id: 1,
                            name: "სუპერ ადმინი"
                        },
                        status: {
                            id: 5,
                            name: "დარეგისტრებული"
                        },
                    }
                ],
                order: [],
                total: 250,
                page: 1,
                items: 25,
                selectedOption: {
                    id: 8,
                    name: 'some list222'
                }
            },
            filterToggled: false
        };
    }

    componentDidMount () {
        // initial request here
    }

    saveGridState () {
        //save grid request here
    }

    makeGridStateDefault () {
        //make default state request here
    }

    handleFilterToggle (e) {
        e.stopPropagation();
        this.setState({
            filterToggled: !this.state.filterToggled
        })
    }

    checkIfAlreadySorted (column) {
        let sortedColumnIndex = this.state.data.order.findIndex((sortedItem) => {
            return column.name in sortedItem;
        });

        let sortedColumn = this.state.data.order.find((sortedItem) => {
            return column.name in sortedItem;
        });

        return sortedColumn ? {index: sortedColumnIndex, column: sortedColumn} : null;
    }

    handleSorting (headerCell) {
        if (!this.state.data.order.length) {
            this.setState({
                data: {
                    ...this.state.data,
                    order: [{
                        [headerCell.name]: "ASC"
                    }]
                }
            })
        }
        else {
            let tempArray = this.state.data.order.slice();
            let sorted = this.checkIfAlreadySorted(headerCell);

            if (sorted) {
                if (sorted.column[headerCell.name] === 'ASC'){
                    tempArray[sorted.index][headerCell.name] = 'DESC';

                    this.setState({
                        data: {
                            ...this.state.data,
                            order: tempArray.concat(tempArray.splice(sorted.index, 1)[0])
                        }
                    });
                }
                else if (sorted.column[headerCell.name] === 'DESC') {
                    this.setState({
                        data: {
                            ...this.state.data,
                            order: tempArray.slice(0, sorted.index).concat(tempArray.slice(sorted.index+1))
                        }
                    });
                }
            }
            else {
                tempArray.push({
                    [headerCell.name]: "ASC"
                });
                this.setState({
                    data: {
                        ...this.state.data,
                        order: tempArray
                    }
                })
            }
        }
    }

    handleColumnConfigClick (item) {
        if (item.visible) {
            let sortedColumn = this.checkIfAlreadySorted(item);
            let tempArray = this.state.data.order.slice();

            this.setState({
                data: {
                    ...this.state.data,
                    order: sortedColumn ? tempArray.slice(0, sortedColumn.index).concat(tempArray.slice(sortedColumn.index+1)) 
                            : this.state.data.order,
                    columns: this.state.data.columns.map(column => {
                        return column.name === item.name ? {
                            ...column,
                            visible: !column.visible
                        } : column;
                    })
                }
            })
        }
        else if (item.name in this.state.data.records[0]) {
            this.setState({
                data: {
                    ...this.state.data,
                    columns: this.state.data.columns.map(column => {
                        return column.name === item.name ? {
                            ...column,
                            visible: !column.visible
                        } : column;
                    })
                }
            })
        }
        else {
            //request here
        }
    }

    removeSorting () {
        this.setState({
            data: {
                ...this.state.data,
                order: []
            }
        })

        //request
    }

    moveColumn (dragIndex, hoverIndex) {
		let columns = this.state.data.columns.slice();
        let dragedColumn = columns[dragIndex];

        columns[dragIndex] = columns[hoverIndex];
        columns[hoverIndex] = dragedColumn;

		this.setState({
            data: {
                ...this.state.data,
                columns: columns
            }
        });
    }
    
    onItemsAmountChange (value) {
        this.setState({
            data: {
                ...this.state.data,
                items: value
            }
        });

        //request
    }

    handlePageClick (value) {
        this.setState({
            data: {
                ...this.state.data,
                page: value.selected + 1
            }
        });

        //request
    }

    render() {
        return (
        <Grid 
            saveGridState={() => this.saveGridState()}
            makeGridStateDefault={() => this.makeGridStateDefault()}
            data={this.state.data}
            onItemsAmountChange={(value) => this.onItemsAmountChange(value)}
            handlePageClick={(value) => this.handlePageClick(value)}
            handleColumnConfigClick={(item) => this.handleColumnConfigClick(item)}
            handleFilterToggle={(e) => this.handleFilterToggle(e)}
            handleSorting={(headerCell) => this.handleSorting(headerCell)}
            removeSorting={() => this.removeSorting()}
            filterToggled={this.state.filterToggled}
            moveColumn={(dragIndex, hoverIndex) => this.moveColumn(dragIndex, hoverIndex)}/>
        );
    }
}

export default GridUncontrolled;
