import { useState } from 'react';
import styled from 'styled-components';

// 定义一个带有样式的容器组件
const Container = styled.div`
    /* 根据 props.isActive 设置颜色 */
    color: ${props => (props.isActive ? 'red' : 'blue')};
    background-color: lightgray;
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s;
`;

const Button = styled.button`
    /* 根据 props.primary 设置按钮样式 */
    background: ${props => (props.$primary ? '#BF4F74' : 'white')};
    color: ${props => (props.$primary ? 'white' : '#BF4F74')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
`;

function StyledComponentsStyles() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <main>
            <Container isActive={isActive}>Click me to change color!</Container>
            <Button onClick={handleClick} $primary={isActive}>
                Primary
            </Button>
        </main>
    );
}

export default StyledComponentsStyles;
