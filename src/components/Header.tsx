import { useState, KeyboardEvent } from 'react';

const Header = () => {
    const [title, setTitle] = useState('');

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // add todo
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                value={title}
                className="new-todo"
                placeholder="What needs to be done?"
                onChange={e => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
            />
        </header>
    );
};

export default Header;
