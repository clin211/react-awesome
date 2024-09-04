import { configureStore } from '@reduxjs/toolkit';
import counter from './reducers/counter';

// 创建 Redux store
const store = configureStore({
    reducer: {
        counter
    },
});

export default store
