import { useState } from 'react';
import styles from '../assets/styles/page.module.css';

function CssModuleStyles() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`${styles.container} ${isActive ? styles.active : ''}`}
            onClick={handleClick}>
            Click me to change color!
        </div>
    );
}

export default CssModuleStyles;
