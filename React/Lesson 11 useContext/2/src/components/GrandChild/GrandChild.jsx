import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

const GrandChild = () => {
  const { theme } = useContext(ThemeContext)

  return <h2>Current theme: {theme}</h2>
}

export default GrandChild