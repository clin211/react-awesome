/* @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    color: ${props => (props.isActive ? 'red' : 'blue')};
    background-color: lightgray;
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s;
`;

function EmotionStyledStyles() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <Container isActive={isActive} onClick={handleClick}>
            Click me to change color!
        </Container>
    );
}

export default EmotionStyledStyles;
