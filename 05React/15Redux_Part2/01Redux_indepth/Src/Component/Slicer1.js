 import { createSlice } from "@reduxjs/toolkit";


// Immer
const reactSlicer=createSlice({
    name:"slice1",
    initialState:{
        count:0
    },
    reducers:{
        Increment:(state)=>{state.count = state.count+1},                         //{type: 'slice1/Increment', payload: undefined}
        Decrement:(state)=>{state.count = state.count-1},                         //{type: 'slice1/Decrement', payload: undefined}
        Reset:(state)=>{state.count = 0},                                         //{type: 'slice1/Reset', payload: undefined}
        CustomIncreaser: (state,action)=>{state.count+=action.payload}            //{type: 'slice1/CustomIncreaser', payload: undefined}
    }
})

export const {Increment , Decrement , Reset, CustomIncreaser}=reactSlicer.actions;

export default reactSlicer.reducer;