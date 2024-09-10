import { FC, useState, KeyboardEvent } from 'react';

const TodoItem: FC<ITodoItemProps> = ({
    todo,
    editing,
    onToggle,
    onEdit,
    onDestroy,
}) => {
    const [editText, setEditText] = useState(todo.title);

    const handleSubmit = () => { };

    const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSubmit();
    };

    return (
        <li className="completed">
            {!editing && (
                <div className=" view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        defaultChecked={false}
                        onChange={onToggle}
                        aria-label="Mark item as complete"
                    />
                    <label onDoubleClick={onEdit}>{todo.title}</label>
                    <button
                        className="destroy"
                        onClick={onDestroy}
                        aria-label="Delete item"
                    />
                </div>
            )}
            {editing && (
                <input
                    className="edit"
                    value={editText}
                    aria-label="Edit item"
                    onBlur={handleSubmit}
                    onKeyDown={handleKeydown}
                    onChange={e => setEditText(e.target.value)}
                />
            )}
        </li>
    );
};

export default TodoItem;
