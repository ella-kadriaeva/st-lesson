import React from 'react'
import "./Navbar.scss"
import NavItem from './components/NavItem/NavItem'

const Navbar = ({data}) => {
    
  return (
    <nav className='navbar'>
        <ul>
            {
                data && data.map(link => <NavItem key={link.id} label={link.label} path={link.path}/>)
            }
        </ul>
      </nav>
  )
}

export default Navbar