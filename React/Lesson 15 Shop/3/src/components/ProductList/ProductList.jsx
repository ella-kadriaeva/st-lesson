import React from 'react'
import { LuShoppingBag } from 'react-icons/lu'

const ProductList = () => {
  return (
    <div className="product-list">
        <div className="product-item">
            <LuShoppingBag className='icon'/>

            <div className="product-picture">
                <img src="https://shorturl.at/IhQ8i" alt="" />
            </div>

            <div className="product-info">
                <h2 className='product-title'>Рюкзак Louis Vuitton Discovery</h2>
                <span className='product-price'>150 000 ₽</span>
            </div>
        </div>
        </div>
  )
}

export default ProductList