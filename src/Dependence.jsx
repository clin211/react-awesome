import React, { useState, useCallback } from 'react';

function Dependence() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = useCallback(
        text => {
            const newTodo = { id: Date.now(), text };
            setTodos(prevTodos => [...prevTodos, newTodo]);
        },
        [todos] // 这里是问题所在，todos的依赖导致这个useCallback几乎失去了其作用
    );

    return (
        <div>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={() => handleAddTodo(inputValue)}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dependence;
