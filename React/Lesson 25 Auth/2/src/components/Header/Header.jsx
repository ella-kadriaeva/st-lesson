import React, { useMemo } from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import "./Header.scss"
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { initUser } from '@/store/features/user/userSlice'

const Header = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.data);
  const user = useSelector(state => state.user.user);


  const count = useMemo(() => cartItems.reduce((acc, item) => acc + item.count, 0), [cartItems]);

  // const num = () => {
  //   console.log("num")
  //   let result = 0;

  //   for(let i = 0; i < 1000000000; i++) {
  //     result += i;
  //   }

  //   return result;
  // }

  // let number = num();


  // const num = useMemo(() => {
  //   console.log("num")
  //   let result = 0;

  //   for(let i = 0; i < 1000000000; i++) {
  //     result += i;
  //   }

  //   return result;
  // }, [cartItems]);

  // let number = num;

  const handleExit = () => {
    dispatch(initUser(null))
    navigate("/signin")
  }

  return (
    <header className='header'>
      <div className="container">
        <ul>
          <li><Link to="/" className='logo'>TestList</Link></li>

          <ul>
            {
              user 
              ?<>
              <li>{user.firstname}</li>
              <li><button onClick={handleExit}>Logout</button></li>
              </> 
              : 
                <>
                  <li><Link to="/signin">Войти</Link></li>
                  <li><Link to="/signup">Регистрация</Link></li>
                </>
            }
            
            <li>
              <div className='count'>
                <LuShoppingBag className='icon' onClick={toggleModal} />
                <span>{count}</span>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </header>
  )
}

export default Header