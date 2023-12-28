import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count = 0
        },
        incrementByAmount:(state,action)=>{
            state.count += action.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = countSlice.actions
export default countSlice.reducer