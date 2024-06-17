import React, { useState } from 'react';

const UpdateObject = () => {
    const [person, setPerson] = useState({ name: 'clin', age: 18 });

    const handleClickUpdateAge = () => {
        const newPerson = { ...person }; // JSON.parse(JSON.stringify(person));
        newPerson.age = 20;
        setPerson(newPerson);
    };

    return (
        <div>
            current name: {person.name}, age: {person.age}
            <button onClick={handleClickUpdateAge}>update age</button>
        </div>
    );
};

export default UpdateObject;
