import React from 'react'
import CartItem from '../CartItem/CartItem'
import { useDispatch } from 'react-redux'
import { removeProductFromCart } from '../../../../store/features/cart/cartSlice'

const CartList = ({products}) => {
  // let dispatch= useDispatch()

  // const handleRemoveProduct = (productId) => {
  //   dispatch(removeProductFromCart(productId))
  // }

  return (
    <div className="cart-list">
      <h3 className="cart-list__title">Товары в корзине</h3>

      <div className="cart-list__items">
          {
            products && products.map(product => <CartItem 
                key={product.id} 
                picture={product.picture} 
                title={product.title} 
                price={product.price} 
                id={product.id}
            />)
          }
      </div>
  </div>
  )
}

export default CartList