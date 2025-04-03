import React from 'react'
import { LuTrash2 } from 'react-icons/lu'

const CartItem = ({picture, title, price}) => {
  return (
    <div className="item">
          <img src={picture} alt="" />
          <div className='item__info'>
          <h3 className='item__title'>{title}</h3>
          <p className='item__price'><span>{price} ₽</span></p>
          </div>

          <LuTrash2 />
      </div>
  )
}

export default CartItem