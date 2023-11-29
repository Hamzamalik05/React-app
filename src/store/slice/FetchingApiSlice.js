import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { statuses } from "../statuses";


let INITIAL_STATE = {
       product : [],
       status:statuses
}

export const FetchingApiSlice = createSlice({
    name:"FETCHING",
    initialState:INITIAL_STATE,
    extraReducers:(builder)=>{
        builder.addCase(getApi.pending,(state,action)=>{
            state.status = statuses.GET_PRODUCT
        }),
        
        builder.addCase (getApi.fulfilled,(state,action)=>{
             state.status = statuses.GET_SUCCESS
             state.product = action.payload
        })
        
        builder.addCase (getApi.rejected,(state,action)=>{
            state.status = statuses.GET_FAILED
        })
    }
    
})


const getApi = createAsyncThunk("fetch/product",async()=>{
     let response = await axios.get('https://fakestoreapi.com/products')
     let data = response.data 
     return data   
})



const {reducer} = FetchingApiSlice
export{
    reducer as FetchingReducer,
    getApi
}
