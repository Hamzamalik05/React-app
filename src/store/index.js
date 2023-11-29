import { configureStore } from "@reduxjs/toolkit";
import { FetchingReducer } from "./slice/FetchingApiSlice";
import { CartReducer } from "./slice/CartSlice";

export const store = configureStore({
    reducer:{
        FetchingReducer:FetchingReducer,
        CartReducer:CartReducer     
    },
})