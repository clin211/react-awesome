import React, { useContext } from 'react';

// 创建一个全局上下文对象
const ThemeContext = React.createContext('light');

function ComponentA() {
    // 使用useContext读取当前的主题
    const theme = useContext(ThemeContext);
    return (
        <div>
            ComponentA, the current theme is {theme}
            <ComponentD />
            <ComponentE />
        </div>
    );
}

function ComponentB() {
    // 使用useContext读取当前的主题
    const theme = useContext(ThemeContext);
    return <div>ComponentB, the current theme is {theme}</div>;
}

function ComponentC() {
    return <div>ComponentC</div>;
}

function ComponentD() {
    return <div>ComponentD</div>;
}

function ComponentE() {
    // 使用useContext读取当前的主题
    const theme = useContext(ThemeContext);
    return <div>ComponentE, the current theme is {theme}</div>;
}

function Context() {
    return (
        <ThemeContext.Provider value="dark">
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </ThemeContext.Provider>
    );
}

export default Context;
