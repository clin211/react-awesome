import React, { useReducer } from 'react';

// 定义 reducer 函数
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'setError':
            return { ...state, error: action.payload };
        default:
            throw new Error();
    }
}

// 计数器组件
export default function Reducer() {
    // 使用 useReducer 钩子初始化状态和 dispatch 函数
    const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

    return (
        <div>
            <p>Count: {state.count}</p>
            {state.error && <p>Error: {state.error}</p>}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button
                onClick={() =>
                    dispatch({
                        type: 'setError',
                        payload: 'Something went wrong',
                    })
                }>
                Set Error
            </button>
        </div>
    );
}
