import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            state.count += 1;
            return state;
        case 'decrement':
            state.count -= 1;
            return state;
        case 'setError':
            return { ...state, error: action.payload };
        default:
            throw new Error();
    }
}

function Immutable() {
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

export default Immutable;
