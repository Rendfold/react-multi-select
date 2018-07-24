import React, { Component } from 'react';
import Grid from './Grid';

class Test extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: {
                columns: [
                    {
                        name: 'id',
                        caption: "Id",
                        type: "integer",
                        visible: true,
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
                order: [
                ],
                total: 1,
            },
            filterToggled: false,

        };
    }

    handleFilterToggle (e) {
        e.stopPropagation();
        this.setState({
            filterToggled: !this.state.filterToggled
        })

        this.state.data.order
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

            let sortedColumnIndex = this.state.data.order.findIndex((sortedItem) => {
                return headerCell.name in sortedItem;
            });

            let sortedColumn = this.state.data.order.find((sortedItem) => {
                return headerCell.name in sortedItem;
            });

            if (sortedColumn) {
                if (sortedColumn[headerCell.name] === 'ASC'){
                    tempArray[sortedColumnIndex][headerCell.name] = 'DESC';

                    this.setState({
                        data: {
                            ...this.state.data,
                            order: tempArray.concat(tempArray.splice(sortedColumnIndex, 1)[0])
                        }
                    })
                }
                else if (sortedColumn[headerCell.name] === 'DESC') {
                    this.setState({
                        data: {
                            ...this.state.data,
                            order: tempArray.slice(0, sortedColumnIndex).concat(tempArray.slice(sortedColumnIndex+1))
                        }
                    })
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
        else if (item.name in this.state.data.records[0]){
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
    }

    render() {
        return (
        <Grid 
            data={this.state.data}
            handleColumnConfigClick={(item) => this.handleColumnConfigClick(item)}
            handleFilterToggle={(e) => this.handleFilterToggle(e)}
            handleSorting={(headerCell) => this.handleSorting(headerCell)}
            removeSorting={() => this.removeSorting()}
            filterToggled={this.state.filterToggled} />
        );
    }
}

export default Test;
