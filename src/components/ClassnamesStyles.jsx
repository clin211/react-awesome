import { useState } from 'react';
import classNames from 'classnames';

function ClassnamesStyles() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={classNames('container', { active: isActive })}
            onClick={handleClick}>
            Click me to change color!
        </div>
    );
}

export default ClassnamesStyles;
