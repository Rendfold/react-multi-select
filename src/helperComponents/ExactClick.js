import React, { Component } from 'react';

class ExactClick extends Component {
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
            Container = 'div',
            ...props
        } = this.props;

        return (
            <Container ref={container => this.container = container} {...props}>{children}</Container>
        );
    }
}

export default ExactClick;
