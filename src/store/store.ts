import {configureStore} from "@reduxjs/toolkit";
import expenseSlice from './expenseSlice';

const store = configureStore({
    reducer: {
        expenses: expenseSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
