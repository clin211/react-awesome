import logo from './logo.svg';
// import Counter from './Counter';
import ComponentDidMount from './ComponentDidMount';
import './App.css';
import ShallowCompare from './ShallowCompare';
import PureComponent from './PureComponent';
import Memo from './Memo';
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate';
import TodoApp from './Todo';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            {/* <Counter value={1} /> */}
            {/* <ComponentDidMount />
            <ShallowCompare /> */}
            {/* <PureComponent /> */}
            {/* <Memo /> */}
            {/* <GetSnapshotBeforeUpdate /> */}
            <TodoApp />
        </div>
    );
}

export default App;
