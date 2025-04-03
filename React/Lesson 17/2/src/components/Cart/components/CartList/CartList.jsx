import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartList = ({products}) => {
  return (
    <div className="cart-list">
      <h3 className="cart-list__title">Товары в корзине</h3>

      <div className="cart-list__items">
        {
          products && products.map(product => <CartItem key={product.id} picture={product.picture} title={product.title} price={product.price} />)
        }
          
      </div>
  </div>
  )
}

export default CartList