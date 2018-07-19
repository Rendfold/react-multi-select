import React, { Component } from 'react';

class ExactClick extends React.Component {
    container;

    componentDidMount() {
        this.container.addEventListener('click', (e) => {
            if (e.target === this.container) {
                this.props.onClick();
            }
        });
    }

    render() {
        let {
            onClick,
            children,
            ...props
        } = this.props;

        return (
            <div ref={container => this.container = container} {...props}>{children}</div>
        );
    }
}

export default ExactClick;