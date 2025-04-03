import React from 'react'
import { NavLink, Outlet } from 'react-router'

const setActiveLink = ({isActive}) => isActive ? "navbar__item navbar__item-active" : "navbar__item"

const Layout = () => {
  return (
    <>
    
        <header>
            <nav>
                <ul className="navbar">
                    <li><NavLink to="/" className={setActiveLink}>Home</NavLink></li>
                    <li><NavLink to="/about" className={setActiveLink}>About</NavLink></li>
                    <li><NavLink to="/posts" className={setActiveLink}>Posts</NavLink></li>
                </ul>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            Footer ...
        </footer>
    </>
  )
}

export default Layout