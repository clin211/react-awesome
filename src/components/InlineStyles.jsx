import React from 'react';

function InlineStyles() {
    const divStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
    };

    return <div style={divStyle}>Hello, World!</div>;
}

export default InlineStyles;
