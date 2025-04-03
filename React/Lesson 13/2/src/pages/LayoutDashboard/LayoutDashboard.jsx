import React from 'react'
import { NavLink, Outlet } from 'react-router'

const LayoutDashboard = () => {
  return (
    <main className='dashboard'>
        <div className="aside">
            <nav>
                <ul>
                    <li><NavLink to="/admin">Dashboard</NavLink></li>
                    <li><NavLink to="/admin/users">Users</NavLink></li>
                    <li><NavLink to="/admin/form">Form</NavLink></li>
                </ul>
            </nav>
        </div>
    
        <div className='content'>
            <Outlet />
        </div>
    </main>
  )
}

export default LayoutDashboard