import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'

const Layout = () => {
  return (
    <>
        <header>
            <Navbar />
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