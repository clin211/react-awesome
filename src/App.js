import { Component } from 'react';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import JSXNestedChildren from './JSXNestedChildren';
import Render, { LargeComponent, SmallComponent } from './Render';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
import User from './User';
import ClosureTrap from './ClosureTrap';
import UpdateObject from './UpdateObject';
import Article from './Article';
import Context from './Context';
import Reducer from './Reducer';
import Immutable from './Immutable';
import ImmutableUseImmer from './ImmutableUseImmer';
import Unalterable from './Unalterable';
import NotRerender from './NotRerender';
import PreventRefChangeInRender from './PreventRefChangeInRender';
import Panic from './Panic';
import Todo from './Todo';
import TodoList from './TodoList';
import UseImperativeHandle from './UseImperativeHandle';

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
    const size = useWindowSize();
    return (
        <div className="App">
            <header className="App-header">
                <p>hello world！！！</p>
            </header>
            {/* <Greeting name="Newton" />
            <Profile />
            <h3>Class Component</h3>
            <ClassComponent />
            <h3>Function Component</h3>
            <FunctionComponent />
            <h3>JSX Nested Children</h3>
            <JSXNestedChildren />
            <h3>render</h3>
            <Render />
            <h3>
                window size: {size}
                {size === 'small' ? <SmallComponent /> : <LargeComponent />}
            </h3>

            {/* <User />
            <ClosureTrap />
            <h3>Update Object</h3>
            <UpdateObject />
            {<Article id="3" />}
            <UpdateObject />
            <h3>Context</h3>
            <Context />
            <h3>Reducer</h3>
            <Reducer />
            <h3>Immutable</h3>
            <Immutable />
            <h3>use immer</h3>
            <ImmutableUseImmer />
            <h3>unalterable</h3>
            <Unalterable />
            <h3>Not Rerender</h3>
            <NotRerender />
            <h3>Prevent Ref Change In Render</h3>
            <PreventRefChangeInRender />
            <h3>Panic</h3>
            <Panic />
            <Todo />
            <TodoList />*/}
            <UseImperativeHandle />
        </div>
    );
}

export default App;
