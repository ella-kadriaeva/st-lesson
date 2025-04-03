import React from 'react'

const Product = ({title, image, price, sale}) => {
  return (
    <div className="item">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p><span>{price} $</span> <span>{sale.toFixed(2)} $</span></p>
    </div>
  )
}

export default Product