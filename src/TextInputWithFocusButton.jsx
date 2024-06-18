import React, { useRef } from 'react';

function TextInputWithFocusButton() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current`指向了真实的input元素
        inputEl.current.focus();
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default TextInputWithFocusButton;
