import React from 'react'
import { LuX } from 'react-icons/lu'
import { useSelector } from 'react-redux'
import CartList from './components/CartList/CartList'
import { useNavigate } from 'react-router'

const Cart = ({ toggleModal }) => {
    const navigate = useNavigate()

    let cart = useSelector(state => state.cart.data)

    const goBack = () => {
        navigate("/category/all")
        toggleModal();
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <h2 className='cart__title'>Корзина</h2>

                <LuX onClick={toggleModal} />
            </div>

            <div className="cart-content">
                {
                    cart.length > 0
                        ? <CartList products={cart}/>
                        : <>
                            <p className='cart__empty'>Пока что вы ничего не добавили в корзину.</p>
                            <button className='btn btn-black btn-text-white btn-large btn-radius' onClick={goBack}>Перейти к выбору</button>
                        </>
                }

             
            </div>

            <div className="cart-footer">
                <span className='cart__remove'>Очистить корзину</span>
            </div>
        </div>
    )
}

export default Cart