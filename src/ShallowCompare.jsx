import React, { Component } from 'react';

class ShallowCompare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }

    updateNumber = () => {
        this.setState({ number: this.state.number }, () => {
            console.log('updated state:', this.state);
        });
    };

    componentDidMount() {
        console.log('updated number');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 仅当 state 中的 number 改变时才重新渲染组件
        return nextState.number !== this.state.number;
    }

    render() {
        console.log('render called');
        return (
            <div>
                <p>Number: {this.state.number}</p>
                <button onClick={this.updateNumber}>Update Number</button>
            </div>
        );
    }
}

export default ShallowCompare;
