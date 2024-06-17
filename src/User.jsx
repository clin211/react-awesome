import React, { useState } from 'react';

const User = () => {
    const [age, setAge] = useState(18);

    const handleClick = () => {
        // setAge(age + 1); // setAge((prev) => prev + 1);
        // setAge(age + 1); // setAge((prev) => prev + 1);
        // setAge(age + 1); // setAge((prev) => prev + 1);
        setAge(prevAge => prevAge + 1);
        setAge(prevAge => prevAge + 1);
        setAge(prevAge => prevAge + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>set age</button>
            <p>current age: {age}</p>
        </div>
    );
};

export default User;
