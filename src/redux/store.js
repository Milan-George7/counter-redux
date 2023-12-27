import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";


export const store = configureStore({
    reducer:{
        counterReducer:countSlice
    }
})