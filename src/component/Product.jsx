import React, { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import ProductsCard from './ProductsCard'
import { getApi } from '../store/slice/FetchingApiSlice'
import { AddToCart } from '../store/slice/CartSlice'
const Product = () => {

    let {product,status} = useSelector((state)=>state.FetchingReducer)
       console.log(product);
      // console.log(selector);
      // console.log(product,status);  
    let dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getApi())
    },[])

     const AddToCartHandler = (item) => {
      alert('Added to cart')
      dispatch(AddToCart(item))
     }


  return (
    <>

              <div className="container">
                <div className="row">
                 {
                 product.map((item,i)=>(
                   <div className="col-3" key={i}>
                    <ProductsCard product={item} btn = {()=>{
                       AddToCartHandler(item)
                    }} />
                  </div>
                  ))}
                
                </div>
              </div>

    </>
  )
}

export default Product