import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router'

const setActiveLink = ({ isActive }) => isActive ? 'navbar__item navbar__item-active' : 'navbar__item'

const Navbar = ({ categories }) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {
          categories && categories.map(item => <li key={item.id}><NavLink to={`/category/${item.id}`} className={setActiveLink}>{item.title}</NavLink></li>)
        }
      </ul>
    </nav>
  )
}

export default Navbar