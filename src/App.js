import { Component } from 'react';
import './App.css';

class Greeting extends Component {
    render() {
        return <h1>Greeting, {this.props.name}!</h1>;
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>hello world！！！</p>
            </header>
            <Greeting name="Newton" />
        </div>
    );
}

export default App;
