import React from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import "./Header.scss"
import { Link } from 'react-router'
import { useSelector } from 'react-redux'

const Header = ({toggleModal}) => {
  const count = useSelector(state => state.cart.data.length)
  return (
    <header className='header'>
        <div className="container">
        <ul>
            <li><Link to="/">TestList</Link></li>
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