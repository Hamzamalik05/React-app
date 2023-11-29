import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetoCart } from '../store/slice/CartSlice';



const Cart = () => {
  
  let {cart} = useSelector((state)=>state.CartReducer)
  console.log("sel",cart);
   let dispatch = useDispatch()
  const deleteCart =(item)=>{
     dispatch(deletetoCart(item))            
  }

  // let disptach = useDispatch()
  
  return (
    <>
      <div className="container">
        <div className="row">
        {
          cart.map((item,i)=>(
            <div className="col-3 mt-3" key={i}>
              <div class="card p-2" style={{ width: "13rem" }}>
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.description}</p>
                  <a href="#" class="btn btn-primary"onClick={()=>deleteCart(item.id)}>delete</a>
                </div>
              </div>
            </div>
          ))
        } 
        </div>
      </div>

    </>
  )
}

export default Cart
