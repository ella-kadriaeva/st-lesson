import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Users from './pages/Users/Users'

const App = () => {
  return (
   <>
      <Navbar />
   
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/users' element={<Users />}/>
      </Routes>
   </>
  )
}

export default App