import { useState } from 'react'

interface Props {
    todo: {
        completed: boolean;
        title: string;
    },
    editing: boolean;
    onToggle: () => void;
    onDestroy: () => void;
    onSave: (value: string) => void;
    onCancel: (e: KeyboardEvent) => void;
}

function TodoItem(props: Props) {
    const [editText, setEditText] = useState(props.todo.title)
    const handleEdit = () => {

    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === '27') {
            setEditText(props.todo.title);
            props.onCancel(event);
        } else if (event.code === '13') {
            handleSubmit(event);
        }
    }

    const handleSubmit = (event: KeyboardEvent) => {
        console.log('🚀 ~ handleSubmit ~ event:', event)
        const value = editText.trim();
        if (value) {
            props.onSave(value);
            setEditText(value);
        } else {
            props.onDestroy();
        }
    }
    return (
        <li className={`${props.todo.completed ? 'completed' : ''} ${props.editing ? 'editing' : ''}`}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={props.todo.completed}
                    onChange={props.onToggle}
                />
                <label onDoubleClick={handleEdit}>
                    {props.todo.title}
                </label>
                <button className="destroy" onClick={props.onDestroy} aria-label='Remove Todo' />
            </div>
            <input
                ref="editField"
                className="edit"
                value={editText}
                onBlur={handleSubmit}
                onChange={e => setEditText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </li>
    );
}

export default TodoItem