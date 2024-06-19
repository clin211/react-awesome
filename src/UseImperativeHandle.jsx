import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        sayHello() {
            alert('Hello from ChildComponent');
        },
    }));

    return <div>ChildComponent</div>;
});

function UseImperativeHandle() {
    const childRef = useRef();

    const handleClick = () => {
        childRef.current.sayHello();
    };

    return (
        <div>
            <ChildComponent ref={childRef} />
            <button onClick={handleClick}>Invoke Child Method</button>
        </div>
    );
}

export default UseImperativeHandle;
