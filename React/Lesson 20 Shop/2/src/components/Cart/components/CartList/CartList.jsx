import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartList = ({products}) => {
  const totalPrice = products.reduce((acc, product) => acc += (product.price * product.count), 0)

  return (
    <div className="cart-list">
      <h3 className="cart-list__title">Товары в корзине <span>{totalPrice} ₽</span></h3>

      <div className="cart-list__items">
          {
            products && products.map(product => <CartItem key={product.id} {...product} />)
          }
      </div>
  </div>
  )
}

export default CartList