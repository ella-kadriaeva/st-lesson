import React from 'react'
import CartItem from '../CartItem/CartItem'
import { useDispatch } from 'react-redux'
import { removeAllProduct } from '@/store/features/cart/cartSlice';

const CartList = ({products}) => {
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, product) => acc += (product.price * product.count), 0)

  const handleRemoveAll = () => {
    dispatch(removeAllProduct())
  }

  return (
    <div className="cart-list">
      <h3 className="cart-list__title">Товары в корзине <span>{totalPrice} ₽</span></h3>
      <p><span className='cart__remove' onClick={handleRemoveAll}>Очистить корзину</span></p>
      <div className="cart-list__items">
          {
            products && products.map(product => <CartItem key={product.id} {...product} />)
          }
      </div>
  </div>
  )
}

export default CartList