import { useState } from 'react';
import '../assets/styles/common.css';

function ClassStyles() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`container ${isActive ? 'active' : ''}`}
            onClick={handleClick}>
            Click me to change color!
        </div>
    );
}

export default ClassStyles;
