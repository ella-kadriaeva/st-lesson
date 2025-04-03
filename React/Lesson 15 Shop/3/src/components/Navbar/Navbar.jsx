import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li><a href="" className='navbar__item navbar__item-active'>Рюкзаки</a></li>
            <li><a href="" className='navbar__item'>Футболки</a></li>
            <li><a href="" className='navbar__item'>Рубашки</a></li>
        </ul>
    </nav>
  )
}

export default Navbar