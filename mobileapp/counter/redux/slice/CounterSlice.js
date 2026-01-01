import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice ({
    name: 'counter',
    initialState: {value:0},
    reducers: {
        increment: (state)=>{state.value = state +1},
        decrement: (state)=>{state.value = state -1},
        reset: (state)=> {state.value=0}
    }
})


export default CounterSlice.reducer
export const {increment,decrement,reset}= CounterSlice.actions