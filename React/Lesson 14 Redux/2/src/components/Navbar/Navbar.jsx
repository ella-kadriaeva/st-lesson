import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = ({value}) => {
    // const { value } = useSelector(state => state)

  return (
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li>Cart: {value}</li>
        </ul>
    </nav>
  )
}

export default Navbar