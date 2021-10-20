import { createSlice } from "@reduxjs/toolkit";
const counter=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:(state)=>{
            return state+1;
        },
        decrement:(state)=>{
            return state-1;
        },
        incrementAmount:(state,action)=>{
            return state+action.payload;
        },
        decrementAmount:(state,value)=>{
            return state+value;
        }
    }
})
export const {increment,decrement,incrementAmount,decrementAmount}=counter.actions;
export default counter.reducer;