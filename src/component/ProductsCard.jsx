import React, { useEffect, useState } from 'react'

function getShortDescription(description, wordCount) {
  const words = description.split(" ");
  const shortDescription = words.slice(0, wordCount).join(" ");
  return shortDescription;
}


const ProductsCard = (props) => {
 const {tiitle,image,description,price} = props.product
 const shortdesc = getShortDescription(description,20)
 
 
 return (
    <>

      <div className="container">
        <div className="row">
        
        <div className="card mt-4 m-2" style={{width: "13rem" , height:"500px"}}>
  <img src={image} class="card-img-top mt-2 mx-3" alt="..." style={{width:"130px"}}/>
  <div className="card-body">
    <h5 className="card-title">{tiitle}</h5>

            <p className="card-text" style={{width:"179px"}}>{shortdesc}</p>
    <button href="#" className="btn btn-primary"onClick={props.btn}>Add to cart</button>
  </div>
</div>
         
        </div>
      </div>

    </>
  )
}
export default ProductsCard
