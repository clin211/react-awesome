import { createSlice } from '@reduxjs/toolkit';

// 定义初始状态
const initialState = {
    count: 0,
};

// 创建一个 Redux slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment (state) {
            state.count += 1;
        },
        decrement (state) {
            state.count -= 1;
        },
        incrementIfOdd (state) {
            if (state.count % 2 !== 0) {
                state.count += 1;
            }
        },
    },
});

// 导出action creators
export const { increment, decrement, incrementIfOdd, incrementAsync } = counterSlice.actions;
// 导出reducer
export default counterSlice.reducer;
