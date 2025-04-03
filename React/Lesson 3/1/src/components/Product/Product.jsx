import React from 'react'

const Product = ({title, image, price}) => {


  const handleAlertTitle = () => {
    alert(title)
  }

  return (
    <div className="item">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{price} $</p>

        <button onClick={handleAlertTitle}>ADD TO CART</button>
        {/* <button onClick={() => handleAlertTitle(title)}>ADD TO CART</button> */}
    </div>
  )
}

export default Product