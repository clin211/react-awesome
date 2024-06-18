import React, { useRef } from 'react';

function NotRerender() {
    const count = useRef(0);

    const setCount = () => {
        count.current += 1;
        console.log('🚀 ~ NotRerender ~ count:', count.current);
    };

    return (
        <div>
            NotRerender {count.current}
            <button onClick={setCount}>set count</button>{' '}
        </div>
    );
}

export default NotRerender;
