import React from 'react'
import { NavLink } from 'react-router';

const setActiveLink = ({isActive}) => isActive ? "navbar__item navbar__item-active" : "navbar__item";

const Navbar = () => {
  return (
    <nav>
        <ul className="navbar">
            <li><NavLink to="/" className={setActiveLink}>Home</NavLink></li>
            <li><NavLink to="/about" className={setActiveLink}>About</NavLink></li>
            <li><NavLink to="/users" className={setActiveLink}>Users</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar