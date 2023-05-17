import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterState = {
    value: number;
}


const initialState = {
    value: 0,
} as CounterState;


export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    }

});

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset
} =counter.actions;

export default counter.reducer;