import { useState, useEffect } from 'react';

// 定义一个函数getSize，用于获取当前窗口的大小。
const getSize = () => {
    // 如果窗口宽度大于500，则返回'large'，否则返回'small'
    return window.innerWidth > 500 ? 'large' : 'small';
};

// 定义自定义Hook useWindowSize。
const useWindowSize = () => {
    // 使用useState Hook初始化窗口大小的状态变量size和相应的设置函数setSize。
    const [size, setSize] = useState(getSize());

    // 使用useEffect Hook添加一个副作用函数，该函数在组件挂载和更新时执行。
    useEffect(() => {
        // 在副作用函数内部，定义一个处理函数handler，用于设置窗口大小的状态。
        const handler = () => {
            setSize(getSize());
        };
        // 为窗口的resize事件添加处理函数handler。
        window.addEventListener('resize', handler);

        // 返回一个清理函数，在组件卸载前执行，用于移除窗口的resize事件监听器。
        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []); // 传入空数组作为依赖列表，表示这个副作用函数只在组件挂载时执行一次。

    // 返回当前窗口的大小。
    return size;
};

export default useWindowSize; // 导出自定义Hook useWindowSize。
