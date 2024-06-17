import React, { useState, useRef, useEffect } from 'react';

function ClosureTrap() {
    const [count, setCount] = useState(0);
    // 用于存储count的引用，它的值会随count变化而变化且不会更新UI
    const countRef = useRef(count);

    const handleAlert = () => {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    };

    // 当count变化时，更新countRef
    useEffect(() => {
        countRef.current = count;
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={handleAlert}>Show alert</button>
        </div>
    );
}

export default ClosureTrap;
