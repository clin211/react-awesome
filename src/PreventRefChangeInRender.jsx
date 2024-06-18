import React, { useState, useRef } from 'react';

function PreventRefChangeInRender() {
    const [count, setCount] = useState(0);
    const ref = useRef(0);
    ref.current++;

    const handleOnSetCount = () => {
        setCount(count + 1);
        console.log('🚀 ~ PreventRefChangeInRender ~ count:', ref.current);
    };
    return (
        <div>
            PreventRefChangeInRender
            <p>current count:{count}</p>
            <button onClick={handleOnSetCount}>+</button>
        </div>
    );
}

export default PreventRefChangeInRender;
