import logo from './logo.svg';
import Counter from './Counter';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Counter value={1} />
        </div>
    );
}

export default App;
