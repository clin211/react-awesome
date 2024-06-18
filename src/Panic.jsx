import React, { useState } from 'react';

function Panic() {
    const [count, setCount] = useState('');

    return (
        <div>
            <h1 ref={count}>Panic</h1>
        </div>
    );
}

export default Panic;
