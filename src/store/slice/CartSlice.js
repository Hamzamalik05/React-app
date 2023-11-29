import { createSlice } from "@reduxjs/toolkit";


let INIT_SATATE = {
    cart:[],
    quantity:0
}

export const CartSlice = createSlice({
    name:"CART",
    initialState:INIT_SATATE,
    reducers:{
        
      AddToCart:(state,action)=>{
        console.log("Add to cart");
        state.cart.push(action.payload)
            state.quantity = state.quantity+1
      },

      deletetoCart:(state,action)=>{
             const RemoveIndex = state.cart.findIndex(item => item.id == action.payload)
             if(RemoveIndex !== -1){
                state.cart.splice(RemoveIndex,1)
                state.quantity = state.quantity-1
             }
      }


    }
})

const {reducer} = CartSlice
const {AddToCart,deletetoCart} = CartSlice.actions
export{
    AddToCart,deletetoCart,
    reducer as CartReducer
}