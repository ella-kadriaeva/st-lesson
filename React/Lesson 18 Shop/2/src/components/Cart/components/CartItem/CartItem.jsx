import React from 'react'
import { LuTrash2 } from 'react-icons/lu'
import { removeProductFromCart } from '@/store/features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({picture, title, price, cartId}) => {
  let dispatch = useDispatch()

  const handleRemoveProduct = (cartId) => {
    dispatch(removeProductFromCart(cartId))
  }

  return (
    <div className="item">
          <img src={picture} alt="" />
          <div className='item__info'>
            <h3 className='item__title'>{title}</h3>
            <p className='item__price'><span>{price} ₽</span></p>
          </div>

          <LuTrash2 onClick={() => handleRemoveProduct(cartId)}/>
      </div>
  )
}

export default CartItem