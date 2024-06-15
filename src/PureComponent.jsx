import React from 'react';

class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }

    updateNumber = () => {
        this.setState({ number: this.state.number }, () =>
            console.log('set stated number')
        );
    };

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

export default PureComponent;
