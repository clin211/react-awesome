import React, { useState, useRef } from 'react';

function Unalterable() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>点击次数： {count} </p>
            <p>
                时间戳： <Time />
            </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

function Time() {
    const ref = useRef(new Date().getTime());
    console.log('🚀 ~ Time ~ ref:', ref.current);
    return <div>{ref.current}</div>;
}

export default Unalterable;
