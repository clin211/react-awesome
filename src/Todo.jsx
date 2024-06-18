import React, { useState, useEffect, useMemo } from 'react';

function Todo() {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    // 过滤userId不为1的数据
    const filterTodo = useMemo(
        () => todo.filter(item => item.userId === 1),
        [todo]
    );

    const fetchTodo = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodo(data);
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    return (
        <div>
            <h1>Todo</h1>
            <p>
                count: {count}{' '}
                <button onClick={() => setCount(count + 1)}>+</button>
            </p>
            {filterTodo.map((item, index) => (
                <div key={item.id} className="todo-item">
                    {index + 1}、{item.title}
                </div>
            ))}
        </div>
    );
}

export default Todo;
