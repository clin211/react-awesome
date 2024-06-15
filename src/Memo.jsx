import React from 'react';

const Memo = React.memo(() => {
    const [number, setNumber] = React.useState(1);

    const updateNumber = () => {
        setNumber(prevNumber => prevNumber); // 不会触发重新渲染
    };

    console.log('render called');
    return (
        <div>
            <p>Number: {number}</p>
            <button onClick={updateNumber}>Update Number</button>
        </div>
    );
});

export default Memo;
