import React from 'react'

const NavItem = ({label, path}) => {
  return (
    <li><a href={path}>{label}</a></li>
  )
}

export default NavItem