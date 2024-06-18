import { useState, useCallback } from 'react';

function TodoItem({ todo, onDelete }) {
    console.log('TodoItem render:', todo.id);
    return (
        <div>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
}

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Learn useCallback' },
    ]);

    const handleDelete = useCallback(id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default TodoList;
