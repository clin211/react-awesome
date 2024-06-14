import { Component } from 'react';
import './App.css';

class Greeting extends Component {
    render() {
        return <h1>Greeting, {this.props.name}!</h1>;
    }
}

function Profile() {
    return (
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/250px-GodfreyKneller-IsaacNewton-1689.jpg"
            alt="Katherine Johnson"
        />
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>hello world！！！</p>
            </header>
            <Greeting name="Newton" />
            <Profile />
        </div>
    );
}

export default App;
