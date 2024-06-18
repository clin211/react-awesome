import React from 'react';
import { useImmerReducer } from 'use-immer';

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

function ImmutableUseImmer() {
    const [state, dispatch] = useImmerReducer(reducer, {
        count: 0,
        error: null,
    });
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

export default ImmutableUseImmer;
