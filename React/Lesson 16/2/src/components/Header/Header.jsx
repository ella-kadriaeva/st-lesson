import React from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import "./Header.scss"

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
        <ul>
            <li><a href="">TestList</a></li>
            <li>
            <div className='count'>
                <LuShoppingBag className='icon'/>
                <span>3</span>
            </div>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header