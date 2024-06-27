import React, { useState } from 'react';

function DynamicStyles() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const divStyle = {
        color: isActive ? 'red' : 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        cursor: 'pointer',
        userSelect: 'none',
    };

    return (
        <div style={divStyle} onClick={handleClick}>
            Click me to change color!
        </div>
    );
}

export default DynamicStyles;
