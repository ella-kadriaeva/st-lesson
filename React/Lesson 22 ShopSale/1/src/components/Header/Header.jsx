import React, { useMemo } from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import "./Header.scss"
import { Link } from 'react-router'
import { useSelector } from 'react-redux'

const Header = ({toggleModal}) => {
  const cartItems = useSelector(state => state.cart.data);
  

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

  return (
    <header className='header'>
        <div className="container">
        <ul>
            <li><Link to="/">TestList</Link></li>
            {/* <li>{number}</li> */}
            <li>
            <div className='count'>
                <LuShoppingBag className='icon' onClick={toggleModal}/>
                <span>{count}</span>
            </div>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header