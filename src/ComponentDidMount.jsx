import React from 'react';

export default class ComponentDidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    componentDidMount() {
        this.setState({
            counter: 10,
        });
    }
    render() {
        return <div className="counter">counter值: {this.state.counter}</div>;
    }
}
