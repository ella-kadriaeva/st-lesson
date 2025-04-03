import React from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import "./Header.scss"
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
        <ul>
            <li><Link to="/">TestList</Link></li>
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