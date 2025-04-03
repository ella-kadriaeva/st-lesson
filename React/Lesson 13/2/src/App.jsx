import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Users from './pages/Users/Users'
import User from './pages/User/User'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './pages/Layout/Layout'
import LayoutDashboard from './pages/LayoutDashboard/LayoutDashboard'

const App = () => {
  return (
   <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/users/:userId' element={<User />}/>
        </Route>

        <Route path='/admin' element={<LayoutDashboard />}>
          <Route index element={<Dashboard />}/>
          <Route path='/admin/users' element={<Users />}/>
        </Route>
          
      </Routes>
   </>
  )
}

export default App