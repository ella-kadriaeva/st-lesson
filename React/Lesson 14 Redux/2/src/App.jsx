import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Parent from './components/Parent/Parent';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  // const { value } = useSelector(state => state)

  const [value, setValue] = useState(0)

  const increment = () => {
    setValue(prev => prev + 1)
  }

  return (
    <div>
      <Navbar value={value}/>
      
      <main>
        <Parent increment={increment}/>
      </main>
    </div>
  )
}

export default App