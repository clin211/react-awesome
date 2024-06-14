import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            prevCount: 0,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.value !== state.prevCount) {
            return {
                count: props.value,
                prevCount: props.value,
            };
        }
        return null;
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}
