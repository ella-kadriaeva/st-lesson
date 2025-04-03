import React, { memo, useCallback } from 'react'
import { LuTrash2 } from 'react-icons/lu'
import { removeProductFromCart } from '@/store/features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/features/cart/cartSlice'

const CartItem = ({product}) => {
  let dispatch = useDispatch()

  const handleRemoveProduct = (id) => {
    console.log("handleRemoveProduct", id)
    dispatch(removeProductFromCart(id))
  }

   const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

  return (
    <div className="item">
          <img src={product.picture} alt="" />
          <div className='item__info'>
            <h3 className='item__title'>{product.title}</h3>
            <p className='item__price'><span>{product.count} x {product.count * product.salePrice} ₽</span></p>
            <div className='item__action'>
              <button className='btn btn-small' onClick={() => handleRemoveProduct(product.id)}>-</button>
              <span>{product.count}</span>
              <button className='btn btn-small' onClick={() => handleAddToCart(product)}>+</button>
            </div>
          </div>

          <LuTrash2 onClick={() => handleRemoveProduct(product.id)}/>
      </div>
  )
}

export default CartItem