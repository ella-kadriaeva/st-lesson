import React, { useState } from 'react'
import Todos from './components/Todos/Todos'

const App = () => {
  return (
    <div className='container'>
      <h2 className='title'>todos</h2>

      <Todos />
    </div>
  )
}

export default App