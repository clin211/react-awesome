import { useState } from 'react';
import './todo.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const Todo = () => {
    const [selectAll, setSelectAll] = useState(false);
    return (
        <section className="todoapp">
            <Header />
            <main id="main" className="main">
                <div className="toggle-all-container">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                        defaultChecked={false}
                        checked={selectAll}
                        onChange={() => setSelectAll(!selectAll)}
                    />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                </div>
                <ul id="todo-list" className="todo-list">
                    {[].map(item => {
                        return <TodoItem key={''} todo={undefined} onSave={function (val: string): void {
                            throw new Error('Function not implemented.');
                        }} onDestroy={function (): void {
                            throw new Error('Function not implemented.');
                        }} onEdit={function (): void {
                            throw new Error('Function not implemented.');
                        }} onCancel={function (event: unknown): void {
                            throw new Error('Function not implemented.');
                        }} onToggle={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                    })}
                </ul>
            </main>
            <footer id="footer" className="footer">
                <span id="todo-count" className="todo-count">
                    <strong>4</strong> items left
                </span>
                <ul id="filters" className="filters">
                    <li>
                        <a className="selected" href="#/all">
                            All
                        </a>
                    </li>
                    <li>
                        <a className="selected" href="#/active">
                            Active
                        </a>
                    </li>
                    <li>
                        <a className="selected" href="#/completed">
                            Completed
                        </a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        </section>
    );
};

export default Todo;
