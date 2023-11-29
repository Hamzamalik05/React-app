import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

 let {quantity} = useSelector((state)=>state.CartReducer)

  return (
    <>
     <header className='bg-dark text-white'>
     <div className="container">
        <div className="row align-item-center">
            <div className="col-3 mt-2">
            <h3>LOGO</h3>
            </div>
              <div className="col-6 mt-2">
                <ul className='d-flex list-unstyled justify-content-center'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/cart'>Cart</NavLink>
                </ul>
              </div>
            <div className="col-3 mt-2 shop-cart">
                <FaShoppingCart />
                <span>{quantity}</span>
            </div>
        </div>
     </div>
     </header>
    </>
  )
}

export default Navbar