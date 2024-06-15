const TodoApp = props => {
    const todos = [
        { id: 1, text: 'Learn React', completed: true },
        { id: 2, text: 'Build a ToDo App', completed: false },
    ];

    // 在没有 TODO 数据的时候显示
    // if (todos.length === 0) {
    //     return <p>No tasks available.</p>;
    // }

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text} {todo.completed ? '(Completed)' : '(Pending)'}
                </li>
            ))}
        </ul>
    );
};

export default TodoApp;
