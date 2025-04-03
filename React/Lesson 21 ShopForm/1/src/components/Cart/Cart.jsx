import React, { useState } from 'react'
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
    
    const [values, setValues] = useState({
            username: "",
            phone: "",
            address: ""
    })

    const handleChangeInput = (e) => {
        setValues(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handeSubmit = (e) => {
        e.preventDefault();

        console.log(values)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let data = Object.fromEntries(formData);

        console.log(data)
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
                <div className="form">
                    <h2 className="form__title">Оформить заказ</h2>

                    <form className="form-content" onSubmit={handeSubmit}>
                        <div className='form__item'>
                            <input type="text" onChange={handleChangeInput} placeholder='Ваше имя' name='username' className='form-control' autoComplete='off'/>
                        </div>
                        <div className='form__item'>
                            <input type="text" onChange={handleChangeInput} placeholder='Телефон' name='phone' className='form-control' autoComplete='off'/>
                        </div>
                        <div className='form__item'>
                            <input type="text" onChange={handleChangeInput} placeholder='Адрес' name='address' className='form-control' autoComplete='off'/>
                        </div>

                        <button className='btn btn-black btn-text-white btn-large btn-radius'>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart